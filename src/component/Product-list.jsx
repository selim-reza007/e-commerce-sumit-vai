import { useEffect, useState } from "react";
import fetchProducts from "../utils/fetchProducts";
import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch(() => setError(true));
    }, []);

    // decide what to render
    let output;

    if (error) {
        output = <div>There was an error </div>;
    } else if (products?.length > 0) {
        output = products.map((product) => (
            <Product key={product.id} product={product} />
        ));
    } else {
        <div>No products found!</div>;
    }

    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {output}
            </div>
        </div>
    );
};
export default ProductList;
