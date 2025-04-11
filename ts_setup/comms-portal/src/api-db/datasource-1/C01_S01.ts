import { KbApi } from '@/api-kb'

export const C01_S01: KbApi.Article = {
  "id": "C01_S01",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S01_et",
      "localeCode": "et",
      "title": "Mõõtühikud",
      "materials": [
        {
          "id": "C01_S01_et_content",
          "text": "# Raadio- ja elektrotehnika teooria  \n## Mõõtühikud  \nElektrivoolu tugevus ehk voolutugevus ***I*** on füüsikaline suurus, mis\nvõrdub ajaühikus elektrijuhi ristlõike pinda läbinud elektrilaenguga, selle\nmõõtühik on Amper (***A***). Voolutugevust mõõdetakse ampermeetriga,\nkusjuures ampermeeter ühendatakse vooluringi jadamisi.\n\nPinge (***U***) on füüsikaline suurus, mis iseloomustab kahe punkti vahelist\nelektrivälja potentsiaalide erinevust. Eristatakse alalispinget (püsiva polaarsusega)\nja vahelduvpinget (vahelduvasuunalise polaarsusega). Pinge mõõtühik on Volt\n(***V***). Pinget mõõdetakse voltmeetriga.\n\nTakistus ***R*** iseloomustab elektrijuhi omadust avaldada elektrilaengute\nliikumisele takistavat mõju. Takistuse mõõtühik on oom (***Ω***).\n\nSagedus ***f*** on võrdsete ajavahemike tagant korduvate sündmuste (nt. võngete, impulsside) arv ajaühikus.\nSageduse ühik on herts (***Hz***), 1 sündmus sekundis on 1 Hz.\n\nPeriood ehk võnkeperiood ***T*** on korduva muutuse tsükli kestus. Periood\non sagedusega pöördvõrdelises seoses, T=1/f. Perioodi ühik on sekund\n(***s***).\n\nLainepikkus ***λ*** on kaugus kahe teineteisele lähima samas faasis võnkuva punkti vahel.\nSiinuslaines on lainepikkuseks näiteks vahemaa kahe lähima laineharja või lainenõo\nvahel. Lainepikkuse mõõtühik on meeter (m).\n\nLainepikkus on võrdne laine levimiskiiruse ***v*** ja laine sageduse ***f*** jagatisega:\n\nλ=v/f\n\nHelilainete puhul on levimiskiiruseks helikiirus (õhus umbes 330 m/s).\nElektromagnetlaine levib vaakumis valguse kiirusega c=299792458m/s.\n\nElektrimahtuvus ***C*** (lühemalt mahtuvus) iseloomustab elektrit juhtiva keha või kondensaatori\nvõimet salvestada elektrilaengut. Mahtuvuse mõõtühik on farad (***F***).\n\nInduktiivsus ***L*** on elektromagnetilist induktsiooni iseloomustav füüsikaline suurus.\nInduktiivsuse mõõtühik on henri (***H***).\n\nIgal elektrijuhil (nt juhtmekeerul, poolil jm juhtival kontuuril) on teatav\ninduktiivsus, sest juhti läbiva\nvooluga kaasneb alati magnetväli. Induktiivsus avaldub võimena takistada eneseinduktsiooni tõttu\nvoolu muutumist. Näiteks mida suurem on pooli induktiivsus, seda aeglasemalt alalisvool\nsisselülitamise järel poolis tugevneb. Vahelduvvooluahelas suureneb koos induktiivsuse\nja sagedusega pooli induktiivtakistus.\n\nJuhul kui voolu muutus ühes kontuuris (näiteks trafo mähises) indutseerib vastastikuse\ninduktsiooni teel elektromotoorjõu ka teises kontuuris (teises mähises), on tegemist\nvastastikuse induktiivsusega. Vastastikuse induktiivsuse tähis on M või, mõõtühik\nikka henri.\n\nNäivtakistus ehk impedants ***Z*** on elektriahela kahe punkti vahel perioodilisele siinuselisele\nvahelduvasuunalisele elektrivoolule ehk vahelduvvoolule avalduv takistus, mis koosneb kahest\npõhikomponendist:\n\n* aktiivtakistus ehk resistants ***R***  ‒ iseloomustab elektrienergia muundumist teist liiki energiaks, näiteks soojuseks;\n* reaktiivtakistus ehk reaktants ***X*** - iseloomustab elektrienergia perioodilist kadudeta toimuvat muutumist magnetvälja või elektrivälja energiaks.\n\nInduktiivsete ahelaelementide reaktiivtakistus on induktiivtakistus ja mahtuvuslike elementide\nreaktiivtakistus on mahtuvustakistus. Impedants on sagedusest on sõltuv\nsuurus. Induktiivtakistus suureneb sageduse suurenemisel, mahtuvustakistus\nväheneb sageduse suurenemisel. Induktiivtakistust loetakse positiivseks ja\nmahtuvustakistust negatiivseks.\n\nImpedantsi mõõtühik on oom (***Ω***).\n\nElektrotehnikas eristatakse hetk-, aktiiv-, reaktiiv- ja näivvõimsust.\nElektriseade kas muundab mingit liiki energiat elektrienergiaks\n(näiteks elektrigeneraator) või elektrienergiat teist liiki energiaks\n(näiteks elektripliit soojuseks). Seadme elektrivõimsus väljendab\najaühikus toodetava või tarbitava elektrienergia hulka.\nTarbiva elektriseadme ehk elektritarviti võimsust nimetatakse ka\nvõimsustarbeks.\n\n* Hetkvõimsuseks ***p*** nimetatakse pinge ja voolutugevuse hetkväärtuse korrutist.\n* Aktiivvõimsus ***P*** on vahelduvvoolu hetkvõimsuse keskväärtus ühe perioodi kestel.\n* Reaktiivvõimsus ***Q*** iseloomustab kiirust, millega energia salvestub reaktiivtakistusega elektriahelaelementidesse, näiteks kondensaatorisse ja induktiivpooli, samuti energiavahetust ahelaosade vahel.\n* Näivvõimsus ***S*** on aktiiv- ja reaktiivõimsuse geomeetriline summa.\n\nAktiivtakistusega R elektritarviti võimsus P on arvutatav pinge U ja voolu I kaudu järgmiselt:\n\nP = U * I = I * I * R = U * U * R \n\nAktiivvõimsuse mõõtühik on vatt (***W***), reaktiivvõimsuse ühik varr\n(***var***) ja näivvõimsuse ühik voltamper (***V•A***)."
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S01_et_q001_et",
          "groupId": "q001",
          "question": "Mida tähendab termin impedants?",
          "answers": [
            {
              "id": "C01_S01_et_q001_et_A",
              "answer": "Kondensaatoris salvestatavat elektrilaengut.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q001_et_B",
              "answer": "Vooluringi poolt vahelduvvoolule osutatavat takistust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q001_et_C",
              "answer": "Mahtuvust sisaldava vooluringi poolt vahelduvvoolule osutatavat takistust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S01_et_q011_et",
          "groupId": "q011",
          "question": "Milline on reaktiivtakistuse mõõtühik?",
          "answers": [
            {
              "id": "C01_S01_et_q011_et_A",
              "answer": "Amper.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q011_et_B",
              "answer": "Oom",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q011_et_C",
              "answer": "Siemens.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S01_et_q012_et",
          "groupId": "q012",
          "question": "Milline on impedantsi mõõtühik?",
          "answers": [
            {
              "id": "C01_S01_et_q012_et_A",
              "answer": "Oom.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q012_et_B",
              "answer": "Volt.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q012_et_C",
              "answer": "Amper.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S01_et_q113_et",
          "groupId": "q113",
          "question": "Mis ühikutes mõõdetakse raadiolaine pikkust?",
          "answers": [
            {
              "id": "C01_S01_et_q113_et_A",
              "answer": "Hertsides.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q113_et_B",
              "answer": "Meetrites.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q113_et_C",
              "answer": "Raadiolaine pikkust ei saa mõõta.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q114_et",
          "groupId": "q114",
          "question": "Mis ühikutes mõõdetakse raadiolaine sagedust?",
          "answers": [
            {
              "id": "C01_S01_et_q114_et_A",
              "answer": "Hertsides.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q114_et_B",
              "answer": "Meetrites.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q114_et_C",
              "answer": "Raadiolaine sagedust ei saa mõõta.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q123_et",
          "groupId": "q123",
          "question": "Mida mõõdetakse vattides?",
          "answers": [
            {
              "id": "C01_S01_et_q123_et_A",
              "answer": "Võimsust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q123_et_B",
              "answer": "Kaitseriietuse pehmust.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q123_et_C",
              "answer": "Lainepikkust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q124_et",
          "groupId": "q124",
          "question": "Mida mõõdetakse voltides?",
          "answers": [
            {
              "id": "C01_S01_et_q124_et_A",
              "answer": "Sagedust.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q124_et_B",
              "answer": "Kaitseriietuse voltide arvu.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q124_et_C",
              "answer": "Pinget.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q125_et",
          "groupId": "q125",
          "question": "Mida mõõdetakse oomides?",
          "answers": [
            {
              "id": "C01_S01_et_q125_et_A",
              "answer": "Oomegategurit.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q125_et_B",
              "answer": "Takistust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q125_et_C",
              "answer": "Sagedust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q126_et",
          "groupId": "q126",
          "question": "Mida mõõdetakse amprites?",
          "answers": [
            {
              "id": "C01_S01_et_q126_et_A",
              "answer": "Voolutugevust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q126_et_B",
              "answer": "Levitegurit.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q126_et_C",
              "answer": "Sagedust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q127_et",
          "groupId": "q127",
          "question": "Mida mõõdetakse hertsides?",
          "answers": [
            {
              "id": "C01_S01_et_q127_et_A",
              "answer": "Elektrivoolu kahjulikku mõju südamele.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q127_et_B",
              "answer": "Sagedust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q127_et_C",
              "answer": "Lainepikkust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q128_et",
          "groupId": "q128",
          "question": "Mida mõõdetakse meetrites?",
          "answers": [
            {
              "id": "C01_S01_et_q128_et_A",
              "answer": "Takistust.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q128_et_B",
              "answer": "Lainepikkust.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q128_et_C",
              "answer": "Sagedust.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_et_q129_et",
          "groupId": "q129",
          "question": "Miks mõõdetakse lainepikkust meetrites?",
          "answers": [
            {
              "id": "C01_S01_et_q129_et_A",
              "answer": "Meeter on pikkusühik.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_et_q129_et_B",
              "answer": "Elektromagnetlained levivad väga suure kiirusega.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_et_q129_et_C",
              "answer": "Meetri kasutamisel saavutatakse kõige suurem saatja võimsus.",
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