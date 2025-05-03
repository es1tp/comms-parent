import { ErauApi } from '../../api-erau'

export const C03_S02_et: ErauApi.ErauSubject = {
  "id": "C03_S02_et",
  "articleId": "C03_S02",
  "locale": "et",
  "title": "Paralleel- ja jadaühendused",
  "questions": [
    {
      "id": "C03_S02_et_q021_et",
      "info": [],
      "answers": [
        {
          "id": "C03_S02_et_q021_et_A",
          "text": "{I} amprit.",
          "isCorrect": true
        }
      ],
      "text": "Kui {I} amprilise vooluallikaga on ühendatud {component_seq} paralleelselt lülitatud {R} oomist takistit kui suur vool läbib kumbagi takistit?",
      "qualifications": [
        "X"
      ],
      "formula": "I = I/[component_seq] * (R/R)",
      "type": "formula"
    }
  ]
}