import { Logo, LogoutBtn, Container } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.status);
  console.log(userStatus);
  const NavItems = [
    {
      name: 'Home',
      slug: '/', // url kaha py ja raha hai
      active: true,
    },
    {
      name: 'login',
      slug: '/login',
      active: !userStatus,
    },
    {
      name: 'signup',
      slug: '/signup',
      active: !userStatus,
    },
    {
      name: 'allposts',
      slug: '/all-post',
      active: userStatus,
    },
    {
      name: 'addpost',
      slug: '/add-post',
      active: userStatus,
    },
  ];
  return (
    // <BrowserRouter> we can't add two time so we added this
    // on main.js and error gone Error message "Uncaught TypeError: Cannot destructure property
    // 'basename' of 'React2.useContext(...)' as it is null" [duplicate]
    <header className="py-3 shadow bg-green-700 ">
      <Container>
        <nav className="flex">
          <div className="mr-6">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul>
            {NavItems.map((item) => {
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}
            {userStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
// important not ---> jo html element repeat ho raha haote hai us par key lgani hoti hai  item.active ?(<li key={item.name}>
/*   {userStatus && ( // agar true hai to logout dikhao warna nahi okk
        <li>
          <LogoutBtn/>
        </li>
       )} */
export default Header;
