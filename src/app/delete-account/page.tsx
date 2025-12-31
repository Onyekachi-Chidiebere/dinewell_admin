"use client";

import React from 'react';
import ModalCard from '@/components/ModalCard';
import { Text } from '@mantine/core';

const DeleteAccountPage = () => {
  return (
    <div style={{ padding: '32px', minHeight: '100vh', background: '#F6F8FA' }}>
      <div style={{ width: '70%', margin: 'auto', border: '1px solid #EAEEF2', borderRadius: '20px', background: '#FFFFFF' }}>
        {/* Header with maze background */}
        <div style={{ background: "url('/maze-bg.svg') no-repeat left 32px center", height: '100px', display: 'flex', alignItems: 'center', paddingLeft: '32px' }}>
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-red-hat-display)',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '37.04px',
                color: '#828DA9',
                margin: 0,
              }}
            >
              Account Deletion
            </h1>
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#828DA9',
                marginTop: '4px',
              }}
            >
              Request permanent deletion of your DineWell account
            </Text>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '16px', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          {/* Introduction */}
          <ModalCard title="ACCOUNT DELETION REQUEST">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              To request deletion of your DineWell account, please send an email to:
            </Text>
            <div style={{ 
              background: '#F5F5FF', 
              border: '1px solid #EBEEFF', 
              borderRadius: '12px', 
              padding: '16px',
              marginBottom: '16px'
            }}>
              <Text
                size="sm"
                fw={600}
                style={{
                  fontFamily: 'var(--font-mulish)',
                  color: '#5D47C1',
                }}
              >
                dinwellapps@gmail.com
              </Text>
            </div>
          </ModalCard>

          {/* Email Requirements */}
          <ModalCard title="EMAIL REQUIREMENTS">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              Please ensure your email includes the following:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>Use the email address associated with your DineWell account</li>
              <li>Subject line: <strong>Account Deletion Request</strong></li>
            </ul>
          </ModalCard>

          {/* Processing Time */}
          <ModalCard title="PROCESSING TIME">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              Once your request is received, your account and associated personal data will be permanently deleted within <strong>7 days</strong>.
            </Text>
          </ModalCard>

          {/* Data Deletion */}
          <ModalCard title="DATA THAT WILL BE DELETED">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              The following data will be permanently removed from our systems:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>User profile information</li>
              <li>Account data</li>
              <li>App usage data</li>
            </ul>
          </ModalCard>

          {/* Data Retention */}
          <ModalCard title="DATA THAT MAY BE RETAINED">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              Please note that certain data may be retained if required by law:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>Transaction records, if required by law (e.g. financial or tax records)</li>
            </ul>
          </ModalCard>

          {/* Important Notice */}
          <ModalCard title="IMPORTANT NOTICE">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#EF4444',
                lineHeight: '1.6',
                fontWeight: 600,
              }}
            >
              ⚠️ Warning: Account deletion is permanent and cannot be undone. Once your account is deleted, you will lose access to all your data, including loyalty points, transaction history, and account preferences.
            </Text>
          </ModalCard>

          {/* Contact Support */}
          <ModalCard title="QUESTIONS OR CONCERNS">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              If you have any questions about account deletion or need assistance, please contact our support team:
            </Text>
            <div style={{ 
              background: '#F5F5FF', 
              border: '1px solid #EBEEFF', 
              borderRadius: '12px', 
              padding: '16px',
              marginTop: '12px'
            }}>
              <Text
                size="sm"
                fw={600}
                style={{
                  fontFamily: 'var(--font-mulish)',
                  color: '#171717',
                }}
              >
                Email: dinwellapps@gmail.com
              </Text>
            </div>
          </ModalCard>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;