const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Country } = require("../db");

router.get("/",  (req, res) => {
   return Country.findAll()
   .then((countries)=>{
      return res.json(countries);
   });
});



router.get("/:idPais", (req, res) => {
 
});



module.exports = router;