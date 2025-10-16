import { ErauApi } from '../../api-erau'

export const C03_S02_en: ErauApi.ErauSubject = {
  "id": "C03_S02_en",
  "articleId": "C03_S02",
  "locale": "en",
  "title": "Parallel and series connections",
  "questions": [
    {
      "id": "C03_S02_en_q021_en",
      "info": [],
      "answers": [
        {
          "id": "C03_S02_en_q021_en_A",
          "text": "{I} amperes.",
          "isCorrect": true
        }
      ],
      "text": "When {component_seq} resistors of {R} ohms connected in parallel are connected to a {I} ampere current source, what current flows through each resistor?",
      "qualifications": [
        "X"
      ],
      "formula": "I = I/[component_seq] * (R/R)",
      "type": "formula"
    }
  ]
}