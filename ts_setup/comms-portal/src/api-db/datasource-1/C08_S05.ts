import { KbApi } from '@/api-kb'

export const C08_S05: KbApi.Article = {
  "id": "C08_S05",
  "parentId": "C08",
  "pages": [
    {
      "id": "C08_S05_et",
      "localeCode": "et",
      "title": "Mürasild",
      "materials": [],
      "questionnaire": [
        {
          "id": "C08_S05_et_q005_et",
          "groupId": "q005",
          "question": "Mis seade on antenni mürasild?",
          "answers": [
            {
              "id": "C08_S05_et_q005_et_A",
              "answer": "Seade antenni või muu elektrilise lülituse mürateguri mõõtmiseks.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_et_q005_et_B",
              "answer": "Seade antenni või muu elektrilise lülituse impedantsi mõõtmiseks.",
              "isCorrect": true
            },
            {
              "id": "C08_S05_et_q005_et_C",
              "answer": "Seade vastuvõtjas esineva müra hävitamiseks.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C08_S05_et_q006_et",
          "groupId": "q006",
          "question": "Kuhu ühendatakse antenni mürasild?",
          "answers": [
            {
              "id": "C08_S05_et_q006_et_A",
              "answer": "Seade ühendatakse antenni toitepunkti ja müra suurus loetakse seadme skaalalt.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_et_q006_et_B",
              "answer": "Seade ühendatakse saatja ja antenni vahele ning häälestatakse minimaalse seisulaine teguri saavutamiseni.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_et_q006_et_C",
              "answer": "Seade ühendatakse vastuvõtja ja tundmatu impedantsiga skeemi vahele ning häälestatakse minimaalse müra saavutamiseni.",
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