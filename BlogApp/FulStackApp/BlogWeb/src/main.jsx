import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Pages/Home.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import AddPost from './Pages/AddPost.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import EditPost from './Pages/EditPost.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/Signup.jsx'
import Store from './Store/Store.js'
import Post from './Pages/Post.jsx'

const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
        <AuthLayout authentication={false}>

          <Login/> 
        </AuthLayout> ) 
        },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>

            <SignUp/> 
          </AuthLayout> )
 },
 {
            path:'/allposts',
            element:(
              <AuthLayout authentication={true}>

                <AllPosts/> 
      </AuthLayout> )
 },
               {
                path:'/addpost',
                element:(
                  <AuthLayout authentication={true}>
  
                    <AddPost/> 
                  </AuthLayout> )
                   },
                   {
                    path:'/editpost/:slug',
                    element:(
                      <AuthLayout authentication={true}>
      
                        <EditPost/> 
                      </AuthLayout> )
                       },
            
                       {
                        path:'/post/:slug',
                        element:(
                          <AuthLayout authentication={true}>
          
  <Post/> 
 </AuthLayout> )
   },
              
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
  <RouterProvider   router={router}/> 
  </Provider>
  </React.StrictMode>,
)
