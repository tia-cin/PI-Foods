/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  name: "Milanga",
  official: "Milanesa a la napolitana",
  id: "MLG",
  continent: "South America",
  capital: "Milanesonia",
  region: "Buenos Aires",
  subregion: "CABA",
  area: 100,
  population: 2000,
  independent: true,
};
const activity = {
  name: "Hicking",
  duration: 5,
  difficulty: 4,
  season: "spring",
  countries: ["HKG", "RWA", "MYS"],
};

// describe("Country routes", () => {
//   before(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );
//   beforeEach(() =>
//     Country.sync({ force: true }).then(() => Country.create(recipe))
//   );
//   beforeEach(() =>
//     Activity.sync({ force: true }).then(() => Activity.create(activity))
//   );
//   describe("GET /countries", () => {
//     it("should get 200", () => agent.get("/countries").expect(200));
//   });
//   describe("GET /activities", () => {
//     it("should get 200", () => agent.get("/activities").expect(200));
//   });
// });
