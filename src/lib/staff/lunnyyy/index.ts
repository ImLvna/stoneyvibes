import moment from "moment";
import { type Staff } from "..";
import banner from "./banner.png";
import pfp from "./pfp.png";

const lunnyyy: Staff = {
  name: "Luna",
  nickname: "Luny",
  vrchat_name: "lunnyyy",
  vrchat_id: "usr_dc6b26b1-7519-4e5b-8462-aa0b5ad7e028",
  links: [
    "https://lvna.gay",
    "https://github.com/imlvna",
  ],
  pronouns: "pup/pups",
  birthday: moment(11172004, "MMDDYYYY"),
  gender: "Female",
  relationshipStatus: "Taken by annie <3",
  favColor: "Pastel Purple",
  favAnimal: "Sugar Glider",
  platform: "Quest 2 with virtual desktop",
  games: [
    "vrchat", "cs2", "valorant", "overwatch", "superhot"
  ],
  hobbies: ["i do coding (i made this website :D)"],
  role: "Admin",
  image: pfp,
  banner
}
export default lunnyyy;