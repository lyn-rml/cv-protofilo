export type Lang = "en" | "fr";

export interface NavT {
  home: string;
  education: string;
  experience: string;
  certifications: string;
  projects: string;
  contact: string;
}

export interface HomeT {
  greeting: string;
  role: string;
  availability: string;
  headingLine1: string;
  headingLine2: string;
  taglinePrefix: string;
  taglineHighlight: string;
  taglineSuffix: string;
  ctaWork: string;
  ctaContact: string;
  ctaDownloadCv: string;
  cvFile: string;
}

export interface EducationItemT {
  degree: string;
  school: string;
  location: string;
  period: string;
  note?: string;
}

export interface EducationT {
  sectionLabel: string;
  title: string;
  items: EducationItemT[];
}

export interface ExperienceItemT {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  bullets: string[];
}

export interface ExperienceT {
  sectionLabel: string;
  title: string;
  items: ExperienceItemT[];
}

export interface CertificationItemT {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  skills: string[];
  verifyLabel: string;
}

export interface CertificationsT {
  sectionLabel: string;
  title: string;
  items: CertificationItemT[];
}

export interface ProjectItemT {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  status: string;
}

export interface ProjectsT {
  sectionLabel: string;
  title: string;
  items: ProjectItemT[];
  moreLabel: string;
}

export interface ContactT {
  sectionLabel: string;
  title: string;
  paragraphPrefix: string;
  paragraphHighlight: string;
  paragraphSuffix: string;
  locationLabel: string;
  location: string;
  statusLabel: string;
  status: string;
}

export interface FooterT {
  copyrightPrefix: string;
  rights: string;
}

export type SkillCategoryId =
  | "languages"
  | "frontendMobile"
  | "backend"
  | "systemDesign"
  | "aiComputerVision"
  | "dataInfra";

export interface SkillsT {
  heading: string;
  categories: Record<SkillCategoryId, string>;
  items: Record<SkillCategoryId, string[]>;
}

export interface LangSwitcherT {
  label: string;
}

export interface Translations {
  nav: NavT;
  home: HomeT;
  education: EducationT;
  experience: ExperienceT;
  certifications: CertificationsT;
  projects: ProjectsT;
  contact: ContactT;
  footer: FooterT;
  skills: SkillsT;
  langSwitcher: LangSwitcherT;
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      home: "Home",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, I'm Lyn Rammal",
      role: "Full-Stack · AI · Mobile",
      availability: "Available from March 2027",
      headingLine1: "I build software",
      headingLine2: "that matters.",
      taglinePrefix: "My objective: create solutions that solve ",
      taglineHighlight: "real impact",
      taglineSuffix:
        " — turning ideas into useful products, from AI-powered pipelines to production-grade platforms and mobile apps.",
      ctaWork: "View my work",
      ctaContact: "Get in touch",
      ctaDownloadCv: "Download my CV",
      cvFile: "/cv/Lyn_Rammal_CV.pdf",
    },
    education: {
      sectionLabel: "Academic path",
      title: "Education",
      items: [
        {
          degree: "Engineering degree — Digital Systems Design",
          school: "ENSTA · Institut Polytechnique de Paris",
          location: "France",
          period: "2025 – 2027",
          note: "Final year",
        },
        {
          degree: "Bachelor's — Computer & Communications Network Engineering",
          school: "Lebanese University",
          location: "Lebanon",
          period: "2022 – 2025",
          note: "Graduated",
        },
      ],
    },
    experience: {
      sectionLabel: "Where I've worked",
      title: "Experience",
      items: [
        {
          role: "Software Engineer — Internship",
          company: "IBMH Conseils — Expert-Lib / Workplace Suite",
          location: "France",
          period: "May 2026 – Sep 2026",
          duration: "4 months",
          bullets: [
            "Built a multi-tenant SaaS platform connecting field technicians with remote experts in real time, with React Router (SSR/CSR), TypeScript and Supabase/PostgreSQL — enforcing tenant isolation with row-level security and role-based access.",
            "Shipped a Kotlin/Jetpack Compose Android app for RealWear AR smart glasses, with P-256/HMAC-based two-factor authentication and live Twilio video with real-time transcription for hands-free field support.",
            "Designed a generative-AI pipeline (Hugging Face) that turns raw call transcripts into structured intervention reports, removing manual write-up work after every session.",
            "Sped up key screens with targeted TanStack Query caching/invalidation, and raised code quality bar with ESLint + Husky pre-commit checks.",
          ],
        },
        {
          role: "Full-Stack Developer — Internship",
          company: "Together For Chehim",
          location: "Lebanon",
          period: "Apr 2025 – Jul 2025",
          duration: "2 months",
          bullets: [
            "Built a member-management platform (React, Bootstrap, Django), with a flexible Intern / Member / Supervisor hierarchy supporting role changes in both directions without duplicating data.",
            "Automated PDF payment-receipt generation and designed the UI/UX end-to-end in Figma.",
            "Refactored and extended an existing codebase to safely ship new features without regressions.",
          ],
        },
        {
          role: "Full-Stack Developer — Internship",
          company: "Nokia",
          location: "Lebanon",
          period: "Jul 2024 – Sep 2024",
          duration: "3 months",
          bullets: [
            "Developed a web platform (Next.js, TypeScript, PostgreSQL) for eBook publishing, letting admins schedule releases with automatic deployment on the chosen date.",
            "Strengthened end-to-end full-stack thinking: designed features across PostgreSQL, API boundaries, and Next.js UI with a clear view of data flow and system design — shipping work on both frontend and backend as one coherent product.",
            "Worked within an Agile team — sprints, reviews, and continuous delivery.",
          ],
        },
      ],
    },
    certifications: {
      sectionLabel: "Credentials",
      title: "Certifications",
      items: [
        {
          title: "Cybersecurity Essentials",
          issuer: "Cisco Networking Academy",
          date: "May 25, 2025",
          summary:
            "Core techniques for monitoring and protecting networks — firewalls, cloud security, and cryptography — plus practical skills in vulnerability assessment and incident-response planning.",
          skills: [
            "Access Controls",
            "Firewalls",
            "Cloud Security",
            "Defense-in-Depth",
            "Common Cyber Threats",
            "Mitigating Common Network Attacks",
            "Network Infrastructure Security",
            "Network Hardening",
            "System & Endpoint Protection",
            "Security Policies & Standards",
          ],
          verifyLabel: "View on LinkedIn",
        },
      ],
    },
    projects: {
      sectionLabel: "My work",
      title: "Projects",
      moreLabel: "More projects on",
      items: [
        {
          title: "MultiVisio",
          description:
            "A distributed computer-vision system that watches multiple ESP32-CAM feeds at once, detects and tracks abandoned objects with YOLOv8 + DeepSORT, scores risk by proximity and time, and pushes real-time security alerts to a companion mobile app over WebSockets.",
          tags: ["YOLOv8", "OpenCV", "DeepSORT", "ESP32-CAM", "React Native", "Node.js", "MongoDB", "WebSockets"],
          image: "https://placehold.co/600x400/141019/A476FF?text=MultiVisio",
          status: "Academic Project · ENSTA",
        },
        {
          title: "Smart Attendance System",
          description:
            "An embedded web-based attendance system built around an ESP32 Web Server, allowing students to register their attendance through a local Wi-Fi network without Internet access. The ESP32 handles HTTP requests, authentication, token validation, attendance management, statistics, and persistent JSON storage on an SD card through a C++ backend and HTML/CSS/JavaScript interface.",
          tags: ["ESP32 Web Server", "C++", "HTML", "CSS", "JavaScript", "Wi-Fi", "HTTP", "JSON", "SD Card"],
          image: "https://placehold.co/600x400/141019/A476FF?text=Smart+Attendance+System",
          status: "Final Year Project · Lebanese University",
        },
      ],
    },
    contact: {
      sectionLabel: "Let's talk",
      title: "Get in touch",
      paragraphPrefix:
        "Final-year engineering student at ENSTA, looking for an end-of-studies internship (PFE) in full-stack, AI, or mobile — where I can build products that create ",
      paragraphHighlight: "real impact",
      paragraphSuffix: ". If that sounds like your team, let's talk.",
      locationLabel: "Location:",
      location: "France",
      statusLabel: "Status:",
      status: "Final year at ENSTA — seeking PFE internship",
    },
    footer: {
      copyrightPrefix: "Copyright ©",
      rights: "Lyn Rammal. All rights reserved.",
    },
    skills: {
      heading: "Skills & Expertise",
      categories: {
        languages: "Languages",
        frontendMobile: "Frontend & Mobile",
        backend: "Backend",
        systemDesign: "System Design",
        aiComputerVision: "AI & Computer Vision",
        dataInfra: "Data & Infrastructure",
      },
      items: {
        languages: ["Python", "TypeScript / JavaScript", "Java", "Kotlin", "C / C#", "PHP"],
        frontendMobile: ["React & Next.js", "React Native", "TanStack Query", "Astro", "Tailwind CSS"],
        backend: ["FastAPI", "Django", "Express.js", "Ktor", "REST APIs"],
        systemDesign: [
          "API Design",
          "Database Design",
          "Multi-Tenancy",
          "Caching",
          "SSR / CSR",
          "Scalability",
          "RLS (Row-Level Security)",
        ],
        aiComputerVision: ["PyTorch", "YOLO & DeepSORT", "RAG / LLMs", "Embeddings"],
        dataInfra: ["PostgreSQL & Supabase", "MongoDB", "Redis", "Docker & Linux"],
      },
    },
    langSwitcher: {
      label: "Language",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      education: "Formation",
      experience: "Expérience",
      certifications: "Certifications",
      projects: "Projets",
      contact: "Contact",
    },
    home: {
      greeting: "Bonjour, je suis Lyn Rammal",
      role: "Full-Stack · IA · Mobile",
      availability: "Disponible dès mars 2027",
      headingLine1: "Je développe des logiciels",
      headingLine2: "qui ont un réel impact.",
      taglinePrefix: "Mon objectif : concevoir des solutions à ",
      taglineHighlight: "impact réel",
      taglineSuffix:
        " — transformer des idées en produits utiles, des pipelines IA aux plateformes de production et applications mobiles.",
      ctaWork: "Voir mes projets",
      ctaContact: "Me contacter",
      ctaDownloadCv: "Télécharger mon CV",
      cvFile: "/cv/Lyn_Rammal_CV_FR.pdf",
    },
    education: {
      sectionLabel: "Parcours académique",
      title: "Formation",
      items: [
        {
          degree: "Diplôme d'ingénieur — Conception de Systèmes Numériques",
          school: "ENSTA · Institut Polytechnique de Paris",
          location: "France",
          period: "2025 – 2027",
          note: "Dernière année",
        },
        {
          degree: "Licence — Ingénierie des Réseaux Informatiques et de Communication",
          school: "Université Libanaise",
          location: "Liban",
          period: "2022 – 2025",
          note: "Diplômée",
        },
      ],
    },
    experience: {
      sectionLabel: "Où j'ai travaillé",
      title: "Expérience",
      items: [
        {
          role: "Ingénieure Logiciel — Stage",
          company: "IBMH Conseils — Expert-Lib / Workplace Suite",
          location: "France",
          period: "Mai 2026 – Sep 2026",
          duration: "4 mois",
          bullets: [
            "Développement d'une plateforme SaaS multi-tenant connectant des techniciens de terrain à des experts à distance en temps réel, avec React Router (SSR/CSR), TypeScript et Supabase/PostgreSQL — garantissant l'isolation des tenants grâce à la sécurité au niveau des lignes (RLS) et au contrôle d'accès basé sur les rôles.",
            "Développement d'une application Android en Kotlin/Jetpack Compose pour les lunettes connectées RealWear AR, avec authentification à deux facteurs basée sur P-256/HMAC et vidéo Twilio en direct avec transcription en temps réel pour une assistance terrain mains libres.",
            "Conception d'un pipeline d'IA générative (Hugging Face) transformant les transcriptions brutes d'appels en rapports d'intervention structurés, supprimant la rédaction manuelle après chaque session.",
            "Optimisation des écrans clés grâce à un cache et une invalidation ciblés avec TanStack Query, et renforcement de la qualité du code avec ESLint et des hooks Husky pre-commit.",
          ],
        },
        {
          role: "Développeuse Full-Stack — Stage",
          company: "Together For Chehim",
          location: "Liban",
          period: "Avr 2025 – Juil 2025",
          duration: "2 mois",
          bullets: [
            "Développement d'une plateforme de gestion des membres (React, Bootstrap, Django), avec une hiérarchie flexible Stagiaire / Membre / Superviseur permettant des changements de rôle dans les deux sens sans duplication des données.",
            "Automatisation de la génération de reçus de paiement au format PDF et conception de l'UI/UX de bout en bout sur Figma.",
            "Refactorisation et extension d'une base de code existante pour livrer de nouvelles fonctionnalités en toute sécurité, sans régression.",
          ],
        },
        {
          role: "Développeuse Full-Stack — Stage",
          company: "Nokia",
          location: "Liban",
          period: "Juil 2024 – Sep 2024",
          duration: "3 mois",
          bullets: [
            "Développement d'une plateforme web (Next.js, TypeScript, PostgreSQL) pour la publication d'ebooks, permettant aux administrateurs de planifier des sorties avec déploiement automatique à la date choisie.",
            "Renforcement d'une vision full-stack de bout en bout : conception de fonctionnalités à travers PostgreSQL, les interfaces API et l'UI Next.js, avec une vue claire du flux de données et de l'architecture logicielle — livrant un travail frontend et backend comme un produit cohérent.",
            "Travail au sein d'une équipe Agile — sprints, revues et livraison continue.",
          ],
        },
      ],
    },
    certifications: {
      sectionLabel: "Qualifications",
      title: "Certifications",
      items: [
        {
          title: "Cybersecurity Essentials",
          issuer: "Cisco Networking Academy",
          date: "25 mai 2025",
          summary:
            "Techniques essentielles de surveillance et de protection des réseaux — pare-feu, sécurité cloud et cryptographie — ainsi que des compétences pratiques en évaluation des vulnérabilités et en planification de réponse aux incidents.",
          skills: [
            "Contrôles d'accès",
            "Pare-feu",
            "Sécurité Cloud",
            "Défense en profondeur",
            "Cybermenaces courantes",
            "Atténuation des attaques réseau courantes",
            "Sécurité de l'infrastructure réseau",
            "Durcissement réseau",
            "Protection des systèmes et terminaux",
            "Politiques et normes de sécurité",
          ],
          verifyLabel: "Voir sur LinkedIn",
        },
      ],
    },
    projects: {
      sectionLabel: "Mon travail",
      title: "Projets",
      moreLabel: "Plus de projets sur",
      items: [
        {
          title: "MultiVisio",
          description:
            "Un système de vision par ordinateur distribué qui surveille simultanément plusieurs flux ESP32-CAM, détecte et suit les objets abandonnés avec YOLOv8 + DeepSORT, évalue le risque selon la proximité et le temps, et envoie des alertes de sécurité en temps réel à une application mobile compagnon via WebSockets.",
          tags: ["YOLOv8", "OpenCV", "DeepSORT", "ESP32-CAM", "React Native", "Node.js", "MongoDB", "WebSockets"],
          image: "https://placehold.co/600x400/141019/A476FF?text=MultiVisio",
          status: "Projet académique · ENSTA",
        },
        {
          title: "Smart Attendance System",
          description:
            "Un système de présence embarqué basé sur un serveur web ESP32, permettant aux étudiants d'enregistrer leur présence via un réseau Wi-Fi local, sans accès à Internet. L'ESP32 gère les requêtes HTTP, l'authentification, la validation des jetons, la gestion des présences, les statistiques et le stockage JSON persistant sur carte SD, via un backend en C++ et une interface HTML/CSS/JavaScript.",
          tags: ["ESP32 Web Server", "C++", "HTML", "CSS", "JavaScript", "Wi-Fi", "HTTP", "JSON", "SD Card"],
          image: "https://placehold.co/600x400/141019/A476FF?text=Smart+Attendance+System",
          status: "Projet de fin d'études · Université Libanaise",
        },
      ],
    },
    contact: {
      sectionLabel: "Discutons",
      title: "Entrons en contact",
      paragraphPrefix:
        "Étudiante-ingénieure en dernière année à l'ENSTA, je recherche un stage de fin d'études (PFE) en full-stack, IA ou mobile — où je peux construire des produits qui créent un ",
      paragraphHighlight: "impact réel",
      paragraphSuffix: ". Si cela correspond à votre équipe, discutons.",
      locationLabel: "Localisation :",
      location: "France",
      statusLabel: "Statut :",
      status: "Dernière année à l'ENSTA — recherche stage PFE",
    },
    footer: {
      copyrightPrefix: "Copyright ©",
      rights: "Lyn Rammal. Tous droits réservés.",
    },
    skills: {
      heading: "Compétences & Expertise",
      categories: {
        languages: "Langages",
        frontendMobile: "Frontend & Mobile",
        backend: "Backend",
        systemDesign: "Architecture Logicielle",
        aiComputerVision: "IA & Vision par Ordinateur",
        dataInfra: "Données & Infrastructure",
      },
      items: {
        languages: ["Python", "TypeScript / JavaScript", "Java", "Kotlin", "C / C#", "PHP"],
        frontendMobile: ["React & Next.js", "React Native", "TanStack Query", "Astro", "Tailwind CSS"],
        backend: ["FastAPI", "Django", "Express.js", "Ktor", "REST APIs"],
        systemDesign: [
          "API Design",
          "Database Design",
          "Multi-Tenancy",
          "Caching",
          "SSR / CSR",
          "Scalability",
          "RLS (Row-Level Security)",
        ],
        aiComputerVision: ["PyTorch", "YOLO & DeepSORT", "RAG / LLMs", "Embeddings"],
        dataInfra: ["PostgreSQL & Supabase", "MongoDB", "Redis", "Docker & Linux"],
      },
    },
    langSwitcher: {
      label: "Langue",
    },
  },
};
