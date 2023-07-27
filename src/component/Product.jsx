import createCart from "../utils/createCart";

export default function Product({ product = {} }) {
    const handleAddToCart = () => {
        createCart(product.id)
            .then((data) => {
                if (data?.msg == "success") {
                    alert("The product was added to cart");
                }
            })
            .catch((err) => console.log("There was an error"));
    };

    return (
        <div className="card w-100 bg-white shadow-xl">
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div className="card-body">
                <h6 className="text-black">{product?.title}</h6>
                <p className="text-sm text-gray-400">{product.short_des}</p>
                <h6 className="font-bold">Price: ${product.price}</h6>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-sm btn-outline btn-primary"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
