import { ErauApi } from '../../api-erau'

export const C04_S03_en: ErauApi.ErauSubject = {
  "id": "C04_S03_en",
  "articleId": "C04_S03",
  "locale": "en",
  "title": "Mixer stage",
  "questions": [
    {
      "id": "C04_S03_en_q002_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_en_q002_en_A",
          "text": "Double and quadruple frequency of input signal.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_en_q002_en_B",
          "text": "Sum, difference and square root frequency of input frequencies.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_en_q002_en_D",
          "text": "Input frequencies and sum and difference frequency.",
          "isCorrect": true
        }
      ],
      "text": "What are the main frequencies present at the mixer stage output?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C04_S03_en_q009_en",
      "info": [],
      "answers": [
        {
          "id": "C04_S03_en_q009_en_A",
          "text": "Spurious mixing products are generated in the mixer stage.",
          "isCorrect": false
        },
        {
          "id": "C04_S03_en_q009_en_B",
          "text": "Mixer stage stops working.",
          "isCorrect": true
        },
        {
          "id": "C04_S03_en_q009_en_C",
          "text": "Automatic signal limiting occurs.",
          "isCorrect": false
        }
      ],
      "text": "What happens in the receiver when a very strong signal reaches the mixer stage?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}