import { Landing } from "./type";

export const fetchLanding = async () => {
    const res = await fetch(
        `https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/landing`
    );
    const data = await res.json() as Landing;
    return data["Sous-categories"];
};
