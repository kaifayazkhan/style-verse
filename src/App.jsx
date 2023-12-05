import Routes from "./routes";
import { ProductProvider } from "./context/ProductCart";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import ToastNotification from "./components/ToastNotification";
const App = () => {
    return (
    <Router>
      <AuthProvider>
        <ProductProvider>
        <ToastNotification />
          <Routes />
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
