import type { Moment } from "moment";
export interface Staff {
  name: string;
  nickname: string;
  vrchat_name: string;
  vrchat_id: string;
  links: string[];
  pronouns: string;
  birthday: Moment;
  gender: string;
  relationshipStatus: string;
  favColor: string;
  favAnimal: string;
  platform: string;
  games: string[];
  hobbies: string[];
  funFact?: string;
  role: string;
  image: string;
  banner: string;
}

import lunnyyy from "./lunnyyy";

export const staff: Staff[] = [
  lunnyyy,
];