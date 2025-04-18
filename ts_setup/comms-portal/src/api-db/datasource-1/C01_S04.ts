import { KbApi } from '../../api-kb'

export const C01_S04: KbApi.Article = {
  "id": "C01_S04",
  "parentId": "C01",
  "pages": [
    {
      "id": "C01_S04_et",
      "localeCode": "et",
      "title": "Detsibellid",
      "materials": [
        {
          "id": "C01_S04_et_content",
          "text": "# Raadio- ja elektrotehnika teooria  \n## Detsibellid  \nDetsibell (tähis dB) on kümnendlogaritmiline mõõtühik, mis väljendab kahe füüsikalise\nsuuruse (sageli võimsuse või pinge) suhet või ühe suuruse taset võrreldes mingi\nvõrdlus- ehk baassuurusega. Detsibell on Belli osaühik, 1B = 10 dB.\n\nKuna väljendatakse kahe suuruse suhet, mille ühikud on samad, siis on detsibell\ndimensioonita suurus. Detsibellides mõõdetakse näiteks helirõhutaset, elektrisignaali\nvõimendust või nõrgendust jms.\n\nSelle ühiku eeliseks on väga suurte ja väga väikeste suhtarvude lihtne esitamine,\nmille tingib logaritmiline skaala. See lubab meil näiteks väga suurt ja väga väikest\nsignaalitasemete suhet kergesti ja arusaadavalt kirjeldada tülikalt pikki arve kasutamata.\n\nBellide arvutusvalemid on erisugused olenevalt sellest, kas on tegemist energiasuurustega\nnäiteks energia, võimsus, heliintensiivsus, või väljasuurustega\n(amplituudidega), näiteks elektrivälja tugevus, elektripinge, voolutugevus, helirõhk.\n\nEnergiaühikute korral korral on N (dB) = 10 * lg ( P1/P2) ja väljaühikute\nkorral on N (dB) = 20 * lg (F1/F2) kus P1 või F1 on ette määratud\nbaasväärtus.\n\nMõned sagedasti kasutatavad dB väärtused:\n\n| dB | Võimsuste suhe | Amplituudide suhe |\n|----|----------------|-------------------|\n| 60 | 1000000 | 1000 |\n| 40 | 10000 | 100 |\n| 20 | 100 | 10 |\n| 10 | 10  | 3,162 |\n| 6 | 3.981 ≈ 4 | 1,995 ≈ 2 |\n| 0 | 1 | 1 |\n| -3 | 0,501 ≈ 1⁄2 | 0,708 |\n| −6 | 0,251 ≈ 1⁄4 | 0,501 ≈ 1⁄2 |\n| −10 |\t0,1 | 0,3162 |\n| −20| 0,01 | 0,1 |\n| −40 |\t0,0001| 0,01 |\n|−60 | 0,000001|0,001 |\n\nNäiteks -3 dB signaalikadu koaksiaalkaablis tähendab, et pool saatja\nväljundvõimsusest läheb kaablis kaduma. Saatevõimsuse kümnekordistamine\ntähendab +10dB muutust, aga +20dB muutus tähendab juba saatevõimsuse\nsajakordistamist. \n\nVastuvõtjate S-meetri skaalal tähendab üldiselt iga samm 6dB muutust,\nehk siis S8-lt S9-le minek tähendab võimsuse neljakordistumist või antennist\ntulev signaali pinge kahekordistumist.\n\n1 dB on väikseim helitugevuse muutus, mida kõrv eristada suudab. See on võimalik\nainult ideaalsetes tingimustes, kui inimene kuulab keskmisel muutumatul\nsagedusel \"puhast\" tooni ja tema ümber ei ole teisi mürasid. On kokku lepitud,\net normaalsetes tingimustes saab terve kõrv vaevu aru 3-detsibellisest helimuutusest.\n\nDetsibelli tähisele lisatakse sufikseid (järelliiteid), selleks et viidata baastasemele,\nmillega mõõdetud väärtust võrreldakse.\n\nElektrotehnikas kasutatav dBm (dBmW) väljendab signaali võimendust või nõrgendust\n1millivati suhtes, mis on baasväärtus ehk nullnivoo (0 dB). Seega kui öeldakse, et\nsignaali tugevus on ‒63 dBm, siis on see sama, kui öelda, et see signaal on 63 detsibelli\nvõrra nõrgem kui 1-millivatine signaal. Kui öeldakse, et saatja\nväljundvõimsus on 40 dBm siis see tähendab, et väljundvõimsus on 10000 mW\nehk 10W.\n\nStuudiotehnikas on tuntud tähis dBu – signaalipinge suhe 0,775 voldi suhtes,\nkoduses audiotehnikas on kasutusel dBV - signaalipinge suhe 1 voldi suhtes."
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S04_et_q013_et",
          "groupId": "q013",
          "question": "Mis on Bell?",
          "answers": [
            {
              "id": "C01_S04_et_q013_et_A",
              "answer": "Mahtuvuse muutumise mõõtühik.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q013_et_B",
              "answer": "Induktiivsuse muutumise mõõtühik.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q013_et_C",
              "answer": "Erinevate võimsuste suhte suurust väljendav ühik.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q014_et",
          "groupId": "q014",
          "question": "Mis on detsibell?",
          "answers": [
            {
              "id": "C01_S04_et_q014_et_A",
              "answer": "Võimsusnivoode suhte muutumine 0,1 Belli võrra.",
              "isCorrect": true
            },
            {
              "id": "C01_S04_et_q014_et_B",
              "answer": "Võimsusnivoode suhte muutumine 0,01 Belli võrra",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q014_et_C",
              "answer": "Võimsusnivoode suhte muutumine 10 Belli võrra.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q015_et",
          "groupId": "q015",
          "question": "Ligikaudu mitu detsibelli on vaevaltmärgatav helitugevuse muutus?",
          "answers": [
            {
              "id": "C01_S04_et_q015_et_A",
              "answer": "12 dB.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q015_et_B",
              "answer": "6 dB.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q015_et_C",
              "answer": "1 dB.",
              "isCorrect": true
            },
            {
              "id": "C01_S04_et_q015_et_D",
              "answer": "3 dB",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q016_et",
          "groupId": "q016",
          "question": "Kui suur on Võimsuse suurenemine kaks korda detsibellides?",
          "answers": [
            {
              "id": "C01_S04_et_q016_et_A",
              "answer": "1 dB.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q016_et_B",
              "answer": "3 dB.",
              "isCorrect": true
            },
            {
              "id": "C01_S04_et_q016_et_C",
              "answer": "6 dB",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q017_et",
          "groupId": "q017",
          "question": "Mitu korda suureneb võimsus 6 dB puhul?",
          "answers": [
            {
              "id": "C01_S04_et_q017_et_A",
              "answer": "1,5 korda.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q017_et_B",
              "answer": "2 korda.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q017_et_C",
              "answer": "4 korda.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q018_et",
          "groupId": "q018",
          "question": "Mitu korda suureneb võimsus 3 dB puhul?",
          "answers": [
            {
              "id": "C01_S04_et_q018_et_A",
              "answer": "1,5 korda.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q018_et_B",
              "answer": "2 korda.",
              "isCorrect": true
            },
            {
              "id": "C01_S04_et_q018_et_C",
              "answer": "4 korda",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q019_et",
          "groupId": "q019",
          "question": "Signaali raport on ”10 dB üle S9”.Kui saatja võimsust vähendatakse 1500 vatilt 150 vatini kui suur on uus signaali tugevuse raport?",
          "answers": [
            {
              "id": "C01_S04_et_q019_et_A",
              "answer": "S5.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q019_et_B",
              "answer": "S7",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q019_et_C",
              "answer": "S9.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S04_et_q020_et",
          "groupId": "q020",
          "question": "Signaali raport on “20 dB üle S9”.Kui saatja võimsust vähendatakse 1500 vatilt 15 vatini kui suur on uus signaali tugevuse raport?",
          "answers": [
            {
              "id": "C01_S04_et_q020_et_A",
              "answer": "S5.",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q020_et_B",
              "answer": "S7",
              "isCorrect": false
            },
            {
              "id": "C01_S04_et_q020_et_C",
              "answer": "S9.",
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