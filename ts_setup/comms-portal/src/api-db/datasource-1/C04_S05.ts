import { KbApi } from '../../api-kb'

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
          "id": "C04_S05_et_q001_et",
          "groupId": "q001",
          "question": "Mis on produkt-detektor?",
          "answers": [
            {
              "id": "C04_S05_et_q001_et_A",
              "answer": "Detektor, mis annab ostsillaatorsignaali seguastme sisendisse.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_et_B",
              "answer": "Võimendav detektor, mis kitsendab vastuvõtja võimenduskanali pääsuriba.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_et_C",
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
          "id": "C04_S05_et_q003_et",
          "groupId": "q003",
          "question": "Mida nimetatakse detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q003_et_A",
              "answer": "Vastuvõetaval kandelainel oleva informatsiooni summutamist S-meetri töölerakendamise eesmärgil.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q003_et_B",
              "answer": "Moduleeritud kõrgsagedussignaalilt informatsiooni eraldamist.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q003_et_C",
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
          "id": "C04_S05_et_q004_et",
          "groupId": "q004",
          "question": "Mis on sagedusdiskriminaator?",
          "answers": [
            {
              "id": "C04_S05_et_q004_et_A",
              "answer": "FM signaalide detekteerimiseks kasutatav lülitus.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q004_et_B",
              "answer": "Kahe kandelaine naabruses asuva parasiitsignaali filtreerimislõlitus.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q004_et_C",
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
          "id": "C04_S05_et_q005_et",
          "groupId": "q005",
          "question": "Mida kasutatakse FM signaali detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q005_et_A",
              "answer": "Balanssmodulaatorit.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q005_et_B",
              "answer": "Sagedusdiskriminaatorit.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q005_et_C",
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