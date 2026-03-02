// frontend/src/app/utils/api.ts
const API_URL = "http://localhost:3000/api";

export const api = {
  login: async (phone: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Login failed");
    }

    return res.json();
  },
};