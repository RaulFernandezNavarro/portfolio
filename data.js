/**
 * Portfolio data — single source of truth.
 * Edit this file to update both template versions simultaneously.
 */
const PROFILE = {
  name: "Raúl Fernández",
  title: "Senior Machine Learning Engineer · Data Scientist",
  tagline: "I take messy problems and build ML systems that actually ship.",
  location: "Rotterdam, Netherlands",

  // Social / contact links — update as needed
  linkedin: "https://www.linkedin.com/in/raulfernandeznavarro",
  github: "#",   // e.g. https://github.com/yourhandle
  email: "#",    // e.g. mailto:you@example.com

  about: "I'm a Senior ML Engineer based in Rotterdam, four years into building production machine learning at bol. The work ranges from LLM agents to computer vision systems. I came from a software engineering background and I like that this field makes you good at both. I finished my MSc in Data Science in 2026 and I'm available for freelance consulting.",

  // ── Skills ─────────────────────────────────────────────────────────────────
  skills: [
    {
      icon: "fa-robot",
      label: "LLM Engineering",
      description: "Building production LLM agents and pipelines. Tool use, multi-step reasoning, full observability via Phoenix and OpenTelemetry, running at scale."
    },
    {
      icon: "fa-eye",
      label: "Computer Vision",
      description: "Image embeddings with ViT, FAISS similarity search, and fine-tuning with MLPs and Matryoshka Representation Learning."
    },
    {
      icon: "fa-brain",
      label: "Machine Learning",
      description: "End-to-end ML from feature engineering to production. Deep learning, reinforcement learning, the whole process."
    },
    {
      icon: "fa-cloud",
      label: "MLOps & Cloud",
      description: "Google Cloud Platform, model serving, monitoring pipelines, and CI/CD for ML systems."
    },
    {
      icon: "fa-code",
      label: "Software Engineering",
      description: "Python first. Backend engineering background in Kotlin and Spring Boot."
    },
    {
      icon: "fa-database",
      label: "Data Engineering",
      description: "ETL, data pipelines, and analytics systems. Comfortable owning the full stack from raw data to model output."
    }
  ],

  // ── Projects ────────────────────────────────────────────────────────────────
  // icon: FontAwesome 5 solid icon — shown on the project card
  // link: set to "#" if not publicly available
  projects: [
    {
      title: "Gift Finder",
      category: "LLM Agent",
      icon: "fa-gift",
      description: "An LLM chatbot that helps bol customers find the right gift. It asks questions, searches the catalogue, and enriches results before surfacing them. I owned this end to end — architecture, engineering, and stakeholder conversations. Runs at bol scale on Google ADK with Phoenix and OpenTelemetry for observability.",
      tech: ["Google ADK", "Python", "LLMs", "Phoenix", "OpenTelemetry", "GCP"],
      link: "#"
    },
    {
      title: "LLM-Powered Scraper",
      category: "LLM · Data Engineering",
      icon: "fa-spider",
      description: "A competitor data scraper that tries CSS selectors first and only calls an LLM when they fail. The key bit: selectors found by the LLM get saved and reused, so the system gets smarter over time without burning API calls on every run.",
      tech: ["Python", "LLMs", "Web Scraping", "GCP"],
      link: "#"
    },
    {
      title: "Visual Search & Image Similarity",
      category: "Computer Vision",
      icon: "fa-images",
      description: "A product search system built on ViT image embeddings and FAISS indexes. Give it a product image and it finds visually similar items across the catalogue. Also used for duplicate detection at scale.",
      tech: ["Python", "ViT", "FAISS", "PyTorch", "GCP"],
      link: "#"
    },
    {
      title: "Embedding Fine-tuning with MRL",
      category: "Computer Vision · Research",
      icon: "fa-microchip",
      description: "Fine-tuning pre-trained ViT embeddings for our specific retrieval tasks using MLP adapters and Matryoshka Representation Learning. The result is smaller, faster embeddings that perform better on our data.",
      tech: ["PyTorch", "ViT", "MRL", "Python", "GCP"],
      link: "#"
    },
    {
      title: "Primary Image Optimisation",
      category: "Deep Learning · Reinforcement Learning",
      icon: "fa-image",
      description: "My MSc thesis, currently being implemented at bol. The problem: which product image should be shown first? A supervised deep learning model scores candidates, then a Multi-Armed Bandit handles the online optimisation.",
      tech: ["PyTorch", "Deep Learning", "Multi-Armed Bandits", "Python"],
      link: "#"
    }
  ],

  // ── Experience ──────────────────────────────────────────────────────────────
  experience: [
    {
      company: "bol",
      location: "Utrecht, Netherlands",
      duration: "4 yrs · Full-time",
      icon: "fa-shopping-cart",
      roles: [
        {
          title: "Senior Machine Learning Engineer / Data Scientist",
          period: "Jan 2025 – Present",
          description: "Leading ML projects at scale across bol's e-commerce platform. Responsible for architecture, delivery, and stakeholder alignment on several high-impact systems.",
          skills: ["Machine Learning", "Python", "GCP", "MLOps"]
        },
        {
          title: "Machine Learning Engineer / Data Scientist",
          period: "Jun 2023 – Feb 2025",
          description: "Built and shipped end-to-end ML pipelines on Google Cloud Platform, improving operations and automating workflows across the business.",
          skills: ["GCP", "Python", "Data Pipelines"]
        },
        {
          title: "Software Engineer",
          period: "Mar 2022 – Jun 2023",
          description: "Backend services and APIs in Kotlin and Spring Boot, supporting bol's e-commerce infrastructure.",
          skills: ["Kotlin", "Spring Boot", "Backend"]
        }
      ]
    },
    {
      company: "SENSIA",
      location: "Leganés, Spain",
      duration: "8 mos · Internship",
      icon: "fa-laptop-code",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "Sep 2020 – Apr 2021",
          description: "UI and backend development, working on full-stack features from design to delivery.",
          skills: ["UI Design", "Backend", "Full-Stack"]
        }
      ]
    }
  ],

  // ── Education ───────────────────────────────────────────────────────────────
  education: [
    {
      school: "Universitat Oberta de Catalunya",
      degree: "MSc, Data Science",
      period: "2023 – 2026",
      note: "Part-time"
    },
    {
      school: "Universitat Politècnica de Catalunya",
      degree: "Postgraduate, AI & Deep Learning",
      period: "2021 – 2022"
    },
    {
      school: "Universidad Carlos III de Madrid",
      degree: "BE, Telecommunications Engineering",
      period: "2015 – 2021"
    },
    {
      school: "RPTU Kaiserslautern-Landau",
      degree: "BE, Electrical & Computer Engineering",
      period: "2021",
      note: "Exchange"
    },
    {
      school: "George Mason University",
      degree: "BE, Telecommunications Engineering",
      period: "2018 – 2019",
      note: "Exchange"
    }
  ],

  // ── Certifications ──────────────────────────────────────────────────────────
  certifications: [
    { name: "Certified Data Science with Python", issuer: "Xebia", date: "Feb 2024" },
    { name: "Data Science with Python Foundation", issuer: "APMG International", date: "Jan 2023" },
    { name: "Kotlin For Developers", issuer: "Info Support", date: "Nov 2022" },
    { name: "Elements of Artificial Intelligence", issuer: "University of Helsinki", date: "Jul 2021" },
    { name: "Innovation Platform", issuer: "Vodafone Campus Lab", date: "Dec 2019" }
  ],

  // ── Languages ───────────────────────────────────────────────────────────────
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Elementary" }
  ]
};
