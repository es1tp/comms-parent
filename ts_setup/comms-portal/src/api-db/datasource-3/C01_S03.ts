import { KbApi } from '../../api-kb'

export const C01_S03: KbApi.Article = {
  "id": "C01_S03",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S03_et",
      "localeCode": "et",
      "title": "Oomi seadus",
      "materials": [],
      "questionnaire": [
        {
          "id": "C01_S03_et_qextra001_et",
          "type": "formula",
          "formula": "P = V^2 / R",
          "groupId": "qextra001",
          "question": "Kui suur on kasutatav võimsus kui {V} V pingega vooluallikas ühendatakse {R} oomise koormusega?",
          "answers": [
            {
              "id": "C01_S03_et_qextra001_et_A",
              "answer": "{P} vatti.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "X"
          ]
        }
      ]
    }
  ]
}