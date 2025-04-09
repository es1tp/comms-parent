import { Article } from '@/api-kb'

export const C04_S04: Article = {
  "id": "C04_S04",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S04_et",
      "localeCode": "et",
      "title": "Vahesagedus",
      "materials": [],
      "questionnaire": [
        {
          "id": "q008",
          "question": "Mis on vahesagedusvõimendi?",
          "answers": [
            {
              "id": "C04_S04_et_A",
              "answer": "Fikseeritult häälestatud pääsuribaga võimendi.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_et_B",
              "answer": "Vastuvõtja filter.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_et_C",
              "answer": "Vastuvõtja demodulaator.",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "q015",
          "question": "Kui suur on SSB telefonitööks vajaliku hea kvartsfiltri pääsuriba laius?",
          "answers": [
            {
              "id": "C04_S04_et_A",
              "answer": "6 kHz -6dB pääsuriba juures.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_et_B",
              "answer": "2,1 kHz –6dB pääsuriba juures.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_et_C",
              "answer": "500 Hz -6dB pääsuriba juures.",
              "isCorrect": false
            }
          ]
        }
      ]
    }
  ]
}