import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer>
            <hr className="h-px my-8 bg-gray-50 border-0 dark:bg-gray-400" />
            <div className="flex justify-between text-xs lg:text-lg ">
                <div className="flex flex-col gap-1 border-r md:border-none border-gray-400 pr-4">
                    <h1 className="font-semibold ">Company</h1>
                    <Link className="hover:text-gray-500" to="/about">About Us</Link>
                    <Link className="hover:text-gray-500" to="/products">Our Products</Link>
                    <Link className="hover:text-gray-500" to="/contact">Contact Us</Link>

                </div>
                <div className="flex flex-col gap-1 ml-2">
                    <h1 className="font-bold">Reach Us</h1>
                    <p>Gate No.187/177 Vadode-Pra, Yawal
                    </p><p>
                        Dist- Jalgaon, Maharashtra, India                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
