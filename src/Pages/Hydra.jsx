import React, { useState, useEffect } from "react";
import "./doc.css";
function Hydra(props) {
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
    <div id="wanback">
      <h1>{props.title}</h1>
      {toggle && (
        <p>
          Wanda Maximoff is a fictional character portrayed by Elizabeth Olsen
          in the Marvel Cinematic Universe (MCU) media franchise based on the
          Marvel Comics character of the same name. Wanda is depicted as a
          Sokovian refugee who, along with her twin brother Pietro, volunteers
          to be experimented on by Hydra. The Mind Stone amplifies her natural
          telekinetic and energy manipulation abilities known as Chaos magic.
          Wanda initially comes into conflict with the Avengers but later joins
          them and becomes one of the most powerful members. She develops a
          romantic relationship with Vision, and after his death and the Blip,
          Wanda becomes mentally unstable and uses her abilities to manipulate
          an entire town into a false reality she creates to her liking. This
          brings her into conflict with S.W.O.R.D. and Agatha Harkness, causing
          her to eventually free the town and tap into her latent powers when
          she assumes the ancient title of the Scarlet Witch.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)} id="wanb">
        Story of Wanda
      </button>
    </div>
  );
}
export default Hydra;
