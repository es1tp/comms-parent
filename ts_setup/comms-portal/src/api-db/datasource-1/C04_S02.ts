import { KbApi } from '../../api-kb'

export const C04_S02: KbApi.Article = {
  "id": "C04_S02",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S02_et",
      "localeCode": "et",
      "title": "Kõrgsagedusvõimendi",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S02_et_q005_et",
          "groupId": "q005",
          "question": "Miks on kasulik omada vastuvõtja sisendis attenuaatorit?",
          "answers": [
            {
              "id": "C04_S02_et_q005_et_A",
              "answer": "Vähendab vastuvõetava signaali ribalaiust.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_et_q005_et_B",
              "answer": "Elimineerib isotroopilise kiirguse põhjustatud efekte.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_et_q005_et_C",
              "answer": "Kaitseb vastuvõtja ülekoormamist erakordselt tugeva signaali poolt.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S02_et_q010_et",
          "groupId": "q010",
          "question": "Mis on vastuvõtja kõrgsagedusvõimendi esmane ülesanne?",
          "answers": [
            {
              "id": "C04_S02_et_q010_et_A",
              "answer": "Kindlustada enamik vastuvõtja võimendusest.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_et_q010_et_B",
              "answer": "Automaatse võimenduse reguleerimise süsteemi abil muuta parsiitsignaalide mahasurumise astet.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_et_q010_et_C",
              "answer": "Parandada vastuvõtja mürategurit.",
              "isCorrect": true
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