import { NavLink } from "react-router-dom"


function Header() {
    return (
        <nav className="">
            <div className="font-serif flex justify-between">
                <div className="tracking-widest">
                    <h1 className="text-2xl md:text-4xl font-extrabold">Mesh Agro</h1>
                    <h2 className="text-center sca">Industries</h2>
                </div>
                <img className="h-10 md:h-14" src="https://i.ibb.co/JQB8bbN/logo-lite.png" alt="logo" />
            </div>
            <ul className="flex mt-5 justify-between rounded-lg bg-gray-200 ">
                <NavLink className={({ isActive }) => `lg:px-12 ${isActive ? "text-white bg-black rounded-l-lg" : ""} p-2 font-semibold `} to="/"><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => `lg:px-12 ${isActive ? "text-white bg-black    " : ""} font-semibold p-2  `} to="/products"><li>Products</li></NavLink>
                <NavLink className={({ isActive }) => `lg:px-12 ${isActive ? "text-white bg-black    " : ""} font-semibold p-2  `} to="/about"><li>About</li></NavLink>
                <NavLink className={({ isActive }) => `lg:px-12 ${isActive ? "text-white bg-black rounded-r-lg" : ""} p-2 font-semibold `} to="/contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
    )
}

export default Header