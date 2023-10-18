import React, { useState } from "react";
import "./Address.css";

export default function Address() {
  const [formData, setFormData] = useState({
    street: "",
    postalCode: "",
    city: "",
    country: "Option 1",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Street: ${formData.street}, Postal Code: ${formData.postalCode}, Country: ${formData.country}`
    );
  };

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, country: event.target.value });
  };

  return (
    <div className="Address">
      <h1>Address</h1> {/* Title for the form */}
      <form onSubmit={handleSubmit}>
        {/* Form elements as before */}
        <label className="Address__text" htmlFor="street">
          Street:
          <input
            type="text"
            id="street"
            className="Address__input"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </label>

        <label className="Address__text" htmlFor="postalCode">
          Postal Code:
          <input
            type="text"
            id="postalCode"
            className="Address__input"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </label>

        <label className="Address__text" htmlFor="city">
          City:
          <input
            type="text"
            id="city"
            className="Address__input"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>

        <label className="Address__text" htmlFor="country">
          Country:
          <select
            className="Address__input"
            value={formData.country}
            onChange={handleDropdownChange}
          >
            <option value="Option 1">Canada</option>
            <option value="Option 2">Georgia</option>
            <option value="Option 3">Ukraine</option>
          </select>
        </label>

        <button className="Address__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
