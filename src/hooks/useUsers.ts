import { useState, useEffect } from "react";
import { getUsers } from "../services/users";
import type { User } from "../types";

interface UseUsersReturn {
  users: User[];
  currentPage: number;
  totalPages: number;
  total: number;
  loading: boolean;
  error: string;
  setCurrentPage: (page: number) => void;
}

export const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getUsers(currentPage);
        setUsers(data.data);
        setTotalPages(data.total_pages);
        setTotal(data.total);
      } catch {
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage]);

  return {
    users,
    currentPage,
    totalPages,
    total,
    loading,
    error,
    setCurrentPage,
  };
};
