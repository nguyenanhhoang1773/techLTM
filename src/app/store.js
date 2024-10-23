import { configureStore } from "@reduxjs/toolkit";
import cartManageReducer from "../features/CartManage";
export default configureStore({
  reducer: {
    cartManage: cartManageReducer,
  },
});
