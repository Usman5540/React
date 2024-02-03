import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Store/store.js'
import { Provider } from 'redux'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import AuthLayout from './Components/AuthLayout'
import AllPosts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost'
import EditPost from './Pages/EditPost'
import Post from './Pages/Post'

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
                path:'/signUp',
                element:(
                  <AuthLayout authentication={false}>
  
                    <SignUp/> 
                  </AuthLayout> )
                   },
                   {
                    path:'/AllPosts',
                    element:(
                      <AuthLayout authentication={true}>
      
                        <AllPosts/> 
                      </AuthLayout> )
                       },
                       {
                        path:'/AddPost',
                        element:(
                          <AuthLayout authentication={true}>
          
                            <AddPost/> 
                          </AuthLayout> )
                           },
                           {
                            path:'/EditPost/:slug',
                            element:(
                              <AuthLayout authentication={true}>
              
                                <EditPost/> 
                              </AuthLayout> )
                               },
                    
                               {
                                path:'/Post/:slug',
                                element:(
                                  <AuthLayout authentication={true}>
                  
                                    <Post/> 
                                  </AuthLayout> )
                                   },
                       
            


            ]
          }
])
// only which is logged in should be able to see the allpost page or can see all post  other functionalities will be test on the go 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

// only which is logged in should be able to see the allpost page or can see all post  other functionalities will be test on the go 

