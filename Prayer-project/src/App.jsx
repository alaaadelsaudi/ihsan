import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from "./Components/services/Services";
import Blog from "./Components/Blog/Blog";
import Donations from "./Components/Donations/Donations";
import Contactus from "./Components/ContactUs/Contactus";

function App() {
  const Routing = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true , element:<Home/>},
        {path:"/about" , element:<AboutUs/>},
        {path:"/services" , element:<Services/>},
        {path:"/blog" , element:<Blog/>},
        {path:"/donations" , element:<Donations/>},
        {path:"/contactus" , element:<Contactus/>},
        ,
    
  
  ]}])

  return (
   <>
  
     <RouterProvider  router={Routing}>

  </RouterProvider>
 
   </>
  )
}

export default App
