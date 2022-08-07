//

import { Fragment } from "react";

function HomeEdit(props) {
  const homeData = props.homeData;

  return (
    <div className="edit">
      <h1>Home (edit)</h1>
      <hr />
      <div className="editrow">
        <label htmlFor="introduction">Introduction: </label>
        <input
          type="text"
          name="introduction"
          id="introduction"
          defaultValue={homeData.introduction}
        />
      </div>
      <div className="editrow">
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          defaultValue={homeData.description}
        />
      </div>
      <hr />
    </div>
  );
}

export default HomeEdit;
