import "./App.css";
import Index from "./components/Home/Index";
import AboutUs from "./components/About/Index";
import ReceipeMain from "./components/RecipesDetail/ReceipeMain";
import ContactMain from "./components/Contact/ContactMain";
import BlogPostMain from "./components/BlogDetail/BlogPostMain";
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogLists from "./components/Blogs/BlogLists";
import RecipeList from "./components/Recipes/RecipeList";
import BannerContact from "./components/UsableComponents/Login"
import Welcome from "./components/UsableComponents/Welcome";

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
      <Route path="/login" component={BannerContact} />
      <Route path="/welcome" component={Welcome} />
      <Redirect from='/' exact to='/home/index'/>
      <Redirect exact to='/not-found' /> 
    </Switch> 
    </>
  ); 
}

export default App;
