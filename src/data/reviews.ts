import type { Review } from "@/types";

/**
 * All 14 real reviews, VERBATIM from the Facebook page.
 * Do not edit the wording, spelling or emoji.
 * No reviewer names were given, so we show "Facebook customer".
 */
export const reviews: Review[] = [
  {
    id: "r1",
    text: "Wow, Arron did an amazing job on our windows, facias and conservatory. Hadn't been cleaned for a couple of years and he had them looking brand new! Lovely guy who goes the extra mile!",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "fascias", "conservatories"],
    featured: false,
  },
  {
    id: "r2",
    text: "Incredible job ! 100% recommended windows look absolutely fabulous! Xx",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: false,
  },
  {
    id: "r3",
    text: "great service, top bloke, windows were sparkling afterwards",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: false,
  },
  {
    id: "r4",
    text: "Professional, responsive, great work. Windows & frames look great.Absolutely great work yesterday, many thanks.",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "frames-sills"],
    featured: false,
  },
  {
    id: "r5",
    text: "Arron went above and beyond with our first clean, cleaning a window previous cleaner refused and fixing a miss placed gutter! Windows all looked so clean Thank you",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "gutters"],
    featured: false,
  },
  {
    id: "r6",
    text: "Definitely 100% the best window cleaner we have had, attention to detail on every window, excellent knowledge, fairly priced. Thank you.",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: true,
  },
  {
    id: "r7",
    text: "My windows have never looked so clean since they were first installed! I'm so glad I switched to Bradley's Window Cleaning. I was paying more for a worse clean with my old window cleaner! I definitely recommend Arron!",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: false,
  },
  {
    id: "r8",
    text: "Couldn't recommend enough, has done a great job and really took his time, our windows have never been so clean Thankyou so much!",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: false,
  },
  {
    id: "r9",
    text: "Fantastic man. Within seven hours of first messaging him, he was at my grandma's house cleaning all the windows. Even managed to clean the window that no window cleaner has ever been able to reach in the whole 20 years she's been in the house. Thank you very much x",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: true,
  },
  {
    id: "r10",
    text: "Did an absolutely fantastic job cleaning our windows, conservatory and clearing our gutters (far better than the previous window cleaner and at a better price). Highly recommend his first class service.",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "conservatories", "gutters"],
    featured: true,
  },
  {
    id: "r11",
    text: "Thankyou so much! Used for the first time today, windows both inside & out. The windows and frames look brand new. Thankyou for removing all the old stickers/marks. Made a huge difference and frames are so white!!! Highly recommend, will be definitely using regular 5☆",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "frames-sills"],
    featured: false,
  },
  {
    id: "r12",
    text: "Amazing service! Just used Bradley's window cleaning services for the first time after a long time of neglect, and I honestly feel like I have a new house. Incredible job thank you so much! 1000% recommend",
    source: "Facebook review",
    rating: 5,
    tags: ["windows"],
    featured: true,
  },
  {
    id: "r13",
    text: "Done a bang on job took extra time and care doing my windows and doors and was quick and efficient would definitely recommend",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "doors"],
    featured: true,
  },
  {
    id: "r14",
    text: "Fantastic job! I didn't even think the windows were that dirty until Bradley came and cleaned them. Lots of attention to detail, cleaning my front door by hand, cleaning the garage door etc. Really happy, now I just need to find someone to come and match the inside of the windows Thank you for coming to do them on such short notice too! Really appreciate it. Would 1000% recommend.",
    source: "Facebook review",
    rating: 5,
    tags: ["windows", "doors"],
    featured: true,
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
