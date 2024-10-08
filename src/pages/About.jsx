import { Link } from "react-router-dom"
import { abouts } from "../data"



function About() {
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-center my-5 text-xl font-bold lg:text-3xl">
                Mesh Agro industries</h1>
            <h1 className="text-center my-5 text-xl font-bold lg:text-3xl">
                Our Founders</h1>
            <div className="flex w-full justify-evenly my-10">
                <div className="flex flex-col  items-center text-xl">
                    <img className="rounded-full shadow-2xl border border-gray-500 h-28 w-2h-28 lg:h-48 lg:w-48" src="https://i.ibb.co/pQb7RM4/yunus-profile.jpg" alt="yunus shafi mansuri" />
                    <h2 className="text-center mt-3 font-semibold">Yunus Shafi Mansuri</h2>
                    <h2 className="text-center mt-3 font-semibold">CEO</h2>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <img className="self-center rounded-full shadow-2xl border border-gray-500 h-28 w-2h-28 lg:h-48 lg:w-48" src="https://i.ibb.co/TK4X8kM/rafik-profile.jpg" alt="rafik shafi mansuri" />
                    <h2 className="text-center mt-3 font-semibold">Rafik Shafi Mansuri</h2>
                    <h2 className="text-center mt-3 font-semibold">CFO</h2>
                </div>
            </div>
            {/**About Section */}
            <div >
                <h1 className="text-center font-bold text-2xl">About US</h1>
                <p className="text-center my-4 text-lg">Mesh Agro Industries - Manufacturer of drip lateral pipe, drip irrigation pipe & ldpe granules since 2020 in Yaval, Maharashtra.</p>
                <div className="text-xs lg:text-lg flex flex-wrap justify-center gap-6 my-6 ">
                    {abouts.map(about => (
                        <div
                            className="text-sm lg:text-lg border border-gray-300 rounded-lg shadow-lg h-20 w-56 flex flex-col justify-center items-center"
                            key={about.answer}>
                            <h1 className="font-semibold">{about.answer}</h1>
                            <h2 className="text-xs text-gray-600">{about.question}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {/**more Info */}
            <div>
                <div className="text-sm lg:text-lg flex flex-wrap justify-center text-center  gap-6 my-6 ">
                    <div
                        className="px-1 border border-gray-300 rounded-lg shadow-lg h-36 w-2/3 flex flex-col justify-center items-center">
                        <h1 className=" font-semibold mb-3">Online/ RTGS/ NEFT/ cheque/ Cash</h1>
                        <h2 className="text-xs lg:text-sm text-gray-600">Payment Mode</h2>
                    </div>
                    <div
                        className="px-1 border border-gray-300 rounded-lg shadow-lg h-36 w-2/3 flex flex-col justify-center items-center">
                        <h1 className=" font-semibold mb-3">We deliver products to you Via Transport within 3 to 4 days</h1>
                        <h2 className="text-xs lg:text-sm text-gray-600">Packaging and Delivery</h2>
                    </div>
                </div>
            </div>
            {/**Link to products */}
            <div className="text-center text-xs lg:text-lg mt-4 flex justify-center gap-3">
                <Link
                    className="bg-black hover:opacity-90  text-white px-4 py-2 rounded-sm "
                    to="/products">Explore Products</Link>
                <Link
                    className="bg-black hover:opacity-90 text-white px-4 py-2 rounded-sm"
                    to="/contact">Contact Us</Link>
            </div>
        </section>
    )
}

export default About