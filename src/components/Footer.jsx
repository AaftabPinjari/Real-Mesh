import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer>
            <hr className="h-px my-8 bg-gray-50 border-0 dark:bg-gray-400" />
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Our Company</h1>
                    <Link className="hover:text-gray-500" to="/about">About Us</Link>
                    <Link className="hover:text-gray-500" to="/products">Our Products</Link>
                    <Link className="hover:text-gray-500" to="/contact">Contact Us</Link>

                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Reach Us</h1>
                    <p>794 Musalman Wada Sakali Jalgaon,
                    </p><p>
                        Yaval-425302, Maharashtra, India                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer