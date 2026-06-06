// Original workbook-style practice drills for Units 1-3.
// Inspired by the pedagogical structure of A1 French exercise books
// (gender of nouns, articles, conjugation, prepositions, negation, etc.).
// Keyed by `${unitId}-${lessonId}`.
import type { Challenge } from "./taxi-data";

export const TAXI_WORKBOOK: Record<string, Challenge[]> = {
  // ---------- UNIT 1 — Le savoir-vivre ----------
  "1-1": [
    {
      type: "multiple-choice",
      question: "Choose the correct form of 'être': Je ___ Alice.",
      options: ["es", "suis", "est", "êtes"],
      correct: "suis",
    },
    {
      type: "multiple-choice",
      question: "Feminine of 'italien' is…",
      options: ["italienne", "italiene", "italien", "italiena"],
      correct: "italienne",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Je ___ appelle Nicole.' (reflexive pronoun)",
      blank: "m'",
    },
    {
      type: "fill-blank",
      question: "Reply formally to 'Vous êtes madame Falco ?' — 'Oui, ___ Nicole Falco.'",
      blank: "je suis",
    },
    {
      type: "word-bank",
      question: "Translate: 'This is my husband, Aldo.'",
      tokens: ["Voici", "mari", "ma", "Aldo", "mon", ",", "femme"],
      correctOrder: ["Voici", "mon", "mari", ",", "Aldo"],
    },
    {
      type: "multiple-choice",
      question: "Which sentence is grammatically correct?",
      options: [
        "Elle est française.",
        "Elle est français.",
        "Il est française.",
        "Elle es française.",
      ],
      correct: "Elle est française.",
    },
  ],

  "1-2": [
    {
      type: "multiple-choice",
      question: "Which article goes with 'amie' ?",
      options: ["le", "la", "l'", "les"],
      correct: "l'",
    },
    {
      type: "multiple-choice",
      question: "Find the intruder (different category):",
      options: ["autrichienne", "polonaise", "japonaise", "assistante"],
      correct: "assistante",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Anne habite ___ Espagne.' (en / au / à)",
      blank: "en",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Il habite ___ Portugal.'",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "Masculine of 'la directrice commerciale' is…",
      options: [
        "le directeur commercial",
        "le directrice commercial",
        "le directeur commerciale",
        "la directeur commercial",
      ],
      correct: "le directeur commercial",
    },
    {
      type: "word-bank",
      question: "Translate: 'She is a Japanese assistant.'",
      tokens: ["Elle", "est", "une", "japonaise", "assistant", "assistante", "un"],
      correctOrder: ["Elle", "est", "une", "assistante", "japonaise"],
    },
  ],

  "1-3": [
    {
      type: "multiple-choice",
      question: "Choose the correct possessive: '___ adresse' (your, formal)",
      options: ["ton", "ta", "votre", "vos"],
      correct: "votre",
    },
    {
      type: "multiple-choice",
      question: "'Mon' or 'ma' before 'amie' ? — '___ amie'",
      options: ["mon", "ma", "mes", "m'"],
      correct: "mon",
    },
    {
      type: "fill-blank",
      question: "Conjugate 'avoir': 'J' ___ 24 ans.'",
      blank: "ai",
    },
    {
      type: "fill-blank",
      question: "Conjugate 'aller': 'Comment ___-tu ?'",
      blank: "vas",
    },
    {
      type: "multiple-choice",
      question: "Write 71 in French:",
      options: ["septante-un", "soixante-onze", "soixante et onze", "septante et un"],
      correct: "soixante et onze",
    },
    {
      type: "word-bank",
      question: "Translate: 'What is your phone number?' (formal)",
      tokens: ["Quel", "est", "votre", "numéro", "de", "téléphone", "?", "ton"],
      correctOrder: ["Quel", "est", "votre", "numéro", "de", "téléphone", "?"],
    },
  ],

  "1-4": [
    {
      type: "fill-blank",
      question: "Add the missing accent: 'j'habite a Berne.' Rewrite 'a' →",
      blank: "à",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct verb: 'Mon père ___ boulanger.'",
      options: ["est", "a", "suis", "es"],
      correct: "est",
    },
    {
      type: "fill-blank",
      question: "Conjugate 'parler': 'Je ___ français et allemand.'",
      blank: "parle",
    },
    {
      type: "multiple-choice",
      question: "Which sentence is correctly punctuated?",
      options: [
        "Salut, je cherche une correspondante.",
        "salut je cherche une correspondante",
        "Salut Je Cherche Une Correspondante.",
        "salut, Je cherche, une correspondante",
      ],
      correct: "Salut, je cherche une correspondante.",
    },
    {
      type: "word-bank",
      question: "Translate: 'I have a brother, he is a student.'",
      tokens: ["J'ai", "un", "frère", ",", "il", "est", "étudiant", "une", "sœur"],
      correctOrder: ["J'ai", "un", "frère", ",", "il", "est", "étudiant"],
    },
    {
      type: "fill-blank",
      question: "Complete: 'Ma mère ___ secrétaire.' (verb)",
      blank: "est",
    },
  ],

  // ---------- UNIT 2 — Portraits ----------
  "2-1": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["un vase", "des fleurs", "une chaise", "un fauteuil"],
      correct: "des fleurs",
    },
    {
      type: "fill-blank",
      question: "Complete: '___ y a une table dans la pièce.'",
      blank: "Il",
    },
    {
      type: "multiple-choice",
      question: "Plural of 'une affiche' is…",
      options: ["des affiches", "les affiche", "un affiches", "des affice"],
      correct: "des affiches",
    },
    {
      type: "fill-blank",
      question: "Preposition: 'Le chat est ___ le fauteuil.' (on top of)",
      blank: "sur",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct article: '___ photos sont dans la chambre.'",
      options: ["Des", "Les", "Une", "Le"],
      correct: "Les",
    },
    {
      type: "word-bank",
      question: "Translate: 'There are books on the shelves.'",
      tokens: ["Il", "y", "a", "des", "livres", "sur", "les", "étagères", "le"],
      correctOrder: ["Il", "y", "a", "des", "livres", "sur", "les", "étagères"],
    },
  ],

  "2-2": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["un manteau", "un portrait", "une chemise", "un pull-over"],
      correct: "un portrait",
    },
    {
      type: "multiple-choice",
      question: "Negative form of 'Il porte des lunettes.'",
      options: [
        "Il ne porte pas de lunettes.",
        "Il ne porte pas des lunettes.",
        "Il porte pas de lunettes.",
        "Il ne porte des lunettes pas.",
      ],
      correct: "Il ne porte pas de lunettes.",
    },
    {
      type: "fill-blank",
      question: "Stressed pronoun: '___ , je suis grand.' (myself)",
      blank: "Moi",
    },
    {
      type: "fill-blank",
      question: "Agreement: 'Elle a une robe ___.' (green)",
      blank: "verte",
    },
    {
      type: "multiple-choice",
      question: "Plural of 'un tee-shirt blanc' is…",
      options: [
        "des tee-shirts blancs",
        "des tee-shirt blanc",
        "des tee-shirts blanc",
        "les tee-shirt blanches",
      ],
      correct: "des tee-shirts blancs",
    },
    {
      type: "word-bank",
      question: "Translate: 'She is tall and brunette.'",
      tokens: ["Elle", "est", "grande", "et", "brune", "grand", "brun"],
      correctOrder: ["Elle", "est", "grande", "et", "brune"],
    },
  ],

  "2-3": [
    {
      type: "multiple-choice",
      question: "Choose the demonstrative: '___ pull noir' (this)",
      options: ["ce", "cet", "cette", "ces"],
      correct: "ce",
    },
    {
      type: "multiple-choice",
      question: "Choose the demonstrative: '___ objet rouge'",
      options: ["ce", "cet", "cette", "ces"],
      correct: "cet",
    },
    {
      type: "fill-blank",
      question: "Question word: '___ coûte ce blouson ?'",
      blank: "Combien",
    },
    {
      type: "fill-blank",
      question: "Write the number: 'quatre-vingt-treize' = ___",
      blank: "93",
    },
    {
      type: "multiple-choice",
      question: "Complete the negative: 'Je ___ aime ___ cette couleur.'",
      options: ["n' / pas", "ne / pas", "n' / plus", "ne / plus"],
      correct: "n' / pas",
    },
    {
      type: "word-bank",
      question: "Translate: 'How much do these shoes cost?'",
      tokens: ["Combien", "coûtent", "ces", "chaussures", "?", "coûte", "cette"],
      correctOrder: ["Combien", "coûtent", "ces", "chaussures", "?"],
    },
  ],

  "2-4": [
    {
      type: "multiple-choice",
      question: "'Derrière' means…",
      options: ["behind", "in front of", "next to", "under"],
      correct: "behind",
    },
    {
      type: "multiple-choice",
      question: "'Sous' means…",
      options: ["under", "on", "above", "between"],
      correct: "under",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Les lunettes sont ___ la table.' (on)",
      blank: "sur",
    },
    {
      type: "fill-blank",
      question: "Complete: 'La table est ___ le mur.' (against)",
      blank: "contre",
    },
    {
      type: "multiple-choice",
      question: "Choose the best description: 'Le livre est entre…'",
      options: [
        "les deux étagères",
        "l'étagère",
        "sur la table",
        "sous le fauteuil",
      ],
      correct: "les deux étagères",
    },
    {
      type: "word-bank",
      question: "Translate: 'The window is to the right of the table.'",
      tokens: ["La", "fenêtre", "est", "à", "droite", "de", "la", "table", "gauche"],
      correctOrder: ["La", "fenêtre", "est", "à", "droite", "de", "la", "table"],
    },
  ],

  // ---------- UNIT 3 — Ça se trouve où? ----------
  "3-1": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["ascenseur", "chambre", "couloir", "voiture"],
      correct: "voiture",
    },
    {
      type: "fill-blank",
      question: "Preposition: 'Les toilettes sont ___ face de la salle de bains.'",
      blank: "en",
    },
    {
      type: "fill-blank",
      question: "Complete: 'L'immeuble est ___ coin de la rue.'",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "Rewrite: 'Il habite avec Philippe et Nada.' →",
      options: [
        "Il habite chez eux.",
        "Il habite chez nous.",
        "Il habite chez vous.",
        "Il habite chez elles.",
      ],
      correct: "Il habite chez eux.",
    },
    {
      type: "multiple-choice",
      question: "Which floor is 'le rez-de-chaussée' ?",
      options: ["ground floor", "first floor", "top floor", "basement"],
      correct: "ground floor",
    },
    {
      type: "word-bank",
      question: "Translate: 'There are three bedrooms in our apartment.'",
      tokens: ["Il", "y", "a", "trois", "chambres", "dans", "notre", "appartement", "votre"],
      correctOrder: ["Il", "y", "a", "trois", "chambres", "dans", "notre", "appartement"],
    },
  ],

  "3-2": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["musée", "banque", "magasin", "voiture"],
      correct: "voiture",
    },
    {
      type: "multiple-choice",
      question: "Which sentence uses the imperative?",
      options: [
        "Continuez tout droit.",
        "Vous continuez tout droit.",
        "Tu continues tout droit.",
        "Il continue tout droit.",
      ],
      correct: "Continuez tout droit.",
    },
    {
      type: "fill-blank",
      question: "Use the pronoun 'y': 'Tu vas à la banque ? — Oui, j' ___ vais.'",
      blank: "y",
    },
    {
      type: "fill-blank",
      question: "Contracted article: 'Ils vont ___ musée.' (à + le)",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "How do you say 'by bus' ?",
      options: ["en bus", "à bus", "au bus", "de bus"],
      correct: "en bus",
    },
    {
      type: "word-bank",
      question: "Translate (imperative, vous): 'Cross the bridge and turn left.'",
      tokens: ["Traversez", "le", "pont", "et", "tournez", "à", "gauche", "droite"],
      correctOrder: ["Traversez", "le", "pont", "et", "tournez", "à", "gauche"],
    },
  ],

  "3-3": [
    {
      type: "multiple-choice",
      question: "'On' here means 'we': choose the sentence.",
      options: [
        "Bon, on va au restaurant ?",
        "On parle français à la Réunion.",
        "Au Brésil, on danse la samba.",
        "On dit ‘bonjour’ en France.",
      ],
      correct: "Bon, on va au restaurant ?",
    },
    {
      type: "fill-blank",
      question: "Complete: 'L'hôtel est ___ bord de la mer.'",
      blank: "au",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Vous arrivez ___ bateau.' (means of transport)",
      blank: "en",
    },
    {
      type: "multiple-choice",
      question: "Rewrite: 'Cette grande île a de jolies plages.' →",
      options: [
        "C'est une grande île avec de jolies plages.",
        "C'est une jolie plage avec de grandes îles.",
        "Cette île grande a de plages jolies.",
        "Une grande île c'est avec jolies plages.",
      ],
      correct: "C'est une grande île avec de jolies plages.",
    },
    {
      type: "multiple-choice",
      question: "Which is correct?",
      options: [
        "une chambre avec terrasse",
        "une chambre à terrasse",
        "une chambre en terrasse",
        "une chambre de terrasse",
      ],
      correct: "une chambre avec terrasse",
    },
    {
      type: "word-bank",
      question: "Translate: 'We visit the centre of the island by helicopter.'",
      tokens: [
        "On",
        "visite",
        "le",
        "centre",
        "de",
        "l'île",
        "en",
        "hélicoptère",
        "à",
      ],
      correctOrder: ["On", "visite", "le", "centre", "de", "l'île", "en", "hélicoptère"],
    },
  ],

  "3-4": [
    {
      type: "multiple-choice",
      question: "Which is a direction phrase?",
      options: [
        "la deuxième rue à gauche",
        "une chambre avec terrasse",
        "au bord de la mer",
        "un grand salon",
      ],
      correct: "la deuxième rue à gauche",
    },
    {
      type: "fill-blank",
      question: "Complete (imperative, tu): '___ la première rue à droite.' (prendre)",
      blank: "Prends",
    },
    {
      type: "fill-blank",
      question: "Complete: 'La poste est ___ coin de l'avenue et de la rue.'",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "'Tout droit' means…",
      options: ["straight ahead", "to the right", "to the left", "behind"],
      correct: "straight ahead",
    },
    {
      type: "multiple-choice",
      question: "Choose the most polite question:",
      options: [
        "Pardon, où est la poste, s'il vous plaît ?",
        "Poste où ?",
        "La poste !",
        "Tu sais la poste ?",
      ],
      correct: "Pardon, où est la poste, s'il vous plaît ?",
    },
    {
      type: "word-bank",
      question: "Translate: 'Take the first street on the right.'",
      tokens: ["Prenez", "la", "première", "rue", "à", "droite", "gauche", "deuxième"],
      correctOrder: ["Prenez", "la", "première", "rue", "à", "droite"],
    },
  ],
  "2-5": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["un vase", "des fleurs", "une chaise", "un fauteuil"],
      correct: "des fleurs",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Sur la table, il y a ___ vase et un verre.'",
      blank: "un",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct article: '___ photos sont dans la chambre.'",
      options: ["Des", "Les", "Une", "Le"],
      correct: "Les",
    },
    {
      type: "fill-blank",
      question: "Preposition: 'Le chat est ___ le fauteuil.'",
      blank: "sur",
    },
    {
      type: "multiple-choice",
      question: "Choose the best sentence:",
      options: [
        "Il y a une table et des chaises.",
        "Il y a une table et des voitures.",
        "Il y a des chaussures et des chaises.",
        "Il y a des fleurs et des maisons.",
      ],
      correct: "Il y a une table et des chaises.",
    },
    {
      type: "word-bank",
      question: "Translate: 'Qu'est-ce que c'est ? C'est un vase.'",
      tokens: ["Qu'est-ce", "que", "c'est", "?", "C'est", "un", "vase", "."],
      correctOrder: ["Qu'est-ce", "que", "c'est", "?", "C'est", "un", "vase", "."],
    },
  ],

  "2-6": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["un manteau", "un portrait", "une chemise", "un pull-over"],
      correct: "un portrait",
    },
    {
      type: "multiple-choice",
      question: "Negative form of 'Il porte des lunettes.'",
      options: [
        "Il ne porte pas de lunettes.",
        "Il ne porte pas des lunettes.",
        "Il porte pas de lunettes.",
        "Il ne porte des lunettes pas.",
      ],
      correct: "Il ne porte pas de lunettes.",
    },
    {
      type: "fill-blank",
      question: "Stressed pronoun: '___ , je suis grand.'",
      blank: "Moi",
    },
    {
      type: "fill-blank",
      question: "Agreement: 'Elle a une robe ___.' (green)",
      blank: "verte",
    },
    {
      type: "multiple-choice",
      question: "Plural of 'un tee-shirt blanc' is…",
      options: [
        "des tee-shirts blancs",
        "des tee-shirt blanc",
        "des tee-shirts blanc",
        "les tee-shirt blanches",
      ],
      correct: "des tee-shirts blancs",
    },
    {
      type: "word-bank",
      question: "Translate: 'Elle est petite, brune et elle porte des lunettes.'",
      tokens: ["Elle", "est", "petite", "brune", "et", "elle", "porte", "des", "lunettes"],
      correctOrder: ["Elle", "est", "petite", "brune", "et", "elle", "porte", "des", "lunettes"],
    },
  ],

  "2-7": [
    {
      type: "multiple-choice",
      question: "Choose the correct demonstrative: '___ pull noir'",
      options: ["ce", "cet", "cette", "ces"],
      correct: "ce",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct demonstrative: '___ objet rouge'",
      options: ["ce", "cet", "cette", "ces"],
      correct: "cet",
    },
    {
      type: "fill-blank",
      question: "Question word: '___ coûte ce blouson ?'",
      blank: "Combien",
    },
    {
      type: "fill-blank",
      question: "Write the number: 'quatre-vingt-treize' = ___",
      blank: "93",
    },
    {
      type: "multiple-choice",
      question: "Complete the negative: 'Je ___ porte ___ de chaussures jaunes.'",
      options: ["ne / pas", "n' / pas", "ne / plus", "n' / plus"],
      correct: "ne / pas",
    },
    {
      type: "word-bank",
      question: "Translate: 'Quels vêtements est-ce que tu aimes ?'",
      tokens: ["Quels", "vêtements", "est-ce", "que", "tu", "aimes", "?"],
      correctOrder: ["Quels", "vêtements", "est-ce", "que", "tu", "aimes", "?"],
    },
  ],

  "2-8": [
    {
      type: "multiple-choice",
      question: "Transform: 'Les chaussures sont à elle.' →",
      options: [
        "Ce sont ses chaussures.",
        "Ce sont ses chaussures à elle.",
        "C'est ses chaussures.",
        "Elle a les chaussures.",
      ],
      correct: "Ce sont ses chaussures.",
    },
    {
      type: "multiple-choice",
      question: "Transform: 'Les sacs sont à Pierre et à Paul.' →",
      options: [
        "Ce sont leurs sacs.",
        "Ce sont ses sacs.",
        "C'est leurs sacs.",
        "Ils ont les sacs.",
      ],
      correct: "Ce sont leurs sacs.",
    },
    {
      type: "fill-blank",
      question: "Transform: 'Les vestes sont à lui.' →",
      blank: "Ce sont ses vestes.",
    },
    {
      type: "fill-blank",
      question: "Transform: 'Les lunettes sont à vous.' →",
      blank: "Ce sont vos lunettes.",
    },
    {
      type: "fill-blank",
      question: "Transform: 'Les chemises sont à toi.' →",
      blank: "Ce sont tes chemises.",
    },
    {
      type: "word-bank",
      question: "Translate: 'The coats are his.'",
      tokens: ["Ce", "sont", "ses", "vestes", "à", "lui"],
      correctOrder: ["Ce", "sont", "ses", "vestes", "à", "lui"],
    },
  ],

  "3-9": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["ascenseur", "chambre", "couloir", "voiture"],
      correct: "voiture",
    },
    {
      type: "fill-blank",
      question: "Complete: 'La chambre est ___ bout du couloir.'",
      blank: "au",
    },
    {
      type: "fill-blank",
      question: "Complete: 'La cuisine se trouve ___ droite de l'entrée.'",
      blank: "à",
    },
    {
      type: "multiple-choice",
      question: "Which phrase means 'at the corner'?",
      options: ["au coin", "au bout", "à droite", "dans"],
      correct: "au coin",
    },
    {
      type: "word-bank",
      question: "Translate: 'L'immeuble est au coin de la rue.'",
      tokens: ["L'immeuble", "est", "au", "coin", "de", "la", "rue"],
      correctOrder: ["L'immeuble", "est", "au", "coin", "de", "la", "rue"],
    },
    {
      type: "multiple-choice",
      question: "Which floor is 'le rez-de-chaussée' ?",
      options: ["ground floor", "first floor", "top floor", "basement"],
      correct: "ground floor",
    },
  ],

  "3-10": [
    {
      type: "multiple-choice",
      question: "Find the intruder:",
      options: ["musée", "banque", "magasin", "voiture"],
      correct: "voiture",
    },
    {
      type: "multiple-choice",
      question: "Which sentence uses the imperative?",
      options: [
        "Continuez tout droit.",
        "Vous continuez tout droit.",
        "Tu continues tout droit.",
        "Il continue tout droit.",
      ],
      correct: "Continuez tout droit.",
    },
    {
      type: "fill-blank",
      question: "Use the pronoun 'y': 'Tu vas à la banque ? — Oui, j' ___ vais.'",
      blank: "y",
    },
    {
      type: "fill-blank",
      question: "Contracted article: 'Ils vont ___ musée.' (à + le)",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "How do you say 'by bus' ?",
      options: ["en bus", "à bus", "au bus", "de bus"],
      correct: "en bus",
    },
    {
      type: "word-bank",
      question: "Translate: 'Tu passes devant la poste? — Oui, j'y passe.'",
      tokens: ["Tu", "passes", "devant", "la", "poste", "?", "Oui", "j'", "y", "passe", "."],
      correctOrder: ["Tu", "passes", "devant", "la", "poste", "?", "Oui", "j'", "y", "passe", "."],
    },
  ],

  "3-11": [
    {
      type: "multiple-choice",
      question: "What is La Réunion?",
      options: ["une île", "une ville", "un pays", "un fleuve"],
      correct: "une île",
    },
    {
      type: "fill-blank",
      question: "Complete: 'Le premier jour, vous arrivez à l'___ de Saint-Denis.'",
      blank: "aéroport",
    },
    {
      type: "fill-blank",
      question: "Complete: 'On visite le centre de l'île ___ hélicoptère.'",
      blank: "en",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct phrase: 'L'hôtel est ___ bord de la mer.'",
      options: ["au", "en", "à la", "à"],
      correct: "au",
    },
    {
      type: "word-bank",
      question: "Translate: 'Cette grande île a de jolies plages.'",
      tokens: ["Cette", "grande", "île", "a", "de", "jolies", "plages"],
      correctOrder: ["Cette", "grande", "île", "a", "de", "jolies", "plages"],
    },
    {
      type: "multiple-choice",
      question: "Choose the correct transformation: 'Cette grande île a de jolies plages.' →",
      options: [
        "C'est une grande île avec de jolies plages.",
        "C'est une jolie plage avec de grandes îles.",
        "Cette île grande a de plages jolies.",
        "Une grande île c'est avec jolies plages.",
      ],
      correct: "C'est une grande île avec de jolies plages.",
    },
  ],

  "3-12": [
    {
      type: "multiple-choice",
      question: "Choose the correct direction word: 'Continuez tout droit et ___ à gauche.'",
      options: ["tournez", "allez", "venez", "prenez"],
      correct: "tournez",
    },
    {
      type: "fill-blank",
      question: "Complete: 'La gare est sur la droite, entre la rue de la Mer et la rue de ___.'",
      blank: "Vienne",
    },
    {
      type: "fill-blank",
      question: "Complete: 'C'est au coin de la rue de Vienne et de la place ___.'",
      blank: "d'Italie",
    },
    {
      type: "multiple-choice",
      question: "Which sentence describes the office of tourism?",
      options: [
        "C'est au coin de la rue de Vienne et de la place d'Italie.",
        "Il est en face de la poste.",
        "Elle est à gauche du musée.",
        "C'est à droite du pont.",
      ],
      correct: "C'est au coin de la rue de Vienne et de la place d'Italie.",
    },
    {
      type: "word-bank",
      question: "Translate: 'La gare est sur la droite, entre la rue de la Mer et la rue de Vienne.'",
      tokens: ["La", "gare", "est", "sur", "la", "droite", ",", "entre", "la", "rue", "de", "la", "Mer", "et", "la", "rue", "de", "Vienne"],
      correctOrder: ["La", "gare", "est", "sur", "la", "droite", ",", "entre", "la", "rue", "de", "la", "Mer", "et", "la", "rue", "de", "Vienne"],
    },
    {
      type: "multiple-choice",
      question: "What is the best answer if someone asks 'Tu y vas comment ?'",
      options: [
        "J'y vais en voiture.",
        "J'en vais en voiture.",
        "Je vais y en voiture.",
        "J'y suis voiture.",
      ],
      correct: "J'y vais en voiture.",
    },
  ],
};