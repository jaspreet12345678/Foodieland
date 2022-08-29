// import Index from "../Home/Index";
// import AboutUs from "../About/Index";
// import ReceipeMain from "../RecipesDetail/ReceipeMain";
// import ContactMain from "../Contact/ContactMain";
// import BlogPostMain from "..//BlogDetail/BlogPostMain";
// import { Redirect, Route, Switch } from "react-router-dom";
// import BlogLists from "../Blogs/BlogLists";
// import RecipeList from "../Recipes/RecipeList";
// import Login from "./Login";
// import Welcome from "./Welcome";
// function Routing(props) {
//   console.log(props);
//   setTimeout(() => {
//     localStorage.removeItem("token");
//     window.location = "/login";
//   }, 30000);
//   return (
//     <>
//       <Switch>
       
//         <Route path="/login" component={Login} />
//         <Route path="/home" component={Index} />
//         <Route path="/recipes" component={RecipeList} />
//         <Route path="/recipedetail/:receipeId" component={ReceipeMain} />
//         <Route path="/blogs" component={BlogLists} />
//         <Route path="/blogdetail/:blogId" component={BlogPostMain} />
//         <Route path="/contact" component={ContactMain} />
//         <Route path="/about" component={AboutUs} />

//         <Route path="/welcome" component={Welcome} />
//         {/* <Route path="/login" component={Login} /> */}
//         <Redirect from="/" exact to="/home/index" />
//         <Redirect exact to="/not-found" />
//       </Switch>
//     </>
//   );
// }

// export default Routing;
