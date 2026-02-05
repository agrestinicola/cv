const cvData = {
    // --- INFORMAZIONI PRINCIPALI ---
    profile: {
        name: "Nicola Agresti",
        role: "Digital Technologies Specialist",
        image: "profile.jpg",
        email: "nicola@nicolaagresti.it",
        social: {
            linkedin: "https://www.linkedin.com/in/nicolaagresti/",
            github: "https://github.com/agrestinicola",
            cv_pdf: "CV_AgrestiNicola.pdf"
        }
    },

    // --- SEZIONE 1: CHI SONO ---
    about: {
        description: "Appassionato di innovazione digitale e di e-commerce, negli anni ho costruito un’esperienza solida nell’integrazione di strumenti e piattaforme che connettono tecnologia, marketing e business."
    },

    // --- SEZIONE 2: ESPERIENZE LAVORATIVE ---
    // Per aggiungere un lavoro, copia un blocco { ... } e incollalo sopra
    experience: [
        {
            company: "Passione Beauty SPA",
            role: "Digital Technologies Specialist",
            date: "Mar 2024 - Presente",
            desc: [
                "Gestione operativa e-Commerce (AdobeCommerce) e App mobile.",
                "Rinnovamento frontend e migrazione checkout (HiPay a Stripe).",
                "Supervisione progetti CRM/Marketing Automation (Hubspot)."
            ],
            tech: "AdobeCommerce, Hubspot, Stripe, Power BI, GA4."
        },
        {
            company: "Athena SPA",
            role: "Digital Technologies Support",
            date: "Nov 2020 - Mar 2024",
            desc: [
                "Gestione e-Commerce e marketplace (Amazon, eBay, Mirakl).",
                "Coordinamento implementazione CRM (Creatio) e PIM."
            ],
            tech: "Creatio, Zoho, PIM, Boomi, Amazon SC."
        }
    ],

    // --- SEZIONE 3: FORMAZIONE ---
    education: [
        {
            title: "Laurea in Informatica",
            institute: "Università degli Studi di Verona",
            date: "2016 - 2020"
        },
        {
            title: "Diploma Perito Informatico",
            institute: "Istituto Dal Cero",
            date: "2011 - 2016"
        }
    ],

    // --- SEZIONE 4: CERTIFICAZIONI ---
    certifications: [
        "Formazione SSL per Lavoratori (UniVr)",
        "IT Essentials (Cisco)"
    ],

    // --- SEZIONE 5: LINGUE ---
    languages: [
        { name: "Italiano", level: "Madrelingua", flag: "🇮🇹" },
        { name: "Inglese", level: "B1", flag: "🇬🇧" }
    ]
};