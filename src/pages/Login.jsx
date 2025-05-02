import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/AddTaskForm/InputField";
import { FaEnvelope } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: "ease-in-out",
        mirror: true,
        once: false,
      });
    }, []);
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!loginUser.email.trim()) {
      errors.email = "Email is required";
    }

    if (!loginUser.password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      setTimeout(() => {
        navigate("/auth/successfully");
      }, 1500);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-purple-800 to-gray-800 px-4">
      <div className="w-full max-w-lg bg-white/18 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 p-8 sm:p-10" data-aos="fade-up">
        <h2 className="text-2xl font-extrabold text-white text-center mb-4 tracking-tight" >
          Welcome Back to SalesPyper
        </h2>
        <p className="text-sm text-center text-gray-300 mb-4">
          Please login to your account
        </p>

        <form onSubmit={handleSubmitForm} noValidate className="space-y-6">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={loginUser.email}
            onChange={handleChange}
            placeholder="Enter your email"
            icon={FaEnvelope}
            error={formErrors.email}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={loginUser.password}
            onChange={handleChange}
            placeholder="Enter your password"
            icon={BsShieldLockFill}
            error={formErrors.password}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full hover:cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-3 rounded-xl font-bold tracking-wide shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </>
            ) : (
              "Verify Account"
            )}
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default Login;
