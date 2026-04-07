import { useState } from "react";
import { loginUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import type { ApiError } from "../types";

interface UseLoginFormReturn {
  email: string;
  password: string;
  error: string;
  loading: boolean;
  showPass: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPass: (show: boolean) => void;
  handleSubmit: (e: any) => Promise<void>;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await loginUser({ email, password });
      login({ email, token: response.token });
      navigate("/");
    } catch (err) {
      const axiosErr = err as AxiosError<ApiError>;
      setError(
        axiosErr.response?.data?.error || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    error,
    loading,
    showPass,
    setEmail,
    setPassword,
    setShowPass,
    handleSubmit,
  };
};
