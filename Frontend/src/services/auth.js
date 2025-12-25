import apiClient from "./api"

export const login = async (username, password) => {
  try {
    const res = await apiClient.post("/auth/login", {
      username,
      password,
    })
    const token = res.data.token
    localStorage.setItem("authToken", token)
    return { success: true, token }
  } catch (error) {
    return { success: false, error: error.res?.data?.error || "Login gagal" }
  }
}

export const logout = () => {
  localStorage.removeItem("authToken")
}

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken")
}