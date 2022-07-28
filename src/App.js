import "./App.css";
import Index from "./components/Home/Index";
import AboutUs from "./components/About/Index";
import ReceipeMain from "./components/RecipesDetail/ReceipeMain";
import ContactMain from "./components/Contact/ContactMain";
import BlogPostMain from "./components/BlogDetail/BlogPostMain";
import { Redirect, Route, Switch } from "react-router-dom";
import BlogLists from "./components/Blogs/BlogLists";
import RecipeList from "./components/Recipes/RecipeList";
import Login from "./components/UsableComponents/Login";
import Welcome from "./components/UsableComponents/Welcome";
import { Component } from "react";
import Confirm from "./ConfirmPassord";
function App(props) {
  // console.log(props);
  // setTimeout(() => {
  //   localStorage.removeItem("token");
  //   window.location = ("/login");
  // }, 30000);
  return (
    <Confirm />
    // <>
    //   <Switch>
    //     <Route path="/home" component={Index} />
    //     <Route path="/recipes" component={RecipeList} />
    //     <Route path="/recipedetail/:receipeId" component={ReceipeMain} />
    //     <Route path="/blogs" component={BlogLists} />
    //     <Route path="/blogdetail/:blogId" component={BlogPostMain} />
    //     <Route path="/contact" component={ContactMain} />
    //     <Route path="/about" component={AboutUs} />
    //     <Route path="/login" component={Login} />
    //     <Route path="/welcome" component={Welcome} />
    //     <Route path="/login" component={Login} />
    //     <Redirect from="/" exact to="/home/index" />
    //     <Redirect exact to="/not-found" />
    //   </Switch>
    // </>
  );
}

export default App;

// class App extends Component {
//   conat  timer,
//    sendMessage = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("token");
//     timer = setTimeout = () =>
//     localStorage.removeItem("token");
//     this.props.history.push("/login")
//   , 15000;
//   };

//   // setTimeout = (() => {
//   //   localStorage.removeItem("token");
//   //   this.props.history.push("/login");
//   // }, 15000);

//   render() {
//     return (
//       <>
//         <Switch>
//           <Route path="/home" component={Index} />
//           <Route path="/recipes" component={RecipeList} />
//           <Route path="/recipedetail/:receipeId" component={ReceipeMain} />
//           <Route path="/blogs" component={BlogLists} />
//           <Route path="/blogdetail/:blogId" component={BlogPostMain} />
//           <Route path="/contact" component={ContactMain} />
//           <Route path="/about" component={AboutUs} />
//           <Route path="/login" component={Login} />
//           <Route path="/welcome" component={Welcome} />
//           <Route path="/login" component={Login} />
//           <Redirect from="/" exact to="/home/index" />
//           <Redirect exact to="/not-found" />
//         </Switch>
//       </>
//     );
//   }
// }
// export default App;