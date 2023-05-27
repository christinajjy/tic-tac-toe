import React from "react";
export default function Board() {
  return(
  <div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
  </div>
  ); 
}
function Square(){
  return <button className="square">1</button>
}
