import { useParams, useNavigate } from "react-router-dom";
import products from "../services/mockData";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <p className="p-6">Product not found</p>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <button  onClick={() => navigate("/")} className="mb-4 bg-gray-300 px-3 py-1 rounded">
                Back to Home
            </button>

            <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-6">

                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded" />

                <div>
                    <h1 className="text-2xl font-bold mb-2">
                        {product.name}
                    </h1>

                    <p className="text-gray-600 mb-2">
                        Category: {product.category}
                    </p>

                    <p className="text-xl text-green-600 font-semibold mb-4">
                        ₹ {product.price}
                    </p>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;