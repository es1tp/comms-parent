import { Article } from '@/api-kb'

export const C05_S06: Article = {
  "id": "C05_S06",
  "parentId": "C05",
  "pages": [
    {
      "id": "C05_S06_et",
      "localeCode": "et",
      "title": "Saatja kontrollimine",
      "materials": [],
      "questionnaire": [
        {
          "id": "q001",
          "question": "Mis tüüpi sisendsignaali kasutatakse SSB saatja lineaarsuse kontrollimiseks?",
          "answers": [
            {
              "id": "C05_S06_et_q001_A",
              "answer": "Tavalist kõnet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q001_B",
              "answer": "Helisageduslikku siinuslainet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q001_C",
              "answer": "Kaht helisageduslikku siinuslainet",
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
          "question": "Mida saab kontrollida kahe tooni testi abil?",
          "answers": [
            {
              "id": "C05_S06_et_q003_A",
              "answer": "Sagedusmodulatsiooni protsenti.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q003_B",
              "answer": "Kandesageduse faasinihet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q003_C",
              "answer": "Kõrgsagedusvõimendi lineaarsust.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q005",
          "question": "Milliseid kaht helisagedust võib kasutada SSB telefonisaatja lineaarsuse kontrollimiseks?",
          "answers": [
            {
              "id": "C05_S06_et_q005_A",
              "answer": "Tuleb kasutada signaale sagedusega 20Hz ja 20000Hz.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q005_B",
              "answer": "Võib kasutada suvalisi helisagedusi, mis paiknevad saatja helisagedustrakti pääsuribas tingimusel, et nad ei ole teineteisega harmoonilises suhtes.",
              "isCorrect": true
            },
            {
              "id": "C05_S06_et_q005_C",
              "answer": "Tuleb kasutada sagedusi 1200Hz ja 2400Hz.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q169",
          "question": "Mida teete Kui teile öeldakse, et Teie signaal on moonutatud?",
          "answers": [
            {
              "id": "C05_S06_et_q169_A",
              "answer": "Suurendate võimsust, et signaali kvaliteeti parandada.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q169_B",
              "answer": "Palute korrespondendil Teid mitte solvata.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q169_C",
              "answer": "Kontrollite saatja korrasolekut.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q303",
          "question": "Kuidas saab raadiojaama häälestamisel eetrisoleku aega viia miinimumini?",
          "answers": [
            {
              "id": "C05_S06_et_q303_A",
              "answer": "Kasutades suvalise pikkusega antenni.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q303_B",
              "answer": "Häälestades jaama esmalt 40m bandil siis minna üle teistele bandidele.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q303_C",
              "answer": "Kasutades jaama häälestamiseks antenni ekvivalenti (dummy load).",
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