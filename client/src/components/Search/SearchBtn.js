import React from "react";

export function SearchBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success">
      Search
    </button>
  );
}