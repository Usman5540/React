import { logout } from '../../Store/authSlice';
import authservice from '../../appwrite/auth';
import { useDispatch } from 'react-redux';

function LogoutBtn() {
  const dispatch = useDispatch();
  const LogoutBtnHandler = () => {
    authservice.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={LogoutBtnHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
