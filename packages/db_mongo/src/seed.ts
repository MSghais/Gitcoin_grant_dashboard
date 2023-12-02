import { prisma } from ".";

import type { Categories, User } from "@prisma/client";

const DEFAULT_COMPANY = [
  // Add your own user to pre-populate the database with

  {
    title: "Personnal development",
    image: "",
    slugName: "personnal_dev",
    description:
      "Become each day better.  Discover techniques to harness creativity, fostering a mindset that empowers you to think outside the box. Learn the principles of resilience, explore real-life case studies, and develop strategies to overcome challenges.",
  },

  {
    title: "Computer science",
    image: "",
    slugName: "computer_science",
    description:
      "Dive into the captivating world of virtual reality, exploring its applications, technology, and future prospects. Enhance your problem-solving skills by mastering the art and science of algorithm design, a cornerstone of computer science.",
  },
  {
    title: "Math",
    image: "",
    slugName: "math",
    description: "",
  },
  {
    title: "Health",
    image: "",
    slugName: "health",
    description: "",
  },
  {
    title: "AI",
    image: "",
    slugName: "ai",
    description: "",
  },
  {
    title: "Education & Learning",
    image: "",
    slugName: "education",
    description:
      " Exploring the importance of continuous learning and showcasing platforms that facilitate it.",
  },
  {
    title: "Environnement",
    image: "",
    slugName: "environnement",
    description:
      "Discussing actionable steps individuals can take to transition towards a more sustainable lifestyle.",
  },
  {
    title: "Fitness and Wellbeing",
    image: "",
    slugName: "fitness",
    description:
      " Sharing tips, training plans, and motivational stories for newbie or competitors",
  },
  {
    title: "Cryptocurrency & Blockchain",
    image: "",
    slugName: "web3",
    description:
      ": Deliberating the potential, risks, and future of cryptocurrencies in the global financial ecosystem.",
  },
  {
    title: "Travel and exploration",
    image: "",
    slugName: "travel",
    description:
      "Sharing unique travel experiences from a local's perspective, uncovering hidden gems across the globe",
  },
  {
    title: "Entrepreneurship",
    image: "",
    slugName: "entrepreneurship",
    description:
      "Sharing experiences, challenges, and advice from entrepreneurs who have navigated the startup journey.",
  },
  {
    title: " Digital Art and Design",
    image: "",
    description:
      ": Showcasing digital artistry, discussing tools and techniques, and exploring the impact of digital art in contemporary culture.",
    slugName: "digital_art",
  },
  {
    title: "Design",
    image: "",
    description:
      ": Showcasing digital artistry, discussing tools and techniques, and exploring the impact of digital art in contemporary culture.",
    slugName: "design",
  },

  // ] as Array<Partial<Company>>;
] as Array<Categories>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_COMPANY.map(async (company) => {
        await prisma.categories.create({
          data: {
            // ...company
            title: company?.title,
            description: company?.description,
            image: company?.image,
            imageBanner: company?.imageBanner,
          },
        });

        // await prisma.themes.create({ data: {
        //   // ...company
        //   title:company?.title,
        //   description:company?.description,
        //   image:company?.image,
        //   imageBanner:company?.imageBanner,
        // } })
      })
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
