import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import MyRoutes from "./Components/Routers/MyRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <>
        <Header />
        <MyRoutes />
        <Footer />
      </>
    </div>
  );
}
