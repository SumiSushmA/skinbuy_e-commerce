// frontend/skinbuy-e-commerce/src/pages/admin/login.jsx

import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminLogin() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const router                  = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"}/api/admin/login`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (res.ok && data.token) {
        // save the admin token however you like
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Server error – please try again");
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", padding: "1rem", border: "1px solid #ddd", borderRadius: 4 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label><br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
