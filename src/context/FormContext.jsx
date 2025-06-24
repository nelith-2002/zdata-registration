import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
    // Store the values from all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Store validation errors for each field
  const [errors, setErrors] = useState({});
  // Track which step of the form the user is on (1 or 2)
  const [step, setStep] = useState(1);
   // Track loading state during form submission
  const [loading, setLoading] = useState(false);

  return (
     // Expose state and setters to all components wrapped in this context
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        step,
        setStep,
        loading,
        setLoading
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
