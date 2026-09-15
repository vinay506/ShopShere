import { NavLink } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mui/material";

type AuthType = ReturnType<typeof useAuth>;

const Menu = () => {
  const auth = useAuth();
  return (
    <>
      {auth.isAuthenticated && <AuthPages auth={auth} />}
      {!auth.isAuthenticated && <UnAuthPages />}
    </>
  )
}

export default Menu;

const AuthPages = ({ auth }: { auth: AuthType }) => {
    return (
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <NavLink   className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''}`}  to="/" end>Products</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''}`} to="/carts">Carts</NavLink>
          </li>
          <li>
              <Button type="button"  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={auth.logout}>Logout</Button>
          </li>
        </ul>
    )
};

const UnAuthPages = () => {
    return (
        <ul className="flex items-center justify-end space-x-4">
          <li>
            <NavLink className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''}`} to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 ${isActive ? 'bg-green-600' : ''}`} to="/signup">Sign Up</NavLink>
          </li>
        </ul>
    )
};