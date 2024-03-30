import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fpoName, setFpoName] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:5050/api/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: username, password: password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Signin failed");
            }
            login()
            navigate("/home");
        } catch (error) {
            console.error("Signin Error:", error.message);
            setError(error.message);
        }
    };

    const handleSignUpClick = () => {
        setShowSignUpForm(true);
    };

    const handleSignUp = async () => {
        try {
            const response: Response = await fetch("http://localhost:5050/api/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userName: username,
                    password: password,
                    email: email,
                    fpoName: fpoName,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Signup failed");
            }
            const data = await response.json();
            const { id, userName, email: userEmail, accessToken } = data;
            console.log("User ID:", id);
            console.log("Username:", userName);
            console.log("Email:", userEmail);
            console.log("Access Token:", accessToken);
            setShowSignUpForm(false)
        } catch (error) {
            console.error("Signup Error:", error.message);
            setError(error.message);
        }
    };

    const handleSignInClick = () => {
        setShowSignUpForm(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {!showSignUpForm && (
                <Card className="w-96 p-8 rounded-lg bg-white shadow-md">
                    <div className="flex justify-end mb-4">
                        <Button
                            onClick={handleSignUpClick}
                            className="text-sm border border-blue-500 text-blue-500 bg-white hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="rememberMe" className="text-sm text-gray-600">
                                Remember me
                            </label>
                        </div>
                        <div className="mb-6 text-right">
                            <Link to="#" className="text-sm text-blue-500 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <Button
                        onClick={handleLogin}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </Button>
                </Card>
            )}
            {showSignUpForm && (
                <Card className="w-96 p-8 rounded-lg bg-white shadow-md">
                    <div className="flex justify-end mb-4">
                        <Button
                            onClick={handleSignInClick}
                            className="text-sm border border-blue-500 text-blue-500 bg-white hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            Sign In
                        </Button>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="signup-username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <Input
                            type="text"
                            id="signup-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="signup-fponame"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            FPO Name
                        </label>
                        <Input
                            type="text"
                            id="signup-fponame"
                            value={fpoName}
                            onChange={(e) => setFpoName(e.target.value)}
                            placeholder="Enter your FPO name"
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="signup-email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <Input
                            type="email"
                            id="signup-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="signup-password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <Input
                            type="password"
                            id="signup-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full"
                        />
                    </div>
                    <Button
                        onClick={handleSignUp}
                        className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mt-4"
                    >
                        Sign Up
                    </Button>
                </Card>
            )}
        </div>
    );
};

export default LoginPage;
