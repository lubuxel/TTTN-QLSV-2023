import React from "react";

class HandleClick extends React.Component {
  render() {
    const { type, name, placeholder, value, handleChange } = this.props;
    return (
      <>
        <div className="user clo-1">
          <input            
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
}

export default HandleClick;