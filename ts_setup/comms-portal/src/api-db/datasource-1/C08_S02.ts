import { Article } from '@/api-kb'

export const C08_S02: Article = {
  "id": "C08_S02",
  "parentId": "C08",
  "pages": [
    {
      "id": "C08_S02_et",
      "localeCode": "et",
      "title": "Tester",
      "materials": [],
      "questionnaire": [
        {
          "id": "q195",
          "question": "Mida kasutate, et kontrollida kas elektrivõrgust saadav pinge on 230 volti?",
          "answers": [
            {
              "id": "C08_S02_et_A",
              "answer": "Kahte suure takistusega takistit.",
              "isCorrect": false
            },
            {
              "id": "C08_S02_et_B",
              "answer": "Testrit.",
              "isCorrect": true
            },
            {
              "id": "C08_S02_et_C",
              "answer": "Sagedusanalüsaatorit.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q196",
          "question": "Mis on testri kasutamise põhieeliseks?",
          "answers": [
            {
              "id": "C08_S02_et_A",
              "answer": "Kasutamismugavus, kuna üks seade võimaldab mõõta mitut parameetrit ja erinevaid mõõtepiirkondi.",
              "isCorrect": true
            },
            {
              "id": "C08_S02_et_B",
              "answer": "Suurem täpsus ja töökindlus võrreldes kõigi teiste mõõteriistadega.",
              "isCorrect": false
            },
            {
              "id": "C08_S02_et_C",
              "answer": "Seadme kergus.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q197",
          "question": "Mida tuleb jälgida testriga elektrivõrgust saadava pinge mõõtmisel?",
          "answers": [
            {
              "id": "C08_S02_et_A",
              "answer": "Tuleb välja lülitada kõik elektriseadmed.",
              "isCorrect": false
            },
            {
              "id": "C08_S02_et_B",
              "answer": "On vaja jälgida, et on valitud sobiv mõõtepiirkond.",
              "isCorrect": true
            },
            {
              "id": "C08_S02_et_C",
              "answer": "Tuleb kaks nädalat varem teatada Eesti Energiasse, et nad saaksid voolu katkestada.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q198",
          "question": "Mida tuleb meeles pidada Testriga takistuse mõõtmisel?",
          "answers": [
            {
              "id": "C08_S02_et_A",
              "answer": "Mõõdetav takistus ei tohi olla liiga suur, kuna mõõteseade võib läbi põleda.",
              "isCorrect": false
            },
            {
              "id": "C08_S02_et_B",
              "answer": "Mõõdetav takistus ei tohi olla liiga väike, kuna mõõteseadme näitu ei õnnestu fikseerida.",
              "isCorrect": false
            },
            {
              "id": "C08_S02_et_C",
              "answer": "Mõõdetav takistus ei tohi olla pinge all.",
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