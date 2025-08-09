'use client';

import React from 'react';
import { Modal, Tabs, Badge, Box, Text, UnstyledButton, Group, Avatar } from '@mantine/core';
import DotsIcon from '@/assets/svg/DotsIcon';
import XIcon from '@/assets/svg/XIcon';

// This should match the structure of your restaurant data
interface ModalData {
  title: string;
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  tabs: {
    name: string;
    content: React.ReactNode;
  }[];
  // Optional: URL to the restaurant logo
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalData | null;
}

const StatusIndicator: React.FC<{ status: 'ACTIVE' | 'PENDING' | 'SUSPENDED' }> = ({ status }) => {
  const statusStyles = {
    ACTIVE: { color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)' },
    PENDING: { color: '#828DA9', backgroundColor: 'rgba(130, 141, 169, 0.1)' },
    SUSPENDED: { color: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
  };
  const style = statusStyles[status] || statusStyles.PENDING;
  return (
    <Badge
      variant="filled"
      styles={{
        root: {
          backgroundColor: style.backgroundColor,
          color: style.color,
          borderRadius: '12px',
          padding: '4px 8px',
          textTransform: 'uppercase',
          fontSize: '10px',
          fontWeight: 700,
          fontFamily: 'var(--font-mulish)',
          border: `1px solid #D2D3F3`,
        },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: style.color }} />
        <span> {status}</span>
      </div>
    </Badge>
  );
};



const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;


  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      withCloseButton={false}
      size="680px"
      padding={0}
      styles={{
        body: {
          display: 'flex',
          flexDirection: 'column',
          height: '880px',
        },
        inner: {
          paddingRight: 'var(--modal-inner-padding, 0px)',
        }
      }}
      radius="md"
    >
      <Box style={{ padding: '16px', borderBottom: '1px solid #EBEEFF' }}>
        <Group justify="space-between">
          <StatusIndicator status={data.status} />
          <Group>
            <UnstyledButton onClick={onClose}
              style={{
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >

              <XIcon />
            </UnstyledButton>
          </Group>
        </Group>

      </Box>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F5F5FF', padding: '16px' }}>
        <Text size="xl" fw={700} style={{ fontFamily: 'var(--font-red-hat-display)' }}>
          {data.title}
        </Text>
        <UnstyledButton style={{ color: '#C4CBEF', backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #EBEEFF' }}><DotsIcon /></UnstyledButton>
      </div>

      <Tabs
        defaultValue="Details"
        classNames={{
          list: 'custom-tabs-list',
          tab: 'custom-tab',
        }}
        styles={(theme) => ({
          root: { flexGrow: 1, display: 'flex', flexDirection: 'column' },
          panel: { flexGrow: 1, overflowY: 'auto', },
          list: {
            margin: '10px 16px',
            alignSelf: 'flex-start',
            padding: '2px',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EBEEFF',
          },
          tab: {
            // padding: '8px 20px',
            color: '#828DA9',
            fontWeight: 500,
            borderRadius: '30px',
            border: 'none',
            backgroundColor: 'transparent',
            '&:focus': { outline: 'none' },
            '&[data-active]': {
              backgroundColor: '#2563EB', // Tailwind blue-600
              color: '#fff',
              fontWeight: 600,
            },
          },
        })}
      >
        <Tabs.List>
          {data.tabs.map((tab) => (
            <Tabs.Tab key={tab.name} value={tab.name}>
              {tab.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {data.tabs.map((tab) => (
          <Tabs.Panel key={tab.name} value={tab.name}>
            {tab.content}
          </Tabs.Panel>
        ))}
      </Tabs>
    </Modal>
  );
};
export default ModalComponent;
