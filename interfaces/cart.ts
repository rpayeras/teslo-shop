import { Size, Gender } from "./";

export interface CartProduct {
  _id: string;
  title: string;
  image: string[];
  price: number;
  sizes: Size;
  slug: string;
  gender: Gender;
  quantity: number;
}
