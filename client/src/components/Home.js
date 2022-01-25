import React, {useEffect} from "react";

const Home = ()=>{
   let countries = [];
   useEffect(()=>{
      fetch("http://localhost:3001/countries/")
      .then((res)=>res.json())
      .then((data)=>{
         countries = data;
         console.log("1" ,countries);
      });
      
   },[])

   return (<div>
      <h1>Home</h1>
   </div>);
}

export default Home;