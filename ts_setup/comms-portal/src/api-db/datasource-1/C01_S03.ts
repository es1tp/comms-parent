import { Article } from '@/api-kb'

export const C01_S03: Article = {
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
          "id": "q022",
          "question": "Kui suur on kasutatav võimsus kui 400 V pingega vooluallikas ühendatakse 800 oomise koormusega?",
          "answers": [
            {
              "id": "C01_S03_et_q022_A",
              "answer": "0,5 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q022_B",
              "answer": "200 vatti.",
              "isCorrect": true
            },
            {
              "id": "C01_S03_et_q022_C",
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
          "id": "q023",
          "question": "Kui suur on 12 V 0,2 A vooluga indikaatorlambi võimsus?",
          "answers": [
            {
              "id": "C01_S03_et_q023_A",
              "answer": "60 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q023_B",
              "answer": "24 vatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q023_C",
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
          "id": "q024",
          "question": "Kui suur võimsus eraldub 100 oomisel takistil, kui tema jalgadel mõõdetud pinge on 5 V?",
          "answers": [
            {
              "id": "C01_S03_et_q024_A",
              "answer": "500 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_B",
              "answer": "50 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_C",
              "answer": "20 millivatti.",
              "isCorrect": false
            },
            {
              "id": "C01_S03_et_q024_D",
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
    }
  ]
}