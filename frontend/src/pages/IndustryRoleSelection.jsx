import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IndustryRoleSelection = () => {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);
  const [skills, setSkills] = useState([]);

  const industries = ['Technology', 'Healthcare', 'Finance', 'Marketing']; // Example industries
  const rolesMap = {
    Technology: ['Software Developer', 'Data Scientist', 'AI Specialist'],
    Healthcare: ['Doctor', 'Nurse', 'Pharmacist'],
    Finance: ['Investment Banker', 'Accountant', 'Financial Analyst'],
    Marketing: ['Content Writer', 'SEO Specialist', 'Digital Marketer'],
  };

  const skillsMap = {
    'Software Developer': ['Java', 'C++', 'JavaScript', 'Problem Solving'],
    'Data Scientist': ['Python', 'Machine Learning', 'Statistics', 'Data Analysis'],
    'AI Specialist': ['TensorFlow', 'Machine Learning', 'Deep Learning', 'Python'],
    'Doctor': ['Clinical Knowledge', 'Patient Care', 'Medical Research'],
    'Nurse': ['Patient Care', 'Medical Knowledge', 'Empathy'],
    'Pharmacist': ['Pharmaceutical Knowledge', 'Attention to Detail', 'Patient Interaction'],
    'Investment Banker': ['Financial Analysis', 'Excel', 'Risk Management'],
    'Accountant': ['Financial Reporting', 'Tax Knowledge', 'Excel'],
    'Financial Analyst': ['Excel', 'Data Analysis', 'Financial Modelling'],
    'Content Writer': ['Creativity', 'Grammar', 'Research'],
    'SEO Specialist': ['SEO Tools', 'Google Analytics', 'Content Writing'],
    'Digital Marketer': ['SEO', 'PPC', 'Social Media Marketing'],
  };

  useEffect(() => {
    if (industry) {
      setRoles(rolesMap[industry] || []);
    }
    setRole('');
    setSkills([]);
  }, [industry]);

  useEffect(() => {
    if (role) {
      setSkills(skillsMap[role] || []);
    }
  }, [role]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white px-4 w-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Get Started</h2>

        {/* Industry Dropdown */}
        <div className="mb-6">
          <label htmlFor="industry" className="block text-lg font-medium text-gray-700">Select Industry</label>
          <select
            id="industry"
            className="w-full p-3 mt-2 bg-gray-100 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select an Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Role Dropdown */}
        {industry && (
          <div className="mb-6">
            <label htmlFor="role" className="block text-lg font-medium text-gray-700">Select Role</label>
            <select
              id="role"
              className="w-full p-3 mt-2 bg-gray-100 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select a Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Skills Section */}
        {role && skills.length > 0 && (
          <div className="mt-6 bg-indigo-50 p-4 rounded-md text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Skills Required for {role}</h3>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Button */}
        <div className="mt-8 text-center">
          <Link
            to="/dashboard"
            className="w-full bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryRoleSelection;
