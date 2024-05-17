import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import { Footer, Header } from "./components";

const App = () => {
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
};

export default App;
