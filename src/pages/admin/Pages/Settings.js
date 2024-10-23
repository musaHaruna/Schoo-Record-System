import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSchoolSettings } from "../../../app/features/schoolSlice";

const Settings = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [currentSession, setCurrentSession] = useState("");
  const [nextTermStartDate, setNextTermStartDate] = useState("");

  const dispatch = useDispatch();

  // Handle school logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setSchoolLogo(file);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Collect settings data
    const schoolSettings = {
      schoolName,
      schoolLogo,
      currentSession,
      nextTermStartDate,
    };

    // Dispatch action to save settings (you need to handle this in your Redux store or backend)
    dispatch(updateSchoolSettings(schoolSettings));
    alert("Settings saved successfully!");
  };

  return (
    <section className="settings-page flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          School Settings
        </h2>

        <form onSubmit={handleSave} className="settings-form space-y-6">
          {/* School Name */}
          <div className="form-group">
            <label
              htmlFor="schoolName"
              className="block font-semibold mb-2 text-gray-700"
            >
              School Name:
            </label>
            <input
              type="text"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Enter School Name"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            />
          </div>

          {/* School Logo */}
          <div className="form-group">
            <label
              htmlFor="schoolLogo"
              className="block font-semibold mb-2 text-gray-700"
            >
              School Logo:
            </label>
            <input
              type="file"
              id="schoolLogo"
              accept="image/*"
              onChange={handleLogoChange}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            />
          </div>

          {/* Current Session */}
          <div className="form-group">
            <label
              htmlFor="currentSession"
              className="block font-semibold mb-2 text-gray-700"
            >
              Current Session:
            </label>
            <input
              type="text"
              id="currentSession"
              value={currentSession}
              onChange={(e) => setCurrentSession(e.target.value)}
              placeholder="e.g., 2023/2024"
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            />
          </div>

          {/* Next Term Start Date */}
          <div className="form-group">
            <label
              htmlFor="nextTermStartDate"
              className="block font-semibold mb-2 text-gray-700"
            >
              Next Term Start Date:
            </label>
            <input
              type="date"
              id="nextTermStartDate"
              value={nextTermStartDate}
              onChange={(e) => setNextTermStartDate(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Save Settings
          </button>
        </form>
      </div>
    </section>
  );
};

export default Settings;
