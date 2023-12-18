import config from "../app/config";
import admin from "../app/middleware/admin";
import jwt from "jsonwebtoken";

describe("Admin Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  it("should return 401 if no token provided", () => {
    admin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("Access denied. No token provided.");
  });

  it("should return 403 if user is not admin", () => {
    const userToken = jwt.sign(
      { role: "user", isAdmin: false },
      config.JwtSecret
    );
    req.headers.authorization = `Bearer ${userToken}`;

    admin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith("Access denied.");
  });

  it("should return 400 if token is invalid", () => {
    const invalidToken = "invalid-token";
    req.headers.authorization = `Bearer ${invalidToken}`;

    admin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Invalid token.");
  });

  it("should call next() if user is admin", () => {
    const adminToken = jwt.sign({ role: "admin" }, config.JwtSecret);
    req.headers.authorization = `Bearer ${adminToken}`;

    admin(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
