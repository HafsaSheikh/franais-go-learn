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
    "unitId": 1,
    "unitTitle": "Unité 1 : Rencontres",
    "lessons": [
      {
        "lessonId": 1,
        "lessonTitle": "Leçon 1 : Bienvenue !",
        "focus": "Saluer, demander et dire le prénom et le nom.",
        "dialogue": [
          {
            "speaker": "Alice",
            "fr": "Bonjour. Je suis Alice Doucet. Vous êtes madame Falco ?",
            "en": "Hello. I am Alice Doucet. Are you Mrs. Falco?"
          },
          {
            "speaker": "Nicole",
            "fr": "Bonjour. Oui, je m'appelle Nicole Falco.",
            "en": "Hello. Yes, my name is Nicole Falco."
          },
          {
            "speaker": "Alice",
            "fr": "Et voici Aldo ?",
            "en": "And here is Aldo?"
          },
          {
            "speaker": "Nicole",
            "fr": "Oui, c'est Aldo, mon mari.",
            "en": "Yes, it's Aldo, my husband."
          }
        ],
        "vocabulary": [
          {
            "fr": "Bonjour",
            "en": "Hello"
          },
          {
            "fr": "Je m'appelle",
            "en": "My name is"
          },
          {
            "fr": "Madame",
            "en": "Mrs / Madam"
          },
          {
            "fr": "Monsieur",
            "en": "Mr / Sir"
          },
          {
            "fr": "Voici",
            "en": "Here is"
          },
          {
            "fr": "Mon mari",
            "en": "My husband"
          }
        ],
        "grammar": {
          "title": "Être et s'appeler au présent (singulier)",
          "explanation": "Use 'être' to say who you are and 's'appeler' to give your name.",
          "rules": [
            "je suis / tu es / il-elle est / vous êtes",
            "je m'appelle / tu t'appelles / il s'appelle"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "How do you say 'My name is'?",
            "options": [
              "Je suis",
              "Je m'appelle",
              "Vous êtes",
              "Tu es"
            ],
            "correct": "Je m'appelle"
          },
          {
            "type": "fill-blank",
            "question": "Vous ___ madame Falco ?",
            "blank": "êtes"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I am Alice.'",
            "tokens": [
              "Alice",
              "suis",
              "Je",
              "mari"
            ],
            "correctOrder": [
              "Je",
              "suis",
              "Alice"
            ]
          }
        ]
      },
      {
        "lessonId": 2,
        "lessonTitle": "Leçon 2 : Qui est-ce ?",
        "focus": "Identifier une personne, dire la nationalité.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Qui est-ce ?",
            "en": "Who is it?"
          },
          {
            "speaker": "Tom",
            "fr": "C'est Aldo. Il est italien.",
            "en": "It's Aldo. He is Italian."
          },
          {
            "speaker": "Léa",
            "fr": "Et elle ?",
            "en": "And her?"
          },
          {
            "speaker": "Tom",
            "fr": "Elle, c'est Nicole, elle est française.",
            "en": "Her, that's Nicole, she is French."
          }
        ],
        "vocabulary": [
          {
            "fr": "Qui est-ce ?",
            "en": "Who is it?"
          },
          {
            "fr": "C'est",
            "en": "It is / This is"
          },
          {
            "fr": "Italien",
            "en": "Italian (m)"
          },
          {
            "fr": "Française",
            "en": "French (f)"
          },
          {
            "fr": "Un homme",
            "en": "A man"
          },
          {
            "fr": "Une femme",
            "en": "A woman"
          }
        ],
        "grammar": {
          "title": "L'article défini au singulier + masculin/féminin",
          "explanation": "Most nationality adjectives add -e for the feminine form.",
          "rules": [
            "le / la / l'",
            "italien → italienne",
            "français → française"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Feminine of 'italien'?",
            "options": [
              "italiens",
              "italienne",
              "italiana",
              "italien"
            ],
            "correct": "italienne"
          },
          {
            "type": "fill-blank",
            "question": "Elle ___ française.",
            "blank": "est"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'Who is it?'",
            "tokens": [
              "Qui",
              "est",
              "ce",
              "quoi"
            ],
            "correctOrder": [
              "Qui",
              "est",
              "ce"
            ]
          }
        ]
      },
      {
        "lessonId": 3,
        "lessonTitle": "Leçon 3 : Ça va bien ?",
        "focus": "Aborder quelqu'un, demander l'âge, l'adresse, le numéro de téléphone.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Salut Marc, ça va ?",
            "en": "Hi Marc, how's it going?"
          },
          {
            "speaker": "Marc",
            "fr": "Ça va bien, merci ! Et toi ?",
            "en": "I'm well, thanks! And you?"
          },
          {
            "speaker": "Léa",
            "fr": "Quel âge as-tu ?",
            "en": "How old are you?"
          },
          {
            "speaker": "Marc",
            "fr": "J'ai vingt-deux ans.",
            "en": "I'm twenty-two."
          }
        ],
        "vocabulary": [
          {
            "fr": "Salut",
            "en": "Hi"
          },
          {
            "fr": "Ça va ?",
            "en": "How are you?"
          },
          {
            "fr": "Merci",
            "en": "Thank you"
          },
          {
            "fr": "Quel âge",
            "en": "What age"
          },
          {
            "fr": "J'ai 22 ans",
            "en": "I'm 22"
          },
          {
            "fr": "Mon numéro",
            "en": "My number"
          }
        ],
        "grammar": {
          "title": "Avoir et aller au présent (singulier) + adjectif possessif",
          "explanation": "Use 'avoir' for age. The possessive adjective agrees with the object owned.",
          "rules": [
            "j'ai / tu as / il a",
            "je vais / tu vas / il va",
            "mon / ma / mes"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I am 20 years old' →",
            "options": [
              "Je suis 20",
              "J'ai 20 ans",
              "Je vais 20",
              "J'a 20"
            ],
            "correct": "J'ai 20 ans"
          },
          {
            "type": "fill-blank",
            "question": "Quel ___ as-tu ?",
            "blank": "âge"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'How are you?'",
            "tokens": [
              "Ça",
              "tu",
              "va",
              "es"
            ],
            "correctOrder": [
              "Ça",
              "va"
            ]
          }
        ]
      },
      {
        "lessonId": 4,
        "lessonTitle": "Leçon 4 : correspond@nce.com",
        "focus": "Parler de ses goûts, chercher un correspondant.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "J'adore la musique et le cinéma.",
            "en": "I love music and movies."
          },
          {
            "speaker": "Tom",
            "fr": "Moi, j'aime le sport mais je déteste la cuisine.",
            "en": "Me, I like sport but I hate cooking."
          },
          {
            "speaker": "Léa",
            "fr": "Tu aimes voyager ?",
            "en": "Do you like to travel?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, j'aime beaucoup voyager.",
            "en": "Yes, I love traveling."
          }
        ],
        "vocabulary": [
          {
            "fr": "J'adore",
            "en": "I love"
          },
          {
            "fr": "J'aime",
            "en": "I like"
          },
          {
            "fr": "Je déteste",
            "en": "I hate"
          },
          {
            "fr": "La musique",
            "en": "Music"
          },
          {
            "fr": "Le sport",
            "en": "Sport"
          },
          {
            "fr": "Voyager",
            "en": "To travel"
          }
        ],
        "grammar": {
          "title": "Verbes en -er au présent + j'aime / je n'aime pas",
          "explanation": "Most -er verbs follow a regular pattern. Use 'le/la/les' before the liked thing.",
          "rules": [
            "je parle / tu parles / il parle",
            "j'aime + le/la/les + nom"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I love music' →",
            "options": [
              "Je déteste la musique",
              "J'adore la musique",
              "J'ai la musique",
              "Je vais la musique"
            ],
            "correct": "J'adore la musique"
          },
          {
            "type": "fill-blank",
            "question": "Tu ___ voyager ?",
            "blank": "aimes"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I like sport.'",
            "tokens": [
              "sport",
              "le",
              "aime",
              "J'",
              "la"
            ],
            "correctOrder": [
              "J'",
              "aime",
              "le",
              "sport"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 2,
    "unitTitle": "Unité 2 : Portraits",
    "lessons": [
      {
        "lessonId": 5,
        "lessonTitle": "Leçon 5 : Trouvez l'objet !",
        "focus": "Nommer, montrer et situer des objets.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Qu'est-ce que c'est ?",
            "en": "What is it?"
          },
          {
            "speaker": "Tom",
            "fr": "C'est un sac. Il est sur la table.",
            "en": "It's a bag. It's on the table."
          },
          {
            "speaker": "Léa",
            "fr": "Et les clés ?",
            "en": "And the keys?"
          },
          {
            "speaker": "Tom",
            "fr": "Les clés sont dans le sac.",
            "en": "The keys are in the bag."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un sac",
            "en": "A bag"
          },
          {
            "fr": "Une table",
            "en": "A table"
          },
          {
            "fr": "Les clés",
            "en": "The keys"
          },
          {
            "fr": "Sur",
            "en": "On"
          },
          {
            "fr": "Dans",
            "en": "In"
          },
          {
            "fr": "Sous",
            "en": "Under"
          }
        ],
        "grammar": {
          "title": "Le pluriel des articles, il y a, prépositions de lieu",
          "explanation": "Use 'il y a' for 'there is/are'. Position words come before the noun group.",
          "rules": [
            "un/une → des",
            "le/la → les",
            "sur, dans, sous, devant, derrière"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Plural of 'un livre' →",
            "options": [
              "des livres",
              "les livres",
              "un livres",
              "du livre"
            ],
            "correct": "des livres"
          },
          {
            "type": "fill-blank",
            "question": "Le sac est ___ la table.",
            "blank": "sur"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'There are keys.'",
            "tokens": [
              "clés",
              "des",
              "y",
              "Il",
              "a"
            ],
            "correctOrder": [
              "Il",
              "y",
              "a",
              "des",
              "clés"
            ]
          }
        ]
      },
      {
        "lessonId": 6,
        "lessonTitle": "Leçon 6 : Portrait-robot",
        "focus": "Exprimer la possession, indiquer les couleurs.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "De quelle couleur sont ses yeux ?",
            "en": "What color are his eyes?"
          },
          {
            "speaker": "Tom",
            "fr": "Ses yeux sont bleus et ses cheveux sont bruns.",
            "en": "His eyes are blue and his hair is brown."
          },
          {
            "speaker": "Léa",
            "fr": "Il porte un manteau noir.",
            "en": "He's wearing a black coat."
          },
          {
            "speaker": "Tom",
            "fr": "Et un pantalon gris.",
            "en": "And gray pants."
          }
        ],
        "vocabulary": [
          {
            "fr": "Les yeux",
            "en": "The eyes"
          },
          {
            "fr": "Les cheveux",
            "en": "The hair"
          },
          {
            "fr": "Bleu",
            "en": "Blue"
          },
          {
            "fr": "Noir",
            "en": "Black"
          },
          {
            "fr": "Un manteau",
            "en": "A coat"
          },
          {
            "fr": "Un pantalon",
            "en": "Pants"
          }
        ],
        "grammar": {
          "title": "Adjectifs possessifs pluriels + accord des adjectifs",
          "explanation": "Adjectives agree in gender and number with the noun.",
          "rules": [
            "mon/ma/mes — ton/ta/tes — son/sa/ses",
            "noir → noire → noirs → noires"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'His eyes' →",
            "options": [
              "son yeux",
              "ses yeux",
              "sa yeux",
              "leurs yeux"
            ],
            "correct": "ses yeux"
          },
          {
            "type": "fill-blank",
            "question": "Ses cheveux sont ___ (brown, m.pl).",
            "blank": "bruns"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'A black coat.'",
            "tokens": [
              "noir",
              "un",
              "manteau",
              "une",
              "noire"
            ],
            "correctOrder": [
              "un",
              "manteau",
              "noir"
            ]
          }
        ]
      },
      {
        "lessonId": 7,
        "lessonTitle": "Leçon 7 : Shopping",
        "focus": "Caractériser un objet, demander et indiquer le prix.",
        "dialogue": [
          {
            "speaker": "Cliente",
            "fr": "Combien coûte ce pull ?",
            "en": "How much is this sweater?"
          },
          {
            "speaker": "Vendeur",
            "fr": "Quarante-cinq euros, madame.",
            "en": "Forty-five euros, ma'am."
          },
          {
            "speaker": "Cliente",
            "fr": "C'est cher. Et cette robe ?",
            "en": "That's expensive. And this dress?"
          },
          {
            "speaker": "Vendeur",
            "fr": "Trente euros seulement.",
            "en": "Only thirty euros."
          }
        ],
        "vocabulary": [
          {
            "fr": "Combien",
            "en": "How much"
          },
          {
            "fr": "Ce pull",
            "en": "This sweater"
          },
          {
            "fr": "Cette robe",
            "en": "This dress"
          },
          {
            "fr": "Cher",
            "en": "Expensive"
          },
          {
            "fr": "Pas cher",
            "en": "Cheap"
          },
          {
            "fr": "Euros",
            "en": "Euros"
          }
        ],
        "grammar": {
          "title": "Les adjectifs démonstratifs + l'interrogation avec combien, comment",
          "explanation": "Demonstratives agree with the noun: ce, cet, cette, ces.",
          "rules": [
            "ce pull / cet homme / cette robe / ces livres",
            "Combien ça coûte ?"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'This dress' →",
            "options": [
              "ce robe",
              "cette robe",
              "cet robe",
              "ces robe"
            ],
            "correct": "cette robe"
          },
          {
            "type": "fill-blank",
            "question": "___ coûte ce pull ?",
            "blank": "Combien"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'These shoes.'",
            "tokens": [
              "chaussures",
              "ces",
              "cette",
              "les"
            ],
            "correctOrder": [
              "ces",
              "chaussures"
            ]
          }
        ]
      },
      {
        "lessonId": 8,
        "lessonTitle": "Leçon 8 : Le coin des artistes",
        "focus": "Montrer et situer des personnes.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Qui est cet homme ?",
            "en": "Who is this man?"
          },
          {
            "speaker": "Tom",
            "fr": "Lui, c'est un peintre célèbre.",
            "en": "Him, he's a famous painter."
          },
          {
            "speaker": "Léa",
            "fr": "Et elles, là-bas ?",
            "en": "And them, over there?"
          },
          {
            "speaker": "Tom",
            "fr": "Ce sont des artistes italiennes.",
            "en": "They are Italian artists."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un peintre",
            "en": "A painter"
          },
          {
            "fr": "Célèbre",
            "en": "Famous"
          },
          {
            "fr": "Là-bas",
            "en": "Over there"
          },
          {
            "fr": "Un artiste",
            "en": "An artist"
          },
          {
            "fr": "Ici",
            "en": "Here"
          },
          {
            "fr": "Une exposition",
            "en": "An exhibition"
          }
        ],
        "grammar": {
          "title": "Les pronoms toniques (moi, toi, lui, elle, nous, vous, eux, elles)",
          "explanation": "Stressed pronouns highlight or replace people after prepositions.",
          "rules": [
            "moi / toi / lui / elle",
            "nous / vous / eux / elles"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Stressed pronoun for 'they' (m) →",
            "options": [
              "ils",
              "leur",
              "eux",
              "les"
            ],
            "correct": "eux"
          },
          {
            "type": "fill-blank",
            "question": "___, je suis Léa.",
            "blank": "Moi"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'It's me.'",
            "tokens": [
              "C'",
              "est",
              "moi",
              "je"
            ],
            "correctOrder": [
              "C'",
              "est",
              "moi"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 3,
    "unitTitle": "Unité 3 : Ça se trouve où ?",
    "lessons": [
      {
        "lessonId": 9,
        "lessonTitle": "Leçon 9 : Appartement à louer",
        "focus": "Décrire un appartement, comprendre une annonce.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Allô, je cherche un appartement à louer.",
            "en": "Hello, I'm looking for an apartment to rent."
          },
          {
            "speaker": "Agent",
            "fr": "Il y a deux chambres et une cuisine équipée.",
            "en": "There are two bedrooms and an equipped kitchen."
          },
          {
            "speaker": "Léa",
            "fr": "Combien de mètres carrés ?",
            "en": "How many square meters?"
          },
          {
            "speaker": "Agent",
            "fr": "Cinquante-cinq mètres carrés.",
            "en": "Fifty-five square meters."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un appartement",
            "en": "An apartment"
          },
          {
            "fr": "Une chambre",
            "en": "A bedroom"
          },
          {
            "fr": "La cuisine",
            "en": "The kitchen"
          },
          {
            "fr": "Le salon",
            "en": "The living room"
          },
          {
            "fr": "La salle de bains",
            "en": "The bathroom"
          },
          {
            "fr": "Louer",
            "en": "To rent"
          }
        ],
        "grammar": {
          "title": "Les prépositions + nom de lieu, l'interrogation avec où",
          "explanation": "Use 'à' for cities and 'en/au/aux' for countries.",
          "rules": [
            "à Paris",
            "en France (f)",
            "au Japon (m)",
            "aux États-Unis (pl)"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'In Japan' →",
            "options": [
              "en Japon",
              "au Japon",
              "à Japon",
              "aux Japon"
            ],
            "correct": "au Japon"
          },
          {
            "type": "fill-blank",
            "question": "J'habite ___ Paris.",
            "blank": "à"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'Two bedrooms.'",
            "tokens": [
              "chambres",
              "deux",
              "une",
              "chambre"
            ],
            "correctOrder": [
              "deux",
              "chambres"
            ]
          }
        ]
      },
      {
        "lessonId": 10,
        "lessonTitle": "Leçon 10 : C'est par où ?",
        "focus": "Demander son chemin, indiquer une direction.",
        "dialogue": [
          {
            "speaker": "Touriste",
            "fr": "Excusez-moi, où est la gare ?",
            "en": "Excuse me, where is the station?"
          },
          {
            "speaker": "Passant",
            "fr": "Allez tout droit, puis tournez à gauche.",
            "en": "Go straight, then turn left."
          },
          {
            "speaker": "Touriste",
            "fr": "C'est loin ?",
            "en": "Is it far?"
          },
          {
            "speaker": "Passant",
            "fr": "Non, prenez la deuxième rue à droite.",
            "en": "No, take the second street on the right."
          }
        ],
        "vocabulary": [
          {
            "fr": "La gare",
            "en": "The station"
          },
          {
            "fr": "Tout droit",
            "en": "Straight ahead"
          },
          {
            "fr": "À gauche",
            "en": "To the left"
          },
          {
            "fr": "À droite",
            "en": "To the right"
          },
          {
            "fr": "La rue",
            "en": "The street"
          },
          {
            "fr": "Loin",
            "en": "Far"
          }
        ],
        "grammar": {
          "title": "L'impératif + prendre au présent + articles contractés",
          "explanation": "Form the imperative with the 'tu/vous/nous' present tense form (drop -s for -er tu).",
          "rules": [
            "Va ! Allez ! Allons !",
            "prendre: je prends, tu prends, il prend",
            "à + le = au, à + les = aux"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Go straight' (vous) →",
            "options": [
              "Va tout droit",
              "Allez tout droit",
              "Aller tout droit",
              "Allons tout droit"
            ],
            "correct": "Allez tout droit"
          },
          {
            "type": "fill-blank",
            "question": "Tournez ___ gauche.",
            "blank": "à"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'Take the street.'",
            "tokens": [
              "rue",
              "Prenez",
              "la",
              "Prends"
            ],
            "correctOrder": [
              "Prenez",
              "la",
              "rue"
            ]
          }
        ]
      },
      {
        "lessonId": 11,
        "lessonTitle": "Leçon 11 : Bon voyage !",
        "focus": "Situer un lieu sur une carte, donner un conseil.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "On va à Marseille en train ?",
            "en": "Shall we go to Marseille by train?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, c'est rapide. On part quand ?",
            "en": "Yes, it's fast. When do we leave?"
          },
          {
            "speaker": "Léa",
            "fr": "Samedi matin. Prends ton billet !",
            "en": "Saturday morning. Get your ticket!"
          },
          {
            "speaker": "Tom",
            "fr": "D'accord, je le prends ce soir.",
            "en": "Okay, I'll get it tonight."
          }
        ],
        "vocabulary": [
          {
            "fr": "En train",
            "en": "By train"
          },
          {
            "fr": "En avion",
            "en": "By plane"
          },
          {
            "fr": "En voiture",
            "en": "By car"
          },
          {
            "fr": "Un billet",
            "en": "A ticket"
          },
          {
            "fr": "Partir",
            "en": "To leave"
          },
          {
            "fr": "Rapide",
            "en": "Fast"
          }
        ],
        "grammar": {
          "title": "C'est + lieu/adjectif, les moyens de transport, le pronom on",
          "explanation": "'On' means 'we/one/people' and takes the same form as 'il/elle'.",
          "rules": [
            "On va = nous allons",
            "en + transport (en bus)",
            "à + pied/vélo"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'By plane' →",
            "options": [
              "à avion",
              "en avion",
              "au avion",
              "sur avion"
            ],
            "correct": "en avion"
          },
          {
            "type": "fill-blank",
            "question": "___ part samedi.",
            "blank": "On"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'It's fast.'",
            "tokens": [
              "est",
              "C'",
              "rapide",
              "vite"
            ],
            "correctOrder": [
              "C'",
              "est",
              "rapide"
            ]
          }
        ]
      },
      {
        "lessonId": 12,
        "lessonTitle": "Leçon 12 : Marseille",
        "focus": "Décrire un lieu, présenter des informations touristiques.",
        "dialogue": [
          {
            "speaker": "Guide",
            "fr": "Marseille est une grande ville du sud.",
            "en": "Marseille is a big city in the south."
          },
          {
            "speaker": "Léa",
            "fr": "Qu'est-ce qu'il y a à visiter ?",
            "en": "What is there to visit?"
          },
          {
            "speaker": "Guide",
            "fr": "Le Vieux-Port et la basilique Notre-Dame-de-la-Garde.",
            "en": "The Old Port and the Notre-Dame-de-la-Garde basilica."
          },
          {
            "speaker": "Léa",
            "fr": "Génial !",
            "en": "Awesome!"
          }
        ],
        "vocabulary": [
          {
            "fr": "Une ville",
            "en": "A city"
          },
          {
            "fr": "Le sud",
            "en": "The south"
          },
          {
            "fr": "Le nord",
            "en": "The north"
          },
          {
            "fr": "Visiter",
            "en": "To visit"
          },
          {
            "fr": "Un port",
            "en": "A harbor"
          },
          {
            "fr": "Génial",
            "en": "Great"
          }
        ],
        "grammar": {
          "title": "Qu'est-ce qu'il y a + accord des adjectifs",
          "explanation": "Use 'il y a' to describe what exists in a place.",
          "rules": [
            "il y a + nom",
            "grand → grande",
            "petit → petite"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'A big city' →",
            "options": [
              "un grand ville",
              "une grand ville",
              "une grande ville",
              "un grande ville"
            ],
            "correct": "une grande ville"
          },
          {
            "type": "fill-blank",
            "question": "Qu'est-ce qu'il ___ à visiter ?",
            "blank": "y a"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'The Old Port.'",
            "tokens": [
              "Port",
              "le",
              "Vieux",
              "-"
            ],
            "correctOrder": [
              "le",
              "Vieux",
              "-",
              "Port"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 4,
    "unitTitle": "Unité 4 : Au rythme du temps",
    "lessons": [
      {
        "lessonId": 13,
        "lessonTitle": "Leçon 13 : Un aller simple",
        "focus": "Demander et donner l'heure, indiquer une date.",
        "dialogue": [
          {
            "speaker": "Client",
            "fr": "Un aller simple pour Lyon, s'il vous plaît.",
            "en": "A one-way ticket to Lyon, please."
          },
          {
            "speaker": "Agent",
            "fr": "À quelle heure partez-vous ?",
            "en": "At what time are you leaving?"
          },
          {
            "speaker": "Client",
            "fr": "À neuf heures trente.",
            "en": "At nine thirty."
          },
          {
            "speaker": "Agent",
            "fr": "Voici votre billet.",
            "en": "Here is your ticket."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un aller simple",
            "en": "A one-way"
          },
          {
            "fr": "Un aller-retour",
            "en": "A round-trip"
          },
          {
            "fr": "Quelle heure",
            "en": "What time"
          },
          {
            "fr": "À neuf heures",
            "en": "At nine"
          },
          {
            "fr": "S'il vous plaît",
            "en": "Please"
          },
          {
            "fr": "Partir",
            "en": "To leave"
          }
        ],
        "grammar": {
          "title": "Partir au présent + l'interrogation avec quand, quelle heure",
          "explanation": "Verbs like 'partir' drop the consonant in the singular.",
          "rules": [
            "je pars / tu pars / il part",
            "nous partons / vous partez / ils partent",
            "Quand ? À quelle heure ?"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'You leave (vous)' →",
            "options": [
              "partez",
              "partons",
              "partent",
              "pars"
            ],
            "correct": "partez"
          },
          {
            "type": "fill-blank",
            "question": "Je ___ à Lyon.",
            "blank": "pars"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'At ten o'clock.'",
            "tokens": [
              "heures",
              "À",
              "dix",
              "heure"
            ],
            "correctOrder": [
              "À",
              "dix",
              "heures"
            ]
          }
        ]
      },
      {
        "lessonId": 14,
        "lessonTitle": "Leçon 14 : À Londres",
        "focus": "Demander la profession, situer dans le temps.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Qu'est-ce que tu fais à Londres ?",
            "en": "What are you doing in London?"
          },
          {
            "speaker": "Tom",
            "fr": "Je suis journaliste.",
            "en": "I'm a journalist."
          },
          {
            "speaker": "Léa",
            "fr": "Tu travailles le week-end ?",
            "en": "Do you work on weekends?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, parfois.",
            "en": "Yes, sometimes."
          }
        ],
        "vocabulary": [
          {
            "fr": "Journaliste",
            "en": "Journalist"
          },
          {
            "fr": "Médecin",
            "en": "Doctor"
          },
          {
            "fr": "Professeur",
            "en": "Teacher"
          },
          {
            "fr": "Travailler",
            "en": "To work"
          },
          {
            "fr": "Le week-end",
            "en": "The weekend"
          },
          {
            "fr": "Parfois",
            "en": "Sometimes"
          }
        ],
        "grammar": {
          "title": "Faire au présent + est-ce que / qu'est-ce que",
          "explanation": "Use 'est-ce que' to form yes/no questions and 'qu'est-ce que' for 'what'.",
          "rules": [
            "je fais / tu fais / il fait",
            "nous faisons / vous faites / ils font",
            "Est-ce que tu travailles ?"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'They make' →",
            "options": [
              "fait",
              "font",
              "faites",
              "faisons"
            ],
            "correct": "font"
          },
          {
            "type": "fill-blank",
            "question": "___-ce que tu travailles ?",
            "blank": "Est"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I am a doctor.'",
            "tokens": [
              "médecin",
              "suis",
              "Je",
              "un"
            ],
            "correctOrder": [
              "Je",
              "suis",
              "médecin"
            ]
          }
        ]
      },
      {
        "lessonId": 15,
        "lessonTitle": "Leçon 15 : Le dimanche matin",
        "focus": "S'informer sur une activité habituelle, dire quel sport on fait.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Qu'est-ce que tu fais le dimanche matin ?",
            "en": "What do you do on Sunday mornings?"
          },
          {
            "speaker": "Tom",
            "fr": "Je fais du jogging au parc.",
            "en": "I go jogging in the park."
          },
          {
            "speaker": "Léa",
            "fr": "Et l'après-midi ?",
            "en": "And in the afternoon?"
          },
          {
            "speaker": "Tom",
            "fr": "Je joue au tennis avec un ami.",
            "en": "I play tennis with a friend."
          }
        ],
        "vocabulary": [
          {
            "fr": "Le dimanche",
            "en": "Sunday"
          },
          {
            "fr": "Le matin",
            "en": "The morning"
          },
          {
            "fr": "Faire du sport",
            "en": "To play sport"
          },
          {
            "fr": "Jouer au tennis",
            "en": "To play tennis"
          },
          {
            "fr": "Un parc",
            "en": "A park"
          },
          {
            "fr": "Un ami",
            "en": "A friend"
          }
        ],
        "grammar": {
          "title": "Faire de / jouer à + sport — verbes pronominaux",
          "explanation": "Use 'faire de' for activities and 'jouer à' for ball games.",
          "rules": [
            "faire du tennis / de la natation / des arts martiaux",
            "jouer au foot / à la pétanque",
            "je me lève, tu te lèves"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I play soccer' →",
            "options": [
              "Je joue à foot",
              "Je joue au foot",
              "Je fais le foot",
              "Je joue le foot"
            ],
            "correct": "Je joue au foot"
          },
          {
            "type": "fill-blank",
            "question": "Je fais ___ jogging.",
            "blank": "du"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'She plays tennis.'",
            "tokens": [
              "tennis",
              "joue",
              "Elle",
              "au"
            ],
            "correctOrder": [
              "Elle",
              "joue",
              "au",
              "tennis"
            ]
          }
        ]
      },
      {
        "lessonId": 16,
        "lessonTitle": "Leçon 16 : Une journée avec Laure Manaudou",
        "focus": "Parler des activités quotidiennes.",
        "dialogue": [
          {
            "speaker": "Journaliste",
            "fr": "À quelle heure vous levez-vous ?",
            "en": "What time do you get up?"
          },
          {
            "speaker": "Laure",
            "fr": "Je me lève à six heures.",
            "en": "I get up at six."
          },
          {
            "speaker": "Journaliste",
            "fr": "Et après ?",
            "en": "And after?"
          },
          {
            "speaker": "Laure",
            "fr": "Je m'entraîne, puis je prends le petit-déjeuner.",
            "en": "I train, then I have breakfast."
          }
        ],
        "vocabulary": [
          {
            "fr": "Se lever",
            "en": "To get up"
          },
          {
            "fr": "S'entraîner",
            "en": "To train"
          },
          {
            "fr": "Le petit-déjeuner",
            "en": "Breakfast"
          },
          {
            "fr": "Se coucher",
            "en": "To go to bed"
          },
          {
            "fr": "Prendre une douche",
            "en": "To take a shower"
          },
          {
            "fr": "Tôt",
            "en": "Early"
          }
        ],
        "grammar": {
          "title": "Les verbes pronominaux + lire et écrire au présent",
          "explanation": "Pronominal verbs use 'me, te, se, nous, vous, se' before the verb.",
          "rules": [
            "je me lève / tu te lèves / il se lève",
            "je lis / tu lis / il lit",
            "j'écris / tu écris / il écrit"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'We get up' →",
            "options": [
              "nous lever",
              "nous nous levons",
              "nous levons",
              "on se lever"
            ],
            "correct": "nous nous levons"
          },
          {
            "type": "fill-blank",
            "question": "Je ___ couche tard.",
            "blank": "me"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I read a book.'",
            "tokens": [
              "livre",
              "Je",
              "un",
              "lis"
            ],
            "correctOrder": [
              "Je",
              "lis",
              "un",
              "livre"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 5,
    "unitTitle": "Unité 5 : La vie de tous les jours",
    "lessons": [
      {
        "lessonId": 17,
        "lessonTitle": "Leçon 17 : On fait des crêpes ?",
        "focus": "Demander, exprimer des besoins, indiquer des quantités.",
        "dialogue": [
          {
            "speaker": "Hugo",
            "fr": "On fait des crêpes ce soir ?",
            "en": "Shall we make pancakes tonight?"
          },
          {
            "speaker": "Alice",
            "fr": "D'accord, il faut de la farine et des œufs.",
            "en": "Okay, we need flour and eggs."
          },
          {
            "speaker": "Hugo",
            "fr": "Combien de lait ?",
            "en": "How much milk?"
          },
          {
            "speaker": "Alice",
            "fr": "Un demi-litre de lait.",
            "en": "Half a liter of milk."
          }
        ],
        "vocabulary": [
          {
            "fr": "La farine",
            "en": "Flour"
          },
          {
            "fr": "Les œufs",
            "en": "Eggs"
          },
          {
            "fr": "Le lait",
            "en": "Milk"
          },
          {
            "fr": "Le sucre",
            "en": "Sugar"
          },
          {
            "fr": "Il faut",
            "en": "It is needed"
          },
          {
            "fr": "Un kilo",
            "en": "A kilo"
          }
        ],
        "grammar": {
          "title": "Les articles partitifs + boire, acheter, manger",
          "explanation": "Use du, de la, de l', des for unspecified quantities. After negation: 'de'.",
          "rules": [
            "du sucre, de la farine, de l'eau, des œufs",
            "je bois / j'achète / je mange",
            "pas de sucre"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Partitive for masculine 'sucre' →",
            "options": [
              "de la",
              "du",
              "des",
              "une"
            ],
            "correct": "du"
          },
          {
            "type": "fill-blank",
            "question": "Il faut ___ farine.",
            "blank": "de la"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'Six eggs.'",
            "tokens": [
              "lait",
              "œufs",
              "six",
              "un"
            ],
            "correctOrder": [
              "six",
              "œufs"
            ]
          }
        ]
      },
      {
        "lessonId": 18,
        "lessonTitle": "Leçon 18 : Il est comment ?",
        "focus": "Rapporter des événements passés, exprimer une opinion.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Tu as vu le film hier ?",
            "en": "Did you see the movie yesterday?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, j'ai adoré !",
            "en": "Yes, I loved it!"
          },
          {
            "speaker": "Léa",
            "fr": "Il est comment ?",
            "en": "How is it?"
          },
          {
            "speaker": "Tom",
            "fr": "Très beau et très drôle.",
            "en": "Very beautiful and very funny."
          }
        ],
        "vocabulary": [
          {
            "fr": "Hier",
            "en": "Yesterday"
          },
          {
            "fr": "Un film",
            "en": "A movie"
          },
          {
            "fr": "Voir",
            "en": "To see"
          },
          {
            "fr": "Drôle",
            "en": "Funny"
          },
          {
            "fr": "Beau",
            "en": "Beautiful"
          },
          {
            "fr": "Adorer",
            "en": "To love"
          }
        ],
        "grammar": {
          "title": "Le passé composé avec avoir + l'adjectif beau",
          "explanation": "Past tense uses 'avoir' + past participle. -er verbs: -é.",
          "rules": [
            "j'ai mangé / tu as vu / il a fait",
            "beau → belle → beaux → belles",
            "beau homme → bel homme"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I saw' →",
            "options": [
              "j'ai vu",
              "je vois",
              "j'ai voir",
              "je voyais"
            ],
            "correct": "j'ai vu"
          },
          {
            "type": "fill-blank",
            "question": "Tu ___ mangé ?",
            "blank": "as"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I loved the movie.'",
            "tokens": [
              "film",
              "J'",
              "adoré",
              "le",
              "ai"
            ],
            "correctOrder": [
              "J'",
              "ai",
              "adoré",
              "le",
              "film"
            ]
          }
        ]
      },
      {
        "lessonId": 19,
        "lessonTitle": "Leçon 19 : Chère Léa...",
        "focus": "Parler d'événements passés, interroger sur la durée.",
        "dialogue": [
          {
            "speaker": "Tom",
            "fr": "Chère Léa, je suis arrivé à Rome lundi.",
            "en": "Dear Léa, I arrived in Rome on Monday."
          },
          {
            "speaker": "Léa",
            "fr": "Tu es resté combien de temps ?",
            "en": "How long did you stay?"
          },
          {
            "speaker": "Tom",
            "fr": "Je suis resté une semaine.",
            "en": "I stayed a week."
          },
          {
            "speaker": "Léa",
            "fr": "Super !",
            "en": "Great!"
          }
        ],
        "vocabulary": [
          {
            "fr": "Arriver",
            "en": "To arrive"
          },
          {
            "fr": "Rester",
            "en": "To stay"
          },
          {
            "fr": "Partir",
            "en": "To leave"
          },
          {
            "fr": "Lundi",
            "en": "Monday"
          },
          {
            "fr": "Une semaine",
            "en": "A week"
          },
          {
            "fr": "Combien de temps",
            "en": "How long"
          }
        ],
        "grammar": {
          "title": "Le passé composé avec être",
          "explanation": "Verbs of movement (arriver, partir, venir, aller, rester...) use 'être'. Participle agrees.",
          "rules": [
            "je suis allé(e) / tu es venu(e) / il est parti",
            "elle est restée / ils sont arrivés",
            "DR & MRS VANDERTRAMP verbs"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'She left' →",
            "options": [
              "elle a parti",
              "elle est partie",
              "elle est parti",
              "elle a partie"
            ],
            "correct": "elle est partie"
          },
          {
            "type": "fill-blank",
            "question": "Je ___ allé à Rome.",
            "blank": "suis"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'We arrived Monday.'",
            "tokens": [
              "arrivés",
              "lundi",
              "Nous",
              "sommes"
            ],
            "correctOrder": [
              "Nous",
              "sommes",
              "arrivés",
              "lundi"
            ]
          }
        ]
      },
      {
        "lessonId": 20,
        "lessonTitle": "Leçon 20 : Les fêtes",
        "focus": "Comprendre des souvenirs, évoquer des fêtes.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Tu fais quoi pour Noël ?",
            "en": "What do you do for Christmas?"
          },
          {
            "speaker": "Tom",
            "fr": "On mange en famille et on offre des cadeaux.",
            "en": "We eat as a family and give gifts."
          },
          {
            "speaker": "Léa",
            "fr": "Et le 14 juillet ?",
            "en": "And the 14th of July?"
          },
          {
            "speaker": "Tom",
            "fr": "On regarde le feu d'artifice.",
            "en": "We watch the fireworks."
          }
        ],
        "vocabulary": [
          {
            "fr": "Noël",
            "en": "Christmas"
          },
          {
            "fr": "Un cadeau",
            "en": "A gift"
          },
          {
            "fr": "La famille",
            "en": "Family"
          },
          {
            "fr": "Le 14 juillet",
            "en": "Bastille Day"
          },
          {
            "fr": "Un feu d'artifice",
            "en": "Fireworks"
          },
          {
            "fr": "Offrir",
            "en": "To give"
          }
        ],
        "grammar": {
          "title": "Pour + durée future + offrir au présent",
          "explanation": "Use 'pour' to express duration looking ahead.",
          "rules": [
            "Je pars pour deux jours",
            "j'offre / tu offres / il offre"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Christmas' →",
            "options": [
              "Pâques",
              "Noël",
              "Toussaint",
              "Saint-Valentin"
            ],
            "correct": "Noël"
          },
          {
            "type": "fill-blank",
            "question": "On ___ des cadeaux.",
            "blank": "offre"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'For two weeks.'",
            "tokens": [
              "semaines",
              "Pour",
              "deux",
              "pendant"
            ],
            "correctOrder": [
              "Pour",
              "deux",
              "semaines"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 6,
    "unitTitle": "Unité 6 : Vivre avec les autres",
    "lessons": [
      {
        "lessonId": 21,
        "lessonTitle": "Leçon 21 : C'est interdit !",
        "focus": "Demander, donner et refuser une permission.",
        "dialogue": [
          {
            "speaker": "Tom",
            "fr": "Je peux fumer ici ?",
            "en": "Can I smoke here?"
          },
          {
            "speaker": "Léa",
            "fr": "Non, c'est interdit !",
            "en": "No, it's forbidden!"
          },
          {
            "speaker": "Tom",
            "fr": "Et là-bas, dehors ?",
            "en": "And over there, outside?"
          },
          {
            "speaker": "Léa",
            "fr": "Oui, là tu peux.",
            "en": "Yes, there you can."
          }
        ],
        "vocabulary": [
          {
            "fr": "Pouvoir",
            "en": "Can / To be able to"
          },
          {
            "fr": "Interdit",
            "en": "Forbidden"
          },
          {
            "fr": "Permis",
            "en": "Allowed"
          },
          {
            "fr": "Fumer",
            "en": "To smoke"
          },
          {
            "fr": "Dehors",
            "en": "Outside"
          },
          {
            "fr": "Ici",
            "en": "Here"
          }
        ],
        "grammar": {
          "title": "Pouvoir au présent + la négation de l'impératif",
          "explanation": "Use 'pouvoir' for ability or permission. Negative imperative: ne ... pas.",
          "rules": [
            "je peux / tu peux / il peut",
            "nous pouvons / vous pouvez / ils peuvent",
            "Ne fume pas !"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Can I?' →",
            "options": [
              "Je peux ?",
              "Je peut ?",
              "Je pouvoir ?",
              "Je peuvent ?"
            ],
            "correct": "Je peux ?"
          },
          {
            "type": "fill-blank",
            "question": "Ne ___ pas !",
            "blank": "fume"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'You can stay.'",
            "tokens": [
              "rester",
              "Tu",
              "peux",
              "peut"
            ],
            "correctOrder": [
              "Tu",
              "peux",
              "rester"
            ]
          }
        ]
      },
      {
        "lessonId": 22,
        "lessonTitle": "Leçon 22 : Petites annonces",
        "focus": "Exprimer la possibilité, le savoir-faire, l'obligation.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Je cherche un travail. Tu sais où ?",
            "en": "I'm looking for a job. Do you know where?"
          },
          {
            "speaker": "Tom",
            "fr": "Il faut regarder les petites annonces.",
            "en": "You have to look at the classifieds."
          },
          {
            "speaker": "Léa",
            "fr": "Je veux un poste à temps partiel.",
            "en": "I want a part-time position."
          },
          {
            "speaker": "Tom",
            "fr": "Tu sais parler anglais ?",
            "en": "Do you speak English?"
          }
        ],
        "vocabulary": [
          {
            "fr": "Un travail",
            "en": "A job"
          },
          {
            "fr": "Une annonce",
            "en": "An ad"
          },
          {
            "fr": "Un poste",
            "en": "A position"
          },
          {
            "fr": "Vouloir",
            "en": "To want"
          },
          {
            "fr": "Savoir",
            "en": "To know how"
          },
          {
            "fr": "Il faut",
            "en": "One must"
          }
        ],
        "grammar": {
          "title": "Vouloir, savoir au présent + il faut + infinitif",
          "explanation": "Use 'savoir + infinitive' for know-how. 'Il faut' is impersonal.",
          "rules": [
            "je veux / tu veux / il veut",
            "je sais / tu sais / il sait",
            "il faut travailler"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I want' →",
            "options": [
              "je veux",
              "je veut",
              "je voulu",
              "je vouloir"
            ],
            "correct": "je veux"
          },
          {
            "type": "fill-blank",
            "question": "Il ___ regarder les annonces.",
            "blank": "faut"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I know how to swim.'",
            "tokens": [
              "nager",
              "Je",
              "sais",
              "peux"
            ],
            "correctOrder": [
              "Je",
              "sais",
              "nager"
            ]
          }
        ]
      },
      {
        "lessonId": 23,
        "lessonTitle": "Leçon 23 : Qu'est-ce qu'on lui offre ?",
        "focus": "Faire, accepter et refuser des propositions.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "C'est l'anniversaire de Paul. Qu'est-ce qu'on lui offre ?",
            "en": "It's Paul's birthday. What do we get him?"
          },
          {
            "speaker": "Tom",
            "fr": "On lui offre un livre ?",
            "en": "Shall we give him a book?"
          },
          {
            "speaker": "Léa",
            "fr": "Bonne idée ! Je le connais bien.",
            "en": "Good idea! I know him well."
          },
          {
            "speaker": "Tom",
            "fr": "On l'achète ce soir.",
            "en": "We'll buy it tonight."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un anniversaire",
            "en": "A birthday"
          },
          {
            "fr": "Offrir",
            "en": "To give"
          },
          {
            "fr": "Un livre",
            "en": "A book"
          },
          {
            "fr": "Connaître",
            "en": "To know"
          },
          {
            "fr": "Bonne idée",
            "en": "Good idea"
          },
          {
            "fr": "Acheter",
            "en": "To buy"
          }
        ],
        "grammar": {
          "title": "Connaître au présent + pronoms COD/COI (le, la, les / lui, leur)",
          "explanation": "Direct object pronouns replace things; indirect object pronouns replace 'à + person'.",
          "rules": [
            "COD: le, la, l', les",
            "COI: lui, leur",
            "Je connais Paul → Je le connais"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'We give him a book' →",
            "options": [
              "On le offre un livre",
              "On lui offre un livre",
              "On la offre un livre",
              "On leur offre un livre"
            ],
            "correct": "On lui offre un livre"
          },
          {
            "type": "fill-blank",
            "question": "Je ___ connais bien (him).",
            "blank": "le"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I know them.'",
            "tokens": [
              "connais",
              "Je",
              "les",
              "leur"
            ],
            "correctOrder": [
              "Je",
              "les",
              "connais"
            ]
          }
        ]
      },
      {
        "lessonId": 24,
        "lessonTitle": "Leçon 24 : Le candidat idéal...",
        "focus": "Comprendre des conseils, se présenter dans un cadre professionnel.",
        "dialogue": [
          {
            "speaker": "RH",
            "fr": "Vous allez passer un entretien.",
            "en": "You're going to have an interview."
          },
          {
            "speaker": "Tom",
            "fr": "D'accord, je vais me préparer.",
            "en": "Okay, I'll prepare myself."
          },
          {
            "speaker": "RH",
            "fr": "Il faut être à l'heure et souriant.",
            "en": "You must be on time and smiling."
          },
          {
            "speaker": "Tom",
            "fr": "Merci pour vos conseils.",
            "en": "Thanks for your advice."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un entretien",
            "en": "An interview"
          },
          {
            "fr": "Un candidat",
            "en": "A candidate"
          },
          {
            "fr": "Un conseil",
            "en": "Advice"
          },
          {
            "fr": "À l'heure",
            "en": "On time"
          },
          {
            "fr": "Souriant",
            "en": "Smiling"
          },
          {
            "fr": "Se préparer",
            "en": "To get ready"
          }
        ],
        "grammar": {
          "title": "Le futur proche : aller + infinitif",
          "explanation": "Express the near future with 'aller' in present + infinitive.",
          "rules": [
            "je vais manger",
            "tu vas partir",
            "il va arriver"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I'm going to eat' →",
            "options": [
              "je mange",
              "je vais manger",
              "je mangerai",
              "j'ai mangé"
            ],
            "correct": "je vais manger"
          },
          {
            "type": "fill-blank",
            "question": "Tu ___ partir demain.",
            "blank": "vas"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'We're going to win.'",
            "tokens": [
              "gagner",
              "Nous",
              "allons",
              "vais"
            ],
            "correctOrder": [
              "Nous",
              "allons",
              "gagner"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 7,
    "unitTitle": "Unité 7 : Un peu, beaucoup, passionnément...",
    "lessons": [
      {
        "lessonId": 25,
        "lessonTitle": "Leçon 25 : Enquête",
        "focus": "Exprimer des goûts, la fréquence et l'intensité.",
        "dialogue": [
          {
            "speaker": "Sondeur",
            "fr": "Vous regardez souvent la télé ?",
            "en": "Do you often watch TV?"
          },
          {
            "speaker": "Tom",
            "fr": "Non, je regarde peu la télé.",
            "en": "No, I don't watch much TV."
          },
          {
            "speaker": "Sondeur",
            "fr": "Et la radio ?",
            "en": "And the radio?"
          },
          {
            "speaker": "Tom",
            "fr": "J'en écoute beaucoup le matin.",
            "en": "I listen to it a lot in the morning."
          }
        ],
        "vocabulary": [
          {
            "fr": "Souvent",
            "en": "Often"
          },
          {
            "fr": "Toujours",
            "en": "Always"
          },
          {
            "fr": "Jamais",
            "en": "Never"
          },
          {
            "fr": "Beaucoup",
            "en": "A lot"
          },
          {
            "fr": "Peu",
            "en": "Little"
          },
          {
            "fr": "La radio",
            "en": "The radio"
          }
        ],
        "grammar": {
          "title": "Le pronom en + ne ... plus / la fréquence",
          "explanation": "'En' replaces 'de + something'. Position before the verb.",
          "rules": [
            "J'ai du pain → J'en ai",
            "Je ne fume plus",
            "souvent, parfois, jamais"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I have some' →",
            "options": [
              "Je ai",
              "J'en ai",
              "J'ai en",
              "Je en ai"
            ],
            "correct": "J'en ai"
          },
          {
            "type": "fill-blank",
            "question": "Je ne fume ___ .",
            "blank": "plus"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I want some.'",
            "tokens": [
              "en",
              "Je",
              "veux",
              "ai"
            ],
            "correctOrder": [
              "Je",
              "en",
              "veux"
            ]
          }
        ]
      },
      {
        "lessonId": 26,
        "lessonTitle": "Leçon 26 : Quitter Paris",
        "focus": "Demander et exprimer une opinion, contester.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Pourquoi tu veux quitter Paris ?",
            "en": "Why do you want to leave Paris?"
          },
          {
            "speaker": "Tom",
            "fr": "Parce que c'est trop bruyant.",
            "en": "Because it's too noisy."
          },
          {
            "speaker": "Léa",
            "fr": "Et il y a trop de monde !",
            "en": "And there are too many people!"
          },
          {
            "speaker": "Tom",
            "fr": "Exactement.",
            "en": "Exactly."
          }
        ],
        "vocabulary": [
          {
            "fr": "Quitter",
            "en": "To leave"
          },
          {
            "fr": "Pourquoi",
            "en": "Why"
          },
          {
            "fr": "Parce que",
            "en": "Because"
          },
          {
            "fr": "Bruyant",
            "en": "Noisy"
          },
          {
            "fr": "Trop",
            "en": "Too / Too much"
          },
          {
            "fr": "Du monde",
            "en": "People"
          }
        ],
        "grammar": {
          "title": "Pourquoi / parce que + trop/assez (+ de)",
          "explanation": "Use 'trop' and 'assez' before adjectives, 'trop de/assez de' before nouns.",
          "rules": [
            "trop cher / assez grand",
            "trop de bruit / assez de place"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Too noisy' →",
            "options": [
              "trop de bruyant",
              "trop bruyant",
              "assez bruyant",
              "trop des bruyant"
            ],
            "correct": "trop bruyant"
          },
          {
            "type": "fill-blank",
            "question": "___ tu pars ? — Parce que c'est tard.",
            "blank": "Pourquoi"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'Too many people.'",
            "tokens": [
              "monde",
              "Trop",
              "de",
              "du"
            ],
            "correctOrder": [
              "Trop",
              "de",
              "monde"
            ]
          }
        ]
      },
      {
        "lessonId": 27,
        "lessonTitle": "Leçon 27 : Vivement les vacances !",
        "focus": "Exprimer des goûts, donner des conseils.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Tu pars où en vacances ?",
            "en": "Where are you going on vacation?"
          },
          {
            "speaker": "Tom",
            "fr": "Je préfère la mer.",
            "en": "I prefer the sea."
          },
          {
            "speaker": "Léa",
            "fr": "Va en Corse, c'est magnifique !",
            "en": "Go to Corsica, it's magnificent!"
          },
          {
            "speaker": "Tom",
            "fr": "Bonne idée, je vais réserver.",
            "en": "Good idea, I'm going to book."
          }
        ],
        "vocabulary": [
          {
            "fr": "Les vacances",
            "en": "The holidays"
          },
          {
            "fr": "La mer",
            "en": "The sea"
          },
          {
            "fr": "La montagne",
            "en": "The mountains"
          },
          {
            "fr": "Préférer",
            "en": "To prefer"
          },
          {
            "fr": "Réserver",
            "en": "To book"
          },
          {
            "fr": "Magnifique",
            "en": "Magnificent"
          }
        ],
        "grammar": {
          "title": "Les verbes pronominaux au passé composé + place du pronom à l'impératif",
          "explanation": "Pronominal verbs use 'être' in passé composé. With imperative affirmative, pronoun follows.",
          "rules": [
            "Je me suis levé(e)",
            "Lève-toi !",
            "Ne te lève pas !"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I got up' →",
            "options": [
              "je me lève",
              "je suis levé",
              "je me suis levé",
              "j'ai levé"
            ],
            "correct": "je me suis levé"
          },
          {
            "type": "fill-blank",
            "question": "___-toi tôt !",
            "blank": "Lève"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'We got up.'",
            "tokens": [
              "levés",
              "Nous",
              "sommes",
              "nous"
            ],
            "correctOrder": [
              "Nous",
              "nous",
              "sommes",
              "levés"
            ]
          }
        ]
      },
      {
        "lessonId": 28,
        "lessonTitle": "Leçon 28 : Les Français en vacances",
        "focus": "Exprimer des préférences, comparer.",
        "dialogue": [
          {
            "speaker": "Sondeur",
            "fr": "Vous préférez la mer ou la montagne ?",
            "en": "Do you prefer the sea or the mountains?"
          },
          {
            "speaker": "Tom",
            "fr": "Tout dépend de la saison.",
            "en": "It all depends on the season."
          },
          {
            "speaker": "Sondeur",
            "fr": "Toutes les saisons ?",
            "en": "All seasons?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, tous les mois !",
            "en": "Yes, every month!"
          }
        ],
        "vocabulary": [
          {
            "fr": "La saison",
            "en": "The season"
          },
          {
            "fr": "L'été",
            "en": "Summer"
          },
          {
            "fr": "L'hiver",
            "en": "Winter"
          },
          {
            "fr": "Tout",
            "en": "All / Every"
          },
          {
            "fr": "Tous les jours",
            "en": "Every day"
          },
          {
            "fr": "Dépendre",
            "en": "To depend"
          }
        ],
        "grammar": {
          "title": "Tout(e), tous, toutes + comparaisons simples",
          "explanation": "'Tout' agrees with the noun it modifies.",
          "rules": [
            "tout le monde / toute la classe",
            "tous les jours / toutes les filles"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Every day' →",
            "options": [
              "tout le jour",
              "tous les jours",
              "toute la jour",
              "toutes les jours"
            ],
            "correct": "tous les jours"
          },
          {
            "type": "fill-blank",
            "question": "___ les saisons.",
            "blank": "Toutes"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'All the world.'",
            "tokens": [
              "monde",
              "tout",
              "le",
              "tous"
            ],
            "correctOrder": [
              "tout",
              "le",
              "monde"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 8,
    "unitTitle": "Unité 8 : Tout le monde en parle",
    "lessons": [
      {
        "lessonId": 29,
        "lessonTitle": "Leçon 29 : Enfant de la ville",
        "focus": "Rapporter un événement récent, parler d'habitudes passées.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Je viens de rentrer de Paris.",
            "en": "I just got back from Paris."
          },
          {
            "speaker": "Tom",
            "fr": "Tu habitais où, petit ?",
            "en": "Where did you live as a child?"
          },
          {
            "speaker": "Léa",
            "fr": "J'habitais à la campagne.",
            "en": "I lived in the countryside."
          },
          {
            "speaker": "Tom",
            "fr": "C'était calme !",
            "en": "It was quiet!"
          }
        ],
        "vocabulary": [
          {
            "fr": "Venir de",
            "en": "To have just"
          },
          {
            "fr": "Rentrer",
            "en": "To come back"
          },
          {
            "fr": "Habiter",
            "en": "To live"
          },
          {
            "fr": "La campagne",
            "en": "The countryside"
          },
          {
            "fr": "Calme",
            "en": "Calm"
          },
          {
            "fr": "Petit",
            "en": "Small / Young"
          }
        ],
        "grammar": {
          "title": "L'imparfait + le passé récent (venir de + infinitif)",
          "explanation": "Imparfait describes past habits/states. 'Venir de' = just did.",
          "rules": [
            "j'habitais / tu habitais / il habitait",
            "nous habitions / vous habitiez / ils habitaient",
            "Je viens de manger"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I just arrived' →",
            "options": [
              "Je viens d'arriver",
              "J'arrive",
              "Je suis arrivé",
              "Je vais arriver"
            ],
            "correct": "Je viens d'arriver"
          },
          {
            "type": "fill-blank",
            "question": "Quand j'étais petit, j'___ à Lyon.",
            "blank": "habitais"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'It was calm.'",
            "tokens": [
              "calme",
              "était",
              "C'",
              "est"
            ],
            "correctOrder": [
              "C'",
              "était",
              "calme"
            ]
          }
        ]
      },
      {
        "lessonId": 30,
        "lessonTitle": "Leçon 30 : Fait divers",
        "focus": "Rapporter des événements, décrire les circonstances.",
        "dialogue": [
          {
            "speaker": "Journaliste",
            "fr": "Qu'est-ce qui s'est passé ?",
            "en": "What happened?"
          },
          {
            "speaker": "Témoin",
            "fr": "Il pleuvait quand l'accident est arrivé.",
            "en": "It was raining when the accident happened."
          },
          {
            "speaker": "Journaliste",
            "fr": "Vous étiez où ?",
            "en": "Where were you?"
          },
          {
            "speaker": "Témoin",
            "fr": "J'étais dans le café.",
            "en": "I was in the café."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un accident",
            "en": "An accident"
          },
          {
            "fr": "Pleuvoir",
            "en": "To rain"
          },
          {
            "fr": "Un témoin",
            "en": "A witness"
          },
          {
            "fr": "Se passer",
            "en": "To happen"
          },
          {
            "fr": "Un café",
            "en": "A café"
          },
          {
            "fr": "Arriver",
            "en": "To happen"
          }
        ],
        "grammar": {
          "title": "Imparfait vs passé composé",
          "explanation": "Imparfait = background/description. Passé composé = completed events.",
          "rules": [
            "Il pleuvait (description) — un accident est arrivé (événement)",
            "J'étais (état) — j'ai vu (action)"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'It was raining' →",
            "options": [
              "il a plu",
              "il pleuvait",
              "il pleut",
              "il pleuvra"
            ],
            "correct": "il pleuvait"
          },
          {
            "type": "fill-blank",
            "question": "Quand je suis arrivé, il ___ (rain).",
            "blank": "pleuvait"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I saw the accident.'",
            "tokens": [
              "accident",
              "ai",
              "J'",
              "l'",
              "vu"
            ],
            "correctOrder": [
              "J'",
              "ai",
              "vu",
              "l'",
              "accident"
            ]
          }
        ]
      },
      {
        "lessonId": 31,
        "lessonTitle": "Leçon 31 : Ma première histoire d'amour",
        "focus": "Situer dans le temps, exprimer le but.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Raconte ta première histoire d'amour.",
            "en": "Tell your first love story."
          },
          {
            "speaker": "Tom",
            "fr": "C'était en 2005, j'avais 16 ans.",
            "en": "It was in 2005, I was 16."
          },
          {
            "speaker": "Léa",
            "fr": "Pourquoi tu es parti ?",
            "en": "Why did you leave?"
          },
          {
            "speaker": "Tom",
            "fr": "Je suis parti pour étudier.",
            "en": "I left to study."
          }
        ],
        "vocabulary": [
          {
            "fr": "Une histoire",
            "en": "A story"
          },
          {
            "fr": "L'amour",
            "en": "Love"
          },
          {
            "fr": "Raconter",
            "en": "To tell"
          },
          {
            "fr": "Premier",
            "en": "First"
          },
          {
            "fr": "Étudier",
            "en": "To study"
          },
          {
            "fr": "Pour",
            "en": "To / For"
          }
        ],
        "grammar": {
          "title": "Le but : pour + infinitif + situer dans le temps",
          "explanation": "Express purpose with 'pour + infinitive'. Use 'en + year' for dates.",
          "rules": [
            "pour étudier / pour travailler",
            "en 2005, en juillet",
            "il y a + temps"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'To work' (purpose) →",
            "options": [
              "par travailler",
              "pour travailler",
              "de travailler",
              "à travailler"
            ],
            "correct": "pour travailler"
          },
          {
            "type": "fill-blank",
            "question": "Je suis parti ___ étudier.",
            "blank": "pour"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'In 2010.'",
            "tokens": [
              "2010",
              "En",
              "Dans",
              "À"
            ],
            "correctOrder": [
              "En",
              "2010"
            ]
          }
        ]
      },
      {
        "lessonId": 32,
        "lessonTitle": "Leçon 32 : La 2CV... et autres symboles !",
        "focus": "Situer des événements dans le temps.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "La 2CV, c'était quand ?",
            "en": "When was the 2CV?"
          },
          {
            "speaker": "Tom",
            "fr": "Dans les années 1950.",
            "en": "In the 1950s."
          },
          {
            "speaker": "Léa",
            "fr": "C'était une voiture populaire ?",
            "en": "Was it a popular car?"
          },
          {
            "speaker": "Tom",
            "fr": "Oui, très populaire en France.",
            "en": "Yes, very popular in France."
          }
        ],
        "vocabulary": [
          {
            "fr": "Une voiture",
            "en": "A car"
          },
          {
            "fr": "Populaire",
            "en": "Popular"
          },
          {
            "fr": "Un symbole",
            "en": "A symbol"
          },
          {
            "fr": "Les années",
            "en": "The years"
          },
          {
            "fr": "L'époque",
            "en": "The era"
          },
          {
            "fr": "Avant",
            "en": "Before"
          }
        ],
        "grammar": {
          "title": "Les participes passés irréguliers + expressions de temps",
          "explanation": "Many common verbs have irregular past participles to memorize.",
          "rules": [
            "avoir → eu",
            "être → été",
            "faire → fait",
            "voir → vu",
            "prendre → pris"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Past participle of 'prendre' →",
            "options": [
              "prendu",
              "pris",
              "prend",
              "prise"
            ],
            "correct": "pris"
          },
          {
            "type": "fill-blank",
            "question": "J'ai ___ (have) un café.",
            "blank": "eu"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I have seen.'",
            "tokens": [
              "vu",
              "ai",
              "J'",
              "voir"
            ],
            "correctOrder": [
              "J'",
              "ai",
              "vu"
            ]
          }
        ]
      }
    ]
  },
  {
    "unitId": 9,
    "unitTitle": "Unité 9 : On verra bien !",
    "lessons": [
      {
        "lessonId": 33,
        "lessonTitle": "Leçon 33 : Beau fixe",
        "focus": "Faire une prévision, exprimer une probabilité.",
        "dialogue": [
          {
            "speaker": "Présentateur",
            "fr": "Demain, il fera beau partout.",
            "en": "Tomorrow, it will be sunny everywhere."
          },
          {
            "speaker": "Léa",
            "fr": "Génial, on ira à la plage !",
            "en": "Great, we'll go to the beach!"
          },
          {
            "speaker": "Présentateur",
            "fr": "Il pleuvra dimanche.",
            "en": "It will rain on Sunday."
          },
          {
            "speaker": "Léa",
            "fr": "Tant pis, on restera à la maison.",
            "en": "Too bad, we'll stay home."
          }
        ],
        "vocabulary": [
          {
            "fr": "Demain",
            "en": "Tomorrow"
          },
          {
            "fr": "Il fera beau",
            "en": "It will be sunny"
          },
          {
            "fr": "Il pleuvra",
            "en": "It will rain"
          },
          {
            "fr": "La plage",
            "en": "The beach"
          },
          {
            "fr": "Partout",
            "en": "Everywhere"
          },
          {
            "fr": "Tant pis",
            "en": "Too bad"
          }
        ],
        "grammar": {
          "title": "Le futur simple",
          "explanation": "Future tense: take the infinitive + endings: -ai, -as, -a, -ons, -ez, -ont.",
          "rules": [
            "je parlerai / tu parleras / il parlera",
            "j'irai (aller), je ferai (faire), je serai (être)"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'I will go' →",
            "options": [
              "j'irai",
              "j'allerai",
              "je vais",
              "j'allerais"
            ],
            "correct": "j'irai"
          },
          {
            "type": "fill-blank",
            "question": "Demain, il ___ beau.",
            "blank": "fera"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'We will eat.'",
            "tokens": [
              "mangerons",
              "Nous",
              "mangerez",
              "mangeront"
            ],
            "correctOrder": [
              "Nous",
              "mangerons"
            ]
          }
        ]
      },
      {
        "lessonId": 34,
        "lessonTitle": "Leçon 34 : Projets d'avenir",
        "focus": "Parler de ses intentions, situer dans le temps.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Quels sont tes projets ?",
            "en": "What are your plans?"
          },
          {
            "speaker": "Tom",
            "fr": "Je vais voyager en Asie.",
            "en": "I'm going to travel to Asia."
          },
          {
            "speaker": "Léa",
            "fr": "Quand ?",
            "en": "When?"
          },
          {
            "speaker": "Tom",
            "fr": "Dans deux mois, en juillet.",
            "en": "In two months, in July."
          }
        ],
        "vocabulary": [
          {
            "fr": "Un projet",
            "en": "A plan"
          },
          {
            "fr": "L'avenir",
            "en": "The future"
          },
          {
            "fr": "Voyager",
            "en": "To travel"
          },
          {
            "fr": "Dans deux mois",
            "en": "In two months"
          },
          {
            "fr": "Juillet",
            "en": "July"
          },
          {
            "fr": "Bientôt",
            "en": "Soon"
          }
        ],
        "grammar": {
          "title": "L'expression du futur : présent, futur proche, futur simple",
          "explanation": "Three ways to express the future depending on certainty and immediacy.",
          "rules": [
            "Présent: Je pars demain",
            "Futur proche: Je vais partir",
            "Futur simple: Je partirai"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "Most immediate future →",
            "options": [
              "futur simple",
              "futur proche",
              "passé composé",
              "présent"
            ],
            "correct": "futur proche"
          },
          {
            "type": "fill-blank",
            "question": "___ deux mois.",
            "blank": "Dans"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'In July.'",
            "tokens": [
              "juillet",
              "en",
              "au",
              "à"
            ],
            "correctOrder": [
              "en",
              "juillet"
            ]
          }
        ]
      },
      {
        "lessonId": 35,
        "lessonTitle": "Leçon 35 : Envie de changement",
        "focus": "Exprimer une condition.",
        "dialogue": [
          {
            "speaker": "Léa",
            "fr": "Si j'avais le temps, je voyagerais.",
            "en": "If I had time, I would travel."
          },
          {
            "speaker": "Tom",
            "fr": "Et si tu pouvais, tu changerais de vie ?",
            "en": "And if you could, would you change your life?"
          },
          {
            "speaker": "Léa",
            "fr": "Oui, je quitterais Paris.",
            "en": "Yes, I would leave Paris."
          },
          {
            "speaker": "Tom",
            "fr": "Moi aussi.",
            "en": "Me too."
          }
        ],
        "vocabulary": [
          {
            "fr": "Le changement",
            "en": "Change"
          },
          {
            "fr": "Avoir envie",
            "en": "To feel like"
          },
          {
            "fr": "La vie",
            "en": "Life"
          },
          {
            "fr": "Si",
            "en": "If"
          },
          {
            "fr": "Changer",
            "en": "To change"
          },
          {
            "fr": "Le temps",
            "en": "Time"
          }
        ],
        "grammar": {
          "title": "La condition : si + présent → futur ; quand + futur",
          "explanation": "Conditional structures: 'si + présent' triggers 'futur simple'.",
          "rules": [
            "Si j'ai le temps, je viendrai",
            "Quand j'aurai 30 ans, je voyagerai"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'If I have time, I will come' →",
            "options": [
              "Si j'aurai... je viens",
              "Si j'ai... je viendrai",
              "Si j'avais... je viendrais",
              "Si j'ai... je viens"
            ],
            "correct": "Si j'ai... je viendrai"
          },
          {
            "type": "fill-blank",
            "question": "Si tu ___ , tu réussiras (work).",
            "blank": "travailles"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'When I am big.'",
            "tokens": [
              "serai",
              "Quand",
              "grand",
              "je"
            ],
            "correctOrder": [
              "Quand",
              "je",
              "serai",
              "grand"
            ]
          }
        ]
      },
      {
        "lessonId": 36,
        "lessonTitle": "Leçon 36 : Le pain, mangez-en !",
        "focus": "Exprimer des hypothèses.",
        "dialogue": [
          {
            "speaker": "Médecin",
            "fr": "Si vous voulez être en forme, mangez du pain !",
            "en": "If you want to be in shape, eat bread!"
          },
          {
            "speaker": "Patient",
            "fr": "C'est bon pour la santé ?",
            "en": "Is it good for health?"
          },
          {
            "speaker": "Médecin",
            "fr": "Oui, mangez-en chaque jour.",
            "en": "Yes, eat some every day."
          },
          {
            "speaker": "Patient",
            "fr": "D'accord, j'en mangerai.",
            "en": "Okay, I will eat some."
          }
        ],
        "vocabulary": [
          {
            "fr": "Le pain",
            "en": "Bread"
          },
          {
            "fr": "La santé",
            "en": "Health"
          },
          {
            "fr": "En forme",
            "en": "In shape"
          },
          {
            "fr": "Chaque jour",
            "en": "Every day"
          },
          {
            "fr": "Bon",
            "en": "Good"
          },
          {
            "fr": "Manger",
            "en": "To eat"
          }
        ],
        "grammar": {
          "title": "Les hypothèses + en avec l'impératif",
          "explanation": "With affirmative imperative, 'en' follows the verb with a hyphen.",
          "rules": [
            "Mangez-en !",
            "N'en mangez pas !",
            "Prends-en deux !"
          ]
        },
        "challenges": [
          {
            "type": "multiple-choice",
            "question": "'Eat some!' (vous) →",
            "options": [
              "Mangez en",
              "Mangez-en",
              "En mangez",
              "Mange-en"
            ],
            "correct": "Mangez-en"
          },
          {
            "type": "fill-blank",
            "question": "___-en chaque jour !",
            "blank": "Mangez"
          },
          {
            "type": "word-bank",
            "question": "Translate: 'I will eat some.'",
            "tokens": [
              "mangerai",
              "J'",
              "en",
              "ai"
            ],
            "correctOrder": [
              "J'",
              "en",
              "mangerai"
            ]
          }
        ]
      }
    ]
  }
];

export const ALL_LESSONS: Lesson[] = LE_NOUVEAU_TAXI_COMPLETE_DB.flatMap((u) => u.lessons);
