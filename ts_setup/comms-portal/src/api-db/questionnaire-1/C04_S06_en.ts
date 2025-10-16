import { ErauApi } from '../../api-erau'

export const C04_S06_en: ErauApi.ErauSubject = {
  "id": "C04_S06_en",
  "articleId": "C04_S06",
  "locale": "en",
  "title": "S-meter",
  "questions": [
    {
      "id": "C04_S06_en_q008_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S06_en_q008_en_A",
          "text": "About two times.",
          "isCorrect": false
        },
        {
          "id": "C04_S06_en_q008_en_B",
          "text": "About three times.",
          "isCorrect": false
        },
        {
          "id": "C04_S06_en_q008_en_C",
          "text": "About four times.",
          "isCorrect": true
        }
      ],
      "text": "How much must transmitter output power be increased for a receiver S-meter reading near the transmitter to increase from S8 to S9?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C04_S06_en_q158_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S06_en_q158_en_A",
          "text": "Received signal strength.",
          "isCorrect": true
        },
        {
          "id": "C04_S06_en_q158_en_B",
          "text": "Received signal readability.",
          "isCorrect": false
        },
        {
          "id": "C04_S06_en_q158_en_C",
          "text": "Transceiver S-factor magnitude.",
          "isCorrect": false
        }
      ],
      "text": "What does the transceiver S-meter show?",
      "qualifications": [
        "D"
      ]
    },
    {
      "id": "C04_S06_en_q159_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S06_en_q159_en_A",
          "text": "With spectrum analyzer.",
          "isCorrect": false
        },
        {
          "id": "C04_S06_en_q159_en_B",
          "text": "With tester.",
          "isCorrect": false
        },
        {
          "id": "C04_S06_en_q159_en_C",
          "text": "By hearing.",
          "isCorrect": true
        }
      ],
      "text": "How can an operator assess signal strength when the receiver has no S-meter?",
      "qualifications": [
        "D"
      ]
    }
  ]
}