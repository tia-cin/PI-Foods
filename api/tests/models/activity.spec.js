const { Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

const activity = {
  name: "Hicking",
  duration: 5,
  difficulty: 4,
  season: "spring",
  countries: ["HKG", "RWA", "MYS"],
};

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    before(() => Activity.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Activity.create({ name: "" })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
    describe("id", () => {
      it("should throw an error if id is null", (done) => {
        Activity.create({ id: null })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid id", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
    describe("difficulty", () => {
      it("should throw an error if difficulty is null", (done) => {
        Activity.create({ difficulty: "" })
          .then(() => done(new Error("It requires a valid difficulty")))
          .catch(() => done());
      });
      it("should work when its a valid difficulty", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
    describe("duration", () => {
      it("should throw an error if duration is null", (done) => {
        Activity.create({ duration: null })
          .then(() => done(new Error("It requires a valid duration")))
          .catch(() => done());
      });
      it("should work when its a valid duration", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
    describe("season", () => {
      it("should throw an error if season is null", (done) => {
        Activity.create({ season: "" })
          .then(() => done(new Error("It requires a valid season")))
          .catch(() => done());
      });
      it("should work when its a valid season", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
    describe("countries", () => {
      it("should throw an error if countries is null", (done) => {
        Activity.create({ countries: [] })
          .then(() => done(new Error("It requires a valid countries")))
          .catch(() => done());
      });
      it("should work when its a valid countries", (done) => {
        Activity.create(activity)
          .then(() => done())
          .catch((err) => done(err.message));
      });
    });
  });
});
