import axiosInstance from '../api/axiosInstance';

export const registerUser = async (formData) => {
  const payload = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
  };

  return axiosInstance.post('/api/register', payload);
};
