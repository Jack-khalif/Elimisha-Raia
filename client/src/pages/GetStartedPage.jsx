import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function GetStartedPage() {
  const [form, setForm] = useState({ name: '', region: '', ageGroup: '' });
  const [guestId, setGuestId] = useState(null);
  const navigate = useNavigate();

  // Step 1: Auto-register guest on mount
  useEffect(() => {
    const registerGuest = async () => {
      try {
        const response = await axios.post('/api/users/guest-register',);
        const { token, user } = response.data;

        localStorage.setItem('guestToken', token);
        localStorage.setItem('guestUser', JSON.stringify(user));
        setGuestId(user._id); // Save for PATCH update
      } catch (error) {
        console.error('Guest registration failed', error);
      }
    };

    registerGuest();
  }, []);

  // Step 2: Handle form submission (onboarding)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Optionally: send onboarding info to backend
      await axios.patch(`/api/users/${guestId}`, form);

      localStorage.setItem('onboardingInfo', JSON.stringify(form));
      navigate('/learn');
    } catch (err) {
      console.error('Failed to save onboarding info', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-emerald-900">Let’s Get to Know You</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={form.region}
          onChange={(e) => setForm({ ...form, region: e.target.value })}
          required
        >
          <option value="">Select Region</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Coast">Coast</option>
          <option value="Rift Valley">Rift Valley</option>
          <option value="Nyanza">Nyanza</option>
        </select>
        <select
          className="w-full p-2 border rounded"
          value={form.ageGroup}
          onChange={(e) => setForm({ ...form, ageGroup: e.target.value })}
          required
        >
          <option value="">Select Age Group</option>
          <option value="12-17">12–17</option>
          <option value="18-24">18–24</option>
          <option value="25-35">25–35</option>
        </select>
        <div className="flex flex-row gap-3 pt-2">
            <button
            type="submit"
            className="w-full py-2 bg-emerald-800 text-white font-semibold rounded hover:bg-emerald-700">
            Start Learning
            </button>
            <button
            type="submit"
            className="w-full py-2 bg-emerald-700 text-white font-semibold rounded hover:bg-emerald-500">
            Start Game
            </button>
        </div>

      </form>
    </div>
  );
}
