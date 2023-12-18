import expenseCategoryDAO from "../app/DAO/expenseCategoryDAO";
import monthBudgetDAO from "../app/DAO/monthBudgetDAO";
import businessContainer from "../app/business/business.container";
import expenseDAO from "../app/DAO/expenseDAO";
import applicationException from "../app/service/applicationException";

jest.mock("../app/DAO/expenseCategoryDAO");
jest.mock("../app/DAO/monthBudgetDAO");
jest.mock("../app/DAO/expenseDAO");

describe("createNewOrUpdate", () => {
  it("should create or update expense category and return result", async () => {
    const expenseCategory = {
      monthBudgetId: "example-budget-id",
      amount: 50,
    };

    expenseCategoryDAO.getAllForMonthlyBudgetId.mockResolvedValue([]);
    monthBudgetDAO.get.mockResolvedValue({ amount: 100 });
    expenseCategoryDAO.createNewOrUpdate.mockResolvedValue({
      id: "example-id",
    });

    const result = await businessContainer
      .getExpenseCategoryManager()
      .createNewOrUpdate(expenseCategory);

    expect(expenseCategoryDAO.getAllForMonthlyBudgetId).toHaveBeenCalledWith(
      "example-budget-id"
    );
    expect(monthBudgetDAO.get).toHaveBeenCalledWith("example-budget-id");
    expect(expenseCategoryDAO.createNewOrUpdate).toHaveBeenCalledWith(
      expenseCategory
    );

    expect(result).toEqual({ id: "example-id" });
  });

  it("should return information about expenses in a category", async () => {
    const expenseCategoryId = "example-category-id";

    const expenseCategory = {
      amount: "100",
    };

    const expenses = [{ amount: "30" }, { amount: "40" }];

    expenseCategoryDAO.get.mockResolvedValue(expenseCategory);
    expenseDAO.getAllForExpenseCategory.mockResolvedValue(expenses);

    const result = await businessContainer
      .getExpenseCategoryManager()
      .getExpense(expenseCategoryId);

    expect(expenseCategoryDAO.get).toHaveBeenCalledWith(expenseCategoryId);
    expect(expenseDAO.getAllForExpenseCategory).toHaveBeenCalledWith(
      expenseCategoryId
    );

    const expectedData = {
      amount: "100",
      spend: 70,
      id: "example-category-id",
    };
    expect(result).toEqual(JSON.stringify(expectedData));
  });
});
