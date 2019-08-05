import React from "react";

export default function Controlled() {
  const [value, setValue] = React.useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Controlled Name"
        onChange={event => setValue(event.target.value)}
        value={value}
      />
    </form>
  );
}
