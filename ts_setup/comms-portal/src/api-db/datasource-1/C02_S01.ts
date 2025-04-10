import { Article } from '@/api-kb'

export const C02_S01: Article = {
  "id": "C02_S01",
  "parentId": "C02",
  "pages": [
    {
      "id": "C02_S01_et",
      "localeCode": "et",
      "title": "Passiivkomponendid",
      "materials": [],
      "questionnaire": [
        {
          "id": "q001",
          "question": "Kuidas mõjub ümbruskonna temperatuur süsiniktakisti takistusele?",
          "answers": [
            {
              "id": "C02_S01_et_q001_A",
              "answer": "Takistus suureneb 20% temperatuuri tõusmisel iga 10 kraadi võrra.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q001_B",
              "answer": "Takistuse suurus ei muutu.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q001_C",
              "answer": "Takistuse muutus sõltub takisti temperatuuritegurist.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q002",
          "question": "Mis tüüpi kondensaatorit kasutatakse tihti võrgutoitealaldi silumisfiltris?",
          "answers": [
            {
              "id": "C02_S01_et_q002_A",
              "answer": "Keraamilist ketaskondensaatorit.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q002_B",
              "answer": "Muutuva mahtuvusega vaakumkondensaatorit.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q002_C",
              "answer": "Elektrolüütkondensaatorit.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q003",
          "question": "Millised kondensaatorid lülitatakse rööbiti transformaatori sekundaarmähisega pingeimpulsside vähendamiseks?",
          "answers": [
            {
              "id": "C02_S01_et_q003_A",
              "answer": "Suure mahtuvusega kondensaatorid.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q003_B",
              "answer": "Muutuva mahtuvusega vaakumkondensaatorid.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q003_C",
              "answer": "Keraamilised kondensaatorid.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q004",
          "question": "Mis tekitab poolide omaresonantsi?",
          "answers": [
            {
              "id": "C02_S01_et_q004_A",
              "answer": "Hajutatud elektromagnetism.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q004_B",
              "answer": "Pöörisvoolud.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q004_C",
              "answer": "Keerdudevaheline mahtuvus.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q136",
          "question": "Milleks kasutatakse takisteid?",
          "answers": [
            {
              "id": "C02_S01_et_q136_A",
              "answer": "Raadiojaama ruumi võõraste isikute tuleku takistamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q136_B",
              "answer": "Sobiva takistusega vooluahelate koostamiseks.",
              "isCorrect": true
            },
            {
              "id": "C02_S01_et_q136_C",
              "answer": "Elektrienergia tarbimise vähendamiseks öisel ajal.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        }
      ]
    }
  ]
}