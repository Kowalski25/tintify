import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Footer, Header } from "./components";

function App() {
  return (
    <Router>
      {/* Shared component across the app */}
      <div className='container'>
        <Header />

        {/* Application routes */}
        <Routes />

        {/* Shared component across the app */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
