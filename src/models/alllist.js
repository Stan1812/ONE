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
      yield call(ONEAPI.getTypeList, data);
      yield put({ type: "add", payload: data });
    }
  },
  subscriptions: {}
};
