import { iCollection } from './collection.interface';

export interface iOccasion {
    id: number,
    name: string,
    description: string,
    submitForm: string,
    collection: iCollection,
}