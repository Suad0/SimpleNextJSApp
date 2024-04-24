"use client";

import { log } from "console";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const TicketForm = () => {
  const router = useRouter();

  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const result = await axios.post("/api/Tickets", formData);
      if (result.status !== 200) {
        throw new Error("Failed to create ticket.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  const startingTicketData = {
    title: "",
    describtion: "",
    category: "HW OR SW Problem",
    priority: 1,
    progress: 0,
    status: "not started",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="describtion"
          name="describtion"
          onChange={handleChange}
          required={true}
          value={formData.describtion}
        />

        <label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="HW / SW"> HW OR SW Problems</option>
            <option value="HW"> HW</option>
            <option value="SW"> SW Problems</option>
          </select>
        </label>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Satus</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Satrted"> Satrted</option>
          <option value="Ended"> END</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
