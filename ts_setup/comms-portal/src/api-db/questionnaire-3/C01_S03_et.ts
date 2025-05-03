import { ErauApi } from '../../api-erau'

export const C01_S03_et: ErauApi.ErauSubject = {
  "id": "C01_S03_et",
  "articleId": "C01_S03",
  "locale": "et",
  "title": "Oomi seadus",
  "questions": [
    {
      "id": "C01_S03_et_qextra022_et",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_et_qextra022_et_A",
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
    },
    {
      "id": "C01_S03_et_qextra023_et",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_et_qextra023_et_A",
          "text": "{P} vatti.",
          "isCorrect": true
        }
      ],
      "text": "Kui suur on {V} V {I} A vooluga indikaatorlambi võimsus?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V * I",
      "type": "formula"
    },
    {
      "id": "C01_S03_et_qextra024_et",
      "info": [],
      "answers": [
        {
          "id": "C01_S03_et_qextra024_et_A",
          "text": "{P} millivatti.",
          "isCorrect": true
        }
      ],
      "text": "Kui suur võimsus eraldub {R} oomisel takistil, kui tema jalgadel mõõdetud pinge on {V} V?",
      "qualifications": [
        "X"
      ],
      "formula": "P = V^2 / R",
      "type": "formula"
    }
  ]
}