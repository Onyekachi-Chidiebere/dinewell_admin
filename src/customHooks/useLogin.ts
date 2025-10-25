import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from '@/utils/toast';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  user: {
    id: number;
    email: string;
    name: string;
    type: string;
    approval_status: number;
    date_created: string;
  };
  accessToken: string;
  refreshToken: string;
}

interface UseLoginReturn {
  email: string;
  password: string;
  loading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (e: React.FormEvent) => Promise<void>;
}

export const useLogin = (): UseLoginReturn => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      showError('Please enter both email and password');
      return;
    }

    setLoading(true);

    try {
      console.log({api:process.env.NEXT_PUBLIC_API_URL})
      const response = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          email: email.trim(),
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { user, accessToken, refreshToken } = response.data;

      // Use AuthContext to store user and tokens
      login(user, accessToken, refreshToken);

      // Show success message
      showSuccess(`Welcome back, ${user.name}!`);

      // Navigate to dashboard
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      
      if (err.response?.data?.error) {
        showError(err.response.data.error);
      } else if (err.response?.status === 401) {
        showError('Invalid email or password');
      } else if (err.response?.status === 403) {
        showError('Admin access required');
      } else if (err.code === 'NETWORK_ERROR' || !err.response) {
        showError('Unable to connect to server. Please check your connection.');
      } else {
        showError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    loading,
    setEmail,
    setPassword,
    handleLogin,
  };
};
