import { KbApi } from '../../api-kb'

export const C03_S02: KbApi.Article = {
  "id": "C03_S02",
  "parentId": "C03",
  "pages": [
    {
      "id": "C03_S02_et",
      "localeCode": "et",
      "title": "Paralleel- ja jadaühendused",
      "materials": [],
      "questionnaire": [
        {
          "id": "C03_S02_et_q021_et",
          "groupId": "q021",
          "question": "Kui 1 amprilise vooluallikaga on ühendatud kaks paralleelselt lülitatud 10 oomist takistit kui suur vool läbib kumbagi takistit?",
          "answers": [
            {
              "id": "C03_S02_et_q021_et_A",
              "answer": "10 amprit.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q021_et_B",
              "answer": "1 amper.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q021_et_C",
              "answer": "0,5 amprit.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_et_q025_et",
          "groupId": "q025",
          "question": "Kui suur on mitmest takistist koosneva jadalülituse kogutakistus?",
          "answers": [
            {
              "id": "C03_S02_et_q025_et_A",
              "answer": "Kogutakistus on võrdne kõikide takistite takistuste summaga.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_et_q025_et_B",
              "answer": "Kogutakistus on väiksem kõige väiksema takisti takistuse väärtusest.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q025_et_C",
              "answer": "Kogutakistuse saame jagades takistite takistuste summa takistite arvuga.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_et_q026_et",
          "groupId": "q026",
          "question": "Kui suur on kahe võrdse paralleelselt lülitatud takistist koosneva ahela kogutakistus?",
          "answers": [
            {
              "id": "C03_S02_et_q026_et_A",
              "answer": "Kahekordne ühe takisti takistuse väärtus.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q026_et_B",
              "answer": "Pool kummagi takisti takistuse väärtusest.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_et_q026_et_C",
              "answer": "Kahekordne kummagi takisti väärtus.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_et_q027_et",
          "groupId": "q027",
          "question": "Kui suur on kahe paralleelselt ühendatud induktiivsuse koguväärtus?",
          "answers": [
            {
              "id": "C03_S02_et_q027_et_A",
              "answer": "Pool kummagi väärtusest.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_et_q027_et_B",
              "answer": "Kahekordne kummagi induktiivsuse väärtus.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q027_et_C",
              "answer": "Ei saa määrata induktiivsuste täpset suurust teadmata.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_et_q028_et",
          "groupId": "q028",
          "question": "Kui suur on kahe paralleelselt lülitatud kondensaatori kogumahtuvus?",
          "answers": [
            {
              "id": "C03_S02_et_q028_et_A",
              "answer": "Pool kummagi kondensaatori mahtuvusest.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_et_q028_et_B",
              "answer": "Kogumahtuvus on võrdne kondensaatorite mahtuvuste summaga.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_et_q028_et_C",
              "answer": "Mahtuvust ei saa määrata teadmata kondensatorite täpset mahtuvust.",
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
      "id": "C03_S02_en",
      "localeCode": "en",
      "title": "Parallel and series connections",
      "materials": [],
      "questionnaire": [
        {
          "id": "C03_S02_en_q021_en",
          "groupId": "q021",
          "question": "When a 1 ampere current source is connected to two 10 ohm resistors connected in parallel, what current flows through each resistor?",
          "answers": [
            {
              "id": "C03_S02_en_q021_en_A",
              "answer": "10 amperes.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q021_en_B",
              "answer": "1 ampere.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q021_en_C",
              "answer": "0.5 amperes.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_en_q025_en",
          "groupId": "q025",
          "question": "What is the total resistance of a series connection consisting of multiple resistors?",
          "answers": [
            {
              "id": "C03_S02_en_q025_en_A",
              "answer": "Total resistance equals the sum of all resistors' resistance values.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_en_q025_en_B",
              "answer": "Total resistance is less than the smallest resistor's resistance value.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q025_en_C",
              "answer": "We get total resistance by dividing the sum of resistors' resistance values by the number of resistors.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_en_q026_en",
          "groupId": "q026",
          "question": "What is the total resistance of a circuit consisting of two equal resistors connected in parallel?",
          "answers": [
            {
              "id": "C03_S02_en_q026_en_A",
              "answer": "Double the resistance value of one resistor.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q026_en_B",
              "answer": "Half the resistance value of either resistor.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_en_q026_en_C",
              "answer": "Double the value of either resistor.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_en_q027_en",
          "groupId": "q027",
          "question": "What is the total value of two inductances connected in parallel?",
          "answers": [
            {
              "id": "C03_S02_en_q027_en_A",
              "answer": "Half of either value.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_en_q027_en_B",
              "answer": "Double the value of either inductance.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q027_en_C",
              "answer": "Cannot determine exact inductance values without knowing.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C03_S02_en_q028_en",
          "groupId": "q028",
          "question": "What is the total capacitance of two capacitors connected in parallel?",
          "answers": [
            {
              "id": "C03_S02_en_q028_en_A",
              "answer": "Half the capacitance of either capacitor.",
              "isCorrect": false
            },
            {
              "id": "C03_S02_en_q028_en_B",
              "answer": "Total capacitance equals the sum of the capacitors' capacitances.",
              "isCorrect": true
            },
            {
              "id": "C03_S02_en_q028_en_C",
              "answer": "Capacitance cannot be determined without knowing exact capacitance of capacitors.",
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