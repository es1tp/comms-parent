import { ErauApi } from '../../api-erau'

export const C04_S04_en: ErauApi.ErauSubject = {
  "id": "C04_S04_en",
  "articleId": "C04_S04",
  "locale": "en",
  "title": "Intermediate frequency",
  "questions": [
    {
      "id": "C04_S04_en_q008_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S04_en_q008_en_A",
          "text": "Fixed tuned passband amplifier.",
          "isCorrect": true
        },
        {
          "id": "C04_S04_en_q008_en_B",
          "text": "Receiver filter.",
          "isCorrect": false
        },
        {
          "id": "C04_S04_en_q008_en_C",
          "text": "Receiver demodulator.",
          "isCorrect": false
        }
      ],
      "text": "What is an intermediate frequency amplifier?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C04_S04_en_q015_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S04_en_q015_en_A",
          "text": "6 kHz at -6dB passband.",
          "isCorrect": false
        },
        {
          "id": "C04_S04_en_q015_en_B",
          "text": "2.1 kHz at –6dB passband.",
          "isCorrect": true
        },
        {
          "id": "C04_S04_en_q015_en_C",
          "text": "500 Hz at -6dB passband.",
          "isCorrect": false
        }
      ],
      "text": "What is the passband width of a good crystal filter needed for SSB telephone operation?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}