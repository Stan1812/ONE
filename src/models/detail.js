import * as ONEAPI from "../services/api_3.5";
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
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/detail") {
          // dispatch({ type: "load" });
          console.log("enter detail");
        }
      });
    }
  }
};
