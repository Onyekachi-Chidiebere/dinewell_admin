import React from 'react';
import { Badge, Box, Group, Text } from '@mantine/core';

interface DetailRowProps {
  label: string;
  value: string;
}

export const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => (
  <Group justify="space-between" my={4}>
    <Badge
      variant="light"
      styles={{
        root: {
          backgroundColor: '#F5F5FF',
          color: '#828DA9',
          fontWeight: 500,
          textTransform: 'uppercase',
          borderRadius: '6px',
          padding: '8px 12px',
        },
      }}
    >
      {label}
    </Badge>
    <Text size="sm" fw={600}>{value}</Text>
  </Group>
);

interface ModalCardProps {
  title: string;
  children: React.ReactNode;
}

const ModalCard: React.FC<ModalCardProps> = ({ title, children }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        gap: '12px',
        background: '#FFFFFF',
        border: '1px solid #EBEEFF',
        borderRadius: '20px',
        width: '100%',
        boxSizing: 'border-box',
        margin: '16px 0'
      }}
    >
      {title && <Text c="#828DA9" size="xs" fw={700} tt="uppercase">
        {title}
      </Text>}
      <Box style={{ width: '100%' }}>
        {children}
      </Box>
    </Box>
  );
};

export default ModalCard;