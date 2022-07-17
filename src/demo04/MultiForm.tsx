import React, { useState } from "react";

function MultiForm() {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "isGoing":
        setIsGoing(value);
        break;
      default:
        setNumberOfGuests(value);
        break;
    }
  };

  const handleSubmit = () => {
    alert("is going" + isGoing + " " + "number of guests: " + numberOfGuests);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        参与:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        来宾人数:
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}

export default MultiForm;
