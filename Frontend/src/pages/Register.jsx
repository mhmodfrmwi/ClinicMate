import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "@/rtk/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name === "name" ? "userName" : name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.email || !formData.password) {
      dispatch(clearError());
      return;
    }

    dispatch(registerUser(formData))
      .unwrap()
      .then((data) => {
        toast.success(data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-slate-950">
      <div className="glass w-full max-w-md rounded-3xl bg-white/50 p-8 shadow-2xl dark:bg-slate-900/50">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Join us for seamless healthcare</p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-100 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.userName}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 bg-white/50 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-800/50 dark:text-white"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
