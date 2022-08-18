import React, { useState } from "react";

function FormInput({ newPost }) {
  const [value, setValue] = useState("");

  function valueInputHandler(e) {
    setValue(e.target.value);
  }

  async function buttonHandler(e) {
    e.preventDefault();
    if (!value.trim(e)) return null;
    const content = {
      value: value,
      id: Math.random(),
    };
    newPost(content);
    setValue("");
     await fetch(
      "https://beckand-51e35-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(content),
      }
    );
  }

  return (
    <form>
      <input value={value} onChange={valueInputHandler} type="text" />
      <button onClick={buttonHandler}>Add</button>
    </form>
  );
}

export default FormInput;
