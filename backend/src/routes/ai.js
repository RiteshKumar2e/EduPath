import express from "express";
const router = express.Router();

// Mock Career Navigator
router.post("/career-navigator", (req, res) => {
  const { academics, interests, targetCountry } = req.body;
  
  // Fake delay for AI feel
  setTimeout(() => {
    res.json({
      success: true,
      recommendations: [
        {
          university: "University of Toronto",
          program: "MS in Computer Science",
          country: "Canada",
          fitScore: 92,
          reasoning: "Based on your CGPA of " + (academics.cgpa || "8.5") + " and interest in " + (interests || "AI") + ", this program offers excellent research opportunities."
        },
        {
          university: "National University of Singapore",
          program: "Master of Computing",
          country: "Singapore",
          fitScore: 88,
          reasoning: "High ROI and proximity to tech hubs in Asia match your profile."
        }
      ]
    });
  }, 1500);
});

// Mock Admission Predictor
router.post("/admission-predictor", (req, res) => {
  const { cgpa, gre, university } = req.body;
  
  setTimeout(() => {
    res.json({
      success: true,
      probability: 78,
      status: "Moderate",
      suggestions: [
        "Improve your GRE Quantitative score by 5 points.",
        "Focus on 2 more research-based internships.",
        "Highlight your leadership role in college tech club."
      ]
    });
  }, 1200);
});

// Mock ROI Calculator
router.post("/roi-calculator", (req, res) => {
  const { tuition, expenses, expectedSalary } = req.body;
  
  const totalCost = (Number(tuition) + Number(expenses)) * 2; // for 2 years
  const paybackYears = (totalCost / (Number(expectedSalary) * 0.4)).toFixed(1);
  
  res.json({
    success: true,
    totalCost,
    paybackTimeline: `${paybackYears} years`,
    roiEstimate: "145%",
    monthlyEmi: (totalCost * 0.08 / 12).toFixed(2), // dummy EMI calculation
  });
});

export default router;
