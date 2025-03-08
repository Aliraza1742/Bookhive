import React from "react";
import PropTypes from "prop-types";

const Card = ({ 
  image, 
  title = "Untitled", 
  subtitle, 
  description, 
  footer, 
  maxWidth = "max-w-sm" 
}) => {
  return (
    <div
      className={`${maxWidth} bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300`}
      role="article"
      aria-labelledby="card-title"
    >
      {/* Conditional rendering for image */}
      {image ? (
        <img
          src={image}
          alt={title || "Card image"}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        <h2 id="card-title" className="text-xl font-semibold text-blue-700">
          {title}
        </h2>
        {subtitle && <h3 className="text-sm text-gray-600">{subtitle}</h3>}
        {description && (
          <p className="mt-2 text-gray-700 text-sm">{description}</p>
        )}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

// Prop validation
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.node,
  maxWidth: PropTypes.string,
};

// Default Props
Card.defaultProps = {
  image: null,
  title: "Untitled",
  subtitle: null,
  description: null,
  footer: null,
  maxWidth: "max-w-sm",
};

export default Card;
