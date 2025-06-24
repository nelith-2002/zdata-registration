import React from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const SecurityDetails = ({ formData, setFormData, errors, onSubmit, onBack }) => {
  return (
    <div className="step2-container">
      <h2>Step 2: Security Details</h2>

      <TextInput
        label="Password*"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
      />

      <TextInput
        label="Confirm Password*"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        error={errors.confirmPassword}
      />

      <div style={{ marginTop: '1rem' }}>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onSubmit} style={{ marginLeft: '1rem' }}>Submit</Button>
      </div>
    </div>
  );
};

export default SecurityDetails;
