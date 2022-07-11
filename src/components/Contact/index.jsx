import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import Recipe from "../Home/recipe";
import Static from "../Home/static";
import Contact from "./contact";

const Index = () => {
    return (
      <>
      <Navbar />
       <Contact/>
       <Static />
       <Recipe />
       <Footer />
      </>
    );
  };
  
  export default Index;
  