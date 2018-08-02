import * as ONEAPI from "../services/api_3.5";
import { routerRedux } from 'dva/router';
export default {
  namespace: "onelist",
  state: {},
  reducers: {
    "date/start"(state) {
      return { ...state, isLoading: true };
    },
    "date/success"(state, action) {
      return {
        ...state,
        date: action.payload.data,
        loaded: true
      };
    },
    "list/success"(state, action) {
      return {
        ...state,
        weather: action.payload.data.weather,
        content: action.payload.data.content_list,
        menu: action.payload.data.menu.list,
        loaded: true
      };
    }
  },
  effects: {
    *getDate(action, { call, put }) {
      yield put({
        type: "date/start"
      });
      let dateResult = yield ONEAPI.getDate();
      yield put({
        type: "date/success",
        payload: { data: dateResult.data.data }
      });
      let listResult = yield ONEAPI.getOneList(dateResult.data.data[0]);
      yield put({
        type: "list/success",
        payload: listResult.data
      });
    },
    *sendOneId(action, { put }) {
      yield put({
        type: "detail/current",
        payload: { data: action.payload.data }
      });
      // yield put({
          
      // })
    }
  },
  subscriptions: {}
};
