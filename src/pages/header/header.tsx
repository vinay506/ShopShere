
import Menu from "./menu";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-blue-500">
            <div className="h-16 flex items-center text-white font-bold text-xl">ShopSphere</div>
            <Menu />
        </div>
    )
}



export default Header
