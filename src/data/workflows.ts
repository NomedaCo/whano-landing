/**
 * Interactive workflow conversations.
 *
 * The bubbles follow the approved production templates where one exists
 * (confirmation v7, cancellation reason, one-time edit link, shipping, rating,
 * cart recovery) with sample order/customer values; the confirmation is
 * lightly shortened for the phone. Support replies are policy-neutral samples.
 * The section itself is labelled representative. The English strings are
 * translations, shown in English mode; Arabic is the source of truth.
 *
 * The surrounding marketing copy (tabs, titles, descriptions, costs) is MSA,
 * like the rest of the site.
 */

export interface WorkflowMessage {
  sender: "whano" | "customer";
  text: string;
  /** The same bubble in English, for the site's English mode. */
  textEn?: string;
  buttons?: string[];
  /** Parallel to `buttons`: the English labels, same order. */
  buttonsEn?: string[];
  /** A WhatsApp URL button (opens a page; it is not a chat reply). */
  urlButton?: { text: string; textEn?: string; url?: string };
  isButtonTap?: boolean;
  success?: boolean;
  badge?: string;
  badgeEn?: string;
}

export interface Workflow {
  id: string;
  number: string;
  tabLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  shopifyAction: { en: string; ar: string };
  pointsCost: { en: string; ar: string };
  icon: string;
  messages: WorkflowMessage[];
}

/* ── Language picks, used by the phone scripts ───────────────── */

export function msgText(message: WorkflowMessage, language: string): string {
  return language === "en" && message.textEn ? message.textEn : message.text;
}

export function msgButtons(message: WorkflowMessage, language: string): string[] {
  return language === "en" && message.buttonsEn ? message.buttonsEn : message.buttons ?? [];
}

export function msgBadge(message: WorkflowMessage, language: string): string | undefined {
  return language === "en" && message.badgeEn ? message.badgeEn : message.badge;
}

/* ── Shared opening message (workflows 1–3) ────────────────── */

const orderMessage: WorkflowMessage = {
  sender: "whano",
  text: "أهلاً أ/أحمد 👋\n📦 طلب جديد من نوى\n\n• تيشيرت قطن أوفرسايز (مقاس L) × 2\n• كاب شمس × 1\n\n💰 المبلغ الإجمالي: 650 EGP\n🛍️ رقم الطلب: 1056\n📍 عنوان الشحن: 9 شارع 216، المعادي، القاهرة\n🚚 موعد التوصيل: 2–4 أيام عمل\n\n✨ شكراً لثقتك في نوى!\n\nشوف طلبك وتابعه من هنا 👇\nhttps://whano.nomeda.tech/order/demo\n\nبرجاء تأكيد الطلب علشان نبدأ في تجهيزه.",
  textEn: "Hey Ahmed 👋\n📦 New order from Nawa\n\n• Oversized cotton tee (size L) × 2\n• Sun cap × 1\n\n💰 Total: 650 EGP\n🛍️ Order #: 1056\n📍 Shipping to: 9 Street 216, Maadi, Cairo\n🚚 Estimated delivery: 2–4 working days\n\n✨ Thanks for trusting Nawa!\n\nSee your order and track it here 👇\nhttps://whano.nomeda.tech/order/demo\n\nPlease confirm your order so we can start preparing it.",
  buttons: ["تأكيد الطلب", "إلغاء الطلب", "عدّل الطلب"],
  buttonsEn: ["Confirm Order", "Cancel Order", "Edit order"],
};

/* ── Workflow definitions ──────────────────────────────────── */

export const workflows: Workflow[] = [
  {
    id: "wf-confirmation",
    number: "01",
    tabLabel: { en: "Confirmation", ar: "تأكيد الطلب" },
    title: {
      en: "The customer confirms in one tap.",
      ar: "يؤكّد العميل في ضغطة واحدة.",
    },
    description: {
      en: "A new Shopify order automatically triggers an order confirmation on WhatsApp. The customer taps one button and the order is locked in.",
      ar: "أي طلب جديد على Shopify يُشغّل رسالة تأكيد فورية على واتساب. يضغط العميل زرًا واحدًا فيتأكد الطلب.",
    },
    shopifyAction: {
      en: "Order #1056 confirmed",
      ar: "تم تأكيد الطلب #1056",
    },
    pointsCost: {
      en: "~1 Point per confirmation",
      ar: "~1 نقطة لكل تأكيد",
    },
    icon: "check-circle",
    messages: [
      { ...orderMessage },
      {
        sender: "customer",
        text: "تأكيد الطلب",
        textEn: "Confirm Order",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "✅ تم تأكيد طلبك #1056!\n\nهنبدأ تجهيزه دلوقتي.",
        textEn: "✅ Your order #1056 is confirmed!\n\nWe will start preparing it now.",
        success: true,
      },
    ],
  },
  {
    id: "wf-cancellation",
    number: "02",
    tabLabel: { en: "Cancellation", ar: "إلغاء الطلب" },
    title: {
      en: "Cancellation with a reason, not a dead end.",
      ar: "إلغاء بسبب واضح، لا طريق مسدود.",
    },
    description: {
      en: "If the customer wants to cancel before fulfillment, Whano captures the exact reason and updates Shopify inventory immediately.",
      ar: "إذا قرر العميل الإلغاء قبل التجهيز، يسجّل Whano السبب الفعلي، ويلغي الطلب، ويعيد المخزون في Shopify تلقائيًا.",
    },
    shopifyAction: {
      en: "Order #1056 cancelled & inventory restored",
      ar: "إلغاء الطلب #1056 على Shopify واسترجاع المخزون",
    },
    pointsCost: {
      en: "~1 Point per cancellation",
      ar: "~1 نقطة لكل إلغاء",
    },
    icon: "x-circle",
    messages: [
      { ...orderMessage },
      {
        sender: "customer",
        text: "إلغاء الطلب",
        textEn: "Cancel Order",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "تم إلغاء طلبك #1056 من نوى.\n\nممكن نعرف السبب؟",
        textEn: "Your order #1056 from Nawa has been cancelled.\n\nMind telling us why?",
        buttons: ["السعر مرتفع", "غيرت رأيي", "سبب آخر"],
        buttonsEn: ["Too expensive", "Changed my mind", "Another reason"],
      },
      {
        sender: "customer",
        text: "غيرت رأيي",
        textEn: "Changed my mind",
        isButtonTap: true,
      },
    ],
  },
  {
    id: "wf-editing",
    number: "03",
    tabLabel: { en: "Order Edits", ar: "تعديل الطلب" },
    title: {
      en: "The customer edits through a one-time link.",
      ar: "يعدّل العميل طلبه من رابط لمرة واحدة.",
    },
    description: {
      en: "The confirmation's Edit order button sends a secure link. The customer changes a quantity, a variant, or adds an item on that page, sees the new total, and submits once. Shopify updates before fulfillment.",
      ar: "زر عدّل الطلب في التأكيد يرسل رابطًا آمنًا. يغيّر العميل الكمية أو المقاس أو يضيف منتجًا من الصفحة، ويرى الإجمالي الجديد، ويرسل التعديل مرة واحدة، فيُحدَّث Shopify قبل التجهيز.",
    },
    shopifyAction: {
      en: "Order updated after the customer submits the edit link",
      ar: "تحديث الطلب بعد إرسال العميل رابط التعديل",
    },
    pointsCost: {
      en: "~2 points per saved edit",
      ar: "~2 نقطتان لكل تعديل محفوظ",
    },
    icon: "edit-3",
    messages: [
      { ...orderMessage },
      {
        sender: "customer",
        text: "عدّل الطلب",
        textEn: "Edit order",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "طلبك #1056 من نوى.\n\nعايز تغيّر حاجة, الكمية أو المقاس أو تضيف منتج؟\nافتح الرابط من الزر وعدّل طلبك بنفسك.\n\nالرابط يعمل مرة واحدة، وقبل تأكيد الطلب.",
        textEn: "Your order #1056 from Nawa.\n\nNeed to change something, a quantity, a variant, or adding an item?\nOpen the link from the button and update your order yourself.\n\nThe link works once, before the order is confirmed.",
        urlButton: {
          text: "عدّل طلبك",
          textEn: "Update your order",
          url: "https://whano.nomeda.tech/order/update/demo",
        },
      },
    ],
  },
  {
    id: "wf-shipping",
    number: "04",
    tabLabel: { en: "Shipping", ar: "تحديث الشحن" },
    title: {
      en: "Shipping updates without manual messages.",
      ar: "تحديث الشحن تلقائيًا من دون إرسال يدوي.",
    },
    description: {
      en: "When you fulfill the order on Shopify, Whano dispatches the tracking link and estimated arrival date right to their WhatsApp.",
      ar: "بمجرد تجهيز الشحنة وإدخال رقم التتبع في Shopify، يرسل Whano إشعار الشحن وموعد الوصول المتوقع إلى العميل.",
    },
    shopifyAction: {
      en: "Fulfillment webhook dispatched tracking info",
      ar: "إرسال رقم التتبع وموعد التوصيل تلقائيًا",
    },
    pointsCost: {
      en: "~1 Point per interaction",
      ar: "~1 نقطة لكل إشعار",
    },
    icon: "truck",
    messages: [
      {
        sender: "whano",
        text: "#1056 · نوى\n\nيا أحمد طلبك خرج للشحن 🚚\nرقم التتبع: BST-884213\nالمتوقع وصوله: 2–4 أيام عمل\n\nتقدر تتابع الشحنة برقم التتبع اللي فوق.",
        textEn: "#1056 · Nawa\n\nHey Ahmed, your order has shipped 🚚\nTracking number: BST-884213\nExpected delivery: 2–4 working days\n\nYou can follow it with the tracking number above.",
      },
    ],
  },
  {
    id: "wf-rating",
    number: "05",
    tabLabel: { en: "Reviews & Rating", ar: "التقييم والمراجعة" },
    title: {
      en: "The review request with smart follow-up.",
      ar: "طلب التقييم، ومتابعة ذكية إذا كانت التجربة سيئة.",
    },
    description: {
      en: "Collect real feedback after delivery. If a customer is unhappy, Whano routes them to support options before a negative public review happens.",
      ar: "اطلب تقييم العميل بعد استلام الشحنة. وإذا كانت التجربة سيئة، يعرض Whano الاستبدال أو الاسترجاع فورًا قبل أن يتصاعد الموقف.",
    },
    shopifyAction: {
      en: "Customer review recorded & satisfaction score logged",
      ar: "تسجيل تقييم العميل وإخطار الدعم في حال وجود مشكلة",
    },
    pointsCost: {
      en: "~2 Points per interaction",
      ar: "~2 نقطتان لكل تقييم ومتابعة",
    },
    icon: "star",
    messages: [
      {
        sender: "whano",
        text: "🎉 طلبك #1056 من نوى وصل بنجاح!\n\nأهلًا يا أحمد، نتمنى يكون طلبك وصلك بحالة ممتازة ❤️\n\nشاركنا رأيك في تجربتك وقيّم طلبك من هنا 👇",
        textEn: "🎉 Your order #1056 from Nawa has arrived!\n\nHi Ahmed, we hope it reached you in perfect condition ❤️\n\nShare your experience and rate your order from here 👇",
        buttons: ["ممتاز", "جيد", "سيء"],
        buttonsEn: ["Excellent", "Good", "Poor"],
      },
      {
        sender: "customer",
        text: "سيء",
        textEn: "Poor",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "أنا آسف إن التجربة ما كانتش كويسة. إيه المشكلة اللي حصلت؟",
        textEn: "Sorry the experience was not good. What went wrong?",
        buttons: ["استبدال", "استرجاع", "مشكلة أخرى"],
        buttonsEn: ["Exchange", "Refund", "Another issue"],
      },
    ],
  },
  {
    id: "wf-support",
    number: "06",
    tabLabel: { en: "Support & Returns", ar: "تذاكر الدعم" },
    title: {
      en: "Support tickets that follow your store policy.",
      ar: "تذاكر دعم تتبع سياسة متجرك.",
    },
    description: {
      en: "When a customer requests an exchange or return, Whano opens a support ticket and connects them with the store's support team; the store policy is theirs.",
      ar: "إذا طلب العميل استبدالًا أو استرجاعًا، يفتح Whano تذكرة دعم ويصله بفريق دعم المتجر؛ وسياسة الاسترجاع تبقى خاصة بالمتجر.",
    },
    shopifyAction: {
      en: "Support ticket #W-1005 opened & store notified",
      ar: "تم فتح تذكرة دعم #W-1005 وإشعار المتجر",
    },
    pointsCost: {
      en: "~2 Points per interaction",
      ar: "~2 نقطتان لكل تذكرة دعم",
    },
    icon: "life-buoy",
    messages: [
      {
        sender: "whano",
        text: "أنا آسف إن التجربة ما كانتش كويسة. إيه المشكلة اللي حصلت؟",
        textEn: "Sorry the experience was not good. What went wrong?",
        buttons: ["استبدال", "استرجاع", "مشكلة أخرى"],
        buttonsEn: ["Exchange", "Refund", "Another issue"],
      },
      {
        sender: "customer",
        text: "استبدال",
        textEn: "Exchange",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "تم فتح تذكرة الدعم #W-1005.\nفريق خدمة العملاء هيتواصل معاك على الرقم ده:\n+2001260055031\nوهيشرح لك سياسة الاستبدال أو الاسترجاع الخاصة بالمتجر.",
        textEn: "Support ticket #W-1005 is open.\nCustomer service will contact you on this number:\n+2001260055031\nThey will explain the store's exchange or return policy.",
        badge: "← تم فتح تذكرة الدعم #W-1005 وإشعار المتجر",
        badgeEn: "← Support ticket #W-1005 opened and the store notified",
      },
    ],
  },
  {
    id: "wf-cart",
    number: "07",
    tabLabel: { en: "Abandoned cart", ar: "السلة المتروكة" },
    title: {
      en: "Bring the cart back without a manual message.",
      ar: "أعد السلة من دون رسالة يدوية.",
    },
    description: {
      en: "When checkout stalls, Whano sends a reminder with the cart link, inside the consent and quiet-mode rules, and can include a discount.",
      ar: "إذا توقف الدفع، يرسل Whano تذكيرًا مع رابط السلة، ضمن قواعد الموافقة ووضع الهدوء، ويمكنه إضافة خصم.",
    },
    shopifyAction: {
      en: "Abandoned checkout detected; reminder queued",
      ar: "تم رصد سلة متروكة؛ التذكير في الانتظار",
    },
    pointsCost: {
      en: "~4 points per reminder",
      ar: "~4 نقاط لكل تذكير",
    },
    icon: "shopping-cart",
    messages: [
      {
        sender: "whano",
        text: "أهلاً من نوى 👋\n\nسيبّت حاجة في السلة:\n• تيشيرت قطن أوفرسايز × 1\n\nتقدر تكمّل من هنا: https://nawa-store.example/cart/recover\n\nشكراً ليك ❤️",
        textEn: "Hi from Nawa 👋\n\nYou left something in your cart:\n• Oversized cotton tee × 1\n\nPick up where you left off here: https://nawa-store.example/cart/recover\n\nThank you!",
      },
    ],
  },
];
