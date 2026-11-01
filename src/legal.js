// Privacy Policy, Terms and Delete-account pages (EN + AR).
// Written to meet Google Play's User Data policy for the Shaheen Driver app:
// the policy names the app and developer, lists the data collected, how it is
// used and shared, security, retention and deletion, and a contact. The
// delete-account page is the "web link" Play Console asks for.
// Section bodies are trusted HTML strings.
import { SUPPORT_EMAIL, SUPPORT_PHONE } from './content.js'

export const EFFECTIVE = { en: '1 November 2026', ar: '1 نوفمبر 2026' }

const mail = (subject) =>
  `<a href="mailto:${SUPPORT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}" dir="ltr">${SUPPORT_EMAIL}</a>`
const tel = `<a href="tel:${SUPPORT_PHONE}" dir="ltr">${SUPPORT_PHONE}</a>`
const DELETE_SUBJECT = 'Delete my Shaheen Driver account'

export const legal = {
  en: {
    nav: { privacy: 'Privacy Policy', terms: 'Terms & Conditions', delete: 'Delete my account', legal: 'Legal', updated: 'Effective', contents: 'On this page' },
    privacy: {
      slug: 'privacy',
      title: 'Privacy Policy',
      lede: 'What personal data Shaheen processes, why we process it, who we share it with, and how you can access or delete it.',
      sections: [
        {
          id: 'who',
          h: 'Who we are',
          body: `<p>Shaheen is the delivery service of <b>Legend Sleep</b> ("we", "us"), Kingdom of Saudi Arabia. This policy covers:</p>
<ul>
<li>this website, <b>shaheene.com</b>;</li>
<li>our order tracking page, <b>tracking.shaheene.com</b>;</li>
<li>the deliveries we make to Legend Sleep customers;</li>
<li>the <b>Shaheen Driver</b> app for Android (package <span dir="ltr">com.legend.delivery</span>), used by our authorised delivery drivers.</li>
</ul>
<p>We process personal data in line with the Saudi Personal Data Protection Law (PDPL).</p>`,
        },
        {
          id: 'customers',
          h: 'Customers: data we use to deliver your order',
          body: `<p>When you order from Legend Sleep, we receive the details needed to deliver it:</p>
<ul>
<li>your name, mobile number and delivery address (city and district);</li>
<li>the order number, the items and number of packages, the order value and the payment method;</li>
<li>the status of each package, with the date and time of each step;</li>
<li>delivery confirmation: we send a one-time code by SMS to your mobile number, and the driver enters it when you receive your order;</li>
<li>if a delivery does not happen, the reason the driver records (for example "customer not available") and any new delivery date.</li>
</ul>
<p>We do not ask you to create an account, and we do not collect payment card details.</p>`,
        },
        {
          id: 'web',
          h: 'Website and tracking page',
          body: `<ul>
<li><b>Tracking:</b> to track an order, you enter its order number. The tracking page then shows the order status, the delivery city and the history of each package. It does not show your phone number or full address.</li>
<li><b>No cookies, ads or analytics:</b> this website does not set cookies and does not use advertising or third-party analytics. The tracking page saves only your language choice (Arabic or English) in your browser.</li>
<li><b>Server logs:</b> like most websites, our hosting may keep standard technical logs (such as IP address, browser type and time of request) for a limited time to keep the service secure and working.</li>
</ul>`,
        },
        {
          id: 'drivers',
          h: 'Drivers: the Shaheen Driver app',
          body: `<p>The Shaheen Driver app is a work tool for drivers we have authorised. Our operations team creates the accounts; you cannot sign up from inside the app. The app processes:</p>
<ul>
<li><b>Account data:</b> your email address and password (to sign in), your name, role and assigned warehouse. Passwords are stored on our servers in hashed form.</li>
<li><b>Sign-in session:</b> a session token is kept in the app's private storage on your device so you stay signed in. Signing out removes it. App backups are disabled, so the token is not copied to cloud backups.</li>
<li><b>Delivery activity:</b> the orders and packages you claim, pick up and deliver, delivery confirmations, failed-delivery notes and the time of each action, linked to your account.</li>
<li><b>Camera:</b> used only to scan the QR code on shipping labels. Frames are processed on your device; we do not record, store or upload photos or video. You can deny the permission and type order numbers instead.</li>
</ul>
<p>The app shows drivers limited customer details (order number, customer name, city) only to complete the delivery. It has no location tracking (GPS), no advertising or advertising ID, no third-party analytics, and no access to contacts, photos, microphone, SMS or call logs.</p>`,
        },
        {
          id: 'use',
          h: 'Why we use the data',
          body: `<ul>
<li>to deliver orders, confirm delivery and show you where your order is;</li>
<li>to send you SMS messages about your delivery, including your one-time code;</li>
<li>to arrange a new delivery time when a delivery does not happen;</li>
<li>to sign drivers in, assign deliveries and keep an accurate delivery record;</li>
<li>to handle returns, resolve disputes, investigate lost or damaged items and prevent fraud;</li>
<li>to meet legal, tax and accounting obligations.</li>
</ul>
<p>We process this data because it is needed to deliver your order or to perform our engagement with drivers, for our legitimate interest in running a reliable delivery service, and where the law requires it. We do not use it for advertising.</p>`,
        },
        {
          id: 'sharing',
          h: 'Who we share it with',
          body: `<p>We do not sell personal data. We share it only with:</p>
<ul>
<li><b>Legend Sleep</b>, the seller of your order;</li>
<li><b>Shipping partners</b> such as Naqel Express, when your order is delivered by them outside our own delivery areas. They receive the details needed to deliver it;</li>
<li><b>Service providers</b> that host our systems and send SMS on our behalf, under contracts that protect the data;</li>
<li><b>Authorities</b>, when the law requires it.</li>
</ul>`,
        },
        {
          id: 'security',
          h: 'Security',
          body: `<p>All traffic between the website, the tracking page, the app and our servers is encrypted in transit (HTTPS). Access to delivery records is limited by role, and drivers see only what they need for a delivery. No system is completely secure, but we work to protect your data and review our safeguards regularly.</p>`,
        },
        {
          id: 'retention',
          h: 'How long we keep it',
          body: `<ul>
<li><b>Customer delivery data</b> is kept as long as needed to complete the delivery, handle returns and warranty claims, and meet legal and accounting obligations.</li>
<li><b>Driver accounts</b> are kept while the driver is authorised. When you ask us to delete your profile, <b>we delete your account and its personal data within 24 hours</b>.</li>
<li>Delivery records that the law requires us to keep are kept only for the required period, and are no longer linked to an active account.</li>
</ul>`,
        },
        {
          id: 'rights',
          h: 'Your rights and deleting your data',
          body: `<p>Under the PDPL you can ask to be informed about, access, correct or delete your personal data, and withdraw consent where processing is based on consent.</p>
<ul>
<li><b>Drivers:</b> tap <b>Delete my account</b> in the Shaheen Driver app menu, or email ${mail(DELETE_SUBJECT)} from your registered email address. We delete your profile within 24 hours. See <a href="../delete-account/">Delete my account</a>.</li>
<li><b>Customers:</b> email ${mail()} with your order number and what you are asking for.</li>
</ul>
<p>We answer other requests within 30 days.</p>`,
        },
        {
          id: 'children',
          h: 'Children',
          body: `<p>Our services are not directed at children. The Shaheen Driver app is only for adult drivers we have authorised.</p>`,
        },
        {
          id: 'changes',
          h: 'Changes to this policy',
          body: `<p>We may update this policy. We will change the effective date at the top of this page and, for material changes, tell drivers through the app or by email.</p>`,
        },
        {
          id: 'contact',
          h: 'Contact',
          body: `<p>Legend Sleep, Shaheen delivery service, Kingdom of Saudi Arabia<br>Email: ${mail()}<br>Phone: ${tel}</p>`,
        },
      ],
    },
    terms: {
      slug: 'terms',
      title: 'Terms & Conditions',
      lede: 'The terms for using the Shaheen website, the tracking page and the Shaheen Driver app.',
      sections: [
        {
          id: 'about',
          h: 'About these terms',
          body: `<p>These terms are between you and <b>Legend Sleep</b> ("we", "us"), operator of the Shaheen delivery service. They cover this website, our tracking page and the <b>Shaheen Driver</b> app. By using any of them you agree to these terms. Your purchase itself is governed by Legend Sleep's terms of sale.</p>`,
        },
        {
          id: 'tracking',
          h: 'Website and order tracking',
          body: `<ul>
<li>Use the tracking page only for orders that are yours or that you are receiving on someone's behalf. Do not try to look up other people's orders, and do not scrape or overload our services.</li>
<li>Tracking information and delivery times are our best estimate. They can change because of traffic, weather, address details or other events outside our control.</li>
</ul>`,
        },
        {
          id: 'delivery',
          h: 'Receiving your delivery',
          body: `<ul>
<li>Please make sure your mobile number and address on the order are correct and that someone can receive the order.</li>
<li>We send you a one-time code by SMS. <b>Share it with the driver only when you have your order in your hands.</b> Giving the code confirms that you received the order.</li>
<li>Check the packages when they arrive. If something is missing or damaged, tell the driver and contact us as soon as possible.</li>
<li>If we cannot deliver, we will contact you to arrange a new time.</li>
</ul>`,
        },
        {
          id: 'drivers',
          h: 'Shaheen Driver app',
          body: `<ul>
<li>The app is only for drivers we have authorised. We create your account and may suspend or close it at any time, for example when your engagement ends.</li>
<li>Keep your password secret and do not let anyone else use your account. You are responsible for actions taken with it. Tell us immediately at ${mail()} if you think it has been misused.</li>
<li>Record actions truthfully. Only claim a package you physically hold. Only confirm delivery after handing the package to the customer and entering the code they give you.</li>
<li>Do not try to bypass delivery confirmation, guess codes, access orders you are not handling, or interfere with the app or our servers.</li>
<li>Do not use the app while driving. Stop safely first, and follow traffic laws at all times.</li>
<li>Customer details shown in the app are confidential. Use them only to complete the delivery. Never copy, photograph or share them, or contact customers for any other purpose.</li>
<li>The app keeps a time-stamped record of your claims, pickups, deliveries and notes. We use it to manage operations, settle disputes and meet legal obligations.</li>
<li>These terms apply alongside your contract with us as a driver. If they conflict, that contract prevails.</li>
</ul>`,
        },
        {
          id: 'availability',
          h: 'Availability',
          body: `<p>We aim to keep our services available but cannot guarantee they will be uninterrupted or error-free. We may change, suspend or stop features.</p>`,
        },
        {
          id: 'ip',
          h: 'Intellectual property',
          body: `<p>The Shaheen name and logo, this website, the tracking page and the app belong to us or our licensors. Drivers receive a limited, non-transferable right to use the app for their work with us only.</p>`,
        },
        {
          id: 'liability',
          h: 'Liability',
          body: `<p>To the extent the law allows, our services are provided "as is" and we are not liable for indirect or consequential losses arising from their use. Nothing in these terms limits liability that cannot be limited by law.</p>`,
        },
        {
          id: 'privacy',
          h: 'Privacy',
          body: `<p>How we handle personal data is explained in our <a href="../privacy/">Privacy Policy</a>.</p>`,
        },
        {
          id: 'changes',
          h: 'Changes',
          body: `<p>We may update these terms. Continued use after the effective date of an update means you accept it.</p>`,
        },
        {
          id: 'law',
          h: 'Governing law',
          body: `<p>These terms are governed by the laws of the Kingdom of Saudi Arabia, and the competent courts of the Kingdom have jurisdiction. If the Arabic and English versions differ, the Arabic version prevails.</p>`,
        },
        {
          id: 'contact',
          h: 'Contact',
          body: `<p>Email: ${mail()}<br>Phone: ${tel}</p>`,
        },
      ],
    },
    delete: {
      slug: 'delete-account',
      title: 'Delete my account',
      lede: 'Ask us to delete your Shaheen Driver profile at any time. We delete it within 24 hours.',
      app: 'Shaheen Driver app by Legend Sleep',
      cta: 'Email a deletion request',
      promise: 'Deleted within 24 hours',
      sections: [
        {
          id: 'how',
          h: 'How to request deletion',
          body: `<ol>
<li><b>In the app:</b> open the menu and tap <b>Delete my account</b>, then <b>Send deletion request</b>. Your email app opens with the request ready. Send it.</li>
<li><b>By email:</b> write to ${mail(DELETE_SUBJECT)} from the email address you sign in with. Use the subject "Delete my Shaheen Driver account".</li>
</ol>
<p>We may reply to confirm the request came from you. Your profile is deleted within 24 hours.</p>`,
        },
        {
          id: 'deleted',
          h: 'What is deleted',
          body: `<ul>
<li>Your account: email address, password, name, role and assigned warehouse.</li>
<li>Your sign-in sessions: you are signed out on every device.</li>
</ul>`,
        },
        {
          id: 'kept',
          h: 'What may be kept',
          body: `<p>Records of deliveries you completed that the law requires us to keep (for example for accounting or legal claims) are kept only for the required period. They are no longer linked to an active account.</p>`,
        },
        {
          id: 'customers',
          h: 'Customers',
          body: `<p>Customers do not have a Shaheen account. To ask us to delete your delivery data, email ${mail()} with your order number. We answer within 30 days. Data the law requires us to keep is kept only for the required period.</p>`,
        },
      ],
    },
  },

  ar: {
    nav: { privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام', delete: 'حذف حسابي', legal: 'الوثائق النظامية', updated: 'تاريخ السريان', contents: 'في هذه الصفحة' },
    privacy: {
      slug: 'privacy',
      title: 'سياسة الخصوصية',
      lede: 'البيانات الشخصية التي يعالجها شاهين، وسبب معالجتها، ومع من نشاركها، وكيف يمكنك الوصول إليها أو حذفها.',
      sections: [
        {
          id: 'who',
          h: 'من نحن',
          body: `<p>شاهين هي خدمة التوصيل لدى <b>ليجند سليب</b> ("نحن")، المملكة العربية السعودية. تشمل هذه السياسة:</p>
<ul>
<li>هذا الموقع <b dir="ltr">shaheene.com</b>؛</li>
<li>صفحة تتبّع الطلبات <b dir="ltr">tracking.shaheene.com</b>؛</li>
<li>عمليات التوصيل التي ننفذها لعملاء ليجند سليب؛</li>
<li>تطبيق <b>سائق شاهين</b> لنظام أندرويد (الحزمة <span dir="ltr">com.legend.delivery</span>) الذي يستخدمه مناديب التوصيل المعتمدون لدينا.</li>
</ul>
<p>نعالج البيانات الشخصية وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية.</p>`,
        },
        {
          id: 'customers',
          h: 'العملاء: البيانات التي نستخدمها لتوصيل طلبك',
          body: `<p>عندما تطلب من ليجند سليب، نستلم البيانات اللازمة لتوصيل طلبك:</p>
<ul>
<li>اسمك ورقم جوالك وعنوان التوصيل (المدينة والحي)؛</li>
<li>رقم الطلب والمنتجات وعدد الطرود وقيمة الطلب وطريقة الدفع؛</li>
<li>حالة كل طرد مع تاريخ ووقت كل خطوة؛</li>
<li>تأكيد التسليم: نرسل رمز تحقق لمرة واحدة برسالة نصية إلى جوالك، ويُدخله المندوب عند استلامك الطلب؛</li>
<li>إذا تعذّر التسليم، السبب الذي يسجّله المندوب (مثل "العميل غير متاح") وأي موعد توصيل جديد.</li>
</ul>
<p>لا نطلب منك إنشاء حساب، ولا نجمع بيانات بطاقات الدفع.</p>`,
        },
        {
          id: 'web',
          h: 'الموقع وصفحة التتبّع',
          body: `<ul>
<li><b>التتبّع:</b> لتتبّع طلب تُدخل رقمه، فتعرض صفحة التتبّع حالة الطلب ومدينة التوصيل وسجل كل طرد، ولا تعرض رقم جوالك أو عنوانك الكامل.</li>
<li><b>لا ملفات تعريف ارتباط ولا إعلانات ولا تحليلات:</b> لا يضع هذا الموقع ملفات تعريف ارتباط (كوكيز) ولا يستخدم إعلانات أو أدوات تحليل من أطراف ثالثة. تحفظ صفحة التتبّع في متصفحك اختيارك للغة فقط (العربية أو الإنجليزية).</li>
<li><b>سجلات الخادم:</b> كمعظم المواقع، قد تحتفظ جهة الاستضافة بسجلات تقنية معتادة (مثل عنوان IP ونوع المتصفح ووقت الطلب) لمدة محدودة لحماية الخدمة وضمان عملها.</li>
</ul>`,
        },
        {
          id: 'drivers',
          h: 'المناديب: تطبيق سائق شاهين',
          body: `<p>تطبيق سائق شاهين أداة عمل للمناديب المعتمدين لدينا. يُنشئ فريق العمليات الحسابات، ولا يمكن التسجيل من داخل التطبيق. يعالج التطبيق:</p>
<ul>
<li><b>بيانات الحساب:</b> بريدك الإلكتروني وكلمة المرور (لتسجيل الدخول)، واسمك ودورك والمستودع المخصص لك. تُحفظ كلمات المرور على خوادمنا بصيغة مشفّرة غير قابلة للاسترجاع.</li>
<li><b>جلسة الدخول:</b> يُحفظ رمز الجلسة في التخزين الخاص بالتطبيق على جهازك لتبقى مسجّلًا، ويُحذف عند تسجيل الخروج. النسخ الاحتياطي للتطبيق معطّل، فلا يُنسخ الرمز إلى النسخ الاحتياطية السحابية.</li>
<li><b>نشاط التوصيل:</b> الطلبات والطرود التي تستلمها وتنقلها وتسلّمها، وتأكيدات التسليم، وملاحظات تعذّر التسليم، ووقت كل إجراء، مرتبطة بحسابك.</li>
<li><b>الكاميرا:</b> تُستخدم فقط لمسح رمز QR على ملصقات الشحن. تُعالَج الصور على جهازك، ولا نسجّل أو نحفظ أو نرفع أي صور أو مقاطع. يمكنك رفض الإذن وإدخال أرقام الطلبات يدويًا.</li>
</ul>
<p>يعرض التطبيق للمندوب بيانات محدودة عن العميل (رقم الطلب واسم العميل والمدينة) لإتمام التوصيل فقط. لا يتتبّع التطبيق الموقع الجغرافي (GPS)، ولا يحتوي على إعلانات أو معرّف إعلاني أو أدوات تحليل من أطراف ثالثة، ولا يصل إلى جهات الاتصال أو الصور أو الميكروفون أو الرسائل أو سجل المكالمات.</p>`,
        },
        {
          id: 'use',
          h: 'لماذا نستخدم البيانات',
          body: `<ul>
<li>لتوصيل الطلبات وتأكيد التسليم وإظهار مكان طلبك؛</li>
<li>لإرسال رسائل نصية عن توصيلك، ومنها رمز التحقق؛</li>
<li>لترتيب موعد جديد إذا تعذّر التسليم؛</li>
<li>لتسجيل دخول المناديب وإسناد التوصيلات والاحتفاظ بسجل توصيل دقيق؛</li>
<li>لمعالجة المرتجعات وحل النزاعات والتحقيق في الطرود المفقودة أو التالفة ومنع الاحتيال؛</li>
<li>للوفاء بالالتزامات النظامية والضريبية والمحاسبية.</li>
</ul>
<p>نعالج هذه البيانات لأنها لازمة لتوصيل طلبك أو لتنفيذ تعاقدنا مع المناديب، ولمصلحتنا المشروعة في تشغيل خدمة توصيل موثوقة، وحيثما يقتضي النظام ذلك. ولا نستخدمها للإعلانات.</p>`,
        },
        {
          id: 'sharing',
          h: 'مع من نشاركها',
          body: `<p>لا نبيع البيانات الشخصية، ونشاركها فقط مع:</p>
<ul>
<li><b>ليجند سليب</b>، البائع لطلبك؛</li>
<li><b>شركاء الشحن</b> مثل ناقل إكسبرس، عندما يوصلون طلبك خارج نطاق أسطولنا، ويستلمون البيانات اللازمة لتوصيله فقط؛</li>
<li><b>مزودي الخدمات</b> الذين يستضيفون أنظمتنا ويرسلون الرسائل النصية نيابة عنا، بموجب عقود تحمي البيانات؛</li>
<li><b>الجهات الرسمية</b> عندما يُلزمنا النظام بذلك.</li>
</ul>`,
        },
        {
          id: 'security',
          h: 'الأمان',
          body: `<p>جميع الاتصالات بين الموقع وصفحة التتبّع والتطبيق وخوادمنا مشفّرة أثناء النقل (HTTPS). يُقيَّد الوصول إلى سجلات التوصيل حسب الدور الوظيفي، ولا يرى المندوب إلا ما يلزمه للتوصيل. لا يوجد نظام آمن تمامًا، لكننا نعمل على حماية بياناتك ونراجع إجراءاتنا الوقائية بانتظام.</p>`,
        },
        {
          id: 'retention',
          h: 'مدة الاحتفاظ',
          body: `<ul>
<li><b>بيانات توصيل العملاء</b> نحتفظ بها المدة اللازمة لإتمام التوصيل ومعالجة المرتجعات ومطالبات الضمان والوفاء بالالتزامات النظامية والمحاسبية.</li>
<li><b>حسابات المناديب</b> نحتفظ بها طوال فترة الاعتماد. عند طلبك حذف ملفك الشخصي <b>نحذف حسابك وبياناته الشخصية خلال 24 ساعة</b>.</li>
<li>سجلات التوصيل التي يُلزمنا النظام بالاحتفاظ بها نحتفظ بها للمدة المطلوبة فقط، دون ربطها بحساب نشط.</li>
</ul>`,
        },
        {
          id: 'rights',
          h: 'حقوقك وحذف بياناتك',
          body: `<p>وفقًا لنظام حماية البيانات الشخصية يحق لك العلم بمعالجة بياناتك والوصول إليها وتصحيحها وطلب حذفها، والرجوع عن موافقتك حين تكون المعالجة مبنية عليها.</p>
<ul>
<li><b>المناديب:</b> اضغط <b>حذف حسابي</b> في قائمة تطبيق سائق شاهين، أو راسلنا على ${mail(DELETE_SUBJECT)} من بريدك المسجّل، ونحذف ملفك خلال 24 ساعة. راجع <a href="../delete-account/">حذف حسابي</a>.</li>
<li><b>العملاء:</b> راسلنا على ${mail()} مع رقم طلبك وما تطلبه.</li>
</ul>
<p>ونرد على الطلبات الأخرى خلال 30 يومًا.</p>`,
        },
        {
          id: 'children',
          h: 'الأطفال',
          body: `<p>خدماتنا غير موجّهة للأطفال، وتطبيق سائق شاهين مخصص فقط للمناديب البالغين المعتمدين لدينا.</p>`,
        },
        {
          id: 'changes',
          h: 'التعديلات على هذه السياسة',
          body: `<p>قد نحدّث هذه السياسة، وسنغيّر تاريخ السريان أعلى هذه الصفحة، وفي حال التعديلات الجوهرية سنُبلغ المناديب عبر التطبيق أو البريد الإلكتروني.</p>`,
        },
        {
          id: 'contact',
          h: 'التواصل',
          body: `<p>ليجند سليب، خدمة توصيل شاهين، المملكة العربية السعودية<br>البريد الإلكتروني: ${mail()}<br>الهاتف: ${tel}</p>`,
        },
      ],
    },
    terms: {
      slug: 'terms',
      title: 'الشروط والأحكام',
      lede: 'شروط استخدام موقع شاهين وصفحة التتبّع وتطبيق سائق شاهين.',
      sections: [
        {
          id: 'about',
          h: 'عن هذه الشروط',
          body: `<p>هذه الشروط بينك وبين <b>ليجند سليب</b> ("نحن")، المشغّلة لخدمة توصيل شاهين، وتشمل هذا الموقع وصفحة التتبّع وتطبيق <b>سائق شاهين</b>. باستخدامك أيًّا منها فإنك توافق على هذه الشروط. أما عملية الشراء نفسها فتخضع لشروط البيع لدى ليجند سليب.</p>`,
        },
        {
          id: 'tracking',
          h: 'الموقع وتتبّع الطلبات',
          body: `<ul>
<li>استخدم صفحة التتبّع فقط لطلباتك أو للطلبات التي تستلمها نيابة عن غيرك. لا تحاول البحث عن طلبات الآخرين، ولا تجمع البيانات آليًا أو تُثقل خدماتنا.</li>
<li>معلومات التتبّع ومواعيد التوصيل تقديرية، وقد تتغير بسبب الزحام أو الطقس أو بيانات العنوان أو ظروف خارجة عن إرادتنا.</li>
</ul>`,
        },
        {
          id: 'delivery',
          h: 'استلام طلبك',
          body: `<ul>
<li>تأكد من صحة رقم جوالك وعنوانك في الطلب، ومن وجود من يستلم الطلب.</li>
<li>نرسل لك رمز تحقق برسالة نصية. <b>لا تشاركه مع المندوب إلا عندما يكون طلبك بين يديك</b>، فإعطاء الرمز يؤكد أنك استلمت الطلب.</li>
<li>افحص الطرود عند وصولها، وإذا كان هناك نقص أو تلف فأبلغ المندوب وتواصل معنا في أقرب وقت.</li>
<li>إذا تعذّر التسليم سنتواصل معك لتحديد موعد جديد.</li>
</ul>`,
        },
        {
          id: 'drivers',
          h: 'تطبيق سائق شاهين',
          body: `<ul>
<li>التطبيق مخصص فقط للمناديب المعتمدين لدينا. نحن من ينشئ حسابك، ويجوز لنا إيقافه أو إغلاقه في أي وقت، مثل انتهاء التعاقد.</li>
<li>حافظ على سرية كلمة المرور ولا تسمح لغيرك باستخدام حسابك، فأنت مسؤول عن الإجراءات التي تتم به. أبلغنا فورًا على ${mail()} إذا اشتبهت في إساءة استخدامه.</li>
<li>سجّل الإجراءات بصدق: لا تستلم طردًا في التطبيق إلا إذا كان بحوزتك فعلًا، ولا تؤكد التسليم إلا بعد تسليم الطرد للعميل وإدخال الرمز الذي يعطيك إياه.</li>
<li>لا تحاول تجاوز تأكيد التسليم أو تخمين الرموز أو الوصول إلى طلبات لا تتولاها أو التأثير على التطبيق أو خوادمنا.</li>
<li>لا تستخدم التطبيق أثناء القيادة. توقف بأمان أولًا والتزم بأنظمة المرور في جميع الأوقات.</li>
<li>بيانات العملاء في التطبيق سرية، استخدمها لإتمام التوصيل فقط، ولا تنسخها أو تصورها أو تشاركها أو تتواصل مع العملاء لأي غرض آخر.</li>
<li>يحتفظ التطبيق بسجل مؤرخ لعمليات الاستلام والنقل والتسليم والملاحظات، ونستخدمه لإدارة العمليات وتسوية النزاعات والوفاء بالالتزامات النظامية.</li>
<li>تسري هذه الشروط إلى جانب عقدك معنا بصفتك مندوبًا، وعند التعارض يُقدَّم ذلك العقد.</li>
</ul>`,
        },
        {
          id: 'availability',
          h: 'التوفر',
          body: `<p>نسعى لإبقاء خدماتنا متاحة دون أن نضمن عملها دون انقطاع أو أخطاء، ويجوز لنا تغيير الخصائص أو إيقافها.</p>`,
        },
        {
          id: 'ip',
          h: 'الملكية الفكرية',
          body: `<p>اسم شاهين وشعاره وهذا الموقع وصفحة التتبّع والتطبيق مملوكة لنا أو للجهات المرخِّصة لنا. ويحصل المندوب على حق محدود وغير قابل للنقل لاستخدام التطبيق في عمله معنا فقط.</p>`,
        },
        {
          id: 'liability',
          h: 'المسؤولية',
          body: `<p>في حدود ما يسمح به النظام، تُقدَّم خدماتنا "كما هي"، ولا نتحمل المسؤولية عن الخسائر غير المباشرة أو التبعية الناتجة عن استخدامها. ولا يحد أي شيء في هذه الشروط من مسؤولية لا يجوز تحديدها نظامًا.</p>`,
        },
        {
          id: 'privacy',
          h: 'الخصوصية',
          body: `<p>نوضح طريقة تعاملنا مع البيانات الشخصية في <a href="../privacy/">سياسة الخصوصية</a>.</p>`,
        },
        {
          id: 'changes',
          h: 'التعديلات',
          body: `<p>قد نحدّث هذه الشروط، واستمرارك في الاستخدام بعد تاريخ سريان التحديث يعني قبولك له.</p>`,
        },
        {
          id: 'law',
          h: 'النظام الحاكم',
          body: `<p>تخضع هذه الشروط لأنظمة المملكة العربية السعودية، وتختص المحاكم المختصة في المملكة بالنظر في أي نزاع. وعند وجود اختلاف بين النسختين العربية والإنجليزية تُعتمد النسخة العربية.</p>`,
        },
        {
          id: 'contact',
          h: 'التواصل',
          body: `<p>البريد الإلكتروني: ${mail()}<br>الهاتف: ${tel}</p>`,
        },
      ],
    },
    delete: {
      slug: 'delete-account',
      title: 'حذف حسابي',
      lede: 'اطلب حذف ملفك الشخصي في تطبيق سائق شاهين في أي وقت، ونحذفه خلال 24 ساعة.',
      app: 'تطبيق سائق شاهين من ليجند سليب',
      cta: 'أرسل طلب الحذف بالبريد',
      promise: 'الحذف خلال 24 ساعة',
      sections: [
        {
          id: 'how',
          h: 'طريقة طلب الحذف',
          body: `<ol>
<li><b>من التطبيق:</b> افتح القائمة واضغط <b>حذف حسابي</b> ثم <b>إرسال طلب الحذف</b>، فيفتح تطبيق البريد برسالة الطلب جاهزة. أرسلها.</li>
<li><b>بالبريد الإلكتروني:</b> راسلنا على ${mail(DELETE_SUBJECT)} من بريدك الإلكتروني الذي تسجّل به الدخول، بعنوان "حذف حسابي في تطبيق سائق شاهين".</li>
</ol>
<p>قد نرد عليك للتأكد من أن الطلب منك، ونحذف ملفك خلال 24 ساعة.</p>`,
        },
        {
          id: 'deleted',
          h: 'ما الذي يُحذف',
          body: `<ul>
<li>حسابك: البريد الإلكتروني وكلمة المرور والاسم والدور والمستودع المخصص.</li>
<li>جلسات الدخول: يتم تسجيل خروجك من جميع الأجهزة.</li>
</ul>`,
        },
        {
          id: 'kept',
          h: 'ما قد نحتفظ به',
          body: `<p>سجلات التوصيل التي أتممتها والتي يُلزمنا النظام بالاحتفاظ بها (مثل الأغراض المحاسبية أو المطالبات النظامية) نحتفظ بها للمدة المطلوبة فقط، دون ربطها بحساب نشط.</p>`,
        },
        {
          id: 'customers',
          h: 'العملاء',
          body: `<p>ليس للعملاء حساب في شاهين. لطلب حذف بيانات توصيلك راسلنا على ${mail()} مع رقم طلبك، ونرد خلال 30 يومًا. والبيانات التي يُلزمنا النظام بالاحتفاظ بها نحتفظ بها للمدة المطلوبة فقط.</p>`,
        },
      ],
    },
  },
}

export { DELETE_SUBJECT }
