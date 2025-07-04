import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ formData }) => {
  let progress = 0;

  // Step 1 field validations
  const isFullNameValid = formData.fullName.trim() !== '';
  const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
   // Step 2 field validations
  const isPasswordValid = formData.password.length >= 6;
  const isConfirmPasswordValid = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

  // Increase progress in 25% increments for each valid field
  if (isFullNameValid) progress += 25;
  if (isEmailValid) progress += 25;
  if (isPasswordValid) progress += 25;
  if (isConfirmPasswordValid) progress += 25;

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', height: '6px', marginBottom: '20px', borderRadius: '3px' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4 }}
        style={{
          height: '100%',
          backgroundColor: '#4caf50',
          borderRadius: '3px'
        }}
      />
    </div>
  );
};

export default ProgressBar;
