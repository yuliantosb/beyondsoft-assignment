import { combineEpics } from "redux-observable";
import { mapEpic } from "./mapEpic";

export const rootEpic = combineEpics(mapEpic);
