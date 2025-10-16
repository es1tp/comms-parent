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
    },
    {
      "id": "C04_S02_en",
      "localeCode": "en",
      "title": "High frequency amplifier",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S02_en_q005_en",
          "groupId": "q005",
          "question": "Why is it useful to have an attenuator at the receiver input?",
          "answers": [
            {
              "id": "C04_S02_en_q005_en_A",
              "answer": "Reduces the bandwidth of received signal.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_en_q005_en_B",
              "answer": "Eliminates effects caused by isotropic radiation.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_en_q005_en_C",
              "answer": "Protects receiver from overload by exceptionally strong signal.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S02_en_q010_en",
          "groupId": "q010",
          "question": "What is the primary task of receiver high frequency amplifier?",
          "answers": [
            {
              "id": "C04_S02_en_q010_en_A",
              "answer": "Ensure most of the receiver amplification.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_en_q010_en_B",
              "answer": "Use automatic gain control system to change spurious signal suppression level.",
              "isCorrect": false
            },
            {
              "id": "C04_S02_en_q010_en_C",
              "answer": "Improve receiver noise figure.",
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