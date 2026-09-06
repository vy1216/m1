type User = {
  role?: string;
  [key: string]: unknown;
};

const request = async (path: string, options: RequestInit) => {
  const token = localStorage.getItem("maapsetu_token");
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
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
    const role = localStorage.getItem("maapsetu_role");
    return role === "owner" || role === "lmo" || role === "gatc" || role === "admin"
      ? role
      : "owner";
  },

  setRole(role: string) {
    localStorage.setItem("maapsetu_role", role);
  },

  setToken(token: string) {
    localStorage.setItem("maapsetu_token", token);
  },

  setUser(user: User) {
    localStorage.setItem("maapsetu_user", JSON.stringify(user));
  },

  isAuthenticated() {
    return Boolean(localStorage.getItem("maapsetu_token"));
  },

  async logout() {
    try {
      await request("/api/auth/logout", { method: "POST" });
    } finally {
      localStorage.removeItem("maapsetu_token");
      localStorage.removeItem("maapsetu_role");
      localStorage.removeItem("maapsetu_user");
    }
  },
};