import { KbApi } from '../../api-kb'

export const C02_S01: KbApi.Article = {
  "id": "C02_S01",
  "parentId": "C02",
  "pages": [
    {
      "id": "C02_S01_et",
      "localeCode": "et",
      "title": "Passiivkomponendid",
      "materials": [
        {
          "id": "C02_S01_et_content",
          "text": "# Raadio- ja elektrotehnika komponendid  \n## Passiivkomponendid  \nPassiivkomponentideks loetakse takistid, kondensaatorid ja induktiivkomponendid, sealhulgas ka transformaatorid.\n\n### Takistid\n\nTakistite abil saab anda elektriahelale vajaliku takistuse.\n\nTakisteid on palju erinevaid, kõige tavalisem neist on aktiivtakisti mida\nnimetatakse ka lihtsalt takistiks. Takisti kõige olulistemateks parameetriteks on\nnominaalväärtus, võimsustaluvus ja materjal, sest sellest sõltuvad veel\nmõned olulised parameetrid. Takistite takistus ei vasta pea kunagi\ntäpselt nominaalväärtusele, tootmisvigade ja takistitele omase takistuse\nmuutumise temperatuuri kõikumisel tüüpiliselt takistite takistus kasvab\ntemperatuuri tõustes. Takistuse muutumise suuruse määrab takisti\nmaterjalist sõltuv temperatuuritegur.\n\nMuuttakistite takistust saab sujuvalt muuta, kõige tuttavam on kõigile\npotentsiomeeter, seda kasutatakse näiteks raadiovastuvõtja helitugevuse\nreguleerimiseks.\n\nOluline takistite rühm on termotaksitid ehk termistorid, need on ehitatud\nselliselt, et nende takistus muutub temperatuuri kõikumisel väga suurtes\npiirides. Sealjuures on olemas nii sellised mille takistus temperatuuri\ntõustes kasvab kui sellised, mille takistus temperatuuri tõustes langeb.\nNeid saab kasutada temperatuuri mõõtmiseks aga ka näiteks\njahutusventilaatori kiiruse reguleerimiseks sõltuvalt seadme temperatuurist.\n\n### Kondensaatorid\n\nKondensaatorite põhiomadus on mahtuvus, ehk võime salvestada elektrilaengut.\nPõhimõtteliselt koosnevad nad kõik kahest elektroodist ja neid eraldavast\nelektrit mitte juhtivast kihist. Kondensaatori mahtuvuse määrab elektroodide\npindala ja neid eraldava dielektriku paksus, seepärast teakse nii\nelektroodid kui dielektrik võimalikult õhukesed. Sõltuvalt vajalikest\nomadustest valmisatakse kondensaatoreid erinevatest materjalidest.\n\nKa kondensaatoreid on püsiva väärtusega ja muudetava väärtusega, sagedamini\nleiavad kasutust püsiva väärtusega kondensaatorid. Kondensaatorite\nolulisimad parameetrid on mahtuvus ja pingetaluvus. Nagu takistid, ei ole ka\nkondensaatorid ideaalsed ja erinevad nominaalväärtusest, nende mahtuvus võib\najas või näiteks temperatuuri kõikumisel oluliselt muutuja ja nad võivad\nomada ka arvestatavat aktiivtakistust. Tänapäeval on õpitud väga väikeseid\nja suhteliselt suure mahtuvusega keraamilisi kondensaatoreid tegema, nende\nheadeks omaduseks on ka vähene sisetakistus ja induktiivsus, seepärast\nsobivad nad hästi igasuguste järskude impulsside ja muude mürade filtreerimiseks\nning kõrgsagedusahelates kasutamiseks.\n\nEraldi mainimist väärivad elektrolüütkondensaatorid, sest neile saab\nsuhteliselt väikese ruumala juures anda väga suure mahtuvuse. Dielektrikuks\non nende sees imeõhuke oksiidikiht mille tekitamiseks ja püsimiseks on\nkondensaatori sisu immutatud elektrolüüdiga. Aja jooksul võib elektrolüüt\nneist välja lekkida, selle tulemusena rikneb kondensaator aga korrosiivne\nelektrolüüt võib kergesti rikkuda ka teised läheduses olevad komponendid või\ntrükkplaadi millel komponendid paiknevad. Suure mahtuvuse tõttu kasutatakse\nneid sageli toiteahelates pinge silumiseks.\n \nMuutkondensaatorid võimaldavad elektroode teineteise suhtes nihutada, muutes\nniiviisi kondensaatori mahtuvust. Vanades raadiotes kasutati pea alati suurt\npöördkondensaatorit mis koosnes üksteisega vaheliti metall-lehtedest.\n\n### Indiktiivelemendid\n\nKõige lihtsam induktiivelement on induktiivpool, selle põhiline tunnus on\nelektriline induktiivsus. Pool koosneb mingist hulgas traadikeerdudest mis\nvõivad olla mähitud poolialusele. Poolide induktiivsuse suurendamiseks\nkasutatakse ferromagnetilisi poolisüdamikke, kõrgsageduspoolid on sageli\nilma aluseta ja südamikuta traadikeerud. Ka poolide induktiivuse saab\nmuudetavaks teha, selleks tehakse poolisüdamik pooli sees liigutatavaks.\n\nKa induktiivelemendid ei ole ideaalsed, nende mähisetraat omab aktiivtakistust\nmis tekitab poolis energiakadu, lisaks sellele moodustavad mähisekeerud ja\nkondensaatori mille tõttu on poolidel soovimatu omaresonantsisagedus.\n\nKui ühele südamikule mähkida mitu induktiivpooli siis moodustub\ntransformaator, kus südamik moodustab mähiseid omavahel siduva magnetahela.\nÜhele mähisele antav vahelduvpinge tekitab südamikus muutuva magnetvoo mis\nindutseerib teises mähiseks vahelduva elektromotoorjõu, kui mähisega\nühendada elektriahel siis läbib seda eletrivool."
        }
      ],
      "questionnaire": [
        {
          "id": "C02_S01_et_q001_et",
          "groupId": "q001",
          "question": "Kuidas mõjub ümbruskonna temperatuur süsiniktakisti takistusele?",
          "answers": [
            {
              "id": "C02_S01_et_q001_et_A",
              "answer": "Takistus suureneb 20% temperatuuri tõusmisel iga 10 kraadi võrra.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q001_et_B",
              "answer": "Takistuse suurus ei muutu.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q001_et_C",
              "answer": "Takistuse muutus sõltub takisti temperatuuritegurist.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_et_q002_et",
          "groupId": "q002",
          "question": "Mis tüüpi kondensaatorit kasutatakse tihti võrgutoitealaldi silumisfiltris?",
          "answers": [
            {
              "id": "C02_S01_et_q002_et_A",
              "answer": "Keraamilist ketaskondensaatorit.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q002_et_B",
              "answer": "Muutuva mahtuvusega vaakumkondensaatorit.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q002_et_C",
              "answer": "Elektrolüütkondensaatorit.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_et_q003_et",
          "groupId": "q003",
          "question": "Millised kondensaatorid lülitatakse rööbiti transformaatori sekundaarmähisega pingeimpulsside vähendamiseks?",
          "answers": [
            {
              "id": "C02_S01_et_q003_et_A",
              "answer": "Suure mahtuvusega kondensaatorid.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q003_et_B",
              "answer": "Muutuva mahtuvusega vaakumkondensaatorid.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q003_et_C",
              "answer": "Keraamilised kondensaatorid.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_et_q004_et",
          "groupId": "q004",
          "question": "Mis tekitab poolide omaresonantsi?",
          "answers": [
            {
              "id": "C02_S01_et_q004_et_A",
              "answer": "Hajutatud elektromagnetism.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q004_et_B",
              "answer": "Pöörisvoolud.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q004_et_C",
              "answer": "Keerdudevaheline mahtuvus.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_et_q136_et",
          "groupId": "q136",
          "question": "Milleks kasutatakse takisteid?",
          "answers": [
            {
              "id": "C02_S01_et_q136_et_A",
              "answer": "Raadiojaama ruumi võõraste isikute tuleku takistamiseks.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_et_q136_et_B",
              "answer": "Sobiva takistusega vooluahelate koostamiseks.",
              "isCorrect": true
            },
            {
              "id": "C02_S01_et_q136_et_C",
              "answer": "Elektrienergia tarbimise vähendamiseks öisel ajal.",
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