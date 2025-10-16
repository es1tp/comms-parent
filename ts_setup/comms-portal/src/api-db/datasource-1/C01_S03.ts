import { KbApi } from '../../api-kb'

export const C01_S03: KbApi.Article = {
  "id": "C01_S03",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S03_et",
      "localeCode": "et",
      "title": "Oomi seadus",
      "materials": [
        {
          "id": "C01_S03_et_content",
          "text": "# Raadio- ja elektrotehnika teooria  \n## Oomi seadus  \nOomi seadus määrab kindlaks pinge U, voolutugevuse I ja takistuse R vahelise seose:\n\nU=I*R või I=U/R või R=U*I\n\nI on ahelaosa läbiva voolu tugevus, mida mõõdetakse amprites (A);\nU on pinge, mida mõõdetakse voltides (V);\nR on vooluahela lõigu takistus, mida mõõdetakse oomides (Ω).\n\nVahelduvvoolu korral kehtib seos\n\nI=U/Z\n\nkus Z on vahelduvvooluahela näivtakistus.\n\nOomi seadusega on lähedalt seotud võimsus, mida saab arvutada:\n\nP = U * I = I * I * R = U * U * R"
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S03_et_q022_et",
          "groupId": "q022",
          "question": "Kui suur on kasutatav võimsus kui 400 V pingega vooluallikas ühendatakse 800 oomise koormusega?",
          "answers": [
            {
              "id": "C01_S03_et_q022_et_A",
              "answer": "0,5 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q022_et_B",
              "answer": "200 vatti.",
              "isCorrect": true
            },
            {
              "id": "C01_S03_et_q022_et_C",
              "answer": "400 vatti",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S03_et_q023_et",
          "groupId": "q023",
          "question": "Kui suur on 12 V 0,2 A vooluga indikaatorlambi võimsus?",
          "answers": [
            {
              "id": "C01_S03_et_q023_et_A",
              "answer": "60 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q023_et_B",
              "answer": "24 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q023_et_C",
              "answer": "2,4 vatti",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S03_et_q024_et",
          "groupId": "q024",
          "question": "Kui suur võimsus eraldub 100 oomisel takistil, kui tema jalgadel mõõdetud pinge on 5 V?",
          "answers": [
            {
              "id": "C01_S03_et_q024_et_A",
              "answer": "500 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_et_B",
              "answer": "50 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_et_C",
              "answer": "20 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_et_D",
              "answer": "250 millivatti.",
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
      "id": "C01_S03_en",
      "localeCode": "en",
      "title": "Ohm's law",
      "materials": [
        {
          "id": "C01_S03_en_content",
          "text": "# Radio and electrical engineering theory  \n## Ohm's law  \nOhm's law defines the relationship between voltage U, current intensity I and resistance R:\n\nU=I*R or I=U/R or R=U*I\n\nI is the intensity of current flowing through the circuit section, measured in amperes (A);\nU is voltage, measured in volts (V);\nR is the resistance of the circuit section, measured in ohms (Ω).\n\nFor alternating current, the relationship applies\n\nI=U/Z\n\nwhere Z is the apparent resistance of the AC circuit.\n\nPower is closely related to Ohm's law and can be calculated:\n\nP = U * I = I * I * R = U * U * R"
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S03_en_q022_en",
          "groupId": "q022",
          "question": "What is the usable power when a 400 V voltage source is connected to an 800 ohm load?",
          "answers": [
            {
              "id": "C01_S03_en_q022_en_A",
              "answer": "0.5 watts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q022_en_B",
              "answer": "200 watts.",
              "isCorrect": true
            },
            {
              "id": "C01_S03_en_q022_en_C",
              "answer": "400 watts",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S03_en_q023_en",
          "groupId": "q023",
          "question": "What is the power of a 12 V 0.2 A current indicator lamp?",
          "answers": [
            {
              "id": "C01_S03_en_q023_en_A",
              "answer": "60 watts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q023_en_B",
              "answer": "24 watts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q023_en_C",
              "answer": "2.4 watts",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S03_en_q024_en",
          "groupId": "q024",
          "question": "What power is dissipated in a 100 ohm resistor when the voltage measured across its terminals is 5 V?",
          "answers": [
            {
              "id": "C01_S03_en_q024_en_A",
              "answer": "500 milliwatts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q024_en_B",
              "answer": "50 milliwatts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q024_en_C",
              "answer": "20 milliwatts.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_en_q024_en_D",
              "answer": "250 milliwatts.",
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