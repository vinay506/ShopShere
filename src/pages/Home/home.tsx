import { Outlet } from "react-router-dom"
import Header from "../header/header"

const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default HomePage
