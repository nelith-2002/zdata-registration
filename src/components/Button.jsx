import { motion } from 'framer-motion';

const Button = ({ children, onClick, style = {}, type = 'button', disabled }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      whileHover={!disabled && { scale: 1.03 }}
      style={{
        padding: '8px 16px',
        backgroundColor: disabled ? '#bbb' : '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
