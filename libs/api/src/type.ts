export interface Landing {
    ID: string;
    Nom: string;
    Couleur: string;
    Description: string;
    'Sous-categories': Category[];
    Image: string;
}

export interface Category {
    ID: string;
    Nom: string;
    Description: string;
    Produits: Produit[];
    Image: string;
    Couleur?: string;
}

export interface Produit {
    ID: string;
    'Sku unité': string;
    'B2C - Prix TTC': number;
    'B2C Prix TTC Pack'?: number;
    'B2C - Prix barré Pack'?: number;
    'Unité prix B2C': number;
    'Unité de vente': string;
    Marque: string;
    Contenance: number;
    Description: string;
    Ingrédients: string;
    Metafield: string;
    'Nom du produit': string;
    'Metafield pack'?: string;
    'Provenance / Producteur': string;
    Image: string;
    'Nombre unités': number;
    'Nombre unités Pack'?: number;
    IsInStock: boolean;
    IsAntigaspi: boolean;
    Consigne?: number;
}