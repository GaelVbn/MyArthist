"use client";
import React from "react";
import AdminRoute from "../../../components/Admin/AdminRoute";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "@/app/reducers/Admin";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin);
  console.log(admin);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const handleLogout = () => {
    dispatch(adminLogout(admin, token));
  };

  return (
    <AdminRoute>
      <div>
        <h1>Admin Dashboard</h1>
        <button className="btn-primary btn-ghost" onClick={handleLogout}>
          Logout
        </button>
        {/* Contenu du tableau de bord */}
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
