/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
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

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", (done) => {
      agent.get("/countries").expect(200);
      done();
    });
    it("should get an array", (done) => {
      agent.get("/countries").then((res) => expect(res).to.be("array"));
      done();
    });
    it("each item should be an object", (done) => {
      agent
        .get("/countries")
        .then((res) => expect(res[0]).to.be.equal(activity));
      done();
    });
  });
  describe("GET /countries?name=...", () => {
    it("should return status 404 when name not found", (done) => {
      agent.get("/countries?name=som").expect(404);
      done();
    });
    it("should return error message", (done) => {
      agent
        .get("/countries?name=som")
        .then((res) => expect(res.message).to.be.equal("No country found"));
      done();
    });
    it("should return 200 when country found", (done) => {
      agent.get("/countries?name=M").expect(200);
      done();
    });
    it("should return country found", (done) => {
      agent
        .get("/countries?name=M")
        .then((res) => expect(res.message).to.be.equal("No country found"));
      done();
    });
  });
});
