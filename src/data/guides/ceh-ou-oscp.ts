import type { Guide } from "../types";

const guide: Guide = {
  slug: "ceh-ou-oscp",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 7,
  relatedCerts: ["ceh-v13", "oscp", "comptia-pentest-plus"],
  title: {
    fr: "CEH v13 ou OSCP+ : quelle certification pentest choisir ?",
    ar: "CEH v13 أم OSCP+: أي شهادة في اختبار الاختراق تختار؟",
    en: "CEH v13 or OSCP+: Which Pentest Certification Should You Choose?",
  },
  seoTitle: {
    fr: "CEH ou OSCP+ : quelle certification pentest choisir ?",
    ar: "CEH أم OSCP+: أي شهادة اختبار اختراق تختار؟",
    en: "CEH vs OSCP+: Which Pentest Certification to Choose?",
  },
  seoDescription: {
    fr: "CEH v13 ou OSCP+ ? Format d'examen, difficulté, prérequis, reconnaissance au Maroc et prix en MAD comparés. Découvrez par laquelle commencer.",
    ar: "CEH v13 أم OSCP+؟ مقارنة شكل الامتحان والصعوبة والمتطلبات والاعتراف لدى المشغلين في المغرب والسعر بالدرهم. اكتشف بأي شهادة تبدأ مسارك المهني الآن.",
    en: "CEH v13 or OSCP+? We compare exam format, difficulty, prerequisites, recognition in Morocco and price in MAD. Find out which one to start with today.",
  },
  excerpt: {
    fr: "QCM de 4 heures d'un côté, examen pratique de près de 24 heures de l'autre : CEH v13 et OSCP+ ne valident pas la même chose. Voici une comparaison honnête pour choisir celle qui correspond à votre niveau et à vos objectifs.",
    ar: "امتحان متعدد الاختيارات لمدة 4 ساعات من جهة، وامتحان تطبيقي لما يقارب 24 ساعة من جهة أخرى: لا تقيس CEH v13 وOSCP+ الشيء نفسه. إليك مقارنة موضوعية لاختيار الشهادة التي تناسب مستواك وأهدافك.",
    en: "A 4-hour multiple-choice exam on one side, a near-24-hour practical exam on the other: CEH v13 and OSCP+ do not validate the same thing. Here is an honest comparison to help you pick the one that fits your level and goals.",
  },
  sections: {
    fr: [
      {
        heading: "CEH v13 et OSCP+ : deux certifications pentest, deux philosophies",
        paragraphs: [
          "Le CEH (Certified Ethical Hacker) d'EC-Council et l'OSCP+ d'OffSec sont les deux noms qui reviennent le plus souvent quand on parle de certification en test d'intrusion. On les oppose volontiers, comme s'il fallait choisir un camp. En réalité, elles ne mesurent pas la même chose et ne s'adressent pas exactement au même moment d'une carrière.",
          "Le CEH v13, dit « CEH AI », valide une connaissance large de la méthodologie du hacking éthique : reconnaissance, scan, énumération, exploitation, maintien d'accès, attaques web, sans fil, cloud, IoT, et désormais l'usage de l'IA dans l'attaque comme dans la défense. Son examen principal (312-50) vérifie que vous connaissez ces techniques, ces outils et le vocabulaire associé.",
          "L'OSCP+, obtenu après le cours PEN-200, valide autre chose : votre capacité à compromettre réellement des machines, seul, sous pression, puis à le prouver dans un rapport professionnel. On pourrait résumer ainsi : le CEH démontre que vous savez de quoi est fait un pentest, l'OSCP+ démontre que vous savez en mener un.",
        ],
      },
      {
        heading: "Format d'examen : 125 QCM contre près de 24 heures de pratique",
        paragraphs: [
          "C'est la différence la plus visible. L'examen CEH 312-50 comporte 125 questions à choix multiples en 4 heures, avec un seuil de réussite compris entre 60 % et 85 % selon la forme de l'examen qui vous est attribuée. Il se passe en ligne sous surveillance à distance ou dans un centre agréé. Les questions portent sur des scénarios, des commandes, des résultats d'outils à interpréter : il ne suffit pas d'avoir appris des définitions, mais vous n'avez rien à exploiter vous-même.",
          "EC-Council propose aussi un CEH Practical optionnel : 6 heures, 20 challenges sur un environnement réel, avec un seuil de 70 %. Il comble en partie la critique « trop théorique » adressée au CEH, et ceux qui réussissent les deux épreuves peuvent prétendre au titre CEH Master.",
          "L'examen OSCP+ est entièrement pratique : 23 h 45 min pour compromettre un ensemble Active Directory et plusieurs machines autonomes, sous surveillance par webcam et partage d'écran, puis 24 heures supplémentaires pour remettre un rapport de pentest. Il faut 70 points sur 100. Aucune question à cocher : chaque point se gagne en obtenant un accès et en le documentant avec des preuves. La gestion du temps, de la fatigue et du stress fait partie de l'épreuve.",
        ],
      },
      {
        heading: "Difficulté et prérequis : quel niveau faut-il pour chacune ?",
        paragraphs: [
          "Le CEH v13 est une certification de niveau intermédiaire. Il demande de bonnes bases en réseaux TCP/IP, la pratique de Windows et de la ligne de commande Linux, et des notions de sécurité ; EC-Council recommande deux ans d'expérience, mais suivre une formation officielle dispense de la procédure d'éligibilité. Un administrateur système ou réseau motivé, ou un jeune diplômé avec un bon socle technique, peut le préparer sérieusement.",
          "L'OSCP+ est une certification avancée. Elle suppose une maîtrise solide de Linux, de bonnes notions de Windows et d'Active Directory, une aisance réseau (DNS, HTTP, SMB…) et la capacité à lire et adapter des scripts Bash, Python ou PowerShell. Sa difficulté ne tient pas tant à la complexité de chaque technique qu'à l'autonomie exigée : face à une machine, personne ne vous dit quelle piste est la bonne. Beaucoup de candidats ont besoin de plus d'une tentative, ce qui n'a rien d'anormal.",
        ],
      },
      {
        heading: "CEH ou OSCP+ : le comparatif critère par critère",
        paragraphs: [
          "Pour y voir clair, voici les deux certifications côte à côte, avec les tarifs publics de nos formations au Maroc (voucher ou tentative d'examen inclus).",
        ],
        list: [
          "Éditeur : CEH v13 – EC-Council ; OSCP+ – OffSec (cours PEN-200).",
          "Niveau : CEH v13 – intermédiaire ; OSCP+ – avancé.",
          "Format d'examen : CEH v13 – 125 QCM en 4 heures (CEH Practical optionnel : 20 challenges en 6 heures) ; OSCP+ – 23 h 45 min de pratique surveillée + 24 heures pour le rapport.",
          "Seuil de réussite : CEH v13 – 60 % à 85 % selon la forme de l'examen ; OSCP+ – 70 points sur 100.",
          "Ce qui est validé : CEH v13 – connaissance étendue des techniques, outils et méthodologie ; OSCP+ – capacité démontrée à exploiter et à rédiger un rapport.",
          "Validité : CEH v13 – 3 ans, renouvelable via 120 crédits ECE et la cotisation annuelle ; OSCP+ – 3 ans, l'OSCP de base restant valable à vie.",
          "Durée de formation : CEH v13 – 5 jours (40 heures) ; OSCP+ – 10 jours de coaching (80 heures) avec accès aux labs PEN-200.",
          "Prix public au Maroc : CEH v13 – à partir de 24 900 MAD ; OSCP+ – à partir de 29 900 MAD.",
          "Profil idéal : CEH v13 – administrateurs, analystes SOC, auditeurs, consultants qui veulent une base offensive reconnue ; OSCP+ – futurs pentesteurs et membres de red team.",
        ],
      },
      {
        heading: "Quelle reconnaissance auprès des recruteurs au Maroc et à l'international ?",
        paragraphs: [
          "Le CEH est l'une des certifications les plus citées dans les offres d'emploi en cybersécurité offensive, et il figure dans plusieurs référentiels officiels de postes, comme le cadre DoD 8140 du département de la Défense américain. Concrètement, cela compte au moment du filtrage RH : quand un recruteur ou un logiciel de tri cherche le mot-clé « CEH », votre candidature passe. Au Maroc, banques, assureurs, opérateurs télécoms, intégrateurs et administrations soumises à la loi 05-20 le connaissent bien, y compris pour des postes qui ne sont pas purement offensifs.",
          "L'OSCP+ jouit d'une autre forme de crédibilité : celle des équipes techniques. Un responsable pentest sait qu'un titulaire a passé près de 24 heures à compromettre des machines et a produit un rapport accepté. Les cabinets d'audit, les équipes red team et les prestataires qui réalisent des tests d'intrusion pour des clients européens depuis Casablanca ou Rabat le mentionnent régulièrement. En revanche, il est parfois moins connu des services RH généralistes et des grilles d'achat publiques.",
          "Les deux sont donc reconnues, mais pas par les mêmes personnes ni pour les mêmes raisons. C'est précisément ce qui rend la combinaison intéressante.",
        ],
      },
      {
        heading: "Budget et temps de préparation : à quoi s'attendre ?",
        paragraphs: [
          "Côté budget, nos formations démarrent à 24 900 MAD pour le CEH v13 (5 jours, labs officiels, support EC-Council et voucher 312-50 inclus) et à 29 900 MAD pour l'OSCP+ (80 heures de coaching, accès aux labs PEN-200 et une tentative d'examen). Pour l'OSCP+, prévoyez qu'une tentative supplémentaire ou une prolongation des labs puisse représenter un coût additionnel.",
          "Côté temps, le CEH se prépare généralement en quelques semaines de révision après la formation pour un profil ayant déjà les bases. L'OSCP+ demande davantage : au-delà du coaching, la plupart des candidats ont besoin de nombreuses heures de pratique personnelle sur les labs, souvent étalées sur plusieurs mois selon leur point de départ. Il vaut mieux prévoir ce temps dans son agenda que de compter sur le seul enthousiasme du début.",
        ],
      },
      {
        heading: "Par laquelle commencer, et pourquoi beaucoup passent les deux ?",
        paragraphs: [
          "Si vous venez de l'administration système, du réseau ou du SOC et que vous découvrez l'offensif, le CEH v13 est en général le meilleur premier pas : il structure vos connaissances, couvre un périmètre large et vous donne un titre immédiatement lisible sur un CV. Si vous êtes déjà à l'aise sur Linux, que vous avez pratiqué des plateformes de type CTF et que votre objectif est clairement le métier de pentesteur, vous pouvez viser directement l'OSCP+. CompTIA PenTest+ (à partir de 12 900 MAD) est une alternative intermédiaire intéressante, avec un accent sur le cadrage et le reporting.",
          "Beaucoup de professionnels finissent par détenir les deux, et ce n'est pas une collection de badges : le CEH ouvre les portes du filtrage RH et apporte une vision méthodologique complète, l'OSCP+ prouve la compétence pratique aux équipes techniques. L'ordre CEH puis OSCP+ est le plus fréquent, car le premier prépare le terrain du second.",
          "Chez GATech, nous proposons les deux parcours à Casablanca, à Rabat ou en classe virtuelle, avec un formateur francophone et l'examen inclus. Si vous hésitez, un court échange avec nos conseillers permet d'évaluer votre niveau et de choisir l'ordre le plus adapté.",
        ],
      },
    ],
    ar: [
      {
        heading: "CEH v13 وOSCP+: شهادتان في اختبار الاختراق بفلسفتين مختلفتين",
        paragraphs: [
          "تعد شهادة CEH (Certified Ethical Hacker) من EC-Council وشهادة OSCP+ من OffSec الاسمين الأكثر تداولا عند الحديث عن شهادات اختبار الاختراق. وكثيرا ما يتم وضعهما في مواجهة بعضهما وكأن على المترشح أن يختار معسكرا. لكن الحقيقة أنهما لا تقيسان الشيء نفسه، ولا تستهدفان المرحلة نفسها من المسار المهني.",
          "تثبت CEH v13، المعروفة باسم «CEH AI»، معرفة واسعة بمنهجية الاختراق الأخلاقي: الاستطلاع والمسح والتعداد والاستغلال والحفاظ على الولوج، وهجمات الويب والشبكات اللاسلكية والسحابة وإنترنت الأشياء، إضافة الآن إلى توظيف الذكاء الاصطناعي في الهجوم والدفاع. ويتحقق امتحانها الرئيسي (312-50) من إلمامك بهذه التقنيات والأدوات والمصطلحات المرتبطة بها.",
          "أما OSCP+، التي يتم الحصول عليها بعد دورة PEN-200، فتثبت شيئا آخر: قدرتك الفعلية على اختراق الأجهزة بمفردك وتحت الضغط، ثم إثبات ذلك في تقرير احترافي. باختصار: تُظهر CEH أنك تعرف مكونات اختبار الاختراق، بينما تُظهر OSCP+ أنك قادر على إنجازه.",
        ],
      },
      {
        heading: "شكل الامتحان: 125 سؤالا متعدد الاختيارات مقابل قرابة 24 ساعة من التطبيق",
        paragraphs: [
          "هذا هو الفرق الأوضح. يتضمن امتحان CEH 312-50 ما مجموعه 125 سؤالا متعدد الاختيارات في 4 ساعات، وتتراوح عتبة النجاح بين 60 % و85 % حسب نسخة الامتحان. ويُجرى عن بعد تحت المراقبة أو في مركز معتمد. تعتمد الأسئلة على سيناريوهات وأوامر ومخرجات أدوات يجب تأويلها، فلا يكفي حفظ التعاريف، لكنك لا تقوم بأي استغلال بنفسك.",
          "تقترح EC-Council أيضا امتحان CEH Practical الاختياري: 6 ساعات و20 تحديا في بيئة حقيقية، بعتبة نجاح 70 %. وهو يجيب جزئيا عن الانتقاد الموجه لـ CEH بكونها «نظرية أكثر من اللازم»، ويمكن لمن ينجح في الامتحانين الحصول على لقب CEH Master.",
          "أما امتحان OSCP+ فتطبيقي بالكامل: 23 ساعة و45 دقيقة لاختراق بيئة Active Directory وعدة أجهزة مستقلة، تحت المراقبة عبر الكاميرا ومشاركة الشاشة، ثم 24 ساعة إضافية لتسليم تقرير اختبار الاختراق. ويشترط الحصول على 70 نقطة من أصل 100. لا توجد خانات للتأشير: كل نقطة تُكتسب بالحصول على ولوج وتوثيقه بالأدلة. ويُعد تدبير الوقت والتعب والضغط جزءا من الامتحان.",
        ],
      },
      {
        heading: "الصعوبة والمتطلبات المسبقة: ما المستوى المطلوب لكل شهادة؟",
        paragraphs: [
          "تُصنف CEH v13 في المستوى المتوسط. وتتطلب أساسا جيدا في شبكات TCP/IP، والتمكن من Windows ومن سطر أوامر Linux، ومبادئ في أمن المعلوميات. وتوصي EC-Council بخبرة سنتين، غير أن متابعة تكوين رسمي تُعفي من مسطرة الأهلية. ويمكن لمتصرف أنظمة أو شبكات متحفز، أو لخريج حديث يملك أساسا تقنيا متينا، أن يستعد لها بجدية.",
          "أما OSCP+ فشهادة متقدمة. فهي تفترض تمكنا متينا من Linux، ومعرفة جيدة بـ Windows وActive Directory، وسهولة في التعامل مع الشبكات (DNS وHTTP وSMB وغيرها)، والقدرة على قراءة سكريبتات Bash أو Python أو PowerShell وتعديلها. ولا تكمن صعوبتها في تعقيد كل تقنية على حدة بقدر ما تكمن في الاستقلالية المطلوبة: أمام كل جهاز لا أحد يخبرك بالمسار الصحيح. ويحتاج كثير من المترشحين إلى أكثر من محاولة، وهذا أمر عادي تماما.",
        ],
      },
      {
        heading: "CEH أم OSCP+: مقارنة معيارا بمعيار",
        paragraphs: [
          "لتتضح الصورة، إليك الشهادتين جنبا إلى جنب، مع الأسعار العمومية لتكويناتنا في المغرب (قسيمة الامتحان أو محاولته مشمولة).",
        ],
        list: [
          "الجهة المانحة: CEH v13 – EC-Council؛ OSCP+ – OffSec (دورة PEN-200).",
          "المستوى: CEH v13 – متوسط؛ OSCP+ – متقدم.",
          "شكل الامتحان: CEH v13 – 125 سؤالا متعدد الاختيارات في 4 ساعات (CEH Practical اختياري: 20 تحديا في 6 ساعات)؛ OSCP+ – 23 ساعة و45 دقيقة من التطبيق تحت المراقبة + 24 ساعة للتقرير.",
          "عتبة النجاح: CEH v13 – من 60 % إلى 85 % حسب نسخة الامتحان؛ OSCP+ – 70 نقطة من أصل 100.",
          "ما تثبته الشهادة: CEH v13 – معرفة واسعة بالتقنيات والأدوات والمنهجية؛ OSCP+ – قدرة مُثبتة على الاستغلال وتحرير التقرير.",
          "الصلاحية: CEH v13 – 3 سنوات، قابلة للتجديد عبر 120 رصيد ECE والرسوم السنوية؛ OSCP+ – 3 سنوات، مع بقاء شهادة OSCP الأساسية صالحة مدى الحياة.",
          "مدة التكوين: CEH v13 – 5 أيام (40 ساعة)؛ OSCP+ – 10 أيام من المواكبة (80 ساعة) مع الولوج إلى مختبرات PEN-200.",
          "السعر العمومي في المغرب: CEH v13 – ابتداء من 24900 درهم؛ OSCP+ – ابتداء من 29900 درهم.",
          "الملف المثالي: CEH v13 – متصرفو الأنظمة ومحللو SOC والمدققون والمستشارون الباحثون عن أساس هجومي معترف به؛ OSCP+ – مختبرو الاختراق المستقبليون وأعضاء فرق red team.",
        ],
      },
      {
        heading: "ما مدى الاعتراف بهما لدى المشغلين في المغرب وعلى الصعيد الدولي؟",
        paragraphs: [
          "تُعد CEH من أكثر الشهادات ذكرا في عروض الشغل الخاصة بالأمن الهجومي، كما ترد في عدد من الأطر الرسمية للوظائف، مثل إطار DoD 8140 التابع لوزارة الدفاع الأمريكية. وعمليا، يكتسي ذلك أهمية في مرحلة الفرز الأولي لدى الموارد البشرية: عندما يبحث المكلف بالتوظيف أو برنامج الفرز عن كلمة «CEH» تمر ترشيحك. وفي المغرب، تعرفها جيدا الأبناك وشركات التأمين ومتعهدو الاتصالات والمندمجون والإدارات الخاضعة للقانون 05-20، حتى بالنسبة لمناصب ليست هجومية بالكامل.",
          "أما OSCP+ فتحظى بنوع آخر من المصداقية: مصداقية الفرق التقنية. فمسؤول اختبار الاختراق يعلم أن حاملها قضى قرابة 24 ساعة في اختراق الأجهزة وقدّم تقريرا مقبولا. وتذكرها بانتظام مكاتب التدقيق وفرق red team والشركات التي تنجز اختبارات اختراق لفائدة زبناء أوروبيين انطلاقا من الدار البيضاء أو الرباط. في المقابل، قد تكون أقل شهرة لدى مصالح الموارد البشرية العامة وفي دفاتر التحملات العمومية.",
          "فالشهادتان معترف بهما إذن، لكن ليس من الأشخاص أنفسهم ولا للأسباب نفسها، وهذا بالضبط ما يجعل الجمع بينهما مفيدا.",
        ],
      },
      {
        heading: "الميزانية ومدة التحضير: ما الذي ينبغي توقعه؟",
        paragraphs: [
          "من حيث الميزانية، تبدأ تكويناتنا من 24900 درهم لـ CEH v13 (5 أيام، مختبرات رسمية، دعامة EC-Council وقسيمة امتحان 312-50) ومن 29900 درهم لـ OSCP+ (80 ساعة من المواكبة، الولوج إلى مختبرات PEN-200 ومحاولة امتحان واحدة). وبالنسبة لـ OSCP+، ضع في الحسبان أن محاولة إضافية أو تمديد الولوج إلى المختبرات قد يترتب عنهما تكلفة إضافية.",
          "من حيث الوقت، يتم التحضير لـ CEH عادة في بضعة أسابيع من المراجعة بعد التكوين بالنسبة لمن يملك الأساسيات. أما OSCP+ فتتطلب أكثر: فإلى جانب المواكبة، يحتاج معظم المترشحين إلى ساعات كثيرة من التمرين الشخصي على المختبرات، تمتد غالبا على عدة أشهر حسب مستوى الانطلاق. ومن الأفضل تخصيص هذا الوقت في جدولك بدل الاعتماد على حماس البداية وحده.",
        ],
      },
      {
        heading: "بأيهما تبدأ، ولماذا يجتاز كثيرون الشهادتين معا؟",
        paragraphs: [
          "إذا كنت قادما من إدارة الأنظمة أو الشبكات أو من مركز SOC وتكتشف المجال الهجومي، فإن CEH v13 تكون في الغالب أفضل خطوة أولى: فهي تنظم معارفك وتغطي نطاقا واسعا وتمنحك لقبا مقروءا فورا في السيرة الذاتية. أما إذا كنت متمكنا من Linux، وسبق لك التمرن على منصات من نوع CTF، وهدفك واضح هو مهنة مختبر الاختراق، فيمكنك التوجه مباشرة نحو OSCP+. وتمثل CompTIA PenTest+ (ابتداء من 12900 درهم) بديلا وسطا مهما يركز على تحديد النطاق وإعداد التقارير.",
          "ينتهي المطاف بكثير من المهنيين إلى الحصول على الشهادتين، وليس ذلك جمعا للشارات: فـ CEH تفتح أبواب الفرز لدى الموارد البشرية وتمنح رؤية منهجية شاملة، بينما تثبت OSCP+ الكفاءة العملية أمام الفرق التقنية. ويبقى ترتيب CEH ثم OSCP+ الأكثر شيوعا، لأن الأولى تمهد الطريق للثانية.",
          "في GATech نقترح المسارين معا في الدار البيضاء أو الرباط أو عن بعد في قسم افتراضي مباشر، مع مكوّن متمرس والامتحان مشمول. وإن كنت مترددا، فإن محادثة قصيرة مع مستشارينا تساعد على تقييم مستواك واختيار الترتيب الأنسب.",
        ],
      },
    ],
    en: [
      {
        heading: "CEH v13 and OSCP+: two pentest certifications, two philosophies",
        paragraphs: [
          "EC-Council's CEH (Certified Ethical Hacker) and OffSec's OSCP+ are the two names that come up most often in any discussion of penetration testing certifications. They are often pitted against each other as if you had to pick a side. In reality, they do not measure the same thing and they do not target exactly the same stage of a career.",
          "CEH v13, branded \"CEH AI\", validates broad knowledge of the ethical hacking methodology: reconnaissance, scanning, enumeration, exploitation, maintaining access, web, wireless, cloud and IoT attacks, and now the use of AI on both the attacking and defending side. Its main exam (312-50) checks that you know these techniques, tools and the related vocabulary.",
          "OSCP+, earned after the PEN-200 course, validates something else: your ability to actually compromise machines, on your own, under pressure, and then prove it in a professional report. Put simply, CEH shows you know what a pentest is made of; OSCP+ shows you can run one.",
        ],
      },
      {
        heading: "Exam format: 125 multiple-choice questions vs nearly 24 hours of hands-on work",
        paragraphs: [
          "This is the most visible difference. The CEH 312-50 exam has 125 multiple-choice questions in 4 hours, with a passing score between 60% and 85% depending on the exam form you receive. It is taken online with remote proctoring or at an approved test centre. Questions are scenario-based, with commands and tool output to interpret: memorising definitions is not enough, but you do not exploit anything yourself.",
          "EC-Council also offers an optional CEH Practical: 6 hours, 20 challenges on a live environment, with a 70% passing score. It partly answers the \"too theoretical\" criticism of CEH, and candidates who pass both exams can claim the CEH Master title.",
          "The OSCP+ exam is entirely practical: 23 hours 45 minutes to compromise an Active Directory set and several standalone machines, proctored via webcam and screen sharing, followed by another 24 hours to submit a pentest report. You need 70 out of 100 points. There are no boxes to tick: every point is earned by gaining access and documenting it with evidence. Managing time, fatigue and stress is part of the test.",
        ],
      },
      {
        heading: "Difficulty and prerequisites: what level do you need for each?",
        paragraphs: [
          "CEH v13 is an intermediate-level certification. It requires solid TCP/IP networking basics, hands-on Windows and Linux command-line experience, and some security knowledge; EC-Council recommends two years of experience, but attending official training waives the eligibility application. A motivated system or network administrator, or a graduate with a strong technical foundation, can prepare for it seriously.",
          "OSCP+ is an advanced certification. It assumes strong Linux skills, good Windows and Active Directory knowledge, networking fluency (DNS, HTTP, SMB and so on) and the ability to read and adapt Bash, Python or PowerShell scripts. Its difficulty lies less in the complexity of any single technique than in the autonomy it demands: when you face a machine, nobody tells you which lead is the right one. Many candidates need more than one attempt, which is nothing unusual.",
        ],
      },
      {
        heading: "CEH vs OSCP+: a criterion-by-criterion comparison",
        paragraphs: [
          "Here are the two certifications side by side, with the public prices of our training in Morocco (exam voucher or attempt included).",
        ],
        list: [
          "Vendor: CEH v13 – EC-Council; OSCP+ – OffSec (PEN-200 course).",
          "Level: CEH v13 – intermediate; OSCP+ – advanced.",
          "Exam format: CEH v13 – 125 multiple-choice questions in 4 hours (optional CEH Practical: 20 challenges in 6 hours); OSCP+ – 23 h 45 min of proctored hands-on work + 24 hours for the report.",
          "Passing score: CEH v13 – 60% to 85% depending on the exam form; OSCP+ – 70 out of 100 points.",
          "What it proves: CEH v13 – broad knowledge of techniques, tools and methodology; OSCP+ – demonstrated ability to exploit systems and write a report.",
          "Validity: CEH v13 – 3 years, renewable with 120 ECE credits and the annual fee; OSCP+ – 3 years, while the base OSCP remains valid for life.",
          "Training length: CEH v13 – 5 days (40 hours); OSCP+ – 10 days of coaching (80 hours) with PEN-200 lab access.",
          "Public price in Morocco: CEH v13 – from 24,900 MAD; OSCP+ – from 29,900 MAD.",
          "Ideal profile: CEH v13 – administrators, SOC analysts, auditors and consultants who want a recognised offensive foundation; OSCP+ – aspiring pentesters and red team members.",
        ],
      },
      {
        heading: "How do employers in Morocco and abroad view each one?",
        paragraphs: [
          "CEH is one of the most frequently cited certifications in offensive security job ads, and it appears in several official job frameworks, such as the US Department of Defense DoD 8140 framework. In practice, this matters at the HR screening stage: when a recruiter or an applicant tracking system searches for \"CEH\", your application gets through. In Morocco, banks, insurers, telecom operators, integrators and public bodies subject to Law 05-20 know it well, including for roles that are not purely offensive.",
          "OSCP+ enjoys a different kind of credibility: that of technical teams. A pentest lead knows that a holder spent nearly 24 hours compromising machines and produced an accepted report. Audit firms, red teams and providers running penetration tests for European clients from Casablanca or Rabat mention it regularly. On the other hand, it is sometimes less familiar to generalist HR departments and public procurement grids.",
          "Both are recognised, then, but not by the same people or for the same reasons. That is exactly what makes holding both worthwhile.",
        ],
      },
      {
        heading: "Budget and preparation time: what to expect",
        paragraphs: [
          "On budget, our training starts at 24,900 MAD for CEH v13 (5 days, official labs, EC-Council courseware and the 312-50 voucher included) and at 29,900 MAD for OSCP+ (80 hours of coaching, PEN-200 lab access and one exam attempt). For OSCP+, keep in mind that an extra attempt or a lab extension may come at an additional cost.",
          "On time, CEH usually takes a few weeks of revision after the course for someone who already has the basics. OSCP+ asks for more: beyond the coaching, most candidates need many hours of personal practice in the labs, often spread over several months depending on their starting point. It is better to block that time in your calendar than to rely on early enthusiasm alone.",
        ],
      },
      {
        heading: "Which one first, and why do so many people take both?",
        paragraphs: [
          "If you come from system or network administration or a SOC and are new to offensive security, CEH v13 is usually the best first step: it structures your knowledge, covers a wide scope and gives you a title that reads instantly on a CV. If you are already comfortable with Linux, have practised on CTF-style platforms and your goal is clearly to become a pentester, you can go straight for OSCP+. CompTIA PenTest+ (from 12,900 MAD) is a useful middle-ground alternative, with a focus on scoping and reporting.",
          "Many professionals end up holding both, and it is not badge collecting: CEH gets you through HR screening and provides a complete methodological view, while OSCP+ proves practical skill to technical teams. CEH followed by OSCP+ is the most common order, since the first lays the groundwork for the second.",
          "At GATech, we offer both tracks in Casablanca, Rabat or live online, with an experienced trainer and the exam included. If you are unsure, a short call with our advisers will help assess your level and choose the right order.",
        ],
      },
    ],
  },
  faqs: {
    fr: [
      {
        q: "Le CEH v13 est-il plus facile que l'OSCP+ ?",
        a: "Oui, en général. Le CEH v13 est une certification de niveau intermédiaire évaluée par 125 QCM en 4 heures, alors que l'OSCP+ est une certification avancée qui exige de compromettre réellement des machines pendant 23 h 45 min, puis de rédiger un rapport. Le CEH reste exigeant par l'étendue de son programme.",
      },
      {
        q: "Peut-on passer l'OSCP+ sans avoir le CEH ?",
        a: "Oui. Aucune certification n'est obligatoire pour s'inscrire au PEN-200 et à l'examen OSCP+. Il faut en revanche une bonne maîtrise de Linux, des réseaux, de Windows et d'Active Directory, ainsi que du scripting. Un Security+, un CEH ou une expérience équivalente est recommandé.",
      },
      {
        q: "Quelle certification est la plus demandée par les recruteurs au Maroc ?",
        a: "Le CEH apparaît plus souvent dans les offres d'emploi et les filtres RH, y compris pour des postes qui ne sont pas purement offensifs. L'OSCP+ est particulièrement valorisé par les cabinets de pentest, les équipes red team et les responsables techniques. Pour un poste de pentesteur, détenir les deux est un atout réel.",
      },
      {
        q: "Combien coûtent les formations CEH v13 et OSCP+ au Maroc ?",
        a: "Chez GATech, la formation CEH v13 démarre à 24 900 MAD (5 jours, voucher 312-50 inclus) et la préparation OSCP+ à 29 900 MAD (80 heures de coaching, accès aux labs PEN-200 et une tentative d'examen incluse).",
      },
      {
        q: "Le CEH Practical rend-il le CEH équivalent à l'OSCP+ ?",
        a: "Non, même s'il le rapproche de la pratique. Le CEH Practical consiste en 20 challenges en 6 heures, sans rapport de pentest à rédiger. L'OSCP+ demande près de 24 heures d'exploitation autonome sur un environnement incluant Active Directory, plus un rapport professionnel. Les deux épreuves restent complémentaires.",
      },
    ],
    ar: [
      {
        q: "هل CEH v13 أسهل من OSCP+؟",
        a: "نعم، بشكل عام. فـ CEH v13 شهادة من المستوى المتوسط يتم تقييمها عبر 125 سؤالا متعدد الاختيارات في 4 ساعات، بينما OSCP+ شهادة متقدمة تتطلب اختراق أجهزة فعليا خلال 23 ساعة و45 دقيقة ثم تحرير تقرير. ومع ذلك تبقى CEH متطلبة بسبب اتساع برنامجها.",
      },
      {
        q: "هل يمكن اجتياز OSCP+ دون الحصول على CEH؟",
        a: "نعم. لا تشترط أي شهادة للتسجيل في PEN-200 وامتحان OSCP+. لكن يلزم تمكن جيد من Linux والشبكات وWindows وActive Directory، إضافة إلى البرمجة النصية. ويُنصح بالحصول على Security+ أو CEH أو خبرة مماثلة.",
      },
      {
        q: "أي الشهادتين أكثر طلبا لدى المشغلين في المغرب؟",
        a: "تظهر CEH أكثر في عروض الشغل وفي معايير الفرز لدى الموارد البشرية، حتى بالنسبة لمناصب ليست هجومية بالكامل. أما OSCP+ فتحظى بتقدير خاص لدى مكاتب اختبار الاختراق وفرق red team والمسؤولين التقنيين. وبالنسبة لمنصب مختبر اختراق، يعد الجمع بينهما ميزة حقيقية.",
      },
      {
        q: "كم تكلف تكوينات CEH v13 وOSCP+ في المغرب؟",
        a: "لدى GATech يبدأ تكوين CEH v13 من 24900 درهم (5 أيام مع قسيمة امتحان 312-50)، ويبدأ التحضير لـ OSCP+ من 29900 درهم (80 ساعة من المواكبة، الولوج إلى مختبرات PEN-200 ومحاولة امتحان واحدة).",
      },
      {
        q: "هل يجعل CEH Practical شهادة CEH معادلة لـ OSCP+؟",
        a: "لا، رغم أنه يقرّبها من الجانب التطبيقي. يتكون CEH Practical من 20 تحديا في 6 ساعات دون تقرير اختبار اختراق. بينما تتطلب OSCP+ قرابة 24 ساعة من الاستغلال المستقل في بيئة تضم Active Directory، إضافة إلى تقرير احترافي. ويبقى الامتحانان متكاملين.",
      },
    ],
    en: [
      {
        q: "Is CEH v13 easier than OSCP+?",
        a: "Generally, yes. CEH v13 is an intermediate certification assessed through 125 multiple-choice questions in 4 hours, whereas OSCP+ is an advanced certification that requires actually compromising machines for 23 h 45 min and then writing a report. CEH remains demanding because of how broad its syllabus is.",
      },
      {
        q: "Can I take OSCP+ without holding CEH?",
        a: "Yes. No certification is required to enrol in PEN-200 and sit the OSCP+ exam. You do, however, need solid Linux, networking, Windows and Active Directory skills, plus scripting. Security+, CEH or equivalent experience is recommended.",
      },
      {
        q: "Which certification do employers in Morocco ask for more?",
        a: "CEH appears more often in job ads and HR filters, including for roles that are not purely offensive. OSCP+ is especially valued by pentest firms, red teams and technical managers. For a pentester role, holding both is a real advantage.",
      },
      {
        q: "How much do CEH v13 and OSCP+ training cost in Morocco?",
        a: "At GATech, CEH v13 training starts at 24,900 MAD (5 days, 312-50 voucher included) and OSCP+ preparation at 29,900 MAD (80 hours of coaching, PEN-200 lab access and one exam attempt included).",
      },
      {
        q: "Does the CEH Practical make CEH equivalent to OSCP+?",
        a: "No, although it brings it closer to hands-on work. The CEH Practical is 20 challenges in 6 hours, with no pentest report to write. OSCP+ requires nearly 24 hours of autonomous exploitation in an environment that includes Active Directory, plus a professional report. The two exams remain complementary.",
      },
    ],
  },
};

export default guide;
