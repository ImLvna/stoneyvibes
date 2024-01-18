import type { Components } from "./types";

export interface OwnedGroup extends Components.Schemas.Group {
  owner: Components.Schemas.User;
}