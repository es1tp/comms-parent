import { KbApi } from '../../api-kb'

export const C04_S04: KbApi.Article = {
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
          "id": "C04_S04_et_q008_et",
          "groupId": "q008",
          "question": "Mis on vahesagedusvõimendi?",
          "answers": [
            {
              "id": "C04_S04_et_q008_et_A",
              "answer": "Fikseeritult häälestatud pääsuribaga võimendi.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_et_q008_et_B",
              "answer": "Vastuvõtja filter.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_et_q008_et_C",
              "answer": "Vastuvõtja demodulaator.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S04_et_q015_et",
          "groupId": "q015",
          "question": "Kui suur on SSB telefonitööks vajaliku hea kvartsfiltri pääsuriba laius?",
          "answers": [
            {
              "id": "C04_S04_et_q015_et_A",
              "answer": "6 kHz -6dB pääsuriba juures.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_et_q015_et_B",
              "answer": "2,1 kHz –6dB pääsuriba juures.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_et_q015_et_C",
              "answer": "500 Hz -6dB pääsuriba juures.",
              "isCorrect": false
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
      "id": "C04_S04_en",
      "localeCode": "en",
      "title": "Intermediate frequency",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S04_en_q008_en",
          "groupId": "q008",
          "question": "What is an intermediate frequency amplifier?",
          "answers": [
            {
              "id": "C04_S04_en_q008_en_A",
              "answer": "Fixed tuned passband amplifier.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_en_q008_en_B",
              "answer": "Receiver filter.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_en_q008_en_C",
              "answer": "Receiver demodulator.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S04_en_q015_en",
          "groupId": "q015",
          "question": "What is the passband width of a good crystal filter needed for SSB telephone operation?",
          "answers": [
            {
              "id": "C04_S04_en_q015_en_A",
              "answer": "6 kHz at -6dB passband.",
              "isCorrect": false
            },
            {
              "id": "C04_S04_en_q015_en_B",
              "answer": "2.1 kHz at –6dB passband.",
              "isCorrect": true
            },
            {
              "id": "C04_S04_en_q015_en_C",
              "answer": "500 Hz at -6dB passband.",
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