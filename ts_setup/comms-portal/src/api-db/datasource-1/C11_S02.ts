import { Article } from '@/api-kb'

export const C11_S02: Article = {
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
          "id": "q011",
          "question": "Mida tähendab \"CQ\" ?",
          "answers": [
            {
              "id": "C11_S02_et_A",
              "answer": "Märguanne teisele jaamale, et kutsute teda veerand tunni pärast.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_B",
              "answer": "Märguanne, et proovite uut antenni ja väljakutsetele ei vasta.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_C",
              "answer": "Üldväljakutse märkimaks, et üritate kellegagi ühendust luua.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_D",
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
          "id": "q012",
          "question": "Mida tähendab lühend QRS ?",
          "answers": [
            {
              "id": "C11_S02_et_A",
              "answer": "Mind segavad staatilised häired.",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_B",
              "answer": "Saatke aeglasemalt.",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_C",
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
          "id": "q013",
          "question": "Mida tähendab lühend QTH ?",
          "answers": [
            {
              "id": "C11_S02_et_A",
              "answer": "Kellaaeg on ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_B",
              "answer": "Minu nimi on ...",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_C",
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
          "id": "q020",
          "question": "Mida tähendab lühend QSL?",
          "answers": [
            {
              "id": "C11_S02_et_A",
              "answer": "Kas pean saatma teile oma jaamapäeviku?",
              "isCorrect": false
            },
            {
              "id": "C11_S02_et_B",
              "answer": "Kas võite kinnitada minu saadetud teate kättesaamist?",
              "isCorrect": true
            },
            {
              "id": "C11_S02_et_C",
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
    }
  ]
}