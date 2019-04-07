import {iImage, iCategory, iColor} from ".";

export interface iProduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    merchant: string;
    url: string;
    images: iImage[];
    dateCreated: Date;
    description: string;
    color: iColor;
    category: iCategory;
  }