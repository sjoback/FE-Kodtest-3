import React from "react";
import useCart from "../../hooks/useCart";
import usePostal from "../../hooks/usePostal";
import CartProducts from "../Cart/CartProducts";
import CartTotal from '../Cart/CartTotal';
import Delivery from "../Delivery";
import Postal from "../Postal";

const App = () => {
  const {
    postal,
    setPostal,
  } = usePostal();

  const {
    cart,
    loading: loadingCart,
    setDelivery,
    setQuantity,
    deliveryOptions,
  } = useCart(postal);

  return (
    <>
      <div style={{ maxWidth: '150px', margin: '0 auto 48px auto'}}>
        <img
          style={{ maxWidth: '100%' }}
          src="https://www.mcdn.net/resources/shipping/MIO_STORE_PICKUP_66363011-6e1b-4494-834e-b236e1dd45d7.svg"
        />
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto'}}>
        <CartProducts
          cart={cart}
          setQuantity={setQuantity}
          loadingCart={loadingCart}
        />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto'}}>
        <Postal postal={postal} updatePostal={setPostal} />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto'}}>
        <Delivery options={deliveryOptions} cart={cart} onSelectDelivery={setDelivery} />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 48px auto'}}>
        <CartTotal cart={cart} deliveryOptions={deliveryOptions} />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto'}}>
        <button disabled={!postal || !cart?.delivery}>
          Fortsätt
        </button>
      </div>
    </>
  );
};

export default App;
