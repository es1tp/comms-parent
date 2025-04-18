import { ErauApi } from '../../api-erau'

export const C04_S03_et: ErauApi.ErauSubject = {
  "id": "C04_S03_et",
  "articleId": "C04_S03",
  "locale": "et",
  "title": "Seguaste",
  "questions": [
    {
      "id": "C04_S03_et_q002_et",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_et_q002_et_A",
          "text": "Sisendsignaali kahe- ja neljakordne sagedus.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q002_et_B",
          "text": "Sisendsageduste summa,vahe ja ruutjuurkordne sagedus.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q002_et_D",
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
      "id": "C04_S03_et_q009_et",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_et_q009_et_A",
          "text": "Seguastmes genereeritakse parasiitsed segustusproduktid.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_et_q009_et_B",
          "text": "Seguaste lakkab töötamast.",
          "isCorrect": true
        },
        {
          "id": "C04_S03_et_q009_et_C",
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