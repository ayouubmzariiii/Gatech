import type { Guide } from "../types";

const guide: Guide = {
  slug: "former-equipes-cybersecurite-entreprise",
  category: "entreprises",
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 6,
  relatedCerts: ["iso-27001-lead-implementer", "cnd-v3", "comptia-cysa-plus", "cism", "ceh-v13"],
  title: {
    fr: "Entreprises marocaines : comment former ses équipes à la cybersécurité",
    ar: "تكوين فرق العمل في الأمن السيبراني: دليل للمقاولات المغربية",
    en: "Training Your Teams in Cybersecurity: A Guide for Moroccan Companies",
  },
  seoTitle: {
    fr: "Formation cybersécurité entreprise au Maroc : le guide",
    ar: "تكوين المقاولات في الأمن السيبراني بالمغرب: الدليل",
    en: "Corporate Cybersecurity Training in Morocco: A Guide",
  },
  seoDescription: {
    fr: "Former ses équipes en cybersécurité au Maroc : besoins par rôle, certifications, intra ou inter, budget, financement et plan annuel. Lisez le guide.",
    ar: "تكوين المقاولات في الأمن السيبراني بالمغرب: الحاجيات حسب كل دور، الشهادات، التكوين الداخلي أو المشترك، الميزانية والتمويل والمخطط السنوي. ابنِ مخططك.",
    en: "Corporate cybersecurity training in Morocco: needs by role, certifications, in-house vs public sessions, budget, funding, annual plan. Build yours.",
  },
  excerpt: {
    fr: "Incidents, facteur humain, loi 05-20, exigences des clients et des appels d'offres : former ses collaborateurs à la cybersécurité est devenu un enjeu de gestion. Voici comment identifier les besoins, choisir les certifications et bâtir un plan de formation annuel.",
    ar: "الحوادث والعامل البشري والقانون 05-20 ومتطلبات الزبناء وطلبات العروض: أصبح تكوين المتعاونين في الأمن السيبراني رهانا تدبيريا. إليك كيف تحدد الحاجيات وتختار الشهادات وتبني مخطط تكوين سنويا.",
    en: "Incidents, the human factor, Law 05-20, client and tender requirements: training staff in cybersecurity has become a management issue. Here is how to identify needs, choose certifications and build a yearly training plan.",
  },
  sections: {
    fr: [
      {
        heading: "Pourquoi former ses équipes à la cybersécurité ?",
        paragraphs: [
          "Parce que la technologie seule ne suffit pas. Un pare-feu bien configuré n'empêche pas un collaborateur de saisir son mot de passe sur une fausse page de connexion, ni un administrateur de laisser un service exposé par méconnaissance. Une grande partie des incidents de sécurité implique, à un moment ou à un autre, une erreur humaine, un manque de vigilance ou une compétence manquante. Former ses équipes, c'est réduire cette surface d'attaque humaine et rendre les outils déjà achetés réellement efficaces.",
          "Au Maroc, trois autres facteurs pèsent. D'abord, la loi 05-20 relative à la cybersécurité et les référentiels de la DGSSI, dont la DNSSI, imposent aux entités concernées (administrations, établissements publics, infrastructures d'importance vitale, certains opérateurs) des mesures de sécurité qui supposent des compétences internes ; et ces exigences se répercutent souvent sur leurs prestataires. Ensuite, les clients, notamment européens pour les entreprises d'offshoring et de services, demandent de plus en plus de garanties : politiques de sécurité, personnel formé, parfois une certification ISO 27001. Enfin, de nombreux appels d'offres valorisent ou exigent des profils certifiés dans l'équipe projet.",
        ],
      },
      {
        heading: "Comment évaluer les besoins de formation selon les rôles ?",
        paragraphs: [
          "La première erreur consiste à envoyer tout le monde suivre la même formation. Les besoins diffèrent fortement selon le poste. Partez d'une cartographie simple : qui fait quoi dans votre système d'information, quels risques sont prioritaires, et quelles compétences manquent aujourd'hui. Un audit, un incident récent ou une exigence client donnent souvent un bon point de départ.",
        ],
        list: [
          "Équipe informatique (système, réseau, support) : durcissement, gestion des correctifs et des accès, sécurité réseau, détection des premiers signaux d'incident.",
          "SOC et analystes sécurité : analyse d'alertes, chasse aux menaces, gestion des vulnérabilités, réponse aux incidents.",
          "Développeurs : développement sécurisé, principales vulnérabilités web (injections, authentification, contrôle d'accès), revue de code et tests de sécurité.",
          "Management, RSSI et conformité : gouvernance, analyse de risques, politique de sécurité, conformité à la loi 05-20 et à l'ISO 27001, gestion de crise.",
          "Ensemble du personnel : sensibilisation à l'hameçonnage, aux mots de passe, à l'ingénierie sociale, à la protection des données et aux réflexes à adopter en cas d'incident.",
        ],
      },
      {
        heading: "Quelles certifications choisir pour chaque profil ?",
        paragraphs: [
          "Les certifications reconnues ont un double intérêt : elles structurent l'apprentissage autour d'un référentiel éprouvé et elles constituent une preuve opposable auprès des clients, des auditeurs et des acheteurs publics. Voici les correspondances les plus courantes, avec nos tarifs publics (voucher d'examen inclus).",
        ],
        list: [
          "Administrateurs système et réseau : CND v3 d'EC-Council (5 jours, à partir de 15 900 MAD), centrée sur la défense du réseau, ou CompTIA Security+ pour un socle généraliste.",
          "Analystes SOC : CompTIA CySA+ (5 jours, à partir de 12 900 MAD), orientée détection, analyse et réponse aux incidents.",
          "Équipes offensives, auditeurs techniques et profils qui doivent comprendre l'attaquant : CEH v13 (5 jours, à partir de 21 900 MAD).",
          "RSSI, responsables conformité et chefs de projet SMSI : ISO 27001 Lead Implementer (5 jours, à partir de 17 900 MAD), pour mettre en place un système de management de la sécurité.",
          "Managers sécurité confirmés : CISM d'ISACA (4 jours, à partir de 19 900 MAD), axée gouvernance, risques et pilotage d'un programme de sécurité.",
          "Développeurs et personnel non technique : formations ciblées (développement sécurisé, sensibilisation) plutôt qu'une certification lourde.",
        ],
      },
      {
        heading: "Formation intra ou inter-entreprise : quel format choisir ?",
        paragraphs: [
          "En inter-entreprise, vos collaborateurs rejoignent une session publique avec des participants d'autres organisations. C'est le format adapté pour une ou deux personnes, avec l'avantage d'échanger avec des pairs d'autres secteurs. Le calendrier est en revanche fixé à l'avance.",
          "En intra-entreprise, la session est réservée à vos équipes, dans vos locaux ou en classe virtuelle. Elle devient intéressante à partir d'un petit groupe : le calendrier s'adapte à vos contraintes, les exemples peuvent porter sur votre contexte et les échanges sont plus libres, car on peut parler de son propre système d'information. Pour des sujets sensibles, c'est souvent le format privilégié.",
        ],
        list: [
          "1 à 2 participants : inter-entreprise.",
          "Groupe de plusieurs personnes sur la même certification : intra-entreprise ou inscription groupée à une session inter.",
          "Équipes réparties sur plusieurs villes du Maroc : classe virtuelle.",
          "Sensibilisation de tout le personnel : sessions courtes et répétées en interne, plutôt qu'un événement ponctuel.",
        ],
      },
      {
        heading: "Quel budget prévoir et comment mesurer le retour sur investissement ?",
        paragraphs: [
          "Le budget dépend du nombre de collaborateurs, des certifications visées et du format. Raisonnez en coût complet : formation, examen, temps passé hors production, éventuelles cotisations de maintien des certifications et révisions. Une approche progressive, qui priorise les rôles les plus exposés, permet d'étaler l'effort sur plusieurs exercices.",
          "Le retour sur investissement d'une formation en sécurité se mesure rarement en dirhams de manière précise, car on cherche surtout à éviter des incidents. Des indicateurs qualitatifs et opérationnels restent toutefois parlants :",
        ],
        list: [
          "Taux de clic lors des campagnes de simulation d'hameçonnage, avant et après sensibilisation.",
          "Délai de détection et de traitement des incidents par l'équipe informatique ou le SOC.",
          "Nombre de non-conformités relevées lors des audits internes ou externes.",
          "Capacité à répondre aux questionnaires de sécurité des clients et aux exigences des appels d'offres.",
          "Moindre dépendance envers des prestataires pour des tâches courantes, et fidélisation des talents formés.",
        ],
      },
      {
        heading: "Quels dispositifs de financement existent au Maroc ?",
        paragraphs: [
          "Les entreprises marocaines assujetties à la taxe de formation professionnelle peuvent, sous conditions, bénéficier d'un remboursement partiel de certaines actions de formation dans le cadre des contrats spéciaux de formation (CSF), gérés avec l'OFPPT. Les règles d'éligibilité, les plafonds et les démarches (notamment les délais de dépôt des dossiers et la planification préalable des actions) évoluent : renseignez-vous directement auprès des organismes compétents ou de votre fédération professionnelle avant d'engager la dépense, et intégrez ce point dès la conception de votre plan de formation.",
          "Au-delà des dispositifs publics, pensez aux leviers internes : budget formation annuel, tarifs de groupe, regroupement de plusieurs services sur une même session et étalement des certifications sur l'année.",
        ],
      },
      {
        heading: "Comment construire un plan de formation annuel en cybersécurité ?",
        paragraphs: [
          "Un plan annuel évite les formations décidées dans l'urgence après un incident. Il relie chaque action à un risque ou à une exigence identifiée et facilite les démarches de financement.",
        ],
        list: [
          "Diagnostic : cartographier les rôles, les risques prioritaires et les écarts de compétences (audit, incidents, exigences clients, loi 05-20).",
          "Priorisation : commencer par les fonctions les plus exposées ou les plus critiques pour la conformité.",
          "Calendrier : répartir les certifications sur l'année en tenant compte des périodes de forte activité, et réserver tôt les sessions.",
          "Sensibilisation continue : prévoir des rappels réguliers pour l'ensemble du personnel plutôt qu'une session unique.",
          "Suivi : définir les indicateurs dès le départ et faire un bilan en fin d'année pour ajuster le plan suivant.",
        ],
      },
      {
        heading: "Former vos équipes avec GATech",
        paragraphs: [
          "GATech accompagne les entreprises marocaines avec des formations certifiantes qui incluent le voucher d'examen officiel, en inter-entreprise à Casablanca ou à Rabat, en classe virtuelle, ou en intra-entreprise dans vos locaux partout au Maroc. Pour vos plans de formation, le tarif groupe offre 15 % de remise dès 3 participants d'une même entreprise inscrits à la même session, et l'inscription anticipée 10 % de remise pour tout règlement au moins 4 semaines avant le début de la session. Les remises ne se cumulent pas.",
          "Pour les collaborateurs qui financent eux-mêmes leur parcours, le paiement en 3 fois sans frais et la remise de 15 % pour les étudiants et jeunes diplômés restent disponibles. Contactez-nous pour établir un devis aligné sur votre plan de formation annuel.",
        ],
      },
    ],
    ar: [
      {
        heading: "لماذا ينبغي تكوين فرق العمل في الأمن السيبراني؟",
        paragraphs: [
          "لأن التكنولوجيا وحدها لا تكفي. فالجدار الناري المضبوط جيدا لا يمنع متعاونا من إدخال كلمة مروره في صفحة ولوج مزيفة، ولا يمنع متصرفا من ترك خدمة مكشوفة عن غير علم. وجزء كبير من الحوادث الأمنية ينطوي، في لحظة ما، على خطأ بشري أو قلة يقظة أو كفاءة غائبة. وتكوين الفرق يعني تقليص هذا السطح البشري للهجوم وجعل الأدوات المقتناة فعالة حقا.",
          "وفي المغرب، تنضاف ثلاثة عوامل أخرى. أولا، يفرض القانون 05-20 المتعلق بالأمن السيبراني والمرجعيات الصادرة عن DGSSI، ومنها DNSSI، على الهيئات المعنية (الإدارات والمؤسسات العمومية والبنيات التحتية ذات الأهمية الحيوية وبعض المتعهدين) تدابير أمنية تتطلب كفاءات داخلية، وغالبا ما تنعكس هذه المتطلبات على مزوديها. ثانيا، يطالب الزبناء، خاصة الأوروبيون بالنسبة لشركات الأوفشورينغ والخدمات، بمزيد من الضمانات: سياسات أمن، وموظفين مكوَّنين، وأحيانا شهادة ISO 27001. وأخيرا، تثمّن كثير من طلبات العروض وجود ملفات حاصلة على شهادات ضمن فريق المشروع أو تشترطه.",
        ],
      },
      {
        heading: "كيف تُقيّم حاجيات التكوين حسب الأدوار؟",
        paragraphs: [
          "الخطأ الأول هو إرسال الجميع إلى التكوين نفسه. فالحاجيات تختلف كثيرا من منصب لآخر. انطلق من خريطة بسيطة: من يقوم بماذا في نظام معلوماتك، وما المخاطر ذات الأولوية، وما الكفاءات الغائبة حاليا. وغالبا ما يشكل تدقيق أو حادث حديث أو متطلب من زبون نقطة انطلاق جيدة.",
        ],
        list: [
          "الفريق المعلوماتي (الأنظمة والشبكات والدعم): التحصين وتدبير التحديثات والولوجيات وأمن الشبكات ورصد المؤشرات الأولى للحوادث.",
          "مركز SOC ومحللو الأمن: تحليل التنبيهات والبحث عن التهديدات وتدبير الثغرات والاستجابة للحوادث.",
          "المطورون: التطوير الآمن وأبرز ثغرات الويب (الحقن، المصادقة، مراقبة الولوج) ومراجعة الشيفرة واختبارات الأمن.",
          "الإدارة ومسؤول أمن نظم المعلومات والامتثال: الحكامة وتحليل المخاطر وسياسة الأمن والامتثال للقانون 05-20 ولمعيار ISO 27001 وتدبير الأزمات.",
          "جميع المستخدمين: التحسيس بالتصيد الاحتيالي وكلمات المرور والهندسة الاجتماعية وحماية المعطيات والسلوك الواجب اتباعه عند وقوع حادث.",
        ],
      },
      {
        heading: "ما الشهادات المناسبة لكل ملف؟",
        paragraphs: [
          "للشهادات المعترف بها فائدة مزدوجة: فهي تنظم التعلم حول مرجع مُجرَّب، وتشكل دليلا يمكن تقديمه للزبناء والمدققين والمشترين العموميين. إليك أكثر التوافقات شيوعا مع أسعارنا العمومية (قسيمة الامتحان مشمولة).",
        ],
        list: [
          "متصرفو الأنظمة والشبكات: CND v3 من EC-Council (5 أيام، ابتداء من 15900 درهم) المركزة على الدفاع عن الشبكة، أو CompTIA Security+ لأساس عام.",
          "محللو SOC: CompTIA CySA+ (5 أيام، ابتداء من 12900 درهم) الموجهة نحو الرصد والتحليل والاستجابة للحوادث.",
          "الفرق الهجومية والمدققون التقنيون وكل من يحتاج إلى فهم المهاجم: CEH v13 (5 أيام، ابتداء من 21900 درهم).",
          "مسؤولو أمن نظم المعلومات ومسؤولو الامتثال ورؤساء مشاريع SMSI: ISO 27001 Lead Implementer (5 أيام، ابتداء من 17900 درهم) لإرساء نظام لتدبير أمن المعلومات.",
          "مديرو الأمن ذوو الخبرة: CISM من ISACA (4 أيام، ابتداء من 19900 درهم) المركزة على الحكامة والمخاطر وقيادة برنامج الأمن.",
          "المطورون والموظفون غير التقنيين: تكوينات موجهة (التطوير الآمن، التحسيس) بدل شهادة ثقيلة.",
        ],
      },
      {
        heading: "تكوين داخلي أم مشترك بين المقاولات: أي صيغة تختار؟",
        paragraphs: [
          "في التكوين المشترك بين المقاولات، ينضم متعاونوك إلى دورة عمومية مع مشاركين من مؤسسات أخرى. وهي الصيغة المناسبة لشخص أو شخصين، مع ميزة تبادل التجارب مع نظراء من قطاعات أخرى، غير أن الجدول الزمني محدد مسبقا.",
          "أما في التكوين الداخلي، فالدورة مخصصة لفرقك، في مقراتك أو في قسم افتراضي مباشر. وتصبح مفيدة ابتداء من مجموعة صغيرة: يتكيف الجدول الزمني مع إكراهاتك، ويمكن أن ترتبط الأمثلة بسياقك، ويكون النقاش أكثر حرية لأنه يمكن الحديث عن نظام المعلومات الخاص بالمقاولة. وبالنسبة للمواضيع الحساسة، تكون هذه الصيغة مفضلة في الغالب.",
        ],
        list: [
          "مشارك أو اثنان: تكوين مشترك بين المقاولات.",
          "مجموعة من عدة أشخاص على الشهادة نفسها: تكوين داخلي أو تسجيل جماعي في دورة مشتركة.",
          "فرق موزعة على عدة مدن مغربية: قسم افتراضي مباشر.",
          "تحسيس جميع المستخدمين: حصص قصيرة ومتكررة داخليا بدل حدث واحد.",
        ],
      },
      {
        heading: "ما الميزانية التي ينبغي توقعها وكيف يُقاس العائد على الاستثمار؟",
        paragraphs: [
          "تتوقف الميزانية على عدد المتعاونين والشهادات المستهدفة والصيغة المعتمدة. فكّر بمنطق التكلفة الإجمالية: التكوين والامتحان والوقت المقضي خارج الإنتاج ورسوم الحفاظ على الشهادات إن وُجدت ووقت المراجعة. ويتيح نهج تدريجي يعطي الأولوية للأدوار الأكثر عرضة توزيع الجهد على عدة سنوات مالية.",
          "نادرا ما يُقاس العائد على تكوين الأمن بالدرهم بدقة، لأن الهدف الأساسي هو تجنب الحوادث. ومع ذلك تبقى مؤشرات نوعية وعملياتية معبّرة:",
        ],
        list: [
          "نسبة النقر خلال حملات محاكاة التصيد الاحتيالي، قبل التحسيس وبعده.",
          "مدة رصد الحوادث ومعالجتها من طرف الفريق المعلوماتي أو مركز SOC.",
          "عدد حالات عدم المطابقة المسجلة خلال عمليات التدقيق الداخلي أو الخارجي.",
          "القدرة على الإجابة عن استبيانات الأمن الخاصة بالزبناء وعن متطلبات طلبات العروض.",
          "تقليص الاعتماد على المزودين في المهام الاعتيادية، والحفاظ على الكفاءات المكوَّنة.",
        ],
      },
      {
        heading: "ما آليات التمويل المتاحة في المغرب؟",
        paragraphs: [
          "يمكن للمقاولات المغربية الخاضعة لرسم التكوين المهني أن تستفيد، وفق شروط معينة، من استرجاع جزئي لبعض أعمال التكوين في إطار العقود الخاصة للتكوين (CSF) المدبرة بتنسيق مع OFPPT. وتتغير قواعد الأهلية والسقوف والمساطر (خاصة آجال إيداع الملفات والتخطيط المسبق للأعمال): لذا استفسر مباشرة لدى الجهات المختصة أو لدى جامعتك المهنية قبل الالتزام بالنفقة، وأدرج هذه النقطة منذ تصميم مخطط التكوين.",
          "وإلى جانب الآليات العمومية، فكّر في الروافع الداخلية: ميزانية التكوين السنوية، وأسعار المجموعات، وجمع عدة مصالح في الدورة نفسها، وتوزيع الشهادات على مدار السنة.",
        ],
      },
      {
        heading: "كيف تبني مخططا سنويا للتكوين في الأمن السيبراني؟",
        paragraphs: [
          "يجنّبك المخطط السنوي تكوينات تُقرر على عجل بعد وقوع حادث. فهو يربط كل عمل تكويني بخطر أو متطلب محدد، ويسهّل مساطر التمويل.",
        ],
        list: [
          "التشخيص: رسم خريطة الأدوار والمخاطر ذات الأولوية والفجوات في الكفاءات (التدقيق، الحوادث، متطلبات الزبناء، القانون 05-20).",
          "تحديد الأولويات: البدء بالوظائف الأكثر عرضة أو الأكثر حساسية بالنسبة للامتثال.",
          "الجدولة: توزيع الشهادات على السنة مع مراعاة فترات الذروة، وحجز الدورات مبكرا.",
          "التحسيس المستمر: برمجة تذكيرات منتظمة لجميع المستخدمين بدل حصة واحدة.",
          "التتبع: تحديد المؤشرات منذ البداية وإجراء حصيلة في نهاية السنة لتعديل المخطط الموالي.",
        ],
      },
      {
        heading: "كوّن فرقك مع GATech",
        paragraphs: [
          "ترافق GATech المقاولات المغربية بتكوينات إشهادية تشمل قسيمة الامتحان الرسمية، في دورات مشتركة بالدار البيضاء أو الرباط، أو عن بعد في قسم افتراضي مباشر، أو داخل مقراتكم في أي مكان بالمغرب. وبالنسبة لمخططات التكوين، يمنح سعر المجموعات خصما بنسبة 15% ابتداء من 3 مشاركين من نفس الشركة في نفس الدورة، ويمنح التسجيل المبكر خصما بنسبة 10% عند الأداء قبل 4 أسابيع على الأقل من بداية الدورة. والخصومات غير قابلة للجمع.",
          "وبالنسبة للمتعاونين الذين يموّلون مسارهم بأنفسهم، يبقى الأداء على 3 دفعات بدون فوائد وخصم 15% للطلبة والخريجين الجدد متاحين. تواصلوا معنا لإعداد عرض سعر يتماشى مع مخطط التكوين السنوي لمقاولتكم.",
        ],
      },
    ],
    en: [
      {
        heading: "Why train your teams in cybersecurity?",
        paragraphs: [
          "Because technology alone is not enough. A well-configured firewall does not stop an employee from typing their password into a fake login page, or an administrator from leaving a service exposed out of unawareness. A large share of security incidents involve, at some point, a human error, a lapse in vigilance or a missing skill. Training your teams shrinks that human attack surface and makes the tools you have already bought genuinely effective.",
          "In Morocco, three more factors come into play. First, Law 05-20 on cybersecurity and the DGSSI frameworks, including the DNSSI, require the entities concerned (public administrations, public institutions, critical infrastructure, certain operators) to implement security measures that depend on in-house skills, and these requirements often flow down to their suppliers. Second, clients, especially European ones for offshoring and service companies, increasingly ask for assurances: security policies, trained staff, sometimes ISO 27001 certification. Finally, many tenders reward or require certified profiles on the project team.",
        ],
      },
      {
        heading: "How do you assess training needs by role?",
        paragraphs: [
          "The first mistake is sending everyone on the same course. Needs vary widely by role. Start with a simple map: who does what in your information system, which risks are priorities, and which skills are missing today. An audit, a recent incident or a client requirement is often a good starting point.",
        ],
        list: [
          "IT team (systems, network, support): hardening, patch and access management, network security, spotting early signs of an incident.",
          "SOC and security analysts: alert analysis, threat hunting, vulnerability management, incident response.",
          "Developers: secure development, the main web vulnerabilities (injection, authentication, access control), code review and security testing.",
          "Management, CISO and compliance: governance, risk analysis, security policy, compliance with Law 05-20 and ISO 27001, crisis management.",
          "All staff: awareness of phishing, passwords, social engineering, data protection and the right reflexes when an incident occurs.",
        ],
      },
      {
        heading: "Which certifications fit each profile?",
        paragraphs: [
          "Recognised certifications offer two benefits: they structure learning around a proven framework, and they provide evidence you can show clients, auditors and public buyers. Here are the most common matches, with our public prices (exam voucher included).",
        ],
        list: [
          "System and network administrators: EC-Council CND v3 (5 days, from 15,900 MAD), focused on network defence, or CompTIA Security+ for a general foundation.",
          "SOC analysts: CompTIA CySA+ (5 days, from 12,900 MAD), focused on detection, analysis and incident response.",
          "Offensive teams, technical auditors and anyone who needs to understand the attacker: CEH v13 (5 days, from 21,900 MAD).",
          "CISOs, compliance officers and ISMS project leads: ISO 27001 Lead Implementer (5 days, from 17,900 MAD), to implement an information security management system.",
          "Experienced security managers: ISACA CISM (4 days, from 19,900 MAD), centred on governance, risk and running a security programme.",
          "Developers and non-technical staff: targeted courses (secure development, awareness) rather than a heavy certification.",
        ],
      },
      {
        heading: "In-house or public sessions: which format should you choose?",
        paragraphs: [
          "In a public (inter-company) session, your staff join a scheduled class with participants from other organisations. It suits one or two people and lets them exchange with peers from other sectors. The dates, however, are set in advance.",
          "In an in-house (intra-company) session, the class is reserved for your teams, on your premises or live online. It becomes worthwhile from a small group upwards: the schedule fits your constraints, examples can reflect your context and discussion is freer, since people can talk about their own information system. For sensitive topics, it is often the preferred format.",
        ],
        list: [
          "1 to 2 participants: public session.",
          "A group of several people on the same certification: in-house session or a group booking on a public session.",
          "Teams spread across several Moroccan cities: live virtual classroom.",
          "Awareness for all staff: short, repeated in-house sessions rather than a one-off event.",
        ],
      },
      {
        heading: "What budget should you plan and how do you measure ROI?",
        paragraphs: [
          "The budget depends on headcount, target certifications and format. Think in terms of total cost: training, exam, time away from production, any certification maintenance fees and revision time. A phased approach that prioritises the most exposed roles spreads the effort over several financial years.",
          "The return on security training is rarely measurable in exact dirhams, since the main goal is to avoid incidents. Qualitative and operational indicators are still telling:",
        ],
        list: [
          "Click rate in phishing simulation campaigns, before and after awareness training.",
          "Time taken by the IT team or SOC to detect and handle incidents.",
          "Number of non-conformities found in internal or external audits.",
          "Ability to answer client security questionnaires and tender requirements.",
          "Less reliance on suppliers for routine tasks, and better retention of trained talent.",
        ],
      },
      {
        heading: "What funding schemes exist in Morocco?",
        paragraphs: [
          "Moroccan companies that pay the vocational training tax may, under certain conditions, obtain partial reimbursement of some training actions through the special training contracts (contrats spéciaux de formation, CSF) managed with OFPPT. Eligibility rules, caps and procedures (including filing deadlines and advance planning of the actions) change over time: check directly with the relevant bodies or your professional federation before committing the spend, and factor this in from the moment you design your training plan.",
          "Beyond public schemes, consider internal levers: the annual training budget, group rates, combining several departments in one session and spreading certifications across the year.",
        ],
      },
      {
        heading: "How do you build a yearly cybersecurity training plan?",
        paragraphs: [
          "A yearly plan avoids training decided in a rush after an incident. It links each action to an identified risk or requirement and makes funding applications easier.",
        ],
        list: [
          "Assessment: map roles, priority risks and skills gaps (audits, incidents, client requirements, Law 05-20).",
          "Prioritisation: start with the most exposed functions or those most critical for compliance.",
          "Schedule: spread certifications over the year around peak business periods, and book sessions early.",
          "Ongoing awareness: plan regular refreshers for all staff rather than a single session.",
          "Follow-up: define indicators from the outset and review at year end to adjust the next plan.",
        ],
      },
      {
        heading: "Train your teams with GATech",
        paragraphs: [
          "GATech supports Moroccan companies with certification courses that include the official exam voucher, as public sessions in Casablanca or Rabat, live online, or in-house on your premises anywhere in Morocco. For your training plans, the group rate gives 15% off from 3 participants from the same company in the same session, and early registration gives 10% off when payment is made at least 4 weeks before the session starts. Discounts cannot be combined.",
          "For employees who fund their own path, 3 interest-free instalments and 15% off for students and recent graduates remain available. Contact us for a quote aligned with your yearly training plan.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Quelles équipes former en priorité à la cybersécurité ?",
        a: "Commencez par les fonctions les plus exposées ou les plus critiques : l'équipe informatique qui administre les systèmes, le SOC s'il existe, et les responsables de la conformité. Prévoyez en parallèle une sensibilisation de l'ensemble du personnel, car l'hameçonnage vise tout le monde.",
      },
      {
        q: "La loi 05-20 oblige-t-elle les entreprises à former leur personnel ?",
        a: "La loi 05-20 et les référentiels de la DGSSI imposent des mesures de sécurité aux entités concernées (administrations, établissements publics, infrastructures d'importance vitale, certains opérateurs). Ces mesures supposent des compétences et une sensibilisation du personnel. Vérifiez précisément les obligations applicables à votre organisation et à vos clients.",
      },
      {
        q: "À partir de combien de participants une formation intra-entreprise est-elle intéressante ?",
        a: "Dès un petit groupe de collaborateurs visant la même certification, l'intra-entreprise devient pertinente : calendrier adapté, exemples tirés de votre contexte et échanges confidentiels. Pour une ou deux personnes, une session inter-entreprise reste généralement plus simple.",
      },
      {
        q: "Une formation cybersécurité peut-elle être financée via les CSF de l'OFPPT ?",
        a: "Les entreprises assujetties à la taxe de formation professionnelle peuvent, sous conditions, prétendre à un remboursement partiel de certaines actions via les contrats spéciaux de formation. L'éligibilité et les démarches dépendent des règles en vigueur : renseignez-vous auprès des organismes compétents avant d'engager la formation.",
      },
      {
        q: "Quelle certification pour un RSSI ou un responsable conformité ?",
        a: "ISO 27001 Lead Implementer (à partir de 17 900 MAD) convient pour piloter la mise en place d'un SMSI. Pour un manager sécurité expérimenté, le CISM (à partir de 19 900 MAD) couvre la gouvernance, les risques et la gestion d'un programme de sécurité.",
      },
    ],
    ar: [
      {
        q: "ما الفرق التي ينبغي تكوينها في الأمن السيبراني أولا؟",
        a: "ابدأ بالوظائف الأكثر عرضة أو الأكثر حساسية: الفريق المعلوماتي الذي يدير الأنظمة، ومركز SOC إن وُجد، والمسؤولين عن الامتثال. وبرمج بالتوازي تحسيسا لجميع المستخدمين، لأن التصيد الاحتيالي يستهدف الجميع.",
      },
      {
        q: "هل يُلزم القانون 05-20 المقاولات بتكوين مستخدميها؟",
        a: "يفرض القانون 05-20 ومرجعيات DGSSI تدابير أمنية على الهيئات المعنية (الإدارات والمؤسسات العمومية والبنيات التحتية ذات الأهمية الحيوية وبعض المتعهدين). وتتطلب هذه التدابير كفاءات وتحسيسا للمستخدمين. تحقق بدقة من الالتزامات المطبقة على مؤسستك وعلى زبنائك.",
      },
      {
        q: "ابتداء من كم مشاركا يصبح التكوين الداخلي مفيدا؟",
        a: "ابتداء من مجموعة صغيرة من المتعاونين يستهدفون الشهادة نفسها، يصبح التكوين الداخلي مناسبا: جدول زمني ملائم، وأمثلة مستمدة من سياقك، ونقاش سري. أما بالنسبة لشخص أو شخصين، فتبقى الدورة المشتركة بين المقاولات أبسط عموما.",
      },
      {
        q: "هل يمكن تمويل تكوين في الأمن السيبراني عبر العقود الخاصة للتكوين لدى OFPPT؟",
        a: "يمكن للمقاولات الخاضعة لرسم التكوين المهني أن تطالب، وفق شروط معينة، باسترجاع جزئي لبعض أعمال التكوين عبر العقود الخاصة للتكوين. وتتوقف الأهلية والمساطر على القواعد الجاري بها العمل: استفسر لدى الجهات المختصة قبل الالتزام بالتكوين.",
      },
      {
        q: "ما الشهادة المناسبة لمسؤول أمن نظم المعلومات أو مسؤول الامتثال؟",
        a: "تناسب ISO 27001 Lead Implementer (ابتداء من 17900 درهم) قيادة إرساء نظام SMSI. أما بالنسبة لمدير أمن ذي خبرة، فتغطي CISM (ابتداء من 19900 درهم) الحكامة والمخاطر وتدبير برنامج الأمن.",
      },
    ],
    en: [
      {
        q: "Which teams should be trained in cybersecurity first?",
        a: "Start with the most exposed or critical functions: the IT team that runs your systems, the SOC if you have one, and compliance officers. In parallel, plan awareness training for all staff, since phishing targets everyone.",
      },
      {
        q: "Does Law 05-20 require companies to train their staff?",
        a: "Law 05-20 and the DGSSI frameworks require security measures from the entities concerned (public administrations, public institutions, critical infrastructure, certain operators). Those measures depend on skills and staff awareness. Check precisely which obligations apply to your organisation and to your clients.",
      },
      {
        q: "From how many participants does an in-house session make sense?",
        a: "From a small group of employees targeting the same certification, in-house training becomes worthwhile: a tailored schedule, examples drawn from your context and confidential discussion. For one or two people, a public session is usually simpler.",
      },
      {
        q: "Can cybersecurity training be funded through OFPPT special training contracts (CSF)?",
        a: "Companies that pay the vocational training tax may, under certain conditions, claim partial reimbursement of some training actions through the special training contracts. Eligibility and procedures depend on the rules in force: check with the relevant bodies before committing to the training.",
      },
      {
        q: "Which certification suits a CISO or compliance officer?",
        a: "ISO 27001 Lead Implementer (from 17,900 MAD) suits leading the implementation of an ISMS. For an experienced security manager, CISM (from 19,900 MAD) covers governance, risk and running a security programme.",
      },
    ],
  },
};

export default guide;
