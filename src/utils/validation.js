// Validate fields for Step 1
export const validateStep1 = (formData) => {
  const errors = {};

  const isOnlyNumbers = /^\d+$/.test(formData.fullName.trim());

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (isOnlyNumbers) {
    errors.fullName = 'Name cannot contain only numbers';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email format is invalid';
  }

  if (formData.phone.trim() !== '') {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone.trim())) {
      errors.phone = 'Phone number must be 10 digits';
    }
  }


  return errors;
};

// Validate fields for Step 2
export const validateStep2 = (formData) => {
  const errors = {};
  if (!formData.password || formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
