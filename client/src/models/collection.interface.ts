import {iProduct} from ".";

enum Status {
    APPROVED = "approved",
    UNAPPROVED = "unapproved",
    CANCELED = "canceled",
}

export interface iCollection {
    name: string;
    status: string;
    approvedBy: number | null;
    description: string;
    products: iProduct[];
  }