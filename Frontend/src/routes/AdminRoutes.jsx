import { Routes, Route, Navigate } from "react-router-dom"
import AdminLogin from "../pages/admin/Login"
import AdminDashboard from "../pages/admin/Dashboard"
import UploadDocument from "../pages/admin/UploadDocument"
import DocumentList from "../pages/admin/DocumentList"
import ResetKB from "../pages/admin/ResetKB"
import { isAuthenticated } from "../services/auth"

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="login" replace />
}

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />

      <Route
        path="*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="upload" element={<UploadDocument />} />
              <Route path="documents" element={<DocumentList />} />
              <Route path="reset" element={<ResetKB />} />
              <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}