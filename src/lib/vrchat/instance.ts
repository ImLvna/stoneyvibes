import type { Components } from "./types";

export interface ModeratedInstance extends Components.Schemas.Instance {
  moderatorsOnline: number;
  isModerated: boolean;
}