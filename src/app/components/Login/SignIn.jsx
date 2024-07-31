"use client";
import React, { useState } from "react";
import SignUp from "./SignUp";
import { useDispatch } from "react-redux";
import { loginUser } from "@/app/reducers/Login";

export default function SignIn({ onSuccess }) {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false); // État pour gérer l'affichage du formulaire d'inscription
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors ? errorData.errors[0].msg : "Failed to sign in");
      }

      const result = await response.json();
      setSuccess("Login successful");
      dispatch(loginUser(result.user));
      console.log("Result:", result.user);
      setEmail("");
      setPassword("");
      if (onSuccess) onSuccess();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    setShowSignUp(!showSignUp); // Alterne l'affichage du formulaire d'inscription
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center bg-zinc-100 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {showSignUp ? "Sign Up for an account" : "Sign In to your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {!showSignUp ? (
          <form onClick={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
            <hr />
            <div>
              {/* Optionnel : autre contenu ou des éléments supplémentaires */}
            </div>
          </form>
        ) : (
          <SignUp onSuccess={onSuccess} /> // Affiche le formulaire d'inscription si `showSignUp` est vrai
        )}

{error && (<p className="text-red-500">{error}</p>)}

{success && (<p className="text-green-500">{success}</p>)}
        
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
          onClick={handleClick}
        >
          {showSignUp ? "Back to Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
