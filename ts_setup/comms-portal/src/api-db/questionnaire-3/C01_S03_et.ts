import { ErauApi } from '@/api-erau'

export const C01_S03_et: ErauApi.ErauSubject = {
  "id": "C01_S03_et",
  "articleId": "C01_S03",
  "locale": "et",
  "title": "Oomi seadus",
  "questions": [
    {
      "id": "C01_S03_et_qextra001_et",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_et_qextra001_et_A",
          "text": "{P} vatti.",
          "isCorrect": true
        }
      ],
      "text": "Kui suur on kasutatav võimsus kui {V} V pingega vooluallikas ühendatakse {R} oomise koormusega?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V^2 / R",
      "type": "formula"
    }
  ]
}