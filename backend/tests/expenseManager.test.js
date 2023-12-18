import expenseCategoryDAO from "../app/DAO/expenseCategoryDAO";
import expenseDAO from "../app/DAO/expenseDAO";
import businessContainer from "../app/business/business.container";

jest.mock("../app/DAO/expenseCategoryDAO");
jest.mock("../app/DAO/expenseDAO");

describe("createNewOrUpdate", () => {
  it("should create or update an expense and return the result", async () => {
    const expense = {
      expenseCategoryId: "example-category-id",
      amount: 50,
    };

    const expenseCategory = {
      amount: 100,
    };

    const allExpenses = [{ amount: 20 }, { amount: 30 }];

    expenseCategoryDAO.get.mockResolvedValue(expenseCategory);
    expenseDAO.getAllForExpenseCategory.mockResolvedValue(allExpenses);
    expenseDAO.createNewOrUpdate.mockResolvedValue({ id: "example-id" });

    const result = await businessContainer
      .getExpenseManager()
      .createNewOrUpdate(expense);

    expect(expenseCategoryDAO.get).toHaveBeenCalledWith("example-category-id");
    expect(expenseDAO.getAllForExpenseCategory).toHaveBeenCalledWith(
      "example-category-id"
    );
    expect(expenseDAO.createNewOrUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        expenseCategoryId: "example-category-id",
        amount: 50,
        creationDate: expect.any(String),
      })
    );

    expect(result).toEqual({ id: "example-id" });
  });
});
