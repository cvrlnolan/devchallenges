import { z } from 'zod';

export const CatBreedSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  temperament: z.string(),
  origin: z.string(),
  life_span: z.string(),
  adaptability: z.number(),
  affection_level: z.number(),
  child_friendly: z.number(),
  grooming: z.number(),
  intelligence: z.number(),
  health_issues: z.number(),
  social_needs: z.number(),
  stranger_friendly: z.number(),
  reference_image_id: z.string().optional(),
});

export const CatBreedListSchema = z.array(CatBreedSchema);

export type CatBreed = z.infer<typeof CatBreedSchema>;
