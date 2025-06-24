import React, { useEffect, useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { validateStep1 } from '../utils/validation';


const Step1 = ({ formData, setFormData, errors, onNext}) => {

  const [disableNext, setDisableNext] = useState(true);
  const [localErrors, setLocalErrors] = useState({});

  useEffect(() => {
    const currentErrors = validateStep1(formData);
    setLocalErrors(currentErrors);
    setDisableNext(Object.keys(currentErrors).length > 0);
  }, [formData]);


  return (
    <div className="step1-container">
      <h2>Step 1: Personal Information</h2>

      <TextInput
        label="Full Name*"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
         error={localErrors.fullName}
      />

      <TextInput
        label="Email*"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
       error={localErrors.email}
      />

      <TextInput
        label="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
         error={localErrors.phone} 
      />

      <Button onClick={onNext} disabled={disableNext}>Next</Button>
    </div>
  );
};

export default Step1;
