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
        description: "Digital Technologies Specialist con 6 anni di esperienza nel mondo e-commerce, specializzato nella gestione end-to-end di progetti digitali. Traduco gli obiettivi di business in requisiti tecnici e guido i partner di sviluppo dall’analisi al rilascio, presidiando priorità, tempi e budget. Unisco visione di progetto e competenza tecnica sulle piattaforme, con attenzione costante a stabilità, esperienza utente e risultati di vendita."
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
                "Gestione end-to-end delle evolutive con i partner di sviluppo: analisi dei requisiti, priorità, test e rilascio nel rispetto di tempi e budget.",
                "Presidio tecnico di Adobe Commerce, app mobile e PIM/DAM: stabilità, performance, integrazioni e sincronizzazione dei dati verso i canali di vendita, con supporto e documentazione per i team interni. ",
                "Amministrazione di HubSpot e introduzione di un chatbot AI che automatizza le richieste dei clienti, alleggerendo il carico del customer care.",
                "Redesign e pagamenti: coordinamento del redesign completo di sito e app e migrazione a Stripe, con miglioramento di UX, conversion rate e tasso di autorizzazione delle transazioni.",
                "Loyalty, recensioni e UGC (Yotpo): passaggio al nuovo programma fedeltà con migrazione di clienti e saldi punti; introduzione a sito di recensioni prodotto e contenuti Instagram; collaudo completo su backend e frontend.",
                "PDP 2.0 e virtual kit: riprogettazione delle pagine prodotto con layout dedicati per categoria e creazione in PIM di bundle virtuali integrati con AdobeCommerce, con aumento di click-through rate e vendite.",
                "App 2.0: onboarding per la profilazione, centro notifiche con storico e tracciamento degli stati, scanner QR per l’aggiunta a carrello, checkout più rapido e area ordini orientata a riordini e recensioni.",
                "Migrazione a SAP: membro del team di progetto, con responsabilità sulle integrazioni con Adobe Commerce e sulla continuità operativa del sito.",
                "Store Romania: lancio del nuovo mercato e verifica di tutte le integrazioni.",
                "TikTok Shop: attivazione del nuovo canale di vendita tramite ChannelEngine, con gestione delle integrazioni di prodotti, ordini e spedizioni."
            ],
            tech: "Adobe Commerce • HubSpot • Yotpo • PIM/DAM • Stripe • SAP • Channel Engine • Asana"
        },
        {
            company: "Athena SPA",
            role: "Digital Technologies Support",
            date: "Nov 2020 - Mar 2024",
            desc: [
                "Presidio dei flussi di integrazione tra gestionale e canali di vendita (B2B, Amazon, eBay, Mirakl): monitoraggio, manutenzione e risoluzione anomalie.",
                "Migrazione al nuovo OMS: supporto operativo e validazione della correttezza dei flussi di stock e ordini.",
                "Integrazione e amministrazione tecnica del CRM Creatio (permessi, dashboard, problematiche utente) e configurazione del PIM per i reparti marketing e R&D.",
                "Formazione e assistenza ai colleghi sugli strumenti digitali, con redazione di procedure operative per standardizzarne l'utilizzo."
            ],
            tech: " E-Commerce B2B • PIM • Creatio • Zoho • Marketplaces • Lengow"
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
