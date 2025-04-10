import { Article } from '@/api-kb'

export const C04_S06: Article = {
  "id": "C04_S06",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S06_et",
      "localeCode": "et",
      "title": "S-meeter",
      "materials": [],
      "questionnaire": [
        {
          "id": "q008",
          "question": "Kui palju tuleb suurendada saatja väljundvõimsusust, et saatja läheduses asuva vastuvõtja S-meetri näit suureneks S8-lt S9-ni ?",
          "answers": [
            {
              "id": "C04_S06_et_A",
              "answer": "Ligikaudu kaks korda.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_B",
              "answer": "Ligikaudu kolm korda.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_C",
              "answer": "Ligikaudu neli korda.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q158",
          "question": "Mida näitab transiiveri S-meeter?",
          "answers": [
            {
              "id": "C04_S06_et_A",
              "answer": "Vastuvõetava signaali tugevust.",
              "isCorrect": true
            },
            {
              "id": "C04_S06_et_B",
              "answer": "Vastuvõetava signaali loetavust.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_C",
              "answer": "Transiiveri S-teguri suurust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q159",
          "question": "Kuidas saab operaator hinnata signaali tugevust kui vastuvõtjal pole S-meetrit?",
          "answers": [
            {
              "id": "C04_S06_et_A",
              "answer": "Spektrianalüsaatoriga.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_B",
              "answer": "Testriga.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_C",
              "answer": "Kuulmise järgi.",
              "isCorrect": true
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