import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { apiConfig } from "./utils/apiConfig.ts";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme.ts";

const staleTime = 20 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: staleTime,
      keepPreviousData: true,
    },
  },
});

axios.defaults.baseURL = apiConfig.BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ToastContainer
              position="top-center"
              hideProgressBar={true}
              autoClose={2000}
              theme={"dark"}
            />
          </Provider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
