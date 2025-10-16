import { ErauApi } from '../../api-erau'

export const C08_S06_en: ErauApi.ErauSubject = {
  "id": "C08_S06_en",
  "articleId": "C08_S06",
  "locale": "en",
  "title": "Spectrum analyzer",
  "questions": [
    {
      "id": "C08_S06_en_q010_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S06_en_q010_en_A",
          "text": "Wattmeter.",
          "isCorrect": false
        },
        {
          "id": "C08_S06_en_q010_en_B",
          "text": "Spectrum analyzer.",
          "isCorrect": true
        },
        {
          "id": "C08_S06_en_q010_en_C",
          "text": "Logic circuit analyzer.",
          "isCorrect": false
        }
      ],
      "text": "What device can be used to study spurious signals caused by intermodulation distortions in the transmitter output signal?",
      "qualifications": [
        "A",
        "B"
      ]
    },
    {
      "id": "C08_S06_en_q200_en",
      "info": [],
      "answers": [
        {
          "id": "C08_S06_en_q200_en_A",
          "text": "Cannot be used only if the ruler dimensions differ significantly from the wavelength.",
          "isCorrect": false
        },
        {
          "id": "C08_S06_en_q200_en_B",
          "text": "Can be used if the measurer acts quickly enough.",
          "isCorrect": false
        },
        {
          "id": "C08_S06_en_q200_en_C",
          "text": "Cannot be used, a spectrum analyzer must be used.",
          "isCorrect": true
        }
      ],
      "text": "Can a ruler be used to measure the wavelength of radio waves radiated by a transmitter?",
      "qualifications": [
        "D"
      ]
    }
  ]
}