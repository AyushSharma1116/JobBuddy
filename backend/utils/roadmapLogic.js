const { GoogleGenerativeAI } = require('@google/generative-ai'); require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const mockRoadmapLogic = async (industry, role, currentSkills) => { const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const prompt = ` You are an AI Job Mentor. Based on the following details:

Industry: ${industry}

Role: ${role}

Current Skills: ${currentSkills.join(', ')}

Return:

A list of job profiles the user is eligible for.

A list of skills the user should learn.

A simple roadmap in 4-5 steps to reach their goal.

Respond in JSON with: { "recommendedProfiles": [...], "skillsToLearn": [...], "roadmap": "..." } `;

const result = await model.generateContent(prompt); const response = await result.response; const text = response.text();

try { const json = JSON.parse(text); return json; } catch (err) { console.error("Error parsing Gemini response:", err); return { recommendedProfiles: [], skillsToLearn: [], roadmap: "AI could not generate a roadmap this time.", }; } };

module.exports = { mockRoadmapLogic };