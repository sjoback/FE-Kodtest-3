import React, { useState } from 'react';
import { Product } from '../../types/Product';
import { useAppContext } from '../Context';
import StyledCartProduct from './CartProduct.styled';
import StyledContainer from '../StyledComponents/StyledContainer.styled';
import { Cart } from '../../types/Cart';

const CartProducts: React.FC = () => {
    const { cart } = useAppContext();

    if (!cart) return null;

    return (
        <StyledContainer>
            {cart.products.map((product: Product) => (
                <CartProduct
                    {...product}
                    key={product.id}
                />
            ))}
        </StyledContainer>
    );
};

export default CartProducts;

const CartProduct: React.FC<Product> = ({ id, name, price, originalPrice, imageUrl, quantity }) => {
    const { cart, setQuantity, removeProduct } = useAppContext();

    if (!cart) return;

    const handleQuantity = (newQuantity: number) => {
        if (newQuantity !== quantity) setQuantity(id, newQuantity);
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const quantityOptions = Array.from({ length: 9 }, (_, index) => index + 1);

    return (
        <StyledCartProduct>
            <div className="productImage">
                <img src={imageUrl} />
            </div>

            <div className="productInfo">
                <div className="name">{name}</div>

                <div className="quantity">
                    <div className="dropdown-container">
                        <div
                            className="dropdown-header"
                            onClick={toggleDropdown}
                        >
                            {quantity}
                        </div>
                        {isOpen && (
                            <div className="dropdown-options">
                                {quantityOptions.map((quantityOption: number) => (
                                    <div
                                        key={quantityOption}
                                        onClick={() => handleQuantity(quantityOption)}
                                    >
                                        {quantityOption}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="price">
                    {originalPrice !== price && (
                        <span
                            className="price-old"
                            style={{}}
                        >{`${originalPrice}:-`}</span>
                    )}
                    <b>{`${price}:-`}</b>
                </div>

                <div>
                    <button onClick={() => removeProduct(id)}>
                        x<div className="tooltip">Remove product</div>
                    </button>
                </div>
            </div>
        </StyledCartProduct>
    );
};
