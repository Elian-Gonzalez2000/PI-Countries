const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");


router.get("/",  (req, res) => {
   const {name} = req.query;
   //console.log(nameLower);
   /* axios.get("https://restcountries.com/v3/all")
   .then((data)=>{
      return res.json(data.data);
   }); */
   if(name){
      let nameLower = name.toLowerCase();
      return Country.findAll({
         where: {
            name: {[Op.startsWith]: nameLower},
         },
         include: {
            model: Activity,
         }
      })
      .then((countries)=>{
         if(countries.length == 0){
            return res.json("Sin coincidencias");
         } else {
            return res.json(countries); 
         }
         //console.log(countries);
      });
   } else {
      return Country.findAll({
            include: {
                model: Activity,
            }
        })
      .then((countries)=>{
         //console.log(countries);
          return res.json(countries); 
      }).catch((rr)=> console.log(rr));
   }
});



router.get("/:idPais", (req, res) => {
   const {idPais} = req.params;
   let idPaisUpper = idPais.toUpperCase();
   //console.log(idPaisUpper);
   return Country.findByPk(idPaisUpper,{
        include : {
            model : Activity
        }
    })
   .then((country)=>{
      //console.log(country);
      return res.json(country);
   });
});





module.exports = router;