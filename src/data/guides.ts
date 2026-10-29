import type { Localized } from "./content";

export interface GuideSection {
  heading: Localized;
  body: Localized[];
}

export interface Guide {
  slug: string;
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  intro: Localized;
  readingTime: Localized;
  /** ISO date for the Article schema and the visible byline. */
  published: string;
  sections: GuideSection[];
}

/**
 * Practical guides, written from the flows the product actually runs.
 * Nothing here is a claim about results; it is what to send, when, and why.
 */
export const guides: Guide[] = [
  {
    slug: "whatsapp-order-follow-up",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "Post-purchase follow-up on WhatsApp: a practical guide for Shopify stores",
      ar: "متابعة ما بعد الشراء على واتساب: شرح عملي لمتاجر Shopify",
    },
    description: {
      en: "The four moments that matter after checkout, what to send in each, and the mistakes that turn follow-up into noise.",
      ar: "اللحظات الأربع التي تهم بعد إتمام الشراء، وما يُرسل في كل منها، والأخطاء التي تحوّل المتابعة إلى إزعاج.",
    },
    intro: {
      en: "Most stores lose their customer in the silence between checkout and delivery. This guide is the shortest path through that silence: four messages, sent at four moments, each with one clear job.",
      ar: "معظم المتاجر تفقد عميلها في الصمت بين إتمام الشراء والتسليم. هذا الشرح هو أقصر طريق عبر هذا الصمت: أربع رسائل في أربع لحظات، لكل واحدة مهمة واضحة.",
    },
    readingTime: { en: "6 min read", ar: "6 دقائق قراءة" },
    published: "2026-10-02",
    sections: [
      {
        heading: { en: "1. The confirmation, minutes after checkout", ar: "1. التأكيد، دقائق بعد الشراء" },
        body: [
          {
            en: "Send the order number, the items, the total and the shipping address, and end with what to do next: Confirm, Cancel, or Edit. This is the one message that prevents most of what follows: a customer who confirmed on day one does not ask who you are on day three.",
            ar: "أرسل رقم الطلب والمنتجات والإجمالي وعنوان الشحن، واختم بالخطوة التالية: تأكيد أو إلغاء أو تعديل. هذه هي الرسالة التي تمنع معظم ما يأتي بعدها, فالعميل الذي أكّد في اليوم الأول لا يسأل من أنتم في اليوم الثالث.",
          },
          {
            en: "Keep it one screen. If the order has many items, list the first few and say how many more there are.",
            ar: "اجعلها في شاشة واحدة. وإذا كان الطلب كثير البنود، اذكر أولها وقل كم بندًا آخر.",
          },
        ],
      },
      {
        heading: { en: "2. The reply, the moment it arrives", ar: "2. الرد، لحظة وصوله" },
        body: [
          {
            en: "A customer who taps Confirm should hear back immediately; one who asks for an edit should see the new total before they close the app. The window between a customer's message and your reply is where trust is either built or lost.",
            ar: "من يضغط تأكيد يجب أن يسمع ردًا فورًا، ومن يطلب تعديلًا يجب أن يرى الإجمالي الجديد قبل أن يغلق التطبيق. الفترة بين رسالة العميل وردّك هي حيث تُبنى الثقة أو تُفقد.",
          },
        ],
      },
      {
        heading: { en: "3. The tracking update, when you actually ship", ar: "3. تحديث التتبع، عند الشحن الفعلي" },
        body: [
          {
            en: "Not when the label is printed, but when the parcel is handed over. Send the tracking number and an honest delivery window. A vague \"soon\" is worse than nothing, because it invites the question you are trying to avoid.",
            ar: "لا عند طباعة البوليصة، بل عند تسليم الشحنة. أرسل رقم التتبع وموعدًا واقعيًا للتوصيل. كلمة «قريبًا» المبهمة أسوأ من لا شيء، لأنها تستدعي السؤال الذي تحاول تجنّبه.",
          },
        ],
      },
      {
        heading: { en: "4. The rating request, after delivery", ar: "4. طلب التقييم، بعد التوصيل" },
        body: [
          {
            en: "Ask once, simply, after the parcel has arrived, not the same day it ships. If a customer says the experience was bad, the next message should be options, not a thank-you: exchange, return, or a human. That is what turns a private complaint into a fixed problem instead of a public review.",
            ar: "اسأل مرة واحدة وببساطة بعد وصول الشحنة, لا في يوم إرسالها. وإذا قال العميل إن التجربة سيئة، يجب أن تكون الرسالة التالية خيارات لا شكرًا: استبدال أو استرجاع أو شخص حقيقي. هذا ما يحوّل الشكوى الخاصة إلى مشكلة محلولة بدلًا من مراجعة علنية.",
          },
        ],
      },
      {
        heading: { en: "What not to do", ar: "ما يجب ألا تفعله" },
        body: [
          {
            en: "Do not send marketing inside the order conversation unless the customer opted in, do not ask for a review before delivery, and do not send the same message twice because the first one did not get a reply. Silence is data: it usually means the message arrived outside the customer's hours, not that they ignored you.",
            ar: "لا تُرسل عروضًا داخل محادثة الطلب إلا بموافقة العميل، ولا تطلب تقييمًا قبل التوصيل، ولا تُرسل الرسالة نفسها مرتين لأن الأولى لم تُجب. الصمت بيانات: يعني غالبًا أن الرسالة وصلت خارج ساعات العميل، لا أنه تجاهلك.",
          },
        ],
      },
    ],
  },
  {
    slug: "reduce-wismo",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "How to cut \"where is my order?\" messages",
      ar: "كيف تُقلّل رسائل «طلبي فين؟»",
    },
    description: {
      en: "WISMO is not a support problem, it is a silence problem. Here is the sequence that removes most of it.",
      ar: "سؤال «طلبي فين؟» ليس مشكلة دعم، بل مشكلة صمت. هذا هو التسلسل الذي يزيل معظمه.",
    },
    intro: {
      en: "\"Where is my order?\" arrives for one reason: the customer knows less than you do. Every day between payment and delivery is a day they wonder, and wondering becomes a message, a cancellation, or a refund request.",
      ar: "يأتي سؤال «طلبي فين؟» لسبب واحد: العميل يعرف أقل مما تعرف. كل يوم بين الدفع والتسليم هو يوم يتساءل فيه, والتساؤل يصبح رسالة أو إلغاءً أو طلب استرجاع.",
    },
    readingTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    published: "2026-10-02",
    sections: [
      {
        heading: { en: "Say what you know, when you know it", ar: "قل ما تعرفه، حين تعرفه" },
        body: [
          {
            en: "The order is confirmed, the parcel left the warehouse, the courier has it, it is out for delivery. Each of those is a fact you already have, and each one is a message the customer would otherwise have to ask for.",
            ar: "تم تأكيد الطلب، وخرجت الشحنة من المخزن، وهي مع شركة الشحن، وفي الطريق إليك. كل واحدة من هذه حقيقة تعرفها بالفعل, وكل واحدة رسالة سيسأل عنها العميل لو لم تُرسلها.",
          },
        ],
      },
      {
        heading: { en: "Give a window, not a wish", ar: "أعطِ موعدًا، لا أمنية" },
        body: [
          {
            en: "A real range, \"2 to 5 business days\", beats \"soon\". If the carrier changes the date, send the new one. A customer who was told 2–5 days and hears nothing on day six is not impatient; they were misled.",
            ar: "نطاق حقيقي, «من 2 إلى 5 أيام عمل», أفضل من «قريبًا». وإذا غيّرت شركة الشحن الموعد، أرسل الموعد الجديد. العميل الذي قيل له 2–5 أيام ولم يسمع شيئًا في اليوم السادس ليس نافد الصبر، بل أُعطي معلومة خاطئة.",
          },
        ],
      },
      {
        heading: { en: "Handle the exception before the customer finds it", ar: "تعامل مع الاستثناء قبل أن يكتشفه العميل" },
        body: [
          {
            en: "A failed delivery attempt, a wrong address, a postponed delivery: these are the moments that produce phone calls. When the carrier reports a problem, reach out first with the reason and the options, even a hard truth, said early, is better than a surprise.",
            ar: "محاولة توصيل فاشلة، أو عنوان خاطئ، أو تأجيل التسليم: هذه هي اللحظات التي تنتج المكالمات. عندما تبلغ شركة الشحن عن مشكلة، بادر بالتواصل مع السبب والخيارات, حتى الحقيقة الصعبة، إن قيلت مبكرًا، أفضل من مفاجأة.",
          },
        ],
      },
      {
        heading: { en: "Measure the silence, not the messages", ar: "قِس الصمت، لا الرسائل" },
        body: [
          {
            en: "Track two numbers: how many orders got their tracking update on the day they shipped, and how many support conversations were about delivery. The second falls when the first rises. That is the whole relationship.",
            ar: "تابع رقمين: كم طلبًا وصل إليه تحديث التتبع في يوم شحنه، وكم محادثة دعم كانت عن التوصيل. الثاني ينخفض عندما يرتفع الأول, وهذه هي العلاقة كاملة.",
          },
        ],
      },
    ],
  },
  {
    slug: "confirmation-template",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "Anatomy of the order confirmation message",
      ar: "تشريح رسالة تأكيد الطلب",
    },
    description: {
      en: "What the customer should see, which links belong in the message, and how the three buttons work before confirmation.",
      ar: "ما الذي يجب أن يراه العميل، وأي روابط مكانها في الرسالة، وكيف تعمل الأزرار الثلاثة قبل التأكيد.",
    },
    intro: {
      en: "The confirmation is the one message every order gets. It should answer the three questions a customer has before paying: what did I order, how much is it, and what happens next. Everything else is secondary.",
      ar: "رسالة التأكيد هي الرسالة التي يحصل عليها كل طلب. يجب أن تجيب عن ثلاثة أسئلة تدور في ذهن العميل قبل الدفع: ماذا طلبت، وكم الإجمالي، وما الخطوة التالية. وما عدا ذلك ثانوي.",
    },
    readingTime: { en: "7 min read", ar: "7 دقائق قراءة" },
    published: "2026-10-26",
    sections: [
      {
        heading: { en: "What the message carries", ar: "ما الذي تحمله الرسالة" },
        body: [
          {
            en: "Start with a short greeting and the store name, then the order number. List the items with quantity and variant, followed by the total in EGP. Add the shipping address and an honest delivery range.",
            ar: "ابدأ بتحية قصيرة واسم المتجر، ثم رقم الطلب. اعرض المنتجات مع الكمية والمقاس، ثم الإجمالي بالجنيه. أضف عنوان الشحن وموعدًا واقعيًا للتوصيل.",
          },
          {
            en: "The order link in the body opens the read-only order page. The customer can check the status, items, and tracking there without an account. Keep the link after the content, not in the first line.",
            ar: "رابط الطلب في متن الرسالة يفتح صفحة الطلب للقراءة فقط. يستطيع العميل مراجعة الحالة والمنتجات والتتبع من دون حساب. ضع الرابط بعد المحتوى، لا في السطر الأول.",
          },
        ],
      },
      {
        heading: { en: "The three buttons", ar: "الأزرار الثلاثة" },
        body: [
          {
            en: "Confirm Order locks the order and starts fulfillment. Cancel Order cancels before shipment. Edit order is not a chat edit: it sends a secure link to the update page, where the customer changes a quantity or variant or adds an item and submits once.",
            ar: "زر تأكيد الطلب يثبّت الطلب ويبدأ التجهيز. زر إلغاء الطلب يلغي قبل الشحن. زر عدّل الطلب ليس تعديلًا في المحادثة: يرسل رابطًا آمنًا إلى صفحة التعديل، حيث يغيّر العميل الكمية أو المقاس أو يضيف منتجًا ويرسل التعديل مرة واحدة.",
          },
          {
            en: "The update link works once and only before confirmation. After confirmation, a change needs a support ticket and a person, because the total has already gone to the carrier.",
            ar: "رابط التعديل يعمل مرة واحدة وقبل التأكيد فقط. بعد التأكيد، يحتاج أي تغيير إلى تذكرة دعم وشخص، لأن الإجمالي ذهب بالفعل إلى شركة الشحن.",
          },
        ],
      },
      {
        heading: { en: "What to leave out", ar: "ما الذي تستبعده" },
        body: [
          {
            en: "Do not put a marketing offer inside the order confirmation, do not promise a delivery date the carrier has not given you, and do not ask for a review before delivery. Each one makes the message less believable.",
            ar: "لا تضع عرضًا تسويقيًا داخل رسالة تأكيد الطلب، ولا تعد بموعد توصيل لم تمنحه لك شركة الشحن، ولا تطلب تقييمًا قبل التوصيل. كل واحد من هذه يجعل الرسالة أقل مصداقية.",
          },
        ],
      },
    ],
  },
  {
    slug: "shipping-readiness",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "Before the first shipment: a readiness checklist",
      ar: "قبل أول شحنة: قائمة تحقق",
    },
    description: {
      en: "The carrier connection, the account state, the address, and the tracking loop that keep confirmed orders from turning into support tickets.",
      ar: "ربط شركة الشحن، وحالة الحساب، والعنوان، ودورة التتبع التي تمنع الطلبات المؤكدة من التحول إلى تذاكر دعم.",
    },
    intro: {
      en: "A confirmed order is not a shipped order. The gap between the two is where most delivery questions, and most missing tracking numbers, are born. This checklist closes that gap before the first parcel moves.",
      ar: "الطلب المؤكد ليس شحنة خارجة. الفجوة بينهما هي المكان الذي تولد فيه معظم أسئلة التوصيل، ومعظم حالات غياب رقم التتبع. قائمة التحقق هذه تغلق تلك الفجوة قبل تحرك أول شحنة.",
    },
    readingTime: { en: "6 min read", ar: "6 دقائق قراءة" },
    published: "2026-10-26",
    sections: [
      {
        heading: { en: "1. Connect the carrier, then check the account", ar: "1. اربط شركة الشحن ثم راجع الحساب" },
        body: [
          {
            en: "Connect Bosta or ShipBlu from the console. Connection alone is not enough: confirm that the carrier account itself can create deliveries. Bosta, for example, requires an active bundle subscription. If the account rejects a delivery, the order stays confirmed without a tracking number until the account is fixed and the shipment is retried.",
            ar: "اربط بوسطة أو ShipBlu من لوحة التحكم. الربط وحده لا يكفي: تأكد أن حساب شركة الشحن نفسه يستطيع إنشاء الشحنات. بوسطة مثلًا تحتاج باقة نشطة. وإذا رفض الحساب الشحنة، يبقى الطلب مؤكدًا بلا رقم تتبع حتى يُصلح الحساب وتُعاد محاولة الشحن.",
          },
        ],
      },
      {
        heading: { en: "2. Give the courier a reachable phone and a clear address", ar: "2. أعطِ المندوب رقمًا يمكن الوصول إليه وعنوانًا واضحًا" },
        body: [
          {
            en: "The courier calls the delivery phone. Keep the Shopify phone and address current, and use the delivery phone field when the customer gives a different number during the edit round. An address outside coverage is better caught before the parcel leaves.",
            ar: "المندوب يتصل برقم التوصيل. حافظ على تحديث الهاتف والعنوان في Shopify، واستخدم حقل رقم التوصيل عندما يعطي العميل رقمًا مختلفًا أثناء التعديل. والعنوان خارج التغطية أفضل أن يُكتشف قبل خروج الشحنة.",
          },
        ],
      },
      {
        heading: { en: "3. Confirm before you ship", ar: "3. أكّد قبل الشحن" },
        body: [
          {
            en: "Only a confirmed order should become a shipment. A pending order can still be edited or cancelled, and an open size check deliberately holds the parcel until the customer finishes or the link expires. Do not force a shipment past either state.",
            ar: "لا يتحول إلى شحنة إلا الطلب المؤكد. الطلب المعلق يمكن تعديله أو إلغاؤه، وفحص المقاس المفتوح يؤخر الشحنة عمدًا حتى ينتهي العميل أو تنتهي مدة الرابط. لا تدفع شحنة لتتجاوز أي من الحالتين.",
          },
        ],
      },
      {
        heading: { en: "4. Watch the first tracking event", ar: "4. راقب أول حدث تتبع" },
        body: [
          {
            en: "Creating the shipment gives you a tracking number; movement gives you confidence. Check the first carrier state after pickup. If the carrier reports an exception, send the carrier's own reason to the customer before they ask. A hard truth, said early, is better than a surprise.",
            ar: "إنشاء الشحنة يعطيك رقم تتبع، وحركة الشحنة تعطيك الثقة. راجع أول حالة من شركة الشحن بعد الاستلام. وإذا أبلغت الشركة عن تعثر، أرسل للعميل سببها كما هو قبل أن يسأل. الحقيقة الصعبة، إن قيلت مبكرًا، أفضل من مفاجأة.",
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-cod-confirmation",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "COD order confirmation on WhatsApp: what to include",
      ar: "تأكيد طلبات الدفع عند الاستلام على واتساب: ماذا تتضمن الرسالة؟",
    },
    description: {
      en: "The details that prevent a failed cash-on-delivery order, and the confirmation message that gets them checked before dispatch.",
      ar: "التفاصيل التي تمنع فشل طلب الدفع عند الاستلام، ورسالة التأكيد التي تراجعها قبل الشحن.",
    },
    intro: {
      en: "Cash on delivery moves the risk to the doorstep. The confirmation message is the last cheap moment to catch a wrong address, an unclear item, or a customer who changed their mind.",
      ar: "الدفع عند الاستلام ينقل المخاطرة إلى باب العميل. ورسالة التأكيد هي آخر لحظة منخفضة التكلفة لاكتشاف عنوان خطأ أو منتج غير واضح أو عميل غيّر رأيه.",
    },
    readingTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    published: "2026-10-29",
    sections: [
      {
        heading: { en: "1. Confirm the order, not the payment", ar: "1. أكّد الطلب، لا الدفع" },
        body: [
          {
            en: "Whano does not collect cash and does not process the payment. The message should say what the customer is confirming: the products, quantity, total in EGP, delivery address, and the expected delivery window. End with Confirm, Cancel, and Edit order.",
            ar: "لا يحصّل Whano النقد ولا يعالج الدفع. يجب أن توضح الرسالة ما يؤكده العميل: المنتجات، والكمية، والإجمالي بالجنيه، وعنوان التوصيل، وموعد التوصيل المتوقع. وتنتهي بزر التأكيد أو الإلغاء أو تعديل الطلب.",
          },
        ],
      },
      {
        heading: { en: "2. Make the address the main check", ar: "2. اجعل العنوان هو نقطة المراجعة" },
        body: [
          {
            en: "COD orders fail at the door when the address is incomplete or the phone number is wrong. Put the governorate, street, building, and phone number in the confirmation. Let the customer fix them through the one-time edit link before confirmation, not after the parcel is with the carrier.",
            ar: "تفشل طلبات الدفع عند الاستلام عند الباب عندما يكون العنوان ناقصًا أو رقم الهاتف خطأ. ضع المحافظة والشارع والمبنى ورقم الهاتف في التأكيد. واترك العميل يصححها عبر رابط التعديل لمرة واحدة قبل التأكيد، لا بعد تسليم الشحنة لشركة الشحن.",
          },
        ],
      },
      {
        heading: { en: "3. Set the delivery expectation before dispatch", ar: "3. حدّد توقع التوصيل قبل الشحن" },
        body: [
          {
            en: "Use a delivery window you can defend, not a promise you cannot keep. If the carrier reports an exception, send the carrier's reason early. After delivery, ask for the rating once and open a support path if the answer is negative.",
            ar: "استخدم موعد توصيل يمكنك الدفاع عنه، لا وعدًا لا تستطيع الوفاء به. وإذا أبلغت شركة الشحن عن تعثر، أرسل سببها مبكرًا. وبعد التوصيل اطلب التقييم مرة واحدة، وافتح مسار دعم إذا كانت الإجابة سلبية.",
          },
        ],
      },
    ],
  },
  {
    slug: "bosta-vs-shipblu",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "Bosta or ShipBlu: how to choose a shipping integration",
      ar: "بوسطة أم ShipBlu؟ كيف تختار تكامل الشحن؟",
    },
    description: {
      en: "Both carriers are supported. Here is what Whano does with either one, and what to decide with the carrier directly.",
      ar: "شركتا الشحن مدعومتان. هذا ما يفعله Whano مع أي منهما، وما تحتاج إلى حسمه مع الشركة مباشرة.",
    },
    intro: {
      en: "Whano does not rank carriers. It connects to Bosta and ShipBlu, creates the shipment, and follows the state that the carrier returns. The right choice depends on your contract, coverage, and operation.",
      ar: "لا يرتب Whano شركات الشحن. يتصل ببوسطة وShipBlu، وينشئ الشحنة، ويتابع الحالة التي ترجعها الشركة. والاختيار الصحيح يعتمد على تعاقدك وتغطيتك وتشغيلك.",
    },
    readingTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    published: "2026-10-29",
    sections: [
      {
        heading: { en: "1. What Whano does with either carrier", ar: "1. ما يفعله Whano مع أي شركة" },
        body: [
          {
            en: "After confirmation, Whano creates the shipment with the carrier connected in the console, follows its state, and shows the carrier's own exception reason. Pickup is available where the carrier supports it.",
            ar: "بعد التأكيد، ينشئ Whano الشحنة مع الشركة المربوطة في لوحة التحكم، ويتابع حالتها، ويعرض سبب التعثر من الشركة نفسها. ويتاح الاستلام حيث تدعمه الشركة.",
          },
        ],
      },
      {
        heading: { en: "2. Decide with the carrier, not from a feature table", ar: "2. احسم القرار مع الشركة، لا من جدول مزايا" },
        body: [
          {
            en: "Coverage, pickup, cash-on-delivery remittance, pricing, and service levels are commercial terms between you and the carrier. Ask for the current coverage map and contract terms. Do not choose a carrier because a landing page calls it faster.",
            ar: "التغطية والاستلام وتحويل مبالغ الدفع عند الاستلام والأسعار ومستويات الخدمة شروط تجارية بينك وبين الشركة. اطلب خريطة التغطية الحالية وشروط التعاقد. ولا تختر شركة لأن صفحة تسويقية وصفتها بالأسرع.",
          },
        ],
      },
      {
        heading: { en: "3. Keep the customer message carrier-neutral", ar: "3. اجعل رسالة العميل محايدة" },
        body: [
          {
            en: "The customer cares about the tracking number, the delivery window, and what happens if something goes wrong. Do not blame the carrier in the message. Send the reason, the next step, and a support path.",
            ar: "يهتم العميل برقم التتبع وموعد التوصيل وما سيحدث إذا تعثر شيء. لا تحمّل شركة الشحن المسؤولية في الرسالة. أرسل السبب والخطوة التالية ومسار الدعم.",
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-template-approval",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "WhatsApp templates: how approval works and what to prepare",
      ar: "قوالب واتساب: كيف تتم الموافقة وما الذي تجهزه؟",
    },
    description: {
      en: "A practical checklist for business-initiated WhatsApp messages, from the purpose and variables to what happens after approval.",
      ar: "قائمة عملية لرسائل واتساب التي يبدأها النشاط التجاري، من الهدف والمتغيرات إلى ما يحدث بعد الموافقة.",
    },
    intro: {
      en: "A WhatsApp template is a message shape that Meta reviews before a business can send it outside an open customer conversation. Approval is about clarity and consent, not clever copy.",
      ar: "قالب واتساب هو شكل رسالة تراجعه Meta قبل أن يرسله النشاط التجاري خارج محادثة عميل مفتوحة. الموافقة تتعلق بالوضوح والموافقة، لا بجمال الصياغة.",
    },
    readingTime: { en: "5 min read", ar: "5 دقائق قراءة" },
    published: "2026-10-29",
    sections: [
      {
        heading: { en: "1. Start with one clear job", ar: "1. ابدأ بمهمة واحدة واضحة" },
        body: [
          {
            en: "Each template should answer one question: confirm this order, update this shipment, ask for this review, or open this support path. A template that tries to sell, confirm, and announce a discount at once is harder to review and easier to ignore.",
            ar: "كل قالب يجب أن يجيب عن سؤال واحد: أكّد هذا الطلب، أو حدّث هذه الشحنة، أو اطلب هذا التقييم، أو افتح مسار الدعم. القالب الذي يحاول البيع والتأكيد والإعلان عن خصم في رسالة واحدة أصعب في المراجعة وأسهل في التجاهل.",
          },
        ],
      },
      {
        heading: { en: "2. Make variables explicit and safe", ar: "2. اجعل المتغيرات واضحة وآمنة" },
        body: [
          {
            en: "Name the order number, product, total, address, and tracking variables, and show a real example. Do not hide critical information behind a variable that may be empty. Keep the message useful even if a customer never taps a button.",
            ar: "سمِّ متغيرات رقم الطلب والمنتج والإجمالي والعنوان والتتبع، واعرض مثالًا حقيقيًا. لا تخفِ معلومة أساسية خلف متغير قد يكون فارغًا. واجعل الرسالة مفيدة حتى لو لم يضغط العميل أي زر.",
          },
        ],
      },
      {
        heading: { en: "3. Treat approval as a living check", ar: "3. اعتبر الموافقة مراجعة مستمرة" },
        body: [
          {
            en: "Do not silently change approved wording. If the message changes, review the new shape and the variables again. Whano manages approved templates for the store, but it cannot guarantee a review time or waive Meta's rules.",
            ar: "لا تغيّر صياغة معتمدة بصمت. وإذا تغيرت الرسالة، راجع الشكل والمتغيرات مرة أخرى. يدير Whano القوالب المعتمدة للمتجر، لكنه لا يضمن مدة المراجعة ولا يعفي من قواعد Meta.",
          },
        ],
      },
    ],
  },
  {
    slug: "points-per-order",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "How many points does one order use?",
      ar: "كم نقطة يستهلك الطلب الواحد؟",
    },
    description: {
      en: "A clear breakdown of the point costs behind a confirmation, shipping update, rating, edit, campaign, and abandoned cart.",
      ar: "تفصيل واضح لتكلفة النقاط في التأكيد وتحديث الشحن والتقييم والتعديل والحملة والسلة المتروكة.",
    },
    intro: {
      en: "Points are not charged per order. They are spent per automation, so the same order can cost differently depending on what the store turns on.",
      ar: "لا تُحتسب النقاط لكل طلب. تُستهلك لكل أتمتة، لذلك قد يختلف الطلب نفسه حسب ما يفعّله المتجر.",
    },
    readingTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    published: "2026-10-29",
    sections: [
      {
        heading: { en: "1. The common path", ar: "1. المسار الشائع" },
        body: [
          {
            en: "A confirmation is about 1 point, a shipping notification about 1 point, and a delivery and rating follow-up about 2 points. A typical confirmed, shipped, rated order can therefore total around 4 points. An edit is about 2 points, and a support interaction about 2.",
            ar: "التأكيد نحو نقطة واحدة، وإشعار الشحن نحو نقطة، ومتابعة التوصيل والتقييم نحو نقطتين. لذلك قد يصل الطلب المعتاد المؤكد والمشحون والمقيّم إلى نحو 4 نقاط. والتعديل نحو نقطتين، وتفاعل الدعم نحو نقطتين.",
          },
        ],
      },
      {
        heading: { en: "2. Campaigns and abandoned carts are separate", ar: "2. الحملات والسلات منفصلة" },
        body: [
          {
            en: "A marketing campaign message is about 5 points, and an abandoned-cart reminder about 4 points. Those are optional and should be measured separately from the order journey.",
            ar: "رسالة الحملة التسويقية نحو 5 نقاط، وتذكير السلة المتروكة نحو 4 نقاط. وهي اختيارية ويجب قياسها بشكل منفصل عن رحلة الطلب.",
          },
        ],
      },
      {
        heading: { en: "3. A zero balance is not a stopped store", ar: "3. الرصيد الصفري لا يوقف المتجر" },
        body: [
          {
            en: "Confirmation and cancellation keep working at zero balance. Optional automations pause until you top up, and failed messages are netted out of the points report. Use the calculator on the pricing page for a rough monthly estimate.",
            ar: "يستمر التأكيد والإلغاء عند الرصيد الصفري. وتتوقف الأتمتات الاختيارية حتى تشحن الرصيد، وتُستبعد الرسائل الفاشلة من تقرير النقاط. استخدم الحاسبة في صفحة الأسعار لتقدير شهري تقريبي.",
          },
        ],
      },
    ],
  },
  {
    slug: "abandoned-cart-whatsapp",
    eyebrow: { en: "Guide", ar: "شرح" },
    title: {
      en: "Abandoned-cart reminders on WhatsApp without becoming noise",
      ar: "تذكير السلة المتروكة على واتساب من دون أن يتحول إلى إزعاج",
    },
    description: {
      en: "Consent, timing, quiet hours, and one useful message. A practical setup for Shopify stores.",
      ar: "الموافقة والتوقيت وساعات الهدوء ورسالة واحدة مفيدة. إعداد عملي لمتاجر Shopify.",
    },
    intro: {
      en: "A cart reminder works when it arrives after a real pause, gives the customer a way back, and stops when they say no. Volume is not the strategy.",
      ar: "يعمل تذكير السلة عندما يصل بعد توقف حقيقي، ويعطي العميل طريقًا للعودة، ويتوقف عندما يقول لا. الكثرة ليست الاستراتيجية.",
    },
    readingTime: { en: "4 min read", ar: "4 دقائق قراءة" },
    published: "2026-10-29",
    sections: [
      {
        heading: { en: "1. Consent and quiet hours first", ar: "1. الموافقة وساعات الهدوء أولًا" },
        body: [
          {
            en: "Send only to customers who agreed to receive offers. Respect quiet hours, keep a block list for unsubscribed or ignored customers, and do not treat a cart as consent by itself.",
            ar: "أرسل فقط للعملاء الذين وافقوا على تلقي العروض. احترم ساعات الهدوء، واحتفظ بقائمة حظر للمشتركين الملغين أو المتجاهلين، ولا تعتبر السلة موافقة بحد ذاتها.",
          },
        ],
      },
      {
        heading: { en: "2. One reminder with a way back", ar: "2. تذكير واحد مع طريق للعودة" },
        body: [
          {
            en: "Set the delay in the console, then send one message with the cart link and, if useful, a discount. A reminder costs about 4 points. Do not send a second message to someone who already replied or purchased.",
            ar: "حدّد التأخير من لوحة التحكم، ثم أرسل رسالة واحدة مع رابط السلة، وخصمًا إن كان مفيدًا. يكلّف التذكير نحو 4 نقاط. ولا ترسل رسالة ثانية لمن رد بالفعل أو اشترى.",
          },
        ],
      },
      {
        heading: { en: "3. Measure recovery, not volume", ar: "3. قِس الاستعادة، لا عدد الرسائل" },
        body: [
          {
            en: "Track how many carts return and how many customers block or ignore the messages. If the second number rises, reduce frequency or change the offer before increasing the budget.",
            ar: "تابع عدد السلات التي تعود وعدد العملاء الذين يحظرون الرسائل أو يتجاهلونها. إذا ارتفع الرقم الثاني، قلّل التكرار أو غيّر العرض قبل زيادة الميزانية.",
          },
        ],
      },
    ],
  },

];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
