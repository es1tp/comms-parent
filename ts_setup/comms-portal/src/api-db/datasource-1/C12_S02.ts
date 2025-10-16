import { KbApi } from '../../api-kb'

export const C12_S02: KbApi.Article = {
  "id": "C12_S02",
  "parentId": "C12",
  "pages": [
    {
      "id": "C12_S02_et",
      "localeCode": "et",
      "title": "Raadioamatööride kutsungid",
      "materials": [
        {
          "id": "C12_S02_et_content",
          "text": "# Amatöörraadioside siseriiklik ja rahvusvaheline õiguslik regulatsioon  \n## Raadioamatööride kutsungid  \nIgal raadioamatööril on tähtedest ja numbri(te)st koosnev kutsung, mis on maailmas ainuke ja on talle teise nime eest.\n\nTõsi, riikides, kus amatööre on palju, lastakse juba kasutusel olnud kutsungid mõne aja pärast uuesti käiku.\n\nIga kutsungi esimene osa ehk prefiks näitab, millisest riigist amatöör töötab. Eesti amatööride kutsungid\nalgavad tähekombinatsiooniga “ES”, sellele järgnev number näitab, millisest Eesti piirkonnaga on tegemist.\n\n* ES1 Tallinn\n* ES2 Harjumaa\n* ES3 Rapla- ja Läänemaa\n* ES4 Ida-Virumaa ja Lääne-Virumaa\n* ES5 Tartu- ja Jõgevamaa\n* ES6 Põlva-, Võru- ja Valgamaa\n* ES7 Viljandimaa\n* ES8 Pärnumaa\n* ES9 ERAÜ erikutsung\n* ES0 Saare ja Hiiu maakond\n\nViimane osa ehk sufiks annab Eesti jaamade puhul informatsiooni raadioamatööri kvalifikatsioonist ja jaama otstarbest.\n\nÜldreegliks on: mida lühem kutsung, seda parem operaator. Kutsungi lühenemisega kahaneb\nka võimalike kutsungite arv, ka kõige parema tahtmise juures pole võimalik kõigile Eesti\namatööridele väljastada ühetähelise sufiksiga kutsungeid.\n\nPäris algajate, D-klassi amatööride kutsungi sufiksis on neli tähte. Edasijõudnute, B-klassi amatööride kutsungis\non pärast numbrit kolm tähte. Kaks tähte on sufiksis A-klassi amatööridel ja klubijaamadel. \nViimastel on võimalik TTJA-lt taotleda ka ühetähelist sufiksit.\n\nKui amatöör ei tööta oma tavalises asukohas, saab seda näidata kaldjoonega (ingl. k. “stroke” või “slash”)\neraldatud kutsungi lisa abil:\n\n* ES4LB/6 jaam töötab ajutisest asukohast teises kutsungipiirkonnas\n* ES5RY/p jaam töötab ajutisest asukohast samas kutsungipiirkonnas (“portable”)\n* ES5MG/m jaam töötab autolt (“mobile”)\n* ES0IC/mm jaam töötab merelt (“maritime mobile”)\n* ES5PC/am jaam töötab lennukilt (“aeroplane mobile”)\n\nKui välismaa amatöör tuleb lühiajaliselt Eestisse, lisatakse tema kutsungi ette “ES”+kutsungipiirkond + “/”. \nNäiteks Timo, OH1NOA, töötades Lõuna-Eestist, võtab kutsungiks ES6/OH1NOA. Pikemaajalisel peatumisel\n(üle kuue kuu) peab amatöör taotlema Eesti kutsungit."
        }
      ],
      "questionnaire": [
        {
          "id": "C12_S02_et_q011_et",
          "groupId": "q011",
          "question": "Millist varianti saab kasutada Eesti amatöörjaama kutsungi moodustamiseks?",
          "answers": [
            {
              "id": "C12_S02_et_q011_et_A",
              "answer": "Kolmetäheline eesliide, number ja neljatäheline järelliide.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q011_et_B",
              "answer": "Ühetäheline eesliide, number ja neljatäheline järelliide.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q011_et_C",
              "answer": "Kahetäheline eesliide, number ja neljatäheline järelliide.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_et_q011_et_D",
              "answer": "Kahekohaline numbriline eesliide ja kuni kolmetähelisest järelliide.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_et_q012_et",
          "groupId": "q012",
          "question": "Kuidas algab Haapsalus registreeritud amatöörraadiojaama kutsung?",
          "answers": [
            {
              "id": "C12_S02_et_q012_et_A",
              "answer": "ES1",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q012_et_B",
              "answer": "ES0",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q012_et_C",
              "answer": "ES3",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_et_q013_et",
          "groupId": "q013",
          "question": "Kuhu kuulub piirkondlikult Kutsung ES9Z?",
          "answers": [
            {
              "id": "C12_S02_et_q013_et_A",
              "answer": "Hiiumaale",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q013_et_B",
              "answer": "Üleriigiline, kasutamiseks ainult ERAÜ poolt.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_et_q013_et_C",
              "answer": "Põlvamaale.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_et_q014_et",
          "groupId": "q014",
          "question": "Millise klassi Eesti amatöörraadiojaamale võib kuuluda Kutsung ES2XX ?",
          "answers": [
            {
              "id": "C12_S02_et_q014_et_A",
              "answer": "C",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q014_et_B",
              "answer": "B",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q014_et_C",
              "answer": "A",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_et_q015_et",
          "groupId": "q015",
          "question": "Milline järelliide omistatakse Ühiskasutusega (raadioklubi) amatöörraadiojaamale?",
          "answers": [
            {
              "id": "C12_S02_et_q015_et_A",
              "answer": "AAA-CCC",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q015_et_B",
              "answer": "A-ZZ",
              "isCorrect": true
            },
            {
              "id": "C12_S02_et_q015_et_C",
              "answer": "XAA-ZZZ",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_et_q241_et",
          "groupId": "q241",
          "question": "Kuidas ära tunda eetris töötavat Eesti D-klassi amatööri?",
          "answers": [
            {
              "id": "C12_S02_et_q241_et_A",
              "answer": "Tema kutsungi prefiks on “ES0”.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q241_et_B",
              "answer": "Ta oskab töötada ainult eesti keeles ja telefonirežiimis.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q241_et_C",
              "answer": "Tema kutsungi prefiksiks on “ES” ja kutsungi lõpp koosneb neljast tähest.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q242_et",
          "groupId": "q242",
          "question": "Kuidas ära tunda eetris töötavat Eesti A-klassi amatööri?",
          "answers": [
            {
              "id": "C12_S02_et_q242_et_A",
              "answer": "Tema kutsungi prefiks on “ES1”.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q242_et_B",
              "answer": "Tema telegraafisaatekiirus on üle 30 sõna minutis.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q242_et_C",
              "answer": "Tema kutsungi prefiksiks on “ES” ja kutsungi lõpp koosneb kahest tähest.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q245_et",
          "groupId": "q245",
          "question": "Mis näitab, et eetris töötab alaealine?",
          "answers": [
            {
              "id": "C12_S02_et_q245_et_A",
              "answer": "Tal ei saa olla A- või B- kvalifikatsiooniklassi.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q245_et_B",
              "answer": "Ta oskab töötada ainult telefonirežiimis.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q245_et_C",
              "answer": "Eelpooltoodu põhjal pole seda võimalik öelda.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q246_et",
          "groupId": "q246",
          "question": "Mida näitab raadioamatööri poolt kasutav kutsung ES9B?",
          "answers": [
            {
              "id": "C12_S02_et_q246_et_A",
              "answer": "Tal on B-klassi amatööri tööluba.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q246_et_B",
              "answer": "Jaam töötab Saaremaal.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q246_et_C",
              "answer": "Raadiojaam kuulub ERAÜ-le.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q247_et",
          "groupId": "q247",
          "question": "Te kuulete kutsumas jaama kutsungiga ES5/DJ0IB. Mid see tähendab?",
          "answers": [
            {
              "id": "C12_S02_et_q247_et_A",
              "answer": "Eesti amatöör töötab Saksamaalt.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q247_et_B",
              "answer": "Saksa amatöör töötab Eestis.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_et_q247_et_C",
              "answer": "Eesti ja Saksamaa kutsungipiirkonnad on ühendatud.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q248_et",
          "groupId": "q248",
          "question": "Te kuulete kutsumas jaama kutsungiga ES5JR/6. Mida see tähendab?",
          "answers": [
            {
              "id": "C12_S02_et_q248_et_A",
              "answer": "ES5JR kuulab sagedusel, mis on 6 korda väiksem kui saatesagedus.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q248_et_B",
              "answer": "ES5JR on kuueaastane raadioamatöör.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q248_et_C",
              "answer": "ES5JR töötab Võru-, Põlva- või Valgamaal.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_et_q249_et",
          "groupId": "q249",
          "question": "Te kuulete kutsumas jaama kutsungiga ES5YL/M. Mida see tähendab?",
          "answers": [
            {
              "id": "C12_S02_et_q249_et_A",
              "answer": "ES5YL töötab autost.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_et_q249_et_B",
              "answer": "ES5YL on meesterahvas.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_et_q249_et_C",
              "answer": "ES5YL töötab Inglismaa territooriumilt.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        }
      ]
    },
    {
      "id": "C12_S02_en",
      "localeCode": "en",
      "title": "Radio Amateur Call Signs",
      "materials": [
        {
          "id": "C12_S02_en_content",
          "text": "# Domestic and International Legal Regulation of Amateur Radio Communication  \n## Radio Amateur Call Signs  \nEvery radio amateur has a call sign consisting of letters and number(s), which is unique in the world and serves as their second name.\n\nTrue, in countries where there are many amateurs, previously used call signs are allowed back into circulation after some time.\n\nThe first part of each call sign, the prefix, shows which country the amateur is operating from. Estonian amateur call signs begin with the letter combination \"ES\", followed by a number indicating which Estonian region is involved.\n\n* ES1 Tallinn\n* ES2 Harjumaa\n* ES3 Rapla and Läänemaa\n* ES4 Ida-Virumaa and Lääne-Virumaa\n* ES5 Tartu and Jõgevamaa\n* ES6 Põlva, Võru and Valgamaa\n* ES7 Viljandimaa\n* ES8 Pärnumaa\n* ES9 ERAU special call sign\n* ES0 Saare and Hiiu counties\n\nThe last part, the suffix, provides information about the radio amateur's qualification and station purpose for Estonian stations.\n\nThe general rule is: the shorter the call sign, the better the operator. As the call sign shortens, the number of possible call signs also decreases, and even with the best intentions, it is not possible to issue call signs with one-letter suffixes to all Estonian amateurs.\n\nComplete beginners, class D amateurs have four letters in their call sign suffix. Advanced class B amateurs have three letters after the number in their call sign. Class A amateurs and club stations have two letters in the suffix. The latter can also apply to TTJA for a one-letter suffix.\n\nWhen an amateur is not operating from their usual location, this can be indicated using a call sign addition separated by a slash (stroke):\n\n* ES4LB/6 station operating from a temporary location in another call area\n* ES5RY/p station operating from a temporary location in the same call area (\"portable\")\n* ES5MG/m station operating from a car (\"mobile\")\n* ES0IC/mm station operating from sea (\"maritime mobile\")\n* ES5PC/am station operating from aircraft (\"aeroplane mobile\")\n\nWhen a foreign amateur comes to Estonia for a short time, \"ES\"+call area + \"/\" is added before their call sign. For example, Timo, OH1NOA, operating from Southern Estonia, would use the call sign ES6/OH1NOA. For longer stays (over six months), the amateur must apply for an Estonian call sign."
        }
      ],
      "questionnaire": [
        {
          "id": "C12_S02_en_q011_en",
          "groupId": "q011",
          "question": "Which variant can be used to form an Estonian amateur station call sign?",
          "answers": [
            {
              "id": "C12_S02_en_q011_en_A",
              "answer": "Three-letter prefix, number and four-letter suffix.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q011_en_B",
              "answer": "One-letter prefix, number and four-letter suffix.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q011_en_C",
              "answer": "Two-letter prefix, number and four-letter suffix.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_en_q011_en_D",
              "answer": "Two-digit numeric prefix and up to three-letter suffix.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_en_q012_en",
          "groupId": "q012",
          "question": "How does the call sign of an amateur radio station registered in Haapsalu begin?",
          "answers": [
            {
              "id": "C12_S02_en_q012_en_A",
              "answer": "ES1",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q012_en_B",
              "answer": "ES0",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q012_en_C",
              "answer": "ES3",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_en_q013_en",
          "groupId": "q013",
          "question": "Which region does call sign ES9Z belong to?",
          "answers": [
            {
              "id": "C12_S02_en_q013_en_A",
              "answer": "Hiiumaa",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q013_en_B",
              "answer": "Nationwide, for use only by ERAU.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_en_q013_en_C",
              "answer": "Põlvamaa.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_en_q014_en",
          "groupId": "q014",
          "question": "Which class of Estonian amateur radio station could have call sign ES2XX?",
          "answers": [
            {
              "id": "C12_S02_en_q014_en_A",
              "answer": "C",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q014_en_B",
              "answer": "B",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q014_en_C",
              "answer": "A",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_en_q015_en",
          "groupId": "q015",
          "question": "What suffix is assigned to a shared use (radio club) amateur radio station?",
          "answers": [
            {
              "id": "C12_S02_en_q015_en_A",
              "answer": "AAA-CCC",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q015_en_B",
              "answer": "A-ZZ",
              "isCorrect": true
            },
            {
              "id": "C12_S02_en_q015_en_C",
              "answer": "XAA-ZZZ",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C12_S02_en_q241_en",
          "groupId": "q241",
          "question": "How to recognize an Estonian class D amateur operating on the air?",
          "answers": [
            {
              "id": "C12_S02_en_q241_en_A",
              "answer": "Their call sign prefix is \"ES0\".",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q241_en_B",
              "answer": "They can only operate in Estonian and in phone mode.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q241_en_C",
              "answer": "Their call sign prefix is \"ES\" and the call sign ending consists of four letters.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q242_en",
          "groupId": "q242",
          "question": "How to recognize an Estonian class A amateur operating on the air?",
          "answers": [
            {
              "id": "C12_S02_en_q242_en_A",
              "answer": "Their call sign prefix is \"ES1\".",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q242_en_B",
              "answer": "Their telegraph transmission speed is over 30 words per minute.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q242_en_C",
              "answer": "Their call sign prefix is \"ES\" and the call sign ending consists of two letters.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q245_en",
          "groupId": "q245",
          "question": "What indicates that a minor is operating on the air?",
          "answers": [
            {
              "id": "C12_S02_en_q245_en_A",
              "answer": "They cannot have class A or B qualification.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q245_en_B",
              "answer": "They can only operate in phone mode.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q245_en_C",
              "answer": "Based on the above, it is not possible to tell.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q246_en",
          "groupId": "q246",
          "question": "What does the call sign ES9B used by a radio amateur indicate?",
          "answers": [
            {
              "id": "C12_S02_en_q246_en_A",
              "answer": "They have a class B amateur license.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q246_en_B",
              "answer": "The station operates from Saaremaa.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q246_en_C",
              "answer": "The radio station belongs to ERAU.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q247_en",
          "groupId": "q247",
          "question": "You hear a station calling with call sign ES5/DJ0IB. What does this mean?",
          "answers": [
            {
              "id": "C12_S02_en_q247_en_A",
              "answer": "An Estonian amateur is operating from Germany.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q247_en_B",
              "answer": "A German amateur is operating from Estonia.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_en_q247_en_C",
              "answer": "Estonian and German call areas are connected.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q248_en",
          "groupId": "q248",
          "question": "You hear a station calling with call sign ES5JR/6. What does this mean?",
          "answers": [
            {
              "id": "C12_S02_en_q248_en_A",
              "answer": "ES5JR listens on a frequency that is 6 times smaller than the transmit frequency.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q248_en_B",
              "answer": "ES5JR is a six-year-old radio amateur.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q248_en_C",
              "answer": "ES5JR is operating from Võru, Põlva or Valgamaa.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C12_S02_en_q249_en",
          "groupId": "q249",
          "question": "You hear a station calling with call sign ES5YL/M. What does this mean?",
          "answers": [
            {
              "id": "C12_S02_en_q249_en_A",
              "answer": "ES5YL is operating from a car.",
              "isCorrect": true
            },
            {
              "id": "C12_S02_en_q249_en_B",
              "answer": "ES5YL is a male person.",
              "isCorrect": false
            },
            {
              "id": "C12_S02_en_q249_en_C",
              "answer": "ES5YL is operating from English territory.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        }
      ]
    }
  ]
}