import axios from 'axios';
import { showSuccess, showError } from './toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Types
export interface CreateAdminRequest {
  email: string;
  password: string;
  name: string;
}

export interface CreateAdminResponse {
  message: string;
  admin: {
    id: number;
    email: string;
    name: string;
    type: string;
    approval_status: number;
    date_created: string;
  };
}

export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
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

export interface AdminProfile {
  id: number;
  email: string;
  name: string;
  type: string;
  approval_status: number;
  date_created: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// API Functions

/**
 * Create a new admin account
 * @param adminData - Admin account data
 * @returns Promise with admin creation result
 */
export const createAdmin = async (adminData: CreateAdminRequest): Promise<CreateAdminResponse> => {
  try {
    const response = await axios.post<CreateAdminResponse>(
      `${API_BASE_URL}/admin/create`,
      adminData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    showSuccess(`Admin account created successfully for ${adminData.name}`);
    return response.data;
  } catch (error: any) {
    console.error('Create admin error:', error);
    
    if (error.response?.data?.error) {
      showError(error.response.data.error);
    } else if (error.response?.status === 400) {
      showError('Invalid admin data provided');
    } else if (error.response?.status === 409) {
      showError('Admin with this email already exists');
    } else if (error.code === 'NETWORK_ERROR' || !error.response) {
      showError('Unable to connect to server. Please check your connection.');
    } else {
      showError('Failed to create admin account. Please try again.');
    }
    
    throw error;
  }
};

/**
 * Login admin user
 * @param credentials - Login credentials
 * @returns Promise with login result
 */
export const loginAdmin = async (credentials: AdminLoginRequest): Promise<AdminLoginResponse> => {
  try {
    const response = await axios.post<AdminLoginResponse>(
      `${API_BASE_URL}/admin/login`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    showSuccess(`Welcome back, ${response.data.user.name}!`);
    return response.data;
  } catch (error: any) {
    console.error('Admin login error:', error);
    
    if (error.response?.data?.error) {
      showError(error.response.data.error);
    } else if (error.response?.status === 401) {
      showError('Invalid email or password');
    } else if (error.response?.status === 403) {
      showError('Admin access required');
    } else if (error.code === 'NETWORK_ERROR' || !error.response) {
      showError('Unable to connect to server. Please check your connection.');
    } else {
      showError('Login failed. Please try again.');
    }
    
    throw error;
  }
};

/**
 * Get admin profile (requires authentication)
 * @param accessToken - JWT access token
 * @returns Promise with admin profile
 */
export const getAdminProfile = async (accessToken: string): Promise<AdminProfile> => {
  try {
    const response = await axios.get<{ admin: AdminProfile }>(
      `${API_BASE_URL}/admin/profile`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.admin;
  } catch (error: any) {
    console.error('Get admin profile error:', error);
    
    if (error.response?.status === 401) {
      showError('Authentication required');
    } else if (error.response?.status === 403) {
      showError('Admin access required');
    } else if (error.response?.status === 404) {
      showError('Admin profile not found');
    } else if (error.code === 'NETWORK_ERROR' || !error.response) {
      showError('Unable to connect to server. Please check your connection.');
    } else {
      showError('Failed to fetch admin profile. Please try again.');
    }
    
    throw error;
  }
};

/**
 * Update admin password (requires authentication)
 * @param accessToken - JWT access token
 * @param passwordData - Current and new password
 * @returns Promise with update result
 */
export const updateAdminPassword = async (
  accessToken: string, 
  passwordData: UpdatePasswordRequest
): Promise<{ message: string }> => {
  try {
    const response = await axios.put<{ message: string }>(
      `${API_BASE_URL}/admin/password`,
      passwordData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    showSuccess('Password updated successfully');
    return response.data;
  } catch (error: any) {
    console.error('Update admin password error:', error);
    
    if (error.response?.data?.error) {
      showError(error.response.data.error);
    } else if (error.response?.status === 400) {
      showError('Invalid password data provided');
    } else if (error.response?.status === 401) {
      showError('Authentication required');
    } else if (error.response?.status === 403) {
      showError('Admin access required');
    } else if (error.code === 'NETWORK_ERROR' || !error.response) {
      showError('Unable to connect to server. Please check your connection.');
    } else {
      showError('Failed to update password. Please try again.');
    }
    
    throw error;
  }
};

// Utility Functions

/**
 * Validate admin data before sending to API
 * @param adminData - Admin data to validate
 * @returns Validation result with errors
 */
export const validateAdminData = (adminData: CreateAdminRequest): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!adminData.email) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!adminData.password) {
    errors.push('Password is required');
  } else if (adminData.password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  if (!adminData.name) {
    errors.push('Name is required');
  } else if (adminData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Test admin API connection
 * @returns Promise with connection status
 */
export const testAdminApiConnection = async (): Promise<boolean> => {
  try {
    await axios.get(`${API_BASE_URL}/health`);
    return true;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};

// Export all functions
export default {
  createAdmin,
  loginAdmin,
  getAdminProfile,
  updateAdminPassword,
  validateAdminData,
  testAdminApiConnection,
};
