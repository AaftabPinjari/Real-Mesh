import { Link } from "react-router-dom"


function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`}>
            <div
                className="h-52 w-56 hover:bg-gray-100  py-2 px-1 rounded-lg flex gap-3 flex-col justify-between items-center border-gray-200 border shadow-md "
                key={product.id}>
                <img
                    className="h-1/2 rounded-lg"
                    src={product.img} alt={product.title} />
                <div className="h-1/2 justify-between flex flex-col">
                    <h1 className="text-sm lg:text-lg  font-bold  text-center">{product.title}</h1>
                    <h1 className="text-xs  text-gray-500 font-semibold text-center">{product.category}</h1>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard