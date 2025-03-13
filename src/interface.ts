export interface IProduct{
    category: string;
    description: string;
    id: string;
    image: string;
    price?: string;
    rating: {
        rate: number;
        count: number;
    }
    title: string;
   }


 export  interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean; 
  }
  