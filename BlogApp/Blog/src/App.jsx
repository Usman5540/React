import { useState, useEffect } from 'react';
import './App.css';
import { login, logout } from './Store/authSlice';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservice
      .getUser()
      .then((Data) => {
        if (Data) {
          dispatch(login(Data));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); // false the loading after fetching the data
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className=" flex flex-wrap content-between bg-gray-500 h-screen p-0 m-0">
      <div className=" w-full block  ">
        <Header />
        <main>
          Todo:
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
