import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Footer, Header } from "./components";
import { Provider } from "react-redux";
import store from "./state/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
