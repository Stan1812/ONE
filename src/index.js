import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva({
  initialState: {
    alllist: [{ name: "dva", id: 1 }, { name: "antd", id: 2 }],
    onelist: { content: [], date: [], menu: [], weather: {} },
    detail: { detailInfo: {} }
  }
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/alllist").default);
app.model(require("./models/onelist").default);
app.model(require("./models/detail").default);
// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
