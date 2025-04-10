import { ExamApi } from '@/api-exam'

export const C08_S05_et: ExamApi.ErauSubject = {
  "id": "C08_S05_et",
  "articleId": "C08_S05",
  "locale": "et",
  "title": "Mürasild",
  "questions": [
    {
      "id": "q005",
      "info": [],
      "answers": [
        {
          "id": "C08_S05_et_q005_A",
          "text": "Seade antenni või muu elektrilise lülituse mürateguri mõõtmiseks.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_et_q005_B",
          "text": "Seade antenni või muu elektrilise lülituse impedantsi mõõtmiseks.",
          "isCorrect": true
        },
        {
          "id": "C08_S05_et_q005_C",
          "text": "Seade vastuvõtjas esineva müra hävitamiseks.",
          "isCorrect": false
        }
      ],
      "text": "Mis seade on antenni mürasild?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "q006",
      "info": [],
      "answers": [
        {
          "id": "C08_S05_et_q006_A",
          "text": "Seade ühendatakse antenni toitepunkti ja müra suurus loetakse seadme skaalalt.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_et_q006_B",
          "text": "Seade ühendatakse saatja ja antenni vahele ning häälestatakse minimaalse seisulaine teguri saavutamiseni.",
          "isCorrect": false
        },
        {
          "id": "C08_S05_et_q006_C",
          "text": "Seade ühendatakse vastuvõtja ja tundmatu impedantsiga skeemi vahele ning häälestatakse minimaalse müra saavutamiseni.",
          "isCorrect": true
        }
      ],
      "text": "Kuhu ühendatakse antenni mürasild?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}