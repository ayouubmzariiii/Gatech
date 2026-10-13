import type { Localized } from "@/lib/i18n";
import type { Faq, PageFaqKey } from "./types";

export const pageFaqs: Record<PageFaqKey, Localized<Faq[]>> = {
  catalog: {
    fr: [
      {
        q: "Combien coûtent les formations certifiantes du catalogue ?",
        a: "Les prix vont de 10 900 MAD (CompTIA Security+) à 29 900 MAD (OSCP), formation et voucher d'examen officiel compris. Chaque fiche certification affiche son tarif « à partir de », et un devis détaillé vous est envoyé sur demande.",
      },
      {
        q: "Combien de temps dure une formation ?",
        a: "La plupart des formations durent 5 jours. La préparation CISM se fait en 4 jours, tandis que l'OSCP s'étend sur 10 jours en raison de son volume de pratique. La durée exacte en jours et en heures est indiquée sur chaque fiche.",
      },
      {
        q: "Comment comparer les certifications entre elles ?",
        a: "Le catalogue indique pour chaque certification l'éditeur, le niveau (débutant à expert), le domaine (offensif, défensif, gouvernance, forensique), la durée et le prix. Comparez d'abord le domaine qui correspond à votre poste visé, puis le niveau adapté à votre expérience actuelle.",
      },
      {
        q: "Quelles certifications sont les plus demandées par les recruteurs ?",
        a: "Pour les profils techniques, CompTIA Security+, CEH et OSCP reviennent souvent dans les offres d'emploi. Pour les fonctions de management et de gouvernance, CISSP, CISM et ISO 27001 Lead Implementer sont les références. Le bon choix dépend donc surtout du poste que vous visez.",
      },
      {
        q: "Proposez-vous des remises de groupe et un calendrier des sessions ?",
        a: "Oui, des conditions tarifaires spécifiques sont possibles pour plusieurs participants d'une même entreprise : demandez un devis en précisant le nombre de personnes. Les dates des prochaines sessions sont communiquées sur demande, par e-mail ou WhatsApp.",
      },
    ],
    ar: [
      {
        q: "كم تبلغ تكلفة الدورات المعتمدة في الكتالوج؟",
        a: "تتراوح الأسعار بين 10900 درهم (CompTIA Security+) و29900 درهم (OSCP)، وتشمل التكوين وقسيمة الامتحان الرسمي. تعرض صفحة كل شهادة سعرها الابتدائي، ويمكنكم طلب عرض سعر مفصل في أي وقت.",
      },
      {
        q: "ما مدة الدورة التكوينية؟",
        a: "تستغرق معظم الدورات 5 أيام. يتم التحضير لـ CISM في 4 أيام، بينما يمتد تكوين OSCP على 10 أيام نظرًا لحجم التطبيق العملي فيه. المدة الدقيقة بالأيام والساعات مذكورة في صفحة كل شهادة.",
      },
      {
        q: "كيف أقارن بين الشهادات المختلفة؟",
        a: "يعرض الكتالوج لكل شهادة الجهة المانحة والمستوى (من مبتدئ إلى خبير) والمجال (هجومي، دفاعي، حوكمة، تحليل جنائي رقمي) والمدة والسعر. ابدأ بالمجال الذي يناسب المنصب الذي تستهدفه، ثم اختر المستوى الملائم لخبرتك الحالية.",
      },
      {
        q: "ما الشهادات الأكثر طلبًا لدى المشغلين؟",
        a: "بالنسبة للملفات التقنية، تتكرر شهادات CompTIA Security+ وCEH وOSCP كثيرًا في عروض الشغل. أما وظائف الإدارة والحوكمة، فالمرجع فيها هو CISSP وCISM وISO 27001 Lead Implementer. الاختيار الأنسب يتوقف أساسًا على المنصب الذي تطمح إليه.",
      },
      {
        q: "هل تقدمون تخفيضات للمجموعات وجدولًا للدورات؟",
        a: "نعم، يمكن اعتماد شروط سعرية خاصة لعدة مشاركين من نفس المؤسسة: اطلبوا عرض سعر مع تحديد عدد الأشخاص. أما تواريخ الدورات القادمة فنرسلها عند الطلب عبر البريد الإلكتروني أو واتساب.",
      },
    ],
    en: [
      {
        q: "How much do the certification courses in the catalogue cost?",
        a: "Prices range from 10,900 MAD (CompTIA Security+) to 29,900 MAD (OSCP), including the training and the official exam voucher. Each certification page shows its starting price, and a detailed quote is available on request.",
      },
      {
        q: "How long does a course last?",
        a: "Most courses run for 5 days. CISM preparation takes 4 days, while OSCP spans 10 days because of its heavy hands-on component. The exact length in days and hours is listed on each certification page.",
      },
      {
        q: "How can I compare the certifications?",
        a: "For each certification the catalogue lists the vendor, the level (beginner to expert), the field (offensive, defensive, governance, forensics), the duration and the price. Start with the field that matches the role you are aiming for, then pick the level that fits your current experience.",
      },
      {
        q: "Which certifications do employers ask for most?",
        a: "For technical roles, CompTIA Security+, CEH and OSCP appear frequently in job postings. For management and governance roles, CISSP, CISM and ISO 27001 Lead Implementer are the benchmarks. The right choice therefore depends mainly on the job you want.",
      },
      {
        q: "Do you offer group discounts and a session calendar?",
        a: "Yes, specific pricing can be arranged for several participants from the same company: request a quote and mention the number of people. Upcoming session dates are shared on request by email or WhatsApp.",
      },
    ],
  },
  business: {
    fr: [
      {
        q: "Pouvez-vous former nos équipes directement dans nos locaux ?",
        a: "Oui, nos formateurs se déplacent dans vos locaux partout au Maroc pour des sessions intra-entreprise. La formation peut aussi se tenir en classe virtuelle si vos collaborateurs sont répartis sur plusieurs sites. Le format est arrêté ensemble lors de l'établissement du devis.",
      },
      {
        q: "Quelle taille de groupe et quel programme pour une formation intra ?",
        a: "La taille du groupe est définie avec vous selon le contenu et le besoin de pratique, afin que chaque participant puisse réaliser les travaux pratiques. Le programme peut être adapté à votre contexte : priorités métiers, environnement technique, ou combinaison de modules issus de plusieurs certifications.",
      },
      {
        q: "Comment se passent la facturation et les bons de commande ?",
        a: "Nous établissons un devis détaillé au nom de votre entreprise, puis une facture conforme à réception de votre bon de commande. Les modalités de règlement sont précisées dans le devis. Indiquez-nous dès la demande si votre service achats a des exigences particulières.",
      },
      {
        q: "Vos formations aident-elles à se conformer à la loi 05-20 et à la DNSSI ?",
        a: "Les programmes de gouvernance et de gestion des risques, comme ISO 27001 Lead Implementer ou CISM, apportent les compétences nécessaires pour mettre en place les mesures attendues par la loi 05-20 et la Directive nationale de la sécurité des systèmes d'information (DNSSI). La formation ne vaut pas certification de conformité, mais elle prépare vos équipes à piloter ce chantier.",
      },
      {
        q: "La formation peut-elle être financée, et recevons-nous un bilan ?",
        a: "Renseignez-vous sur l'éligibilité de votre entreprise aux dispositifs publics de financement de la formation, comme les contrats spéciaux de formation (CSF) gérés avec l'OFPPT ; nous pouvons vous fournir les documents habituellement demandés (programme, devis, attestations). En fin de session, un bilan récapitulant présence, progression et résultats aux examens blancs peut être remis au responsable formation.",
      },
    ],
    ar: [
      {
        q: "هل يمكنكم تكوين فرقنا مباشرة داخل مقرات شركتنا؟",
        a: "نعم، ينتقل مكوّنونا إلى مقراتكم في أي مدينة بالمغرب لتنظيم دورات داخلية خاصة بشركتكم. ويمكن أيضًا تنظيم التكوين في قسم افتراضي مباشر إذا كان موظفوكم موزعين على عدة مواقع. نحدد الصيغة المناسبة معًا عند إعداد عرض السعر.",
      },
      {
        q: "ما حجم المجموعة وما البرنامج في التكوين الداخلي؟",
        a: "نحدد حجم المجموعة معكم حسب المحتوى وحاجة التطبيق العملي، حتى يتمكن كل مشارك من إنجاز الأشغال التطبيقية. ويمكن تكييف البرنامج مع سياقكم: أولويات العمل، البيئة التقنية، أو الجمع بين وحدات من عدة شهادات.",
      },
      {
        q: "كيف تتم الفوترة وسندات الطلب؟",
        a: "نعدّ عرض سعر مفصلًا باسم شركتكم، ثم فاتورة نظامية عند استلام سند الطلب. تُذكر شروط الأداء في عرض السعر. أخبرونا منذ البداية إذا كانت لمصلحة المشتريات لديكم متطلبات خاصة.",
      },
      {
        q: "هل تساعد دوراتكم على الامتثال للقانون 05-20 وللتوجيه الوطني لأمن نظم المعلومات (DNSSI)؟",
        a: "توفر برامج الحوكمة وتدبير المخاطر، مثل ISO 27001 Lead Implementer وCISM، الكفاءات اللازمة لتطبيق التدابير التي يتطلبها القانون 05-20 والتوجيه الوطني لأمن نظم المعلومات. التكوين لا يعادل شهادة امتثال، لكنه يؤهل فرقكم لقيادة هذا الورش.",
      },
      {
        q: "هل يمكن تمويل التكوين، وهل نتوصل بتقرير ختامي؟",
        a: "استفسروا عن مدى أهلية شركتكم للاستفادة من آليات التمويل العمومي للتكوين، مثل العقود الخاصة للتكوين (CSF) المدبرة مع مكتب التكوين المهني وإنعاش الشغل (OFPPT)؛ ويمكننا تزويدكم بالوثائق المطلوبة عادة (البرنامج، عرض السعر، شهادات الحضور). وفي نهاية الدورة، يمكن تسليم مسؤول التكوين تقريرًا يلخص الحضور والتقدم ونتائج الامتحانات التجريبية.",
      },
    ],
    en: [
      {
        q: "Can you train our teams at our own premises?",
        a: "Yes, our trainers travel to your premises anywhere in Morocco for in-company sessions. Training can also run as a live virtual classroom if your staff are spread across several sites. We agree on the format together when preparing the quote.",
      },
      {
        q: "What group size and programme can we expect for in-company training?",
        a: "Group size is set with you based on the content and the amount of hands-on work, so every participant can complete the labs. The programme can be tailored to your context: business priorities, technical environment, or a combination of modules from several certifications.",
      },
      {
        q: "How do invoicing and purchase orders work?",
        a: "We issue a detailed quote in your company's name, then a compliant invoice once we receive your purchase order. Payment terms are set out in the quote. Let us know upfront if your procurement team has specific requirements.",
      },
      {
        q: "Do your courses help with compliance with Law 05-20 and the DNSSI?",
        a: "Governance and risk management programmes such as ISO 27001 Lead Implementer and CISM build the skills needed to implement the measures required by Law 05-20 and the National Information Systems Security Directive (DNSSI). Training is not a compliance certificate, but it prepares your teams to lead that work.",
      },
      {
        q: "Can the training be funded, and do we get a report?",
        a: "Check whether your company is eligible for public training-funding schemes such as the special training contracts (CSF) managed with OFPPT; we can provide the documents usually requested (programme, quote, attendance certificates). At the end of the session, a report summarising attendance, progress and practice exam results can be sent to your training manager.",
      },
    ],
  },
  cities: {
    fr: [
      {
        q: "Puis-je venir en salle à Casablanca ou Rabat depuis une autre ville ?",
        a: "Oui, les sessions en salle de Casablanca et de Rabat sont ouvertes à tous les participants, quelle que soit leur ville de résidence. Les horaires de la session figurent dans la convocation, ce qui vous permet d'organiser votre déplacement et votre hébergement à l'avance.",
      },
      {
        q: "J'habite à Marrakech, Tanger, Fès ou Agadir : comment suivre une formation ?",
        a: "À titre individuel, la classe virtuelle en direct vous permet de suivre le même programme, avec les mêmes labs et la possibilité de poser vos questions en temps réel. Pour les entreprises de ces villes, nos formateurs peuvent aussi intervenir sur site pour un groupe.",
      },
      {
        q: "Le prix change-t-il selon la ville ?",
        a: "Non, le tarif d'une certification est le même partout au Maroc, que vous suiviez la formation en salle ou à distance. Pour une formation intra-entreprise sur site, le devis précise les éventuels frais liés au déplacement.",
      },
      {
        q: "Dois-je me déplacer pour passer l'examen si j'habite loin de Casablanca ou Rabat ?",
        a: "Pas forcément : selon la certification, l'examen se passe dans un centre agréé ou en ligne sous surveillance à distance (online proctoring), depuis chez vous avec une webcam et une connexion stable. Nous vous indiquons les options disponibles pour votre certification et vous aidons à réserver votre créneau.",
      },
      {
        q: "La classe virtuelle est-elle aussi efficace que le présentiel ?",
        a: "Le contenu, le formateur et les travaux pratiques sont identiques : vous accédez aux labs à distance et échangez en direct avec le groupe. Il vous faut simplement un ordinateur, une bonne connexion et un environnement calme pendant les horaires de la session.",
      },
    ],
    ar: [
      {
        q: "هل يمكنني حضور الدورات في الدار البيضاء أو الرباط إذا كنت أسكن في مدينة أخرى؟",
        a: "نعم، الدورات الحضورية في الدار البيضاء والرباط مفتوحة لجميع المشاركين أيًّا كانت مدينة إقامتهم. تُذكر مواعيد الدورة في الاستدعاء، مما يتيح لكم تنظيم تنقلكم وإقامتكم مسبقًا.",
      },
      {
        q: "أسكن في مراكش أو طنجة أو فاس أو أكادير: كيف أتابع التكوين؟",
        a: "بصفة فردية، يتيح لكم القسم الافتراضي المباشر متابعة نفس البرنامج ونفس المختبرات التطبيقية مع إمكانية طرح الأسئلة في الوقت الفعلي. أما الشركات في هذه المدن، فيمكن لمكوّنينا التنقل إلى مقراتها لتكوين مجموعة من موظفيها.",
      },
      {
        q: "هل يختلف السعر حسب المدينة؟",
        a: "لا، سعر الشهادة هو نفسه في جميع أنحاء المغرب، سواء تابعتم التكوين حضوريًا أو عن بُعد. وبالنسبة للتكوين الداخلي في مقرات الشركة، يوضح عرض السعر مصاريف التنقل المحتملة.",
      },
      {
        q: "هل يلزمني التنقل لاجتياز الامتحان إذا كنت أسكن بعيدًا عن الدار البيضاء أو الرباط؟",
        a: "ليس بالضرورة: حسب الشهادة، يُجرى الامتحان في مركز معتمد أو عبر الإنترنت تحت مراقبة عن بُعد (online proctoring) من منزلكم باستعمال كاميرا واتصال مستقر. نوضح لكم الخيارات المتاحة لشهادتكم ونساعدكم على حجز موعدكم.",
      },
      {
        q: "هل القسم الافتراضي فعّال مثل التكوين الحضوري؟",
        a: "المحتوى والمكوّن والأشغال التطبيقية متطابقة: تلجون إلى المختبرات عن بُعد وتتفاعلون مباشرة مع المجموعة. يكفي أن يتوفر لديكم حاسوب واتصال جيد بالإنترنت ومكان هادئ خلال أوقات الدورة.",
      },
    ],
    en: [
      {
        q: "Can I attend a classroom session in Casablanca or Rabat if I live elsewhere?",
        a: "Yes, classroom sessions in Casablanca and Rabat are open to everyone, wherever they live. Session times are given in your joining instructions, so you can plan travel and accommodation ahead.",
      },
      {
        q: "I live in Marrakech, Tangier, Fez or Agadir: how can I take a course?",
        a: "As an individual, the live virtual classroom gives you the same programme and the same labs, with the chance to ask questions in real time. For companies in these cities, our trainers can also come on site to train a group.",
      },
      {
        q: "Does the price depend on the city?",
        a: "No, a certification costs the same everywhere in Morocco, whether you attend in class or online. For on-site in-company training, the quote specifies any travel-related costs.",
      },
      {
        q: "Do I need to travel for the exam if I live far from Casablanca or Rabat?",
        a: "Not necessarily: depending on the certification, the exam is taken at an authorised test centre or online with remote proctoring, from home with a webcam and a stable connection. We tell you which options apply to your certification and help you book your slot.",
      },
      {
        q: "Is the virtual classroom as effective as attending in person?",
        a: "The content, trainer and labs are the same: you access the labs remotely and interact live with the group. All you need is a computer, a good internet connection and a quiet space during session hours.",
      },
    ],
  },
  contact: {
    fr: [
      {
        q: "Sous quel délai recevrai-je une réponse ?",
        a: "Nous répondons à chaque demande sous 24 heures ouvrées. Nos conseillers sont joignables du lundi au vendredi de 9 h à 18 h et le samedi de 9 h à 13 h ; une demande envoyée en dehors de ces horaires est traitée dès la reprise.",
      },
      {
        q: "Puis-je vous contacter sur WhatsApp ?",
        a: "Oui, écrivez-nous sur WhatsApp au +212 6 84 19 94 00 : c'est souvent le moyen le plus rapide pour une question simple ou pour recevoir les dates de session. Vous pouvez aussi appeler ce même numéro ou écrire à contact@gatech.world.",
      },
      {
        q: "Comment s'inscrire à une formation, et quelles informations préparer ?",
        a: "Indiquez-nous la certification visée et le format souhaité (salle, classe virtuelle ou intra-entreprise) ; nous vous confirmons les dates disponibles et vous adressons un devis. Pour gagner du temps, précisez votre expérience actuelle, votre objectif professionnel et, pour une entreprise, le nombre de participants ainsi que les coordonnées de facturation.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Vous pouvez régler par virement bancaire ou par carte. Un paiement échelonné peut être étudié sur demande. Les modalités retenues sont indiquées dans votre devis.",
      },
      {
        q: "Puis-je annuler ou reporter mon inscription ?",
        a: "Les conditions d'annulation et de report sont précisées dans le devis que vous recevez avant toute inscription. En cas d'imprévu, contactez-nous le plus tôt possible afin que nous étudiions ensemble les options disponibles.",
      },
    ],
    ar: [
      {
        q: "في أي أجل سأتوصل بالرد؟",
        a: "نرد على كل طلب في غضون 24 ساعة عمل. يمكن التواصل مع مستشارينا من الاثنين إلى الجمعة من 9:00 إلى 18:00، ويوم السبت من 9:00 إلى 13:00؛ وتُعالَج الطلبات المرسلة خارج هذه الأوقات فور استئناف العمل.",
      },
      {
        q: "هل يمكنني التواصل معكم عبر واتساب؟",
        a: "نعم، راسلونا عبر واتساب على الرقم +212 6 84 19 94 00، فهو غالبًا الوسيلة الأسرع لطرح سؤال بسيط أو للتوصل بتواريخ الدورات. ويمكنكم أيضًا الاتصال بنفس الرقم أو مراسلتنا على contact@gatech.world.",
      },
      {
        q: "كيف أسجل في دورة، وما المعلومات التي يجب تحضيرها؟",
        a: "أخبرونا بالشهادة التي تستهدفونها والصيغة المفضلة (حضوري، قسم افتراضي أو تكوين داخل الشركة)، وسنؤكد لكم التواريخ المتاحة ونرسل إليكم عرض سعر. ولربح الوقت، اذكروا خبرتكم الحالية وهدفكم المهني، وبالنسبة للشركات عدد المشاركين ومعلومات الفوترة.",
      },
      {
        q: "ما وسائل الأداء التي تقبلونها؟",
        a: "يمكنكم الأداء عبر تحويل بنكي أو بالبطاقة البنكية. ويمكن دراسة الأداء على دفعات عند الطلب. تُحدَّد الشروط المعتمدة في عرض السعر الخاص بكم.",
      },
      {
        q: "هل يمكنني إلغاء التسجيل أو تأجيله؟",
        a: "تُوضَّح شروط الإلغاء والتأجيل في عرض السعر الذي تتوصلون به قبل أي تسجيل. وإذا طرأ أمر غير متوقع، تواصلوا معنا في أقرب وقت لندرس معًا الخيارات المتاحة.",
      },
    ],
    en: [
      {
        q: "How quickly will I get a reply?",
        a: "We reply to every request within 24 business hours. Our advisers are available Monday to Friday from 9 am to 6 pm and on Saturday from 9 am to 1 pm; messages sent outside these hours are handled as soon as we are back.",
      },
      {
        q: "Can I contact you on WhatsApp?",
        a: "Yes, message us on WhatsApp at +212 6 84 19 94 00. It is often the fastest way to ask a quick question or get session dates. You can also call the same number or email contact@gatech.world.",
      },
      {
        q: "How do I enrol, and what information should I prepare?",
        a: "Tell us which certification you are aiming for and your preferred format (classroom, virtual classroom or in-company); we confirm the available dates and send you a quote. To save time, mention your current experience and career goal and, for companies, the number of participants and billing details.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "You can pay by bank transfer or by card. Payment in instalments can be considered on request. The agreed terms are set out in your quote.",
      },
      {
        q: "Can I cancel or reschedule my enrolment?",
        a: "Cancellation and rescheduling conditions are set out in the quote you receive before enrolling. If something unexpected comes up, contact us as early as possible so we can look at the available options together.",
      },
    ],
  },
  about: {
    fr: [
      {
        q: "Qui sont les formateurs ?",
        a: "Nos formations sont animées par des praticiens de la cybersécurité, eux-mêmes titulaires des certifications qu'ils enseignent. Ils exercent ou ont exercé sur le terrain (tests d'intrusion, SOC, audit, gouvernance), ce qui leur permet d'illustrer chaque notion par des cas concrets.",
      },
      {
        q: "Dans quelles langues les cours sont-ils dispensés ?",
        a: "Les sessions sont animées en français ou en anglais, selon le groupe. Les formateurs peuvent aussi expliquer une notion en arabe ou en darija pour faciliter la compréhension. Les supports officiels et les examens sont généralement en anglais.",
      },
      {
        q: "Quelle est votre approche pédagogique ?",
        a: "Nous privilégions la pratique : chaque module alterne explications, démonstrations et travaux pratiques en labs. Des examens blancs au format officiel permettent de mesurer votre progression et de cibler vos points faibles avant le jour J.",
      },
      {
        q: "Enseigner le hacking, est-ce éthique ?",
        a: "Comprendre les techniques d'attaque est indispensable pour bien défendre un système. Tous nos exercices offensifs se déroulent dans des environnements de lab isolés et prévus à cet effet, et nous rappelons à chaque session le cadre légal : on ne teste jamais un système sans l'autorisation écrite de son propriétaire.",
      },
      {
        q: "Comment protégez-vous mes données personnelles ?",
        a: "Les données que vous nous transmettez servent uniquement à traiter votre demande et votre inscription à la formation et à l'examen. Elles sont traitées conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, et vous pouvez exercer vos droits d'accès, de rectification et d'opposition en écrivant à contact@gatech.world.",
      },
    ],
    ar: [
      {
        q: "من هم المكوّنون؟",
        a: "يؤطر دوراتنا ممارسون في مجال الأمن السيبراني حاصلون بأنفسهم على الشهادات التي يدرّسونها. يعملون أو سبق لهم العمل ميدانيًا (اختبارات الاختراق، مراكز العمليات الأمنية SOC، التدقيق، الحوكمة)، مما يمكّنهم من توضيح كل مفهوم بحالات واقعية.",
      },
      {
        q: "ما لغات التدريس؟",
        a: "تُقدَّم الدورات بالفرنسية أو الإنجليزية حسب المجموعة. ويمكن للمكوّنين أيضًا شرح بعض المفاهيم بالعربية أو بالدارجة لتسهيل الفهم. أما الدعامات الرسمية والامتحانات فتكون في الغالب باللغة الإنجليزية.",
      },
      {
        q: "ما هي مقاربتكم البيداغوجية؟",
        a: "نعطي الأولوية للتطبيق: يتناوب كل محور بين الشرح والعروض التوضيحية والأشغال التطبيقية في المختبرات. وتمكّنكم امتحانات تجريبية بصيغة الامتحان الرسمي من قياس تقدمكم والتركيز على نقاط الضعف قبل يوم الامتحان.",
      },
      {
        q: "هل تدريس تقنيات الاختراق أمر أخلاقي؟",
        a: "فهم تقنيات الهجوم ضروري للدفاع عن الأنظمة بشكل جيد. تُجرى جميع تماريننا الهجومية في بيئات مختبرية معزولة ومخصصة لهذا الغرض، ونذكّر في كل دورة بالإطار القانوني: لا يُختبر أي نظام دون إذن كتابي من مالكه.",
      },
      {
        q: "كيف تحمون معطياتي الشخصية؟",
        a: "تُستعمل المعطيات التي ترسلونها إلينا فقط لمعالجة طلبكم وتسجيلكم في الدورة والامتحان. وتُعالَج وفقًا للقانون 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، ويمكنكم ممارسة حقوقكم في الولوج والتصحيح والتعرض بمراسلتنا على contact@gatech.world.",
      },
    ],
    en: [
      {
        q: "Who are the trainers?",
        a: "Our courses are delivered by cybersecurity practitioners who hold the certifications they teach. They work or have worked in the field (penetration testing, SOC, audit, governance), so they can illustrate every concept with real-world cases.",
      },
      {
        q: "What languages are the courses taught in?",
        a: "Sessions are taught in French or English, depending on the group. Trainers can also explain concepts in Arabic or Darija to make things clearer. Official course materials and exams are generally in English.",
      },
      {
        q: "What is your teaching approach?",
        a: "We focus on practice: every module alternates explanations, demonstrations and hands-on lab work. Practice exams in the official format help you measure your progress and target weak spots before exam day.",
      },
      {
        q: "Is it ethical to teach hacking?",
        a: "Understanding attack techniques is essential to defending systems well. All our offensive exercises take place in isolated lab environments built for that purpose, and every session reminds participants of the legal framework: never test a system without its owner's written permission.",
      },
      {
        q: "How do you protect my personal data?",
        a: "The data you send us is used only to handle your request, your course enrolment and your exam registration. It is processed in accordance with Law 09-08 on the protection of individuals with regard to the processing of personal data, and you can exercise your rights of access, rectification and objection by writing to contact@gatech.world.",
      },
    ],
  },
};
