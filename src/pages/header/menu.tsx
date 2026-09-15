import { NavLink } from "react-router-dom"
const Menu = () => {
  return (
    <>
      <AuthPages />
      <UnAuthPages />
    </>
  )
}

export default Menu;

const AuthPages = () => {

    return (
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <NavLink   className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''}`}  to="/" end>Products</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''}`} to="/carts">Carts</NavLink>
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