# ZDATA Registration Form

This is a two-step user registration form built for the ZDATA Frontend Developer Internship Assessment. It features modern UI/UX, client-side validation, API integration, and smooth animations using **React**, **Framer Motion**, and **React Toastify**.

## Features

- Multi-step form with animated transitions
- Real-time validation (Full Name, Email, Phone, Passwords)
- "Next" button disabled until inputs are valid
- API integration with loading state and toasts
- Smooth animated progress bar based on input completion
- Responsive, accessible, and visually polished design
- Clean, scalable code with modular folder structure

## Project Structure

```
src/
├── api/                 # Axios instance
│   └── axiosInstance.js
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── TextInput.jsx
│   └── ProgressBar.jsx
├── context/             # Global form context
│   └── FormContext.jsx
├── pages/               # Form steps
│   ├── Step1.jsx
│   └── SecurityDetails.jsx
├── services/            # API service
│   └── registerService.js
├── utils/               # Validation helpers
│   └── validation.js
├── App.jsx              # Main app logic
├── index.jsx            # Entry point
└── index.css            # Styling
```

## Technologies Used

- **React** (with Vite)
- **React Context API**
- **Framer Motion** for animations
- **React Toastify** for notifications
- **Axios** for API calls
- **Custom form validation**

---

## API Integration

- **Endpoint**: `POST /api/register`
- **Payload Example**:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "yourpassword"
}
```

## Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/nelith-2002/zdata-registration.git
cd zdata-registration
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set environment variables:**

Create a `.env` file in the root:

```
REACT_APP_API_BASE_URL=https://your-api-base.com
```

4. **Run the app:**

```bash
npm run dev
```

---

## Assessment Coverage

This project meets **all criteria** in the PDF, including:

- Form validation
- Error handling
- Animated UI
- Clean code and structure
- API communication

---

## 📩 Author

**Name:** Nelith Nethsanda
**Position Applied:** Frontend Developer Intern  
**Email:** nelithnethsanda2002@gmail.com
**GitHub:** https://github.com/nelith-2002
