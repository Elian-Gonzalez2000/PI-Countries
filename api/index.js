//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require('./src/db.js');
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true}).then(async () => {
   const apiResponse = await axios.get("https://restcountries.com/v3/all");
   const apiResults = apiResponse.data;
   let api = apiResults.map((country)=>{
         return {
            ID: country.cca3,
            name: country.name.common.toLowerCase(),
            flagImg: country.flags[0],
            continent: country.continents[0],
            subregion: country.subregion,
            capital: country.capital ? country.capital[0] : "No Tiene",
            area: country.area,
            population: country.population,
         }
   });
   //console.log(api);
   await Country.bulkCreate(api);

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
