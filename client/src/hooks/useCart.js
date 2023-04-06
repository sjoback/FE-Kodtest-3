import { useCallback, useEffect, useState } from 'react';

const MOCK_CART_ID = 'MOCK_CART_ID';
const CART_SERVICE_URL = 'http://localhost:8081/api/cart';

export default (postal) => {
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(false);
  const [deliveryOptions, setDeliveryOptions] = useState();

  useEffect(() => {
    setLoading(true);

    fetch(`${CART_SERVICE_URL}/${MOCK_CART_ID}`)
    .then((resp) => resp.json())
    .then(setCart)
    .catch(console.error)
    .finally(() => setLoading(false));
  }, []);

  const setQuantity = useCallback((productId, quantity) => {
    setLoading(true);

    fetch(`${CART_SERVICE_URL}/${MOCK_CART_ID}/${productId}/quantity/${quantity}`, {method: 'PUT' })
      .then((resp) => resp.json())
      .then(setCart)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const setDelivery = useCallback((id) => {
    setLoading(true);

    fetch(`${CART_SERVICE_URL}/${MOCK_CART_ID}/delivery/${id}`, {method: 'POST' })
      .then((resp) => resp.json())
      .then(setCart)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!postal || !cart?.id) {
      setDeliveryOptions(undefined);
    } else {
      fetch(`${CART_SERVICE_URL}/${cart.id}/delivery/${postal}`)
        .then((resp) => resp.json())
        .then(({ cart, deliveryOptions }) => {
          setCart(cart);
          setDeliveryOptions(deliveryOptions);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [postal]);

  return {
    cart,
    loading,
    setDelivery,
    setQuantity,
    deliveryOptions,
  }
};
