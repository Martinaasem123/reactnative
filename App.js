import { Provider } from "react-redux";
import Router from "./src/Router";
import { store } from "./src/Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
