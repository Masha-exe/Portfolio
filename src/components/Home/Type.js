import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Communaut√© amicale",
          "Communaut√© LBTQ+",
          "Actif et qui s'agrandis de jour en jour",
          "Recrute activement",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
