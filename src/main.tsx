import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";

const staleTime = 20 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: staleTime,
      keepPreviousData: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
        theme={"dark"}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
