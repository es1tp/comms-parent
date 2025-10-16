import { KbApi } from '../../api-kb'

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
    },
    {
      "id": "C01_S01_en",
      "localeCode": "en",
      "title": "Units of measurement",
      "materials": [
        {
          "id": "C01_S01_en_content",
          "text": "# Radio and electrical engineering theory  \n## Units of measurement  \nElectric current strength or current intensity ***I*** is a physical quantity that\nequals the electric charge that has passed through the cross-sectional area of an electrical conductor per unit time, its\nunit of measurement is Ampere (***A***). Current intensity is measured with an ammeter,\nwhere the ammeter is connected in series with the circuit.\n\nVoltage (***U***) is a physical quantity that characterizes the difference in\nelectric field potentials between two points. Direct voltage (with constant polarity)\nand alternating voltage (with alternating polarity) are distinguished. The unit of voltage is Volt\n(***V***). Voltage is measured with a voltmeter.\n\nResistance ***R*** characterizes the property of an electrical conductor to exert\na hindering effect on the movement of electric charges. The unit of resistance is ohm (***Ω***).\n\nFrequency ***f*** is the number of recurring events (e.g. oscillations, pulses) occurring at equal time intervals per unit time.\nThe unit of frequency is hertz (***Hz***), 1 event per second is 1 Hz.\n\nPeriod or oscillation period ***T*** is the duration of a repeating change cycle. Period\nis inversely related to frequency, T=1/f. The unit of period is second\n(***s***).\n\nWavelength ***λ*** is the distance between two nearest points oscillating in the same phase.\nIn a sine wave, the wavelength is for example the distance between two nearest wave crests or wave\ntroughs. The unit of wavelength is meter (m).\n\nWavelength equals the wave propagation speed ***v*** divided by the wave frequency ***f***:\n\nλ=v/f\n\nFor sound waves, the propagation speed is the speed of sound (in air approximately 330 m/s).\nElectromagnetic waves propagate in vacuum at the speed of light c=299792458m/s.\n\nElectric capacitance ***C*** (or simply capacitance) characterizes the ability of an electrically conductive body or capacitor\nto store electric charge. The unit of capacitance is farad (***F***).\n\nInductance ***L*** is a physical quantity characterizing electromagnetic induction.\nThe unit of inductance is henry (***H***).\n\nEvery electrical conductor (e.g. wire coil, inductor or other conductive contour) has a certain\ninductance, since current flowing through the conductor\nis always accompanied by a magnetic field. Inductance manifests as the ability to resist current\nchanges due to self-induction. For example, the greater the inductance of an inductor, the more slowly direct current\nstrengthens in the inductor after switching on. In an alternating current circuit, the inductive reactance of the inductor increases with\ninductance and frequency.\n\nWhen current change in one contour (for example in a transformer winding) induces through mutual\ninduction an electromotive force also in another contour (in another winding), this is\nmutual inductance. The symbol for mutual inductance is M, the unit is\nstill henry.\n\nApparent resistance or impedance ***Z*** is the resistance exhibited to periodic sinusoidal\nalternating electric current or AC current between two points of an electric circuit, which consists of two\nmain components:\n\n* active resistance or resistance ***R*** ‒ characterizes the conversion of electrical energy into other types of energy, for example heat;\n* reactive resistance or reactance ***X*** - characterizes the periodic lossless conversion of electrical energy into magnetic field or electric field energy.\n\nThe reactive resistance of inductive circuit elements is inductive reactance and the reactive resistance of capacitive elements\nis capacitive reactance. Impedance is a frequency-dependent\nquantity. Inductive reactance increases with increasing frequency, capacitive reactance\ndecreases with increasing frequency. Inductive reactance is considered positive and\ncapacitive reactance negative.\n\nThe unit of impedance is ohm (***Ω***).\n\nIn electrical engineering, instantaneous, active, reactive and apparent power are distinguished.\nAn electrical device either converts some type of energy into electrical energy\n(for example an electric generator) or electrical energy into another type of energy\n(for example an electric stove into heat). The electrical power of the device expresses\nthe amount of electrical energy produced or consumed per unit time.\nThe power of a consuming electrical device or electrical appliance is also called\npower consumption.\n\n* Instantaneous power ***p*** is called the product of voltage and current intensity instantaneous values.\n* Active power ***P*** is the average value of AC instantaneous power over one period.\n* Reactive power ***Q*** characterizes the rate at which energy is stored in reactive resistance electrical circuit elements, for example in capacitors and inductive coils, as well as energy exchange between circuit parts.\n* Apparent power ***S*** is the geometric sum of active and reactive power.\n\nThe power P of an electrical appliance with active resistance R is calculated through voltage U and current I as follows:\n\nP = U * I = I * I * R = U * U * R \n\nThe unit of active power is watt (***W***), the unit of reactive power is var\n(***var***) and the unit of apparent power is voltampere (***V•A***)."
        }
      ],
      "questionnaire": [
        {
          "id": "C01_S01_en_q001_en",
          "groupId": "q001",
          "question": "What does the term impedance mean?",
          "answers": [
            {
              "id": "C01_S01_en_q001_en_A",
              "answer": "Electric charge stored in a capacitor.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q001_en_B",
              "answer": "Resistance offered by a circuit to alternating current.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q001_en_C",
              "answer": "Resistance offered by a circuit containing capacitance to alternating current.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S01_en_q011_en",
          "groupId": "q011",
          "question": "What is the unit of measurement for reactive resistance?",
          "answers": [
            {
              "id": "C01_S01_en_q011_en_A",
              "answer": "Ampere.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q011_en_B",
              "answer": "Ohm",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q011_en_C",
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
          "id": "C01_S01_en_q012_en",
          "groupId": "q012",
          "question": "What is the unit of measurement for impedance?",
          "answers": [
            {
              "id": "C01_S01_en_q012_en_A",
              "answer": "Ohm.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q012_en_B",
              "answer": "Volt.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q012_en_C",
              "answer": "Ampere.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "A",
            "B"
          ]
        },
        {
          "id": "C01_S01_en_q113_en",
          "groupId": "q113",
          "question": "In what units is radio wave length measured?",
          "answers": [
            {
              "id": "C01_S01_en_q113_en_A",
              "answer": "Hertz.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q113_en_B",
              "answer": "Meters.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q113_en_C",
              "answer": "Radio wave length cannot be measured.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q114_en",
          "groupId": "q114",
          "question": "In what units is radio wave frequency measured?",
          "answers": [
            {
              "id": "C01_S01_en_q114_en_A",
              "answer": "Hertz.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q114_en_B",
              "answer": "Meters.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q114_en_C",
              "answer": "Radio wave frequency cannot be measured.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q123_en",
          "groupId": "q123",
          "question": "What is measured in watts?",
          "answers": [
            {
              "id": "C01_S01_en_q123_en_A",
              "answer": "Power.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q123_en_B",
              "answer": "The softness of protective clothing.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q123_en_C",
              "answer": "Wavelength.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q124_en",
          "groupId": "q124",
          "question": "What is measured in volts?",
          "answers": [
            {
              "id": "C01_S01_en_q124_en_A",
              "answer": "Frequency.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q124_en_B",
              "answer": "Number of folds of protective clothing.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q124_en_C",
              "answer": "Voltage.",
              "isCorrect": true
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q125_en",
          "groupId": "q125",
          "question": "What is measured in ohms?",
          "answers": [
            {
              "id": "C01_S01_en_q125_en_A",
              "answer": "Omega factor.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q125_en_B",
              "answer": "Resistance.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q125_en_C",
              "answer": "Frequency.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q126_en",
          "groupId": "q126",
          "question": "What is measured in amperes?",
          "answers": [
            {
              "id": "C01_S01_en_q126_en_A",
              "answer": "Current intensity.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q126_en_B",
              "answer": "Spreading factors.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q126_en_C",
              "answer": "Frequency.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q127_en",
          "groupId": "q127",
          "question": "What is measured in hertz?",
          "answers": [
            {
              "id": "C01_S01_en_q127_en_A",
              "answer": "The harmful effects of electric current on the heart.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q127_en_B",
              "answer": "Frequency.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q127_en_C",
              "answer": "Wavelength.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q128_en",
          "groupId": "q128",
          "question": "What is measured in meters?",
          "answers": [
            {
              "id": "C01_S01_en_q128_en_A",
              "answer": "Resistance.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q128_en_B",
              "answer": "Wavelength.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q128_en_C",
              "answer": "Frequency.",
              "isCorrect": false
            }
          ],
          "qualifications": [
            "D"
          ]
        },
        {
          "id": "C01_S01_en_q129_en",
          "groupId": "q129",
          "question": "Why is wavelength measured in meters?",
          "answers": [
            {
              "id": "C01_S01_en_q129_en_A",
              "answer": "Meter is a unit of length.",
              "isCorrect": true
            },
            {
              "id": "C01_S01_en_q129_en_B",
              "answer": "Electromagnetic waves propagate at very high speed.",
              "isCorrect": false
            },
            {
              "id": "C01_S01_en_q129_en_C",
              "answer": "Using meters achieves the highest transmitter power.",
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