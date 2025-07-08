const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return Hello message", async () => {
    const res = await request(app).get("/");
    res.status.should.equal(200);
    res.text.should.equal("Hello, CI/CD World!");
  });
});
