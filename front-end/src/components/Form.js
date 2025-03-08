import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking

const Form = ({ title, fields = [], onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">{title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="text-sm font-semibold text-gray-700"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={field.placeholder}
                rows="4"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Add default props
Form.defaultProps = {
  title: "Form",
  fields: [], // Default to an empty array
  onSubmit: () => {}, // Default to an empty function
};

// Add PropTypes for type checking
Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};

export default Form;