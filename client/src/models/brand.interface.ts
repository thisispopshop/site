import { iCollection, iProduct } from '.';

export interface iBrand {
    id: number;
    name: string;
    products: iProduct[];
    collection: iCollection;
}