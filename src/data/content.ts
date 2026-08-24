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
    en: "mailto:contact@nomeda.tech?subject=Whano%20for%20my%20Shopify%20store",
    ar: "mailto:contact@nomeda.tech?subject=%D8%B7%D9%84%D8%A8%20%D8%A7%D9%84%D9%88%D8%B5%D9%88%D9%84%20%D8%A5%D9%84%D9%89%20Whano%20%D9%84%D9%85%D8%AA%D8%AC%D8%B1%20Shopify",
  },
  nav: {
    links: [
      { href: "#flow", label: { en: "How it works", ar: "إزاي بيشتغل" } },
      { href: "#features", label: { en: "Features", ar: "المميزات" } },
      { href: "#pricing", label: { en: "Pricing", ar: "الأسعار" } },
      { href: "#faq", label: { en: "Questions", ar: "الأسئلة" } },
    ],
    language: { en: "العربية", ar: "English" },
    cta: { en: "Request access", ar: "اطلب الوصول" },
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
    cta: { en: "Request access", ar: "اطلب الوصول" },
    ctaNote: {
      en: "We'll help you connect your store and WhatsApp number.",
      ar: "هنساعدك توصل متجرك برقم واتساب.",
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
    eyebrow: { en: "Message points", ar: "نقاط الرسائل" },
    title: { en: "Pricing that shows its work.", ar: "أسعار واضحة، وكل نقطة محسوبة." },
    body: {
      en: "Buy a pack, use points as conversations happen, and move up only when your store needs more.",
      ar: "اشتري باقة، والنقاط بتتخصم مع تشغيل الأتمتة، وزوّد الباقة بس لما متجرك يحتاج.",
    },
    note: { en: "All prices are in Egyptian pounds. No contract.", ar: "كل الأسعار بالجنيه المصري. من غير عقد." },
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
      en: "Tell us about your store. We will help you connect Shopify and WhatsApp without changing how your customers buy.",
      ar: "احكيلنا عن متجرك. هنساعدك توصل Shopify بواتساب من غير ما تغيّر طريقة شراء عملاءك.",
    },
    button: { en: "Request access", ar: "اطلب الوصول" },
  },
  footer: {
    descriptor: { en: "Post-purchase WhatsApp automation for Shopify.", ar: "أتمتة التواصل بعد الشراء لمتاجر Shopify." },
    contact: { en: "contact@nomeda.tech", ar: "contact@nomeda.tech" },
    copyright: { en: "© 2026 Whano, a NomedaCo product.", ar: "© 2026 Whano، أحد منتجات NomedaCo." },
    legal: {
      privacy: { en: "Privacy", ar: "الخصوصية" },
      terms: { en: "Terms", ar: "الشروط" },
    },
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

export const plans = [
  {
    name: { en: "Starter", ar: "البداية" },
    points: { en: "500 points", ar: "500 نقطة" },
    price: { en: "500 EGP", ar: "500 جنيه" },
    description: { en: "For a small store getting its first flow in place.", ar: "لمتجر صغير بيبدأ ينظّم متابعة طلباته." },
    features: [
      { en: "All core automations", ar: "كل الأتمتة الأساسية" },
      { en: "Email support", ar: "دعم عبر البريد" },
    ],
    popular: false,
  },
  {
    name: { en: "Growth", ar: "النمو" },
    points: { en: "2,000 points", ar: "2,000 نقطة" },
    price: { en: "1,800 EGP", ar: "1,800 جنيه" },
    description: { en: "For a store with a steady stream of orders.", ar: "لمتجر طلباته ماشية وبتزيد." },
    features: [
      { en: "All core automations", ar: "كل الأتمتة الأساسية" },
      { en: "Priority support", ar: "دعم بأولوية" },
    ],
    popular: true,
  },
  {
    name: { en: "Scale", ar: "التوسّع" },
    points: { en: "5,000 points", ar: "5,000 نقطة" },
    price: { en: "4,000 EGP", ar: "4,000 جنيه" },
    description: { en: "For a busy store that needs more room to move.", ar: "لمتجر عنده عدد طلبات كبير." },
    features: [
      { en: "All core automations", ar: "كل الأتمتة الأساسية" },
      { en: "Dedicated support", ar: "دعم مخصص" },
    ],
    popular: false,
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
