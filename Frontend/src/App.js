import { Provider } from "react-redux";
import "./App.css";
import Navigation from "./navigation/Navigation";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
