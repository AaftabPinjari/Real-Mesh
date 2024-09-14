import { Link } from "react-router-dom"
import { abouts } from "../data"



function About() {
    return (
        <section className="min-h-screen flex flex-col items-center">
            <h1 className="text-center my-5 text-xl font-bold lg:text-3xl">
                Mesh Agro industries</h1>
            <h1 className="text-center my-5 text-xl font-bold lg:text-3xl">
                Our Leaders</h1>
            <div className="flex w-full justify-evenly my-10">
                <div className="text-xl">
                    <img className="rounded-full shadow-2xl border border-gray-500 h-36 w-36 lg:h-48 lg:w-48" src="/src/assets/yunus_profile.jpg" alt="yunus shafi mansuri" />
                    <h2 className="text-center mt-3 font-semibold">Yunus Shafi mansuri</h2>
                    <h2 className="text-center mt-3 font-semibold">CEO</h2>
                </div>
                <div className="text-xl">
                    <img className="rounded-full shadow-2xl border border-gray-500 h-36 w-36 lg:h-48 lg:w-48" src="/src/assets/rafik_profile.jpg" alt="rafik shafi mansuri" />
                    <h2 className="text-center mt-3 font-semibold">Rafik Shafi mansuri</h2>
                    <h2 className="text-center mt-3 font-semibold">CFO</h2>
                </div>
            </div>
            {/**About Section */}
            <div >
                <h1 className="text-center font-bold text-2xl">About US</h1>
                <p className="text-center my-4 text-lg">Mesh Agro Industries - Manufacturer of drip lateral pipe, drip irrigation pipe & ldpe granules since 2020 in Yaval, Maharashtra.</p>
                <div className="flex flex-wrap justify-center gap-6 my-6 ">
                    {abouts.map(about => (
                        <div
                            className="border border-gray-300 rounded-lg shadow-lg h-20 w-56 flex flex-col justify-center items-center"
                            key={about.answer}>
                            <h1 className="text-lg font-semibold">{about.answer}</h1>
                            <h2 className="text-gray-600">{about.question}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {/**more Info */}
            <div>
                <div className="flex flex-wrap justify-center text-center  gap-6 my-6 ">
                    <div
                        className="border border-gray-300 rounded-lg shadow-lg h-36 w-2/3 flex flex-col justify-center items-center">
                        <h1 className="text-lg font-semibold mb-3">Online/ RTGS/ NEFT/ cheque/ Cash</h1>
                        <h2 className="text-gray-600">Payment Mode</h2>
                    </div>
                    <div
                        className="border border-gray-300 rounded-lg shadow-lg h-36 w-2/3 flex flex-col justify-center items-center">
                        <h1 className="text-lg font-semibold mb-3">We deliver products to you Via Transport within 3 to 4 days</h1>
                        <h2 className="text-gray-600">Packaging and Delivery</h2>
                    </div>
                </div>
            </div>
            {/**Link to products */}
            <div className="text-center mt-4 flex justify-evenly">
                <Link
                    className="bg-black hover:opacity-90  text-white px-4 py-2 rounded-sm "
                    to="/products">Explore Our Products</Link>
                <Link
                    className="bg-black hover:opacity-90 text-white px-4 py-2 rounded-sm"
                    to="/contact">Contact Us</Link>
            </div>
        </section>
    )
}

export default About