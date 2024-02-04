import { useEffect, useState } from 'react';
import { DeliveryOption } from '../types/DeliveryOption';

const CART_SERVICE_URL = 'http://localhost:8081/api/cart';

export default (cart, postal) => {
    const [options, setOptions] = useState<DeliveryOption[]>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!postal || !cart?.id) setOptions(undefined);
                else {
                    setLoading(true);
                    const response = await fetch(`${CART_SERVICE_URL}/${cart.id}/delivery/${postal}`);
                    const data = await response.json();
                    console.log(data);

                    setOptions(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cart?.id, postal]);

    return {
        options,
        loading,
    };
};
