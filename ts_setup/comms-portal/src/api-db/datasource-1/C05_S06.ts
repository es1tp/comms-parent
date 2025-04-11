import { KbApi } from '@/api-kb'

export const C05_S06: KbApi.Article = {
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
          "id": "C05_S06_et_q001_et",
          "groupId": "q001",
          "question": "Mis tüüpi sisendsignaali kasutatakse SSB saatja lineaarsuse kontrollimiseks?",
          "answers": [
            {
              "id": "C05_S06_et_q001_et_A",
              "answer": "Tavalist kõnet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q001_et_B",
              "answer": "Helisageduslikku siinuslainet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q001_et_C",
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
          "id": "C05_S06_et_q003_et",
          "groupId": "q003",
          "question": "Mida saab kontrollida kahe tooni testi abil?",
          "answers": [
            {
              "id": "C05_S06_et_q003_et_A",
              "answer": "Sagedusmodulatsiooni protsenti.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q003_et_B",
              "answer": "Kandesageduse faasinihet.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q003_et_C",
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
          "id": "C05_S06_et_q005_et",
          "groupId": "q005",
          "question": "Milliseid kaht helisagedust võib kasutada SSB telefonisaatja lineaarsuse kontrollimiseks?",
          "answers": [
            {
              "id": "C05_S06_et_q005_et_A",
              "answer": "Tuleb kasutada signaale sagedusega 20Hz ja 20000Hz.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q005_et_B",
              "answer": "Võib kasutada suvalisi helisagedusi, mis paiknevad saatja helisagedustrakti pääsuribas tingimusel, et nad ei ole teineteisega harmoonilises suhtes.",
              "isCorrect": true
            },
            {
              "id": "C05_S06_et_q005_et_C",
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
          "id": "C05_S06_et_q169_et",
          "groupId": "q169",
          "question": "Mida teete Kui teile öeldakse, et Teie signaal on moonutatud?",
          "answers": [
            {
              "id": "C05_S06_et_q169_et_A",
              "answer": "Suurendate võimsust, et signaali kvaliteeti parandada.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q169_et_B",
              "answer": "Palute korrespondendil Teid mitte solvata.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q169_et_C",
              "answer": "Kontrollite saatja korrasolekut.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C05_S06_et_q303_et",
          "groupId": "q303",
          "question": "Kuidas saab raadiojaama häälestamisel eetrisoleku aega viia miinimumini?",
          "answers": [
            {
              "id": "C05_S06_et_q303_et_A",
              "answer": "Kasutades suvalise pikkusega antenni.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q303_et_B",
              "answer": "Häälestades jaama esmalt 40m bandil siis minna üle teistele bandidele.",
              "isCorrect": false
            },
            {
              "id": "C05_S06_et_q303_et_C",
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