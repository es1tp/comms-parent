import { KbApi } from '../../api-kb'

export const C11_S05: KbApi.Article = {
  "id": "C11_S05",
  "parentId": "C11",
  "pages": [
    {
      "id": "C11_S05_et",
      "localeCode": "et",
      "title": "Side ajal edastatav info",
      "materials": [
        {
          "id": "C11_S05_et_content",
          "text": "# Amatöörraadiojaama opereerimise reeglid ja protseduurid  \n## Side ajal edastatav info  \nSelleks, et side toimuks, on korrespondentidel vaja vahetada kutsungid ja RST-raport.\nViimane on numbrikombinatsioon, mis iseloomustab vastuvõetud signaali loetavust\n(R=readability, 5-palli skaala), tugevust (S=strength, 9-palli skaala) ja\ntooni (T=tone, 9-palli skaala).\n\nTelefoniside puhul jäetakse raporti T-osa ära ja raport on kahekohaline.\n\nDX-peditsioonidel ja võistlustel kasutatakse aja kokkuhoiuks raportina tavaliselt\nainult 599 või 59, vaatamata tegelikule signaalile. Kui saadud raporti R- või \nT-osa on korduvalt maksimaalsest väiksemad, tuleks kontrollida aparatuuri\nkorrasolekut, sest tavaliselt kipuvad raportid olema paremad kui tegelik\nsignaal, loetavuse ja tooni  hinde alandamiseks peab olema tõsisem põhjus.\n\n### RST skaala\n\nR (loetavus)\n1. Loetamatu\n2. Vaevalt loetav\n3. Raskesti loetav\n4. Raskusteta loetav\n5. Selgesti loetav\n\nS (tugevus):\n1. Vaevalt kuuldav\n2. Väga nõrk signaal\n3. Nõrk signaal\n4. Pingutusega kuuldav signaal\n5. Rahuldava kuuldetugevusega signaal\n6. Mugava kuuldetugevusega signaal\n7. Mõõdukalt tugev signaal\n8. Tugev signaal\n9. Väga tugev signaal\n\nT (toon):\n1. Väga toorelt urisev\n2. Ebamusikaalne vahelduvvoolutoon\n3. Vahelduvvoolutoon\n4. Keskmiselt musikaalne vahelduvvoolutoon\n5. Musikaalne vahelduvvoolutoon\n6. Vahelduvvooluga märgatavalt moduleeritud toon\n7. Nõrga vahelduvvoolumodulatsiooniga toon\n8. Peaaegu modulatsioonita toon\n9. Eeskujulik moduleerimata toon\n                                                    \nIga tugevuse aste vastab kahekordsele signaali intensiivsuse suurenemisele.\nSignaali tugevuseks võib olla ka üle 9 palli: sellisel juhul väljendatakse\nseda “9+” või S-meetrilt üheksat palli ületava detsibellide arvuna (“9+20”).\n\nLisaks kohustuslikule edastatakse ka täiendavat teavet:\nOperaatori nimi; Jaama QTH (asukoht); Kasutatav aparatuur; Ilm; QSL-info."
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S05_et_q019_et",
          "groupId": "q019",
          "question": "Mida tähendab R RST signaali raportis?",
          "answers": [
            {
              "id": "C11_S05_et_q019_et_A",
              "answer": "Signaali taastumist.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q019_et_B",
              "answer": "CW tooni reonantsi.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q019_et_C",
              "answer": "Signaali loetavust.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S05_et_q227_et",
          "groupId": "q227",
          "question": "Kolm sidet järjest on korrespondendid andnud raportiks 39. Mida teete?",
          "answers": [
            {
              "id": "C11_S05_et_q227_et_A",
              "answer": "Palute anda raportiks 59.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q227_et_B",
              "answer": "Suurendate võimsust.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q227_et_C",
              "answer": "Katsute selgusele jõuda, kas transiiver on korras.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C11_S05_et_q228_et",
          "groupId": "q228",
          "question": "Teile on kolm Jaapani korrespondenti järjest andnud raportiks 59. See tähendab, et:",
          "answers": [
            {
              "id": "C11_S05_et_q228_et_A",
              "answer": "Jaapanisse on hea levi.",
              "isCorrect": true
            },
            {
              "id": "C11_S05_et_q228_et_B",
              "answer": "Tuleb transiiveri korrasolekut kontrollida.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q228_et_C",
              "answer": "Tuleb võimsust suurendada.",
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
      "id": "C11_S05_en",
      "localeCode": "en",
      "title": "Information transmitted during communication",
      "materials": [
        {
          "id": "C11_S05_en_content",
          "text": "# Amateur Radio Station Operating Rules and Procedures  \n## Information transmitted during communication  \nFor communication to take place, correspondents need to exchange call signs and RST reports.\nThe latter is a number combination that characterizes the readability of the received signal\n(R=readability, 5-point scale), strength (S=strength, 9-point scale) and\ntone (T=tone, 9-point scale).\n\nIn phone communication, the T part of the report is omitted and the report is two digits.\n\nIn DX expeditions and contests, to save time, usually only 599 or 59 is used as a report,\nregardless of the actual signal. If the R or T part of the received report is repeatedly\nless than maximum, the equipment should be checked for proper operation, because\nreports usually tend to be better than the actual signal, and there must be a serious\nreason for lowering the readability and tone ratings.\n\n### RST scale\n\nR (readability)\n1. Unreadable\n2. Barely readable\n3. Difficult to read\n4. Readable without difficulty\n5. Clearly readable\n\nS (strength):\n1. Barely audible\n2. Very weak signal\n3. Weak signal\n4. Signal audible with effort\n5. Signal with satisfactory audibility\n6. Signal with comfortable audibility\n7. Moderately strong signal\n8. Strong signal\n9. Very strong signal\n\nT (tone):\n1. Very rough buzzing\n2. Unmusical AC tone\n3. AC tone\n4. Moderately musical AC tone\n5. Musical AC tone\n6. Tone noticeably modulated with AC\n7. Tone with weak AC modulation\n8. Tone with almost no modulation\n9. Exemplary unmodulated tone\n                                                    \nEach strength level corresponds to a doubling of signal intensity.\nSignal strength can also be over 9 points: in such cases it is expressed\nas \"9+\" or as the number of decibels exceeding nine points on the S-meter (\"9+20\").\n\nIn addition to the mandatory information, additional information is also transmitted:\nOperator name; Station QTH (location); Equipment used; Weather; QSL info."
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S05_en_q019_en",
          "groupId": "q019",
          "question": "What does R mean in the RST signal report?",
          "answers": [
            {
              "id": "C11_S05_en_q019_en_A",
              "answer": "Signal recovery.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_en_q019_en_B",
              "answer": "CW tone resonance.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_en_q019_en_C",
              "answer": "Signal readability.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S05_en_q227_en",
          "groupId": "q227",
          "question": "Three contacts in a row, correspondents have given a report of 39. What do you do?",
          "answers": [
            {
              "id": "C11_S05_en_q227_en_A",
              "answer": "Ask them to give a report of 59.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_en_q227_en_B",
              "answer": "Increase power.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_en_q227_en_C",
              "answer": "Try to find out if the transceiver is working properly.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C11_S05_en_q228_en",
          "groupId": "q228",
          "question": "Three Japanese correspondents in a row have given you a report of 59. This means that:",
          "answers": [
            {
              "id": "C11_S05_en_q228_en_A",
              "answer": "There is good propagation to Japan.",
              "isCorrect": true
            },
            {
              "id": "C11_S05_en_q228_en_B",
              "answer": "The transceiver's condition should be checked.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_en_q228_en_C",
              "answer": "Power should be increased.",
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