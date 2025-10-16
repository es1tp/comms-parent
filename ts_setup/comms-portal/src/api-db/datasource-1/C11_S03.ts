import { KbApi } from '../../api-kb'

export const C11_S03: KbApi.Article = {
  "id": "C11_S03",
  "parentId": "C11",
  "pages": [
    {
      "id": "C11_S03_et",
      "localeCode": "et",
      "title": "Morse",
      "materials": [
        {
          "id": "C11_S03_et_content",
          "text": "# Amatöörraadiojaama opereerimise reeglid ja protseduurid  \n## Morse  \n### Telegraafiside seanss:\n\n* Lülitage transiiver sisse ja veenduge, et vastuvõtt toimib häireteta.\n* Kontrollige, et asute lubatud sagedusalas. Ehkki telegraafitöö on lubatud kogu laineala ulatuses, on vaikiv kokkulepe, et jäädakse laineala alumisse ossa, esimese 50-60 kHz ulatusse.\n* Pidage silmas, et sagedusala esimesed 10 kHz jäetakse vabaks DX-sidede jaoks. Kui Te seal töötate, pidage sidet ainult DX-jaamadega.\n* Kui hakkate kutsuma:\n - Valige vaba sagedus ja kuulake seda mõnda aega, veendudes, et keegi seal ei tööta.\n - Edastage mõned korrad: “QRL?”, küsimuste vahel kuulates. Kui vastuseks on “R”, “YES” või “QRL” vms, otsige teine sagedus.\n - Kui sagedus on vaba, hakake kutsuma CQ. Jälgige et Te ei kutsuks liiga kaua: piisab, kui edastada 3 korda CQ ja 3 korda oma kutsungit, korrates seda veel ühe korra.\n* Kui leiate kutsuva jaama:\n - kui jaam kuulab teisel sagedusel kui saadab, häälestage oma saatesagedus vastavaks;\n - oodake, kuni jaam on kutsumise lõpetanud; edastage oma kutsungit 1..2 korda\n* Valige korrespondendi saatekiirus, kui see on Teie saatmiskiirusest aeglasem. Ärge saatke kiiremini kui suudate vastu võtta.\n* Saatmisel jälgige, et saatja ja antenn toimiksid häireteta.\n* Vahetage korrespondendiga rutiinne teave: raport, nimi, QTH. “Lühikese side” puhul edastage ainult raport.\n* Hoidke saateseansid lühidad ja asjalikud. Viisakused on telegraafisides lühemad kui telefoni teel.\n* Pärast side lõppu ärge hakake kohe saatma, vaid kuulatage, kas keegi Teid kutsub.\n\nTelegraafis võidakse RST raportis aja kokkuhoiuks saata “9” asemel “N” ja “0” asemel “T”. (Raport “599” = “5NN”)"
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S03_et_q005_et",
          "groupId": "q005",
          "question": "Milline on morsekoodis antud standardse väljakutse \"CQ\" formaat?",
          "answers": [
            {
              "id": "C11_S03_et_q005_et_A",
              "answer": "Saadate kolm korda \"CQ\", millele järgneb protseduurisignaal \"DE\" ja kolm korda oma kutsungi.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_et_q005_et_B",
              "answer": "Saadate \"CQ\" kolm korda, \"DE\" üks kord ja oma kutsungi ka üks kord.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q005_et_C",
              "answer": "Saadate \"CQ\" kümme korda, \"DE\" üks kord ja oma kutsung üks kord.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q006_et",
          "groupId": "q006",
          "question": "Kuidas te vastate morsekoodis \"CQ\" väljakutsele?",
          "answers": [
            {
              "id": "C11_S03_et_q006_et_A",
              "answer": "Saadate oma kutsungit neli korda.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q006_et_B",
              "answer": "Saadate teise jaama kutsungi kaks korda, \"DE\" ja oma kutsungi kaks korda.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_et_q006_et_C",
              "answer": "Saadate teise jaama kutsungi üks kord,\"DE\" ja oma kutsungi neli korda",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q007_et",
          "groupId": "q007",
          "question": "Millise kiirusega tuleb morsekoodis saata \"CQ\"?",
          "answers": [
            {
              "id": "C11_S03_et_q007_et_A",
              "answer": "Aeglasemalt kui 25 märki minutis.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q007_et_B",
              "answer": "Suurima kiirusega, mida teie võti on võimeline arendama.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q007_et_C",
              "answer": "Kiirusega, millist olete ise võimeline korralikult vastu võtma.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q008_et",
          "groupId": "q008",
          "question": "Mis tähendus on Morsekoodi liittähtedel AR ?",
          "answers": [
            {
              "id": "C11_S03_et_q008_et_A",
              "answer": "Vastaku ainult kutsutud jaam.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q008_et_B",
              "answer": "Kõik on korralikult vastu võetud.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q008_et_C",
              "answer": "Saate lõpp.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q009_et",
          "groupId": "q009",
          "question": "Mida tähendavad Morsekoodis saadetud liittähed SK ?",
          "answers": [
            {
              "id": "C11_S03_et_q009_et_A",
              "answer": "Enam-vähem korralikult vastu võetud.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q009_et_B",
              "answer": "Parimad tevitused.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q009_et_C",
              "answer": "Side lõpp.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q010_et",
          "groupId": "q010",
          "question": "Mida tähendavad Morsekoodis saadetud liittähed KN ?",
          "answers": [
            {
              "id": "C11_S03_et_q010_et_A",
              "answer": "Murrujoon.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q010_et_B",
              "answer": "Side lõpp.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q010_et_C",
              "answer": "Vastaku ainult kutsutud jaam .",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_et_q018_et",
          "groupId": "q018",
          "question": "Mida tähendab morsekoodis lühend AS ?",
          "answers": [
            {
              "id": "C11_S03_et_q018_et_A",
              "answer": "Aktsiaselts.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q018_et_B",
              "answer": "Asu saatele.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q018_et_C",
              "answer": "Oota",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        }
      ]
    },
    {
      "id": "C11_S03_en",
      "localeCode": "en",
      "title": "Morse",
      "materials": [
        {
          "id": "C11_S03_en_content",
          "text": "# Amateur Radio Station Operating Rules and Procedures  \n## Morse  \n### Telegraph communication session:\n\n* Turn on the transceiver and ensure that reception works without interference.\n* Check that you are in the allowed frequency band. Although telegraph operation is permitted across the entire band, there is a silent agreement to stay in the lower part of the band, within the first 50-60 kHz range.\n* Keep in mind that the first 10 kHz of the frequency band is kept free for DX communications. If you operate there, only communicate with DX stations.\n* When you start calling:\n - Choose a free frequency and listen to it for some time, making sure that no one is operating there.\n - Transmit several times: \"QRL?\", listening between questions. If the response is \"R\", \"YES\" or \"QRL\" etc., look for another frequency.\n - If the frequency is free, start calling CQ. Make sure you don't call too long: it's enough to transmit CQ 3 times and your call sign 3 times, repeating this once more.\n* If you find a calling station:\n - if the station listens on a different frequency than it transmits, tune your transmit frequency accordingly;\n - wait until the station has finished calling; transmit your call sign 1..2 times\n* Choose the correspondent's transmission speed if it is slower than your transmission speed. Don't transmit faster than you can receive.\n* During transmission, ensure that the transmitter and antenna operate without interference.\n* Exchange routine information with the correspondent: report, name, QTH. For a \"short contact\", transmit only the report.\n* Keep transmission sessions short and to the point. Courtesies are shorter in telegraph communications than by telephone.\n* After the end of the contact, don't start transmitting immediately, but listen to see if anyone is calling you.\n\nIn telegraph, the RST report may send \"N\" instead of \"9\" and \"T\" instead of \"0\" to save time. (Report \"599\" = \"5NN\")"
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S03_en_q005_en",
          "groupId": "q005",
          "question": "What is the format of the standard call \"CQ\" given in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q005_en_A",
              "answer": "You send \"CQ\" three times, followed by the procedure signal \"DE\" and your call sign three times.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_en_q005_en_B",
              "answer": "You send \"CQ\" three times, \"DE\" once and your call sign also once.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q005_en_C",
              "answer": "You send \"CQ\" ten times, \"DE\" once and your call sign once.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q006_en",
          "groupId": "q006",
          "question": "How do you respond to a \"CQ\" call in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q006_en_A",
              "answer": "You send your call sign four times.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q006_en_B",
              "answer": "You send the other station's call sign twice, \"DE\" and your call sign twice.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_en_q006_en_C",
              "answer": "You send the other station's call sign once, \"DE\" and your call sign four times",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q007_en",
          "groupId": "q007",
          "question": "At what speed should you send \"CQ\" in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q007_en_A",
              "answer": "Slower than 25 characters per minute.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q007_en_B",
              "answer": "At the maximum speed your key is capable of developing.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q007_en_C",
              "answer": "At a speed that you are able to properly receive yourself.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q008_en",
          "groupId": "q008",
          "question": "What is the meaning of the Morse code prosign AR?",
          "answers": [
            {
              "id": "C11_S03_en_q008_en_A",
              "answer": "Only the called station should respond.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q008_en_B",
              "answer": "Everything has been properly received.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q008_en_C",
              "answer": "End of message.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q009_en",
          "groupId": "q009",
          "question": "What do the prosigns SK mean when sent in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q009_en_A",
              "answer": "More or less properly received.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q009_en_B",
              "answer": "Best regards.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q009_en_C",
              "answer": "End of contact.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q010_en",
          "groupId": "q010",
          "question": "What do the prosigns KN mean when sent in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q010_en_A",
              "answer": "Fraction bar.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q010_en_B",
              "answer": "End of contact.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q010_en_C",
              "answer": "Only the called station should respond.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "C11_S03_en_q018_en",
          "groupId": "q018",
          "question": "What does the abbreviation AS mean in Morse code?",
          "answers": [
            {
              "id": "C11_S03_en_q018_en_A",
              "answer": "Joint stock company.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q018_en_B",
              "answer": "Start transmitting.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_en_q018_en_C",
              "answer": "Wait",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        }
      ]
    }
  ]
}