import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="flex gap-20">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "text-danger" : "text-dark"
        }
      >
        Home
      </NavLink>
        <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "text-danger" : "text-dark"
        }
      >
        Register
      </NavLink>
        <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-danger" : "text-dark"
        }
      >
        Login
      </NavLink>
       <NavLink
        to="/user/2"
        className={({ isActive }) =>
          isActive ? "text-danger" : "text-dark"
        }
      >
        User
      </NavLink>
    </div>
  );
}
