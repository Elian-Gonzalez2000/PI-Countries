const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

router.get("/", async (req, res) => {
   try {
      const activities = await Activity.findAll({ include: Country });
      return res.json(activities);
   } catch (error) {
      console.log(error);
   }
});

router.post("/", async (req, res) => {
   try {
      const { name, dificultad, duracion, temporada, countries } = req.body;
      if (!name.trim())
         return res
            .status(400)
            .json({ errorMsg: "Nombre de actividad no definido" });
      if (countries.length === 0)
         return res
            .status(400)
            .json({ errorMsg: "No se definieron paises para la actividad" });

      console.log(temporada);
      const createActivity = await Activity.create({
         name,
         difficulty: dificultad,
         season: `${temporada}`,
         duration: duracion,
      });
      countries.forEach(async (country) => {
         let activityCountry = await Country.findOne({
            where: {
               ID: country,
            },
         });
         await createActivity.addCountry(activityCountry);
      });
      console.log(req.body);
      res.status(200).json({ msg: "se creo exitosamente" });
   } catch (error) {
      console.log(error);
      return res
         .status(400)
         .json({ errorMsg: "No se pudo crear la actividad", err });
   }
});

module.exports = router;
