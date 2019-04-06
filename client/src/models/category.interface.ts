import { iCollection, iProduct } from '.';

export interface iCategory {
    id: number;
    name: string;
    products: iProduct[];
    collection: iCollection;
}