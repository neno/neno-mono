import { defineCollection, z } from "astro:content";

export const collections = {
  about: defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
      name: z.string(),
      role: z.enum(["Full Stack Developer", "Frontend Developer", "Backend Developer", "Designer"]),
      image: image(),
    }),
  }),
  experience: defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      duration: z.string(),
      client: z.object({
        name: z.string(),
        logo: image().optional(),
        url: z.string().optional(),
      }),
      technologies: z.array(z.string()),
      image: image(),
      link: z.string(),
    }),
  }),
  skills: defineCollection({
    type: "data",
    schema: ({ image }) => z.object({
      skill: z.string(),
      level: z.enum(["beginner", "intermediate", "advanced"]),
    }),
  }),
}