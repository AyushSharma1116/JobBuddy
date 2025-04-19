import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}</h1>
      <button onClick={logoutUser} className="bg-red-500 text-white px-3 py-1 rounded mb-6">
        Logout
      </button>

      <div>
        <h2 className="text-lg font-semibold">Your Skills</h2>
        <ul className="list-disc ml-6">
          {user.skills?.length > 0 ? user.skills.map((s, i) => <li key={i}>{s}</li>) : <li>No skills added yet</li>}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Learning Path</h2>
        <ul className="ml-4">
          {user.learningPath?.length > 0 ? (
            user.learningPath.map((lp, i) => (
              <li key={i}>
                <b>{lp.courseName}</b> - {lp.provider} ({lp.status})
              </li>
            ))
          ) : (
            <li>No learning path assigned</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
