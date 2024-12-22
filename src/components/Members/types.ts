import { StaticImageData } from "next/image";

export interface Member {
  img: StaticImageData;
  name: string;
  text: string;
  addendum?: string;
}
