import { ExamApi } from '@/api-exam'

export const C04_S04_et: ExamApi.ErauSubject = {
  "id": "C04_S04_et",
  "articleId": "C04_S04",
  "locale": "et",
  "title": "Vahesagedus",
  "questions": [
    {
      "id": "q008",
      "info": [],
      "answers": [
        {
          "id": "C04_S04_et_q008_A",
          "text": "Fikseeritult häälestatud pääsuribaga võimendi.",
          "isCorrect": true
        },
        {
          "id": "C04_S04_et_q008_B",
          "text": "Vastuvõtja filter.",
          "isCorrect": false
        },
        {
          "id": "C04_S04_et_q008_C",
          "text": "Vastuvõtja demodulaator.",
          "isCorrect": false
        }
      ],
      "text": "Mis on vahesagedusvõimendi?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "q015",
      "info": [],
      "answers": [
        {
          "id": "C04_S04_et_q015_A",
          "text": "6 kHz -6dB pääsuriba juures.",
          "isCorrect": false
        },
        {
          "id": "C04_S04_et_q015_B",
          "text": "2,1 kHz –6dB pääsuriba juures.",
          "isCorrect": true
        },
        {
          "id": "C04_S04_et_q015_C",
          "text": "500 Hz -6dB pääsuriba juures.",
          "isCorrect": false
        }
      ],
      "text": "Kui suur on SSB telefonitööks vajaliku hea kvartsfiltri pääsuriba laius?",
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}