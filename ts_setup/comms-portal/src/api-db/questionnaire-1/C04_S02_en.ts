import { ErauApi } from '../../api-erau'

export const C04_S02_en: ErauApi.ErauSubject = {
  "id": "C04_S02_en",
  "articleId": "C04_S02",
  "locale": "en",
  "title": "High frequency amplifier",
  "questions": [
    {
      "id": "C04_S02_en_q005_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S02_en_q005_en_A",
          "text": "Reduces the bandwidth of received signal.",
          "isCorrect": false
        },
        {
          "id": "C04_S02_en_q005_en_B",
          "text": "Eliminates effects caused by isotropic radiation.",
          "isCorrect": false
        },
        {
          "id": "C04_S02_en_q005_en_C",
          "text": "Protects receiver from overload by exceptionally strong signal.",
          "isCorrect": true
        }
      ],
      "text": "Why is it useful to have an attenuator at the receiver input?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C04_S02_en_q010_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S02_en_q010_en_A",
          "text": "Ensure most of the receiver amplification.",
          "isCorrect": false
        },
        {
          "id": "C04_S02_en_q010_en_B",
          "text": "Use automatic gain control system to change spurious signal suppression level.",
          "isCorrect": false
        },
        {
          "id": "C04_S02_en_q010_en_C",
          "text": "Improve receiver noise figure.",
          "isCorrect": true
        }
      ],
      "text": "What is the primary task of receiver high frequency amplifier?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}