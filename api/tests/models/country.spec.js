const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

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

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    before(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({ name: "" })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", async () => {
        await Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => err.message);
      });
    });
    describe("official", () => {
      it("should throw an error if official is null", (done) => {
        Country.create({ official: "" })
          .then(() => done(new Error("It requires a valid official")))
          .catch(() => done());
      });
      it("should work when its a valid official", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("id", () => {
      it("should throw an error if id is null", (done) => {
        Country.create({ id: "" })
          .then(() => done(new Error("It requires a valid id")))
          .catch(() => done());
      });
      it("should work when its a valid id", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("continent", () => {
      it("should throw an error if continent is null", (done) => {
        Country.create({ continent: "" })
          .then(() => done(new Error("It requires a valid continent")))
          .catch(() => done());
      });
      it("should work when its a valid continent", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("capital", () => {
      it("should throw an error if capital is null", (done) => {
        Country.create({ capital: "" })
          .then(() => done(new Error("It requires a valid capital")))
          .catch(() => done());
      });
      it("should work when its a valid capital", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("region", () => {
      it("should throw an error if region is null", (done) => {
        Country.create({ region: "" })
          .then(() => done(new Error("It requires a valid region")))
          .catch(() => done());
      });
      it("should work when its a valid region", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("subregion", () => {
      it("should throw an error if subregion is null", (done) => {
        Country.create({ subregion: "" })
          .then(() => done(new Error("It requires a valid subregion")))
          .catch(() => done());
      });
      it("should work when its a valid subregion", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("area", () => {
      it("should throw an error if area is null", (done) => {
        Country.create({ area: null })
          .then(() => done(new Error("It requires a valid area")))
          .catch(() => done());
      });
      it("should work when its a valid area", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("population", () => {
      it("should throw an error if population is null", (done) => {
        Country.create({ population: null })
          .then(() => done(new Error("It requires a valid population")))
          .catch(() => done());
      });
      it("should work when its a valid population", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
    describe("independent", () => {
      it("should throw an error if independent is null", (done) => {
        Country.create({ independent: null })
          .then(() => done(new Error("It requires a valid independent")))
          .catch(() => done());
      });
      it("should work when its a valid independent", () => {
        Country.create(country)
          .then((res) =>
            expect(res.message).to.equal("Countries added to database!")
          )
          .catch((err) => done(err.message));
      });
    });
  });
});
