# Admin API Integration

This document describes the complete admin API integration for the DineWell admin dashboard, including REST endpoints, TypeScript functions, and React components.

## 📁 File Structure

```
src/
├── utils/
│   └── adminApi.ts              # Core API functions
├── customHooks/
│   └── useAdminApi.ts           # React hook for admin operations
├── components/
│   └── CreateAdminForm.tsx      # Admin creation form component
├── app/
│   └── create-admin/
│       └── page.tsx             # Admin creation page
└── server/
    └── api.rest                 # REST API endpoints for testing
```

## 🔧 Core API Functions (`src/utils/adminApi.ts`)

### 1. createAdmin()
Creates a new admin account with validation and error handling.

```typescript
const adminData: CreateAdminRequest = {
  email: "admin@dinewell.com",
  password: "admin123",
  name: "System Administrator"
};

const result = await createAdmin(adminData);
// Shows success toast: "Admin account created successfully for System Administrator"
```

**Features:**
- ✅ Input validation
- ✅ Toast notifications
- ✅ Error handling
- ✅ TypeScript types
- ✅ Network error handling

### 2. loginAdmin()
Authenticates admin user with comprehensive error handling.

```typescript
const credentials: AdminLoginRequest = {
  email: "admin@dinewell.com",
  password: "admin123"
};

const result = await loginAdmin(credentials);
// Returns: { user, accessToken, refreshToken }
// Shows success toast: "Welcome back, System Administrator!"
```

### 3. getAdminProfile()
Retrieves admin profile information (requires authentication).

```typescript
const profile = await getAdminProfile(accessToken);
// Returns: AdminProfile object
```

### 4. updateAdminPassword()
Updates admin password with current password verification.

```typescript
const passwordData: UpdatePasswordRequest = {
  currentPassword: "oldpassword",
  newPassword: "newpassword123"
};

await updateAdminPassword(accessToken, passwordData);
// Shows success toast: "Password updated successfully"
```

### 5. validateAdminData()
Validates admin data before sending to API.

```typescript
const validation = validateAdminData(adminData);
if (!validation.isValid) {
  console.log(validation.errors); // Array of error messages
}
```

### 6. testAdminApiConnection()
Tests API connection health.

```typescript
const isConnected = await testAdminApiConnection();
// Returns: boolean
```

## 🎣 React Hook (`src/customHooks/useAdminApi.ts`)

### useAdminApi()
Custom hook that provides admin API operations with loading states and error handling.

```typescript
const { createAdminAccount, testConnection, loading, error } = useAdminApi();

// Create admin account
await createAdminAccount({
  email: "admin@dinewell.com",
  password: "admin123",
  name: "System Administrator"
});

// Test API connection
const isConnected = await testConnection();
```

**Hook Features:**
- ✅ Loading states
- ✅ Error handling
- ✅ Data validation
- ✅ Toast notifications
- ✅ TypeScript support

## 🎨 React Components

### 1. CreateAdminForm (`src/components/CreateAdminForm.tsx`)

A complete form component for creating admin accounts.

**Features:**
- ✅ Form validation
- ✅ Password confirmation
- ✅ Real-time error display
- ✅ Loading states
- ✅ Success/cancel callbacks
- ✅ Responsive design

**Usage:**
```tsx
<CreateAdminForm
  onSuccess={() => console.log('Admin created!')}
  onCancel={() => router.push('/')}
/>
```

### 2. Create Admin Page (`src/app/create-admin/page.tsx`)

A full page for admin account creation with instructions and success feedback.

**Features:**
- ✅ Complete UI layout
- ✅ Success message display
- ✅ Instructions panel
- ✅ Navigation controls
- ✅ Responsive design

## 🧪 REST API Testing (`server/api.rest`)

Comprehensive REST file with 25+ test cases covering:

### Basic Operations
- ✅ Create admin account
- ✅ Admin login
- ✅ Get admin profile
- ✅ Update password

### Error Scenarios
- ✅ Invalid credentials
- ✅ Missing fields
- ✅ Duplicate email
- ✅ Authentication errors
- ✅ Network errors

### Edge Cases
- ✅ Long names
- ✅ Special characters
- ✅ Unicode characters
- ✅ Case sensitivity
- ✅ Whitespace handling

### Security Tests
- ✅ SQL injection attempts
- ✅ XSS attempts
- ✅ Input validation

## 🔐 Security Features

### 1. Input Validation
- Email format validation
- Password length requirements
- Name length requirements
- Required field validation

### 2. Error Handling
- Network error detection
- HTTP status code mapping
- User-friendly error messages
- Security-conscious error responses

### 3. Authentication
- JWT token handling
- Authorization headers
- Token validation
- Session management

## 📱 User Experience

### 1. Toast Notifications
- Success messages for all operations
- Error messages with clear descriptions
- Consistent styling and timing
- Auto-dismiss functionality

### 2. Form Validation
- Real-time validation feedback
- Clear error messages
- Password confirmation
- Required field indicators

### 3. Loading States
- Button loading indicators
- Form disable during submission
- Progress feedback
- Error recovery

## 🚀 Usage Examples

### 1. Create Admin Account
```typescript
import { createAdmin } from '@/utils/adminApi';

const adminData = {
  email: "admin@dinewell.com",
  password: "admin123",
  name: "System Administrator"
};

try {
  const result = await createAdmin(adminData);
  console.log('Admin created:', result.admin);
} catch (error) {
  console.error('Creation failed:', error);
}
```

### 2. Using the React Hook
```typescript
import { useAdminApi } from '@/customHooks/useAdminApi';

function AdminCreationPage() {
  const { createAdminAccount, loading, error } = useAdminApi();

  const handleCreate = async () => {
    await createAdminAccount({
      email: "admin@dinewell.com",
      password: "admin123",
      name: "System Administrator"
    });
  };

  return (
    <button onClick={handleCreate} disabled={loading}>
      {loading ? 'Creating...' : 'Create Admin'}
    </button>
  );
}
```

### 3. Using the Form Component
```tsx
import CreateAdminForm from '@/components/CreateAdminForm';

function AdminPage() {
  return (
    <CreateAdminForm
      onSuccess={() => {
        console.log('Admin created successfully!');
        // Redirect or show success message
      }}
      onCancel={() => {
        // Handle cancel action
      }}
    />
  );
}
```

## 🧪 Testing

### 1. Manual Testing
Use the REST file (`server/api.rest`) to test all endpoints:
- Import into Postman or VS Code REST Client
- Test all scenarios and edge cases
- Verify error handling and responses

### 2. Component Testing
Test the React components:
- Form validation
- Error handling
- Success flows
- Loading states

### 3. Integration Testing
Test the complete flow:
- Create admin account
- Login with created account
- Access protected routes
- Update password

## 📋 API Endpoints

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/admin/create` | ❌ | Create new admin account |
| POST | `/admin/login` | ❌ | Admin authentication |
| GET | `/admin/profile` | ✅ | Get admin profile |
| PUT | `/admin/password` | ✅ | Update admin password |

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Dependencies
```json
{
  "axios": "^1.12.2",
  "react-toastify": "^11.0.5"
}
```

## 🎯 Best Practices

### 1. Error Handling
- Always handle network errors
- Provide user-friendly error messages
- Log errors for debugging
- Use toast notifications for feedback

### 2. Validation
- Validate data before sending to API
- Show validation errors immediately
- Clear errors when user starts typing
- Use consistent validation rules

### 3. Security
- Never log sensitive data
- Validate all inputs
- Use HTTPS in production
- Implement proper authentication

### 4. User Experience
- Show loading states
- Provide clear feedback
- Handle all error scenarios
- Make forms intuitive

The admin API integration is now complete with comprehensive error handling, validation, and user feedback!
