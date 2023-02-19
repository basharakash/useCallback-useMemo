import React from "react";
function Title() {
    console.log("Rendaring title..............");
    return <h1>UseState & UseMemo tutorial Class</h1>;
}

export default React.memo(Title);
