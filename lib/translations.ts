export type Language = "en" | "de" | "sq";

export interface Translations {
  nav: {
    home: string; about: string; skills: string; projects: string;
    experience: string; education: string; hireMe: string;
  };
  hero: {
    badge: string; headline1: string; headline2: string; role: string;
    sub: string; viewWork: string; contact: string; basedIn: string; scroll: string;
  };
  about: {
    sectionTag: string; title: string; titleAccent: string; openToWork: string;
    bio1: string; bio2: string; bio3: string;
    stats: { experience: string; projects: string; erp: string; location: string };
  };
  skills: {
    sectionTag: string; title: string; titleAccent: string; subtitle: string; allTech: string;
    categories: { erp: string; fullstack: string; db: string; ai: string };
  };
  projects: {
    sectionTag: string; title: string; titleAccent: string; subtitle: string;
    liveDemo: string; viewCode: string; viewAll: string; featured: string;
    descriptions: { aiTeacher: string; glow: string; vibeMenu: string; mechanic: string };
  };
  experience: {
    sectionTag: string; title: string; titleAccent: string; subtitle: string;
    role: string; company: string; duration: string; technologies: string;
    highlights: string[];
  };
  education: {
    sectionTag: string; title: string; titleAccent: string; subtitle: string;
    enrolled: string; certified: string;
    degree: { title: string; subtitle: string; institution: string; year: string; description: string };
    cert: { title: string; subtitle: string; institution: string; year: string; description: string };
  };
  footer: {
    badge: string; headline: string; headlineAccent: string; sub: string;
    getInTouch: string; rights: string; builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home", about: "About", skills: "Skills", projects: "Projects",
      experience: "Experience", education: "Education", hireMe: "Hire Me",
    },
    hero: {
      badge: "Available for new opportunities",
      headline1: "Hi, I'm", headline2: "Dion Beqiri",
      role: "NetSuite Technical Consultant & Full-Stack Developer.",
      sub: "Bridging the gap between enterprise ERP architecture and modern, user-focused web applications.",
      viewWork: "View My Work", contact: "Contact Me",
      basedIn: "Based in Kosovo", scroll: "Scroll",
    },
    about: {
      sectionTag: "01 / About",
      title: "A Developer Who", titleAccent: "Thinks in Systems",
      openToWork: "Open to work",
      bio1: "I am a full-stack Software Developer with over 3 years of specialized experience in NetSuite technical consulting. Currently completing my Bachelor's degree in Computer Science and Engineering at the University of Mitrovica, I thrive on solving complex technical and business logic challenges.",
      bio2: "Whether architecting advanced NetSuite workflows, customizing mission-critical business templates, or engineering modern web platforms with React and Python, my focus is always on speed, performance, and delivering real value.",
      bio3: "I specialize in NetSuite's full development ecosystem and integrating external platforms seamlessly via secure REST APIs.",
      stats: { experience: "Years Experience", projects: "Projects Shipped", erp: "ERP Customizations", location: "Location" },
    },
    skills: {
      sectionTag: "02 / Skills", title: "Technical", titleAccent: "Arsenal",
      subtitle: "From enterprise ERP customization to modern full-stack engineering — a complete toolkit for building real solutions.",
      allTech: "All Technologies",
      categories: { erp: "ERP & NetSuite Suite", fullstack: "Full-Stack Development", db: "Databases & Backend", ai: "AI Ecosystem" },
    },
    projects: {
      sectionTag: "03 / Projects", title: "Featured", titleAccent: "Work",
      subtitle: "A curated selection of projects that showcase the breadth of my technical capabilities — from AI-powered platforms to ERP automation tools.",
      liveDemo: "Live Demo", viewCode: "View Code", viewAll: "View all projects on GitHub", featured: "Featured",
      descriptions: {
        aiTeacher: "A secure, intelligent web platform designed to automate complex teacher evaluations, administrative tasks, and grading workflows using large language models. Built for speed and precision in academic environments.",
        glow: "A specialized boutique application tailored for a skincare studio. Features separate customer experiences and secure administrator dashboards to manage services and online scheduling.",
        vibeMenu: "A sleek, dynamic digital menu platform built to elevate the hospitality guest experience. Focuses heavily on high-performance rendering and seamless mobile UI for modern restaurants and cafés.",
        mechanic: "An internal automation management tool optimized for automotive workshops to coordinate service scheduling, repair workflows, and customer profiles with a clean operational dashboard.",
      },
    },
    experience: {
      sectionTag: "04 / Experience", title: "Work", titleAccent: "Experience",
      subtitle: "Building enterprise-grade solutions at the intersection of ERP systems and software engineering.",
      role: "NetSuite Technical Consultant", company: "Oracle NetSuite Ecosystem", duration: "3+ Years", technologies: "Technologies",
      highlights: [
        "Deliver expert-level Technical Consulting for custom configurations, ensuring deep alignment with clients' overarching financial and logistical goals.",
        "Architect and write clean, optimized SuiteScripts (UserEvent, Client, Map/Reduce) alongside sophisticated SuiteFlow triggers for complex business automation.",
        "Specialized expert in developing and styling high-fidelity Advanced PDF/HTML Templates for complex localized documents at enterprise scale.",
        "Build robust, production-grade custom integrations connecting NetSuite to external systems via secure REST APIs and bi-directional data synchronization.",
      ],
    },
    education: {
      sectionTag: "05 / Education", title: "Education &", titleAccent: "Certifications",
      subtitle: "Academic foundation combined with industry-recognized certifications that back every technical decision.",
      enrolled: "Currently Enrolled", certified: "Oracle Certified",
      degree: {
        title: "Bachelor of Science", subtitle: "Computer Science & Engineering",
        institution: "University of Mitrovica", year: "2021 – Present",
        description: "Comprehensive study of software engineering principles, algorithms, data structures, computer architecture, and modern programming paradigms. Applying academic knowledge directly to real-world consulting projects.",
      },
      cert: {
        title: "AI Foundations Associate", subtitle: "Certificate",
        institution: "Oracle NetSuite", year: "2024",
        description: "Official Oracle certification validating expertise in AI foundations within the NetSuite ecosystem. Covers machine learning fundamentals, AI integration patterns, and intelligent automation in enterprise ERP environments.",
      },
    },
    footer: {
      badge: "Available for new projects",
      headline: "Let's Build Something", headlineAccent: "Together.",
      sub: "Whether you need a NetSuite expert or a full-stack engineer, feel free to reach out. I'm always open to discussing new opportunities and interesting projects.",
      getInTouch: "Get in Touch", rights: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
    },
  },

  de: {
    nav: {
      home: "Startseite", about: "Über mich", skills: "Fähigkeiten", projects: "Projekte",
      experience: "Erfahrung", education: "Ausbildung", hireMe: "Einstellen",
    },
    hero: {
      badge: "Offen für neue Möglichkeiten",
      headline1: "Hallo, ich bin", headline2: "Dion Beqiri",
      role: "NetSuite Technical Consultant & Full-Stack Entwickler.",
      sub: "Die Brücke zwischen Enterprise-ERP-Architektur und modernen, nutzerzentrierten Webanwendungen.",
      viewWork: "Meine Arbeit", contact: "Kontakt",
      basedIn: "Ansässig im Kosovo", scroll: "Scrollen",
    },
    about: {
      sectionTag: "01 / Über mich",
      title: "Ein Entwickler, der in", titleAccent: "Systemen denkt",
      openToWork: "Offen für Stellen",
      bio1: "Ich bin ein Full-Stack-Softwareentwickler mit über 3 Jahren spezialisierter Erfahrung in der technischen NetSuite-Beratung. Derzeit schließe ich meinen Bachelor in Informatik und Ingenieurwesen an der Universität Mitrovica ab und löse leidenschaftlich komplexe technische und geschäftliche Herausforderungen.",
      bio2: "Ob ich fortgeschrittene NetSuite-Workflows entwickle, geschäftskritische Vorlagen anpasse oder moderne Webplattformen mit React und Python entwickle – mein Fokus liegt stets auf Geschwindigkeit, Performance und echtem Mehrwert.",
      bio3: "Ich bin auf das vollständige NetSuite-Entwicklungs-Ökosystem spezialisiert und integriere externe Plattformen nahtlos über sichere REST-APIs.",
      stats: { experience: "Jahre Erfahrung", projects: "Abgeschlossene Projekte", erp: "ERP-Anpassungen", location: "Standort" },
    },
    skills: {
      sectionTag: "02 / Fähigkeiten", title: "Technisches", titleAccent: "Arsenal",
      subtitle: "Von der Enterprise-ERP-Anpassung bis zum modernen Full-Stack Engineering — ein vollständiges Toolkit für echte Lösungen.",
      allTech: "Alle Technologien",
      categories: { erp: "ERP & NetSuite Suite", fullstack: "Full-Stack Entwicklung", db: "Datenbanken & Backend", ai: "KI-Ökosystem" },
    },
    projects: {
      sectionTag: "03 / Projekte", title: "Ausgewählte", titleAccent: "Arbeiten",
      subtitle: "Eine kuratierte Auswahl von Projekten, die meine technischen Fähigkeiten zeigen — von KI-Plattformen bis zu ERP-Automatisierungstools.",
      liveDemo: "Live Demo", viewCode: "Code ansehen", viewAll: "Alle Projekte auf GitHub ansehen", featured: "Empfohlen",
      descriptions: {
        aiTeacher: "Eine sichere, intelligente Webplattform zur Automatisierung komplexer Lehrerbeurteilungen, Verwaltungsaufgaben und Bewertungsworkflows mit großen Sprachmodellen.",
        glow: "Eine spezialisierte Boutique-Anwendung für ein Hautpflegestudio mit getrennten Kundenerfahrungen und sicheren Admin-Dashboards für Terminverwaltung.",
        vibeMenu: "Eine elegante, dynamische digitale Menüplattform zur Verbesserung des Gasterlebnisses in der Gastronomie mit Fokus auf Mobile-UI.",
        mechanic: "Ein internes Automatisierungstool für Autowerkstätten zur Koordination von Serviceterminen, Reparaturabläufen und Kundenprofilen.",
      },
    },
    experience: {
      sectionTag: "04 / Erfahrung", title: "Berufliche", titleAccent: "Erfahrung",
      subtitle: "Entwicklung unternehmensgerechter Lösungen an der Schnittstelle von ERP-Systemen und Softwareentwicklung.",
      role: "NetSuite Technical Consultant", company: "Oracle NetSuite Ökosystem", duration: "3+ Jahre", technologies: "Technologien",
      highlights: [
        "Expertenlevel-Beratung für maßgeschneiderte Konfigurationen, die eine enge Abstimmung mit den finanziellen und logistischen Zielen der Kunden sicherstellt.",
        "Entwicklung sauberer, optimierter SuiteScripts (UserEvent, Client, Map/Reduce) sowie komplexer SuiteFlow-Trigger für die Geschäftsautomatisierung.",
        "Spezialist für die Entwicklung und Gestaltung hochfidelity Advanced PDF/HTML Templates für komplexe lokalisierte Dokumente auf Enterprise-Ebene.",
        "Entwicklung robuster, produktionsreifer Integrationen zur Verbindung von NetSuite mit externen Systemen über sichere REST-APIs.",
      ],
    },
    education: {
      sectionTag: "05 / Ausbildung", title: "Ausbildung &", titleAccent: "Zertifizierungen",
      subtitle: "Akademische Grundlagen kombiniert mit branchenweit anerkannten Zertifizierungen, die jede technische Entscheidung unterstützen.",
      enrolled: "Aktuell eingeschrieben", certified: "Oracle Zertifiziert",
      degree: {
        title: "Bachelor of Science", subtitle: "Informatik & Ingenieurwesen",
        institution: "Universität Mitrovica", year: "2021 – Heute",
        description: "Umfassendes Studium der Softwareentwicklungsprinzipien, Algorithmen, Datenstrukturen, Computerarchitektur und moderner Programmierparadigmen.",
      },
      cert: {
        title: "AI Foundations Associate", subtitle: "Zertifikat",
        institution: "Oracle NetSuite", year: "2024",
        description: "Offizielle Oracle-Zertifizierung, die Expertise in KI-Grundlagen im NetSuite-Ökosystem bestätigt. Umfasst Machine-Learning-Grundlagen und intelligente Automatisierung in Enterprise-ERP-Umgebungen.",
      },
    },
    footer: {
      badge: "Verfügbar für neue Projekte",
      headline: "Lass uns etwas", headlineAccent: "zusammen bauen.",
      sub: "Ob Sie einen NetSuite-Experten oder einen Full-Stack-Entwickler benötigen — ich freue mich auf Ihre Nachricht und bin offen für neue Möglichkeiten.",
      getInTouch: "Kontakt aufnehmen", rights: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit Next.js, Tailwind CSS & Framer Motion",
    },
  },

  sq: {
    nav: {
      home: "Kryefaqja", about: "Rreth meje", skills: "Aftësitë", projects: "Projektet",
      experience: "Eksperienca", education: "Arsimi", hireMe: "Punëso mua",
    },
    hero: {
      badge: "I disponueshëm për mundësi të reja",
      headline1: "Përshëndetje, jam", headline2: "Dion Beqiri",
      role: "Konsulent Teknik NetSuite & Zhvillues Full-Stack.",
      sub: "Duke urëzuar hapësirën mes arkitekturës ERP të ndërmarrjes dhe aplikacioneve moderne ueb të fokusuara te përdoruesi.",
      viewWork: "Shiko Projektet", contact: "Kontakto",
      basedIn: "Bazuar në Kosovë", scroll: "Rrëshqit",
    },
    about: {
      sectionTag: "01 / Rreth meje",
      title: "Një Zhvillues që", titleAccent: "Mendon në Sisteme",
      openToWork: "I hapur për punë",
      bio1: "Jam një Zhvillues Software full-stack me mbi 3 vjet përvojë të specializuar në konsulencën teknike NetSuite. Duke kompletuar aktualisht diplomën Bachelor në Shkencë Kompjuterike dhe Inxhinieri në Universitetin e Mitrovicës, jam i pasionuar pas zgjidhjes së sfidave komplekse teknike dhe logjikës së biznesit.",
      bio2: "Nëse po arkitekturoj rrjedhat e avancuara të punës NetSuite, po personalizoj shablonet kritike të biznesit, ose po inxhinierizon platforma moderne ueb me React dhe Python, fokusi im është gjithmonë shpejtësia, performanca dhe ofrimi i vlerës reale.",
      bio3: "Jam i specializuar në ekosistemi i plotë i zhvillimit NetSuite dhe integrimin e platformave të jashtme pa probleme nëpërmjet REST API-ve të sigurta.",
      stats: { experience: "Vjet Përvojë", projects: "Projekte të Dorëzuara", erp: "Personalizime ERP", location: "Vendndodhja" },
    },
    skills: {
      sectionTag: "02 / Aftësitë", title: "Arsenali", titleAccent: "Teknik",
      subtitle: "Nga personalizimi ERP i ndërmarrjes deri te inxhinieria moderne full-stack — një paketë e plotë mjetesh për ndërtimin e zgjidhjeve reale.",
      allTech: "Të gjitha Teknologjitë",
      categories: { erp: "ERP & NetSuite Suite", fullstack: "Zhvillim Full-Stack", db: "Baza të Dhënash & Backend", ai: "Ekosistemi i AI" },
    },
    projects: {
      sectionTag: "03 / Projektet", title: "Punët e", titleAccent: "Zgjedhura",
      subtitle: "Një përzgjedhje e kujdesshme projektesh që tregojnë gjerësinë e aftësive të mia teknike — nga platformat me AI deri te mjetet e automatizimit ERP.",
      liveDemo: "Demo Live", viewCode: "Shiko Kodin", viewAll: "Shiko të gjitha projektet në GitHub", featured: "I Zgjedhur",
      descriptions: {
        aiTeacher: "Një platformë ueb e sigurt dhe inteligjente e projektuar për të automatizuar vlerësimet komplekse të mësuesve, detyrat administrative dhe rrjedhat e vlerësimit duke përdorur modele të mëdha gjuhësore.",
        glow: "Një aplikacion boutique i specializuar për një studio kujdesi të lëkurës. Ofron përvoja të ndara për klientët dhe panele administratori të sigurta për të menaxhuar shërbimet dhe orarët online.",
        vibeMenu: "Një platformë menuje dixhitale dinamike dhe elegante e ndërtuar për të ngritur përvojën e mysafirëve në mikpritje. Fokusohet fort në renderimin me performancë të lartë dhe ndërfaqen mobile.",
        mechanic: "Një mjet i brendshëm menaxhimi automatizimi i optimizuar për punishtet e automobilave për të koordinuar planifikimin e shërbimeve, rrjedhat e riparimeve dhe profilet e klientëve.",
      },
    },
    experience: {
      sectionTag: "04 / Eksperienca", title: "Eksperienca", titleAccent: "Profesionale",
      subtitle: "Ndërtimi i zgjidhjeve të nivelit të ndërmarrjes në kryqëzimin e sistemeve ERP dhe inxhinierisë softuerike.",
      role: "Konsulent Teknik NetSuite", company: "Ekosistemi Oracle NetSuite", duration: "3+ Vjet", technologies: "Teknologjitë",
      highlights: [
        "Ofroj Konsulencë Teknike të nivelit ekspert për konfigurime të personalizuara, duke siguruar bashkërendim të thellë me qëllimet financiare dhe logjistike të klientëve.",
        "Arkitekturoj dhe shkruaj SuiteScript-e të pastra dhe të optimizuara (UserEvent, Client, Map/Reduce) bashkë me trigerat sofistikuara SuiteFlow.",
        "Specialist i specializuar në zhvillimin dhe stilizimin e Shablloneve të Avancuara PDF/HTML me besnikëri të lartë për dokumente komplekse të lokalizuara.",
        "Ndërtoj integrime të personalizuara të nivelit prodhim që lidhin NetSuite me sisteme të jashtme nëpërmjet REST API-ve të sigurta.",
      ],
    },
    education: {
      sectionTag: "05 / Arsimi", title: "Arsimi &", titleAccent: "Çertifikatat",
      subtitle: "Themeli akademik i kombinuar me çertifikime të njohura nga industria që mbështesin çdo vendim teknik.",
      enrolled: "Aktualisht i Regjistruar", certified: "Çertifikuar nga Oracle",
      degree: {
        title: "Bachelor i Shkencave", subtitle: "Shkencë Kompjuterike & Inxhinieri",
        institution: "Universiteti i Mitrovicës", year: "2021 – Tani",
        description: "Studim gjithëpërfshirës i parimeve të inxhinierisë softuerike, algoritmeve, strukturave të të dhënave, arkitekturës kompjuterike dhe paradigmave moderne të programimit.",
      },
      cert: {
        title: "AI Foundations Associate", subtitle: "Çertifikatë",
        institution: "Oracle NetSuite", year: "2024",
        description: "Çertifikim zyrtar Oracle që vërteton ekspertizën në bazat e AI brenda ekosistemit NetSuite. Mbulon bazat e machine learning, modelet e integrimit të AI dhe automatizimin inteligjent në mjediset ERP të ndërmarrjes.",
      },
    },
    footer: {
      badge: "I disponueshëm për projekte të reja",
      headline: "Le të Ndërtojmë Diçka", headlineAccent: "Bashkë.",
      sub: "Nëse keni nevojë për një ekspert NetSuite ose një inxhinier full-stack, mos hezitoni të na kontaktoni. Jam gjithmonë i hapur për mundësi dhe projekte të reja interesante.",
      getInTouch: "Na Kontaktoni", rights: "Të gjitha të drejtat e rezervuara.",
      builtWith: "Ndërtuar me Next.js, Tailwind CSS & Framer Motion",
    },
  },
};

export default translations;
