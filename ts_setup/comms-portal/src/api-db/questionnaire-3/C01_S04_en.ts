import { ErauApi } from '../../api-erau'

export const C01_S04_en: ErauApi.ErauSubject = {
  "id": "C01_S04_en",
  "articleId": "C01_S04",
  "locale": "en",
  "title": "Decibels",
  "questions": [
    {
      "id": "C01_S04_en_q016_en",
      "info": [],
      "answers": [
        {
          "id": "C01_S04_en_q016_en_A",
          "text": "{dB} dB.",
          "isCorrect": true
        }
      ],
      "text": "What is the power increase of {power_ratio} times in decibels?",
      "qualifications": [
        "X"
      ],
      "formula": "dB ~ 10 * log10([power_ratio])",
      "type": "formula"
    }
  ]
}