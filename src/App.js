import "./App.css";
import Index from "./components/Home/Index";
import AboutUs from "./components/About/Index";
import ReceipeMain from "./components/RecipesDetail/Index";
import ContactMain from "./components/Contact/Index";
import BlogPostMain from "./components/BlogPost/Index";
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogLists from "./components/Blogs/Index";
import RecipeList from "./components/Recipes/Index";

function App() {
  return (
    <>
     <Switch>
      <Route path="/home" component={Index}/>
      <Route path="/recipes" component={RecipeList}/>
      <Route path="/recipedetail/:receipeId" component={ReceipeMain}/>
      <Route path="/blogs" component={BlogLists} />
      <Route path="/blogdetail/:blogId" component={BlogPostMain} />
      <Route path="/contact" component={ContactMain} />
      <Route path="/about" component={AboutUs} />
      <Redirect from='/' exact to='/home/index'/>
      <Redirect exact to='/not-found' /> 
    </Switch> 
    </>
  ); 
}

export default App;
