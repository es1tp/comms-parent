import { KbApi } from '@/api-kb'

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
          "id": "q005",
          "question": "Milline on morsekoodis antud standardse väljakutse \"CQ\" formaat?",
          "answers": [
            {
              "id": "C11_S03_et_q005_A",
              "answer": "Saadate kolm korda \"CQ\", millele järgneb protseduurisignaal \"DE\" ja kolm korda oma kutsungi.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_et_q005_B",
              "answer": "Saadate \"CQ\" kolm korda, \"DE\" üks kord ja oma kutsungi ka üks kord.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q005_C",
              "answer": "Saadate \"CQ\" kümme korda, \"DE\" üks kord ja oma kutsung üks kord.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q006",
          "question": "Kuidas te vastate morsekoodis \"CQ\" väljakutsele?",
          "answers": [
            {
              "id": "C11_S03_et_q006_A",
              "answer": "Saadate oma kutsungit neli korda.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q006_B",
              "answer": "Saadate teise jaama kutsungi kaks korda, \"DE\" ja oma kutsungi kaks korda.",
              "isCorrect": true
            },
            {
              "id": "C11_S03_et_q006_C",
              "answer": "Saadate teise jaama kutsungi üks kord,\"DE\" ja oma kutsungi neli korda",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q007",
          "question": "Millise kiirusega tuleb morsekoodis saata \"CQ\"?",
          "answers": [
            {
              "id": "C11_S03_et_q007_A",
              "answer": "Aeglasemalt kui 25 märki minutis.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q007_B",
              "answer": "Suurima kiirusega, mida teie võti on võimeline arendama.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q007_C",
              "answer": "Kiirusega, millist olete ise võimeline korralikult vastu võtma.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q008",
          "question": "Mis tähendus on Morsekoodi liittähtedel AR ?",
          "answers": [
            {
              "id": "C11_S03_et_q008_A",
              "answer": "Vastaku ainult kutsutud jaam.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q008_B",
              "answer": "Kõik on korralikult vastu võetud.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q008_C",
              "answer": "Saate lõpp.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q009",
          "question": "Mida tähendavad Morsekoodis saadetud liittähed SK ?",
          "answers": [
            {
              "id": "C11_S03_et_q009_A",
              "answer": "Enam-vähem korralikult vastu võetud.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q009_B",
              "answer": "Parimad tevitused.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q009_C",
              "answer": "Side lõpp.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q010",
          "question": "Mida tähendavad Morsekoodis saadetud liittähed KN ?",
          "answers": [
            {
              "id": "C11_S03_et_q010_A",
              "answer": "Murrujoon.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q010_B",
              "answer": "Side lõpp.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q010_C",
              "answer": "Vastaku ainult kutsutud jaam .",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A"
          ]
        },
        {
          "id": "q018",
          "question": "Mida tähendab morsekoodis lühend AS ?",
          "answers": [
            {
              "id": "C11_S03_et_q018_A",
              "answer": "Aktsiaselts.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q018_B",
              "answer": "Asu saatele.",
              "isCorrect": false
            },
            {
              "id": "C11_S03_et_q018_C",
              "answer": "Oota",
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