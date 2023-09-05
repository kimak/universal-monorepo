import { Category } from "./type";


export const fetchCategories = async () => {
    const res = await fetch(
        `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories`
    );
    const data = await res.json() as Category[];
    // Bubble cleanup: remove unused first item
    return data.slice(1);
};
