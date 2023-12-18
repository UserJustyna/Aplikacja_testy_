import mongoose from "mongoose";
import supertest from "supertest";
import config from "../app/config";
import app from "../app/app";
import userDAO from "../app/DAO/userDAO";
import tokenDAO from "../app/DAO/tokenDAO";

const userData = {
  email: "test3@gmail.pl",
  name: "Justyna3",
  role: userDAO.userRole.admin,
};

describe("article test", () => {
  let user = {};
  let token = {};

  beforeEach(async () => {
    await mongoose.connect(config.databaseUrl);
    user = await userDAO.createNewOrUpdate(userData);
    token = await tokenDAO.create(user);
  });

  afterEach(async () => {
    await userDAO.removeById(user.id);
    user = {};
    await mongoose.connection.close();
  });

  describe("POST /api/monthBudget/create", () => {
    it("should create monthly budget", async () => {
      const mockData = {
        userId: user.id,
        amount: "2000",
        month: "10.01.2022",
        year: "10.01.2022",
      };
      const response = await supertest(app)
        .post("/api/monthBudget/create")
        .send(mockData)
        .set("Authorization", token.value);
      expect(response.statusCode).toBe(200);
    });
    it("should return status code 401 when token is not provided", async () => {
      const response = await supertest(app)
        .post("/api/monthBudget/create")
        .set("Authorization", "");
      expect(response.statusCode).toBe(401);
    });
  });
});
