/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);

const activity = {
  name: "Hicking",
  duration: 5,
  difficulty: 4,
  season: "spring",
  countries: ["HKG", "RWA", "MYS"],
};

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );
  describe("POST /activities", () => {
    it("should get 200", (done) => {
      agent.post("/activities").expect(200);
      done();
    });
  });
});
