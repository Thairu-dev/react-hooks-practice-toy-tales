import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const toyCards=toys.map((toy)=>(
    <ToyCard key={toy.id}
    toy={toy}
    />
  ))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
