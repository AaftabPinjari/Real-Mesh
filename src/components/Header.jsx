import { NavLink } from "react-router-dom"


function Header() {
    return (
        <nav className="">
            <div className="font-serif flex justify-between">
                <div className="tracking-widest">
                    <h1 className="text-2xl md:text-4xl font-extrabold">Mesh Agro</h1>
                    <h2 className="text-center sca">Industries</h2>
                </div>
                <img className="h-10 md:h-14" src="/src/assets/logo-lite.png" alt="logo" />
            </div>
            <ul className="flex mt-5 justify-between rounded-lg bg-gray-200 ">
                <NavLink className={({ isActive }) => `${isActive ? "text-white bg-black p-2 px-3 md:px-12 rounded-l-lg" : "px-3 md:px-12 p-2"} font-semibold `} to="/"><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white bg-black p-2 px-3 md:px-12 " : "px-3 md:px-12 p-2"} font-semibold `} to="/products"><li>Products</li></NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white bg-black p-2 px-3 md:px-12 " : "px-3 md:px-12 p-2"} font-semibold `} to="/about"><li>About</li></NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white bg-black p-2 px-3 md:px-12 rounded-r-lg" : "px-3 md:px-12 p-2"} font-semibold `} to="/contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
    )
}

export default Header