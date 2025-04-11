import { KbApi } from '@/api-kb'

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
          "id": "q004",
          "question": "Miks on mõningates lampvõimendites vajalik neutralisatsioon?",
          "answers": [
            {
              "id": "C02_S05_et_q004_A",
              "answer": "Häälestatud võnkeringides koormatud Q vähendamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_et_q004_B",
              "answer": "Võre ja katoodi vahelise lekkevoolu vähendamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S05_et_q004_C",
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
    }
  ]
}