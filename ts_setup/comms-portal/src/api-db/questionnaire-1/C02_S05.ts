import { ExamApi } from '@/api-exam'

export const C02_S05: ExamApi.ErauSubject = {
  "id": "C02_S05",
  "title": {
    "et": "Raadiolambid"
  },
  "questions": [
    {
      "id": "q004",
      "info": [],
      "answers": [
        {
          "id": "C02_S05_et_A",
          "value": {
            "et": {
              "text": "Häälestatud võnkeringides koormatud Q vähendamiseks.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C02_S05_et_B",
          "value": {
            "et": {
              "text": "Võre ja katoodi vahelise lekkevoolu vähendamiseks.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C02_S05_et_C",
          "value": {
            "et": {
              "text": "Elektroodidevahelise mahtuvuse tõttu tekkida võiva ostsilleerimise vältimiseks.",
              "isCorrect": true
            }
          }
        }
      ],
      "text": {
        "et": "Miks on mõningates lampvõimendites vajalik neutralisatsioon?"
      },
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}