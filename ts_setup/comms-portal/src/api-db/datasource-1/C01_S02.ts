import { KbApi } from '@/api-kb'

export const C01_S02: KbApi.Article = {
  "id": "C01_S02",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S02_et",
      "localeCode": "et",
      "title": "Mõõtühikute eesliidetest",
      "materials": [
        {
          "id": "C01_S02_et_content",
          "text": "# Raadio- ja elektrotehnika teooria  \n## Mõõtühikute eesliidetest  \nRaadioamatörismis, nagu teistelgi tehnikaaladel, on vajalik nii väga suurte\nkui ka väga väikeste arvude väljendamine.\n\nSelleks, et see kergem oleks ja poleks vaja paljusid nulle loendada, kasutatakse eesliiteid,\nmis vastava mõõtühiku ette lisatakse.\n\nSuurte arvude väljendamine eesliidete abil:\n\n|Kordaja|Eesliide|Tähis|Näide|\n|-------|--------|-----|-----|\n| 1000 | kilo | k | 1 kHz = 1000 Hz |\n|1 000 000 | mega | M | 1 MHz = 1000000 Hz == 1000 kHz |\n|1 000 000 000 | giga | G | 1 GHz = 1000 MHz = 1000000000 Hz |\n|1 000 000 000 000 | tera | T | 1 THz = 1000 GHz = 1000000000000 Hz |\n\nVäikeste arvude väljendamine eesliidete abil:\n\n|Kordaja|Eesliide|Tähis|Näide|\n|-------|--------|-----|-----|\n| 0,001 | milli | m | 1 mm= 0,001 m |\n| 0,000001 | mikro | μ | 1 μm = 0,001 mm |\n|0,000000001 | nano| n | 1 nm = 0,001 μm |\n| 0,000000000001 | piko | p | 1 pm = 0,001 nm |"
        }
      ],
      "questionnaire": [
        {
          "id": "q115",
          "question": "Miks kasutatakse mõõtühikute ees liiteid “piko-”, “nano-”, “mikro-”, “milli-”, “kilo-“, “mega-“, “giga-”, “tera”?",
          "answers": [
            {
              "id": "C01_S02_et_q115_A",
              "answer": "Selleks, et vähem nulle kirjutada.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q115_B",
              "answer": "Ilma eesliiteta ühikute kirjutamine pole lubatud.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q115_C",
              "answer": "Eesliiteid ei tohi mingil juhul kasutada.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q116",
          "question": "Miks kasutatakse mõõtühikutes eesliidet “mega”?",
          "answers": [
            {
              "id": "C01_S02_et_q116_A",
              "answer": "Tegemist on eesliitega, mis lisatakse eriti sümpaatsele mõõtühikule.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q116_B",
              "answer": "Ühiku väärtuse miljonikordseks suurendamiseks.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q116_C",
              "answer": "Ühiku väärtuse miljonikordseks vähendamiseks.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q117",
          "question": "Kuidas on seotud sagedused 5 000 000 hertsi ja 5 megahertsi?",
          "answers": [
            {
              "id": "C01_S02_et_q117_A",
              "answer": "5 000 000 hertsi on suurem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q117_B",
              "answer": "5 000 000 hertsi on väiksem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q117_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q118",
          "question": "Kuidas on seotud sagedused 5 000 hertsi ja 5 megahertsi?",
          "answers": [
            {
              "id": "C01_S02_et_q118_A",
              "answer": "5 000 hertsi on suurem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q118_B",
              "answer": "5 000 hertsi on väiksem kui 5 megahertsi.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q118_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q119",
          "question": "Kuidas on seotud sagedused 5 mHz ja 5 MHz?",
          "answers": [
            {
              "id": "C01_S02_et_q119_A",
              "answer": "5 mHz on suurem kui 5 MHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q119_B",
              "answer": "5 mHz on väiksem kui 5 MHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q119_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q120",
          "question": "Mis on võrdne 1 kilovatiga?",
          "answers": [
            {
              "id": "C01_S02_et_q120_A",
              "answer": "1 vatt.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q120_B",
              "answer": "1000 vatti.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q120_C",
              "answer": "0,001 vatti.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q121",
          "question": "Te töötate sagedusel 14250 kHz ja tahate sagedust muuta 5 kHz ülespoole. Mis on teie uueks töösageduseks?",
          "answers": [
            {
              "id": "C01_S02_et_q121_A",
              "answer": "14255 kHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q121_B",
              "answer": "14245 kHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q121_C",
              "answer": "19250 kHz.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q122",
          "question": "Kuidas on seotud suurused 10 kilohertsi ja 10 millivolti?",
          "answers": [
            {
              "id": "C01_S02_et_q122_A",
              "answer": "10 kilohertsi on suurem kui 10 millivolti.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q122_B",
              "answer": "10 kilohertsi on väiksem kui 10 millivolti.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q122_C",
              "answer": "Nad ei ole seotud.",
              "isCorrect": true
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