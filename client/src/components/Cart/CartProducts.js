import React, { useCallback, useEffect } from 'react';

const CartProducts = ({
  cart,
  setQuantity,
}) => {
  if (!cart) {
    return null;
  }

  return (
    <div>
      {cart.products.map((product) => (
        <CartProduct {...product} setQuantity={setQuantity} />
      ))}
    </div>
  );
};

export default CartProducts;

const CartProduct = ({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  quantity,
  setQuantity,
}) => {
  console.log(`Render ${name}`);

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(id, quantity + 1);
  }, [id, quantity, setQuantity]);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity(id, quantity - 1);
  }, [id, setQuantity]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <div style={{ width: '78px', height: '78px' }}>
        <img src={imageUrl} style={{ width: '100%', maxHeight: '100%' }} />
      </div>
      <div style={{ marginLeft: '48px', display: 'flex', flex: '1 1 auto' }}>
        <div style={{ flex: '1 1 auto', marginRight: '16px'}}>
          {name}
        </div>
        <div style={{ flex: '0 0 144px' }}>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span style={{ margin: '16px' }}>
            {`${quantity} st`}
          </span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <div style={{ flex: '0 0 auto', flexBasis: '100px', alignItems: 'flex-end' }}>
          {originalPrice !== price && (
            <span style={{ textDecoration: 'line-through' }}>
              {`${originalPrice}:-`}
            </span>
          )}
          {`${price}:-`}
        </div>
      </div>
    </div>
  );
};
