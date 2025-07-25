import { z } from "zod";

export const cropSchema = z.object({
  name: z.string().min(1, "Crop name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(5, "Description is too short"),
  image: z.string().url("Valid image URL is required"),
  growthPeriod: z.string().optional(),
  waterRequirements: z.string().optional(),
  soilRequirements: z.string().min(1, "Soil requirements are required"),
  fertilizers: z.string().optional(),
  avgTemperature: z.coerce.number().min(-50, "Min -50°C").max(60, "Max 60°C"),
  avgHumidity: z.coerce.number().min(0, "Min 0%").max(100, "Max 100%"),
  rainfall: z.coerce.number().min(0, "Must be positive")
});
