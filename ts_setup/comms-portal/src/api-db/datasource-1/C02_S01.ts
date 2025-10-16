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
    },
    {
      "id": "C02_S01_en",
      "localeCode": "en",
      "title": "Passive components",
      "materials": [
        {
          "id": "C02_S01_en_content",
          "text": "# Radio and electrical engineering components  \n## Passive components  \nPassive components include resistors, capacitors and inductive components, including transformers.\n\n### Resistors\n\nResistors can be used to give an electrical circuit the necessary resistance.\n\nThere are many different resistors, the most common of which is the active resistor, which is\nalso simply called a resistor. The most important parameters of a resistor are\nnominal value, power tolerance and material, as several other\nimportant parameters depend on this. The resistance of resistors almost never\ncorresponds exactly to the nominal value, due to manufacturing errors and the inherent resistance\nchange of resistors with temperature fluctuations - typically resistor resistance increases\nas temperature rises. The magnitude of resistance change is determined by the resistor's\nmaterial-dependent temperature coefficient.\n\nVariable resistors can have their resistance smoothly changed, the most familiar to everyone is the\npotentiometer, which is used for example to control the volume\nof a radio receiver.\n\nAn important group of resistors are thermoresistors or thermistors, these are built\nin such a way that their resistance changes with temperature fluctuations within very large\nlimits. At the same time, there are both those whose resistance\nincreases with rising temperature and those whose resistance decreases with rising temperature.\nThey can be used to measure temperature but also for example\nto control cooling fan speed depending on device temperature.\n\n### Capacitors\n\nThe basic property of capacitors is capacitance, i.e. the ability to store electric charge.\nBasically, they all consist of two electrodes and a\nnon-electrically conductive layer separating them. The capacitance of a capacitor is determined by the electrode\nsurface area and the thickness of the dielectric separating them, therefore both\nelectrodes and dielectric are made as thin as possible. Depending on the required\nproperties, capacitors are made from different materials.\n\nCapacitors also come in fixed value and variable value types, more commonly\nfixed value capacitors are used. The most important\nparameters of capacitors are capacitance and voltage tolerance. Like resistors, capacitors are not\nideal either and differ from nominal value, their capacitance can\nchange significantly over time or for example with temperature fluctuations and they can\nalso have considerable active resistance. Today we have learned to make very small\nand relatively high capacitance ceramic capacitors, their\ngood properties also include low internal resistance and inductance, therefore\nthey are well suited for filtering all kinds of sharp pulses and other noise\nand for use in high frequency circuits.\n\nElectrolytic capacitors deserve special mention, as they can be\ngiven very high capacitance in a relatively small volume. The dielectric\ninside them is an ultra-thin oxide layer, for the creation and persistence of which the\ncapacitor contents are saturated with electrolyte. Over time, electrolyte may\nleak from them, as a result the capacitor breaks but the corrosive\nelectrolyte can easily damage other nearby components or\nthe circuit board on which the components are located. Due to their high capacitance, they are\noften used in power circuits for voltage smoothing.\n\nVariable capacitors allow electrodes to be shifted relative to each other, thus\nchanging the capacitor's capacitance. Old radios almost always used a large\nrotary capacitor consisting of alternating metal sheets.\n\n### Inductive elements\n\nThe simplest inductive element is an inductive coil, whose main characteristic is\nelectrical inductance. A coil consists of some number of wire turns which\ncan be wound on a coil former. To increase coil inductance,\nferromagnetic coil cores are used, high frequency coils are often\nwire turns without former and without core. Coil inductance can also be\nmade variable, for this the coil core is made movable inside the coil.\n\nInductive elements are also not ideal, their winding wire has active resistance\nwhich causes energy loss in the coil, in addition the winding turns form a\ncapacitor which gives coils an undesirable self-resonant frequency.\n\nIf several inductive coils are wound on one core, a\ntransformer is formed, where the core forms a magnetic circuit linking the windings together.\nAlternating voltage applied to one winding creates changing magnetic flux in the core which\ninduces alternating electromotive force in the other winding, if an electrical circuit\nis connected to the winding then electric current flows through it."
        }
      ],
      "questionnaire": [
        {
          "id": "C02_S01_en_q001_en",
          "groupId": "q001",
          "question": "How does ambient temperature affect the resistance of a carbon resistor?",
          "answers": [
            {
              "id": "C02_S01_en_q001_en_A",
              "answer": "Resistance increases by 20% with temperature rise of every 10 degrees.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q001_en_B",
              "answer": "Resistance value does not change.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q001_en_C",
              "answer": "Resistance change depends on the resistor's temperature coefficient.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_en_q002_en",
          "groupId": "q002",
          "question": "What type of capacitor is often used in mains power supply smoothing filters?",
          "answers": [
            {
              "id": "C02_S01_en_q002_en_A",
              "answer": "Ceramic disc capacitor.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q002_en_B",
              "answer": "Variable capacitance vacuum capacitor.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q002_en_C",
              "answer": "Electrolytic capacitor.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_en_q003_en",
          "groupId": "q003",
          "question": "Which capacitors are connected in parallel with transformer secondary winding to reduce voltage pulses?",
          "answers": [
            {
              "id": "C02_S01_en_q003_en_A",
              "answer": "High capacitance capacitors.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q003_en_B",
              "answer": "Variable capacitance vacuum capacitors.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q003_en_C",
              "answer": "Ceramic capacitors.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_en_q004_en",
          "groupId": "q004",
          "question": "What causes self-resonance in coils?",
          "answers": [
            {
              "id": "C02_S01_en_q004_en_A",
              "answer": "Scattered electromagnetism.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q004_en_B",
              "answer": "Eddy currents.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q004_en_C",
              "answer": "Inter-turn capacitance.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C02_S01_en_q136_en",
          "groupId": "q136",
          "question": "What are resistors used for?",
          "answers": [
            {
              "id": "C02_S01_en_q136_en_A",
              "answer": "To prevent unauthorized persons from entering radio station premises.",
              "isCorrect": false
            },
            {
              "id": "C02_S01_en_q136_en_B",
              "answer": "To build circuits with appropriate resistance.",
              "isCorrect": true
            },
            {
              "id": "C02_S01_en_q136_en_C",
              "answer": "To reduce electricity consumption during nighttime.",
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