import { KbApi } from '@/api-kb'

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
          "id": "q019",
          "question": "Mida tähendab R RST signaali raportis?",
          "answers": [
            {
              "id": "C11_S05_et_q019_A",
              "answer": "Signaali taastumist.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q019_B",
              "answer": "CW tooni reonantsi.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q019_C",
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
          "id": "q227",
          "question": "Kolm sidet järjest on korrespondendid andnud raportiks 39. Mida teete?",
          "answers": [
            {
              "id": "C11_S05_et_q227_A",
              "answer": "Palute anda raportiks 59.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q227_B",
              "answer": "Suurendate võimsust.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q227_C",
              "answer": "Katsute selgusele jõuda, kas transiiver on korras.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q228",
          "question": "Teile on kolm Jaapani korrespondenti järjest andnud raportiks 59. See tähendab, et:",
          "answers": [
            {
              "id": "C11_S05_et_q228_A",
              "answer": "Jaapanisse on hea levi.",
              "isCorrect": true
            },
            {
              "id": "C11_S05_et_q228_B",
              "answer": "Tuleb transiiveri korrasolekut kontrollida.",
              "isCorrect": false
            },
            {
              "id": "C11_S05_et_q228_C",
              "answer": "Tuleb võimsust suurendada.",
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