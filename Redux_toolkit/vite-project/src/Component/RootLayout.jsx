import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Provider } from 'react-redux';  // Correct import statement
import Store from '../Store/Store';

function RootLayout() {
  return (
    <div>
      <Provider store={Store}>  
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}
// provider enable communicatoni between store  ,redux and components
/*  the store prop is being passed to the Provider component from react-redux. This store prop allows the Redux store to be accessible to all the components within the Provider wrapper,
 enabling communication between the Redux store and React components.*/

export default RootLayout;
