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
                "Coordinamento del progetto di rinnovamento completo del frontend e-Commerce/App, in collaborazione con team interni e fornitori esterni",
                "Supporto al rinnovamento completo completo del checkout e alla migrazione da HiPay a Stripe con attività di testing, validazione post-migrazione e assistenza agli utenti interni",
                "Supervisione di progetti CRM e Marketing Automation basati su Hubspot, con focus su automazione e segmentazione",
                "Gestione operativa della transizione da Zendesk a Hubspot per il Customer Care con migrazione dati, configurazione delle pipeline di supporto e validazione del sistema",
                "Integrazione operativa di un nuovo sistema PIM, con coinvolgimento diretto dei reparti marketing, R&D e partner tecnico",
                "Manutenzione e aggiornamento dei dati prodotto all’interno del sistema PIM",
                "Gestione e risoluzione delle richieste di assistenza tramite ticketing system e supporto diretto agli utenti",
                "Redazione di documentazione tecnica e revisione dei processi digitali per migliorarne l’efficienza"
            ],
            tech: "AdobeCommerce (Magento), Hubspot, HiPay, Stripe, PayPal, Klarna, Scalapay, Microsoft Dynamics 365 Business Central, PIM, Microsoft Power BI, GA4, GTM, Meta Business Suite, AWS, Zendesk"
        },
        {
            company: "Athena SPA",
            role: "Digital Technologies Support",
            date: "Nov 2020 - Mar 2024",
            desc: [
                "Gestione e ottimizzazione delle piattaforme e-Commerce e marketplace (Amazon, eBay, Mirakl)",
                "Coordinamento e implementazione di un nuovo sistema CRM (Creatio), in sinergia con team aziendali e fornitore esterno",
                "Integrazione operativa di un nuovo sistema PIM, con coinvolgimento diretto di team marketing, R&D e partner tecnico",
                "Migrazione operativa a un nuovo sistema OMS, con coinvolgimento dei partner tecnici",
                "Interfaccia costante con i reparti marketing e R&D per la configurazione e ottimizzazione del sistema PIM",
                "Supporto tecnico agli utenti finali e redazione di documentazione funzionale e procedurale"
            ],
            tech: "Creatio, Zoho Desk, Stripe, PIM, OMS, Boomi, Lengow, eBay, Amazon Seller Central, Mirakl"
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
