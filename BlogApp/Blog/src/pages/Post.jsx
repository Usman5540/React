import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from '../Components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import service from '../appwrite/configuration';
export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams(); // for dynamic url
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);
  // this will fetch all user data from store for specific user
  const isAuthor = post && userData ? post.userId === userData.$id : false; //--->???
  // here in above line we are matching the id which we get from db and id which is in the redux Store for one user
  console.log(post.userId);
  useEffect(() => {
    if (slug) {
      // we passed hare dynamic url after getting the post at that dynamic url which will must come with all thing
      //which we used at the time of creating post includin status ,title ,userid so one and os forth
      service.getonePost(slug).then((post) => {
        if (post) setPost(post);
        else navigate('/'); //---->?
      });
    } else navigate('/');
  }, [slug, navigate]);
  //here two actions being performed  one deleting post itself and second one is delete image from db which associated with
  // with that post
  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deletefile(post.featuredImage);
        navigate('/');
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={service.getfilepreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                {/* same is params in mongo */}
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
/* 
line no 16
useParams() is a React Router hook that is used to access parameters in the URL.
 In this case, slug is a parameter extracted from the URL. 
It's often used in scenarios where you want to access dynamic
 segments of the URL to fetch specific data related to that segment.

For example, if your URL is example.com/posts/:slug, and you navigate to example.com/posts/my-post,
 slug will be equal to "my-post".

On the other hand, post.userId is accessing a property userId of the post object. 
This suggests that post is an object representing a post fetched from some data source (probably an API),
 and it contains information including the userId.


*/
