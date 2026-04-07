import { useState } from "react";
import { registerUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import type { ApiError } from "../types";

interface UseRegisterFormReturn {
  email: string;
  password: string;
  confirmPassword: string;
  error: string;
  success: string;
  loading: boolean;
  showPass: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setShowPass: (show: boolean) => void;
  handleSubmit: (e: any) => Promise<void>;
}

export const useRegisterForm = (): UseRegisterFormReturn => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await registerUser({ email, password });
      setSuccess(`Account created! Token: ${response.token}`);
      login({ email, token: response.token });
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      const axiosErr = err as AxiosError<ApiError>;
      setError(
        axiosErr.response?.data?.error ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    error,
    success,
    loading,
    showPass,
    setEmail,
    setPassword,
    setConfirmPassword,
    setShowPass,
    handleSubmit,
  };
};
