import { Landing } from "./type";

export const fetchCategory = async (categoryId: string) => {
    const res = await fetch(
        `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/${categoryId}`
    );
    const data = await res.json() as Landing;
    return data;
};
