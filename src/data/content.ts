export interface Localized {
  en: string;
  ar: string;
}

export interface ChatMessage {
  direction: "in" | "out";
  en: string;
  ar: string;
}

export const site = {
  contactEmail: "contact@nomeda.tech",
  accessUrl: {
    en: "https://admin.shopify.com/?organization_id=228117107&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D8b2f666fa314f81b17097c93d5c18afd",
    ar: "https://admin.shopify.com/?organization_id=228117107&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D8b2f666fa314f81b17097c93d5c18afd",
  },
  nav: {
    links: [
      { href: "#flow", label: { en: "How it works", ar: "إزاي بيشتغل" } },
      { href: "#features", label: { en: "Features", ar: "المميزات" } },
      { href: "#pricing", label: { en: "Pricing", ar: "الأسعار" } },
      { href: "#faq", label: { en: "Questions", ar: "الأسئلة" } },
      { href: "about", label: { en: "About", ar: "عنّا" } },
    ],
    language: { en: "العربية", ar: "English" },
    cta: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
    menuOpen: { en: "Open menu", ar: "افتح القائمة" },
    menuClose: { en: "Close menu", ar: "اقفل القائمة" },
    switchToArabic: { en: "Switch to Arabic", ar: "التبديل إلى العربية" },
    switchToEnglish: { en: "Switch to English", ar: "التبديل إلى الإنجليزية" },
  },
  hero: {
    eyebrow: { en: "WhatsApp operations for Shopify", ar: "إدارة طلباتك على واتساب" },
    titleLead: { en: "The order doesn't end at checkout.", ar: "الطلب مش بيخلص عند إتمام الشراء." },
    titleAccent: { en: "Whano takes it from here.", ar: "Whano بيكمّل الباقي." },
    body: {
      en: "Whano connects your Shopify store to the WhatsApp number you already use. It confirms orders, handles changes, sends delivery updates, and asks for the review.",
      ar: "Whano بيوصل متجرك على Shopify برقم واتساب اللي بتستخدمه أصلًا. بيأكد الطلبات، يتعامل مع التعديلات، يبعت تحديثات التوصيل، ويطلب التقييم.",
    },
    cta: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
    ctaNote: {
      en: "Free to install. 50 messages included.",
      ar: "الثبّت مجاني. 50 رسالة مجانية متضمنة.",
    },
    proofs: [
      { en: "Your existing WhatsApp number", ar: "برقم واتسابك الحالي" },
      { en: "50 free messages to test it", ar: "50 رسالة مجانية للتجربة" },
      { en: "Connected to Shopify", ar: "متصل بمتجرك على Shopify" },
    ],
  },
  thread: {
    label: { en: "Example thread", ar: "مثال لمحادثة" },
    status: { en: "online", ar: "متصل الآن" },
    orderStatus: { en: "Order in motion", ar: "الطلب ماشي" },
  },
  problem: {
    eyebrow: { en: "The part after checkout", ar: "الجزء اللي بعد الدفع" },
    title: {
      en: "A sale is only the beginning.",
      ar: "البيع هو البداية بس.",
    },
    body: {
      en: "The work continues after payment: confirm the order, answer follow-up questions, update the customer, and remember to ask how it went. Whano keeps that conversation moving without turning your phone into a second storefront.",
      ar: "الشغل بيكمّل بعد الدفع: أكّد الطلب، رد على الأسئلة، طمّن العميل على الشحنة، وافتكر تطلب تقييمه. Whano بيخلّي المحادثة ماشية من غير ما موبايلك يتحوّل لمتجر تاني.",
    },
    without: { en: "Manual follow-up", ar: "المتابعة اليدوية" },
    with: { en: "A clear order thread", ar: "محادثة واضحة لكل طلب" },
  },
  flow: {
    eyebrow: { en: "One order, end to end", ar: "طلب واحد من أوله لآخره" },
    title: { en: "The whole handoff stays in one thread.", ar: "كل حاجة بتفضل في نفس المحادثة." },
    body: {
      en: "Shopify remains the source of truth. WhatsApp is where the customer learns the clear next step.",
      ar: "Shopify هو مصدر البيانات الأساسي. وواتساب هو المكان اللي العميل بيعرف منه الخطوة الواضحة اللي بعدها.",
    },
  },
  features: {
    eyebrow: { en: "What Whano handles", ar: "Whano بيتعامل مع إيه" },
    title: { en: "Useful after the order, not noisy before it.", ar: "مفيد بعد الطلب، من غير دوشة قبلها." },
    body: {
      en: "Each automation has one job: keep the order clear, the customer informed, and you in control.",
      ar: "كل أتمتة ليها وظيفة واضحة: تخلي الطلب مفهوم، والعميل عارف اللي بيحصل، وإنت المتحكم.",
    },
  },
  control: {
    eyebrow: { en: "Built around your store", ar: "متصمم على طريقة شغلك" },
    title: { en: "Automation without handing over the keys.", ar: "أتمتة وإنت لسه المتحكم." },
    points: [
      {
        title: { en: "Use the number customers know", ar: "استخدم الرقم اللي عملاءك عارفينه" },
        body: {
          en: "Connect the WhatsApp number you already use for your business. No new inbox for customers to discover.",
          ar: "وصّل رقم الواتساب اللي بتستخدمه في شغلك. مش محتاج تعمل صندوق رسائل جديد وتعرّف الناس بيه.",
        },
      },
      {
        title: { en: "Let Shopify keep the facts", ar: "خلّي Shopify يحتفظ بالبيانات" },
        body: {
          en: "Order totals, items, and shipping details come from your store. Whano does not invent an answer when the data is not there.",
          ar: "بيانات الطلب — الإجمالي والمنتجات وتفاصيل الشحن — جاية من متجرك. Whano ما بيخمنش لما المعلومة مش موجودة.",
        },
      },
      {
        title: { en: "Step in when a human is needed", ar: "اتدخل لما الموقف يحتاجك" },
        body: {
          en: "When a conversation needs your judgment, automation pauses and hands it back to you.",
          ar: "لو المحادثة محتاجة قرار منك، الأتمتة بتقف وترجّع لك المحادثة.",
        },
      },
    ],
  },
  pricing: {
    eyebrow: { en: "Points", ar: "النقاط" },
    title: { en: "Pricing that shows its work.", ar: "أسعار واضحة، وكل نقطة محسوبة." },
    body: {
      en: "Optional automations use points; order confirmation and cancellation never do.",
      ar: "الأتمتة الاختيارية بتستخدم النقاط؛ تأكيد الطلب والإلغاء مجانًا دائمًا.",
    },
    note: { en: "Billed through Shopify, on the same invoice as the rest of your store.", ar: "الفاتورة عن طريق Shopify، على نفس فاتورة متجرك." },
  },
  faq: {
    eyebrow: { en: "Before you start", ar: "قبل ما تبدأ" },
    title: { en: "Questions worth answering.", ar: "أسئلة مهمة قبل البداية." },
    body: {
      en: "A few practical answers about the number, the messages, and what happens when the bot should stop.",
      ar: "إجابات مباشرة عن الرقم، والرسائل، والوقت اللي Whano بيوقف فيه ويسيبلك المحادثة.",
    },
  },
  cta: {
    title: { en: "Keep the next order moving after checkout.", ar: "خلّي متابعة الطلب الجاي تكمّل للآخر." },
    body: {
      en: "Install Whano on your Shopify store and start automating post-purchase conversations today.",
      ar: "ثبّت Whano على متجرك على Shopify وابدأ أتمتة محادثات ما بعد الشراء النهارده.",
    },
    button: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
  },
  footer: {
    descriptor: { en: "Post-purchase WhatsApp automation for Shopify.", ar: "أتمتة التواصل بعد الشراء لمتاجر Shopify." },
    contact: { en: "contact@nomeda.tech", ar: "contact@nomeda.tech" },
    contactLabel: { en: "Email", ar: "البريد الإلكتروني" },
    copyright: { en: "© 2026 Whano, a NomedaCo product.", ar: "© 2026 Whano، منتج من NomedaCo." },
    shopifyBadge: { en: "Available on the Shopify App Store", ar: "متوفر على متجر تطبيقات Shopify" },
    legal: {
      label: { en: "Legal", ar: "قانوني" },
      privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      terms: { en: "Terms of Service", ar: "شروط الخدمة" },
    },
    productLabel: { en: "Product", ar: "المنتج" },
    socialLabel: { en: "Follow us", ar: "تابعنا" },
    backToTop: { en: "Back to top", ar: "الرجوع للأعلى" },
  },
} as const;

export const orderFlow = [
  {
    number: "01",
    title: { en: "Order received", ar: "وصل طلب جديد" },
    body: { en: "Shopify sends the order details.", ar: "Shopify بيبعت تفاصيل الطلب." },
  },
  {
    number: "02",
    title: { en: "Confirmation sent", ar: "اتبعث التأكيد" },
    body: { en: "Whano opens the conversation on WhatsApp.", ar: "Whano بيبدأ المحادثة على واتساب." },
  },
  {
    number: "03",
    title: { en: "Customer reviews it", ar: "العميل بيراجع الطلب" },
    body: { en: "The customer confirms or asks for a change.", ar: "العميل يؤكّد أو يطلب تعديل." },
  },
  {
    number: "04",
    title: { en: "The loop closes", ar: "المتابعة بتكمّل" },
    body: { en: "Shipping updates and a review request follow.", ar: "بعدها بتتبعت تحديثات الشحن وطلب التقييم." },
  },
] as const;

export const features = [
  {
    number: "01",
    title: { en: "Confirm without chasing", ar: "أكد الطلب من غير ما تلاحق العميل" },
    body: {
      en: "A new order starts a clear WhatsApp conversation. The customer sees the items, total, and next step before you have to ask for anything.",
      ar: "الطلب الجديد بيبدأ محادثة واضحة على واتساب. العميل بيشوف المنتجات والإجمالي والخطوة اللي بعدها من غير ما تستنى ردّ أو تسأل.",
    },
    detail: { en: "Order confirmation", ar: "تأكيد الطلب" },
  },
  {
    number: "02",
    title: { en: "Let customers change their mind", ar: "خلّي العميل يعدّل طلبه" },
    body: {
      en: "Whano can suggest products customers often buy together, then handle adding an item, changing its quantity, or cancelling the order before fulfillment. The Shopify order stays current.",
      ar: "Whano بيقترح منتجات غالبًا العملاء بيشتروها مع بعض، وبعدها يتعامل مع الإضافة أو تغيير الكمية أو الإلغاء قبل تجهيز الطلب. وطلب Shopify يفضل متحدّث.",
    },
    detail: { en: "Natural-language order edits", ar: "تعديلات الطلب بالكلام العادي" },
  },
  {
    number: "03",
    title: { en: "Ship with fewer questions", ar: "ابعت تحديث الشحن من غير أسئلة كتير" },
    body: {
      en: "When the order is fulfilled, send the tracking number and the delivery window automatically. The customer knows the order status and expected arrival.",
      ar: "لما الطلب يتشحن، ابعت رقم التتبع وموعد التوصيل تلقائي. العميل يبقى عارف حالة طلبه وميعاد وصوله.",
    },
    detail: { en: "Shipping notification", ar: "تحديث الشحن" },
  },
  {
    number: "04",
    title: { en: "Ask for the review while it matters", ar: "اطلب التقييم في وقته" },
    body: {
      en: "After delivery, Whano follows up with a simple question. Customers can reply in Arabic or English, and the response is saved for you.",
      ar: "بعد التوصيل، Whano بيسأل سؤال بسيط. العميل يرد بالعربي أو بالإنجليزي، والرد بيتحفظ عندك.",
    },
    detail: { en: "Post-delivery review", ar: "تقييم بعد التوصيل" },
  },
] as const;

export const pricingFeatures = [
  { en: "Order confirmation & cancellation always included, at no extra cost", ar: "تأكيد الطلب والإلغاء دائمًا متضمنين، من غير تكلفة إضافية" },
  { en: "Every optional automation — shipping, ratings, edits, support — draws from the same balance", ar: "كل أتمتة اختيارية — الشحن، التقييمات، التعديلات، الدعم — بتاخد من نفس الرصيد" },
  { en: "Not a subscription: buy points once, and they stay until you spend them", ar: "مش اشتراك: اشتري النقاط مرة واحدة، وتفضل لحد ما تستخدمها" },
  { en: "Billed through Shopify, on the same invoice as the rest of your store", ar: "الفاتورة عن طريق Shopify، على نفس فاتورة متجرك" },
  { en: "When the points run out, optional automations pause until you top up", ar: "لما النقاط تخلص، الأتمتة الاختيارية بتوقف لحد ما تزوّد" },
] as const;

export const plans = [
  {
    name: { en: "Starter", ar: "البداية" },
    points: { en: "500 points", ar: "500 نقطة" },
    price: { en: "$10", ar: "$10" },
    originalPrice: { en: "$15", ar: "$15" },
    priceUsd: 10,
    description: { en: "For a store just getting started with WhatsApp automations.", ar: "لمتجر بيبدأ يجرّب أتمتة واتساب." },
    popular: false,
  },
  {
    name: { en: "Plus", ar: "بلس" },
    points: { en: "1,000 points", ar: "1,000 نقطة" },
    price: { en: "$19", ar: "$19" },
    originalPrice: { en: "$35", ar: "$35" },
    priceUsd: 19,
    description: { en: "For a store past its first month and ordering regularly.", ar: "لمتجر عدى أول شهر وطلباته منتظمة." },
    popular: false,
  },
  {
    name: { en: "Growth", ar: "النمو" },
    points: { en: "2,000 points", ar: "2,000 نقطة" },
    price: { en: "$36", ar: "$36" },
    originalPrice: { en: "$70", ar: "$70" },
    priceUsd: 36,
    description: { en: "For a growing store running automations on most orders.", ar: "لمتجر كبر وبيشغّل الأتمتة على أغلب الطلبات." },
    popular: true,
  },
  {
    name: { en: "Pro", ar: "برو" },
    points: { en: "3,500 points", ar: "3,500 نقطة" },
    price: { en: "$59", ar: "$59" },
    originalPrice: { en: "$105", ar: "$105" },
    priceUsd: 59,
    description: { en: "For a busy store that tops up every couple of months.", ar: "لمتجر مزدحم بيزوّد كل شوية." },
    popular: false,
  },
  {
    name: { en: "Enterprise", ar: "الشركات" },
    points: { en: "Custom", ar: "مخصص" },
    price: { en: "Talk to us", ar: "كلمنا" },
    originalPrice: null,
    priceUsd: null,
    description: { en: "Need a custom volume or a higher point bundle?", ar: "محتاج كمية مخصصة أو باقة نقاط أكبر؟" },
    popular: false,
    isEnterprise: true,
  },
] as const;

export const faqs = [
  {
    question: { en: "Do I need a new WhatsApp number?", ar: "هل لازم أعمل رقم واتساب جديد؟" },
    answer: {
      en: "No. Whano connects to the number you already use for your business through device linking. Your customers do not have to use a new number.",
      ar: "لأ. Whano بيتوصل بالرقم اللي بتستخدمه في شغلك عن طريق ربط الجهاز. عملاءك مش محتاجين يتعاملوا مع رقم جديد.",
    },
  },
  {
    question: { en: "Will the messages sound robotic?", ar: "الرسائل هتبان آلية؟" },
    answer: {
      en: "You control the message templates and store details. The Arabic messages are written for Egyptian customers, and you can adjust the wording to match your brand.",
      ar: "إنت اللي بتتحكم في القوالب وتفاصيل متجرك. الرسائل بالعربي مكتوبة للعميل المصري، وتقدر تعدّل الكلام على صوت البراند بتاعك.",
    },
  },
  {
    question: { en: "Can a customer change an order after placing it?", ar: "العميل يقدر يعدّل الطلب بعد ما يعمله؟" },
    answer: {
      en: "Yes, before fulfillment. Whano can suggest products customers often buy together, then handle adding an item, changing its quantity, or cancelling the order. The Shopify order stays current.",
      ar: "آه، قبل تجهيز الطلب. Whano بيقترح منتجات غالبًا العملاء بيشتروها مع بعض، وبعدها يتعامل مع الإضافة أو تغيير الكمية أو الإلغاء. وطلب Shopify يفضل متحدّث.",
    },
  },
  {
    question: { en: "What happens when a conversation needs me?", ar: "إيه اللي بيحصل لما المحادثة تحتاجني؟" },
    answer: {
      en: "Automation pauses and hands the conversation back to you. You can step in when a question needs judgment, context, or a human answer.",
      ar: "الأتمتة بتقف وترجّع لك المحادثة. تقدر تتدخل لما السؤال يحتاج قرار، أو تفاصيل، أو رد من شخص حقيقي.",
    },
  },
  {
    question: { en: "How do message points work?", ar: "نقاط الرسائل بتتحسب إزاي؟" },
    answer: {
      en: "You buy points in packs. Automations use points as they run, so a confirmation and a review follow-up can have different costs. There is no monthly contract.",
      ar: "بتشتري النقاط في باقات. كل أتمتة بتستخدم عدد نقاط حسب تشغيلها، فالتأكيد وطلب التقييم ممكن يكون لكل واحد منهم تكلفة مختلفة. من غير اشتراك شهري إجباري.",
    },
  },
  {
    question: { en: "Is Whano right for my store?", ar: "Whano مناسب لمتجري؟" },
    answer: {
      en: "If you use Shopify, sell physical products, and already speak to customers on WhatsApp, Whano is built for the space between a new order and a completed delivery.",
      ar: "لو بتستخدم Shopify، وبتبيع منتجات مش رقمية، وبتكلم عملاءك على واتساب، Whano معمول للجزء اللي بين الطلب الجديد والتوصيل.",
    },
  },
] as const;

export const heroConversation: ChatMessage[] = [
  {
    direction: "out",
    en: "We’re checking your order #1042 to confirm the details.\n\nReply YES if everything looks right.",
    ar: "بنراجع تفاصيل طلبك رقم 1042 علشان نأكده.\n\nاكتب «تأكيد» لو كل حاجة تمام.",
  },
  {
    direction: "in",
    en: "Yes, everything looks right.",
    ar: "أيوه، كل حاجة تمام.",
  },
  {
    direction: "out",
    en: "Done, Ahmed. Order #1042 is confirmed.\n\n2 × Cotton T-shirt — 360 EGP\nShipping — 50 EGP\nTotal — 410 EGP\n\nEstimated delivery: 2–3 business days.",
    ar: "تمام يا أحمد، أكدنا طلبك رقم 1042.\n\n2 × تيشيرت قطن — 360 جنيه\nالشحن — 50 جنيه\nالإجمالي — 410 جنيه\n\nمتوقع يوصلك خلال 2–3 أيام عمل.",
  },
  {
    direction: "in",
    en: "Can you add one more?",
    ar: "ممكن تزود تيشيرت كمان؟",
  },
  {
    direction: "out",
    en: "Sure. Cotton T-shirt — 180 EGP.\nShould I add it to the order?",
    ar: "طبعًا. التيشيرت القطن بـ180 جنيه.\nأضيفه للطلب؟",
  },
  {
    direction: "in",
    en: "Yes, add it.",
    ar: "آه، ضيفه.",
  },
  {
    direction: "out",
    en: "Added.\nNew total: 590 EGP.",
    ar: "اتضاف للطلب.\nالإجمالي الجديد: 590 جنيه.",
  },
];
