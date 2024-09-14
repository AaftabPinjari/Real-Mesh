import { useParams } from "react-router"
import { products } from "../data";
import { Link } from "react-router-dom";


function ProductPage() {

    const params = useParams();
    // console.log(params.id);

    const temp = products.filter(pro => pro.id == params.id)
    const product = temp[0];

    return (
        <section
            className="flex flex-col gap-3 ">
            <h1 className="my-6 text-center font-semibold lg:font-bold text-lg lg:text-2xl">{product.title}</h1>
            <div className="
        flex 
        flex-col justify-evenly items-center
        lg:flex-row 
        ">
                <img
                    className="w-2/3 lg:w-1/3 rounded-lg shadow-lg"
                    src={product.img} alt={product.title} />
                <div>
                    <div className="text-center">
                        <h2
                            className="font-semibold text-lg mt-2"
                        >Price : Rs. {product.price}</h2>
                        <h2
                            className="font-semibold mt-2"
                        >Minimum Quantity : {product.min_qty}</h2>
                    </div>
                    {/**Table Layout */}
                    <div className="text-center  mt-2">
                        {product.length ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Length</h2>
                                <h2>{product.length}</h2>
                            </div>
                            : ""}
                        {product.brand ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Brand</h2>
                                <h2>{product.brand}</h2>
                            </div>
                            : ""}
                        {product.color ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Color</h2>
                                <h2>{product.color}</h2>
                            </div>
                            : ""}
                        {product.category ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Category</h2>
                                <h2>{product.category}</h2>
                            </div>
                            : ""}
                        {product.area ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Area</h2>
                                <h2>{product.area}</h2>
                            </div>
                            : ""}
                        {product.Material ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Material</h2>
                                <h2>{product.Material}</h2>
                            </div>
                            : ""}
                        {product.country ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Country</h2>
                                <h2>{product.country}</h2>
                            </div>
                            : ""}
                        {product.quantity ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Quantity</h2>
                                <h2>{product.quantity}</h2>
                            </div>
                            : ""}
                        {product.deal ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Deal</h2>
                                <h2>{product.deal}</h2>
                            </div>
                            : ""}
                        {product.pressure ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Pressure</h2>
                                <h2>{product.pressure}</h2>
                            </div>
                            : ""}
                        {product.shape ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Shape</h2>
                                <h2>{product.shape}</h2>
                            </div>
                            : ""}
                        {product.size ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Size</h2>
                                <h2>{product.size}</h2>
                            </div>
                            : ""}
                        {product.thickness ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Thickness</h2>
                                <h2>{product.thickness}</h2>
                            </div>
                            : ""}
                        {product.usage ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Usage</h2>
                                <h2>{product.usage}</h2>
                            </div>
                            : ""}
                        {product.process_types ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Process Types</h2>
                                <h2>{product.process_types}</h2>
                            </div>
                            : ""}
                        {product.working_pressure ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Working Pressure</h2>
                                <h2>{product.working_pressure}</h2>
                            </div>
                            : ""}
                        {product.wall_thickness ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Wall Thickness</h2>
                                <h2>{product.wall_thickness}</h2>
                            </div>
                            : ""}
                        {product.pressure_ratting ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Pressure Rating</h2>
                                <h2>{product.pressure_ratting}</h2>
                            </div>
                            : ""}
                        {product.pipe_joint ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Pipe Joint</h2>
                                <h2>{product.pipe_joint}</h2>
                            </div>
                            : ""}
                        {product.packaging_type ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Packaging Type</h2>
                                <h2>{product.packaging_type}</h2>
                            </div>
                            : ""}
                        {product.packaging_size ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Packaging Size</h2>
                                <h2>{product.packaging_size}</h2>
                            </div>
                            : ""}
                        {product.model_ame ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Model Name</h2>
                                <h2>{product.model_ame}</h2>
                            </div>
                            : ""}
                        {product.dripper_spacing ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Dripper Spacing</h2>
                                <h2>{product.dripper_spacing}</h2>
                            </div>
                            : ""}
                        {product.flow_rate ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Flow Rate</h2>
                                <h2>{product.flow_rate}</h2>
                            </div>
                            : ""}
                        {product.drip_spacing ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Drip Spacing</h2>
                                <h2>{product.drip_spacing}</h2>
                            </div>
                            : ""}
                        {product.drip_emitter ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Drip Emitter</h2>
                                <h2>{product.drip_emitter}</h2>
                            </div>
                            : ""}
                        {product.iso ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">ISO Certified</h2>
                                <h2>{product.iso}</h2>
                            </div>
                            : ""}
                        {product.material_grade ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Material Grade</h2>
                                <h2>{product.material_grade}</h2>
                            </div>
                            : ""}
                        {product.automatic_grade ?
                            <div className="flex gap-2 w-full justify-between border-b border-gray-400 my-1">
                                <h2 className="font-semibold">Automatic Grade</h2>
                                <h2>{product.automatic_grade}</h2>
                            </div>
                            : ""}

                    </div>
                </div>
            </div>
            <div className="text-center mt-4 text-xs lg:text-lg justify-center flex gap-3">
                <Link
                    className="bg-black hover:opacity-90  text-white px-4 py-2 rounded-sm "
                    to="/products">Back to Products</Link>
                <Link
                    className="bg-black hover:opacity-90 text-white px-4 py-2 rounded-sm"
                    to="/contact">Yes I am Interested</Link>
            </div>
        </section>
    )
}

export default ProductPage