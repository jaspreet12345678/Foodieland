import "./App.css";
import Index from "./components/Home/index";
import AboutUs from "./components/About/index";
import ReceipeMain from "./components/Recipes/index";
import BlogMain from "./components/BlogList/index";
import ContactMain from "./components/Contact/index";
import BlogPostMain from "./components/BlogPost/index";
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Video />
    <>
    <Switch>
      <Route path="/Home" component={Index}/>
      <Route path="/Recipes" component={ReceipeMain}/>
      <Route path="/BlogList" component={BlogMain} />
      <Route path="/BlogPost" component={BlogPostMain} />
      <Route path="/Contact" component={ContactMain} />
      <Route path="/About" component={AboutUs} />
      <Redirect from='/' exact to='/Home/index'/>
      <Redirect exact to='/not-found' />
    </Switch>
    </>
  );
}

export default App;
