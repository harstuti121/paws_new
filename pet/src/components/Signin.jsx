import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css"; // ✅ Import the new CSS file

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", { email, password });

            if (!res.data.user) {
                console.error("❌ User data is missing in API response:", res.data);
                setError("❌ User data is missing. Please try again.");
                return;
            }

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("role", res.data.user.role);

            console.log("✅ Sign-in Successful! User:", res.data.user);
            navigate(res.data.user.role === "doctor" ? "/doctor-dashboard" : "/pet-owner-dashboard");
            window.location.reload();
        } catch (err) {
            setError("❌ Invalid email or password!");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Sign In</h2>

                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit} className="signin-form">
                    <div>
                        <label className="text">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="signin-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text">Password</label>
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            className="signin-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="signin-btn">
                        Sign In
                    </button>
                </form>

                <p className="signin-text">
                    Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default Signin;
