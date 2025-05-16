import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import App from "./App";
import ForList from "./components/ForList";
import books from "./books";
import SelectStyles from "./components/SelectStyles";
import ListTemplate from "./components/ListTemplate";
import MyHello from "./components/MyHello";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ForList src={books} />
    <SelectStyles mode="dark" />
    <ListTemplate src={books}>
      {(elem) => (
        <>
          <dt>
            <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
              {elem.title} ({elem.price}원)
            </a>
          </dt>
        </>
      )}
    </ListTemplate>
    <MyHello myName={0} />
  </React.StrictMode>
);

reportWebVitals();
