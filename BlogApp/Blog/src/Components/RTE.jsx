import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import propTypes from 'prop-types';
export default function RTE({ name, control, label, defaultValue = '' }) {
  // which one will use this component this control will pass states to that parent
  // the control must be written in <Controller/>
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                'image',
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
                'anchor',
              ],
              toolbar:
                'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={onChange} // if onChange is not passed as argument React
            // Hook Form relies on the onChange function to update its internal form
            //state whenever the content of a form field changes.
            /*  
        
        
        
        
        onChange Function:
In the RTE component, the onChange function is passed as the value for the onEditorChange prop.
This onChange function(built in function ) is provided by the Controller component from React Hook Form as part of its render function.
When the content of the RTE changes, TinyMCE will call the onChange function, passing the updated content as an argument.
     
important down below ------>
Integration with React Hook Form:

By passing onChange to onEditorChange, we're integrating the RTE with React Hook Form's state management system.
When the content of the RTE changes, React Hook Form's onChange function updates the form state with the new content value.
        
        
        */
          />
        )}
      />
    </div>
  );
}

RTE.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  control: propTypes.string,
  defaultValue: propTypes.string,
};

// line 13
/*

Here's why control={control} is used:

Integration with React Hook Form:

The control object is provided by React Hook Form and is used to connect form inputs with the form's state and validation rules.
It contains methods and state used for managing form inputs, such as registering inputs, tracking their values, and validating them.
Passing Control to Controller:

When you use the Controller component, you need to pass the control object to it so that it can integrate with React Hook Form's state management system.
By passing control={control}, you provide the Controller component with access to the control object, allowing it to interact with the form's state and validation rules.



*/
