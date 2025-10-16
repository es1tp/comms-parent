import { KbApi } from '../../api-kb'

export const C11_S02: KbApi.Article = {
  "id": "C11_S02",
  "parentId": "C11",
  "pages": [
    {
      "id": "C11_S02_et",
      "localeCode": "et",
      "title": "Q-kood",
      "materials": [
        {
          "id": "C11_S02_et_content",
          "text": "# Amatöörraadiojaama opereerimise reeglid ja protseduurid  \n## Q-kood  \nQ-koodil on veerimistabelile vastupidine eesmärk: see on välja töötatud selleks,\net mõne tähe abil edastada teavet, mis sõnades väljaöelduna läheks liiga pikaks,\nseda eriti telegraafiside puhul. Tunduvalt lihtsam on telegraafis edastada\n\"PSE QSY 14250\" kui \"PSE CHANGE UR FREQ TO 14250\" \n\nSamas ei tasu harvaesinevaid Q-koode pruukida telefonisides: ajavõidu asemel\nTe hoopis kaotate aega, kuna korrespondent peab mõistatama, mida öelda taheti.\nQ-koodi saab esitada nii küsimusena kui ka vastusena. Esimesel juhul lisatakse\nlõppu küsimärk, telefonisides tõstetakse hääletooni.\n\n|Lühend|Küsimus (selgitus)|Vastus (selgitus)|\n|------|------------------|-----------------|\n| QRL  | Kas olete hõivatud? (või) Kas sagedus on hõivatud? | Olen hõivatud. (või) Sagedus on hõivatud, palun ärge segage. |\n| QRM  | Kas teid segatakse? Kas esineb häireid? | Mind segatakse. |\n| QRN  | Kas teil esineb staatilisi häireid ? | Siin on staatilisi häireid.  |\n| QRO  | Kas ma peaksin suurendama saatevõimsust? | Suurendage saatevõimsust. |\n| QRP  | Kas ma peaksin vähendama saatevõimsust? | Vähendage saatevõimsust. |\n| QRQ  | Kas ma peaksin edastama kiiremini (telegraaf)? | Edastage kiiremini. |\n| QRS  | Kas ma peaksin edastama aeglasemalt ? | Edastage aeglasemalt |\n| QRT  | Kas ma peaksin saate lõpetama ? | Lõpetage saade. |\n| QRX  | Millal te mind uuesti kutsute ? (kasutatakse ka lühikese pausi alguses) | Kutsun teid hiljem uuesti.|\n| QRZ  | Kas keegi kutsub mind ? | Teid kutsub ... (kutsung) sagedusel ... kHz (MHz).|\n| QSB  | Kas minu (jaama) signaali tugevus kõigub ? | Teie (jaama) signaali tugevus kõigub. |\n| QSL  | Kas kinnitate info vastuvõttu ? (kasutatakse ka sidet kinnitava kaardi nimetusena) | Kinnitan info vastuvõttu. |\n| QSO  | Kas teil on otseühendus ... (kutsung) jaamaga või saate temaga ühendust läbi vahendusjaama ? | Mul on otseühendus ... (kutsung) jaamaga - kasutan vahendusjaama. (kasutatakse ka sõnade \"side\" ja \"ühendus\" asemel) |\n| QSY  | Kas ma peaksin vahetama töösagedust ? | Vahetage töösagedust. |\n| QTH  | Milline on teie asukoht ? | Minu asukoht on ... (asukoht või muud asukohta määravad andmed). |\n\nTäielik Q-koodide nimekiri http://www.kloth.net/radio/qcodes.php"
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S02_et_q011_et",
          "groupId": "q011",
          "question": "Mida tähendab \"CQ\" ?",
          "answers": [
            {
              "id": "C11_S02_et_q011_et_A",
              "answer": "Märguanne teisele jaamale, et kutsute teda veerand tunni pärast.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q011_et_B",
              "answer": "Märguanne, et proovite uut antenni ja väljakutsetele ei vasta.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q011_et_C",
              "answer": "Üldväljakutse märkimaks, et üritate kellegagi ühendust luua.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_q011_et_D",
              "answer": "Ainult kutsutud jaam tohib vastata.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_et_q012_et",
          "groupId": "q012",
          "question": "Mida tähendab lühend QRS ?",
          "answers": [
            {
              "id": "C11_S02_et_q012_et_A",
              "answer": "Mind segavad staatilised häired.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q012_et_B",
              "answer": "Saatke aeglasemalt.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_q012_et_C",
              "answer": "Saatke RST raport.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_et_q013_et",
          "groupId": "q013",
          "question": "Mida tähendab lühend QTH ?",
          "answers": [
            {
              "id": "C11_S02_et_q013_et_A",
              "answer": "Kellaaeg on ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q013_et_B",
              "answer": "Minu nimi on ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q013_et_C",
              "answer": "Minu asukoht on ...",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_et_q020_et",
          "groupId": "q020",
          "question": "Mida tähendab lühend QSL?",
          "answers": [
            {
              "id": "C11_S02_et_q020_et_A",
              "answer": "Kas pean saatma teile oma jaamapäeviku?",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_q020_et_B",
              "answer": "Kas võite kinnitada minu saadetud teate kättesaamist?",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_q020_et_C",
              "answer": "Kas pean saatma aeglasemalt?",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        }
      ]
    },
    {
      "id": "C11_S02_en",
      "localeCode": "en",
      "title": "Q-code",
      "materials": [
        {
          "id": "C11_S02_en_content",
          "text": "# Amateur Radio Station Operating Rules and Procedures  \n## Q-code  \nThe Q-code has the opposite purpose to the phonetic alphabet: it has been developed to convey information using a few letters that would be too long when spoken in words, especially for telegraph communications. It is much simpler to transmit \"PSE QSY 14250\" by telegraph than \"PSE CHANGE UR FREQ TO 14250\"\n\nHowever, rarely used Q-codes should not be used in phone communications: instead of saving time, you actually waste time because the correspondent has to guess what you meant to say. The Q-code can be presented both as a question and as an answer. In the first case, a question mark is added at the end, in phone communications the voice tone is raised.\n\n|Abbreviation|Question (explanation)|Answer (explanation)|\n|------|------------------|-----------------|\n| QRL  | Are you busy? (or) Is the frequency busy? | I am busy. (or) The frequency is busy, please do not interfere. |\n| QRM  | Are you being interfered with? Are there any interferences? | I am being interfered with. |\n| QRN  | Do you have static interference? | There is static interference here.  |\n| QRO  | Should I increase transmit power? | Increase transmit power. |\n| QRP  | Should I decrease transmit power? | Decrease transmit power. |\n| QRQ  | Should I transmit faster (telegraph)? | Transmit faster. |\n| QRS  | Should I transmit more slowly? | Transmit more slowly |\n| QRT  | Should I stop transmitting? | Stop transmitting. |\n| QRX  | When will you call me again? (also used at the beginning of a short pause) | I will call you again later.|\n| QRZ  | Is someone calling me? | You are being called by ... (callsign) on frequency ... kHz (MHz).|\n| QSB  | Is my (station) signal strength fluctuating? | Your (station) signal strength is fluctuating. |\n| QSL  | Do you confirm receipt of information? (also used as the name of a card confirming contact) | I confirm receipt of information. |\n| QSO  | Do you have direct contact with ... (callsign) station or can you contact them through a relay station? | I have direct contact with ... (callsign) station - I am using a relay station. (also used instead of the words \"contact\" and \"connection\") |\n| QSY  | Should I change operating frequency? | Change operating frequency. |\n| QTH  | What is your location? | My location is ... (location or other location-determining data). |\n\nComplete list of Q-codes http://www.kloth.net/radio/qcodes.php"
        }
      ],
      "questionnaire": [
        {
          "id": "C11_S02_en_q011_en",
          "groupId": "q011",
          "question": "What does \"CQ\" mean?",
          "answers": [
            {
              "id": "C11_S02_en_q011_en_A",
              "answer": "Signal to another station that you are calling them in a quarter of an hour.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q011_en_B",
              "answer": "Signal that you are testing a new antenna and will not respond to calls.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q011_en_C",
              "answer": "General call signal indicating that you are trying to establish contact with someone.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_en_q011_en_D",
              "answer": "Only the called station may respond.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_en_q012_en",
          "groupId": "q012",
          "question": "What does the abbreviation QRS mean?",
          "answers": [
            {
              "id": "C11_S02_en_q012_en_A",
              "answer": "I am being interfered with by static.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q012_en_B",
              "answer": "Send more slowly.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_en_q012_en_C",
              "answer": "Send RST report.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_en_q013_en",
          "groupId": "q013",
          "question": "What does the abbreviation QTH mean?",
          "answers": [
            {
              "id": "C11_S02_en_q013_en_A",
              "answer": "The time is ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q013_en_B",
              "answer": "My name is ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q013_en_C",
              "answer": "My location is ...",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C11_S02_en_q020_en",
          "groupId": "q020",
          "question": "What does the abbreviation QSL mean?",
          "answers": [
            {
              "id": "C11_S02_en_q020_en_A",
              "answer": "Should I send you my station log?",
              "isCorrect": false
            },
            {
              "id": "C11_S02_en_q020_en_B",
              "answer": "Can you confirm receipt of my transmitted message?",
              "isCorrect": true
            },
            {
              "id": "C11_S02_en_q020_en_C",
              "answer": "Should I send more slowly?",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        }
      ]
    }
  ]
}