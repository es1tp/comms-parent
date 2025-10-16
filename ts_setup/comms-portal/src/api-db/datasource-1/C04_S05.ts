import { KbApi } from '../../api-kb'

export const C04_S05: KbApi.Article = {
  "id": "C04_S05",
  "parentId": "C04",
  "pages": [
    {
      "id": "C04_S05_et",
      "localeCode": "et",
      "title": "Detektor",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S05_et_q001_et",
          "groupId": "q001",
          "question": "Mis on produkt-detektor?",
          "answers": [
            {
              "id": "C04_S05_et_q001_et_A",
              "answer": "Detektor, mis annab ostsillaatorsignaali seguastme sisendisse.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_et_B",
              "answer": "Võimendav detektor, mis kitsendab vastuvõtja võimenduskanali pääsuriba.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q001_et_C",
              "answer": "Detektor, mis kasutab segustusprotsessis vastuvõtjas genereeritud kandesagedust.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_et_q003_et",
          "groupId": "q003",
          "question": "Mida nimetatakse detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q003_et_A",
              "answer": "Vastuvõetaval kandelainel oleva informatsiooni summutamist S-meetri töölerakendamise eesmärgil.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q003_et_B",
              "answer": "Moduleeritud kõrgsagedussignaalilt informatsiooni eraldamist.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q003_et_C",
              "answer": "Kandelaine modulatsiooni.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_et_q004_et",
          "groupId": "q004",
          "question": "Mis on sagedusdiskriminaator?",
          "answers": [
            {
              "id": "C04_S05_et_q004_et_A",
              "answer": "FM signaalide detekteerimiseks kasutatav lülitus.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q004_et_B",
              "answer": "Kahe kandelaine naabruses asuva parasiitsignaali filtreerimislõlitus.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q004_et_C",
              "answer": "Automaatne lainelülitus.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_et_q005_et",
          "groupId": "q005",
          "question": "Mida kasutatakse FM signaali detekteerimiseks?",
          "answers": [
            {
              "id": "C04_S05_et_q005_et_A",
              "answer": "Balanssmodulaatorit.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_et_q005_et_B",
              "answer": "Sagedusdiskriminaatorit.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_et_q005_et_C",
              "answer": "Produkt detektorit.",
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
      "id": "C04_S05_en",
      "localeCode": "en",
      "title": "Detector",
      "materials": [],
      "questionnaire": [
        {
          "id": "C04_S05_en_q001_en",
          "groupId": "q001",
          "question": "What is a product detector?",
          "answers": [
            {
              "id": "C04_S05_en_q001_en_A",
              "answer": "Detector that provides oscillator signal to mixer stage input.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_en_q001_en_B",
              "answer": "Amplifying detector that narrows receiver amplification channel passband.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_en_q001_en_C",
              "answer": "Detector that uses carrier frequency generated in receiver in mixing process.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_en_q003_en",
          "groupId": "q003",
          "question": "What is called detection?",
          "answers": [
            {
              "id": "C04_S05_en_q003_en_A",
              "answer": "Suppression of information on received carrier wave for S-meter operation purpose.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_en_q003_en_B",
              "answer": "Extraction of information from modulated high frequency signal.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_en_q003_en_C",
              "answer": "Carrier wave modulation.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_en_q004_en",
          "groupId": "q004",
          "question": "What is a frequency discriminator?",
          "answers": [
            {
              "id": "C04_S05_en_q004_en_A",
              "answer": "Circuit used for detecting FM signals.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_en_q004_en_B",
              "answer": "Filtering circuit for spurious signals located near two carrier waves.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_en_q004_en_C",
              "answer": "Automatic band switching.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C04_S05_en_q005_en",
          "groupId": "q005",
          "question": "What is used to detect FM signal?",
          "answers": [
            {
              "id": "C04_S05_en_q005_en_A",
              "answer": "Balanced modulator.",
              "isCorrect": false
            },
            {
              "id": "C04_S05_en_q005_en_B",
              "answer": "Frequency discriminator.",
              "isCorrect": true
            },
            {
              "id": "C04_S05_en_q005_en_C",
              "answer": "Product detector.",
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