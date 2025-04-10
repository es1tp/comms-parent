import { ExamApi } from '@/api-exam'

export const C08_S05: ExamApi.ErauSubject = {
  "id": "C08_S05",
  "title": {
    "et": "Mürasild"
  },
  "questions": [
    {
      "id": "q005",
      "info": [],
      "answers": [
        {
          "id": "C08_S05_et_A",
          "value": {
            "et": {
              "text": "Seade antenni või muu elektrilise lülituse mürateguri mõõtmiseks.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C08_S05_et_B",
          "value": {
            "et": {
              "text": "Seade antenni või muu elektrilise lülituse impedantsi mõõtmiseks.",
              "isCorrect": true
            }
          }
        },
        {
          "id": "C08_S05_et_C",
          "value": {
            "et": {
              "text": "Seade vastuvõtjas esineva müra hävitamiseks.",
              "isCorrect": false
            }
          }
        }
      ],
      "text": {
        "et": "Mis seade on antenni mürasild?"
      },
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
          "id": "C08_S05_et_A",
          "value": {
            "et": {
              "text": "Seade ühendatakse antenni toitepunkti ja müra suurus loetakse seadme skaalalt.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C08_S05_et_B",
          "value": {
            "et": {
              "text": "Seade ühendatakse saatja ja antenni vahele ning häälestatakse minimaalse seisulaine teguri saavutamiseni.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C08_S05_et_C",
          "value": {
            "et": {
              "text": "Seade ühendatakse vastuvõtja ja tundmatu impedantsiga skeemi vahele ning häälestatakse minimaalse müra saavutamiseni.",
              "isCorrect": true
            }
          }
        }
      ],
      "text": {
        "et": "Kuhu ühendatakse antenni mürasild?"
      },
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}