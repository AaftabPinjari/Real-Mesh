
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { products } from "../data"

function Products() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [clicked, setClicked] = useState(false);
    const filters = [...new Set(products.map(val => val.category))];


    const handleFilterButtonClick = (selectedCategory) => {
        setClicked(true)
        setSelectedFilters([selectedCategory])
        const newItems = products.filter(pro => pro.category === selectedCategory)
        setFilteredProducts(newItems)
    }

    const handleAllClick = () => {
        setFilteredProducts(products)
        setClicked(false)
        setSelectedFilters([])
    }



    return (
        <section className="my-6 min-h-screen">
            {/**Categories */}
            <ul className="text-sm lg:text-lg flex flex-wrap gap-3 justify-center ">
                <button onClick={() => handleAllClick()}>
                    <li className={`rounded-sm px-4 py-2 ${clicked ? "border border-gray-400 hover:bg-gray-200" : "bg-black text-white"}`}>
                        All
                    </li>
                </button>
                {filters.map((cat, idx) => (
                    <li
                        key={idx}>
                        <button onClick={() => handleFilterButtonClick(cat)}
                            className={`rounded-sm px-4 py-2 border border-gray-400 ${selectedFilters?.includes(cat) ? "bg-black text-white" : "hover:bg-gray-200"}`}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
            {/**Products */}
            <div className="text-xs md:text-sm lg:text-lg flex flex-wrap my-8 gap-5 justify-center">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </section>
    )
}

export default Products