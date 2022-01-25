const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Country } = require("../db");


router.get("/",  (req, res) => {
   /* axios.get("https://restcountries.com/v3/all")
   .then((data)=>{
      return res.json(data.data);
   }); */
   return Country.findAll()
   .then((countries)=>{
       return res.json(countries); 
      //console.log(countries);
   });
});



router.get("/:idPais", (req, res) => {
 
});



module.exports = router;