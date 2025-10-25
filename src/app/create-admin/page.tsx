"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CreateAdminForm from '@/components/CreateAdminForm';
import { showSuccess } from '@/utils/toast';

export default function CreateAdminPage() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(true);

  const handleSuccess = () => {
    showSuccess('Admin account created successfully!');
    setShowForm(false);
    
    // Redirect to login page after a short delay
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Admin Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Set up a new administrator account for the DineWell system
          </p>
        </div>

        {/* Success Message */}
        {!showForm && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Admin Account Created Successfully!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>You can now use the created credentials to log in to the admin dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Admin Form */}
        {showForm && (
          <CreateAdminForm
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            Instructions:
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Enter a valid email address</li>
            <li>• Password must be at least 6 characters long</li>
            <li>• Provide a full name for the admin account</li>
            <li>• Make sure both passwords match</li>
          </ul>
        </div>

        {/* Back to Login */}
        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-blue-600 hover:text-blue-500 font-medium"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
