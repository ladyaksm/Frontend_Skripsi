import apiClient from "./api"


export const askQuestion = async (question) => {
  try {
    const res = await apiClient.post("/chat/ask", {
      question,
    })
    return { success: true, data: res.data }
  } catch (error) {
    return {
      success: false,
      error: error.res?.data?.message || "Pertanyaan gagal diproses",
    }
  }
}