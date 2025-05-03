import { ErauApi } from '../../api-erau'

export const C01_S04_et: ErauApi.ErauSubject = {
  "id": "C01_S04_et",
  "articleId": "C01_S04",
  "locale": "et",
  "title": "Detsibellid",
  "questions": [
    {
      "id": "C01_S04_et_q016_et",
      "info": [],
      "answers": [
        {
          "id": "C01_S04_et_q016_et_A",
          "text": "{dB} dB.",
          "isCorrect": true
        }
      ],
      "text": "Kui suur on Võimsuse suurenemine {power_ratio} korda detsibellides?",
      "qualifications": [
        "X"
      ],
      "formula": "dB ~ 10 * log10([power_ratio])",
      "type": "formula"
    }
  ]
}