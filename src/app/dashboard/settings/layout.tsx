"use client";
import { useTitle } from "@/context/TitleContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface MenuItem {
    key: string;
    label: string;
}

const menuItems: MenuItem[] = [
    { key: 'settings', label: 'Profile', },
    { key: 'security', label: 'Change Password', },
    { key: 'permissions', label: 'Roles and Permissions', },
    { key: 'users', label: 'Users', },
    { key: 'logout', label: 'Logout', }
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    const { setTitle } = useTitle();
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        setTitle("Settings");
    }, [setTitle]);

    const activeTab = useMemo(() => {
        const segments = pathname.split('/');
        return segments[segments.length - 1] || '';
    }, [pathname]);

    const handleNavigation = (key: string) => {
        if (key === 'logout') {
            // Handle logout logic here
            return;
        }
        if (key === 'settings') {
            return router.push(`/dashboard/settings`);
        }
        router.push(`/dashboard/settings/${key}`);
    };

    const getMenuItemStyles = (key: string, isActive: boolean) => {
        const isHovered = hoveredItem === key;
        return {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            borderRadius: '40px',
            background: isActive ? '#9B87F6' : isHovered ? '#F8FAFC' : '#FFFFFF',
            color: isActive ? '#FFFFFF' : '#828DA9',
            border: !isActive ? '1px solid #E2E8F0' : 'none',
            fontFamily: 'var(--font-red-hat-display)',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'all 0.2s ease',
        };
    };

    return (
        <div style={{ display: 'flex', gap: '32px', padding: '16px 32px' }}>
            <aside style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {menuItems.map((item) => {
                    const isActive = item.key === activeTab;
                    return (
                        <div
                            key={item.key}
                            onClick={() => handleNavigation(item.key)}
                            onMouseEnter={() => setHoveredItem(item.key)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={getMenuItemStyles(item.key, isActive)}
                        >
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </aside>
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default SettingsLayout;