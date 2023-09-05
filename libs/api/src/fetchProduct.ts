import { Produit } from "./type";

export const fetchProduct = async (productId: string) => {
    const res = await fetch(
        `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/products/${productId}`
    );
    const data = await res.json() as Produit;
    return data;
};
