import mongoose from "mongoose";
import supertest from "supertest";
import config from "../app/config";
import app from "../app/app";
import userDAO from "../app/DAO/userDAO";
import tokenDAO from "../app/DAO/tokenDAO";
import articleDAO from "../app/DAO/articleDAO";

const userData = {
  email: "test5@gmail.pl",
  name: "Justyna5",
  role: userDAO.userRole.admin,
};

describe("article test", () => {
  let user = {};
  let token = {};
  let article = {};

  beforeEach(async () => {
    await mongoose.connect(config.databaseUrl);
    user = await userDAO.createNewOrUpdate(userData);
    token = await tokenDAO.create(user);
    article = await articleDAO.createNewOrUpdate({
      title: "test2",
      content: "test2",
    });
  });

  afterEach(async () => {
    await userDAO.removeById(user.id);
    await articleDAO.removeById(article.id);
    user = {};
    await mongoose.connection.close();
  });

  describe("GET /api/article/getAll", () => {
    it("should return all articles", async () => {
      const response = await supertest(app)
        .get("/api/article/getAll")
        .set("Authorization", token.value);
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
    it("should return status code 401 when token is not provided", async () => {
      const response = await supertest(app)
        .get("/api/article/getAll")
        .set("Authorization", "");
      expect(response.statusCode).toBe(401);
    });
  });

  describe("POST /api/article/create", () => {
    it("should create article", async () => {
      const mockData = {
        title: "test",
        content: "test",
      };
      const response = await supertest(app)
        .post("/api/article/create")
        .send(mockData)
        .set("Authorization", token.value);
      expect(response.statusCode).toBe(200);
    });
    it("should return status code 401 when token is not provided", async () => {
      const response = await supertest(app)
        .post("/api/article/create")
        .set("Authorization", "");
      expect(response.statusCode).toBe(401);
    });
  });

  describe("DELETE /api/article/:articleId", () => {
    it("should delete article", async () => {
      const response = await supertest(app)
        .delete("/api/article/" + article.id)
        .set("Authorization", token.value);
      expect(response.statusCode).toBe(200);
    });
    it("should return status code 401 when token is not provided", async () => {
      const response = await supertest(app)
        .delete("/api/article/:articleId")
        .set("Authorization", "");
      expect(response.statusCode).toBe(401);
    });
  });

  describe("GET /api/article/get/:articleId", () => {
    it("should return one article", async () => {
      const response = await supertest(app)
        .get("/api/article/get/" + article.id)
        .set("Authorization", token.value);
      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe("test2");
    });
    it("should return status code 401 when token is not provided", async () => {
      const response = await supertest(app)
        .get("/api/article/get/:articleId")
        .set("Authorization", "");
      expect(response.statusCode).toBe(401);
    });
  });
});
