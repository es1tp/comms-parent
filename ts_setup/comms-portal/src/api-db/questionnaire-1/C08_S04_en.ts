import { ErauApi } from '../../api-erau'

export const C08_S04_en: ErauApi.ErauSubject = {
  "id": "C08_S04_en",
  "articleId": "C08_S04",
  "locale": "en",
  "title": "Power meter",
  "questions": [
    {
      "id": "C08_S04_en_q007_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S04_en_q007_en_A",
          "text": "A device that measures the standing wave ratio in the antenna feed line.",
          "isCorrect": false
        },
        {
          "id": "C08_S04_en_q007_en_B",
          "text": "A device for determining modulation depth at the transmitter output.",
          "isCorrect": false
        },
        {
          "id": "C08_S04_en_q007_en_C",
          "text": "A device for measuring the relative power of high-frequency signals.",
          "isCorrect": true
        }
      ],
      "text": "What device is a field strength meter?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C08_S04_en_q009_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S04_en_q009_en_A",
          "text": "Field strength meter.",
          "isCorrect": true
        },
        {
          "id": "C08_S04_en_q009_en_B",
          "text": "Antenna noise bridge.",
          "isCorrect": false
        },
        {
          "id": "C08_S04_en_q009_en_C",
          "text": "Tester.",
          "isCorrect": false
        }
      ],
      "text": "What is the most suitable simple instrument for determining an antenna's radiation pattern in the horizontal plane?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}