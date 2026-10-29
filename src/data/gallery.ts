import type { GalleryItem } from "@/types";

/**
 * Gallery items for before & after photos.
 * TODO: Replace beforeImage and afterImage with real photos from the Facebook page.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "windows",
    title: "Window Cleaning",
    caption: "Windows brought back to life, crystal clear and streak-free",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "g2",
    category: "frames-sills",
    title: "Frames & Sills",
    caption: "Frames, glass and sills brought back to life",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "g3",
    category: "frames-sills",
    title: "Sills Deep Clean",
    caption: "Sills properly cleaned and rinsed, not just wiped",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "g4",
    category: "gutters",
    title: "Gutter Clearing",
    caption: "Gutters from 'mini swamp' to good as new",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "g5",
    category: "fascias",
    title: "Fascia Cleaning",
    caption: "Fascias and soffits freshened up",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: "g6",
    category: "conservatories",
    title: "Conservatory Roof",
    caption: "Conservatory roof cleaned from the ground with our pole system",
    beforeImage: null,
    afterImage: null,
  },
];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "windows", label: "Windows" },
  { value: "frames-sills", label: "Frames & Sills" },
  { value: "gutters", label: "Gutters" },
  { value: "fascias", label: "Fascias" },
  { value: "conservatories", label: "Conservatories" },
];
