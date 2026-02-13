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

    // --- SEZIONE 0: TERMINAL ---
    terminal: {
        greet_pre: "Hi, I'm",     // Testo prima del nome
        lbl_asis: "As is",        // Etichetta prima riga
        lbl_tobe: "To be",        // Etichetta seconda riga
        val_encrypted: "H4X_L3V3L_99 (LOCKED)", // Testo criptato
        cta: "Contact me to unlock the next level..." // Frase finale verde/viola
    },

    // --- SEZIONE 1: CHI SONO ---
    about: {
        description: "Digital Technologies Specialist con esperienza nella gestione tecnica di ecosistemi e-commerce complessi. Agisco come punto di raccordo tra le esigenze di business e le soluzioni tecnologiche, coordinando i partner esterni e gestendo le priorità di sviluppo. Mi occupo della configurazione avanzata delle piattaforme e fornisco supporto tecnico ai team interni per ottimizzare i processi operativi e risolvere criticità."
    },

    skills: {
        labels: ["Project management", "Tech knowledge", "Coding", "Problem Solving", "Analytics", "E-commerce"],
        data: [80, 80, 30, 95, 65, 75]
    },

    // --- SEZIONE 2: ESPERIENZE LAVORATIVE ---
    // Per aggiungere un lavoro, copia un blocco { ... } e incollalo sopra
    experience: [
        {
            company: "Passione Beauty SPA",
            role: "Digital Technologies Specialist",
            date: "Mar 2024 - Presente",
            desc: [
                "Interfaccia tecnica con i partner di sviluppo esterni: analisi dei requisiti e gestione delle priorità, garantendo che le evolutive vengano rilasciate entro le scadenze e nel rispetto del budget concordato.",
                "Supervisione tecnica della piattaforma AdobeCommerce e dell'app mobile, monitorando stabilità, performance e nuove integrazioni.",
                "Amministrazione e integrazione HubSpot, con implementazione di chatbot AI per l’automazione delle richieste clienti e riduzione del carico operativo del customer care.",
                "Amministrazione del sistema PIM: configurazione della struttura dati e manutenzione tecnica per garantire la corretta sincronizzazione con i canali di vendita.",
                "Coordinamento del redesign completo di e-commerce e app, migliorando UX e performance, con impatto positivo su conversion rate e stabilità dell’infrastruttura digitale.",
                "Migrazione del sistema di pagamento a Stripe, ottimizzando il processo di checkout e migliorando il tasso di autorizzazione delle transazioni, con impatto diretto sul fatturato online.",
                "Gestione di ticketing, redazione di documentazione tecnica e supporto tecnico agli utenti interni."
            ],
            tech: "AdobeCommerce, Hubspot, PIM, Stripe, Asana, Google Analytics, Yotpo"
        },
        {
            company: "Athena SPA",
            role: "Digital Technologies Support",
            date: "Nov 2020 - Mar 2024",
            desc: [
                "Monitoraggio e manutenzione dei flussi di integrazione tra il gestionale aziendale e i canali di vendita (E-Commerce B2B, Amazon, eBay, Mirakl).",
                "Amministrazione tecnica del CRM (Creatio): gestione permessi, configurazione dashboard e risoluzione problematiche utente.",
                "Supporto tecnico operativo durante la migrazione al nuovo sistema OMS, verificando la correttezza dei flussi di stock e ordini.",
                "Configurazione tecnica del PIM a supporto delle attività del reparto marketing e R&D.",
                "Assistenza tecnica ai colleghi e creazione di procedure operative per l'utilizzo degli strumenti digitali."
            ],
            tech: "E-Commerce B2B, Creatio, Zoho, Boomi, Marketplaces, Lengow"
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
