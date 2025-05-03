import { KbApi } from '../../api-kb'

export const C02_S03: KbApi.Article = {
  "id": "C02_S03",
  "parentId": "C02",
  "pages": [
    {
      "id": "C02_S03_et",
      "localeCode": "et",
      "title": "Transformaatorid",
      "materials": [],
      "questionnaire": [
        {
          "id": "C02_S03_et_qextra029_et",
          "type": "formula",
          "formula": "V = 220.00 * [Ns]/[Np]",
          "groupId": "qextra029",
          "question": "Kui suur on pinge transformaatori {Ns} keerust koosneva sekundaarmähise klemmidel, kui {Np} keerust koosnev primaarmähis on lülitatud 220 V vahelduvvooluvõrku?",
          "answers": [
            {
              "id": "C02_S03_et_qextra029_et_A",
              "answer": "{V} V",
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