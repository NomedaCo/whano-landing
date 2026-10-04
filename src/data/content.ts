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
  contactEmail: "whano@nomeda.tech",
  accessUrl: {
    en: "https://apps.shopify.com/whano",
    ar: "https://apps.shopify.com/whano",
  },
  // The console: /dashboard serves the overview when signed in and the login
  // page otherwise, so a single address works for both.
  consoleUrl: {
    en: "https://whano.nomeda.tech/dashboard",
    ar: "https://whano.nomeda.tech/dashboard",
  },
  nav: {
    links: [
      { href: "#flow", label: { en: "How it works", ar: "كيف يعمل" } },
      { href: "features", label: { en: "Features", ar: "المزايا" } },
      { href: "pricing", label: { en: "Pricing", ar: "الأسعار" } },
      { href: "faq", label: { en: "Questions", ar: "الأسئلة" } },
    ],
    login: { en: "Log in", ar: "تسجيل الدخول" },
    language: { en: "العربية", ar: "English" },
    cta: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
    menuOpen: { en: "Open menu", ar: "افتح القائمة" },
    menuClose: { en: "Close menu", ar: "أغلق القائمة" },
    switchToArabic: { en: "Switch to Arabic", ar: "التبديل إلى العربية" },
    switchToEnglish: { en: "Switch to English", ar: "التبديل إلى الإنجليزية" },
  },
  hero: {
    eyebrow: { en: "WhatsApp operations for Shopify", ar: "عمليات واتساب لمتاجر Shopify" },
    titleLead: { en: "The order doesn't end at checkout.", ar: "الطلب لا ينتهي عند إتمام الشراء." },
    titleAccent: { en: "Whano takes it from here.", ar: "Whano تُكمل الرحلة من هنا." },
    body: {
      en: "Whano connects your Shopify store to automated WhatsApp messaging. It confirms orders, handles changes, sends delivery updates, and asks for the review with zero setup.",
      ar: "يربط Whano متجرك على Shopify بأتمتة رسائل واتساب: يؤكد الطلبات، ويتعامل مع التعديلات، ويرسل تحديثات التوصيل، ويطلب التقييم، من دون أي إعداد.",
    },
    cta: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
    loginCta: { en: "Log in", ar: "تسجيل الدخول" },
    ctaNote: {
      en: "Free to install. 100 points included.",
      ar: "التثبيت مجاني، ومعك 100 نقطة للبدء.",
    },
    proofs: [
      { en: "Instant setup with no number hassle", ar: "جاهز فورًا من دون إعداد أرقام" },
      { en: "100 free points to test it", ar: "100 نقطة مجانية للتجربة" },
      { en: "Connected to Shopify", ar: "متصل بمتجرك على Shopify" },
    ],
  },
  thread: {
    label: { en: "Example thread", ar: "مثال لمحادثة" },
    status: { en: "online", ar: "متصل الآن" },
    orderStatus: { en: "Order in motion", ar: "الطلب قيد التنفيذ" },
  },
  problem: {
    eyebrow: { en: "The part after checkout", ar: "الجزء الذي يلي الدفع" },
    title: {
      en: "A sale is only the beginning.",
      ar: "البيع مجرد البداية.",
    },
    body: {
      en: "The work continues after payment: confirm the order, answer follow-up questions, update the customer, and remember to ask how it went. Whano keeps that conversation moving without turning your phone into a second storefront.",
      ar: "يستمر العمل بعد الدفع: أكّد الطلب، وأجب عن الأسئلة، وحدّث العميل، وتذكّر أن تطلب تقييمه. يحافظ Whano على استمرار المحادثة من دون أن يتحول هاتفك إلى متجر ثانٍ.",
    },
    without: { en: "Without Whano", ar: "من دون Whano" },
    with: { en: "With Whano", ar: "مع Whano" },
  },
  operations: {
    eyebrow: { en: "After checkout", ar: "بعد إتمام الدفع" },
    title: {
      en: "Payment is done. The order still needs follow-up.",
      ar: "تم الدفع، والطلب ما زال يحتاج متابعة.",
    },
    body: {
      en: "Whano handles the repeatable WhatsApp work from the first confirmation to the delivery follow-up.",
      ar: "يتولّى Whano رسائل واتساب المتكررة من أول تأكيد الطلب حتى متابعة التوصيل.",
    },
    problem: {
      label: { en: "Without Whano", ar: "من دون Whano" },
      title: { en: "Every order adds manual work.", ar: "كل طلب يضيف عملًا يدويًا." },
      items: [
        {
          title: { en: "New order", ar: "طلب جديد" },
          body: {
            en: "You open WhatsApp, check Shopify, and send the confirmation yourself.",
            ar: "تفتح واتساب، وتراجع Shopify، وترسل التأكيد بنفسك.",
          },
        },
        {
          title: { en: "Order change", ar: "تعديل الطلب" },
          body: {
            en: "You go back to the order when a customer wants to add or change something.",
            ar: "تعود إلى الطلب حين يطلب العميل إضافة أو تعديلًا.",
          },
        },
        {
          title: { en: "After delivery", ar: "بعد التوصيل" },
          body: {
            en: "Tracking and review messages depend on someone remembering to send them.",
            ar: "تحديث الشحن وطلب التقييم مرهونان بأن يتذكر أحدهم إرسالهما.",
          },
        },
      ],
    },
    solution: {
      label: { en: "With Whano", ar: "مع Whano" },
      title: { en: "Each step follows the order.", ar: "كل خطوة تسير مع الطلب." },
      items: [
        {
          title: { en: "Confirmation", ar: "التأكيد" },
          body: {
            en: "Whano sends the order details with Confirm, Cancel, or Edit buttons.",
            ar: "يرسل Whano تفاصيل الطلب مع أزرار التأكيد أو الإلغاء أو التعديل.",
          },
        },
        {
          title: { en: "Customer reply", ar: "رد العميل" },
          body: {
            en: "The customer replies, and Shopify stays current before fulfillment.",
            ar: "يرد العميل، ويبقى Shopify محدثًا قبل التجهيز.",
          },
        },
        {
          title: { en: "Follow-up", ar: "المتابعة" },
          body: {
            en: "Tracking, ratings, and support follow the order automatically.",
            ar: "تسير تحديثات الشحن والتقييم والدعم مع حالة الطلب تلقائيًا.",
          },
        },
      ],
    },
    flow: {
      eyebrow: { en: "What Whano actually does", ar: "ما الذي يفعله Whano بالضبط" },
      title: { en: "One order. Four clear handoffs.", ar: "طلب واحد. أربع خطوات واضحة." },
      steps: [
        {
          number: "01",
          trigger: { en: "New order in Shopify", ar: "طلب جديد على Shopify" },
          title: { en: "Send the order details", ar: "إرسال تفاصيل الطلب" },
          body: {
            en: "Order number, products, total, shipping details, and Confirm / Cancel / Edit buttons.",
            ar: "رقم الطلب، والمنتجات، والإجمالي، وتفاصيل الشحن، وأزرار التأكيد أو الإلغاء أو التعديل.",
          },
          result: { en: "The customer knows what to do next.", ar: "يعرف العميل خطوته التالية." },
        },
        {
          number: "02",
          trigger: { en: "Customer replies", ar: "رد العميل" },
          title: { en: "Handle the reply", ar: "معالجة الرد" },
          body: {
            en: "A button tap or a plain-language message can confirm, cancel, add an item, or change quantity before fulfillment.",
            ar: "ضغطة زر أو رسالة بعبارات طبيعية يمكنها التأكيد أو الإلغاء أو إضافة منتج أو تغيير الكمية قبل التجهيز.",
          },
          result: { en: "The Shopify order stays current.", ar: "يبقى طلب Shopify محدثًا." },
        },
        {
          number: "03",
          trigger: { en: "Fulfillment in Shopify", ar: "تجهيز الطلب على Shopify" },
          title: { en: "Send tracking", ar: "إرسال التتبع" },
          body: {
            en: "When tracking is added in Shopify, Whano sends the tracking number and estimated arrival on WhatsApp.",
            ar: "عند إضافة رقم التتبع في Shopify، يرسل Whano الرقم وموعد الوصول المتوقع عبر واتساب.",
          },
          result: { en: "Fewer 'where is my order?' messages.", ar: "رسائل أقل من نوع: أين طلبي؟" },
        },
        {
          number: "04",
          trigger: { en: "After delivery", ar: "بعد التوصيل" },
          title: { en: "Ask for feedback", ar: "طلب التقييم" },
          body: {
            en: "Whano asks for a rating. If the experience is bad, it opens the support and return path.",
            ar: "يطلب Whano تقييمًا. وإذا كانت التجربة سيئة، يفتح مسار الدعم والاستبدال أو الاسترجاع.",
          },
          result: { en: "Your team sees the problem while it can still be fixed.", ar: "يرى فريقك المشكلة وهي قابلة للحل." },
        },
      ],
    },
    controls: {
      label: { en: "What you still control", ar: "ما الذي يبقى تحت سيطرتك" },
      items: [
        { en: "Shopify holds the order data", ar: "Shopify هي مصدر بيانات الطلب" },
        { en: "No phone linking or personal-number risk", ar: "دون ربط أجهزة أو مخاطرة برقمك الشخصي" },
        { en: "You take over when support needs a human", ar: "تتولّى الأمر عندما يحتاج الدعم إلى شخص حقيقي" },
      ],
    },
  },
  flow: {
    eyebrow: { en: "One order, end to end", ar: "طلب واحد من بدايته إلى نهايته" },
    title: { en: "The whole handoff stays in one thread.", ar: "تبقى الرحلة كاملة في محادثة واحدة." },
    body: {
      en: "Shopify remains the source of truth. WhatsApp is where the customer learns the clear next step.",
      ar: "يبقى Shopify مصدر الحقيقة، وواتساب هو المكان الذي يعرف منه العميل خطوته التالية بوضوح.",
    },
  },
  features: {
    eyebrow: { en: "What Whano handles", ar: "ما الذي يتولّاه Whano" },
    title: { en: "Useful after the order, not noisy before it.", ar: "مفيد بعد الطلب، بلا إزعاج قبله." },
    body: {
      en: "Each automation has one job: keep the order clear, the customer informed, and you in control.",
      ar: "لكل أتمتة مهمة واحدة: أن يبقى الطلب واضحًا، وأن يبقى العميل على علم، وأن تبقى أنت المتحكم.",
    },
    all: { en: "See all features", ar: "اطّلع على كل المزايا" },
  },
  pricingTeaser: {
    eyebrow: { en: "Points", ar: "النقاط" },
    title: { en: "Pay for what you use.", ar: "ادفع مقابل ما تستخدمه." },
    body: {
      en: "Points from $10, billed through Shopify. No monthly subscription, and points never expire.",
      ar: "باقات النقاط تبدأ من 10 دولارات، وتُفوتر عبر Shopify. من دون اشتراك شهري، والنقاط لا تنتهي.",
    },
    cta: { en: "See pricing", ar: "اطّلع على الأسعار" },
  },
  control: {
    eyebrow: { en: "Built around your store", ar: "مصمم حسب طريقة عملك" },
    title: { en: "Automation without handing over the keys.", ar: "أتمتة كاملة وأنت المتحكم." },
    points: [
      {
        title: { en: "Zero number setup or API hassle", ar: "بدون إعداد أرقام أو تعقيدات API" },
        body: {
          en: "Whano sends verified WhatsApp messages on behalf of your store right away. No phone linking, no Meta Cloud approval delays, and zero risk to your personal number.",
          ar: "يرسل Whano رسائل واتساب موثقة باسم متجرك فورًا، من دون ربط أجهزة، ولا انتظار موافقات Meta، ومن دون أي خطر على رقمك الشخصي.",
        },
      },
      {
        title: { en: "Let Shopify keep the facts", ar: "ليحتفظ Shopify بالبيانات" },
        body: {
          en: "Order totals, items, and shipping details come from your store. Whano does not invent an answer when the data is not there.",
          ar: "تأتي بيانات الطلب — الإجمالي والمنتجات وتفاصيل الشحن — من متجرك مباشرة. ولا يخترع Whano إجابة عندما لا تتوفر المعلومة.",
        },
      },
      {
        title: { en: "Step in when a human is needed", ar: "تدخّل عندما يحتاج الموقف إليك" },
        body: {
          en: "When a conversation needs your judgment, automation pauses and hands it back to you.",
          ar: "إذا احتاجت المحادثة إلى قرار منك، تتوقف الأتمتة وتعيدها إليك.",
        },
      },
    ],
  },
  pricing: {
    eyebrow: { en: "Points", ar: "النقاط" },
    title: { en: "Pricing that shows its work.", ar: "أسعار واضحة، وكل نقطة محسوبة." },
    body: {
      en: "Every automation draws from the same points pack. Clear, predictable cost per interaction with no monthly lock-in.",
      ar: "تسحب كل أتمتة من رصيد النقاط نفسه. تكلفة واضحة ومحددة لكل تفاعل، من دون اشتراك شهري إلزامي.",
    },
    note: { en: "Prices in USD. Billed through Shopify.", ar: "الأسعار بالدولار، وتُفوتر عبر Shopify." },
    cost: {
      en: "A full order journey — confirmation, shipping, and review — costs about 4 points: under 10¢.",
      ar: "رحلة الطلب كاملة — تأكيد، وشحن، وتقييم — تكلّف نحو 4 نقاط: أقل من 10 سنتات.",
    },
  },
  faq: {
    eyebrow: { en: "Before you start", ar: "قبل أن تبدأ" },
    title: { en: "Questions worth answering.", ar: "أسئلة تستحق إجابات." },
    body: {
      en: "A few practical answers about the number, the messages, and what happens when the bot should stop.",
      ar: "إجابات مباشرة عن الرقم، والرسائل، والوقت الذي يتوقف فيه Whano ليترك لك المحادثة.",
    },
  },
  // The live App Store rating, as a snapshot. Check the listing before editing.
  rating: {
    value: "5.0",
    label: { en: "on the Shopify App Store", ar: "على متجر تطبيقات Shopify" },
    url: "https://apps.shopify.com/whano",
  },
  trustStrip: {
    items: [
      { en: "Official WhatsApp Cloud API from Meta", ar: "واجهة WhatsApp Cloud الرسمية من Meta" },
      { en: "Meta-approved message templates", ar: "قوالب رسائل معتمدة من Meta" },
      { en: "No number to link, nothing to maintain", ar: "بلا ربط أرقام ولا صيانة" },
      { en: "Your data stays in your Shopify store", ar: "بياناتك تبقى في متجرك على Shopify" },
    ],
  },
  shipping: {
    eyebrow: { en: "Shipping & delivery", ar: "الشحن والتوصيل" },
    title: { en: "From creating the shipment to the customer's door.", ar: "من إنشاء الشحنة إلى باب العميل." },
    body: {
      en: "Whano connects to your carrier, creates the shipment once the customer confirms, and follows its state until delivery — with the exceptions visible before they become phone calls.",
      ar: "يتصل Whano بشركة الشحن لديك، وينشئ الشحنة بعد تأكيد العميل، ويتابع حالتها حتى التسليم — مع إظهار التعثر قبل أن يتحول إلى مكالمات.",
    },
    carriersLabel: { en: "Connected carriers", ar: "شركات الشحن المتصلة" },
    carriers: [
      { en: "Bosta", ar: "بوسطة" },
      { en: "ShipBlu", ar: "شيب بلو" },
      { en: "Aramex", ar: "أرامكس" },
      { en: "Mylerz", ar: "ميلرز" },
    ],
    carriersNote: { en: "Egypt and the region's main carriers.", ar: "أبرز شركات الشحن في مصر والمنطقة." },
    items: [
      {
        title: { en: "The confirmed order becomes a shipment", ar: "الطلب المؤكد يتحول إلى شحنة" },
        body: {
          en: "The address, the phone, and the order details go to the carrier without re-typing anything.",
          ar: "يُرسل العنوان والهاتف وتفاصيل الطلب إلى شركة الشحن من دون إعادة كتابة أي شيء.",
        },
      },
      {
        title: { en: "Inspect on delivery", ar: "فحص الشحنة عند الاستلام" },
        body: {
          en: "For Bosta shipments, the customer can open the parcel before paying — the store's own choice, per shipment.",
          ar: "لشحنات بوسطة، يمكن للعميل فحص الشحنة قبل الدفع — قرار المتجر، ولكل شحنة على حدة.",
        },
      },
      {
        title: { en: "Exceptions come with a reason", ar: "التعثر يأتي مع سببه" },
        body: {
          en: "A postponed delivery, a wrong phone number, an address outside coverage — the console shows the carrier's own reason and how long it has been stuck.",
          ar: "تأجيل التسليم، أو رقم هاتف خاطئ، أو عنوان خارج التغطية — تعرض لوحة التحكم سبب شركة الشحن نفسه ومدة التعثر.",
        },
      },
      {
        title: { en: "Tracking that reaches the customer", ar: "تتبع يصل إلى العميل" },
        body: {
          en: "The tracking number and the delivery window go out on WhatsApp, and the order page carries a live tracking button.",
          ar: "يُرسل رقم التتبع وموعد التوصيل على واتساب، وتحمل صفحة الطلب زر تتبع مباشرًا.",
        },
      },
      {
        title: { en: "Delivery performance by area", ar: "أداء التوصيل حسب المنطقة" },
        body: {
          en: "See which cities and governorates deliver on time — measured from your own shipments, not estimates.",
          ar: "اعرف المدن والمحافظات التي تلتزم بمواعيد التسليم — مقيسة من شحناتك نفسها، لا من تقديرات.",
        },
      },
      {
        title: { en: "Stale shipments surface themselves", ar: "الشحنات المتعثرة تظهر تلقائيًا" },
        body: {
          en: "A parcel that has not moved in days is flagged in the console instead of waiting for the customer to notice.",
          ar: "الشحنة التي لم تتحرك منذ أيام تُعلَّم في لوحة التحكم بدل انتظار ملاحظة العميل.",
        },
      },
    ],
  },
  orderPage: {
    eyebrow: { en: "The order page", ar: "صفحة الطلب" },
    title: { en: "One link answers \"where is my order?\"", ar: "رابط واحد يجيب عن «طلبي فين؟»" },
    body: {
      en: "Every confirmation carries a link to the order page: the status, the items, the total, the tracking, and the delivery address — on the customer's phone, in the store's name.",
      ar: "يحمل كل تأكيد رابطًا إلى صفحة الطلب: الحالة، والمنتجات، والإجمالي، والتتبع، وعنوان التوصيل — على هاتف العميل وباسم متجرك.",
    },
    items: [
      { en: "A status timeline the customer reads at a glance", ar: "مسار حالة واضح يقرأه العميل بلمحة" },
      { en: "A tracking button that opens the carrier's page", ar: "زر تتبع يفتح صفحة شركة الشحن" },
      { en: "The address stays hidden until the phone number on the order is entered", ar: "يبقى العنوان مخفيًا حتى يُدخل رقم الهاتف المسجل في الطلب" },
      { en: "A problem report from the page opens a real support ticket", ar: "بلاغ المشكلة من الصفحة يفتح تذكرة دعم حقيقية" },
      { en: "Links expire after 30 days", ar: "تنتهي صلاحية الروابط بعد 30 يومًا" },
    ],
    note: { en: "No app, no account, no password — the link is the key.", ar: "بلا تطبيق، وبلا حساب، وبلا كلمة مرور — الرابط هو المفتاح." },
    shotAlt: { en: "A Whano order page on a phone", ar: "صفحة طلب من Whano على الهاتف" },
  },
  outcomes: {
    eyebrow: { en: "The outcome", ar: "النتيجة" },
    title: { en: "Fewer questions. Fewer cancellations. More reviews.", ar: "أسئلة أقل. إلغاءات أقل. تقييمات أكثر." },
    items: [
      {
        title: { en: "The status arrives before the question", ar: "الحالة تصل قبل السؤال" },
        body: {
          en: "Confirmation, shipping, delivery — each one reaches the customer on WhatsApp before they have to ask.",
          ar: "التأكيد، ثم الشحن، ثم التوصيل — كل خطوة تصل العميل على واتساب قبل أن يسأل.",
        },
      },
      {
        title: { en: "Cancellations happen before fulfillment, not after", ar: "الإلغاء يحدث قبل التجهيز لا بعده" },
        body: {
          en: "A customer who changes their mind does it in the same conversation, and Shopify is updated before the parcel moves.",
          ar: "العميل الذي يغيّر رأيه يفعلها في المحادثة نفسها، ويُحدَّث Shopify قبل تحرك الشحنة.",
        },
      },
      {
        title: { en: "Reviews actually arrive", ar: "التقييمات تصل فعلًا" },
        body: {
          en: "A simple ask after delivery, one reminder if the tap was missed, and a private path when the experience was bad.",
          ar: "سؤال بسيط بعد التوصيل، وتذكير واحد إن فاتت الضغطة، ومسار خاص عندما تكون التجربة سيئة.",
        },
      },
      {
        title: { en: "Your team stops copying between screens", ar: "فريقك يتوقف عن النسخ بين الشاشات" },
        body: {
          en: "Order data lives in Shopify; the conversation lives in WhatsApp; Whano keeps the two in step without a person in the middle.",
          ar: "بيانات الطلب في Shopify، والمحادثة في واتساب، ويبقيهما Whano متطابقين من دون شخص في المنتصف.",
        },
      },
    ],
    cost: {
      en: "A full order journey — confirmation, shipping, and review — costs about 4 points: under 10¢.",
      ar: "رحلة الطلب كاملة — تأكيد، وشحن، وتقييم — تكلّف نحو 4 نقاط: أقل من 10 سنتات.",
    },
    costNote: {
      en: "Points from $10 per 500, billed on your Shopify invoice.",
      ar: "النقاط تبدأ من 10 دولارات لكل 500 نقطة، وتُفوتر على فاتورة Shopify.",
    },
  },
  faqTeaser: {
    eyebrow: { en: "Before you install", ar: "قبل التثبيت" },
    title: { en: "The questions worth asking first.", ar: "الأسئلة التي تستحق أن تُطرح أولًا." },
    all: { en: "All questions", ar: "كل الأسئلة" },
  },
  consoleTour: {
    eyebrow: { en: "The console", ar: "لوحة التحكم" },
    title: { en: "One screen for everything the order touches.", ar: "شاشة واحدة لكل ما يلمسه الطلب." },
    body: {
      en: "Orders, shipments, conversations, and reports sit in one place — so the next step is never a guess.",
      ar: "الطلبات، والشحنات، والمحادثات، والتقارير في مكان واحد — حتى لا تكون الخطوة التالية تخمينًا.",
    },
    cta: { en: "See everything it does", ar: "اطّلع على كل ما تفعله" },
    panels: [
      {
        tab: { en: "Overview", ar: "نظرة عامة" },
        caption: {
          en: "The day at a glance: orders, points left, and who is waiting on you.",
          ar: "اليوم من نظرة واحدة: الطلبات، والنقاط المتاحة، ومن ينتظر ردًّا منك.",
        },
        kpis: [
          { label: { en: "Orders today", ar: "طلبات اليوم" }, value: "12" },
          { label: { en: "Points left", ar: "النقاط المتاحة" }, value: "4,280" },
          { label: { en: "Awaiting reply", ar: "بانتظار رد" }, value: "3" },
        ],
        rows: [
          { id: "#1036", state: { en: "Confirmed", ar: "مؤكد" }, amount: "650 EGP" },
          { id: "#1035", state: { en: "Shipped", ar: "تم الشحن" }, amount: "1,240 EGP" },
          { id: "#1034", state: { en: "Delivered", ar: "تم التوصيل" }, amount: "310 EGP" },
        ],
      },
      {
        tab: { en: "Shipments", ar: "الشحنات" },
        caption: {
          en: "Every parcel's state, and the carrier's own reason when something goes wrong.",
          ar: "حالة كل شحنة، والسبب الذي تذكره شركة الشحن عند حدوث خلل.",
        },
        rows: [
          { id: "BST-884213", state: { en: "On the way", ar: "في الطريق" }, carrier: "Bosta" },
          { id: "SBL-221074", state: { en: "Delivered", ar: "تم التوصيل" }, carrier: "ShipBlu" },
          { id: "ARX-553091", state: { en: "Postponed", ar: "تم التأجيل" }, carrier: "Aramex" },
        ],
      },
      {
        tab: { en: "Chats", ar: "المحادثات" },
        caption: {
          en: "What the bot sent, what the customer answered, and when a person should step in.",
          ar: "ما أرسله البوت، وما أجاب به العميل، ومتى ينبغي أن يتدخل شخص.",
        },
        bubbles: [
          { from: "bot", text: { en: "Order #1036 confirmed — tracking follows on shipping.", ar: "تم تأكيد الطلب #1036 — التتبع يلي عند الشحن." } },
          { from: "customer", text: { en: "Add one more cap please", ar: "أضف كاب واحد كمان من فضلك" } },
          { from: "bot", text: { en: "Added. New total: 800 EGP.", ar: "تمت الإضافة. الإجمالي الجديد: 800 EGP." } },
        ],
        badge: { en: "Ticket opened for an exchange", ar: "فُتحت تذكرة لطلب استبدال" },
      },
    ],
  },
  audience: {
    eyebrow: { en: "Who it's for", ar: "لمن Whano" },
    title: { en: "Built for stores where every order is a conversation.", ar: "مصمم للمتاجر التي تجعل كل طلب محادثة." },
    items: [
      {
        title: { en: "Fashion and accessories", ar: "الأزياء والإكسسوارات" },
        body: {
          en: "Size, colour, and quantity changes are normal here. Whano handles them in the conversation before the parcel is packed, and asks for the review once it arrives.",
          ar: "تغيّر المقاس واللون والكمية شائع هنا. يعالجها Whano في المحادثة قبل تغليف الشحنة، ويسأل عن التقييم بعد وصولها.",
        },
      },
      {
        title: { en: "Cash-on-delivery sellers", ar: "متاجر الدفع عند الاستلام" },
        body: {
          en: "Every order starts with an explicit confirmation on WhatsApp, so the parcel ships against a confirmed total — not a guess.",
          ar: "كل طلب يبدأ بتأكيد صريح على واتساب، فتُشحن الشحنة على أساس إجمالي مؤكد، لا على التخمين.",
        },
      },
      {
        title: { en: "Teams running several stores", ar: "فرق تدير أكثر من متجر" },
        body: {
          en: "One console for every store, each with its own orders, messages, points, and settings — plus a change log of who did what.",
          ar: "لوحة واحدة لكل متجر، ولكل منها طلباته ورسائله ونقاطه وإعداداته — مع سجل تغييرات يوضّح من فعل ماذا.",
        },
      },
    ],
  },
  cta: {
    title: { en: "Keep the next order moving after checkout.", ar: "اجعل الطلب القادم يكمل رحلته حتى النهاية." },
    body: {
      en: "Install Whano on your Shopify store and start automating post-purchase conversations today.",
      ar: "ثبّت Whano على متجرك على Shopify وابدأ أتمتة محادثات ما بعد الشراء اليوم.",
    },
    button: { en: "Install on Shopify", ar: "ثبّت على Shopify" },
    login: { en: "Already using Whano? Log in", ar: "تستخدم Whano بالفعل؟ سجّل الدخول" },
    reassurance: [
      { en: "Free to install", ar: "التثبيت مجاني" },
      { en: "100 points included to test it", ar: "100 نقطة مجانية للتجربة" },
      { en: "No monthly subscription", ar: "من دون اشتراك شهري" },
      { en: "Uninstall anytime", ar: "يمكنك إلغاء التثبيت في أي وقت" },
    ],
  },
  footer: {
    descriptor: { en: "Post-purchase WhatsApp automation for Shopify.", ar: "أتمتة تواصل ما بعد الشراء لمتاجر Shopify." },
    tagline: {
      en: "Confirm orders, ship them, track them, and ask for the review — on WhatsApp, automatically.",
      ar: "أكّد الطلبات، وشحّنها، وتتبعها، واطلب تقييمها — على واتساب، وبشكل تلقائي.",
    },
    trust: [
      { en: "Official WhatsApp Cloud API", ar: "واتساب Cloud API الرسمية" },
      { en: "Billed through Shopify", ar: "الفوترة عبر Shopify" },
    ],
    productLabel: { en: "Product", ar: "المنتج" },
    productLinks: [
      { href: "/features", label: { en: "Features", ar: "المزايا" } },
      { href: "/pricing", label: { en: "Pricing", ar: "الأسعار" } },
      { href: "/#shipping", label: { en: "Shipping & carriers", ar: "الشحن وشركات الشحن" } },
      { href: "/#order-page", label: { en: "The order page", ar: "صفحة الطلب" } },
    ],
    resourcesLabel: { en: "Resources", ar: "الموارد" },
    resourcesLinks: [
      { href: "/faq", label: { en: "Questions", ar: "الأسئلة الشائعة" } },
      { href: "/guides", label: { en: "Guides", ar: "الأدلة" } },
      { href: "/whats-new", label: { en: "What's new", ar: "ما الجديد" } },
      { href: "/security", label: { en: "Security & data", ar: "الأمان والبيانات" } },
    ],
    companyLabel: { en: "Company", ar: "الشركة" },
    companyLinks: [
      { href: "/about", label: { en: "About", ar: "من نحن" } },
      { href: "https://whano.nomeda.tech/dashboard", label: { en: "Console", ar: "لوحة التحكم" }, external: true, console: true },
      { href: "https://apps.shopify.com/whano", label: { en: "App Store", ar: "متجر التطبيقات" }, external: true },
    ],
    language: { en: "العربية", ar: "English" },
    credit: { en: "A NomedaCo product", ar: "منتج من NomedaCo" },
    backToTop: { en: "Back to top", ar: "العودة إلى الأعلى" },
    contact: { en: "whano@nomeda.tech", ar: "whano@nomeda.tech" },
    contactLabel: { en: "Email", ar: "البريد الإلكتروني" },
    copyright: { en: "© 2026 Whano, a NomedaCo product.", ar: "© 2026 Whano، منتج من NomedaCo." },
    shopifyBadge: { en: "Available on the Shopify App Store", ar: "متوفر على متجر تطبيقات Shopify" },
    legal: {
      label: { en: "Legal", ar: "قانوني" },
      privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      terms: { en: "Terms of Service", ar: "شروط الخدمة" },
      dpa: { en: "Data Processing Agreement", ar: "اتفاقية معالجة البيانات" },
      security: { en: "Security & data", ar: "الأمان والبيانات" },
    },
    socialLabel: { en: "Follow us", ar: "تابعنا" },
  },
  loginPage: {
    eyebrow: { en: "Whano / console", ar: "Whano / لوحة التحكم" },
    title: { en: "Your store's console.", ar: "لوحة تحكم متجرك." },
    body: {
      en: "Orders, conversations, controls, and reports. If you are signed out, the same address takes you to the login page.",
      ar: "الطلبات، والمحادثات، والتحكم، والتقارير. وإذا لم تكن مسجّلًا للدخول، ينقلك العنوان نفسه إلى صفحة تسجيل الدخول.",
    },
    button: { en: "Go to the console", ar: "الانتقال إلى لوحة التحكم" },
  },
  featuresPage: {
    eyebrow: { en: "Whano / features", ar: "Whano / المزايا" },
    title: { en: "Everything the console does.", ar: "كل ما تفعله لوحة التحكم." },
    body: {
      en: "From the first confirmation to the report that shows what it earned you. Each automation has a clear job and a visible cost.",
      ar: "من أول تأكيد للطلب حتى التقرير الذي يوضح عائده. لكل أتمتة مهمة واضحة وتكلفة ظاهرة.",
    },
  },
  pricingPage: {
    eyebrow: { en: "Whano / pricing", ar: "Whano / الأسعار" },
    title: { en: "One currency: points.", ar: "عملة واحدة: النقاط." },
    body: {
      en: "Buy a points pack, spend it across the automations you enable, and watch the balance in the console. No monthly subscription.",
      ar: "اشترِ باقة نقاط، واستخدمها في الأتمتات التي تفعّلها، وتابع الرصيد في لوحة التحكم. من دون اشتراك شهري.",
    },
  },
} as const;

export const orderFlow = [
  {
    number: "01",
    title: { en: "Order received", ar: "وصول طلب جديد" },
    body: { en: "Shopify sends the order details.", ar: "يرسل Shopify تفاصيل الطلب." },
  },
  {
    number: "02",
    title: { en: "Confirmation sent", ar: "إرسال التأكيد" },
    body: { en: "Whano opens the conversation on WhatsApp.", ar: "يبدأ Whano المحادثة على واتساب." },
  },
  {
    number: "03",
    title: { en: "Customer reviews it", ar: "مراجعة الطلب" },
    body: { en: "The customer confirms or asks for a change.", ar: "يؤكّد العميل الطلب أو يطلب تعديلًا." },
  },
  {
    number: "04",
    title: { en: "The loop closes", ar: "إغلاق الدائرة" },
    body: { en: "Shipping updates and a review request follow.", ar: "تُرسل بعدها تحديثات الشحن وطلب التقييم." },
  },
] as const;

export interface Feature {
  number: string;
  title: Localized;
  body: Localized;
  detail: Localized;
  /** Shown in the homepage capability grid; the rest live on /features. */
  featured?: boolean;
}

export interface FeatureGroup {
  id: string;
  title: Localized;
  body: Localized;
  items: Feature[];
}

/**
 * Every capability the console actually ships, grouped for the features page.
 *
 * The first six items double as the homepage teaser, so the order here is
 * also the order a reader meets them in.
 */
export const featureGroups: FeatureGroup[] = [
  {
    id: "order",
    title: { en: "From order to delivery", ar: "من الطلب إلى التسليم" },
    body: {
      en: "The part that runs on every order, without anyone touching it.",
      ar: "ما يعمل تلقائيًا مع كل طلب، من دون أن يلمسه أحد.",
    },
    items: [
      {
        number: "01",
        featured: true,
        title: { en: "Confirm without chasing", ar: "أكّد الطلب من دون مطاردة" },
        body: {
          en: "A new order starts a clear WhatsApp conversation. The customer sees the items, total, and next step before you have to ask for anything.",
          ar: "يبدأ الطلب الجديد محادثة واضحة على واتساب: يرى العميل المنتجات والإجمالي والخطوة التالية من دون أن تنتظر ردًا أو تسأل.",
        },
        detail: { en: "Order confirmation (~1 point)", ar: "تأكيد الطلب (~1 نقطة)" },
      },
      {
        number: "02",
        featured: true,
        title: { en: "Let customers change their mind", ar: "دع العميل يعدّل طلبه" },
        body: {
          en: "Whano suggests products customers often buy together, then handles adding an item, changing its quantity, or cancelling before fulfillment. The Shopify order stays current.",
          ar: "يقترح Whano منتجات يشتريها العملاء معًا عادةً، ثم يتعامل مع الإضافة أو تغيير الكمية أو الإلغاء قبل التجهيز، ويبقى طلب Shopify محدثًا.",
        },
        detail: { en: "Natural-language order edits (~1 pt/msg)", ar: "تعديلات الطلب بالعبارات الطبيعية (~1 نقطة/رسالة)" },
      },
      {
        number: "03",
        title: { en: "Ship with fewer questions", ar: "شحن بأسئلة أقل" },
        body: {
          en: "When the order is fulfilled, send the tracking number and the delivery window automatically. The customer knows the order status and expected arrival.",
          ar: "عند تجهيز الطلب، يُرسل رقم التتبع وموعد التوصيل تلقائيًا، فيعرف العميل حالة طلبه وموعد وصوله المتوقع.",
        },
        detail: { en: "Shipping notification (~1 point)", ar: "تحديث الشحن (~1 نقطة)" },
      },
      {
        number: "04",
        featured: true,
        title: { en: "A shipping console, not just a message", ar: "لوحة شحن كاملة، لا رسالة فقط" },
        body: {
          en: "After the customer confirms, Whano creates the shipment with your carrier, follows its state, and shows exceptions with the carrier's own reason — Bosta, ShipBlu, Aramex, and Mylerz.",
          ar: "بعد تأكيد العميل، ينشئ Whano الشحنة لدى شركة الشحن، ويتابع حالتها، ويعرض تعثر التوصيل مع السبب الذي تذكره الشركة — بوسطة، وشيب بلو، وأرامكس، وميلرز.",
        },
        detail: { en: "Shipments & carriers", ar: "الشحنات وشركات الشحن" },
      },
      {
        number: "05",
        featured: true,
        title: { en: "A live order page the customer can open", ar: "صفحة طلب حية يفتحها العميل" },
        body: {
          en: "Every confirmation carries a link: the status, the items, the total, and a tracking button. The delivery address stays hidden until the phone number on the order is entered.",
          ar: "يحمل كل تأكيد رابطًا: الحالة، والمنتجات، والإجمالي، وزر تتبع. ويبقى عنوان التوصيل مخفيًا حتى يُدخل رقم الهاتف المسجل في الطلب.",
        },
        detail: { en: "The customer order page", ar: "صفحة الطلب للعميل" },
      },
      {
        number: "06",
        featured: true,
        title: { en: "Ask for the review, and ask again", ar: "اطلب التقييم، واطلبه مرة أخرى" },
        body: {
          en: "After delivery, Whano asks a simple question. If no rating arrives, it asks once more after a delay, so a missed tap does not cost you the review.",
          ar: "بعد التوصيل، يطرح Whano سؤالًا بسيطًا. وإذا لم يصل تقييم، يعيد السؤال مرة أخرى بعد فترة، حتى لا تضيع المراجعة بسبب ضغطة فائتة.",
        },
        detail: { en: "Post-delivery review + recovery (~2 points)", ar: "تقييم بعد التوصيل + متابعة (~2 نقطة)" },
      },
      {
        number: "07",
        featured: true,
        title: { en: "Handle returns with your store policy", ar: "تعامل مع الاستبدال والاسترجاع بسياسة متجرك" },
        body: {
          en: "When a customer requests an exchange or refund, Whano opens a support ticket, shares your return policy and contact number, and notifies your team immediately.",
          ar: "إذا طلب العميل استبدالًا أو استرجاعًا، يفتح Whano تذكرة دعم، ويوضح سياسة الاستبدال ورقم التواصل، ويرسل إشعارًا فوريًا لفريقك.",
        },
        detail: { en: "Support & returns (~2 points)", ar: "تذاكر الدعم والاسترجاع (~2 نقطة)" },
      },
    ],
  },
  {
    id: "growth",
    title: { en: "Growth and follow-through", ar: "النمو والمتابعة" },
    body: {
      en: "Turning a finished order into the next one — with consent and a clear limit.",
      ar: "تحويل الطلب المكتمل إلى الطلب التالي، بموافقة العميل وحدود واضحة.",
    },
    items: [
      {
        number: "08",
        title: { en: "Discount codes when you need them", ar: "أكواد خصم عند الحاجة" },
        body: {
          en: "Create a promo code in the console and share it with customers on WhatsApp, or attach it to a campaign. Expiry and usage limits are yours to set.",
          ar: "أنشئ كود خصم من لوحة التحكم وشاركه مع العملاء على واتساب، أو أرفقه بحملة. مدة الصلاحية وحدود الاستخدام بيدك.",
        },
        detail: { en: "Promo codes", ar: "أكواد الخصم" },
      },
      {
        number: "09",
        title: { en: "Campaigns to customers who opted in", ar: "حملات للعملاء الموافقين" },
        body: {
          en: "Send offers to customers who agreed to receive them. Every campaign respects quiet hours, and every message carries a way to unsubscribe.",
          ar: "أرسل العروض إلى العملاء الذين وافقوا على استقبالها. تحترم كل حملة ساعات الهدوء، وتحمل كل رسالة طريقة لإلغاء الاشتراك.",
        },
        detail: { en: "Marketing campaigns", ar: "حملات التسويق" },
      },
      {
        number: "10",
        title: { en: "Reports that come from your orders", ar: "تقارير مستمدة من طلباتك" },
        body: {
          en: "Sales, cancellations, message delivery, and growth over time — measured from your own store data, not estimates.",
          ar: "المبيعات، والإلغاءات، وتسليم الرسائل، والنمو عبر الوقت — كلها مقيسة من بيانات متجرك نفسها، لا من تقديرات.",
        },
        detail: { en: "Sales & store health", ar: "المبيعات وصحة المتجر" },
      },
      {
        number: "11",
        title: { en: "Points you can see", ar: "نقاط تراها بوضوح" },
        body: {
          en: "The console shows what each automation costs, what the week spent, and how many days the balance still covers at your pace.",
          ar: "توضح لوحة التحكم تكلفة كل أتمتة، وما استُهلك خلال الأسبوع، وكم يومًا يكفي الرصيد بوتيرتك الحالية.",
        },
        detail: { en: "Points & billing", ar: "النقاط والفوترة" },
      },
      {
        number: "12",
        title: { en: "A push when something needs you", ar: "إشعار عندما يحتاجك أمر ما" },
        body: {
          en: "New orders, a customer waiting for support, or a reply from the team — you can receive them as push notifications on your phone.",
          ar: "طلب جديد، أو عميل ينتظر الدعم، أو رد من الفريق — يمكنك استقبالها كإشعارات فورية على هاتفك.",
        },
        detail: { en: "Push notifications", ar: "الإشعارات الفورية" },
      },
    ],
  },
  {
    id: "control",
    title: { en: "Control and trust", ar: "التحكم والثقة" },
    body: {
      en: "The switches that keep a human in charge, and the records that prove what happened.",
      ar: "المفاتيح التي تُبقي القرار بيد إنسان، والسجلات التي توثق ما حدث.",
    },
    items: [
      {
        number: "13",
        title: { en: "One panel for every switch", ar: "لوحة واحدة لكل المفاتيح" },
        body: {
          en: "Pause all sends, set business hours, choose how long to wait before each step, and switch each automation on or off. Every change is logged and can be reverted.",
          ar: "أوقف كل الإرسال، وحدد ساعات العمل، واختر مدة الانتظار قبل كل خطوة، وفعّل كل أتمتة أو أوقفها. كل تغيير يُسجَّل ويمكن التراجع عنه.",
        },
        detail: { en: "Controls & change history", ar: "التحكم وسجل التغييرات" },
      },
      {
        number: "14",
        title: { en: "See every conversation, step in when needed", ar: "اطّلع على كل محادثة، وتدخّل عند الحاجة" },
        body: {
          en: "The message log shows what was sent and what the customer answered. When a conversation needs a person, automation stops and hands it over.",
          ar: "يوضح سجل الرسائل ما أُرسل وما أجاب به العميل. وإذا احتاجت المحادثة إلى شخص، تتوقف الأتمتة وتعيدها إليك.",
        },
        detail: { en: "Chats & human takeover", ar: "المحادثات والتدخل البشري" },
      },
      {
        number: "15",
        title: { en: "Answers grounded in your policies", ar: "إجابات مبنية على سياساتك" },
        body: {
          en: "Keep your store policies and common answers in one place. Whano uses them when a customer asks, instead of inventing a reply.",
          ar: "احتفظ بسياسات متجرك وإجاباته الشائعة في مكان واحد. يستخدمها Whano عندما يسأل عميل، بدل اختراع رد.",
        },
        detail: { en: "Knowledge & policies", ar: "المعرفة والسياسات" },
      },
      {
        number: "16",
        title: { en: "No number, no Meta approval, no risk", ar: "بلا أرقام ولا موافقات Meta ولا مخاطرة" },
        body: {
          en: "Verified WhatsApp messaging runs on Whano's infrastructure. Nothing to link, nothing to maintain, and your personal number stays yours.",
          ar: "تعمل رسائل واتساب الموثقة على بنية Whano التحتية. لا شيء لربطه، ولا شيء لصيانته، ويبقى رقمك الشخصي لك.",
        },
        detail: { en: "Instant setup", ar: "إعداد فوري" },
      },
      {
        number: "17",
        title: { en: "More than one store? One console.", ar: "أكثر من متجر؟ لوحة واحدة." },
        body: {
          en: "Each store keeps its own orders, messages, points, and settings, and the console switches between them without mixing a thing.",
          ar: "يحتفظ كل متجر بطلباته ورسائله ونقاطه وإعداداته، وتتنقل لوحة التحكم بينها من دون أي خلط.",
        },
        detail: { en: "Multi-store", ar: "تعدد المتاجر" },
      },
    ],
  },
];

/** Flat list for teasers and counts. */
export const features: Feature[] = featureGroups.flatMap((group) => group.items);

export const pricingFeatures = [
  { en: "~1 point per confirmation or cancellation", ar: "~1 نقطة لكل تأكيد أو إلغاء طلب" },
  { en: "~1 point per shipping notification", ar: "~1 نقطة لكل إشعار شحن" },
  { en: "~2 points per delivery & rating follow-up", ar: "~2 نقطتا لكل تقييم ومتابعة بعد التوصيل" },
  { en: "~1 point per order edit message", ar: "~1 نقطة لكل رسالة تعديل طلب" },
  { en: "~2 points per support & returns interaction", ar: "~2 نقطتان لكل تفاعل دعم أو استرجاع" },
  { en: "No monthly subscription, points never expire", ar: "من دون اشتراك شهري، والنقاط لا تنتهي" },
  { en: "Billed directly on your Shopify invoice", ar: "الفاتورة على حساب Shopify مباشرة" },
] as const;

export const pricingFaqs = [
  {
    question: { en: "What happens when my points run out?", ar: "ماذا يحدث عندما تنفد نقاطي؟" },
    answer: {
      en: "Sending pauses; nothing else changes. Your orders, chats and settings stay exactly where they are, and everything resumes the moment you top up.",
      ar: "يتوقف الإرسال، ولا يتغير شيء آخر. تبقى طلباتك ومحادثاتك وإعداداتك كما هي، ويعود كل شيء للعمل فور شحن الرصيد.",
    },
  },
  {
    question: { en: "How am I billed?", ar: "كيف تتم الفاتورة؟" },
    answer: {
      en: "Through your Shopify invoice, in USD. You buy a points pack once; there is no monthly subscription and no automatic renewal.",
      ar: "عبر فاتورة Shopify بالدولار. تشتري باقة النقاط مرة واحدة، من دون اشتراك شهري ومن دون تجديد تلقائي.",
    },
  },
  {
    question: { en: "Do unused points expire?", ar: "هل تنتهي صلاحية النقاط غير المستخدمة؟" },
    answer: {
      en: "No. Points stay in your balance until an automation spends them, and the console shows what each automation costs and how many days the balance still covers.",
      ar: "لا. تبقى النقاط في رصيدك حتى تستهلكها الأتمتات، وتوضح لوحة التحكم تكلفة كل أتمتة وكم يومًا يكفي الرصيد.",
    },
  },
  {
    question: { en: "What if I stop using Whano?", ar: "ماذا لو توقفت عن استخدام Whano؟" },
    answer: {
      en: "Nothing is charged again — there is no subscription to cancel. You can pause every send from the console, and uninstalling keeps your Shopify orders and history untouched.",
      ar: "لن تُحصَّل أي مبالغ أخرى، فلا يوجد اشتراك لإلغائه. يمكنك إيقاف كل الإرسال من لوحة التحكم، وإلغاء التثبيت لا يمس طلباتك أو سجلك في Shopify.",
    },
  },
] as const;

export const plans = [
  {
    name: { en: "Starter", ar: "البداية" },
    points: { en: "500 points", ar: "500 نقطة" },
    price: { en: "$10", ar: "$10" },
    originalPrice: { en: "$15", ar: "$15" },
    description: { en: "For a store just getting started with WhatsApp automations.", ar: "لمتجر بدأ تجربة أتمتة واتساب." },
    popular: false,
  },
  {
    name: { en: "Plus", ar: "بلس" },
    points: { en: "1,000 points", ar: "1,000 نقطة" },
    price: { en: "$19", ar: "$19" },
    originalPrice: { en: "$35", ar: "$35" },
    description: { en: "For a store past its first month and ordering regularly.", ar: "لمتجر تجاوز شهره الأول وطلباته منتظمة." },
    popular: false,
  },
  {
    name: { en: "Growth", ar: "النمو" },
    points: { en: "2,000 points", ar: "2,000 نقطة" },
    price: { en: "$36", ar: "$36" },
    originalPrice: { en: "$70", ar: "$70" },
    description: { en: "For a growing store running automations on most orders.", ar: "لمتجر ينمو ويشغّل الأتمتة على معظم الطلبات." },
    popular: true,
  },
  {
    name: { en: "Pro", ar: "برو" },
    points: { en: "3,500 points", ar: "3,500 نقطة" },
    price: { en: "$59", ar: "$59" },
    originalPrice: { en: "$105", ar: "$105" },
    description: { en: "For a busy store that tops up every couple of months.", ar: "لمتجر مشغول يعيد التعبئة كل شهرين تقريبًا." },
    popular: false,
  },
  {
    name: { en: "Enterprise", ar: "الشركات" },
    points: { en: "Custom", ar: "مخصص" },
    price: { en: "Talk to us", ar: "تواصل معنا" },
    originalPrice: null,
    description: { en: "Need a custom volume or a higher point bundle?", ar: "تحتاج حجمًا مخصصًا أو باقة نقاط أكبر؟" },
    popular: false,
    isEnterprise: true,
  },
] as const;

export const planPricesUsd = [10, 19, 36, 59, null] as const;

export const faqs = [
  {
    home: true,
    question: { en: "Do I need my own WhatsApp Business number?", ar: "هل أحتاج إلى رقم واتساب خاص بي أو إعدادات معقدة؟" },
    answer: {
      en: "No. Whano uses a unified, verified WhatsApp infrastructure for all merchants. Your messages are sent instantly with your store name and order details, with no QR code scanning, no Meta API accounts, and zero number maintenance.",
      ar: "لا. يستخدم Whano بنية واتساب موحدة وموثقة لجميع المتاجر. تُرسل رسائلك فورًا باسم متجرك وتفاصيل الطلب، من دون مسح رموز QR، ولا حسابات Meta API، ومن دون أي صيانة للأرقام.",
    },
  },
  {
    question: { en: "Will the messages sound robotic?", ar: "هل ستبدو الرسائل آلية؟" },
    answer: {
      en: "You control the message templates and store details. Arabic and English messages are written to sound natural, and you can adjust the wording to match your brand.",
      ar: "أنت من يتحكم في قوالب الرسائل وتفاصيل المتجر. الرسائل بالعربية والإنجليزية مكتوبة بلغة طبيعية، ويمكنك تعديل الصياغة بما يناسب علامتك.",
    },
  },
  {
    question: { en: "Can a customer change an order after placing it?", ar: "هل يمكن للعميل تعديل الطلب بعد إرساله؟" },
    answer: {
      en: "Yes, before fulfillment. Whano can suggest products customers often buy together, then handle adding an item, changing its quantity, or cancelling the order. The Shopify order stays current.",
      ar: "نعم، قبل تجهيز الطلب. يمكن لـ Whano أن يقترح منتجات يشتريها العملاء معًا عادةً، ثم يتعامل مع الإضافة أو تغيير الكمية أو الإلغاء، ويبقى طلب Shopify محدثًا.",
    },
  },
  {
    question: { en: "What happens when a conversation needs me?", ar: "ماذا يحدث عندما تحتاج المحادثة إليّ؟" },
    answer: {
      en: "Automation pauses and hands the conversation back to you. You can step in when a question needs judgment, context, or a human answer.",
      ar: "تتوقف الأتمتة وتعيد المحادثة إليك. يمكنك التدخل عندما يحتاج السؤال إلى قرار أو سياق أو إجابة من شخص حقيقي.",
    },
  },
  {
    question: { en: "How do message points work?", ar: "كيف تُحتسب نقاط الرسائل؟" },
    answer: {
      en: "You buy points in packs. Automations use points as they run, so a confirmation and a review follow-up can have different costs. There is no monthly contract.",
      ar: "تشتري النقاط في باقات. تستهلك الأتمتات النقاط حسب تشغيلها، فقد تختلف تكلفة التأكيد عن متابعة التقييم. ولا يوجد اشتراك شهري.",
    },
  },
  {
    question: { en: "Can I send offers and discounts to customers?", ar: "هل يمكنني إرسال عروض وخصومات للعملاء؟" },
    answer: {
      en: "Yes. Create a promo code, then send a campaign to the customers who agreed to receive offers. Campaigns respect quiet hours, and every message includes a way to unsubscribe.",
      ar: "نعم. أنشئ كود خصم، ثم أرسل حملة إلى العملاء الذين وافقوا على استقبال العروض. تحترم الحملات ساعات الهدوء، وتتضمن كل رسالة طريقة لإلغاء الاشتراك.",
    },
  },
  {
    home: true,
    question: { en: "Does my customer need to install anything?", ar: "هل يحتاج عميلي إلى تثبيت أي شيء؟" },
    answer: {
      en: "No. The customer keeps using WhatsApp exactly as they do today; the conversation arrives from your store's name, and every message is a normal WhatsApp message with buttons.",
      ar: "لا. يستخدم عميلك واتساب كما اعتاد تمامًا؛ تصل المحادثة باسم متجرك، وكل رسالة هي رسالة واتساب عادية بأزرار.",
    },
  },
  {
    question: { en: "Can I use my own WhatsApp number?", ar: "هل يمكنني استخدام رقم واتساب الخاص بي؟" },
    answer: {
      en: "You do not need one. Whano sends from a verified business number on its own infrastructure, so there is no device to link and no risk to your personal number. The store name and details on every message are yours.",
      ar: "لا تحتاج إلى رقم خاص. يرسل Whano من رقم تجاري موثق على بنيته التحتية، فلا يوجد جهاز لربطه ولا خطر على رقمك الشخصي، واسم متجرك وتفاصيله على كل رسالة.",
    },
  },
  {
    question: { en: "I have more than one store. Does that work?", ar: "لديّ أكثر من متجر. هل هذا ممكن؟" },
    answer: {
      en: "Yes. Each store is its own workspace with its own orders, messages, points and settings, and the console switches between them without mixing anything.",
      ar: "نعم. كل متجر مساحة مستقلة بطلباته ورسائله ونقاطه وإعداداته، ولوحة التحكم تتنقل بينها من دون أي خلط.",
    },
  },
  {
    home: true,
    question: { en: "What if I stop using it?", ar: "ماذا لو توقفت عن استخدامه؟" },
    answer: {
      en: "Pause every send from the console whenever you want, and uninstall from Shopify when you are done. Your orders and history stay in Shopify, and no subscription needs cancelling.",
      ar: "أوقف كل الإرسال من لوحة التحكم وقتما تشاء، وألغِ التثبيت من Shopify عند الانتهاء. تبقى طلباتك وسجلك في Shopify، ولا يوجد اشتراك لإلغائه.",
    },
  },
  {
    home: true,
    question: { en: "Does it work with my shipping company?", ar: "هل يعمل مع شركة الشحن التي أتعامل معها؟" },
    answer: {
      en: "Whano connects to Bosta, ShipBlu, Aramex, and Mylerz: it creates the shipment after the customer confirms, follows its state, and shows delivery exceptions with the reason the carrier gives. If you ship through another company, the tracking update still reaches the customer on WhatsApp.",
      ar: "يتصل Whano ببوسطة وشيب بلو وأرامكس وميلرز: ينشئ الشحنة بعد تأكيد العميل، ويتابع حالتها، ويعرض تعثر التوصيل مع السبب الذي تذكره شركة الشحن. وإذا كنت تشحن عبر شركة أخرى، يظل تحديث التتبع يصل إلى العميل على واتساب.",
    },
  },
  {
    question: { en: "Is it right for my store?", ar: "هل يناسب Whano متجري؟" },
    answer: {
      en: "If you use Shopify, sell physical products, and already speak to customers on WhatsApp, Whano is built for the space between a new order and a completed delivery.",
      ar: "إذا كنت تستخدم Shopify، وتبيع منتجات ملموسة، وتتواصل مع عملائك على واتساب، فـ Whano مصمم للمسافة بين الطلب الجديد والتسليم المكتمل.",
    },
  },
] as const;

export const heroConversation: ChatMessage[] = [
  {
    direction: "out",
    en: "We’re checking your order #1042 to confirm the details.\n\nReply YES if everything looks right.",
    ar: "نراجع تفاصيل طلبك رقم 1042 لتأكيده.\n\nاكتب «تأكيد» إذا كانت كل التفاصيل صحيحة.",
  },
  {
    direction: "in",
    en: "Yes, everything looks right.",
    ar: "نعم، كل التفاصيل صحيحة.",
  },
  {
    direction: "out",
    en: "Done, Ahmed. Order #1042 is confirmed.\n\n2 × Cotton T-shirt (360 EGP)\nShipping: 50 EGP\nTotal: 410 EGP\n\nEstimated delivery: 2-3 business days.",
    ar: "تم التأكيد يا أحمد. طلبك رقم 1042 مؤكد.\n\n2 × تيشيرت قطن (360 جنيهًا)\nالشحن: 50 جنيهًا\nالإجمالي: 410 جنيهات\n\nالتوصيل المتوقع خلال 2-3 أيام عمل.",
  },
  {
    direction: "in",
    en: "Can you add one more?",
    ar: "هل يمكن إضافة تيشيرت آخر؟",
  },
  {
    direction: "out",
    en: "Sure. Cotton T-shirt (180 EGP).\nShould I add it to the order?",
    ar: "بالتأكيد. التيشيرت القطن (180 جنيهًا).\nهل أضيفه إلى الطلب؟",
  },
  {
    direction: "in",
    en: "Yes, add it.",
    ar: "نعم، أضفه.",
  },
  {
    direction: "out",
    en: "Added.\nNew total: 590 EGP.",
    ar: "تمت الإضافة.\nالإجمالي الجديد: 590 جنيهًا.",
  },
];
