import { BUDGET_ENTITIES, BUDGET_LISTS } from '../organization-state';
import { Budget } from '../../../model/budget.model';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { BudgetActions } from './index';

const budgetCode = 'testBudgetId';
const budget: Budget = {
  code: budgetCode,
};
const userId = 'xxx@xxx.xxx';
const error = 'anError';
const params = { currentPage: 2 };
const query = 'pageSize=&currentPage=2&sort=';

const pagination = { currentPage: 1 };
const sorts = [{ selected: true, name: 'code' }];
const budgetPage = { ids: [budgetCode], pagination, sorts };

describe('Budget Actions', () => {
  describe('LoadBudget Actions', () => {
    describe('LoadBudget', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudget({
          userId,
          budgetCode,
        });

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGET,
          payload: { userId, budgetCode },
          meta: StateEntityLoaderActions.entityLoadMeta(
            BUDGET_ENTITIES,
            budgetCode
          ),
        });
      });
    });

    describe('LoadBudgetFail', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudgetFail(budgetCode, error);

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGET_FAIL,
          payload: error,
          meta: StateEntityLoaderActions.entityFailMeta(
            BUDGET_ENTITIES,
            budgetCode,
            error
          ),
        });
      });
    });

    describe('LoadBudgetSuccess', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudgetSuccess([budget]);

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGET_SUCCESS,
          payload: [budget],
          meta: StateEntityLoaderActions.entitySuccessMeta(BUDGET_ENTITIES, [
            budgetCode,
          ]),
        });
      });
    });
  });

  describe('LoadBudgets Actions', () => {
    describe('LoadBudgets', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudgets({
          userId,
          params,
        });

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGETS,
          payload: { userId, params },
          meta: StateEntityLoaderActions.entityLoadMeta(BUDGET_LISTS, query),
        });
      });
    });

    describe('LoadBudgetsFail', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudgetsFail({
          params,
          error: { error },
        });

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGETS_FAIL,
          payload: { params, error: { error } },
          meta: StateEntityLoaderActions.entityFailMeta(BUDGET_LISTS, query, {
            error,
          }),
        });
      });
    });

    describe('LoadBudgetsSuccess', () => {
      it('should create the action', () => {
        const action = new BudgetActions.LoadBudgetsSuccess({
          budgetPage,
          params,
        });

        expect({ ...action }).toEqual({
          type: BudgetActions.LOAD_BUDGETS_SUCCESS,
          payload: { budgetPage, params },
          meta: StateEntityLoaderActions.entitySuccessMeta(BUDGET_LISTS, query),
        });
      });
    });
  });

  describe('CreateBudget Actions', () => {
    describe('CreateBudget', () => {
      it('should create the action', () => {
        const action = new BudgetActions.CreateBudget({ userId, budget });

        expect({ ...action }).toEqual({
          type: BudgetActions.CREATE_BUDGET,
          payload: { userId, budget },
          meta: StateEntityLoaderActions.entityLoadMeta(
            BUDGET_ENTITIES,
            budgetCode
          ),
        });
      });
    });

    describe('CreateBudgetFail', () => {
      it('should create the action', () => {
        const action = new BudgetActions.CreateBudgetFail(budgetCode, error);

        expect({ ...action }).toEqual({
          type: BudgetActions.CREATE_BUDGET_FAIL,
          payload: error,
          meta: StateEntityLoaderActions.entityFailMeta(
            BUDGET_ENTITIES,
            budgetCode,
            error
          ),
        });
      });
    });

    describe('CreateBudgetSuccess', () => {
      it('should create the action', () => {
        const action = new BudgetActions.CreateBudgetSuccess(budget);

        expect({ ...action }).toEqual({
          type: BudgetActions.CREATE_BUDGET_SUCCESS,
          payload: budget,
          meta: StateEntityLoaderActions.entitySuccessMeta(
            BUDGET_ENTITIES,
            budgetCode
          ),
        });
      });
    });
  });

  describe('UpdateBudget Actions', () => {
    describe('UpdateBudget', () => {
      it('should create the action', () => {
        const action = new BudgetActions.UpdateBudget({
          userId,
          budgetCode,
          budget,
        });

        expect({ ...action }).toEqual({
          type: BudgetActions.UPDATE_BUDGET,
          payload: { userId, budgetCode, budget },
          meta: StateEntityLoaderActions.entityLoadMeta(
            BUDGET_ENTITIES,
            budgetCode
          ),
        });
      });
    });

    describe('UpdateBudgetFail', () => {
      it('should create the action', () => {
        const action = new BudgetActions.UpdateBudgetFail(budgetCode, error);

        expect({ ...action }).toEqual({
          type: BudgetActions.UPDATE_BUDGET_FAIL,
          payload: error,
          meta: StateEntityLoaderActions.entityFailMeta(
            BUDGET_ENTITIES,
            budgetCode,
            error
          ),
        });
      });
    });

    describe('UpdateBudgetSuccess', () => {
      it('should create the action', () => {
        const action = new BudgetActions.UpdateBudgetSuccess(budget);

        expect({ ...action }).toEqual({
          type: BudgetActions.UPDATE_BUDGET_SUCCESS,
          payload: budget,
          meta: StateEntityLoaderActions.entitySuccessMeta(
            BUDGET_ENTITIES,
            budgetCode
          ),
        });
      });
    });
  });
});