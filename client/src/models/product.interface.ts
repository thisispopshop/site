import {iImage} from ".";

export interface iProduct {
    name: string;
    brand: string;
    price: number;
    stock: number;
    merchant: string;
    url: string;
    images: iImage[];
    dateCreated: Date;
    description: string;
  }