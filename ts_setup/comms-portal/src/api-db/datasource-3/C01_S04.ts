import { KbApi } from '../../api-kb'

export const C01_S04: KbApi.Article = {
  "id": "C01_S04",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S04_et",
      "localeCode": "et",
      "title": "Detsibellid",
      "materials": [],
      "questionnaire": [
        {
          "id": "C01_S04_et_q016_et",
          "type": "formula",
          "formula": "dB ~ 10 * log10([power_ratio])",
          "groupId": "q016",
          "question": "Kui suur on Võimsuse suurenemine {power_ratio} korda detsibellides?",
          "answers": [
            {
              "id": "C01_S04_et_q016_et_A",
              "answer": "{dB} dB.",
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