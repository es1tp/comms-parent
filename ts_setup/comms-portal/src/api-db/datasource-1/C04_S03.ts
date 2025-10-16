import { KbApi } from '../../api-kb'

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
          "id": "C04_S03_et_q002_et",
          "groupId": "q002",
          "question": "Millised on põhilised seguastme väljundis esinevad sagedused?",
          "answers": [
            {
              "id": "C04_S03_et_q002_et_A",
              "answer": "Sisendsignaali kahe- ja neljakordne sagedus.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q002_et_B",
              "answer": "Sisendsageduste summa,vahe ja ruutjuurkordne sagedus.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q002_et_D",
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
          "id": "C04_S03_et_q009_et",
          "groupId": "q009",
          "question": "Mis vastuvõtjas juhtub kui väga tugev signaal jõuab seguastmeni?",
          "answers": [
            {
              "id": "C04_S03_et_q009_et_A",
              "answer": "Seguastmes genereeritakse parasiitsed segustusproduktid.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_et_q009_et_B",
              "answer": "Seguaste lakkab töötamast.",
              "isCorrect": true
            },
            {
              "id": "C04_S03_et_q009_et_C",
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
    },
    {
      "id": "C04_S03_en",
      "localeCode": "en",
      "title": "Mixer stage",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S03_en_q002_en",
          "groupId": "q002",
          "question": "What are the main frequencies present at the mixer stage output?",
          "answers": [
            {
              "id": "C04_S03_en_q002_en_A",
              "answer": "Double and quadruple frequency of input signal.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_en_q002_en_B",
              "answer": "Sum, difference and square root frequency of input frequencies.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_en_q002_en_D",
              "answer": "Input frequencies and sum and difference frequency.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S03_en_q009_en",
          "groupId": "q009",
          "question": "What happens in the receiver when a very strong signal reaches the mixer stage?",
          "answers": [
            {
              "id": "C04_S03_en_q009_en_A",
              "answer": "Spurious mixing products are generated in the mixer stage.",
              "isCorrect": false
            },
            {
              "id": "C04_S03_en_q009_en_B",
              "answer": "Mixer stage stops working.",
              "isCorrect": true
            },
            {
              "id": "C04_S03_en_q009_en_C",
              "answer": "Automatic signal limiting occurs.",
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