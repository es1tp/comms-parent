import { KbApi } from '../../api-kb'

export const C04_S06: KbApi.Article = {
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
          "id": "C04_S06_et_q008_et",
          "groupId": "q008",
          "question": "Kui palju tuleb suurendada saatja väljundvõimsusust, et saatja läheduses asuva vastuvõtja S-meetri näit suureneks S8-lt S9-ni ?",
          "answers": [
            {
              "id": "C04_S06_et_q008_et_A",
              "answer": "Ligikaudu kaks korda.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_q008_et_B",
              "answer": "Ligikaudu kolm korda.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_q008_et_C",
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
          "id": "C04_S06_et_q158_et",
          "groupId": "q158",
          "question": "Mida näitab transiiveri S-meeter?",
          "answers": [
            {
              "id": "C04_S06_et_q158_et_A",
              "answer": "Vastuvõetava signaali tugevust.",
              "isCorrect": true
            },
            {
              "id": "C04_S06_et_q158_et_B",
              "answer": "Vastuvõetava signaali loetavust.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_q158_et_C",
              "answer": "Transiiveri S-teguri suurust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C04_S06_et_q159_et",
          "groupId": "q159",
          "question": "Kuidas saab operaator hinnata signaali tugevust kui vastuvõtjal pole S-meetrit?",
          "answers": [
            {
              "id": "C04_S06_et_q159_et_A",
              "answer": "Spektrianalüsaatoriga.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_q159_et_B",
              "answer": "Testriga.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_et_q159_et_C",
              "answer": "Kuulmise järgi.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        }
      ]
    },
    {
      "id": "C04_S06_en",
      "localeCode": "en",
      "title": "S-meter",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S06_en_q008_en",
          "groupId": "q008",
          "question": "How much must transmitter output power be increased for a receiver S-meter reading near the transmitter to increase from S8 to S9?",
          "answers": [
            {
              "id": "C04_S06_en_q008_en_A",
              "answer": "About two times.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_en_q008_en_B",
              "answer": "About three times.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_en_q008_en_C",
              "answer": "About four times.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S06_en_q158_en",
          "groupId": "q158",
          "question": "What does the transceiver S-meter show?",
          "answers": [
            {
              "id": "C04_S06_en_q158_en_A",
              "answer": "Received signal strength.",
              "isCorrect": true
            },
            {
              "id": "C04_S06_en_q158_en_B",
              "answer": "Received signal readability.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_en_q158_en_C",
              "answer": "Transceiver S-factor magnitude.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C04_S06_en_q159_en",
          "groupId": "q159",
          "question": "How can an operator assess signal strength when the receiver has no S-meter?",
          "answers": [
            {
              "id": "C04_S06_en_q159_en_A",
              "answer": "With spectrum analyzer.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_en_q159_en_B",
              "answer": "With tester.",
              "isCorrect": false
            },
            {
              "id": "C04_S06_en_q159_en_C",
              "answer": "By hearing.",
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