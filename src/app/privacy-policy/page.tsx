"use client";

import React from 'react';
import ModalCard from '@/components/ModalCard';
import { Text } from '@mantine/core';

const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

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
              Privacy Policy
            </h1>
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#828DA9',
                marginTop: '4px',
              }}
            >
              Last updated: {lastUpdated}
            </Text>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '16px', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          {/* Introduction */}
          <ModalCard title="INTRODUCTION">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              Welcome to DineWell. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our admin dashboard and related services.
            </Text>
          </ModalCard>

          {/* Information We Collect */}
          <ModalCard title="INFORMATION WE COLLECT">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <Text
                  size="xs"
                  fw={700}
                  style={{
                    fontFamily: 'var(--font-red-hat-display)',
                    color: '#828DA9',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Personal Information
                </Text>
                <Text
                  size="sm"
                  style={{
                    fontFamily: 'var(--font-mulish)',
                    color: '#171717',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                  }}
                >
                  We may collect personal information that you provide to us, including:
                </Text>
                <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Administrative role and permissions</li>
                  <li>Profile information and preferences</li>
                </ul>
              </div>
              <div>
                <Text
                  size="xs"
                  fw={700}
                  style={{
                    fontFamily: 'var(--font-red-hat-display)',
                    color: '#828DA9',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Usage Data
                </Text>
                <Text
                  size="sm"
                  style={{
                    fontFamily: 'var(--font-mulish)',
                    color: '#171717',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                  }}
                >
                  We automatically collect certain information when you access and use our services, including:
                </Text>
                <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Access times and dates</li>
                  <li>System activity and error logs</li>
                </ul>
              </div>
            </div>
          </ModalCard>

          {/* How We Use Your Information */}
          <ModalCard title="HOW WE USE YOUR INFORMATION">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              We use the collected information for various purposes:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
              <li>To provide, maintain, and improve our admin dashboard services</li>
              <li>To authenticate and authorize your access to the system</li>
              <li>To manage user accounts and administrative permissions</li>
              <li>To monitor and analyze usage patterns and system performance</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms of service</li>
              <li>To send administrative notifications and updates</li>
            </ul>
          </ModalCard>

          {/* Information Sharing and Disclosure */}
          <ModalCard title="INFORMATION SHARING AND DISCLOSURE">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8' }}>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our services, subject to confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
              <li><strong>Security and Safety:</strong> We may share information to protect the rights, property, or safety of our users, employees, or others</li>
            </ul>
          </ModalCard>

          {/* Data Security */}
          <ModalCard title="DATA SECURITY">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure authentication protocols, regular security assessments, and access controls. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Text>
          </ModalCard>

          {/* Your Rights */}
          <ModalCard title="YOUR RIGHTS">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              Depending on your jurisdiction, you may have certain rights regarding your personal information:
            </Text>
            <ul style={{ marginLeft: '20px', color: '#171717', fontFamily: 'var(--font-mulish)', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </Text>
          </ModalCard>

          {/* Data Retention */}
          <ModalCard title="DATA RETENTION">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
            </Text>
          </ModalCard>

          {/* Cookies and Tracking Technologies */}
          <ModalCard title="COOKIES AND TRACKING TECHNOLOGIES">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of certain features of our admin dashboard.
            </Text>
          </ModalCard>

          {/* Third-Party Links */}
          <ModalCard title="THIRD-PARTY LINKS">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              Our admin dashboard may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </Text>
          </ModalCard>

          {/* Children's Privacy */}
          <ModalCard title="CHILDREN'S PRIVACY">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly.
            </Text>
          </ModalCard>

          {/* Changes to This Privacy Policy */}
          <ModalCard title="CHANGES TO THIS PRIVACY POLICY">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
              }}
            >
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </Text>
          </ModalCard>

          {/* Contact Us */}
          <ModalCard title="CONTACT US">
            <Text
              size="sm"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#171717',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                  marginBottom: '8px',
                }}
              >
                Email: privacy@dinewell.com
              </Text>
              <Text
                size="sm"
                fw={600}
                style={{
                  fontFamily: 'var(--font-mulish)',
                  color: '#171717',
                }}
              >
                Address: DineWell Admin Support
              </Text>
            </div>
          </ModalCard>

          {/* Footer Note */}
          <div style={{ 
            borderTop: '1px solid #EAEEF2', 
            paddingTop: '16px', 
            marginTop: '16px',
            textAlign: 'center'
          }}>
            <Text
              size="xs"
              style={{
                fontFamily: 'var(--font-mulish)',
                color: '#828DA9',
              }}
            >
              By using the DineWell, you acknowledge that you have read and understood this Privacy Policy.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;