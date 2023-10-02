import { useRef, useState } from "react";

export default function Ref() {
  const [name, setName] = useState();
  const inpRef = useRef();

  function focus() {
    inpRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={inpRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name}</p>
      <button onClick={focus}>click me</button>
    </div>
  );
}
