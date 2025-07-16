import React from "react";
import { motion } from "framer-motion";

export default function FilterButtons({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];
  return (
    <div className="filters-container mb-3 p-auto m-auto">
      <h1 className="MyTask-heading">
        My <span className="MyTask-heading-subpart">Tasks</span>
      </h1>
      {filters.map(f => (
        <button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          key={f}
          className={`btn btn-outline-primary btn-sm mr-1 \${filter === f ? "active" : ""}`}
          
          onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}
    </div>
  );
}
