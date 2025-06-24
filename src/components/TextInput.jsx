import React from 'react';

const TextInput = ({ label, type = 'text', value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ display: 'block',
             width: '100%', 
             padding: '8px', 
             marginTop: '4px',
             border: error ? '2px solid red' : '1px solid #ccc',
             borderRadius: '4px'
         }}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextInput;
