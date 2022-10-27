import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const epicMiddleware = createEpicMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware, thunk],
});

epicMiddleware.run(rootEpic);
