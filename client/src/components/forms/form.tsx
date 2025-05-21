
import { useState } from "react";

const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            console.log("Registering:", formData);
        } else {
            console.log("Logging in:", formData);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-center mb-4">
                    {isRegister ? "Register" : "Login"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        {isRegister ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <button
                    onClick={() => setIsRegister(!isRegister)}
                    className="mt-4 w-full text-blue-500 hover:underline"
                >
                    {isRegister
                        ? "Already have an account? Login"
                        : "Need an account? Register"}
                </button>
            </div>
        </div>
    );
};

export default AuthForm;
