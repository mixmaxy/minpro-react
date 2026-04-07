import { useState, useEffect } from "react";
import { getSingleUser } from "../services/users";
import type { User } from "../types";

interface UseUserDetailReturn {
  user: User | null;
  loading: boolean;
  error: string;
}

export const useUserDetail = (id: string | undefined): UseUserDetailReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getSingleUser(Number(id));
        setUser(data.data);
      } catch {
        setError("User not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};
