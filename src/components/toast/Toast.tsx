"use client";

import React, { useEffect, useState } from "react";

import style from "./Toast.module.css";

interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  icon: React.ReactNode;
}

export function Toast({ type, message, icon }: ToastProps) {
  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-orange-500",
  }[type];
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={`${style.toast} ${bgColor}`} role="alert">
          <div className="mr-3">{icon}</div>
          <div className="flex-1">{message}</div>
          <button
            className="ml-4 text-white hover:text-gray-200"
            onClick={handleDismiss}
            aria-label="Close"
          >
            x
          </button>
        </div>
      )}
    </>
  );
}
