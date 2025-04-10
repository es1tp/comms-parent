import { Article } from '@/api-kb'

export const C08_S06: Article = {
  "id": "C08_S06",
  "parentId": "C08",
  "pages": [
    {
      "id": "C08_S06_et",
      "localeCode": "et",
      "title": "Spektrianalüsaator",
      "materials": [],
      "questionnaire": [
        {
          "id": "q010",
          "question": "Millist seadet saab kasutada saatja väljundsignaalis esinevate intermodulatsioonimoonutustes tekitatud parasiitsignaalide uurimiseks?",
          "answers": [
            {
              "id": "C08_S06_et_q010_A",
              "answer": "Vattmeeter.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q010_B",
              "answer": "Spektrianalüsaator.",
              "isCorrect": true
            },
            {
              "id": "C08_S06_et_q010_C",
              "answer": "Loogikaskeemide analüsaator.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q200",
          "question": "Kas saatja poolt kiiratava raadiolainete pikkuse mõõtmiseks saab kasutada joonlauda?",
          "answers": [
            {
              "id": "C08_S06_et_q200_A",
              "answer": "Ei saa ainult siis, kui joonlaua mõõtmed erinevad tunduvalt lainepikkusest.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q200_B",
              "answer": "Saab, kui mõõtja piisavalt kiiresti tegutseb.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q200_C",
              "answer": "Ei saa, tuleb kasutada spektrianalüsaatorit.",
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