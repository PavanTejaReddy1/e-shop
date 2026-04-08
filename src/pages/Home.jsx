import { useEffect, useState } from "react";
import products from "../services/mockData";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("asc");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Simulating async API call (mock data) to demonstrate loading state handling
                await new Promise((resolve) => setTimeout(resolve, 500));
                
                setData(products);
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);
    
    const columns = [
        {
            field: "image",
            headerName: "Image",
            width: 100,
            renderCell: (params) => (
                <img src={params.row.image} alt="product" className="w-10 h-10 object-cover rounded" />
            ),
        },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "category", headerName: "Category", flex: 1 },
        { field: "price", headerName: "Price", flex: 1 },

        {
            field: "action",
            headerName: "View",
            width: 120,
            renderCell: (params) => (
                <button onClick={() => navigate(`/product/${params.row.id}`)} className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer">
                    View
                </button>
            ),
        },
    ];

    const filteredData = data.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === "All" || item.category === category;

        return matchSearch && matchCategory;
    }).sort((a, b) => {
        if (sortOrder === "asc") {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen overflow-x-auto">

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Product List
            </h1>

            <div className="bg-white p-6 rounded-xl shadow-lg min-w-[600px]">

                <div className="flex justify-center items-center gap-4 mb-6">
                    <input type="text" placeholder="Search product..."  value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg">
                        <option value="All">All Categories</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                    </select>

                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg">
                        <option value="asc">Price Low → High</option>
                        <option value="desc">Price High → Low</option>
                    </select>
                </div>
                
                <DataGrid
                    rows={filteredData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    autoHeight
                />

            </div>
        </div>
    );
}

export default Home;
