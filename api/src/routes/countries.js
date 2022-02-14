const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  const { name } = req.query;
  //console.log(nameLower);
  /* axios.get("https://restcountries.com/v3/all")
   .then((data)=>{
      return res.json(data.data);
   }); */
  if (name) {
    let nameLower = name.toLowerCase();
    return Country.findAll({
      where: {
        name: { [Op.startsWith]: nameLower },
      },
      include: {
        model: Activity,
      },
    })
      .then((countries) => {
        if (countries.length == 0) {
          return res.json("Sin coincidencias");
        } else {
          return res.json(countries);
        }
        //console.log(countries);
      })
      .catch((err) => console.log(err));
  } else {
    return Country.findAll({
      include: {
        model: Activity,
      },
    })
      .then((countries) => {
        //console.log(countries);
        return res.json(countries);
      })
      .catch((err) => console.log(err));
  }
});

router.get("/:idPais", (req, res) => {
  const { idPais } = req.params;
  let idPaisUpper = idPais.toUpperCase();
  //console.log(idPaisUpper);
  return Country.findByPk(idPaisUpper, {
    include: {
      model: Activity,
    },
  })
    .then((country) => {
      //console.log(country);
      return res.json(country);
    })
    .catch((err) =>
      res.status(404).json({ errorMsg: "ID de pais no encontrado", err })
    );
});

module.exports = router;
