/**
 * teachers-detail.js
 * Extended content for teacher detail pages.
 */

const teachersDetailData = {
    raili: {
        en: {
            name: "Raili Maripuu",
            role: "Founder & Ashtanga Teacher",
            quote: "Yoga is a mirror to the soul, a daily practice that reveals our true nature through the breath.",
            bio: "Raili is the visionary behind GoYoga Tallinn. With over two decades of dedicated practice and teaching, she brings the authentic Ashtanga Vinyasa method to life. Her journey began in the traditional shalas of Mysore, India, and she has since dedicated her life to sharing the transformative power of the Eight Limbs.",
            philosophy: "I believe that consistency is the key to transformation. The practice isn't about the perfect pose, but about the presence you bring to each moment on the mat.",
            highlights: ["Mysore-Authorized Practice", "Over 10,000 hours teaching", "Dedicated to tradition"]
        },
        et: {
            name: "Raili Maripuu",
            role: "Asutaja & Ashtanga õpetaja",
            quote: "Jooga on sielu peegel, igapäevane praktika, mis paljastab meie tõelise olemuse läbi hingamise.",
            bio: "Raili on GoYoga Tallinn visionäär. Üle kahe aastakümne kestnud pühendunud praktika ja õpetamise kogemusega toob ta Tallinna autentse Ashtanga Vinyasa meetodi. Tema teekond algas India traditsioonilistes Mysore shalades ning sellest ajast peale on ta pühendanud oma elu Kaheksa Astme (Eight Limbs) transformatiivse väe jagamisele.",
            philosophy: "Ma usun, et järjepidevus on muutuse võti. Praktika ei seisne täiuslikus poosis, vaid kohalolus, mille tood igasse hetke matil.",
            highlights: ["Mysore-autoriseeritud praktika", "Üle 10 000 tunni õpetamist", "Pühendunud traditsioonid"]
        },
        fi: {
            name: "Raili Maripuu",
            role: "Perustaja ja Ashtanga-opettaja",
            quote: "Jooga on sielun peili, päivittäinen harjoitus, joka paljastaa todellisen luontomme hengityksen kautta.",
            bio: "Raili on GoYoga Tallinnan visionääri. Yli kahden vuosikymmenen omistautuneen harjoituksen ja opetuksen myötä hän tuo aitoa Ashtanga Vinyasa -menetelmää eloon. Hänen matkansa alkoi Mysoren perinteisistä shaloista Intiassa, ja siitä lähtien hän on omistanut elämänsä kahdeksan raajan (Eight Limbs) viisauden jakamiseen.",
            philosophy: "Uskon, että johdonmukaisuus on avain muutokseen. Harjoituksessa ei ole kyse täydellisestä asennosta, vaan läsnäolosta, jonka tuot jokaiselle hetkelle matolla.",
            highlights: ["Mysore-auktorisoitu harjoitus", "Yli 10 000 tuntia opetusta", "Omistautunut perinteille"]
        }
    },
    victoria: {
        en: {
            name: "Victoria Palusaar",
            role: "Ashtanga | Nutritional Therapist",
            quote: "Wellness starts from within—what we feed our bodies is as vital as the breath we take.",
            bio: "Victoria blends the discipline of Ashtanga yoga with the science of nutritional therapy. As a certified nutritional therapist, she helps practitioners find the internal balance necessary for a deep physical practice.",
            philosophy: "Conscious eating is the foundation of a healthy life. My goal is to empower people to listen to their bodies and nourish them with intention.",
            highlights: ["Clinical Nutritional Therapist", "Child & Adolescent Nutrition", "Yoga & Wellness Advocate"]
        },
        et: {
            name: "Victoria Palusaar",
            role: "Ashtanga | Toitumisterapeut",
            quote: "Heaolu algab seestpoolt — see, millega me oma keha toidame, on sama oluline kui hingamine.",
            bio: "Victoria ühendab Ashtanga jooga distsipliini toitumisteraapia teadusega. Sertifitseeritud toitumisterapeudina aitab ta praktikutel leida sisemist tasakaalu, mis on vajalik sügavaks füüsiliseks praktikaks.",
            philosophy: "Teadlik söömine on tervisliku elu alus. Minu eesmärk on julgustada inimesi oma keha kuulama ja seda tähendusrikkalt toitma.",
            highlights: ["Kliiniline toitumisterapeut", "Laste ja noorte toitumine", "Jooga ja heaolu edendaja"]
        },
        fi: {
            name: "Victoria Palusaar",
            role: "Ashtanga | Ravintoterapeutti",
            quote: "Hyvinvointi alkaa sisältäpäin — se, millä ruokimme kehoamme, on yhtä tärkeää kui hengittämämme ilma.",
            bio: "Victoria yhdistää Ashtanga-joogan kurinalaisuuden ravitsemusterapian tieteeseen. Sertifioituna ravitsemusterapeuttina hän auttaa harjoittajia löytämään sisäisen tasapainon, joka on välttämätöntä syvälle fyysiselle harjoitukselle.",
            philosophy: "Tietoinen syöminen on terveellisen elämän perusta. Tavoitteeni on kannustaa ihmisiä kuuntelemaan kehoaan ja ravitsemaan sitä merkityksellisesti.",
            highlights: ["Kliininen ravitsemusterapeutti", "Lasten ja nuorten ravitsemus", "Joogan ja hyvinvoinnin edistäjä"]
        }
    },

    triin: {
        en: {
            name: "Triin Parro",
            role: "Strength & Holistic Health",
            quote: "True strength is the balance between physical power and mental serenity.",
            bio: "Triin brings a decade of fitness expertise to the yoga mat. A certified personal trainer and nutrition counselor, she focuses on functional movement that builds a resilient body and mind.",
            philosophy: "Well-being is holistic. We must train our bodies to be strong, our minds to be calm, and our souls to be nourished.",
            highlights: ["FAF Personal Trainer", "Nutrition & Health Therapy", "BodyART Instructor"]
        },
        et: {
            name: "Triin Parro",
            role: "Jõud ja holistiline tervis",
            quote: "Tõeline jõud on tasakaal füüsilise väe ja vaimse rahu vahel.",
            bio: "Triin toob joogamatini kümneaastase fitnessi-kogemuse. Sertifitseeritud personaaltreeneri ja toitumisnõustajana keskendub ta funktsionaalsele liikumisele, mis ehitab vastupidava keha ja vaimu.",
            philosophy: "Heaolu on terviklik. Peame treenima oma keha tugevaks, vaimu rahulikuks ja hinge toidetuks.",
            highlights: ["FAF personaaltreener", "Toitumis- ja tervisteraapia", "BodyART instruktor"]
        },
        fi: {
            name: "Triin Parro",
            role: "Voima ja holistinen terveys",
            quote: "Todellinen voima on tasapaino fyysisen voiman ja henkisen tyyneyden välillä.",
            bio: "Triin tuo joogamatolle kymmenen vuoden fitness-kokemuksen. Sertifioituna persona trainerina ja ravintoneuvojana hän keskittyy funktionaaliseen liikkeeseen, joka rakentaa kestävän kehon ja mielen.",
            philosophy: "Hyvinvointi on kokonaisvaltaista. Meidän on treenattava kehomme vahvaksi, mielemme tyyneksi ja sielumme ravituksi.",
            highlights: ["FAF Persona Trainer", "Ravitsemus ja terveysterapia", "BodyART-ohjaaja"]
        }
    },


    kaia: {
        en: {
            name: "Kaia Karjatse",
            role: "60+ Yoga | Sound Therapy",
            quote: "Vibration is the original language of the heart.",
            bio: "Kaia is a sound and dance therapist who brings a unique healing dimension to GoYoga. Her 60+ yoga classes combined with gong baths offer a gentle yet powerful path to vitality.",
            philosophy: "I believe in the power of sound to harmonize the body's energy. My practice is about creating a resonant field where healing can happen naturally.",
            highlights: ["Gong & Crystal Bowl Master", "Dance & Movement Therapy", "Seniors Wellness Advocate"]
        },
        et: {
            name: "Kaia Karjatse",
            role: "60+ jooga | Heliteraapia",
            quote: "Vibratsioon on südame algne keel.",
            bio: "Kaia on heli- ja tantsuterapeut, kes toob GoYogasse ainulaadse tervendava dimensiooni. Tema 60+ joogatunnid kombineerituna gongi-mänguga pakuvad õrna, kuid jõulist teed elujõuni.",
            philosophy: "Ma usun heli jõusse harmoniseerida keha energiat. Minu praktika seisneb resonantsvälja loomises, kus tervenemine saab toimuda loomulikult.",
            highlights: ["Gongi- ja kristallkausside meister", "Tantsu- ja liikumisteraapia", "Eakate heaolu edendaja"]
        },
        fi: {
            name: "Kaia Karjatse",
            role: "60+ jooga | Ääniterapia",
            quote: "Värähtely on sydämen alkuperäinen kieli.",
            bio: "Kaia on ääni- ja tanssiterapeutti, joka tuo GoYogaan ainutlaatuisen parantavan ulottuvuuden. Hänen 60+ joogatuntinsa yhdistettynä gong-kylpyihin tarjoavat lempeän mutta tehokkaan tien elinvoimaan.",
            philosophy: "Uskon äänen voimaan harmonisoida kehon energiaa. Harjoitukseni tarkoituksena on luoda resonanssikenttä, jossa parantuminen voi tapahtua luonnollisesti.",
            highlights: ["Gong- ja kristallimaljamestari", "Tanssi- ja liiketerapeuti", "Ikääntyneiden hyvinvoinnin edistäjä"]
        }
    },
    edith: {
        en: {
            name: "Edith Tiitsaar",
            role: "Qigong | Energy Work",
            quote: "Energy flows where intention goes.",
            bio: "Edith teaches Radiant Lotus Women's Qigong, a practice designed to support the female body's energy meridians. Her classes focus on emotional balance and self-healing through gentle movement.",
            philosophy: "Working with the meridians is like tuning a beautiful instrument. By clearing the paths, we allow our life force (Qi) to flow freely and vibrantly.",
            highlights: ["Radiant Lotus Qigong", "Meridian activation", "Women's wellness specialist"]
        },
        et: {
            name: "Edith Tiitsaar",
            role: "Qigong | Energiatöö",
            quote: "Energia voolab sinna, kuhu läheb tahtlus.",
            bio: "Edith õpetab Särava Lootose naiste Qigongi, praktikat, mis on loodud toetama naise keha energiameridiaane. Tema tunnid keskenduvad emotsionaalsele tasakaalule ja enesetervendamisele läbi õrna liikumise.",
            philosophy: "Meridiaanidega töötamine on nagu kauni instrumendi häälestamine. Teid puhastades laskeme oma elujõul (Qi) voolata vabalt ja elavalt.",
            highlights: ["Särava Lootose Qigong", "Meridiaanide aktiveerimine", "Naiste heaolu spetsialist"]
        },
        fi: {
            name: "Edith Tiitsaar",
            role: "Qigong | Energiatyö",
            quote: "Energia virtaa sinne, minne huomio keskittyy.",
            bio: "Edith opettaa Radiant Lotus Women's Qigongia, harjoitusta, joka on suunniteltu tukemaan naisen kehon energiameridiaaneja. Hänen tuntinsa keskittyvät emotionaaliseen tasapainoon ja itseparantamiseen lempeän liikkeen kautta.",
            philosophy: "Työskentely meridiaanien parissa on kuin kauniin instrumentin virittämistä. Puhdistamalla polut annamme elämänvoimamme (Qi) virrata vapaasti ja eloisasti.",
            highlights: ["Radiant Lotus Qigong", "Meridiaanien aktivointi", "Naisten hyvinvoinnin asiantuntija"]
        }
    },
    marit: {
        en: {
            name: "Marit Tuisk",
            role: "Meditations | Cacao Ceremonies",
            quote: "The heart is the gateway to our highest self.",
            bio: "Marit, co-founder of Casa Rituals, brings sacred ceremonies and deep heart-opening practices to our sanctuary. A certified cacao facilitator, she holds space for profound emotional release.",
            philosophy: "Ritual is a bridge to the sacred. By bringing intention to our gatherings, we remind ourselves of the interconnectedness of all life.",
            highlights: ["Certified Cacao Facilitator", "Reiki Practitioner", "Sacred Ritual specialist"]
        },
        et: {
            name: "Marit Tuisk",
            role: "Meditatsioonid | Kakaotseremooniad",
            quote: "Süda on värav meie kõrgeima minani.",
            bio: "Marit, Casa Ritualsi kaasasutaja, toob meie oaasini pühad tseremooniad ja sügavad südame avamise praktikad. Sertifitseeritud kakaotseremoonia läbiviijana loob ta ruumi sügavaks emotsionaalseks vabanemiseks.",
            philosophy: "Rituaal on sild püha juurde. Tuues meie kogunemistesse tahtlust, tuletame endale meelde kogu elu omavahelist seotust.",
            highlights: ["Sertifitseeritud kakaotseremoonia läbiviija", "Reiki praktik", "Pühade rituaalide spetsialist"]
        },
        fi: {
            name: "Marit Tuisk",
            role: "Meditaatiot | Kaakaoseremoniat",
            quote: "Sydän on portti korkeimpaan itseesi.",
            bio: "Marit, Casa Ritualsin perustaja, tuo pyhät seremoniat ja syvät sydäntä avaavat harjoitukset oasikseemme. Sertifioituna kaakaofasilitointina hän luo tilan syvälle emotionaaliselle vapautumiselle.",
            philosophy: "Rituaali on silta pyhään. Tuomalla aikomuksen kokoontumisiimme muistutamme itseämme kaiken elämän keskinäisestä yhteydestä.",
            highlights: ["Sertifioitu kaakaofasilitoija", "Reiki-harjoittaja", "Pyhien rituaalien asiantuntija"]
        }
    },
    david: {
        en: {
            name: "David Lepp",
            role: "Sound Baths | Yoga Nidra",
            quote: "Sound has the power to silence the mind and awaken the soul.",
            bio: "David is a master of the gong and quantum sound architecture. As a co-founder of Casa Rituals, he creates immersive sonic experiences that guide participants into deep states of Yoga Nidra and restoration.",
            philosophy: "The universe is made of vibration. When we bathe in high-frequency sound, we realign our own energetic structure with the cosmic harmony.",
            highlights: ["Quantum Sound Architect", "Gong Master", "Yoga Nidra guide"]
        },
        et: {
            name: "David Lepp",
            role: "Helirännakud | Yoga Nidra",
            quote: "Helil on jõud vaigistada meelt ja äratada hinge.",
            bio: "David on gongi ja kvantheli arhitektuuri meister. Casa Ritualsi kaasasutajana loob ta kaasahaaravaid helikogemusi, mmis juhendavad osalejaid sügavatesse Yoga Nidra ja taastumise seisunditesse.",
            philosophy: "Universum on tehtud vibratsioonist. Kui me supleme kõrgsageduslikus helis, seadistame me oma energeetilise structures uuesti kosmilise harmooniaga.",
            highlights: ["Kvantheli arhitekt", "Gongi meister", "Yoga Nidra juhendaja"]
        },
        fi: {
            name: "David Lepp",
            role: "Äänikylvyt | Yoga Nidra",
            quote: "Äänellä on voima hiljentää mieli ja herättää sielu.",
            bio: "David on gongin ja kvanttiääniarkkitehtuurin mestari. Casa Ritualsin perustajana hän luo uppoutuvia äänikokemuksia, jotka ohjaavat osallistujat syvään Yoga Nidra -tilaan ja palautumiseen.",
            philosophy: "Universumi on tehty värähtelystä. Kun kylvemme korkeataajuisessa äänessä, kohdistamme oman energeettisen rakenteemme jälleen kosmiseen harmoniaan.",
            highlights: ["Kvanttiääniarkkitehti", "Gong-mestari", "Yoga Nidra -opas"]
        }
    }
};

window.teachersDetailData = teachersDetailData;
