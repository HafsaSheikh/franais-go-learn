export type Challenge =
  | { type: "multiple-choice"; question: string; options: string[]; correct: string }
  | { type: "fill-blank"; question: string; blank: string }
  | { type: "word-bank"; question: string; tokens: string[]; correctOrder: string[] };

export interface Lesson {
  lessonId: number;
  lessonTitle: string;
  focus: string;
  dialogue: { speaker: string; fr: string; en: string }[];
  vocabulary: { fr: string; en: string }[];
  grammar: { title: string; explanation: string; rules: string[] };
  challenges: Challenge[];
}

export interface Unit {
  unitId: number;
  unitTitle: string;
  lessons: Lesson[];
}

export const LE_NOUVEAU_TAXI_COMPLETE_DB: Unit[] = [
  {
    unitId: 1,
    unitTitle: "Unité 1 : Rencontres",
    lessons: [
      {
        lessonId: 1,
        lessonTitle: "Leçon 1 : Bienvenue !",
        focus: "Saluer, se présenter, dire son prénom et son nom.",
        dialogue: [
          { speaker: "Alice", fr: "Bonjour. Je suis Alice Doucet. Vous êtes madame Falco ?", en: "Hello. I am Alice Doucet. Are you Mrs. Falco?" },
          { speaker: "Nicole", fr: "Bonjour. Oui, je m'appelle Nicole Falco. Et voici Aldo, mon mari.", en: "Hello. Yes, my name is Nicole Falco. And here is Aldo, my husband." },
          { speaker: "Alice", fr: "Qui est-ce ?", en: "Who is it?" },
          { speaker: "Nicole", fr: "C'est Aldo. Il s'appelle Aldo Falco.", en: "It's Aldo. His name is Aldo Falco." },
        ],
        vocabulary: [
          { fr: "Bonjour", en: "Hello / Good morning" },
          { fr: "Je m'appelle", en: "My name is" },
          { fr: "Oui", en: "Yes" },
          { fr: "Voici", en: "Here is" },
          { fr: "Mon mari", en: "My husband" },
          { fr: "Qui est-ce ?", en: "Who is that?" },
        ],
        grammar: {
          title: "Le verbe Être & S'appeler (Présent)",
          explanation: "Use 'Je suis' to state who you are, and 'Je m'appelle' to state your name.",
          rules: ["Je suis / Vous êtes", "Je m'appelle / Il s'appelle"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you say 'My name is'?", options: ["Je suis", "Je m'appelle", "Vous êtes", "Il s'appelle"], correct: "Je m'appelle" },
          { type: "fill-blank", question: "Vous ___ madame Falco ?", blank: "êtes" },
          { type: "word-bank", question: "Translate: 'I am Alice.'", tokens: ["Alice", "suis", "Je", "mari"], correctOrder: ["Je", "suis", "Alice"] },
        ],
      },
      {
        lessonId: 2,
        lessonTitle: "Leçon 2 : Qui est-ce ?",
        focus: "Identifier une personne, exprimer la nationalité.",
        dialogue: [
          { speaker: "Interlocuteur", fr: "Café ? Thé ?", en: "Coffee? Tea?" },
          { speaker: "Client", fr: "Café, s'il vous plaît. Qui est-ce ?", en: "Coffee, please. Who is that?" },
          { speaker: "Interlocuteur", fr: "Ah ! C'est Émilie Constant, l'assistante de M. Devaux. Et elle, c'est la secrétaire.", en: "Ah! That is Émilie Constant, Mr. Devaux's assistant. And her, she's the secretary." },
          { speaker: "Interlocuteur", fr: "Lui, c'est Pierre, il est professeur. Elle, c'est Anna, elle est étudiante et belge. Luigi est italien.", en: "Him, that's Pierre, he is a professor. Her, that's Anna, she is a student and Belgian. Luigi is Italian." },
        ],
        vocabulary: [
          { fr: "L'assistante", en: "The assistant (f)" },
          { fr: "La secrétaire", en: "The secretary" },
          { fr: "Étudiante", en: "Student (f)" },
          { fr: "Belge", en: "Belgian" },
          { fr: "Italien / Italienne", en: "Italian (m/f)" },
          { fr: "S'il vous plaît", en: "Please (formal)" },
        ],
        grammar: {
          title: "Le genre des nationalités et professions",
          explanation: "Feminine forms often append an 'e' or double the trailing consonant before 'e'. Some remain identical like 'belge'.",
          rules: ["Masculin: Italien, Professeur", "Féminin: Italienne, Étudiante"],
        },
        challenges: [
          { type: "multiple-choice", question: "What is the feminine form of 'Italien'?", options: ["Italien", "Italienne", "Italiane", "Italiennes"], correct: "Italienne" },
          { type: "fill-blank", question: "Elle est ___ (Belgian).", blank: "belge" },
          { type: "word-bank", question: "Translate: 'Coffee, please.'", tokens: ["plaît", "Café", "s'il", "vous", "Thé"], correctOrder: ["Café", "s'il", "vous", "plaît"] },
        ],
      },
      {
        lessonId: 3,
        lessonTitle: "Leçon 3 : Ça va bien ?",
        focus: "Aborder quelqu'un, demander l'âge, l'adresse, et le numéro.",
        dialogue: [
          { speaker: "David", fr: "Salut, Céline, tu vas bien ?", en: "Hi Céline, are you doing well?" },
          { speaker: "Céline", fr: "Oui, ça va bien. Et toi ?", en: "Yes, I'm doing well. And you?" },
          { speaker: "David", fr: "Je vais bien, merci. J'habite à Montréal maintenant, avec ma femme au Canada.", en: "I'm doing well, thank you. I live in Montreal now, with my wife in Canada." },
          { speaker: "Céline", fr: "Quelle est ton adresse et ton numéro de téléphone ?", en: "What is your address and your phone number?" },
        ],
        vocabulary: [
          { fr: "Tu vas bien ?", en: "Are you doing well? (informal)" },
          { fr: "J'habite", en: "I live" },
          { fr: "Ma femme", en: "My wife" },
          { fr: "L'adresse", en: "The address" },
          { fr: "Le numéro", en: "The number" },
          { fr: "Merci", en: "Thank you" },
        ],
        grammar: {
          title: "Demander des informations personnelles",
          explanation: "Use 'Quel / Quelle' to ask 'what is' depending on the gender of the noun.",
          rules: ["Quel est votre numéro (m)", "Quelle est votre adresse (f)"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you say 'Thank you' in French?", options: ["S'il vous plaît", "Merci", "Bonjour", "Voici"], correct: "Merci" },
          { type: "fill-blank", question: "___ (What) est ton adresse ?", blank: "Quelle" },
        ],
      },
      {
        lessonId: 4,
        lessonTitle: "Leçon 4 : correspond@nce.com",
        focus: "Parler de ses goûts, se présenter sur un forum.",
        dialogue: [
          { speaker: "Utilisateur", fr: "Moi, c'est Martin. J'aime le cinéma, le football et la musique française.", en: "Me, I'm Martin. I like cinema, football, and French music." },
          { speaker: "Correspondant", fr: "Tu parles français ? J'adore voyager et échanger des e-mails.", en: "Do you speak French? I love traveling and exchanging emails." },
        ],
        vocabulary: [
          { fr: "J'aime", en: "I like" },
          { fr: "J'adore", en: "I love" },
          { fr: "Le cinéma", en: "The cinema" },
          { fr: "Voyager", en: "To travel" },
        ],
        grammar: {
          title: "Exprimer les goûts (Aimer / Adorer)",
          explanation: "Use definite articles (le, la, l', les) directly after verbs of preference.",
          rules: ["J'aime le cinéma", "J'adore la musique"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'J'adore' mean?", options: ["I hate", "I like", "I love", "I speak"], correct: "I love" },
          { type: "fill-blank", question: "J'aime ___ cinéma.", blank: "le" },
        ],
      },
    ],
  },
  {
    unitId: 2,
    unitTitle: "Unité 2 : Portraits",
    lessons: [
      {
        lessonId: 5,
        lessonTitle: "Leçon 5 : Trouvez l'objet",
        focus: "Nommer, montrer, et situer des objets du quotidien.",
        dialogue: [
          { speaker: "Client", fr: "Qu'est-ce que c'est ? Trouvez l'objet sur la table.", en: "What is it? Find the object on the table." },
          { speaker: "Vendeur", fr: "C'est un livre, et là-bas c'est une clé. Regardez !", en: "It's a book, and over there it is a key. Look!" },
        ],
        vocabulary: [
          { fr: "Qu'est-ce que c'est ?", en: "What is it?" },
          { fr: "Un livre", en: "A book" },
          { fr: "Une clé", en: "A key" },
          { fr: "Sur la table", en: "On the table" },
        ],
        grammar: {
          title: "Les articles indéfinis (Un, Une)",
          explanation: "Identify singular items using 'un' for masculine and 'une' for feminine items.",
          rules: ["Un livre (m)", "Une clé (f)"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you ask 'What is it?'", options: ["Qui est-ce ?", "Qu'est-ce que c'est ?", "C'est combien ?", "Où est-ce ?"], correct: "Qu'est-ce que c'est ?" },
          { type: "fill-blank", question: "C'est ___ clé.", blank: "une" },
        ],
      },
      {
        lessonId: 6,
        lessonTitle: "Leçon 6 : Portrait-robot",
        focus: "Exprimer la possession, indiquer les couleurs, décrire quelqu'un.",
        dialogue: [
          { speaker: "Témoin", fr: "Il a un sac bleu. Ses cheveux sont noirs et courts.", en: "He has a blue bag. His hair is black and short." },
          { speaker: "Policier", fr: "C'est votre sac ? Quelle est la couleur ?", en: "Is it your bag? What is the color?" },
        ],
        vocabulary: [
          { fr: "Bleu", en: "Blue" },
          { fr: "Noir", en: "Black" },
          { fr: "Les cheveux", en: "The hair" },
          { fr: "Un sac", en: "A bag" },
        ],
        grammar: {
          title: "L'accord des adjectifs de couleur",
          explanation: "Adjectives must match the gender and number of the noun they modify.",
          rules: ["Un sac bleu (m.s)", "Des chaussures bleues (f.p)"],
        },
        challenges: [
          { type: "multiple-choice", question: "Plural form of 'noir' for masculine plural nouns?", options: ["noir", "noire", "noirs", "noires"], correct: "noirs" },
          { type: "fill-blank", question: "Un sac ___ (blue).", blank: "bleu" },
        ],
      },
      {
        lessonId: 7,
        lessonTitle: "Leçon 7 : Shopping",
        focus: "Caractériser un objet, demander/indiquer le prix, exprimer ses goûts.",
        dialogue: [
          { speaker: "Acheteur", fr: "Ce pull bleu coûte combien ? Il est très joli.", en: "How much does this blue sweater cost? It's very pretty." },
          { speaker: "Vendeur", fr: "Il coûte trente euros. Ce n'est pas cher.", en: "It costs thirty euros. It is not expensive." },
        ],
        vocabulary: [
          { fr: "Coûter", en: "To cost" },
          { fr: "Combien", en: "How much" },
          { fr: "Trente euros", en: "Thirty euros" },
          { fr: "Cher", en: "Expensive" },
          { fr: "Joli", en: "Pretty" },
        ],
        grammar: {
          title: "Les adjectifs démonstratifs & Prix",
          explanation: "Use 'ce, cet, cette, ces' to point out items. Use 'coûte combien' to ask for prices.",
          rules: ["Ce pull (m)", "Cette robe (f)", "Ces chaussures (p)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Ce n'est pas cher' mean?", options: ["It's very beautiful", "It's not expensive", "It's too far", "It's open"], correct: "It's not expensive" },
          { type: "fill-blank", question: "Il ___ combien ?", blank: "coûte" },
        ],
      },
    ],
  },
  {
    unitId: 3,
    unitTitle: "Unité 3 : Ça se trouve",
    lessons: [
      {
        lessonId: 9,
        lessonTitle: "Leçon 9 : Appartement à louer",
        focus: "Situer un lieu sur un plan, s'informer, décrire un appartement.",
        dialogue: [
          { speaker: "Agent", fr: "L'appartement est au troisième étage avec ascenseur. C'est très calme.", en: "The apartment is on the third floor with an elevator. It's very quiet." },
          { speaker: "Client", fr: "Où est la cuisine ? Est-ce qu'il y a un parking ?", en: "Where is the kitchen? Is there a parking space?" },
          { speaker: "Agent", fr: "La cuisine est à gauche de l'entrée. En face, vous avez la salle de bains.", en: "The kitchen is to the left of the entrance. Opposite, you have the bathroom." },
        ],
        vocabulary: [
          { fr: "À gauche de", en: "To the left of" },
          { fr: "En face de", en: "Opposite / Facing" },
          { fr: "Une cuisine", en: "A kitchen" },
          { fr: "Troisième étage", en: "Third floor" },
          { fr: "Ascenseur", en: "Elevator" },
        ],
        grammar: {
          title: "Prépositions de lieu composées",
          explanation: "Prepositions like 'à côté de', 'à gauche de' change when combining with articles (de + le = du).",
          rules: ["À gauche de l'entrée", "Au coin de la rue"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'En face de' mean?", options: ["Next to", "Behind", "Opposite", "Inside"], correct: "Opposite" },
          { type: "fill-blank", question: "La cuisine est à gauche ___ l'entrée.", blank: "de" },
        ],
      },
      {
        lessonId: 10,
        lessonTitle: "Leçon 10 : C'est par où ?",
        focus: "Indiquer une direction, s'orienter dans la ville.",
        dialogue: [
          { speaker: "Touriste", fr: "Pardon, pour aller à la gare, c'est par où ?", en: "Excuse me, which way to get to the train station?" },
          { speaker: "Passant", fr: "Allez tout droit, tournez à droite au deuxième feu, puis continuez.", en: "Go straight ahead, turn right at the second traffic light, then continue." },
        ],
        vocabulary: [
          { fr: "Tout droit", en: "Straight ahead" },
          { fr: "Tournez à droite", en: "Turn right" },
          { fr: "La gare", en: "The train station" },
          { fr: "Pardon", en: "Excuse me" },
        ],
        grammar: {
          title: "L'Impératif pour donner des directions",
          explanation: "Drop the subject pronoun to give direct commands or driving directions clearly.",
          rules: ["Allez tout droit !", "Tournez à gauche !"],
        },
        challenges: [
          { type: "multiple-choice", question: "What is 'Straight ahead'?", options: ["À gauche", "À droite", "Tout droit", "En face"], correct: "Tout droit" },
          { type: "word-bank", question: "Translate: 'Turn right.'", tokens: ["droite", "gauche", "Tournez", "à"], correctOrder: ["Tournez", "à", "droite"] },
        ],
      },
      {
        lessonId: 11,
        lessonTitle: "Leçon 11 : Bon voyage !",
        focus: "Prendre les transports, exprimer les horaires de départ/d'arrivée.",
        dialogue: [
          { speaker: "Voyageur", fr: "À quelle heure part le train pour Paris, s'il vous plaît ?", en: "What time does the train to Paris leave, please?" },
          { speaker: "Guichetier", fr: "Le train part à quatorze heures trente du quai numéro quatre.", en: "The train leaves at 2:30 PM from platform number four." },
        ],
        vocabulary: [
          { fr: "À quelle heure", en: "At what time" },
          { fr: "Le train", en: "The train" },
          { fr: "Le quai", en: "The platform" },
          { fr: "Partir", en: "To leave" },
        ],
        grammar: {
          title: "Dire l'heure officielle",
          explanation: "French schedules utilize the 24-hour clock for transit networks and timetables.",
          rules: ["Quatorze heures (14:00 / 2 PM)", "Trente (30)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Quai' mean?", options: ["Ticket", "Platform", "Station", "Car"], correct: "Platform" },
          { type: "fill-blank", question: "Le train ___ à quatorze heures.", blank: "part" },
        ],
      },
    ],
  },
  {
    unitId: 4,
    unitTitle: "Unité 4 : La vie de tous les jours",
    lessons: [
      {
        lessonId: 12,
        lessonTitle: "Leçon 12 : On fait des crêpes ?",
        focus: "Demander et exprimer des besoins, s'informer sur des quantités.",
        dialogue: [
          { speaker: "Hugo", fr: "C'est la Chandeleur. On fait des crêpes ce soir ?", en: "It's Candlemas. Shall we make pancakes tonight?" },
          { speaker: "Alice", fr: "D'accord, mais il faut de la farine, des œufs et un litre de lait.", en: "Okay, but we need flour, eggs, and a liter of milk." },
          { speaker: "Hugo", fr: "Combien de kilos de farine ? Un ou deux ?", en: "How many kilos of flour? One or two?" },
          { speaker: "Alice", fr: "Un kilo de farine, six œufs, et achète aussi du sucre et de la confiture.", en: "One kilo of flour, six eggs, and also buy some sugar and jam." },
        ],
        vocabulary: [
          { fr: "La farine", en: "The flour" },
          { fr: "Les œufs", en: "The eggs" },
          { fr: "Un litre de lait", en: "A liter of milk" },
          { fr: "Du sucre", en: "Some sugar" },
          { fr: "La confiture", en: "The jam" },
          { fr: "Des crêpes", en: "Pancakes" },
        ],
        grammar: {
          title: "Les articles partitifs (Du, De la, Des)",
          explanation: "Use partitive articles to indicate an unspecified quantity of an uncountable mass item.",
          rules: ["Du sucre (m)", "De la farine (f)", "Des œufs (p)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What partitive article goes with masculine 'sucre'?", options: ["de la", "du", "des", "une"], correct: "du" },
          { type: "fill-blank", question: "Il faut ___ farine.", blank: "de la" },
          { type: "word-bank", question: "Translate: 'Six eggs.'", tokens: ["lait", "œufs", "six", "un"], correctOrder: ["six", "œufs"] },
        ],
      },
    ],
  },
];

export const ALL_LESSONS: Lesson[] = LE_NOUVEAU_TAXI_COMPLETE_DB.flatMap((u) => u.lessons);
