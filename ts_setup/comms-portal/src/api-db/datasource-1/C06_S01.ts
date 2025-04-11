import { KbApi } from '@/api-kb'

export const C06_S01: KbApi.Article = {
  "id": "C06_S01",
  "parentId": "C06",
  "pages": [
    {
      "id": "C06_S01_et",
      "localeCode": "et",
      "title": "Antennide omadused",
      "materials": [],
      "questionnaire": [
        {
          "id": "q001",
          "question": "Miks kasutatakse sagedasti Yagi antenni 50 MHz sagedusalal?",
          "answers": [
            {
              "id": "C06_S01_et_q001_A",
              "answer": "Annab horisontaaltasapinnas hea ringkiirguse.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q001_B",
              "answer": "On väiksem,odavam ja kergem üles panna kui dipoolantenn.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q001_C",
              "answer": "Vähendab teiste jaamade poolt tekitatavaid interferentshäireid nii külg- kui tagasuunas.",
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
          "question": "Kuidas saab suurendada parasiitelementidega suundantenni sagedusriba laiust?",
          "answers": [
            {
              "id": "C06_S01_et_q003_A",
              "answer": "Kasutada suurema läbimõõduga elemente.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q003_B",
              "answer": "Vähendada elementide vahet.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q003_C",
              "answer": "Kasutada teleskoopelemente",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q005",
          "question": "Kui suur on dipoolantenni võimendus võrreldes isotroopse kiirgajaga?",
          "answers": [
            {
              "id": "C06_S01_et_q005_A",
              "answer": "On võrdse võimendusega.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q005_B",
              "answer": "Dipoolantenni võimendus on ligikaudu 2,3 dB suurem.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q005_C",
              "answer": "Dipoolantenni võimendus on 5,6 dB.",
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
          "question": "Mida tähendab termin ette-taha suhe?",
          "answers": [
            {
              "id": "C06_S01_et_q006_A",
              "answer": "Direktorite ja reflektorite arvu suhet.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q006_B",
              "answer": "Antenni peakiire suunas kiiratava võimsuse ja täpselt vastassuunalise kiirgusvõimsuse suhet.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q006_C",
              "answer": "Aktiivse vibraatori asendit reflektori ja direktorite suhtes.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "q171",
          "question": "Miks on transiiverile vaja antenni?",
          "answers": [
            {
              "id": "C06_S01_et_q171_A",
              "answer": "Ilma antennita pole vastuvõtt ja saatmine võimalik.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q171_B",
              "answer": "Antenn kaitseb välgulöögi eest.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q171_C",
              "answer": "Antenn maandab aparatuuri ja välistab elektrilöögi ohu.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q174",
          "question": "Milline allpooltoodud teguritest on antenni juures oluline?",
          "answers": [
            {
              "id": "C06_S01_et_q174_A",
              "answer": "Antenn peab olema valmistatud tsingi ja vase sulamist.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q174_B",
              "answer": "Antenn peab olema õigete mõõtmetega.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q174_C",
              "answer": "Antenni peab saama pöörata.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q175",
          "question": "Millised on üldjuhul lühilaineantenni mõõtmed?",
          "answers": [
            {
              "id": "C06_S01_et_q175_A",
              "answer": "Tunduvalt väiksemad lainepikkusest.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q175_B",
              "answer": "Umbes sama suur kui lainepikkus.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q175_C",
              "answer": "Antenni mõõtmed ei sõltu lainepikkusest.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q176",
          "question": "Mida nimetatakse suundantenniks?",
          "answers": [
            {
              "id": "C06_S01_et_q176_A",
              "answer": "Antenni, mis teatud suundadesse kiirgab paremini või võtab teatud suundadest paremini vastu.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q176_B",
              "answer": "Antenni, mis suunab end Maa magnetjõujoonte sihis magnetpooluse suunda.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q176_C",
              "answer": "Antenni, mida saab pöörata.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q177",
          "question": "Miks suundantenne tavaliselt pööratakse?",
          "answers": [
            {
              "id": "C06_S01_et_q177_A",
              "answer": "Antenni paigutamiseks transiiverist võimalikult kaugele.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q177_B",
              "answer": "Antenni orienteerimiseks suunda, kust võib oodata maksimaalset vastuvõetava ja saadetava signaali tugevust.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q177_C",
              "answer": "Antenni keeramiseks Maa magnetväljaga risti ja demagneetimiseks.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q178",
          "question": "Miks on raske valmistada antenni 160 meetri lainealale?",
          "answers": [
            {
              "id": "C06_S01_et_q178_A",
              "answer": "Antenni mõõtmed on väga suured.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q178_B",
              "answer": "160 meetri lainealal ei suuda signaal antennist kiirguda.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q178_C",
              "answer": "Antenni suunatoime ei lase teda põhjasuunast mujale keerata.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q179",
          "question": "Miks on raske valmistada ultralühilaineantenni?",
          "answers": [
            {
              "id": "C06_S01_et_q179_A",
              "answer": "Ultralühilaineantenni valmistamisel on vaja suurt täpsust.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q179_B",
              "answer": "Ultralühilaineantennide tegemisel on kasutatud alumiiniumi.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q179_C",
              "answer": "Maa magnetväli ei suuda ultralühilaineantenni enda sihis orienteerida.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "q180",
          "question": "Miks ultralühilaineantenni ei saa kasutada lühilainealal?",
          "answers": [
            {
              "id": "C06_S01_et_q180_A",
              "answer": "Lühilaineantenni mõõtmed peavad olema ultralühilaineantenni mõõtmetest tunduvalt suuremad.",
              "isCorrect": true
            },
            {
              "id": "C06_S01_et_q180_B",
              "answer": "Lühilaineantennide tegemisel on kasutatud vaske.",
              "isCorrect": false
            },
            {
              "id": "C06_S01_et_q180_C",
              "answer": "Pööraja ei suuda ultralühilaineantenni õigesse suunda keerata.",
              "isCorrect": false
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