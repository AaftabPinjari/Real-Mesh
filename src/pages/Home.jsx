import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { categories, products, abouts } from "../data";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SliderCard from "../components/SliderCard";


function Home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: "60px",
        // className: 'center',
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out"
    };
    return (
        <section>
            <h1 className="my-12 text-center font-bold text-2xl">Products</h1>
            {/*Slider Section */}
            <div className="my-12">
                <Slider {...settings}>
                    {products.map(product => (
                        <SliderCard key={product.id} product={product} />
                    ))}
                    {/**<div key={pro.id} className="  h-24 w-36 md:h-48 md:w-72 " >
                        <img className="  h-24 w-36 md:h-48 md:w-72  hover:scale-105"
                            src={pro.img} alt={pro.title} />
                    </div>*/}
                </Slider>
            </div>
            {/*Products Section */}
            <div className="my-12">
                <h1 className="text-center font-bold text-2xl">Categories</h1>
                <div className="flex flex-wrap justify-center  my-6">
                    {
                        categories.map(product => (
                            <CategoryCard title={product.title} key={product.title} image={product.img} subs={product.subs} />
                        ))
                    }
                </div>
            </div>
            {/*About Section */}
            <div>
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
        </section>

    )
}

export default Home