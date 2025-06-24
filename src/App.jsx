import React, { useContext, useEffect, useState } from 'react';
import Step1 from './pages/Step1';
import SecurityDetails from './pages/SecurityDetails';
import { registerUser } from './services/registerService';
import { ToastContainer, toast } from 'react-toastify';
import { FormContext } from './context/FormContext';
import { validateStep1, validateStep2 } from './utils/validation';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from './components/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';



function App() {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    step,
    setStep,
    loading,
    setLoading
  } = useContext(FormContext);

  

  const handleNext = () => {
    const newErrors = validateStep1(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async () => {
    const newErrors = validateStep2(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await registerUser(formData);
        console.log('Registration successful:', response.data);
        toast.success('Registration successful!');
      } catch (error) {
        console.error('Registration failed:', error);
        toast.error('Registration failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="App">
      {loading && <p>Submitting...</p>}
      <ProgressBar formData={formData}/>
      
     <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onNext={handleNext}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SecurityDetails
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
