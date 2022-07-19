import "./App.css";
import Index from "./components/Home/Index";
import AboutUs from "./components/About/Index";
import ReceipeMain from "./components/RecipesList/Index";
// import BlogMain from "./components/BlogList/Index";
import ContactMain from "./components/Contact/Index";
import BlogPostMain from "./components/BlogPost/Index";
// import Index from "./components/Form/index";
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogLists from "./components/Blog/Index";

function App() {
  return (
    <>
    {/* <BlogMain /> */}
    <Switch>
      <Route path="/Home" component={Index}/>
      <Route path="/Recipes" component={ReceipeMain}/>
      <Route path="/BlogList" component={BlogLists} />
      <Route path="/BlogPost/:blogId" component={BlogPostMain} />
      <Route path="/Contact" component={ContactMain} />
      <Route path="/About" component={AboutUs} />
      <Redirect from='/' exact to='/Home/index'/>
      <Redirect exact to='/not-found' />
    </Switch>
    </>
  ); 
}

export default App;
