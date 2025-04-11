import { KbApi } from '@/api-kb'

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
    }
  ]
}