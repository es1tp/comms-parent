import { KbApi } from '../../api-kb'

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
          "id": "C01_S02_et_q115_et",
          "groupId": "q115",
          "question": "Miks kasutatakse mõõtühikute ees liiteid “piko-”, “nano-”, “mikro-”, “milli-”, “kilo-“, “mega-“, “giga-”, “tera”?",
          "answers": [
            {
              "id": "C01_S02_et_q115_et_A",
              "answer": "Selleks, et vähem nulle kirjutada.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q115_et_B",
              "answer": "Ilma eesliiteta ühikute kirjutamine pole lubatud.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q115_et_C",
              "answer": "Eesliiteid ei tohi mingil juhul kasutada.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q116_et",
          "groupId": "q116",
          "question": "Miks kasutatakse mõõtühikutes eesliidet “mega”?",
          "answers": [
            {
              "id": "C01_S02_et_q116_et_A",
              "answer": "Tegemist on eesliitega, mis lisatakse eriti sümpaatsele mõõtühikule.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q116_et_B",
              "answer": "Ühiku väärtuse miljonikordseks suurendamiseks.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q116_et_C",
              "answer": "Ühiku väärtuse miljonikordseks vähendamiseks.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q117_et",
          "groupId": "q117",
          "question": "Kuidas on seotud sagedused 5 000 000 hertsi ja 5 megahertsi?",
          "answers": [
            {
              "id": "C01_S02_et_q117_et_A",
              "answer": "5 000 000 hertsi on suurem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q117_et_B",
              "answer": "5 000 000 hertsi on väiksem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q117_et_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q118_et",
          "groupId": "q118",
          "question": "Kuidas on seotud sagedused 5 000 hertsi ja 5 megahertsi?",
          "answers": [
            {
              "id": "C01_S02_et_q118_et_A",
              "answer": "5 000 hertsi on suurem kui 5 megahertsi.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q118_et_B",
              "answer": "5 000 hertsi on väiksem kui 5 megahertsi.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q118_et_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q119_et",
          "groupId": "q119",
          "question": "Kuidas on seotud sagedused 5 mHz ja 5 MHz?",
          "answers": [
            {
              "id": "C01_S02_et_q119_et_A",
              "answer": "5 mHz on suurem kui 5 MHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q119_et_B",
              "answer": "5 mHz on väiksem kui 5 MHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q119_et_C",
              "answer": "Nad on võrdsed.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q120_et",
          "groupId": "q120",
          "question": "Mis on võrdne 1 kilovatiga?",
          "answers": [
            {
              "id": "C01_S02_et_q120_et_A",
              "answer": "1 vatt.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q120_et_B",
              "answer": "1000 vatti.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q120_et_C",
              "answer": "0,001 vatti.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q121_et",
          "groupId": "q121",
          "question": "Te töötate sagedusel 14250 kHz ja tahate sagedust muuta 5 kHz ülespoole. Mis on teie uueks töösageduseks?",
          "answers": [
            {
              "id": "C01_S02_et_q121_et_A",
              "answer": "14255 kHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_et_q121_et_B",
              "answer": "14245 kHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q121_et_C",
              "answer": "19250 kHz.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_et_q122_et",
          "groupId": "q122",
          "question": "Kuidas on seotud suurused 10 kilohertsi ja 10 millivolti?",
          "answers": [
            {
              "id": "C01_S02_et_q122_et_A",
              "answer": "10 kilohertsi on suurem kui 10 millivolti.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q122_et_B",
              "answer": "10 kilohertsi on väiksem kui 10 millivolti.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_et_q122_et_C",
              "answer": "Nad ei ole seotud.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        }
      ]
    },
    {
      "id": "C01_S02_en",
      "localeCode": "en",
      "title": "Unit prefixes",
      "materials": [
        {
          "id": "C01_S02_en_content",
          "text": "# Radio and electrical engineering theory  \n## Unit prefixes  \nIn amateur radio, as in other technical fields, it is necessary to express both very large\nand very small numbers.\n\nTo make this easier and to avoid having to count many zeros, prefixes are used,\nwhich are added before the corresponding unit of measurement.\n\nExpressing large numbers using prefixes:\n\n|Multiplier|Prefix|Symbol|Example|\n|-------|--------|-----|-----|\n| 1000 | kilo | k | 1 kHz = 1000 Hz |\n|1 000 000 | mega | M | 1 MHz = 1000000 Hz == 1000 kHz |\n|1 000 000 000 | giga | G | 1 GHz = 1000 MHz = 1000000000 Hz |\n|1 000 000 000 000 | tera | T | 1 THz = 1000 GHz = 1000000000000 Hz |\n\nExpressing small numbers using prefixes:\n\n|Multiplier|Prefix|Symbol|Example|\n|-------|--------|-----|-----|\n| 0.001 | milli | m | 1 mm= 0.001 m |\n| 0.000001 | micro | μ | 1 μm = 0.001 mm |\n|0.000000001 | nano| n | 1 nm = 0.001 μm |\n| 0.000000000001 | pico | p | 1 pm = 0.001 nm |"
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S02_en_q115_en",
          "groupId": "q115",
          "question": "Why are prefixes \"pico-\", \"nano-\", \"micro-\", \"milli-\", \"kilo-\", \"mega-\", \"giga-\", \"tera\" used before units of measurement?",
          "answers": [
            {
              "id": "C01_S02_en_q115_en_A",
              "answer": "To write fewer zeros.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q115_en_B",
              "answer": "Writing units without prefixes is not allowed.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q115_en_C",
              "answer": "Prefixes must never be used under any circumstances.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q116_en",
          "groupId": "q116",
          "question": "Why is the prefix \"mega\" used in units of measurement?",
          "answers": [
            {
              "id": "C01_S02_en_q116_en_A",
              "answer": "It is a prefix that is added to particularly appealing units of measurement.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q116_en_B",
              "answer": "To increase the unit value by a million times.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q116_en_C",
              "answer": "To decrease the unit value by a million times.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q117_en",
          "groupId": "q117",
          "question": "How are the frequencies 5 000 000 hertz and 5 megahertz related?",
          "answers": [
            {
              "id": "C01_S02_en_q117_en_A",
              "answer": "5 000 000 hertz is greater than 5 megahertz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q117_en_B",
              "answer": "5 000 000 hertz is less than 5 megahertz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q117_en_C",
              "answer": "They are equal.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q118_en",
          "groupId": "q118",
          "question": "How are the frequencies 5 000 hertz and 5 megahertz related?",
          "answers": [
            {
              "id": "C01_S02_en_q118_en_A",
              "answer": "5 000 hertz is greater than 5 megahertz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q118_en_B",
              "answer": "5 000 hertz is less than 5 megahertz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q118_en_C",
              "answer": "They are equal.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q119_en",
          "groupId": "q119",
          "question": "How are the frequencies 5 mHz and 5 MHz related?",
          "answers": [
            {
              "id": "C01_S02_en_q119_en_A",
              "answer": "5 mHz is greater than 5 MHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q119_en_B",
              "answer": "5 mHz is less than 5 MHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q119_en_C",
              "answer": "They are equal.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q120_en",
          "groupId": "q120",
          "question": "What is equal to 1 kilowatt?",
          "answers": [
            {
              "id": "C01_S02_en_q120_en_A",
              "answer": "1 watt.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q120_en_B",
              "answer": "1000 watts.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q120_en_C",
              "answer": "0.001 watts.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q121_en",
          "groupId": "q121",
          "question": "You are operating on frequency 14250 kHz and want to change the frequency 5 kHz upward. What is your new operating frequency?",
          "answers": [
            {
              "id": "C01_S02_en_q121_en_A",
              "answer": "14255 kHz.",
              "isCorrect": true
            },
            {
              "id": "C01_S02_en_q121_en_B",
              "answer": "14245 kHz.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q121_en_C",
              "answer": "19250 kHz.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S02_en_q122_en",
          "groupId": "q122",
          "question": "How are the quantities 10 kilohertz and 10 millivolts related?",
          "answers": [
            {
              "id": "C01_S02_en_q122_en_A",
              "answer": "10 kilohertz is greater than 10 millivolts.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q122_en_B",
              "answer": "10 kilohertz is less than 10 millivolts.",
              "isCorrect": false
            },
            {
              "id": "C01_S02_en_q122_en_C",
              "answer": "They are not related.",
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