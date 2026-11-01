// All copy for both languages. The page template (render.js) reads from here,
// so a wording change is one edit and both pages stay in step.

export const SITE_URL = 'https://shaheene.com'
export const TRACK_URL = 'https://tracking.shaheene.com/'
export const SUPPORT_EMAIL = 'support@legendsleepsa.com'
export const SUPPORT_PHONE = '920031540'

export const content = {
  en: {
    lang: 'en',
    dir: 'ltr',
    path: '/',
    meta: {
      title: 'Shaheen: Legend Sleep delivery, tracked to your door',
      description:
        'Shaheen is the delivery team behind Legend Sleep. Every package is scanned and tracked from our warehouse to your door, and handed over only with your one-time code.',
    },
    skip: 'Skip to content',
    nav: {
      route: 'How it works',
      promise: 'Our promise',
      drivers: 'Drivers',
      faq: 'Questions',
      cta: 'Track my order',
      switchLabel: 'عربي',
      switchName: 'Arabic',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'The delivery team behind Legend Sleep',
      title: ['Delivered', 'with proof.'],
      lede:
        'We scan every package from our warehouse to your door. We hand it over only when you give the driver your one-time code.',
      ticket: {
        label: 'Order',
        number: '100228994',
        status: 'Out for delivery',
        city: 'Riyadh',
        packages: '2 packages',
        steps: ['Confirmed', 'Packed', 'On the truck', 'On the way', 'Delivered'],
        driver: 'Driver assigned',
        code: 'Code sent by SMS',
      },
    },
    track: {
      label: 'Order number',
      placeholder: 'e.g. 100228994',
      button: 'Track',
      hint: 'You will find it on your order confirmation.',
    },
    marquee: [
      'Scanned at every step',
      'Live order tracking',
      'One-time code at the door',
      'Delivering across Saudi Arabia',
      'Arabic and English',
    ],
    route: {
      eyebrow: 'How it works',
      title: 'The route your order takes',
      lede: 'Five stops, each one recorded. You always know where your order is.',
      steps: [
        {
          tag: 'Operations portal',
          title: 'Order received',
          body: 'Your order reaches our operations portal as soon as it is confirmed. Our team sees the items, the address and the delivery city straight away.',
          shot: 'portal-orders',
          kind: 'browser',
          alt: 'Shaheen operations portal: list of orders with status and city',
        },
        {
          tag: 'Warehouse',
          title: 'Packed and labelled',
          body: 'Each box gets its own label and QR code. A two-box order is tracked as two packages, so nothing gets left behind.',
          shot: 'portal-order-detail',
          kind: 'browser',
          alt: 'Order detail in the operations portal with each package listed',
        },
        {
          tag: 'Driver app',
          title: 'Scanned onto the truck',
          body: 'The driver scans every package label before leaving the warehouse. From then on, each package belongs to a named driver.',
          shot: 'app/07-scan-claim',
          kind: 'phone',
          alt: 'Shaheen Driver app: scan a package label to claim it',
        },
        {
          tag: 'Tracking page',
          title: 'On its way to you',
          body: 'Follow your order on our tracking page with your order number. Each status change appears with the time it happened.',
          shot: 'tracking-mobile',
          kind: 'phone',
          alt: 'Shaheen tracking page showing an order out for delivery',
        },
        {
          tag: 'At your door',
          title: 'Handed over with your code',
          body: 'You receive a one-time code by SMS. The driver enters it to confirm delivery, so your order is marked delivered only once it is in your hands.',
          shot: 'app/05-otp',
          kind: 'phone',
          alt: 'Shaheen Driver app: entering the customer one-time code',
        },
      ],
    },
    promise: {
      eyebrow: 'Our promise',
      title: 'What you can count on',
      items: [
        {
          key: 'code',
          title: 'No code, no handover.',
          body: 'An order is marked delivered only after the driver enters the code we send you. Share it once your order is in your hands.',
        },
        {
          key: 'boxes',
          title: 'Every box counted',
          body: 'Bed frame in one box, mattress in another? Each one is scanned and tracked on its own.',
        },
        {
          key: 'live',
          title: 'Know where it is',
          body: 'Your tracking page shows every step with its time, from confirmation to your door.',
        },
        {
          key: 'driver',
          title: 'A named driver',
          body: 'Each package is assigned to one driver, so it is always clear who has your order.',
        },
        {
          key: 'missed',
          title: 'Missed us?',
          body: 'If we cannot deliver, the driver records why and our team follows up to arrange a new time.',
        },
        {
          key: 'kingdom',
          title: 'Across the Kingdom',
          body: 'Where our own fleet does not go, we ship with our partner Naqel Express. Your tracking page links to their tracking.',
        },
      ],
    },
    ops: {
      eyebrow: 'Behind the scenes',
      title: 'One screen for every order',
      body: 'Our operations team runs every delivery from the Shaheen portal: orders, packages, drivers, gate passes and returns. When something slips, they see it first.',
      chips: ['Orders', 'Packages', 'Drivers', 'Gate passes', 'Returns', 'Naqel shipments'],
      alts: {
        dashboard: 'Shaheen operations portal dashboard with delivery charts',
        naqel: 'Naqel shipping workspace in the operations portal',
        drivers: 'Drivers page in the operations portal',
      },
      captions: { naqel: 'Naqel Express shipments', drivers: 'Driver management' },
    },
    drivers: {
      eyebrow: 'Shaheen Driver app',
      title: 'Built for our drivers',
      body: 'Scan to claim a package, a clear list of everything on board and delivery confirmed with the customer code. In Arabic and English.',
      screens: [
        { shot: 'app/02-dashboard', caption: 'The day at a glance' },
        { shot: 'app/07-scan-claim', caption: 'Scan to claim' },
        { shot: 'app/03-in-transit', caption: 'Everything on board' },
        { shot: 'app/05-otp', caption: 'Confirm with the code' },
        { shot: 'app/06-delivered', caption: 'Every delivery, on record' },
      ],
    },
    cta: {
      title: 'Where is my order?',
      body: 'Enter your order number to see where it is now.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Good to know',
      items: [
        {
          q: 'How do I track my order?',
          a: 'Enter your order number on this page or on tracking.shaheene.com. You will see every status with the time it happened.',
        },
        {
          q: 'Why do I give the driver a code?',
          a: 'The code proves your order reached you. The driver cannot mark it delivered without it, so only share it when you have your order in your hands.',
        },
        {
          q: 'What if I am not home?',
          a: 'The driver records why the delivery did not happen, and our team follows up with you to arrange a new time. You can also contact us directly.',
        },
        {
          q: 'My order came in more than one box.',
          a: 'Each box is scanned and tracked separately. Your tracking page shows the status of every package.',
        },
        {
          q: 'Do you deliver outside the main cities?',
          a: 'Yes. Where our own fleet does not go, we ship with Naqel Express, and your tracking page links to their tracking.',
        },
        {
          q: 'How do I contact you?',
          a: `Email ${SUPPORT_EMAIL} or call ${SUPPORT_PHONE}.`,
        },
      ],
    },
    footer: {
      about: 'Shaheen is the delivery service of Legend Sleep.',
      track: 'Track an order',
      legal: 'Legal',
      contact: 'Contact',
      rights: 'Legend Sleep. All rights reserved.',
      top: 'Back to top',
    },
  },

  ar: {
    lang: 'ar',
    dir: 'rtl',
    path: '/ar/',
    meta: {
      title: 'شاهين: توصيل ليجند سليب، بتتبّع حتى باب منزلك',
      description:
        'شاهين هو فريق التوصيل لدى ليجند سليب. نمسح كل قطعة ونتتبّعها من مستودعنا حتى باب منزلك، ولا نسلّمها إلا برمز التحقق الخاص بك.',
    },
    skip: 'تخطَّ إلى المحتوى',
    nav: {
      route: 'كيف نوصّل',
      promise: 'وعدنا',
      drivers: 'المناديب',
      faq: 'الأسئلة',
      cta: 'تتبّع طلبي',
      switchLabel: 'English',
      switchName: 'English',
      menu: 'القائمة',
      close: 'إغلاق',
    },
    hero: {
      eyebrow: 'فريق التوصيل لدى ليجند سليب',
      title: ['نوصّل طلبك', 'ونثبت التسليم.'],
      lede:
        'نمسح كل قطعة من مستودعنا حتى باب منزلك، ولا نسلّمها إلا بعد أن تعطي المندوب رمز التحقق.',
      ticket: {
        label: 'الطلب',
        number: '100228994',
        status: 'خرج للتوصيل',
        city: 'الرياض',
        packages: 'طردان',
        steps: ['تم التأكيد', 'تم التغليف', 'على الشاحنة', 'في الطريق', 'تم التسليم'],
        driver: 'تم تعيين المندوب',
        code: 'أُرسل الرمز برسالة نصية',
      },
    },
    track: {
      label: 'رقم الطلب',
      placeholder: 'مثال: 100228994',
      button: 'تتبّع',
      hint: 'تجده في رسالة تأكيد طلبك.',
    },
    marquee: [
      'مسح في كل خطوة',
      'تتبّع مباشر للطلب',
      'رمز تحقق عند الباب',
      'نوصّل في جميع أنحاء المملكة',
      'بالعربية والإنجليزية',
    ],
    route: {
      eyebrow: 'كيف نوصّل',
      title: 'رحلة طلبك',
      lede: 'خمس محطات، وكل محطة مسجّلة. تعرف دائمًا أين طلبك.',
      steps: [
        {
          tag: 'بوابة العمليات',
          title: 'استلمنا طلبك',
          body: 'يصل طلبك إلى بوابة العمليات فور تأكيده، فيرى فريقنا المنتجات والعنوان ومدينة التوصيل مباشرة.',
          shot: 'portal-orders',
          kind: 'browser',
          alt: 'بوابة عمليات شاهين: قائمة الطلبات مع الحالة والمدينة',
        },
        {
          tag: 'المستودع',
          title: 'تغليف وملصق لكل قطعة',
          body: 'لكل صندوق ملصق ورمز QR خاص به. الطلب المكوّن من صندوقين يُتتبَّع كطردين، فلا تُنسى أي قطعة.',
          shot: 'portal-order-detail',
          kind: 'browser',
          alt: 'تفاصيل الطلب في بوابة العمليات مع كل طرد',
        },
        {
          tag: 'تطبيق المندوب',
          title: 'مسح وتحميل على الشاحنة',
          body: 'يمسح المندوب ملصق كل طرد قبل مغادرة المستودع، ومن تلك اللحظة يصبح كل طرد مسؤولية مندوب محدد بالاسم.',
          shot: 'app/07-scan-claim',
          kind: 'phone',
          alt: 'تطبيق مندوب شاهين: مسح ملصق الطرد لاستلامه',
        },
        {
          tag: 'صفحة التتبّع',
          title: 'في الطريق إليك',
          body: 'تابع طلبك في صفحة التتبّع برقم الطلب، وتظهر كل حالة مع وقت حدوثها.',
          shot: 'tracking-mobile',
          kind: 'phone',
          alt: 'صفحة تتبّع شاهين لطلب خرج للتوصيل',
        },
        {
          tag: 'عند بابك',
          title: 'التسليم برمزك',
          body: 'يصلك رمز تحقق برسالة نصية، ويُدخله المندوب لتأكيد التسليم، فلا يُسجَّل الطلب كمُسلَّم إلا وهو بين يديك.',
          shot: 'app/05-otp',
          kind: 'phone',
          alt: 'تطبيق مندوب شاهين: إدخال رمز التحقق الخاص بالعميل',
        },
      ],
    },
    promise: {
      eyebrow: 'وعدنا',
      title: 'ما يمكنك الاعتماد عليه',
      items: [
        {
          key: 'code',
          title: 'لا تسليم بدون رمز.',
          body: 'لا يُسجَّل الطلب كمُسلَّم إلا بعد أن يُدخل المندوب الرمز الذي نرسله لك. شاركه فقط عندما يكون طلبك بين يديك.',
        },
        {
          key: 'boxes',
          title: 'كل صندوق محسوب',
          body: 'السرير في صندوق والمرتبة في آخر؟ كل صندوق يُمسح ويُتتبَّع وحده.',
        },
        {
          key: 'live',
          title: 'اعرف أين طلبك',
          body: 'تعرض صفحة التتبّع كل خطوة مع وقتها، من التأكيد حتى باب منزلك.',
        },
        {
          key: 'driver',
          title: 'مندوب محدد بالاسم',
          body: 'كل طرد مسند إلى مندوب واحد، فتعرف دائمًا من يحمل طلبك.',
        },
        {
          key: 'missed',
          title: 'لم تكن في المنزل؟',
          body: 'إذا تعذّر التسليم، يسجّل المندوب السبب ويتابع فريقنا معك لتحديد موعد جديد.',
        },
        {
          key: 'kingdom',
          title: 'في جميع أنحاء المملكة',
          body: 'حيث لا يصل أسطولنا، نشحن مع شريكنا ناقل إكسبرس، وتربطك صفحة التتبّع بتتبّعهم مباشرة.',
        },
      ],
    },
    ops: {
      eyebrow: 'خلف الكواليس',
      title: 'شاشة واحدة لكل طلب',
      body: 'يدير فريق العمليات كل توصيلة من بوابة شاهين: الطلبات والطرود والمناديب وأذونات الخروج والمرتجعات. وإذا تأخر شيء، يرونه أولًا.',
      chips: ['الطلبات', 'الطرود', 'المناديب', 'أذونات الخروج', 'المرتجعات', 'شحنات ناقل'],
      alts: {
        dashboard: 'لوحة بوابة عمليات شاهين مع رسوم بيانية للتوصيل',
        naqel: 'مساحة شحن ناقل في بوابة العمليات',
        drivers: 'صفحة المناديب في بوابة العمليات',
      },
      captions: { naqel: 'شحنات ناقل إكسبرس', drivers: 'إدارة المناديب' },
    },
    drivers: {
      eyebrow: 'تطبيق مندوب شاهين',
      title: 'مصمَّم لمناديبنا',
      body: 'مسح لاستلام الطرد، وقائمة واضحة بكل ما على الشاحنة، وتأكيد التسليم برمز العميل. بالعربية والإنجليزية.',
      screens: [
        { shot: 'app/02-dashboard', caption: 'اليوم في لمحة' },
        { shot: 'app/07-scan-claim', caption: 'امسح واستلم' },
        { shot: 'app/03-in-transit', caption: 'كل ما على الشاحنة' },
        { shot: 'app/05-otp', caption: 'التأكيد بالرمز' },
        { shot: 'app/06-delivered', caption: 'كل توصيلة مسجّلة' },
      ],
    },
    cta: {
      title: 'أين طلبي؟',
      body: 'أدخل رقم طلبك لتعرف أين هو الآن.',
    },
    faq: {
      eyebrow: 'الأسئلة',
      title: 'معلومات تهمّك',
      items: [
        {
          q: 'كيف أتتبّع طلبي؟',
          a: 'أدخل رقم طلبك في هذه الصفحة أو في tracking.shaheene.com، وستظهر لك كل حالة مع وقت حدوثها.',
        },
        {
          q: 'لماذا أعطي المندوب رمزًا؟',
          a: 'الرمز يثبت أن طلبك وصلك. لا يستطيع المندوب تسجيل الطلب كمُسلَّم بدونه، لذا لا تشاركه إلا عندما يكون طلبك بين يديك.',
        },
        {
          q: 'ماذا لو لم أكن في المنزل؟',
          a: 'يسجّل المندوب سبب تعذّر التسليم، ويتابع فريقنا معك لتحديد موعد جديد. ويمكنك أيضًا التواصل معنا مباشرة.',
        },
        {
          q: 'وصل طلبي في أكثر من صندوق.',
          a: 'كل صندوق يُمسح ويُتتبَّع بشكل منفصل، وتعرض صفحة التتبّع حالة كل طرد.',
        },
        {
          q: 'هل توصلون خارج المدن الرئيسية؟',
          a: 'نعم. حيث لا يصل أسطولنا نشحن مع ناقل إكسبرس، وتربطك صفحة التتبّع بتتبّعهم.',
        },
        {
          q: 'كيف أتواصل معكم؟',
          a: `راسلنا على ${SUPPORT_EMAIL} أو اتصل على ${SUPPORT_PHONE}.`,
        },
      ],
    },
    footer: {
      about: 'شاهين هي خدمة التوصيل لدى ليجند سليب.',
      track: 'تتبّع طلبًا',
      legal: 'الشروط والخصوصية',
      contact: 'تواصل معنا',
      rights: 'ليجند سليب. جميع الحقوق محفوظة.',
      top: 'العودة للأعلى',
    },
  },
}
