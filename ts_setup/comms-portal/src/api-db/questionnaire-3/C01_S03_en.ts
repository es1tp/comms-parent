import { ErauApi } from '../../api-erau'

export const C01_S03_en: ErauApi.ErauSubject = {
  "id": "C01_S03_en",
  "articleId": "C01_S03",
  "locale": "en",
  "title": "Ohm's Law",
  "questions": [
    {
      "id": "C01_S03_en_qextra022_en",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_en_qextra022_en_A",
          "text": "{P} watts.",
          "isCorrect": true
        }
      ],
      "text": "What is the usable power when a {V} V voltage source is connected to a {R} ohm load?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V^2 / R",
      "type": "formula"
    },
    {
      "id": "C01_S03_en_qextra023_en",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_en_qextra023_en_A",
          "text": "{P} watts.",
          "isCorrect": true
        }
      ],
      "text": "What is the power of an indicator lamp with {V} V and {I} A current?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V * I",
      "type": "formula"
    },
    {
      "id": "C01_S03_en_qextra024_en",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_en_qextra024_en_A",
          "text": "{P} milliwatts.",
          "isCorrect": true
        }
      ],
      "text": "What power is dissipated in a {R} ohm resistor when the voltage measured across its terminals is {V} V?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V^2 / R",
      "type": "formula"
    }
  ]
}