import statuses from "./contstants/statuses";
import { icons } from "./components/Icon";

export type StatusType = keyof typeof statuses;
export type IconNameType = keyof typeof icons;
