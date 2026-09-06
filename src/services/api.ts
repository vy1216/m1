type User = {
  role?: string;
  [key: string]: unknown;
};

const request = async (path: string, options: RequestInit) => {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) {
    return { ...payload, success: false };
  }
  return payload;
};

export const demoApi = {
  sendOtp(emailOrPhone: string) {
    return request("/api/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ emailOrPhone }),
    });
  },

  loginWithOtp(role: string, email: string, otp: string) {
    return request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ role, email, otp }),
    });
  },

  getRole() {
    return localStorage.getItem("maapsetu_role") || "owner";
  },

  setRole(role: string) {
    localStorage.setItem("maapsetu_role", role);
  },

  setUser(user: User) {
    localStorage.setItem("maapsetu_user", JSON.stringify(user));
  },
};