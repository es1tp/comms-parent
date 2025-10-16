import { ErauApi } from '../../api-erau'

export const C03_S06_en: ErauApi.ErauSubject = {
  "id": "C03_S06_en",
  "articleId": "C03_S06",
  "locale": "en",
  "title": "Protection circuits",
  "questions": [
    {
      "id": "C03_S06_en_q139_en",
      "info": [],
      "answers": [
        {
          "id": "C03_S06_en_q139_en_A",
          "text": "Investigate why the fuse burned out.",
          "isCorrect": true
        },
        {
          "id": "C03_S06_en_q139_en_B",
          "text": "Replace the fuse with a more resistant one.",
          "isCorrect": false
        },
        {
          "id": "C03_S06_en_q139_en_C",
          "text": "Do not use fuses in future work.",
          "isCorrect": false
        }
      ],
      "text": "What do you do when a fuse burns out?",
      "qualifications": [
        "D"
      ]
    },
    {
      "id": "C03_S06_en_q147_en",
      "info": [],
      "answers": [
        {
          "id": "C03_S06_en_q147_en_A",
          "text": "As solder to lower melting temperature so radio components are not damaged.",
          "isCorrect": false
        },
        {
          "id": "C03_S06_en_q147_en_B",
          "text": "To break the circuit in case of excessive load.",
          "isCorrect": true
        },
        {
          "id": "C03_S06_en_q147_en_C",
          "text": "To remove ice in winter to protect transmitter final stage from freezing.",
          "isCorrect": false
        }
      ],
      "text": "What are fuses used for in radio equipment?",
      "qualifications": [
        "D"
      ]
    }
  ]
}