import React, { useState } from "react";
import { loginUser } from "../api/auth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);

    if (response.token) {
      localStorage.setItem("token", response.token);
      setMessage("Login successful!");
      window.location.href = "/home";
    } else {
      setMessage(response.message || "Login failed!");
    }
  };

  return (
    <div className="container mt-5 w-25 m-auto">
      <h2 className="text-danger text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { loginUser } from "../api/auth";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [token, setToken] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await loginUser(formData);

//     if (response.token) {
//       setMessage("Login successful!");
//       setToken(response.token); // Save token if needed
//     } else {
//       setMessage(response.message || "Login failed!");
//     }
//   };

//   return (
//     <div className="container mt-5 w-25">
//       <h2 className="text-danger text-center mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary m-auto w-auto">
//           Login
//         </button>
//       </form>
//       {message && <p className="text-center mt-3">{message}</p>}
//       {token && (
//         <div className="mt-3">
//           <p>Token:</p>
//           <textarea
//             readOnly
//             rows="4"
//             className="form-control"
//             value={token}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
