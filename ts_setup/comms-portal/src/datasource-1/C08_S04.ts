import { Article } from '@/api-kb'

export const C08_S04: Article = {
  "id": "C08_S04",
  "parentId": "C08",
  "pages": [
    {
      "id": "C08_S04_et",
      "localeCode": "et",
      "title": "Väljatugevuse mõõtja",
      "materials": [],
      "questionnaire": [
        {
          "id": "q007",
          "question": "Mis seade on väljatugevuse mõõtja?",
          "answers": [
            {
              "id": "C08_S04_et_A",
              "answer": "Seade,mis mõõdab seisulaine tegurit antenni toiteliinis.",
              "isCorrect": false
            },
            {
              "id": "C08_S04_et_B",
              "answer": "Seade modulatsioonisügavuse määramiseks saatja väljundis.",
              "isCorrect": false
            },
            {
              "id": "C08_S04_et_C",
              "answer": "Seade kõrgsagedussignaali suhtelise võimsuse mõõtmiseks.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q009",
          "question": "Milline on kõige sobivam lihtne instrument antenni kiirguse suunadiagrammi määramiseks horisontaaltasapinnas?",
          "answers": [
            {
              "id": "C08_S04_et_A",
              "answer": "Väljatugevuse mõõtja.",
              "isCorrect": true
            },
            {
              "id": "C08_S04_et_B",
              "answer": "Antenni mürasild.",
              "isCorrect": false
            },
            {
              "id": "C08_S04_et_C",
              "answer": "Tester.",
              "isCorrect": false
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