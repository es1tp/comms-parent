import { ErauApi } from '../../api-erau'

export const C08_S05_en: ErauApi.ErauSubject = {
  "id": "C08_S05_en",
  "articleId": "C08_S05",
  "locale": "en",
  "title": "Noise bridge",
  "questions": [
    {
      "id": "C08_S05_en_q005_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S05_en_q005_en_A",
          "text": "Device for measuring the noise factor of an antenna or other electrical circuit.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_en_q005_en_B",
          "text": "Device for measuring the impedance of an antenna or other electrical circuit.",
          "isCorrect": true
        },
        {
          "id": "C08_S05_en_q005_en_C",
          "text": "Device for eliminating noise present in a receiver.",
          "isCorrect": false
        }
      ],
      "text": "What device is an antenna noise bridge?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C08_S05_en_q006_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S05_en_q006_en_A",
          "text": "The device is connected to the antenna feed point and the noise level is read from the device scale.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_en_q006_en_B",
          "text": "The device is connected between the transmitter and antenna and tuned until minimum standing wave ratio is achieved.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_en_q006_en_C",
          "text": "The device is connected between the receiver and a circuit with unknown impedance and tuned until minimum noise is achieved.",
          "isCorrect": true
        }
      ],
      "text": "Where is an antenna noise bridge connected?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}