import { KbApi } from '../../api-kb'

export const C08_S06: KbApi.Article = {
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
          "id": "C08_S06_et_q010_et",
          "groupId": "q010",
          "question": "Millist seadet saab kasutada saatja väljundsignaalis esinevate intermodulatsioonimoonutustes tekitatud parasiitsignaalide uurimiseks?",
          "answers": [
            {
              "id": "C08_S06_et_q010_et_A",
              "answer": "Vattmeeter.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q010_et_B",
              "answer": "Spektrianalüsaator.",
              "isCorrect": true
            },
            {
              "id": "C08_S06_et_q010_et_C",
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
          "id": "C08_S06_et_q200_et",
          "groupId": "q200",
          "question": "Kas saatja poolt kiiratava raadiolainete pikkuse mõõtmiseks saab kasutada joonlauda?",
          "answers": [
            {
              "id": "C08_S06_et_q200_et_A",
              "answer": "Ei saa ainult siis, kui joonlaua mõõtmed erinevad tunduvalt lainepikkusest.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q200_et_B",
              "answer": "Saab, kui mõõtja piisavalt kiiresti tegutseb.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_et_q200_et_C",
              "answer": "Ei saa, tuleb kasutada spektrianalüsaatorit.",
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
      "id": "C08_S06_en",
      "localeCode": "en",
      "title": "Spectrum analyzer",
      "materials": [],
      "questionnaire": [
        {
          "id": "C08_S06_en_q010_en",
          "groupId": "q010",
          "question": "What device can be used to study spurious signals caused by intermodulation distortions in the transmitter output signal?",
          "answers": [
            {
              "id": "C08_S06_en_q010_en_A",
              "answer": "Wattmeter.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_en_q010_en_B",
              "answer": "Spectrum analyzer.",
              "isCorrect": true
            },
            {
              "id": "C08_S06_en_q010_en_C",
              "answer": "Logic circuit analyzer.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C08_S06_en_q200_en",
          "groupId": "q200",
          "question": "Can a ruler be used to measure the wavelength of radio waves radiated by a transmitter?",
          "answers": [
            {
              "id": "C08_S06_en_q200_en_A",
              "answer": "Cannot be used only if the ruler dimensions differ significantly from the wavelength.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_en_q200_en_B",
              "answer": "Can be used if the measurer acts quickly enough.",
              "isCorrect": false
            },
            {
              "id": "C08_S06_en_q200_en_C",
              "answer": "Cannot be used, a spectrum analyzer must be used.",
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