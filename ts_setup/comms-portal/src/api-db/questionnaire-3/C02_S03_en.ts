import { ErauApi } from '../../api-erau'

export const C02_S03_en: ErauApi.ErauSubject = {
  "id": "C02_S03_en",
  "articleId": "C02_S03",
  "locale": "en",
  "title": "Transformers",
  "questions": [
    {
      "id": "C02_S03_en_qextra029_en",
      "info": [],
      "answers": [
        {
          "id": "C02_S03_en_qextra029_en_A",
          "text": "{V} V",
          "isCorrect": true
        }
      ],
      "text": "What is the voltage across the terminals of a transformer's secondary winding consisting of {Ns} turns, when the primary winding consisting of {Np} turns is connected to a 220 V alternating current network?",
      "qualifications": [
        "X"
      ],
      "formula": "V = 220.00 * [Ns]/[Np]",
      "type": "formula"
    }
  ]
}