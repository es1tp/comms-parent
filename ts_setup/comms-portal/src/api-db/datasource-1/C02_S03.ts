import { KbApi } from '@/api-kb'

export const C02_S03: KbApi.Article = {
  "id": "C02_S03",
  "parentId": "C02",
  "pages": [
    {
      "id": "C02_S03_et",
      "localeCode": "et",
      "title": "Transformaatorid",
      "materials": [],
      "questionnaire": [
        {
          "id": "q005",
          "question": "Milline vooluringi komponent võimaldab suurendada vahelduvvoolu pinget 100 voldilt 1000 voldini?",
          "answers": [
            {
              "id": "C02_S03_et_q005_A",
              "answer": "Transformaator.",
              "isCorrect": true
            },
            {
              "id": "C02_S03_et_q005_B",
              "answer": "Kondensaator.",
              "isCorrect": false
            },
            {
              "id": "C02_S03_et_q005_C",
              "answer": "Diood.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q006",
          "question": "Kuidas nimetatakse transformaatori primaarmähises voolavat voolu, kui sekundaarmähise külge pole koormust lülitatud?",
          "answers": [
            {
              "id": "C02_S03_et_q006_A",
              "answer": "Magneetimisvooluks.",
              "isCorrect": true
            },
            {
              "id": "C02_S03_et_q006_B",
              "answer": "Alalisvooluks.",
              "isCorrect": false
            },
            {
              "id": "C02_S03_et_q006_C",
              "answer": "Ergutusvooluks.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q007",
          "question": "Mis suurustega iseloomustatakse tavaliselt jõutransformaatori primaar- ja sekundaarmähiseid?",
          "answers": [
            {
              "id": "C02_S03_et_q007_A",
              "answer": "Dzauli sekundis.",
              "isCorrect": false
            },
            {
              "id": "C02_S03_et_q007_B",
              "answer": "Volt või volt-amper.",
              "isCorrect": true
            },
            {
              "id": "C02_S03_et_q007_C",
              "answer": "Kulonit sekundis.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q029",
          "question": "Kui suur on pinge transformaatori 500 keerust koosneva sekundaarmähise klemmidel, kui 2200 keerust koosnev primaarmähis on lülitatud 220 V vahelduvvooluvõrku?",
          "answers": [
            {
              "id": "C02_S03_et_q029_A",
              "answer": "50 V",
              "isCorrect": true
            },
            {
              "id": "C02_S03_et_q029_B",
              "answer": "26 V",
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