import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Logo from "./components/Logo";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ForgotPasswordModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">
          পাসওয়ার্ড এর জন্য ডেভেলপার{" "}
          <a
            href="https://github.com/abdullah-al-mridul"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            আব্দুল্লাহ আল মৃদুল
          </a>{" "}
          এর সাথে যোগাযোগ করুন
        </p>
        <button className="modal-close" onClick={onClose}>
          বন্ধ করুন
        </button>
      </div>
    </div>
  );
}

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.username === "admin" && formData.password === "123456") {
      login();
    } else {
      setError("ইমেইল অথবা পাসওয়ার্ড ভুল!");
    }
  };

  const handleChange = (e) => {
    setError("");
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

        {error && <div className="error-message">{error}</div>}

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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div>
        </form>
      </div>
      <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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
