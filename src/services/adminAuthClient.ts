export interface AdminAuthCheckResult {
  authenticated: boolean;
}

export interface AdminLoginResult {
  success: boolean;
  error?: string;
}

export const adminAuthClient = {
  /**
   * Check if current session is authenticated via server-verified HttpOnly cookie.
   * Never relies on LocalStorage alone.
   */
  async checkAuth(): Promise<boolean> {
    try {
      const res = await fetch('/api/admin/check', {
        method: 'GET',
        headers: { Accept: 'application/json' },
        credentials: 'same-origin',
        cache: 'no-store',
      });
      if (!res.ok) return false;
      const data: AdminAuthCheckResult = await res.json();
      return Boolean(data.authenticated);
    } catch {
      return false;
    }
  },

  /**
   * Submit password to server for timing-safe hash comparison and session cookie creation.
   */
  async login(password: string): Promise<AdminLoginResult> {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        return { success: true };
      }
      return {
        success: false,
        error: data.error || 'Invalid login credentials.',
      };
    } catch {
      return {
        success: false,
        error: 'Unable to connect to authentication server. Please check your network and try again.',
      };
    }
  },

  /**
   * Invalidate session cookie on the server.
   */
  async logout(): Promise<void> {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        credentials: 'same-origin',
      });
    } catch {
      // Ignore logout connection errors
    }
  },
};
