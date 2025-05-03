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
          "id": "C01_S03_et_qextra022_et",
          "type": "formula",
          "formula": "P = V^2 / R",
          "groupId": "qextra022",
          "question": "Kui suur on kasutatav võimsus kui {V} V pingega vooluallikas ühendatakse {R} oomise koormusega?",
          "answers": [
            {
              "id": "C01_S03_et_qextra022_et_A",
              "answer": "{P} vatti.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "X"
          ]
        },
        {
          "id": "C01_S03_et_qextra023_et",
          "type": "formula",
          "formula": "P = V * I",
          "groupId": "qextra023",
          "question": "Kui suur on {V} V {I} A vooluga indikaatorlambi võimsus?",
          "answers": [
            {
              "id": "C01_S03_et_qextra023_et_A",
              "answer": "{P} vatti.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "X"
          ]
        },
        {
          "id": "C01_S03_et_qextra024_et",
          "type": "formula",
          "formula": "P = V^2 / R",
          "groupId": "qextra024",
          "question": "Kui suur võimsus eraldub {R} oomisel takistil, kui tema jalgadel mõõdetud pinge on {V} V?",
          "answers": [
            {
              "id": "C01_S03_et_qextra024_et_A",
              "answer": "{P} millivatti.",
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