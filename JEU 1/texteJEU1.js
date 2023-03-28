data = [
    {
        "texte": "Sorry, we don't have any water at the moment. The covered market has some plumbing issues. It bothers me because my frogs aren't hydrated and could die soon.",
        "visible": [
            ".vendor",
            ".marche",
        ],
        "bulle": "Salesman"
    },
    {
        "texte": "But that's terrible! I won't let these frogs and any other animals die because of a plumbing problem. Where is the problem, sir?",
        "visible": [
            ".player"
        ],
        "bulle": "Anna"
    },
    {
        "texte": "Go see at the back, someone is already on the job.",
        "visible": [
            ".vendor"
        ],
        "bulle": "Salesman"
    },
    {
        "texte": "Excuse me, do you need any help?",
        "visible": [
            ".player",
            ".tuyau",
        ],
        "invisible": [
            ".marche",
            ".vendor"
        ],
        "bulle": "Anna"
    },
    {
        "texte": "I admit I'm a little stuck here... If you have some time to spare.",
        "visible": [
            ".plumber"
        ],
        "bulle": "The Plumber"
    },
    {
        "texte": "Actually, we don't have time to waste.",
        "visible": [
            ".player"
        ],
        "bulle": "Anna"
    },
];

doto = [
    {
        "texte": "Thank you so much, with your help I was able to finish much faster!",
        "visible": [
            ".plumber",
        ],
        "bulle": "The Plumber"
    },
    {
        "texte": "Can I ask you a favor in return? I would like to collect some water to do some dyeing.",
        "visible": [
            ".player"
        ],
        "bulle": "Anna"
    },
    {
        "texte": "Yes, of course, here you go.",
        "visible": [
            ".plumber"
        ],
        "bulle": "The Plumber"
    },
    {
        "texte": "I fixed the pipes, the frogs can be hydrated again.",
        "visible": [
            ".player",
            ".marche",
        ],
        "invisible": [
            ".tuyau",
            ".plumber"
        ],
        "bulle": "Anna"
    },
    {
        "texte": "Thank you so much! If only there was a fountain just for us in Place de la Paix.",
        "visible": [
            ".froggy"
        ],
        "bulle": "Froggy"
    },
    {
        "texte": "The frogs were listened to, and in 2013 Quentin Garel created the Water Table. A fountain full of bronze frogs.",
        "visible": [
            ".fountain"
        ],
        "invisible": [
            ".player",
            ".froggy",
            ".marche",
            ".name"
        ],

        "bulle": ""
    },
];