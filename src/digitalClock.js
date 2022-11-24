import React, { useState } from "react";

export function Digitalclock() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const upDateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(upDateTime, 1000);
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={upDateTime}>Get Time</button>
    </>
  );
}
