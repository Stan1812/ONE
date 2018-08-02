import * as ONEAPI from "../services/api_3.5";
import { routerRedux } from 'dva/router';
import { select } from "redux-saga/effects";
export default {
  namespace: "detail",
  state: {},
  reducers: {
    current(state, action) {
      return {
        ...state,
        currentArticle: action.payload.data
      };
    },
    setCurArticle(state, action) {
      return {
        ...state,
        article: action.payload.data.data
      };
    }
  },
  effects: {
    *getDetail(action, { put }) {
      let result = yield ONEAPI.getArticleDetail(action.payload.typeInfo);
      console.log(result);
      yield put({
        type: "setCurArticle",
        payload: { data: result.data }
      });
    },
    // *director(action, { put, call, select }) {
    //   let result = yield select(state => state.detail.currentArticle);
    //   console.log(result);
    //   if (result) {
    //     //  history.go(-1)
    //     yield put(routerRedux.go(-1));
    //   }
    // }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/detail") {
          // const isRedirect = select(state => state.detail.currentArticle);
          // console.log(isRedirect);
          // dispatch({ type: "director" });
          console.log("enter detail");
        }
      });
    }
  }
};
