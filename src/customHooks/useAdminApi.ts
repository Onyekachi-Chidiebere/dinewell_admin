import { useState } from 'react';
import { createAdmin, validateAdminData, testAdminApiConnection, CreateAdminRequest } from '@/utils/adminApi';

interface UseAdminApiReturn {
  createAdminAccount: (adminData: CreateAdminRequest) => Promise<void>;
  testConnection: () => Promise<boolean>;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for admin API operations
 * Provides functions to create admin accounts and test API connection
 */
export const useAdminApi = (): UseAdminApiReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createAdminAccount = async (adminData: CreateAdminRequest) => {
    setLoading(true);
    setError(null);

    try {
      // Validate data before sending
      const validation = validateAdminData(adminData);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return;
      }

      // Create admin account
      await createAdmin(adminData);
    } catch (err: any) {
      console.error('Create admin account error:', err);
      setError(err.message || 'Failed to create admin account');
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async (): Promise<boolean> => {
    try {
      return await testAdminApiConnection();
    } catch (err) {
      console.error('Connection test error:', err);
      return false;
    }
  };

  return {
    createAdminAccount,
    testConnection,
    loading,
    error,
  };
};
