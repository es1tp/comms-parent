import { ExamApi } from '@/api-exam'

export const C04_S03: ExamApi.ErauSubject = {
  "id": "C04_S03",
  "title": {
    "et": "Seguaste"
  },
  "questions": [
    {
      "id": "q002",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_et_A",
          "value": {
            "et": {
              "text": "Sisendsignaali kahe- ja neljakordne sagedus.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C04_S03_et_B",
          "value": {
            "et": {
              "text": "Sisendsageduste summa,vahe ja ruutjuurkordne sagedus.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C04_S03_et_D",
          "value": {
            "et": {
              "text": "Sisendsagedused ning summaarne ja vahesagedus.",
              "isCorrect": true
            }
          }
        }
      ],
      "text": {
        "et": "Millised on põhilised seguastme väljundis esinevad sagedused?"
      },
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
          "id": "C04_S03_et_A",
          "value": {
            "et": {
              "text": "Seguastmes genereeritakse parasiitsed segustusproduktid.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C04_S03_et_B",
          "value": {
            "et": {
              "text": "Seguaste lakkab töötamast.",
              "isCorrect": true
            }
          }
        },
        {
          "id": "C04_S03_et_C",
          "value": {
            "et": {
              "text": "Toimub automaatne signaali piiramine.",
              "isCorrect": false
            }
          }
        }
      ],
      "text": {
        "et": "Mis vastuvõtjas juhtub kui väga tugev signaal jõuab seguastmeni?"
      },
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}