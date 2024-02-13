import { useCallback, useEffect } from 'react';
import { RTE, Input, Button, Select } from '../index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import service from '../../appwrite/configuration';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//post will recieve all about content something like that
function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post?.title || '',
        status: post ? post.status || 'active' : 'active',
        content: post ? post.content || '' : '',
        slug: post ? post.$id || '' : '', // method  to give unique id
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if (post) {
      /* In this block, the component checks if the post object is truthy, indicating that it's
     an existing post being edited rather than a new post being created. If post exists,
      it means the form should be pre-filled with 
      the details of the existing post, and when the form is 
      submitted, it should update the existing post instead of
       creating a new one.  */

      const file = data.image[0]
        ? await service.createFile(data.image[0])
        : null;
      if (file) {
        // file truthy means image is uploaded successfully then remove previous image
        await service.deletefile(post.featuredimage); // it recieves from post
        /* You're correct that the deleteFile function in the appwriteService is
               expected to take the fileId as a parameter, not the featuredImage.

             If the goal is to delete the featuredImage associated with the post,
              then the correct approach would be to pass the featuredImage property 
              from the post object, which presumably contains the ID of the image file
               to be deleted. */
      }
      const upDatePost = await service.updatePost(
        post.$id,
        /* post.$id is the ID of the post to be updated. It 
 is assumed that post is an object representing
  an existing post, 
  and $id is a property of that object containing
its unique identifier.  */
        {
          ...data,
          // $id is simply used to give unique id wherever you want
          // in createfile we stored in db passed image in data
          // here we are updating in post that image
          featuredimage: file ? file.$id : null, // here we overwrite with new file which is uploaded
          /*  featuredImage: file ? file.$id : undefined sets the featuredImage
               property of the post to either the ID of the uploaded file (file.$id) if a 
               file was successfully uploaded (file is truthy), or undefined if no file was
                uploaded or if the upload failed. This condition (file ? file.$id :
                undefined)  we are overwritting the image with given specific 
                featuredimage with specific  file.$id will have stored in appwrite 
                */
        },
      );
      if (upDatePost) {
        // force full navigation after updation on specific route
        navigate(`/post/${upDatePost.$id}`);
        /*
              
              Imagining the Route: When this navigation happens, it's typically the responsibility of the routing library (e.g., React Router) to update the URL and render the appropriate component associated with the new route. In this case, it's navigating to a route that represents a specific post, with the post's ID (dbPost.$id) appended to the URL.

For example, if the dbPost.$id is "12345", then navigating to /post/12345 would imply that there's a route defined in the application that maps to this URL pattern. This route might be associated with a component responsible for displaying the details of a specific post, where the post ID is used to fetch the post data and render it on the page.

Route Handling: In the application's routing configuration (typically done in the main component, like App.js in React), there would be a route definition that specifies how to handle requests to /post/:postId. The :postId part is a dynamic parameter that matches any post ID in the URL.

For example:

javascript
Copy code
<Route path="/post/:postId" component={PostDetailComponent} />
Here, PostDetailComponent is a component responsible for rendering the details of a specific post. It receives the post ID as a prop, allowing it to fetch the post data associated with that ID and display it on the page.

Overall, navigating to /post/${dbPost.$id} implies moving to a route associated with displaying the details of a specific post, with the post ID determining which post's details should be shown.
*/
      }
    }
    // in else case we do not have post here we explicitly created post
    else {
      // first we need to upload file in appwrite
      const file = data.image[0]
        ? await service.createFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id; // we can add file.$id in data.featuredimage
        data.featuredimage = fileId; // here we added property of featured image in data and createpost expecting a featured image so that is whay we added to data of the form by giving uploaded image

        const dbpost = await service.createPost({
          ...data,
          usrid: userData.$id,
        }); // data(form )  will not provide userid so that is why i took from Store this userData.$id extract from redux store
        // to ensure the user wants to make new post is already loged in we have to pass userid because createpost taking as parameter userid
        if (dbpost) {
          // if post is successfully created
          navigate(`/post/${dbpost.$id}`); // forcefully navigate to specified route where new post has been created
        }
      }
    }
  };

  const slugTransform = useCallback((val) => {
    if (val && typeof val === 'string')
      return (
        val
          .trim()
          .toLowerCase()
          .replace(/\s/g, '-')
          // negate waly reh jayen gy baqi sb ko dash men convert kardo
          .replace(/[^a-zA-Z\d\s]+/g, '-')
      );
    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((val, { name }) => {
      // parameters are set according to syntax of the watch method
      // we saw in documentation that we can provide hard coded value and wacth() like this but this will watch all field
      // val.title which comes with post it means we want watch title of ----> title input
      // each time when useEffect runs new value enters in
      // in input field or subscribed in input field it starts consuming memory cpu so one and so forth
      // so that is why we unsubscirbed this to prevent from memory breaches
      // long story short this service of the react hook form takes memory
      console.log(val, name);
      if (name === 'title') {
        //name of the input field is title
        // watch method of the react hook form  watches the title input field
        // resultantly it will transform that value into slug and set to slug field as well
        // this set value will pick transforem values one by one from title input which are changed by transformed method
        setValue('slug', slugTransform(val.title, { shouldValidate: true })); //----->???
        // values will set into slug field from hare after converting
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, setValue, slugTransform]); // ----> ??
  PostForm.propTypes = {
    post: PropTypes.any, // Define propTypes for the 'post' prop
  };

  return (
    /*  register Function: The register function is typically 
   obtained by calling the useForm hook provided by the react-hook-form library. This function is responsible
    for registering the input field within the form, handling

   <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
Therefore, specifying "title" as the name of the
 input field is important for accurately identifying and
 accessing the data associated with this particular 
 input field within the context of your form.
     its state, and performing validation
     ,,,,,,,,,,,,,,,.......................
     it mean to say that by implementing required :true we could not left input filed empty 
     answer ---> yes correct
   */
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register('title', { required: true })}
        />
        {/* In summary, "slug" is used
                 as the identifier for a specific input field within the form. It allows
                 you to update and access the value of
                  this field in the form data structure using react-hook-form. */}
        {/* each time we entered value in field onInput function triggered and functions which are written also runs of the onInput also runs */}
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) => {
            // here slug transform  set tageted values which are set by watch method and converted by slugtransform method because we did not putting values in this field explicitly

            setValue('slug', slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues('content')}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          // !post then chose image otherwise update the image
          {...register('image', { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getfilepreview(post.featuredimage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={['active', 'inactive']}
          label="Status"
          className="mb-4"
          {...register('status', { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? 'bg-green-500' : undefined}
          className="w-full"
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}
// at line 187 we do not need to pass ref to child component it will pass implicitly with in ...register
// name will pass and soo much things
export default PostForm;
/* 
In essence, while $id serves as the primary 
identifier for the post, featuredImage is used 
specifically to refer to the ID of the image associated with the post's 
feature image. It's a design decision
 based on the structure and requirements of the application
-------------<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>-------------

register("title", { required: true }): This function call returns an object with properties that are necessary for managing the state and validation of the input field. These properties might include things like ref, name, onChange, onBlur, etc., depending on what the register function provides.

{...register("title", { required: true })}: By using the spread operator, you're effectively taking all the properties from the object returned by register("title", { required: true }) and spreading them as separate props to the Input component.

For example, if the register function returns an object like this:

javascript
Copy code
{
    ref: someRef,
    name: "title",
    onChange: handleChange,
    onBlur: handleBlur
}
Using the spread operator will result in passing these properties individually to the Input component:

jsx
Copy code
<Input
    label="Title:"
    placeholder="Title"
    className="mb-4"
    ref={someRef}
    name="title"
    onChange={handleChange}
    onBlur={handleBlur}
/>
This allows
 the Input component to receive these props 
 and handle them accordingly, which is crucial 
 for integrating it with libraries like react-hook-form.


--------<<<<<<<<<<<<<<>>>>>>>>>>>>------------

When the user types into the input 
field, the onChange event handler internally 
managed by react-hook-form updates
 the form state with the new value of the input field.
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
When the form is submitted, handleSubmit calls the onSubmit function, passing the form data as an argument.


*/
