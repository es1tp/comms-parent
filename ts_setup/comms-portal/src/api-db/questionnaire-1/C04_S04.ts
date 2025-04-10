import { ExamApi } from '@/api-exam'

export const C04_S04: ExamApi.ErauSubject = {
  "id": "C04_S04",
  "title": {
    "et": "Vahesagedus"
  },
  "questions": [
    {
      "id": "q008",
      "info": [],
      "answers": [
        {
          "id": "C04_S04_et_A",
          "value": {
            "et": {
              "text": "Fikseeritult häälestatud pääsuribaga võimendi.",
              "isCorrect": true
            }
          }
        },
        {
          "id": "C04_S04_et_B",
          "value": {
            "et": {
              "text": "Vastuvõtja filter.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C04_S04_et_C",
          "value": {
            "et": {
              "text": "Vastuvõtja demodulaator.",
              "isCorrect": false
            }
          }
        }
      ],
      "text": {
        "et": "Mis on vahesagedusvõimendi?"
      },
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
          "id": "C04_S04_et_A",
          "value": {
            "et": {
              "text": "6 kHz -6dB pääsuriba juures.",
              "isCorrect": false
            }
          }
        },
        {
          "id": "C04_S04_et_B",
          "value": {
            "et": {
              "text": "2,1 kHz –6dB pääsuriba juures.",
              "isCorrect": true
            }
          }
        },
        {
          "id": "C04_S04_et_C",
          "value": {
            "et": {
              "text": "500 Hz -6dB pääsuriba juures.",
              "isCorrect": false
            }
          }
        }
      ],
      "text": {
        "et": "Kui suur on SSB telefonitööks vajaliku hea kvartsfiltri pääsuriba laius?"
      },
      "qualifications": [
        "A",
        "B"
      ]
    }
  ]
}