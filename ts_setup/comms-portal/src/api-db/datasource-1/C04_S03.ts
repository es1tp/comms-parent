import { KbApi } from '@/api-kb'

export const C04_S03: KbApi.Article = {
  "id": "C04_S03",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S03_et",
      "localeCode": "et",
      "title": "Seguaste",
      "materials": [],
      "questionnaire": [
        {
          "id": "q002",
          "question": "Millised on põhilised seguastme väljundis esinevad sagedused?",
          "answers": [
            {
              "id": "C04_S03_et_q002_A",
              "answer": "Sisendsignaali kahe- ja neljakordne sagedus.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q002_B",
              "answer": "Sisendsageduste summa,vahe ja ruutjuurkordne sagedus.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q002_D",
              "answer": "Sisendsagedused ning summaarne ja vahesagedus.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q009",
          "question": "Mis vastuvõtjas juhtub kui väga tugev signaal jõuab seguastmeni?",
          "answers": [
            {
              "id": "C04_S03_et_q009_A",
              "answer": "Seguastmes genereeritakse parasiitsed segustusproduktid.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q009_B",
              "answer": "Seguaste lakkab töötamast.",
              "isCorrect": true
            },
            {
              "id": "C04_S03_et_q009_C",
              "answer": "Toimub automaatne signaali piiramine.",
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