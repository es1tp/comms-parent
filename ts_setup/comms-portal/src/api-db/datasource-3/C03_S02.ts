import { KbApi } from '../../api-kb'

export const C03_S02: KbApi.Article = {
  "id": "C03_S02",
  "parentId": "C03",
  "pages": [
    {
      "id": "C03_S02_en",
      "localeCode": "en",
      "title": "Parallel and series connections",
      "materials": [],
      "questionnaire": [
        {
          "id": "C03_S02_en_q021_en",
          "type": "formula",
          "formula": "I = I/[component_seq] * (R/R)",
          "groupId": "q021",
          "question": "When {component_seq} resistors of {R} ohms connected in parallel are connected to a {I} ampere current source, what current flows through each resistor?",
          "answers": [
            {
              "id": "C03_S02_en_q021_en_A",
              "answer": "{I} amperes.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "X"
          ]
        }
      ]
    },
    {
      "id": "C03_S02_et",
      "localeCode": "et",
      "title": "Paralleel- ja jadaühendused",
      "materials": [],
      "questionnaire": [
        {
          "id": "C03_S02_et_q021_et",
          "type": "formula",
          "formula": "I = I/[component_seq] * (R/R)",
          "groupId": "q021",
          "question": "Kui {I} amprilise vooluallikaga on ühendatud {component_seq} paralleelselt lülitatud {R} oomist takistit kui suur vool läbib kumbagi takistit?",
          "answers": [
            {
              "id": "C03_S02_et_q021_et_A",
              "answer": "{I} amprit.",
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