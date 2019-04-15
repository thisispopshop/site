import { iCollection, iOccImage } from '.';

export interface iOccasion {
    id: number,
    name: string,
    description: string,
    submitForm: string,
    images: iOccImage[];
    collection: iCollection,
}