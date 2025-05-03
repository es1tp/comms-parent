import { KbApi } from '../../api-kb'

export const C03_S02: KbApi.Article = {
  "id": "C03_S02",
  "parentId": "C03",
  "pages": [
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