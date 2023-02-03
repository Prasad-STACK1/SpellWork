import React, { useState, useEffect } from "react";
import "./doc.css";
function Asgard(props) {
  const [toggle, setToggle] = useState(false);

  // componentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Toogle Updated");
  }, [toggle]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component UnMount");
    };
  }, []);

  return (
    <div id="lokback">
      <h1>{props.title}</h1>
      {toggle && (
        <p>
          Loki Laufeyson,known by adoption as Loki Odinson and by his title as
          the God of Mischief, is a fictional character portrayed by Tom
          Hiddleston in the Marvel Cinematic Universe (MCU) media franchise,
          based on the Marvel Comics character of the same name and the Norse
          mythological god of the same name. Loki first appeared in Thor (2011)
          and has since become an important recurring figure of the MCU;
          following the original Loki's death in Avengers: Infinity War (2018),
          a variant of him from an alternate timeline is introduced in Avengers:
          Endgame (2019), diverging from the events of The Avengers (2012),
          headlining the television series Loki (2021) alongside Sylvie, a
          female variant of him who is his love interest.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)} id="lokb">
        Story of Loki
      </button>
    </div>
  );
}
export default Asgard;
