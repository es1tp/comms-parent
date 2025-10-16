import { KbApi } from '../../api-kb'

export const C02_S05: KbApi.Article = {
  "id": "C02_S05",
  "parentId": "C02",
  "pages": [
    {
      "id": "C02_S05_et",
      "localeCode": "et",
      "title": "Raadiolambid",
      "materials": [],
      "questionnaire": [
        {
          "id": "C02_S05_et_q004_et",
          "groupId": "q004",
          "question": "Miks on mõningates lampvõimendites vajalik neutralisatsioon?",
          "answers": [
            {
              "id": "C02_S05_et_q004_et_A",
              "answer": "Häälestatud võnkeringides koormatud Q vähendamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_et_q004_et_B",
              "answer": "Võre ja katoodi vahelise lekkevoolu vähendamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_et_q004_et_C",
              "answer": "Elektroodidevahelise mahtuvuse tõttu tekkida võiva ostsilleerimise vältimiseks.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        }
      ]
    },
    {
      "id": "C02_S05_en",
      "localeCode": "en",
      "title": "Radio tubes",
      "materials": [],
      "questionnaire": [
        {
          "id": "C02_S05_en_q004_en",
          "groupId": "q004",
          "question": "Why is neutralization necessary in some tube amplifiers?",
          "answers": [
            {
              "id": "C02_S05_en_q004_en_A",
              "answer": "To reduce loaded Q in tuned oscillating circuits.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_en_q004_en_B",
              "answer": "To reduce leakage current between grid and cathode.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_en_q004_en_C",
              "answer": "To prevent oscillation that may occur due to inter-electrode capacitance.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        }
      ]
    }
  ]
}