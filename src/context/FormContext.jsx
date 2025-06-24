import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
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
