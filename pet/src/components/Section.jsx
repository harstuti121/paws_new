// src/components/Team.jsx
import React from 'react';

const team = [
  { id: 1, name: "George Miller", role: "Veterinarian", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Willis Cameron", role: "Dog Trainer", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Thomas Keller", role: "Groomer", image: "https://via.placeholder.com/100" }
];

export default function Team() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Best Working Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map(member => (
            <div key={member.id} className="text-center">
              <img src={member.image} alt={member.name} className="rounded-full mx-auto mb-4"/>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
