import * as ONEAPI from "../services/api_3.5";

export default {
  namespace: "onelist",
  state: {
    content: []
  },
  reducers: {
    "onelist/start"(state) {
      return { ...state, isLoading: true };
    },

    "onelist/end"(state) {
      return { ...state, isLoading: false };
    },

    "onslist/error"(state, action) {
      return { ...state, getListErrorMsg: action.payload };
    },

    "onelist/success"(state, action) {
      return { ...state, ...action.payload, loaded: true, getListErrorMsg: "" };
    }
  },
  effects: {
    *getOneList(action, { put }) {
      yield put({
        type: "oneList/start"
      });
      let date = action.payload.date;
      let result = yield ONEAPI.getDate(date);

      if (result.message) {
        yield put({
          type: "onelist/error",
          payload: result.message
        });
      } else {
        yield put({
          type: "onelist/success",
          payload: { result }
        });
        yield put({
          type: "onelist/sync"
        });
      }
      yield put({
        type: "onelist/end"
      });
    },
    *getDate() {}
  },
  subscriptions: {}
};
