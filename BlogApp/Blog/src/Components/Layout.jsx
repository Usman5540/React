import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
function Layout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // status will found from useSelector

  useEffect(() => {
    if (authentication && authStatus != authentication) {
      // if user  sign up but not log in

      navigate('/login');
    } else if (!authentication && authStatus != authentication) {
      /* User Authentication: When a user attempts to access a protected page or resource without being authenticated, they 
may be redirected to the root 
path where they can either log in or register for an account.  */
      navigate('/'); // -----> ??
    }
    setLoading(false);
  }, [authStatus, authentication, navigate]); //-----> ??
  return loading ? <h1> Loading... </h1> : <>{children}</>;
}

Layout.propTypes = {
  children: PropTypes.node,
  authentication: PropTypes.bool.isRequired,
};
/* The correct way to define
 PropTypes for children, especially in React components
 , is not PropTypes.string but rather PropTypes.node. 
 This is because children can be any valid React node, 
 including strings, numbers, elements, or even arrays of those types.

The PropTypes for authentication should be PropTypes.bool.isRequired 
to specify that it's a required boolean prop. */
export default Layout;
/* 

In React, the children prop allows a component to render whatever content is passed between its opening and closing tags. This content can be any valid JSX, such as other components, elements, or text.

Here's a simplified example:

jsx
Copy code
// ParentComponent.js
import Layout from './Layout';

function ParentComponent()
//consider this as App.jsx
{
  return (
    <Layout>
      <div>
        <p>This is a child component</p>
      </div>
    </Layout>
  );
}

export default ParentComponent;
jsx
Copy code
// Layout.js
function Layout({ children }) {
  return (
    <div className="layout">
      <h1>Welcome to the Layout</h1>
      {children}
    </div>
  );
}

export default Layout;
In this example:

ParentComponent renders Layout.
Inside Layout, the children prop represents whatever is between <Layout> and </Layout> in ParentComponent.
So, <div><p>This is a child component</p></div> is passed as children to Layout.
In Layout, {children} renders this content, resulting in the <div> with the <p> element being rendered inside Layout







*/
