import Routes from "./routes";
import { ProductProvider } from "./context/ProductCart";

const App = () => {
  return (
    <div>
      <ProductProvider>
      <Routes />
      </ProductProvider>
    </div>
  )
}

export default App