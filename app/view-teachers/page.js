"use client";
import React, { useEffect, useState } from "react";

export default function ViewTeacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch("/api/teachers");
        const data = await res.json();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to fetch teachers", error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Teacher List</h1>

      {teachers.length === 0 ? (
        <p className="text-center text-gray-400">No teachers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Phone</th>
                <th className="p-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id} className="border-t border-gray-700">
                  <td className="p-2">{t.name}</td>
                  <td className="p-2">{t.department}</td>
                  <td className="p-2">{t.number}</td>
                  <td className="p-2">{t.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
