import { ErauApi } from '../../api-erau'

export const C02_S03_et: ErauApi.ErauSubject = {
  "id": "C02_S03_et",
  "articleId": "C02_S03",
  "locale": "et",
  "title": "Transformaatorid",
  "questions": [
    {
      "id": "C02_S03_et_qextra029_et",
      "info": [],
      "answers": [
        {
          "id": "C02_S03_et_qextra029_et_A",
          "text": "{V} V",
          "isCorrect": true
        }
      ],
      "text": "Kui suur on pinge transformaatori {Ns} keerust koosneva sekundaarmähise klemmidel, kui {Np} keerust koosnev primaarmähis on lülitatud 220 V vahelduvvooluvõrku?",
      "qualifications": [
        "X"
      ],
      "formula": "V = 220.00 * [Ns]/[Np]",
      "type": "formula"
    }
  ]
}