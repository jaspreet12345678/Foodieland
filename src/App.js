import "./App.css";
import Index from "./components/Home/Index";
import AboutUs from "./components/About/Index";
import ReceipeMain from "./components/RecipesList/Index";
import ContactMain from "./components/Contact/Index";
import BlogPostMain from "./components/BlogPost/Index";
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogLists from "./components/Blog/Index";
import RecipeList from "./components/Recipe/Index";

function App() {
  return (
    <>
     <Switch>
      <Route path="/Home" component={Index}/>
      <Route path="/Recipes" component={RecipeList}/>
      <Route path="/RecipePost/:receipeId" component={ReceipeMain}/>
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
