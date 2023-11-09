import ReactDOM from "react-dom/client";
import store from "./store";
import { extendedApi } from "./store/slices/configuration";
import { Provider } from "react-redux";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import palette from "./theme/palette";
import { RouterProvider } from "react-router-dom";
import MainLoadingScreen from "./components/MainLoadingScreen";
import router from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

store.dispatch(extendedApi.endpoints.getConfiguration.initiate(undefined));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={createTheme({ palette })}>
        <RouterProvider
          router={router}
          fallbackElement={<MainLoadingScreen />}
        />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
