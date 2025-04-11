import { KbApi } from '@/api-kb'

export const C04_S05: KbApi.Article = {
  "id": "C04_S05",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S05_et",
      "localeCode": "et",
      "title": "Detektor",
      "materials": [],
      "questionnaire": [
        {
          "id": "q001",
          "question": "Mis on produkt-detektor?",
          "answers": [
            {
              "id": "C04_S05_et_q001_A",
              "answer": "Detektor, mis annab ostsillaatorsignaali seguastme sisendisse.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_B",
              "answer": "Võimendav detektor, mis kitsendab vastuvõtja võimenduskanali pääsuriba.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_C",
              "answer": "Detektor, mis kasutab segustusprotsessis vastuvõtjas genereeritud kandesagedust.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q003",
          "question": "Mida nimetatakse detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q003_A",
              "answer": "Vastuvõetaval kandelainel oleva informatsiooni summutamist S-meetri töölerakendamise eesmärgil.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q003_B",
              "answer": "Moduleeritud kõrgsagedussignaalilt informatsiooni eraldamist.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q003_C",
              "answer": "Kandelaine modulatsiooni.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q004",
          "question": "Mis on sagedusdiskriminaator?",
          "answers": [
            {
              "id": "C04_S05_et_q004_A",
              "answer": "FM signaalide detekteerimiseks kasutatav lülitus.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q004_B",
              "answer": "Kahe kandelaine naabruses asuva parasiitsignaali filtreerimislõlitus.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q004_C",
              "answer": "Automaatne lainelülitus.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q005",
          "question": "Mida kasutatakse FM signaali detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q005_A",
              "answer": "Balanssmodulaatorit.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q005_B",
              "answer": "Sagedusdiskriminaatorit.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q005_C",
              "answer": "Produkt detektorit.",
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