import React from "react";
import ForItem from "./ForItem";

export default function ForList({ src }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <ForItem book={elem} key={elem.isbn} />
        </React.Fragment>
      ))}
    </dl>
  );
}
