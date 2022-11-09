const { Activity, conn } = require("../../src/db.js");
const { expect, should } = require("chai");

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
      it("should type of name be an string", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].name).to.be.a("string"))
          .catch((err) => err.message);
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
      it("should type of id be an number (uuid)", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].id).to.be.a("number"))
          .catch((err) => err.message);
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
      it("should type of difficulty be an string", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].difficulty).to.be.a("string"))
          .catch((err) => err.message);
      });
      it("should be a number between 1 and 5", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].difficulty).to.not.equal("6"))
          .catch((err) => err.message);
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
      it("should type of duration be an number", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].duration).to.be.a("number"))
          .catch((err) => err.message);
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
      it("should type of season be an string", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].season).to.be.a("string"))
          .catch((err) => err.message);
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
      it("should type of countries be an array", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].countries).to.be.a("array"))
          .catch((err) => err.message);
      });
      it("each item should be a string", async () => {
        await Activity.create(activity)
          .then((res) => expect(res[0].countries[0]).to.be.a("string"))
          .catch((err) => err.message);
      });
    });
  });
});
