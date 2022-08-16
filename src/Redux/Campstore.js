import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CampSlice";
import { NewCampaignToFirebase } from "./CampSlice";

export const campiagnstore = configureStore({
    reducer: {
      newcampaign: reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: NewCampaignToFirebase
      }
    }),
  });