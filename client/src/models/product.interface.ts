import {iImage, iCategory, iColor} from ".";

export interface iProduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    url: string;
    images: iImage[];
    description: string;
    color: iColor;
    category: iCategory;
  }