"use client";

import { useState } from "react";
import { updateProfile, deleteProfile } from "@/lib/profile";
import { link } from "fs";

type ProfileCardProps = {
  id: string;
  name: string;
  telefon: string;
  number: string;
  time: string;
};

export default function ProfileCard({
  id,
  name,
  telefon,
  number,
  time,
}: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTelefon, setNewTelefon] = useState(telefon);
  const [newNumber, setNewNumber] = useState(number);
  const [newTime, setNewTime] = useState(time);

  return (
    <div className="border rounded p-4 mb-4 bg-white">
      {!isEditing && (
        <>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-700 mt-2">{telefon}</p>
          <p className="text-gray-700 mt-2">{number}</p>
          <p className="text-gray-700 mt-2">{time}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsEditing(true) }
              className="text-blue-600"
            >
              Edit
            </button>

            <form action={deleteProfile}>
              <input type="hidden" name="id" value={id} />
              <button className="text-red-600">Delete</button>
            </form>
          </div>
        </>
      )}

      {isEditing && (
        <form action={updateProfile} className="flex flex-col gap-3">
          <input type="hidden" name="id" value={id} />

          <input
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            name="title"
            value={newTelefon}
            onChange={(e) => setNewTelefon(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            name="title"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            name="title"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-1 rounded">
              Save
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
