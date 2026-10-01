/**
 * Interactive workflow conversations.
 *
 * The message bubbles are the exact Arabic templates the live app sends, kept
 * verbatim from production. The surrounding marketing copy (tabs, titles,
 * descriptions, costs) is MSA, like the rest of the site; the bubbles show
 * what a customer actually receives.
 */

export interface WorkflowMessage {
  sender: "whano" | "customer";
  text: string;
  buttons?: string[];
  isButtonTap?: boolean;
  success?: boolean;
  badge?: string;
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

/* ── Shared opening message (workflows 1–3) ────────────────── */

const orderMessage: WorkflowMessage = {
  sender: "whano",
  text: "طلب جديد #1056\nThe Collection Snowboard: Hydrogen × 1\nالمبلغ الإجمالي: USD 600\nعنوان الشحن: Elbasha st, Kafr eldawar, Virginia, 1, 22101, United States\nموعد التوصيل: Standard\nشكراً لطلبك من nomeda!",
  buttons: ["تأكيد الطلب", "إلغاء الطلب", "عايز أعدل"],
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
      en: "Order #1056 tagged as 'WhatsApp Confirmed'",
      ar: "وسم الطلب #1056 في Shopify بأنه مؤكد",
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
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "تم تأكيد طلبك #1056!",
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
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "تم إلغاء طلبك #1056.\n\nممكن نعرف السبب؟",
        buttons: ["السعر مرتفع", "غيرت رأيي", "سبب آخر"],
      },
      {
        sender: "customer",
        text: "غيرت رأيي",
        isButtonTap: true,
      },
    ],
  },
  {
    id: "wf-editing",
    number: "03",
    tabLabel: { en: "Order Edits", ar: "تعديل الطلب" },
    title: {
      en: "The customer edits in natural language.",
      ar: "يعدّل العميل طلبه بعباراته الطبيعية.",
    },
    description: {
      en: "Customers speak naturally to add items or adjust quantities. Whano recalculates line items and keeps Shopify in perfect sync.",
      ar: "يطلب العميل التعديل بعباراته الطبيعية. يفهمه Whano، ويحدّث المنتجات والإجمالي، ويتزامن مباشرة مع Shopify وشركة الشحن.",
    },
    shopifyAction: {
      en: "Order line items updated & new total calculated",
      ar: "تحديث بنود الطلب والإجمالي الجديد في Shopify",
    },
    pointsCost: {
      en: "~1 Point per message",
      ar: "~1 نقطة لكل رسالة",
    },
    icon: "edit-3",
    messages: [
      { ...orderMessage },
      {
        sender: "customer",
        text: "عايز أعدل",
        isButtonTap: true,
      },
      {
        sender: "customer",
        text: "عايز أزود واحد من نفس المنتج",
      },
      {
        sender: "whano",
        text: "تم تعديل الطلب ✅\n\nThe Collection Snowboard: Hydrogen × 2\nالإجمالي الجديد: USD 1,200",
        badge: "← متزامن مع Shopify وشركة الشحن",
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
        text: "#1056\nطلبك اتشحن 🚚\nرقم التتبع: هيتوفر قريب\nالمتوقع وصوله: 2-5 ايام عمل",
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
        text: "طلبك 1057 وصل 🎉\nنتمنى تكون عجبك.\n\nإزاي كانت تجربتك؟",
        buttons: ["ممتاز", "جيد", "سيء"],
      },
      {
        sender: "customer",
        text: "سيء",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "أنا آسف إن التجربة ما كانتش كويسة. إيه المشكلة اللي حصلت؟",
        buttons: ["استبدال", "استرجاع", "مشكلة أخرى"],
      },
    ],
  },
  {
    id: "wf-support",
    number: "06",
    tabLabel: { en: "Support & Returns", ar: "تذاكر الدعم" },
    title: {
      en: "Automated support tickets with your exact return policy.",
      ar: "تذاكر دعم فورية بسياسة الاسترجاع الخاصة بمتجرك.",
    },
    description: {
      en: "When a customer requests an exchange or return, Whano creates a support ticket, explains the policy terms, and shares the store support contact.",
      ar: "إذا طلب العميل استبدالًا أو استرجاعًا، يفتح Whano تذكرة دعم فورية برقم محدد، ويوضح سياسة المتجر، ويصل العميل بخدمة العملاء.",
    },
    shopifyAction: {
      en: "Support ticket #W-1005 opened & merchant notified",
      ar: "تم فتح تذكرة دعم #W-1005 وإرسال إشعار مباشر لخدمة العملاء",
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
        buttons: ["استبدال", "استرجاع", "مشكلة أخرى"],
      },
      {
        sender: "customer",
        text: "استبدال",
        isButtonTap: true,
      },
      {
        sender: "whano",
        text: "تم فتح تذكرة الدعم #W-1005.\nاتواصل مع خدمة العملاء على الرقم ده:\n+20 1001580461\n• يمكن للعميل طلب استبدال المنتج خلال 14 يومًا من تاريخ استلامه.\n• عند طلب الاستبدال، يتم فتح تذكرة دعم تلقائيًا وإخطار التاجر.\n• قبول أو رفض طلب الاستبدال يخضع لسياسة المتجر وشروط المنتج.\n• يجب أن يكون المنتج في حالته الأصلية وبالتغليف الأصلي.\nبعد مرور 14 يومًا من تاريخ الاستلام، لا يمكن للعميل تقديم طلب استبدال من خلال Whano.\n• سيتواصل فريق خدمة العملاء مع العميل من رقم الدعم المسجل لدى المتجر.",
        badge: "← تم فتح تذكرة الدعم #W-1005 وإخطار التاجر",
      },
    ],
  },
];
