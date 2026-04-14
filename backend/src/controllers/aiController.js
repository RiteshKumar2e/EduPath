import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getCareerPath = asyncHandler(async (req, res) => {
  // Mock AI Logic
  const data = {
    matches: [
      { id: 1, uni: "Stanford", match: 92 },
      { id: 2, uni: "MIT", match: 88 }
    ]
  };
  res.status(200).json(new ApiResponse(200, data, "Recommendations fetched"));
});

export const predictAdmission = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { probability: 75 }, "Probability calculated"));
});
