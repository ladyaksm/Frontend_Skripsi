// import apiClient from "./api"

// export const uploadDocument = async (file, category) => {
//   try {
//     const formData = new FormData()
//     formData.append("file", file)
//     formData.append("category", category)

//     const response = await apiClient.post("/admin/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     return { success: true, data: response.data }
//   } catch (error) {
//     return { success: false, error: error.response?.data?.error || "Upload gagal" }
//   }
// }

// export const getDocuments = async () => {
//   try {
//     const response = await apiClient.get("/admin/list")
//     return { success: true, data: response.data }
//   } catch (error) {
//     return { success: false, error: error.response?.data?.error || "Gagal mengambil dokumen" }
//   }
// }

// export const deleteDocument = async (docId) => {
//   try {
//     const response = await apiClient.delete(`/admin/delete/${docId}`)
//     return { success: true, data: response.data }
//   } catch (error) {
//     return { success: false, error: error.response?.data?.error || "Gagal menghapus dokumen" }
//   }
// }

// export const resetKnowledgeBase = async () => {
//   try {
//     const response = await apiClient.post("/admin/reset_kb")
//     return { success: true, data: response.data }
//   } catch (error) {
//     return { success: false, error: error.response?.data?.error || "Gagal reset knowledge base" }
//   }
// }

import apiClient from "./api"

export const uploadDocument = async (file, category) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("category", category)

  const res = await apiClient.post("/admin/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })

  return res.data
}

export const getDocuments = async () => {
  const res = await apiClient.get("/admin/list")
  return res.data
}

export const deleteDocument = async (docId) => {
  const res = await apiClient.delete(`/admin/delete/${docId}`)
  return res.data
}

export const resetKnowledgeBase = async () => {
  const res = await apiClient.post("/admin/reset_kb")
  return res.data
}
