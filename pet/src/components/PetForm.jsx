import React, { useState } from "react";

export default function PetForm({ onSave, onCancel }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Dog");
  const [age, setAge] = useState("");
  const [vaccinations, setVaccinations] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return alert("Please fill all details");

    onSave({
      name,
      type,
      age,
      vaccinations: vaccinations
        ? vaccinations.split(",").map((v) => v.trim())
        : [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Pet Name */}
      <div>
        <label className="block text-gray-700 font-medium">Pet Name</label>
        <input
          type="text"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-gray-700 font-medium">Type</label>
        <select
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Other</option>
        </select>
      </div>

      {/* Age */}
      <div>
        <label className="block text-gray-700 font-medium">Age (Years)</label>
        <input
          type="number"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      {/* Vaccinations */}
      <div>
        <label className="block text-gray-700 font-medium">
          Vaccinations (comma separated)
        </label>
        <input
          type="text"
          placeholder="e.g. Rabies, Parvo"
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
          value={vaccinations}
          onChange={(e) => setVaccinations(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
