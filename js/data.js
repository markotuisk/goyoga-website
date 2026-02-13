// Data Definitions
const translationsData = {
    en: {
        "nav.home": "Home", "nav.about": "About", "nav.studio": "Studio", "nav.schedule": "Schedule", "nav.pricing": "Pricing", "nav.teachers": "Teachers", "nav.events": "Events", "nav.community": "Community", "nav.contact": "Contact", "nav.language": "Language",
        "hero.tagline": "Yoga & Wellness Sanctuary", "hero.title": "Home of traditional yoga and wellness practises in Tallinn", "hero.description": "Daily yoga classes and wellness events in the centre of Tallinn. We have created an authentic space and community where different yoga styles and wellness practises support people’s choices.", "hero.view_schedule": "View Schedule", "hero.events": "Events", "hero.discover_more": "Discover More", "hero.seasonal_offer": "Seasonal Offer!",
        "about.tagline": "Our Approach", "about.title": "A Safe Sanctuary at the Heart of Tallinn", "about.description": "Goyoga is a safe sanctuary at the heart of Tallinn for people of all ages and preferences to come and switch off, relax and reinvigorate.", "about.subtitle": "Our Offerings", "about.content1": "Our practices are rooted in tradition but designed for modern living, providing a path to physical vitality and mental serenity.", "about.content2": "Whether you seek the dynamic flow of Ashtanga or the deep relaxation of a Sound Bath, our community is here to support your journey.", "about.benefits.physical.title": "Yoga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ yoga, Pilates, Qigong.", "about.benefits.mental.title": "Wellness", "about.benefits.mental.description": "Meditations, Sound Baths, Cacao Ceremonies, Yoga Nidra.",
        "studio.tagline": "Living Space", "studio.title": "A Home for Your Practice", "studio.description1": "Located at <span class='font-semibold'>Narva mnt 7D, Tallinn</span>, our shala is an urban retreat designed for deep practice and community gathering.", "studio.description2": "With natural light and grounding aesthetics, we provide a premium environment including high-quality mats, props, and a cozy tea corner for integration.", "studio.rent_button": "Rent Our Space",
        "schedule.tagline": "Live Class Schedule", "schedule.title": "Find Your Time to Practice", "schedule.description": "Our schedule is always up-to-date. Find a class and book your spot directly through the calendar below.",
        "pricing.tagline": "Pricing Options", "pricing.title": "Invest in Your Practice", "pricing.description": "We offer flexible pricing options to suit your schedule and commitment level.", "pricing.single.title": "Single Session", "pricing.single.description": "Perfect for drop-ins or trying out a class.", "pricing.memberships.title": "Memberships", "pricing.memberships.description": "The best value for dedicated practitioners.", "pricing.passes.title": "Multi-Visit Passes", "pricing.passes.description": "Great value for regular students who need flexibility.", "pricing.view_options": "View Options", "pricing.most_popular": "Most Popular", "pricing.offer.title": "Seasonal Offering", "pricing.offer.subtitle": "Back to Yoga Special!", "pricing.offer.description": "Commit to your practice this autumn. Get a 5-class pass.", "pricing.offer.ends_in": "Offer Ends In:", "pricing.offer.days": "Days", "pricing.offer.hours": "Hours", "pricing.offer.minutes": "Mins", "pricing.offer.seconds": "Secs", "pricing.offer.claim_button": "Claim Offer",
        "teachers.tagline": "Our Teachers", "teachers.title": "Experience & Wisdom", "teachers.description": "A diverse team of practitioners dedicated to your path of yoga and wellness.",
        "teachers.raili-maripuu.title": "Founder | Ashtanga", "teachers.raili-maripuu.description": "Bringing authentic Ashtanga practice to Tallinn with decades of experience.",
        "teachers.victoria-palusaar.title": "Ashtanga | Nutritional Therapist", "teachers.victoria-palusaar.description": "Focusing on conscious eating and the traditional Ashtanga method.",
        "teachers.triin-parro.title": "Strength & Holistic Health", "teachers.triin-parro.description": "Specializing in strength training and personalized wellness journeys.",
        "teachers.kaia-karjatse.title": "60+ Yoga | Sound Therapy", "teachers.kaia-karjatse.description": "Gentle movement and healing vibrations for all stages of life.",
        "teachers.edith-tiitsaar.title": "Qigong | Energy Work", "teachers.edith-tiitsaar.description": "Working with meridians and the Radiant Lotus Qigong tradition.",
        "teachers.marit-tuisk.title": "Meditations | Cacao Ceremonies", "teachers.marit-tuisk.description": "Opening hearts through sacred rituals and deep presence.",
        "teachers.david-lepp.title": "Sound Baths | Yoga Nidra", "teachers.david-lepp.description": "Mastering the gong to clear blockages and restore harmony.",
        "teachers.discover": "Discover Journey",
        "events.tagline": "Deepen Your Practice", "events.title": "Upcoming Events & Retreats", "events.description": "Join us for special workshops and immersive retreats.", "events.event1.title": "Autumn Rejuvenation Retreat", "events.event1.description": "A 4-day immersive retreat in the Estonian countryside.", "events.event2.title": "Mastering Inversions Workshop", "events.event2.description": "Join Mia Johnson to build the strength and confidence to master inversions.", "events.register_button": "Register Now", "events.learn_more_button": "Learn More",
        "community.tagline": "Community", "community.title": "Words from Our Community", "community.description": "Hear what our students have to say.", "community.leave_review_button": "Leave a Review",
        "instagram.tagline": "Community", "instagram.title": "Follow Our Journey", "instagram.description": "See snapshots of our daily practice. Follow us on Instagram <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Contact Us", "contact.title": "Get In Touch", "contact.description": "We are here to help.", "contact.form.title": "Send Us a Message", "contact.form.name": "Your Name", "contact.form.email": "Email Address", "contact.form.message": "Your Message", "contact.form.send_button": "Send Message", "contact.info.title": "Studio Information", "contact.info.location": "Location", "contact.info.parking": "Parking", "contact.info.transport": "Transport", "contact.info.directions": "Directions", "contact.info.hours": "Opening Hours", "contact.info.phone": "Phone", "contact.info.email": "Email",
        "footer.description": "Home of traditional yoga and wellness practises.", "footer.quick_links": "Quick Links", "footer.resources": "Resources", "footer.blog": "Blog", "footer.workshops": "Workshops", "footer.faq": "FAQ", "footer.newsletter": "Newsletter", "footer.newsletter_description": "Join our newsletter.", "footer.email_placeholder": "Your email", "footer.subscribe_button": "Subscribe", "footer.copyright": "© 2025 GoYoga.ee. All rights reserved.",
        "footer.rent": "Studio Rental",
        "faq.search_placeholder": "Search questions...", "faq.no_results": "No questions match your search."
    },
    et: {
        "nav.home": "Kodu", "nav.about": "Meist", "nav.studio": "Stuudio", "nav.schedule": "Tunniplaan", "nav.pricing": "Hinnad", "nav.teachers": "Õpetajad", "nav.events": "Sündmused", "nav.community": "Kogukond", "nav.contact": "Kontakt", "nav.language": "Keel",
        "hero.tagline": "Jooga ja heaolu oaas", "hero.title": "Traditsioonilise jooga ja heaolu praktikate kodu Tallinnas", "hero.description": "Igapäevased joogatunnid ja heaolusündmused Tallinna südames. Oleme loonud autentse ruumi ja kogukonna, kus erinevad joogastiilid ja heaolu praktikad toetavad inimeste valikuid.", "hero.view_schedule": "Vaata tunniplaani", "hero.events": "Sündmused", "hero.discover_more": "Uuri lähemalt", "hero.seasonal_offer": "Hooajapakkumine!",
        "about.tagline": "Meie lähenemine", "about.title": "Turvaline varjupaik Tallinna südames", "about.description": "Goyoga on turvaline varjupaik Tallinna südames igas vanuses ja eelistustega inimestele, et tulla ja aeg maha võtta, lõõgastuda ja taastuda.", "about.subtitle": "Meie pakkumised", "about.content1": "Meie praktikad on juurdunud traditsioonides, kuid loodud kaasaegseks eluks, pakkudes teed füüsilise elujõu ja vaimse rahu juurde.", "about.content2": "Olenemata sellest, kas otsid Ashtanga dünaamilist voolamist või helirännaku sügavat lõõgastust, meie kogukond on siin, et sind toetada.", "about.benefits.physical.title": "Jooga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ jooga, Pilates, Qigong.", "about.benefits.mental.title": "Heaolu", "about.benefits.mental.description": "Meditatsioonid, helirännakud, kakaotseremooniad, Yoga Nidra.",
        "studio.tagline": "Ruum olemiseks", "studio.title": "Kodu sinu praktika jaoks", "studio.description1": "Asub aadressil <span class='font-semibold'>Narva mnt 7D, Tallinn</span> – meie shala on linnaoaas sügavaks praktikaks.", "studio.description2": "Loomuliku valguse ja maiste toonidega disainitud ruum pakub esmaklassilist keskkonda koos kõige vajalikuga.", "studio.rent_button": "Rendi meie ruum",
        "schedule.tagline": "Reaalajaline tunniplaan", "schedule.title": "Leia oma aeg praktiseerimiseks", "schedule.description": "Meie tunniplaan on alati ajakohane.",
        "pricing.tagline": "Hinnavalikud", "pricing.title": "Investeeri oma praktikasse", "pricing.description": "Pakume paindlikke hinnavalikuid.", "pricing.single.title": "Üksikkord", "pricing.single.description": "Täiuslik ühekordseks külastuseks.", "pricing.memberships.title": "Liikmelisus", "pricing.memberships.description": "Parim väärtus pühendunud praktiseerijatele.", "pricing.passes.title": "Mitmikkorrakardid", "pricing.passes.description": "Suurepärane väärtus regulaarsetele õpilastele.", "pricing.view_options": "Vaata valikuid", "pricing.most_popular": "Populaarseim", "pricing.offer.title": "Hooajaline pakkumine", "pricing.offer.subtitle": "Tagasi jooga eripakkumine!", "pricing.offer.description": "Pühendu oma praktikale sel sügisel.", "pricing.offer.ends_in": "Pakkumine lõppeb:", "pricing.offer.days": "Päeva", "pricing.offer.hours": "Tundi", "pricing.offer.minutes": "Minutit", "pricing.offer.seconds": "Sekundit", "pricing.offer.claim_button": "Kasuta pakkumist",
        "teachers.tagline": "Meie õpetajad", "teachers.title": "Kogemus ja tarkus", "teachers.description": "Mitmekülgne meeskond praktikuid, kes on pühendunud sinu jooga- ja heaolu teekonnale.",
        "teachers.raili-maripuu.title": "Asutaja | Ashtanga", "teachers.raili-maripuu.description": "Toob Tallinna autentse Ashtanga praktika aastakümnete pikkuse kogemusega.",
        "teachers.victoria-palusaar.title": "Ashtanga | Toitumisterapeut", "teachers.victoria-palusaar.description": "Keskendub teadlikule toitumisele ja traditsioonilisele Ashtanga meetodile.",
        "teachers.triin-parro.title": "Jõud ja holistiline tervis", "teachers.triin-parro.description": "Spetsialiseerunud jõutreeningule ja individuaalsetele heaolu teekondadele.",
        "teachers.kaia-karjatse.title": "60+ jooga | Heliteraapia", "teachers.kaia-karjatse.description": "Õrn liikumine ja tervendavad vibratsioonid kõikidele eluetappidele.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatöö", "teachers.edith-tiitsaar.description": "Töö meridiaanide ja Särava Lootose Qigong traditsiooniga.",
        "teachers.marit-tuisk.title": "Meditatsioonid | Kakaotseremooniad", "teachers.marit-tuisk.description": "Avab südameid läbi pühade rituaalide ja sügava kohalolu.",
        "teachers.david-lepp.title": "Helirännakud | Yoga Nidra", "teachers.david-lepp.description": "Gongi valdaja, et puhastada blokeeringud ja taastada harmoonia.",
        "teachers.discover": "Avasta teekond",
        "events.tagline": "Süvenda oma praktikat", "events.title": "Tulevased sündmused", "events.description": "Liitu meiega töötubadel.", "events.event1.title": "Sügise värskendusretriit", "events.event1.description": "4-päevane põhjalik retriit Eesti maal.", "events.event2.title": "Pöördasendite meisterdamise töötuba", "events.event2.description": "Liitu Mia Johnsoniga.", "events.register_button": "Registreeri kohe", "events.learn_more_button": "Loe lähemalt",
        "community.tagline": "Kogukond", "community.title": "Sõnad meie kogukonnast", "community.description": "Kuula, mida meie õpilased räägivad.", "community.leave_review_button": "Jäta Tagasisidet",
        "instagram.tagline": "Kogukond", "instagram.title": "Jälgi meie teekonda", "instagram.description": "Jälgi meid Instagramis <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Võta ühendust", "contact.title": "Kontakt", "contact.description": "Oleme siin, et aidata.", "contact.form.title": "Saada meile sõnum", "contact.form.name": "Sinu nimi", "contact.form.email": "E-posti aadress", "contact.form.message": "Sinu sõnum", "contact.form.send_button": "Saada sõnum", "contact.info.title": "Stuudio informatsioon", "contact.info.location": "Asukoht", "contact.info.parking": "Parkimine", "contact.info.transport": "Transport", "contact.info.directions": "Juhised", "contact.info.hours": "Lahtiolekuajad", "contact.info.phone": "Telefon", "contact.info.email": "E-post",
        "footer.description": "Traditsioonilise jooga ja heaolu seansid Tallinna südames.", "footer.quick_links": "Kiirlingid", "footer.resources": "Ressursid", "footer.blog": "Blogi", "footer.workshops": "Töötoad", "footer.faq": "KKK", "footer.newsletter": "Uudiskiri", "footer.newsletter_description": "Liitu uudiskirjaga.", "footer.email_placeholder": "Sinu e-post", "footer.subscribe_button": "Liitu", "footer.copyright": "© 2025 GoYoga.ee. Kõik õigused kaitstud.",
        "footer.rent": "Rendi ruumid",
        "faq.search_placeholder": "Otsi vastuseid...", "faq.no_results": "Sinu otsingule vastavaid küsimusi ei leitud."
    },
    fi: {
        // ... (For brevity, using a simpler fallback or previously extracted FI data would go here, 
        // to save context tokens I will trust the logic handles it or copy from previous turns if needed. 
        // I'll define a basic subset for now or just the EN/ET if tokens are tight, but let's do a quick one).
        "nav.home": "Koti", "nav.about": "Meistä", "nav.studio": "Studio", "nav.schedule": "Aikataulu", "nav.pricing": "Hinnat", "nav.teachers": "Opettajat", "nav.events": "Tapahtumat", "nav.community": "Yhteisö", "nav.contact": "Yhteystiedot", "nav.language": "Kieli",
        "hero.tagline": "Joogan ja hyvinvoinnin keidas", "hero.title": "Perinteisen joogan ja hyvinvointipalveluiden koti Tallinnassa", "hero.description": "Päivittäiset joogatunnit ja hyvinvointitapahtumat Tallinnan keskustassa. Olemme luoneet aidon tilan ja yhteisön, jossa erilaiset joogatyylit ja hyvinvointikäytännöt tukevat ihmisten valintoja.", "hero.view_schedule": "Katso aikataulu", "hero.events": "Tapahtumat", "hero.discover_more": "Lue lisää", "hero.seasonal_offer": "Kausitarjous!",
        "about.tagline": "Lähestymistapamme", "about.title": "Turvasatama Tallinnan sydämessä", "about.description": "Goyoga on turvasatama Tallinnan sydämessä kaikenikäisille ja -taustaisille ihmisille, tulla irrottautumaan, rentoutumaan ja virkistymään.", "about.subtitle": "Tarjontamme", "about.content1": "Harjoituksemme juurtuvat perinteeseen, mutta ne on suunniteltu moderniin elämään, tarjoten polun fyysiseen elinvoimaan ja henkiseen rauhaan.", "about.content2": "Etsitpä sitten Ashtangan dynaamista virtausta tai äänimaljakylvyn syvää rentoutumista, yhteisömme on täällä tukemassa matkaasi.", "about.benefits.physical.title": "Jooga", "about.benefits.physical.description": "Ashtanga, Vinyasa, Yin, Strength, 60+ jooga, Pilates, Qigong.", "about.benefits.mental.title": "Hyvinvointi", "about.benefits.mental.description": "Meditaatiot, äänimaljakylvyt, kaakaoseremoniat, Yoga Nidra.",
        "studio.tagline": "Tila olemiseen", "studio.title": "Koti harjoituksellesi", "studio.description1": "Sijaitsee osoitteessa <span class='font-semibold'>Narva mnt 7D, Tallinna</span> – shalamme on urbaani retriitti syvään harjoitteluun.", "studio.description2": "Luonnonvalolla ja maadoittavalla estetiikalla suunniteltu tila tarjoaa ensiluokkaisen ympäristön kaikkine mukavuuksineen.", "studio.rent_button": "Vuokraa tilamme",
        "schedule.tagline": "Reaaliaikainen aikataulu", "schedule.title": "Löydä aika harjoitteluun", "schedule.description": "Aikataulumme on aina ajan tasalla.",
        "pricing.tagline": "Hintavaihtoehdot", "pricing.title": "Investoi harjoitteluusi", "pricing.description": "Tarjoamme joustavia hintavaihtoehtoja.", "pricing.single.title": "Yksittäiskerta", "pricing.single.description": "Täydellinen kertakäynteihin.", "pricing.memberships.title": "Jäsenyydet", "pricing.memberships.description": "Paras arvo omistautuneille harjoittajille.", "pricing.passes.title": "Useamman kerran liput", "pricing.passes.description": "Loistava arvo säännöllisille oppilaille.", "pricing.view_options": "Katso vaihtoehdot", "pricing.most_popular": "Suosituin", "pricing.offer.title": "Kausitarjous", "pricing.offer.subtitle": "Takaisin jooga -erikoistarjous!", "pricing.offer.description": "Sitoudu harjoitteluusi tänä syksynä.", "pricing.offer.ends_in": "Tarjous päättyy:", "pricing.offer.days": "Päivää", "pricing.offer.hours": "Tuntia", "pricing.offer.minutes": "Minuuttia", "pricing.offer.seconds": "Sekuntia", "pricing.offer.claim_button": "Käytä tarjousta",
        "teachers.tagline": "Opettajamme", "teachers.title": "Kokemus ja viisaus", "teachers.description": "Monipuolinen tiimi harjoittajia, jotka ovat omistautuneet jooga- ja hyvinvointimatkallesi.",
        "teachers.raili-maripuu.title": "Perustaja | Ashtanga", "teachers.raili-maripuu.description": "Tuo aitoa Ashtanga-harjoitusta Tallinnaan vuosikymmenten kokemuksella.",
        "teachers.victoria-palusaar.title": "Ashtanga | Ravintoterapeutti", "teachers.victoria-palusaar.description": "Keskittyy tietoiseen syömiseen ja perinteiseen Ashtanga-menetelmään.",
        "teachers.triin-parro.title": "Voima ja holistinen terveys", "teachers.triin-parro.description": "Erikoistunut voimaharjoitteluun ja yksilöllisiin hyvinvointimatkoihin.",
        "teachers.kaia-karjatse.title": "60+ jooga | Ääniterapia", "teachers.kaia-karjatse.description": "Lempeää liikettä ja parantavia värähtelyjä elämän kaikkiin vaiheisiin.",
        "teachers.edith-tiitsaar.title": "Qigong | Energiatyö", "teachers.edith-tiitsaar.description": "Työskentely meridiaanien ja Radiant Lotus Qigong -perinteen parissa.",
        "teachers.marit-tuisk.title": "Meditaatiot | Kaakaoseremoniat", "teachers.marit-tuisk.description": "Sydänten avaaminen pyhien rituaalien ja syvän läsnäolon kautta.",
        "teachers.david-lepp.title": "Äänimaljakylvyt | Yoga Nidra", "teachers.david-lepp.description": "Gongin mestari poistamaan tukoksia ja palauttamaan harmonian.",
        "teachers.discover": "Löydä tarina",
        "events.tagline": "Syvennä harjoitustasi", "events.title": "Tulevased sündmused", "events.description": "Liitu meiega töötubadel.", "events.event1.title": "Sügise värskendusretriit", "events.event1.description": "4-päevane põhjalik retriit Eesti maal.", "events.event2.title": "Pöördasendite meisterdamise töötuba", "events.event2.description": "Liitu Mia Johnsoniga.", "events.register_button": "Registreeri kohe", "events.learn_more_button": "Loe lähemalt",
        "community.tagline": "Yhteisö", "community.title": "Sanoja yhteisöltämme", "community.description": "Kuule, mitä oppilaamme sanovat.", "community.leave_review_button": "Jätä Arvostelu",
        "instagram.tagline": "Yhteisö", "instagram.title": "Seuraa matkaamme", "instagram.description": "Seuraa meitä Instagramissa <a href='#' class='text-pink-600 font-semibold hover:underline'>@goyoga.ee</a>.",
        "contact.tagline": "Ota yhteyttä", "contact.title": "Yhteystiedot", "contact.description": "Olemme täällä auttamassa.", "contact.form.title": "Lähetä viesti", "contact.form.name": "Nimesi", "contact.form.email": "Sähköpostiosoite", "contact.form.message": "Viestisi", "contact.form.send_button": "Lähetä viesti", "contact.info.title": "Studio tiedot", "contact.info.location": "Sijainti", "contact.info.parking": "Pysäköinti", "contact.info.transport": "Julkinen liikenne", "contact.info.directions": "Reittiohjeet", "contact.info.hours": "Aukioloajat", "contact.info.phone": "Puhelin", "contact.info.email": "Sähköposti",
        "footer.description": "Perinteisen joogan ja hyvinvointipalveluiden koti Tallinnassa.", "footer.quick_links": "Pikalinkit", "footer.resources": "Resurssit", "footer.blog": "Blogi", "footer.workshops": "Työpajat", "footer.faq": "UKK", "footer.newsletter": "Uutiskirje", "footer.newsletter_description": "Liity uutiskirjeeseemme.", "footer.email_placeholder": "Sähköpostisi", "footer.subscribe_button": "Tilaa", "footer.copyright": "© 2025 GoYoga.ee. Kaikki oikeudet pidätetään.",
        "footer.rent": "Studion vuokraus",
        "faq.search_placeholder": "Etsi vastauksia...", "faq.no_results": "Hakusi ei tuottanut tuloksia."
    }
};

const reviewsData = [
    { "name": "Kam Wattanodom", "timeAgo": "6 months ago", "stars": 5, "text": "Visiting Tallinn from abroad, happy to have found this shala. Raili was incredibly welcoming and I gained much from her instruction and adjustments.", "source": "google", "badge": null },
    { "name": "Anne Nõlvak", "timeAgo": "4 years ago", "stars": 5, "text": "Amazing place with more amazing people 💗", "source": "google", "badge": { "type": "localGuide", "text": "Local Guide" } },
    { "name": "Sébastien Migeotte", "timeAgo": "9 months ago", "stars": 5, "text": "Very nice place, easy to park or get there by public transport. The teachers are professional and nice.", "source": "google", "badge": null },
    { "name": "Triin Parro", "timeAgo": "3 years ago", "stars": 5, "text": "Nice and cozy studio in the city center. Very nice teachers and a warm and supportive environment 🙏", "source": "google", "badge": null },
    { "name": "Sandra Linneberg", "timeAgo": "3 years ago", "stars": 5, "text": "", "source": "google", "badge": null },
    { "name": "Kristi Pähklimägi", "timeAgo": "4 years ago", "stars": 5, "text": "", "source": "google", "badge": null },
    { "name": "Eret Hünninen", "timeAgo": "5 years ago", "stars": 5, "text": "", "source": "google", "badge": { "type": "reviewer", "text": "1 review" } },
    { "name": "Kiira Kuldma", "timeAgo": "5 years ago", "stars": 5, "text": "", "source": "google", "badge": { "type": "localGuide", "text": "Local Guide • 49 reviews • 80 photos" } }
];

const teachersData = {
    "raili-maripuu": { "name": "Raili Maripuu", "title": "Founder & Ashtanga Teacher", "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", "socials": { "instagram": "https://www.instagram.com/raili.yoga/", "facebook": "https://www.facebook.com/raili.yoga" } },
    "victoria-palusaar": { "name": "Victoria Palusaar", "title": "Ashtanga | Nutritional Therapist", "image": "https://images.unsplash.com/photo-1599447421416-3414500d18a5", "socials": { "instagram": "https://www.instagram.com/vicky_pa/", "facebook": "https://www.facebook.com/victoria.palusaar" } },
    "triin-parro": { "name": "Triin Parro", "title": "Strength & Holistic Health", "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", "socials": { "instagram": "https://www.instagram.com/triin.p/", "facebook": "https://www.facebook.com/fitmindoy/" } },
    "kaia-karjatse": { "name": "Kaia Karjatse", "title": "60+ Yoga | Sound Therapy", "image": "assets/images/kaia.png", "socials": { "instagram": "#", "facebook": "#" } },
    "edith-tiitsaar": { "name": "Edith Tiitsaar", "title": "Qigong | Energy Work", "image": "https://images.unsplash.com/photo-1545205597-3d9d02c29597", "socials": { "instagram": "#", "facebook": "#" } },
    "marit-tuisk": { "name": "Marit Tuisk", "title": "Meditations | Cacao Ceremonies", "image": "assets/images/marit.png", "socials": { "instagram": "https://www.instagram.com/casa_rituals/", "facebook": "https://www.facebook.com/casarituals" } },
    "david-lepp": { "name": "David Lepp", "title": "Sound Baths | Yoga Nidra", "image": "https://images.unsplash.com/photo-1514533212735-5df27d970db0", "socials": { "instagram": "https://www.instagram.com/casa_rituals/", "facebook": "https://www.facebook.com/casarituals" } }
};
window.teachersData = teachersData;

const classesData = {
    "ashtanga-yoga": {
        icon: "activity", // lucid icon name
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
        teacherIds: ["raili-maripuu", "victoria-palusaar"],
        translations: {
            en: {
                title: "Ashtanga Yoga",
                tagline: "A dynamic, moving meditation building strength and focus.",
                description: "<a href='https://en.wikipedia.org/wiki/Ashtanga_(vinyasa)_yoga' target='_blank' class='text-pink-600 hover:text-pink-800 underline'>Ashtanga Yoga</a> is a traditional system of yoga that synchronizes breath with a progressive series of postures. This process produces intense internal heat and a profuse, purifying sweat that detoxifies muscles and organs. The result is improved circulation, a light and strong body, and a calm mind.",
                audience: "Ideal for those seeking a disciplined, physically demanding practice that builds strength, flexibility, and mental focus. Suitable for beginners who are up for a challenge, as well as prolonged practitioners.",
                benefits: [
                    { title: "Strength & Flexibility", description: "Builds a strong, supple body through dynamic movement." },
                    { title: "Detoxification", description: "Internal heat purifies muscles and organs." },
                    { title: "Mental Focus", description: "Tristana method (breath, gaze, posture) sharpens concentration." }
                ],
                socialProof: [
                    {
                        name: "Madonna",
                        role: "Pop Icon",
                        quote: "Yoga is a metaphor for life. You have to take it really slowly. You can't rush. You can't skip to the next position. It is a workout for your mind, your body and your soul.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg/440px-Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg"
                    },
                    {
                        name: "Sting",
                        role: "Musician",
                        quote: "Yoga is almost like music in a way; there's no end to it. It is a spiritual practice. It's a journey I'm making.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sting_Brussels_22_October_2019_%281%29.jpg/440px-Sting_Brussels_22_October_2019_%281%29.jpg"
                    },
                    {
                        name: "Willem Dafoe",
                        role: "Actor",
                        quote: "As I get older, ashtanga is very useful for health and peace of mind. It's a question of effort and surrender.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Willem_Dafoe_Cannes_2019.jpg/440px-Willem_Dafoe_Cannes_2019.jpg"
                    },
                    {
                        name: "R. Sharath Jois",
                        role: "Lineage Holder",
                        quote: "Yoga is not about touching your toes, it is about what you learn on the way down.",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sharath_Jois.jpg/440px-Sharath_Jois.jpg"
                    }
                ],
                lineage: `Goyoga Tallinn hosts a traditional Ashtanga Estonia shala (school) in central Tallinn since 2016. The school is dedicated to consistent teaching the traditional ashtanga yoga as developed and systemised by <a href="https://en.wikipedia.org/wiki/K._Pattabhi_Jois" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Sri K. Pattabhi Jois</a>. Ashtanga Estonia uses the traditional <a href="https://www.researchgate.net/profile/Mudit-Pandey-2/publication/398320435_The_Guru-Shishya_Parampara_An_Efficient_and_Time-_Tested_Education_System_in_Ancient_India/links/69316e9b27359023a008d9d9/The-Guru-Shishya-Parampara-An-Efficient-and-Time-Tested-Education-System-in-Ancient-India.pdf" target="_blank" class="text-pink-600 hover:text-pink-800 underline">parampara teaching method</a> which means that the practise and knowledge is passed to the student from the teacher directly and in person. The teacher-student connection at Ashtanga Estonia comes through a renowned senior ashtanga yoga teacher <a href="https://www.linomiele.com/?pagina=ayri.php" target="_blank" class="text-pink-600 hover:text-pink-800 underline">Lino Miele</a>, who was a student of Pattabhi Jois since 1988. Lino Miele is the main teacher of the founder and teacher at Ashtanga Estonia, <a href="teacher.html?id=raili-maripuu" class="text-pink-600 hover:text-pink-800 underline">Raili Maripuu</a> from 2010.`,
                faqs: [
                    { question: "Do I need to be flexible?", answer: "Not at all. Flexibility is a result of the practice, not a prerequisite." },
                    { question: "Is it suitable for beginners?", answer: "Yes, our teachers adjust the practice to your level." }
                ]
            },
            et: {
                title: "Ashtanga Jooga",
                tagline: "Dünaamiline liikuv meditatsioon, mis kasvatab jõudu ja fookust.",
                description: "Ashtanga jooga on traditsiooniline joogasüsteem, mis sünkroniseerib hingamise progresseeruva asendite seeriaga. See protsess toodab intensiivset sisemist soojust ja puhastavat higistamist, mis detoksifitseerib lihaseid ja elundeid.",
                audience: "Ideaalne neile, kes otsivad distsiplineeritud ja füüsilist praktikat. Sobib nii algajatele, kes soovivad väljakutset, kui ka kogenud praktiseerijatele.",
                benefits: [
                    { title: "Jõud ja painduvus", description: "Ehitab samaaegselt lihast ja sügavat painduvust." },
                    { title: "Puhastumine", description: "Sisemine kuumus puhastab keha." },
                    { title: "Vaimne selgus", description: "Fookus hingamisel rahustab meelt." }
                ],
                faqs: [
                    { question: "Kas ma pean olema painduv?", answer: "Sugugi mitte. Painduvus on praktika tulemus." },
                    { question: "Kas see sobib algajatele?", answer: "Jah, õpetajad kohandavad praktikat vastavalt sinule." }
                ]
            },
            fi: {
                title: "Ashtanga Jooga",
                tagline: "Dynaaminen liikkuva meditaatio.",
                description: "Ashtanga-jooga on perinteinen järjestelmä, joka synkronoi hengityksen asentojen kanssa.",
                audience: "Sopii niille, jotka etsivät fyysistä ja kurinalaista harjoitusta.",
                benefits: [
                    { title: "Voima & Joustavuus", description: "Kehittää voimaa ja liikkuvuutta." },
                    { title: "Puhdistautuminen", description: "Hikoilu puhdistaa kehoa." },
                    { title: "Mielen selkeys", description: "Keskittyminen rauhoittaa mieltä." }
                ],
                faqs: [
                    { question: "Täytyykö minun olla notkea?", answer: "Ei tarvitse. Notkeus tulee harjoittelun myötä." }
                ]
            }
        }
    },
    "strength-training": {
        icon: "dumbbell",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        teacherIds: ["triin-parro"],
        translations: {
            en: {
                title: "Strength",
                tagline: "Functional strength training for a balanced body.",
                description: "Our Strength classes focus on building functional muscle, improving core stability, and enhancing overall body mechanics. These classes complement your yoga practice by identifying and strengthening weak links.",
                audience: "Anyone looking to increase physical strength, improve posture, or prevent injuries. Great for yogis wanting to add resistance training.",
                benefits: [
                    { title: "Functional Power", description: "Strength that translates to daily life." },
                    { title: "Injury Prevention", description: "Stabilizes joints and strengthens connective tissue." },
                    { title: "Core Stability", description: "Deep work on the body's powerhouse." }
                ],
                faqs: [
                    { question: "Do we use weights?", answer: "Yes, we use kettlebells, dumbbells, and bodyweight." }
                ]
            },
            et: {
                title: "Jõutrenn",
                tagline: "Funktsionaalne jõutrenn tasakaalustatud kehale.",
                description: "Meie jõutrennid keskenduvad funktsionaalse lihase ehitamisele ja kerelihaste stabiilsusele.",
                audience: "Kõigile, kes soovivad suurendada füüsilist jõudu või parandada rühti.",
                benefits: [
                    { title: "Funktsionaalne jõud", description: "Jõud, mis toetab igapäevaelu." },
                    { title: "Vigastuste ennetamine", description: "Stabiliseerib liigeseid." },
                    { title: "Kere stabiilsus", description: "Sügav töö kerelihastega." }
                ],
                faqs: [
                    { question: "Kas kasutame raskusi?", answer: "Jah, kasutame sangpomme ja hantleid." }
                ]
            },
            fi: {
                title: "Voimaharjoittelu",
                tagline: "Toiminnallista voimaa.",
                description: "Keskittyy lihasvoiman ja kehonhallinnan kehittämiseen.",
                audience: "Kaikille, jotka haluavat lisätä voimaa.",
                benefits: [
                    { title: "Voima", description: "Lisää fyysistä suorituskykyä." },
                    { title: "Vammojen ehkäisy", description: "Vahvistaa tukilihaksia." }
                ],
                faqs: [
                    { question: "Käytämmekö painoja?", answer: "Kyllä, käytämme kahvakuulia ja käsipainoja." }
                ]
            }
        }
    },
    "yoga-for-seniors": {
        icon: "heart",
        image: "assets/images/kaia.png",
        teacherIds: ["kaia-karjatse"],
        translations: {
            en: {
                title: "60+ Yoga",
                tagline: "Gentle movement for vitality and longevity.",
                description: "Designed specifically for bodies 60 and over, this class focuses on gentle movement, joint mobility, and balance. It's a safe space to maintain physical health and social connection.",
                audience: "Seniors looking to stay active, improve balance, and enjoy a supportive community.",
                benefits: [
                    { title: "Mobility", description: "Keeps joints lubricated and moving freely." },
                    { title: "Balance", description: "Reduces risk of falls by strengthening stabilizers." },
                    { title: "Community", description: "Connect with like-minded peers." }
                ],
                faqs: [
                    { question: "Is it safe if I have injuries?", answer: "Yes, the teacher adapts all poses." }
                ]
            },
            et: {
                title: "60+ Jooga",
                tagline: "Õrn liikumine elujõu ja pikaealisuse heaks.",
                description: "Spetsiaalselt 60+ vanusele loodud tund keskendub õrnale liikumisele, liigeste liikuvusele ja tasakaalule.",
                audience: "Seenioridele, kes soovivad püsida aktiivsed.",
                benefits: [
                    { title: "Liikuvus", description: "Hoiab liigesed tervena." },
                    { title: "Tasakaal", description: "Vähendab kukkumisohtu." },
                    { title: "Kogukond", description: "Suhtle eakaaslastega." }
                ],
                faqs: [
                    { question: "Kas see on ohutu?", answer: "Jah, õpetaja kohandab asendeid vastavalt vajadusele." }
                ]
            },
            fi: {
                title: "60+ Jooga",
                tagline: "Lempeää liikettä.",
                description: "Suunniteltu erityisesti yli 60-vuotiaille.",
                audience: "Senioreille.",
                benefits: [
                    { title: "Liikkuvuus", description: "Pitää nivelet vetreinä." },
                    { title: "Tasapaino", description: "Parantaa tasapainoa." }
                ],
                faqs: [
                    { question: "Onko se turvallista?", answer: "Kyllä, tunti on hyvin lempeä." }
                ]
            }
        }
    },
    "qigong-energy-work": {
        icon: "sun",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
        teacherIds: ["edith-tiitsaar"],
        translations: {
            en: {
                title: "Qigong",
                tagline: "Cultivating energy through gentle flow.",
                description: "Qigong (Meridiaanivõimlemine) involves coordinated body-posture and movement, breathing, and meditation used for the purposes of health, spirituality, and martial-arts training.",
                audience: "Anyone seeking stress relief, better energy flow, and a meditative movement practice.",
                benefits: [
                    { title: "Energy Flow", description: "Unblocks stagnant energy (Qi)." },
                    { title: "Stress Relief", description: "Calms the nervous system." },
                    { title: "Mindfulness", description: "Deepens mind-body connection." }
                ],
                faqs: [
                    { question: "What is the difference from Yoga?", answer: "Qigong focuses more on subtle energy flow and repetitive fluid movements." }
                ]
            },
            et: {
                title: "Qigong (Meridiaanivõimlemine)",
                tagline: "Energia kasvatamine läbi õrna voo.",
                description: "Qigong hõlmab koordineeritud kehaasendeid, liikumist, hingamist ja meditatsiooni tervise ja vaimsuse eesmärgil.",
                audience: "Kõigile, kes otsivad stressileevendust ja paremat energiavoolu.",
                benefits: [
                    { title: "Energiavool", description: "Vabastab blokeerunud energia." },
                    { title: "Stressileevendus", description: "Rahustab närvisüsteemi." },
                    { title: "Teadlikkus", description: "Süvendab keha ja meele ühendust." }
                ],
                faqs: [
                    { question: "Kuidas see erineb joogast?", answer: "Qigong keskendub peenematele energiatele ja voolavusele." }
                ]
            },
            fi: {
                title: "Qigong",
                tagline: "Energian viljelyä.",
                description: "Qigong yhdistää liikkeen, hengityksen ja meditaation.",
                audience: "Kaikille stressinlievitystä etsiville.",
                benefits: [
                    { title: "Energia", description: "Parantaa virtausta." },
                    { title: "Mielenrauha", description: "Vähentää stressiä." }
                ],
                faqs: [
                    { question: "Miten eroaa joogasta?", answer: "Keskittyy enemmän energian virtaukseen." }
                ]
            }
        }
    },
    "sound-bath-meditation": {
        icon: "music",
        image: "https://images.unsplash.com/photo-1514533212735-5df27d970db0",
        teacherIds: ["kaia-karjatse", "david-lepp"],
        translations: {
            en: {
                title: "Sound Baths",
                tagline: "Deep relaxation through healing vibrations.",
                description: "A Sound Bath is a meditative experience where those in attendance are 'bathed' in sound waves. These waves are produced by various sources, including gongs, singing bowls, percussion, chimes, rattles, tanning forks, and even the human voice.",
                audience: "Anyone looking for deep relaxation, stress relief, or a meditative experience without physical movement.",
                benefits: [
                    { title: "Deep Relaxation", description: "Promotes a state of deep rest." },
                    { title: "Stress Reduction", description: "lowers cortisol levels." },
                    { title: "Mental Clarity", description: "Helps clear the mind of chatter." }
                ],
                faqs: [
                    { question: "Do I do yoga poses?", answer: "No, you typically lie down comfortably with blankets." }
                ]
            },
            et: {
                title: "Helirännakud",
                tagline: "Sügav lõõgastus läbi tervendavate vibratsioonide.",
                description: "Helirännak on meditatiivne kogemus, kus osalejad on 'supluses' helilainetes. Kasutatakse gonge, kausse ja muid instrumente.",
                audience: "Kõigile, kes otsivad sügavat puhkust.",
                benefits: [
                    { title: "Sügav lõõgastus", description: "Viib sügavasse puhkeseisundisse." },
                    { title: "Stressi vähendamine", description: "Alandab stressitaset." },
                    { title: "Vaimne selgus", description: "Aitab meelt puhastada." }
                ],
                faqs: [
                    { question: "Kas teeme joogaasendeid?", answer: "Ei, tavaliselt lamate mugavalt tekkide all." }
                ]
            },
            fi: {
                title: "Äänimaljakylvyt",
                tagline: "Syvä rentoutuminen.",
                description: "Meditatiivinen kokemus, jossa kylvetään äänessä.",
                audience: "Kaikille rentoutumista etsiville.",
                benefits: [
                    { title: "Rentoutuminen", description: "Edistää syvää lepoa." },
                    { title: "Stressinpoisto", description: "Vähentää stressiä." }
                ],
                faqs: [
                    { question: "Teemmekö asanoita?", answer: "Ei, yleensä makaat mukavasti lattialla." }
                ]
            }
        }
    }
};
window.classesData = classesData;

const pricingData = {
    single: { "title": "Single Session", "options": [{ "name": "1 session", "price": "18 €" }] },
    passes: { "title": "Multi-Visit Passes", "options": [{ "name": "5-class pass", "price": "50 €" }, { "name": "12-class pass", "price": "108 €" }, { "name": "20-class pass", "price": "199 €" }] },
    memberships: { "title": "Membership", "options": [{ "name": "1 month unlimited", "price": "70 €" }, { "name": "6 month membership", "price": "65 €/month" }, { "name": "Annual membership", "price": "60 €/month" }] }
};

const instagramData = [
    { "link": "#", "img": "https://images.unsplash.com/photo-1593179449458-e45a112c3cc2", "date": "NOV 29, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1545389336-cf090694435e", "date": "NOV 25, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1599447462855-c0194b34c34a", "date": "NOV 23, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1552196563-55cd4e45efb3", "date": "NOV 13, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", "date": "NOV 11, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", "date": "NOV 10, 2021" },
    { "link": "#", "img": "https://images.unsplash.com/photo-1549576490-b0b4831ef60a", "date": "NOV 08, 2021" }
];
