// import React, { Children } from 'react';
// import ReactDOM from 'react-dom/client';
// import Layout from '../Components';
// import Login from './pages/Login.jsx'
// import Home from './pages/Home.jsx'
// import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// // without using above line you will get a big error
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import Signup from './pages/Signup.jsx'
// import Post from './pages/Post.jsx'
// import AddPost from './pages/Post.jsx'
// import AllPosts from './pages/AllPosts.jsx'
// import EditPost  from'./pages/EditPost.jsx'
// const router = createBrowserRouter([
//        {
//         path:"/",
//         element:<App/>,
//        },

//       children:[
//         {
//           path:'/',
//           element:<Home/>
//         },
//         {
//           path:"/login",
//           element:(
//             <Layout authentication={false}>
//               <Login/>
//             </Layout>
//           )
//         },
//          {
//           path:"/signup",
//           element:(
//             <Layout authentication={false}>
//               <Signup/>
//             </Layout>
//           )
//         },
//          {
//           path:"/edit-post/:slug",
//           element:(
//             <Layout authentication>
//               <EditPost/>
//             </Layout>
//           )
//         },
//          {
//           path:"/all-post",
//           element:(
//             <Layout authentication>
//               <AllPosts/>
//             </Layout>
//           )
//         },
//          {
//           path:"/add-post/:slug",
//           element:(
//             <Layout authentication>
//               <AddPost/>
//             </Layout>
//           )
//         },
//         {
//           path:"/post/:slug",
//           element:<Post/>
//         }
//        ]
// ])
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {' '}
//       {/* Wrap the complete app with BrowserRouter */}
//       <Provider store={store}>
//      <RouterProvider router={router }/>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

// /*  The main purpose of the 
//        Provider component is to make the Redux store 
//        available to any component within your React application.
//         It is typically used at the root of your application component
//          hierarchy. By wrapping your entire application with the Provider
//         component and passing your Redux store as a prop, 
//         all components in your application can access the Redux 
//         store's state and dispatch actions without needing to pass
//          the store down explicitly through props manually. 
// */


import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./Components/Layout.jsx"
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import { Provider } from 'react-redux';
import store from './store/store';
import Signup from './pages/Signup.jsx';
import Post from './pages/Post.jsx';
import AddPost from './pages/Post.jsx'; // Is this intended?
import AllPosts from './pages/AllPosts.jsx';
import EditPost from './pages/EditPost.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire application with Provider */}
    <Provider store={store}>
      {/* Wrap the BrowserRouter */}
      <BrowserRouter>
        {/* Define routes within the Routes component */}
        <Routes>
          {/* Define the main route */}
          <Route
            path="/"
            element={(
              <App>
                {/* Layout for the main route */}
                <Layout>
                  {/* Index route */}
                  <Route index element={<Home />} />
                  {/* Other routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/edit-post/:slug" element={<EditPost />} />
                  <Route path="/all-post" element={<AllPosts />} />
                  <Route path="/add-post/:slug" element={<AddPost />} />
                  <Route path="/post/:slug" element={<Post />} />
                </Layout>
              </App>
            )}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
