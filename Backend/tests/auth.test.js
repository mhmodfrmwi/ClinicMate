const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

describe("Auth and Basic Routes", () => {
  // Close DB connection after tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/api/unknown");
    expect(res.statusCode).toEqual(404);
  });

  // Since we don't have a dedicated health check route, we'll check how it handles a known route without auth
  it("should return 401/400 for protected/missing data on auth route", async () => {
    const res = await request(app).post("/api/rest/authRoute/login").send({});
    // Expect validation error (400) because body is empty
    expect(res.statusCode).toEqual(400); 
  });
});
