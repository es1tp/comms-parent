import { KbApi } from '../../api-kb'

export const C01_S04: KbApi.Article = {
  "id": "C01_S04",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S04_en",
      "localeCode": "en",
      "title": "Decibels",
      "materials": [],
      "questionnaire": [
        {
          "id": "C01_S04_en_q016_en",
          "type": "formula",
          "formula": "dB ~ 10 * log10([power_ratio])",
          "groupId": "q016",
          "question": "What is the power increase of {power_ratio} times in decibels?",
          "answers": [
            {
              "id": "C01_S04_en_q016_en_A",
              "answer": "{dB} dB.",
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