import * as ONEAPI from "../services/api_3.5";
export default {
  namespace: "alllist",
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    saveList(state, { payload: data }) {
      return { ...state, list: data };
    }
  },
  effects: {
    *getList({ payload: data }, { put, call }) {
      let result,
        sessionResult = sessionStorage.getItem(data);
      if (sessionResult !== null) {
        result = JSON.parse(sessionResult);
      } else {
        result = yield call(ONEAPI.getTypeList, data);
        sessionStorage.setItem(data,JSON.stringify(result))
      }
      yield put({ type: "saveList", payload: result.data.data });
    }
  },
  subscriptions: {}
};
