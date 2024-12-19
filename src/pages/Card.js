import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchSingleProduct, addToCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import FormatPrice from '../helpers/Formatprice';
import Star from '../helpers/Star';
import './Card.scss';

const Card = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);  // Loading state

    const { singleProduct } = useSelector(state => state.productReduce);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchSingleProduct(`https://fakestoreapi.com/products/${id}`))
            .then(() => {
                setIsLoading(false);
            });
    }, [id]);

    const {
        image,
        category,
        price,
        title,
        description,
        rating: { rate, count } = {}
    } = singleProduct || {};

    // Handle quantity Increment and decrement
    const incrementQuantity = () => {
        if (quantity < 6) setQuantity(quantity => quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity => quantity - 1);
    };

    const handleAddToCart = () => {
        dispatch(addToCart(id, image, category, price, title, quantity));
    };

    if (isLoading) {
        return (
            <div className="loading" >
                <div className="Load">Loading...</div>
            </div>
        );
    }

    return (
        <div className="cart_Wrapper">
            <img src={image} alt={category} />
            <div className="detail">
                <p className="cartTitle">{title}</p>
                <p className="cartPrice">
                    <span><FormatPrice price={price} /></span>
                </p>
                <p className="description">{description}</p>
                <Star rate={rate} count={count} />
                <div className="cartdetails">
                    <NavLink to={`/additem`}>
                        <button className="cart_btn" onClick={handleAddToCart}>
                            ADD TO CART
                        </button>
                    </NavLink>
                    <div className="cartQuantity">
                        <button onClick={incrementQuantity}>
                            <i className="fa-solid fa-plus" />
                        </button>
                        <span className="qty">{quantity}</span>
                        <button onClick={decrementQuantity}>
                            <i className="fa-solid fa-minus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
