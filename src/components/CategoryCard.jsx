import { Link } from "react-router-dom"


function CategoryCard({ title, subs, image }) {
    return (
        <div className="hover:shadow-lg hover:shadow-gray-300 m-2 justify-between flex flex-col 
        border-gray-300 border gap-2 p-2 rounded-lg h-96 w-60 ">
            <img
                className="h-1/2 rounded-lg shadow-md"
                src={image} alt="dnfds" />
            <div className="flex flex-col justify-between  h-1/2">
                <h1 className="text-center font-bold text-lg">{title}</h1>
                {subs.map(sub => (
                    <h3 className="text-gray-600 text-center" key={sub}>{sub}</h3>
                ))}
                <Link to="/products" className="bg-black text-white px-4 text-center rounded-lg ">View All</Link>
            </div>
        </div>
    )
}

export default CategoryCard