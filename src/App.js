// import './assets/css/App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import {} from 'react-router-dom';
// import AuthLayout from './layouts/auth';
// import AdminLayout from './layouts/admin';
// import RTLLayout from './layouts/rtl';
// import {
//   ChakraProvider,
//   // extendTheme
// } from '@chakra-ui/react';
// import initialTheme from './theme/theme'; //  { themeGreen }
// import { useState } from 'react';
// // Chakra imports

// export default function Main() {
//   // eslint-disable-next-line
//   const [currentTheme, setCurrentTheme] = useState(initialTheme);
//   return (
//     <ChakraProvider theme={currentTheme}>
//       <Routes>
//         <Route path="auth/*" element={<AuthLayout />} />
//         <Route
//           path="admin/*"
//           element={
//             <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
//           }
//         />
//         <Route
//           path="rtl/*"
//           element={
//             <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
//           }
//         />
//         <Route path="/" element={<Navigate to="/admin" replace />} />
//       </Routes>
//     </ChakraProvider>
//   );
// }
// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './layouts/auth/SignIn';
import SignUp from './layouts/auth/SignUp';
import ProtectedRoute from './components/protectedRoutes/protectedRoutes';
import DoctorDashboard from './views/admin/default';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={initialTheme}>
      <AuthProvider>
        <Routes>
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route 
            path="/doctor/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <DoctorDashboard />
              </ProtectedRoute>
            } 
          />
          {/* Add a default redirect for the root path */}
          <Route path="/" element={<Navigate to="/auth/index" replace />} />
          {/* Other routes */}
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
