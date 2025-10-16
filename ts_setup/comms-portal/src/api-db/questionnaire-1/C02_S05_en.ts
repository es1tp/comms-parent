import { ErauApi } from '../../api-erau'

export const C02_S05_en: ErauApi.ErauSubject = {
  "id": "C02_S05_en",
  "articleId": "C02_S05",
  "locale": "en",
  "title": "Radio tubes",
  "questions": [
    {
      "id": "C02_S05_en_q004_en",
      "info": [],
      "answers": [
        {
          "id": "C02_S05_en_q004_en_A",
          "text": "To reduce loaded Q in tuned oscillating circuits.",
          "isCorrect": false
        },
        {
          "id": "C02_S05_en_q004_en_B",
          "text": "To reduce leakage current between grid and cathode.",
          "isCorrect": false
        },
        {
          "id": "C02_S05_en_q004_en_C",
          "text": "To prevent oscillation that may occur due to inter-electrode capacitance.",
          "isCorrect": true
        }
      ],
      "text": "Why is neutralization necessary in some tube amplifiers?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}