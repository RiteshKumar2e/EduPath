/**
 * AI Service for EduPath
 * This layer handles logic for Career Predictions and Admission Probability.
 * In production, replace these mocks with OpenAI/Gemini API calls.
 */

export const getCareerDiscoveryRecommendations = async (profileData) => {
  // Simulated AI matching logic
  const matches = [
    {
      uni: "Technical University of Munich",
      program: "MSc Robotics, Cognition, Intelligence",
      matchScore: 94,
      reasoning: "Alignment with your CGPA (9.2) and previous Python projects."
    },
    {
      uni: "ETH Zurich",
      program: "Master in Computer Science",
      matchScore: 89,
      reasoning: "Top tier researcher match for your interest in Distributed Systems."
    }
  ];

  return matches;
};

export const calculateAdmissionProbability = async (profile, targetUni) => {
  // Simulated probability algorithm
  const baseProb = 65;
  const greBoost = profile.gre > 320 ? 10 : 0;
  
  return {
    probabilityValue: Math.min(baseProb + greBoost, 99),
    status: profile.gre > 320 ? "Ambitious but Possible" : "Reach"
  };
};
