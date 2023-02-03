import React, { useState, useEffect } from "react";
import "./doc.css";
function Kat(props) {
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
    <div id="docback">
      <h1>{props.title}</h1>
      {toggle && (
        <p>
          From Marvel Studios comes “Doctor Strange,” the story of world-famous
          neurosurgeon Dr. Stephen Strange whose life changes forever after a
          horrific car accident robs him of the use of his hands. When
          traditional medicine fails him, he is forced to look for healing, and
          hope, in an unlikely place—a mysterious enclave known as Kamar-Taj.
          Before long Strange—armed with newly acquired magical powers—is forced
          to choose whether to return to his life of fortune and status or leave
          it all behind to defend the world as the most powerful sorcerer in
          existence.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)} id="docb">
        Story of Strange
      </button>
    </div>
  );
}

export default Kat;
