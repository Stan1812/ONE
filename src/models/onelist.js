import * as ONEAPI from "../services/api_3.5";
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

      // 改改改
      let dates,
        sessionDate = sessionStorage.getItem("date");
      console.log(sessionDate !== null);
      if (sessionDate !== null) {
        dates = JSON.parse(sessionDate);
      } else {
        dates = yield ONEAPI.getDate();
        sessionStorage.setItem("date", JSON.stringify(dates));
      }
      yield put({
        type: "date/success",
        payload: { data: dates.data.data }
      });
      yield put({ type: "getOne", payload: dates.data.data[0] });
    },
    *getOne({ payload: date }, { put, call }) {
      let listResult,
        sessionOneList = sessionStorage.getItem("onelist");
      if (sessionOneList) {
        listResult = JSON.parse(sessionOneList);
      } else {
        listResult = yield ONEAPI.getOneList(date);
        sessionStorage.setItem("onelist", JSON.stringify(listResult));
      }
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
    }
  },
  subscriptions: {}
};
