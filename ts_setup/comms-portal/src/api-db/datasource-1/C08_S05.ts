import { KbApi } from '../../api-kb'

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
    },
    {
      "id": "C08_S05_en",
      "localeCode": "en",
      "title": "Noise bridge",
      "materials": [],
      "questionnaire": [
        {
          "id": "C08_S05_en_q005_en",
          "groupId": "q005",
          "question": "What device is an antenna noise bridge?",
          "answers": [
            {
              "id": "C08_S05_en_q005_en_A",
              "answer": "Device for measuring the noise factor of an antenna or other electrical circuit.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_en_q005_en_B",
              "answer": "Device for measuring the impedance of an antenna or other electrical circuit.",
              "isCorrect": true
            },
            {
              "id": "C08_S05_en_q005_en_C",
              "answer": "Device for eliminating noise present in a receiver.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C08_S05_en_q006_en",
          "groupId": "q006",
          "question": "Where is an antenna noise bridge connected?",
          "answers": [
            {
              "id": "C08_S05_en_q006_en_A",
              "answer": "The device is connected to the antenna feed point and the noise level is read from the device scale.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_en_q006_en_B",
              "answer": "The device is connected between the transmitter and antenna and tuned until minimum standing wave ratio is achieved.",
              "isCorrect": false
            },
            {
              "id": "C08_S05_en_q006_en_C",
              "answer": "The device is connected between the receiver and a circuit with unknown impedance and tuned until minimum noise is achieved.",
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