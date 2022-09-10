import { Fragment } from "react";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Design from "./components/Design";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import NewFeatures from "./components/NewFeatures";
import ResDesign from "./components/ResDesign";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Fragment>
      <Banner />
      <Design />
      <Feature />
      <ResDesign />
      <Clients />
      <NewFeatures />
      <SignUp />
      <Footer />
    </Fragment>
  );
}

export default App;
