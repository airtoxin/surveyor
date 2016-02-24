import React from "react";
import ReactDom from "react-dom";
import Main from "./main";

const initialSettings = {
    run: false,
    distance: "1m"
};

ReactDom.render(
    (<Main initialSettings={initialSettings} />),
    document.getElementById("app")
);
