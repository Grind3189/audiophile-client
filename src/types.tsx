export interface CartedProductType {
    quantity: number;
    name: string;
    id: number;
    price: number;
    imageUrl: string;
} 

export type UserDetailsType = {
    name: string;
    email: string;
    phoneNumber: number;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    eMoneyNumber: string;
    eMoneypin: string;
    paymentMethod: "eMoney" | "cod";
  };