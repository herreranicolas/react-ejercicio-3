import { useState } from "react";

const Saludo = ({ nuevoMensaje }) => {
  const [msj, setMsj] = useState("");

  const handleClick = () => {
    if (msj === "") {
      setMsj(" (from changed state)");
    }

    if (msj.length > 0) {
      setMsj("");
    }
  };

  return (
    <>
      <h1>
        Hello {nuevoMensaje}
        {msj}!
      </h1>
      <button onClick={handleClick}>¡Click me!</button>
    </>
  );
};

export default Saludo;
