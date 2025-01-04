import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Logo from "./components/Logo";
import { AuthProvider, useAuth } from "./context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "123456") {
      login();
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Logo />
        <h1>লগইন করুন</h1>
        <p className="subtitle">আপনার তথ্য কারো সাথে শেয়ার করবেন না</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              আপনার ইমেইল অ্যাড্রেস <span className="required">*</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="boss@gmail.com"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              পাসওয়ার্ড <span className="required">*</span>
            </label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="anyPassword1971"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            লগইন করুন
          </button>

          <div className="forgot-password">
            <a href="#">পাসওয়ার্ড ভুলে গেছেন?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}

function MainContent() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <HomePage /> : <LoginForm />;
}

export default App;
