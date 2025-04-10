import { ExamApi } from '@/api-exam'

export const C04_S03_et: ExamApi.ErauSubject = {
  "id": "C04_S03_et",
  "articleId": "C04_S03",
  "locale": "et",
  "title": "Seguaste",
  "questions": [
    {
      "id": "q002",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_et_q002_A",
          "text": "Sisendsignaali kahe- ja neljakordne sagedus.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q002_B",
          "text": "Sisendsageduste summa,vahe ja ruutjuurkordne sagedus.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q002_D",
          "text": "Sisendsagedused ning summaarne ja vahesagedus.",
          "isCorrect": true
        }
      ],
      "text": "Millised on põhilised seguastme väljundis esinevad sagedused?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "q009",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_et_q009_A",
          "text": "Seguastmes genereeritakse parasiitsed segustusproduktid.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q009_B",
          "text": "Seguaste lakkab töötamast.",
          "isCorrect": true
        },
        {
          "id": "C04_S03_et_q009_C",
          "text": "Toimub automaatne signaali piiramine.",
          "isCorrect": false
        }
      ],
      "text": "Mis vastuvõtjas juhtub kui väga tugev signaal jõuab seguastmeni?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}