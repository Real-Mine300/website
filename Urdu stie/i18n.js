// i18n.js - language and content translations only
// Keeps language state and updates content per page without affecting theme or other behaviors

(function() {
  const DEFAULT_LANG = 'ur';
  let currentLanguage = DEFAULT_LANG;

  // Centralized translations with page-scoped sections
  const translations = {
    en: {
      banner: { companyName: 'My Company' },
      header: { loginLink: 'Login', signupLink: 'Sign Up' },
      nav: {
        home: 'Home', aboutUs: 'About Us', education: 'Education', gallery: 'Gallery',
        tab5: 'Tab 5', tab6: 'Tab 6', contact: 'Contact Us',
        committeeSub1: 'Committee', committeeSub2: 'Buildings',
        educationSub1: 'Syllabus', educationSub2: 'Classes'
      },
      sideMenu: {
        title: 'Menu', home: 'Home', aboutUs: 'About Us', education: 'Education', gallery: 'Gallery',
        tab5: 'Tab 5', tab6: 'Tab 6', contact: 'Contact Us',
        committeeSub1: 'Committee', committeeSub2: 'Buildings',
        educationSub1: 'Syllabus', educationSub2: 'Classes'
      },
      home: {
        mainContent: 'Welcome to our comprehensive platform where innovation meets excellence. We provide cutting-edge solutions tailored to meet your specific needs. Our team of experts is dedicated to delivering exceptional results that exceed expectations.',
        infoTitle1: 'Innovation', infoDesc1: 'Cutting-edge solutions that drive your business forward with the latest technology and methodologies.', infoLink1: 'Learn More',
        infoTitle2: 'Team Excellence', infoDesc2: 'Our dedicated team of professionals ensures quality delivery and exceptional customer service.', infoLink2: 'Meet Our Team',
        infoTitle3: 'Growth', infoDesc3: 'Strategic solutions designed to accelerate your business growth and maximize your potential.', infoLink3: 'Our Strategy',
        infoTitle4: 'Security', infoDesc4: 'Robust security measures to protect your data and ensure business continuity at all times.', infoLink4: 'Security Details',
        aboutTitle: 'About Us',
        aboutDescription: 'We are a forward-thinking company committed to delivering exceptional value to our clients. With years of experience and a passion for innovation, we help businesses achieve their goals through strategic solutions and dedicated support.',
        aboutLink: 'Learn More About Us',
        aboutImage: 'Company Image'
      },
      committee: {
        pageTitle: 'Committee', pageSubtitle: 'Learn more about our committee structure and leadership',
        storyTitle: 'Our Committee Structure',
        storyContent1: 'Our committee is organized to ensure effective governance and strategic decision-making.',
        storyContent2: 'Each committee is composed of experienced professionals who bring diverse perspectives and expertise.',
        storyContent3: 'Our members are committed to transparency, accountability, and excellence in all decisions.',
        teamTitle: 'Committee Members', teamSubtitle: 'Meet the dedicated individuals who serve on our committees',
        member1Name: 'John Doe', member1Role: 'Chairman', member1Desc: 'Leads the executive committee with 15+ years of leadership experience.',
        member2Name: 'Jane Smith', member2Role: 'Vice Chair', member2Desc: 'Oversees strategic planning and policy development initiatives.',
        member3Name: 'Mike Johnson', member3Role: 'Secretary', member3Desc: 'Manages committee communications and documentation.',
        member4Name: 'Sarah Wilson', member4Role: 'Treasurer', member4Desc: 'Oversees financial matters and budget planning.',
        valuesTitle: 'Committee Principles',
        value1Title: 'Transparency', value1Desc: 'All committee decisions and processes are conducted with full transparency.',
        value2Title: 'Accountability', value2Desc: 'Committee members are accountable for their decisions and actions.',
        value3Title: 'Inclusivity', value3Desc: 'We ensure diverse representation and inclusive decision-making processes.',
        value4Title: 'Excellence', value4Desc: 'We strive for excellence in all committee deliberations and outcomes.'
      },
      buildings: {
        pageTitle: 'Buildings', pageSubtitle: 'Explore our facilities and infrastructure',
        storyTitle: 'Our Facilities',
        storyContent1: 'Our buildings and facilities are designed to provide the best possible environment.',
        storyContent2: 'Each building is equipped with state-of-the-art technology and amenities.',
        storyContent3: 'We are committed to maintaining sustainable and environmentally friendly facilities.',
        teamTitle: 'Building Locations', teamSubtitle: 'Our strategically located facilities across the region',
        member1Name: 'Headquarters', member1Role: 'Main Office', member1Desc: 'Central hub for executive leadership and operations.',
        member2Name: 'Research & Development', member2Role: 'Innovation Center', member2Desc: 'Facilities for research and product development.',
        member3Name: 'Training Center', member3Role: 'Learning Hub', member3Desc: 'Space for professional development and training.',
        member4Name: 'Data Center', member4Role: 'Technology Hub', member4Desc: 'Secure infrastructure for digital operations.',
        valuesTitle: 'Facility Features',
        value1Title: 'Sustainability', value1Desc: 'Green building practices and energy-efficient systems.',
        value2Title: 'Technology', value2Desc: 'High-speed connectivity and modern infrastructure.',
        value3Title: 'Security', value3Desc: 'Advanced security systems to protect people and assets.',
        value4Title: 'Accessibility', value4Desc: 'Facilities designed for everyone\'s comfort.'
      },
      syllabus: {
        pageTitle: 'Syllabus', pageSubtitle: 'Comprehensive curriculum and learning objectives',
        storyTitle: 'Our Educational Approach',
        storyContent1: 'Our syllabus provides comprehensive learning experiences combining theory and practice.',
        storyContent2: 'Courses are structured from fundamentals to advanced applications.',
        storyContent3: 'We continuously update curriculum to reflect the latest industry trends.',
        teamTitle: 'Course Modules', teamSubtitle: 'Structured learning paths for development',
        member1Name: 'Foundation', member1Role: 'Basic Concepts', member1Desc: 'Core principles and fundamentals.',
        member2Name: 'Advanced', member2Role: 'Specialized Skills', member2Desc: 'In-depth exploration of specialized topics.',
        member3Name: 'Application', member3Role: 'Practical Skills', member3Desc: 'Hands-on projects and real-world scenarios.',
        member4Name: 'Expertise', member4Role: 'Mastery Level', member4Desc: 'Advanced mastery and leadership programs.',
        valuesTitle: 'Learning Objectives',
        value1Title: 'Knowledge', value1Desc: 'Understanding of core concepts and principles.',
        value2Title: 'Skills', value2Desc: 'Practical abilities and technical competencies.',
        value3Title: 'Innovation', value3Desc: 'Creative thinking and problem-solving.',
        value4Title: 'Leadership', value4Desc: 'Collaboration and leadership development.'
      },
      classes: {
        pageTitle: 'Classes', pageSubtitle: 'Available courses and class schedules',
        storyTitle: 'Our Class Offerings',
        storyContent1: 'A wide range of classes for diverse learning needs.',
        storyContent2: 'Led by experienced instructors with small class sizes.',
        storyContent3: 'Flexible schedules to fit different preferences and availability.',
        teamTitle: 'Available Classes', teamSubtitle: 'Courses for all skill levels',
        member1Name: 'Beginner Course', member1Role: 'Foundation Level', member1Desc: 'Build strong foundational knowledge.',
        member2Name: 'Intermediate Course', member2Role: 'Advanced Skills', member2Desc: 'Advance your skills and knowledge.',
        member3Name: 'Advanced Course', member3Role: 'Expert Level', member3Desc: 'Mastery and specialization.',
        member4Name: 'Workshop', member4Role: 'Hands-on Training', member4Desc: 'Interactive sessions with practical focus.',
        valuesTitle: 'Class Features',
        value1Title: 'Flexible Schedule', value1Desc: 'Multiple time slots for different schedules.',
        value2Title: 'Small Groups', value2Desc: 'Personalized attention and better interaction.',
        value3Title: 'Certification', value3Desc: 'Certificates upon successful completion.',
        value4Title: 'Support', value4Desc: 'Ongoing support and resources.'
      },
      courses: {
        pageTitle: 'Courses', pageSubtitle: 'Curated courses for members',
        storyTitle: 'Featured Courses',
        storyContent1: 'Explore our curated catalogue of professional courses.',
        storyContent2: 'Each course is designed with clear learning objectives and outcomes.',
        storyContent3: 'Members receive access to exclusive content and personalized tracks.',
        teamTitle: 'Membership Tracks', teamSubtitle: 'Choose a learning path',
        member1Name: 'Starter Track', member1Role: 'Essentials', member1Desc: 'Build core skills with foundational courses.',
        member2Name: 'Pro Track', member2Role: 'Advanced', member2Desc: 'Go deeper with advanced, hands-on content.',
        member3Name: 'Expert Track', member3Role: 'Mastery', member3Desc: 'Achieve mastery and mentor others.',
        member4Name: 'Electives', member4Role: 'Mix & Match', member4Desc: 'Customize your learning with electives.',
        valuesTitle: 'Member Benefits',
        value1Title: 'Certificates', value1Desc: 'Earn shareable certificates.',
        value2Title: 'Community', value2Desc: 'Join peer groups and forums.',
        value3Title: 'Career', value3Desc: 'Access career resources.',
        value4Title: 'Support', value4Desc: 'Priority member support.'
      },
      gallery: {
        pageTitle: 'Gallery', pageSubtitle: 'Explore our collection of images and projects'
      },
      contact: {
        pageTitle: 'Contact Us', pageSubtitle: "Get in touch with us. We'd love to hear from you!",
        formTitle: 'Send us a Message', nameLabel: 'Full Name *', emailLabel: 'Email Address *', phoneLabel: 'Phone Number',
        subjectLabel: 'Subject *', selectOption: 'Select a subject', generalOption: 'General Inquiry', supportOption: 'Technical Support', salesOption: 'Sales Question', partnershipOption: 'Partnership', otherOption: 'Other',
        messageLabel: 'Message *', submitBtn: 'Send Message', infoTitle: 'Contact Information', addressTitle: 'Address', addressText: '123 Business Street, Suite 100\nCity, State 12345', phoneTitle: 'Phone', phoneText: '+1 (555) 123-4567', emailTitle: 'Email', emailText: 'info@mycompany.com', hoursTitle: 'Business Hours', hoursText: 'Mon-Fri 9-6, Sat 10-4', mapTitle: 'Find Us', mapPlaceholder: 'Interactive Map Coming Soon'
      },
      auth: {
        loginTitle: 'Login', loginSubtitle: 'Welcome back! Please sign in to your account', emailLabel: 'Email Address', passwordLabel: 'Password', rememberMeText: 'Remember me', loginBtnText: 'Sign In', noAccountText: "Don't have an account?", signupLink: 'Create Account', orText: 'or', googleLoginText: 'Continue with Google',
        signupTitle: 'Create Account', signupSubtitle: 'Join us! Create your account to get started', firstNameLabel: 'First Name', lastNameLabel: 'Last Name', signupEmailLabel: 'Email Address', signupPasswordLabel: 'Password', confirmPasswordLabel: 'Confirm Password', agreeTermsText: 'I agree to the Terms of Service and Privacy Policy', newsletterText: 'Subscribe to our newsletter for updates', signupBtnText: 'Create Account', haveAccountText: 'Already have an account?', loginLink: 'Sign In', googleSignupText: 'Continue with Google', newUserMessage: 'New user? Sign up', existingUserMessage: 'Already have an account? Log in'
      },
      success: {
        title: 'Success', subtitle: 'You are signed in. Welcome!', cta: 'Go to Courses'
      },
      langAttr: 'en', dirClass: 'ltr'
    },
    ur: {
      banner: { companyName: 'میری کمپنی' },
      header: { loginLink: 'لاگ ان', signupLink: 'سائن اپ' },
      nav: {
        home: 'ہوم', aboutUs: 'بارے میں', education: 'تعلیم', gallery: 'گیلری',
        tab5: 'ٹیب 5', tab6: 'ٹیب 6', contact: 'ہم سے رابطہ کریں',
        committeeSub1: 'کمیٹی', committeeSub2: 'عمارتیں', educationSub1: 'نصاب', educationSub2: 'کلاسز'
      },
      sideMenu: {
        title: 'مینو', home: 'ہوم', aboutUs: 'بارے میں', education: 'تعلیم', gallery: 'گیلری',
        tab5: 'ٹیب 5', tab6: 'ٹیب 6', contact: 'ہم سے رابطہ کریں', committeeSub1: 'کمیٹی', committeeSub2: 'عمارتیں', educationSub1: 'نصاب', educationSub2: 'کلاسز'
      },
      home: {
        mainContent: 'ہمارے جامع پلیٹ فارم میں خوش آمدید جہاں جدت اور عمدگی ملتی ہے۔ ہم آپ کی مخصوص ضروریات کے مطابق جدید حل فراہم کرتے ہیں۔ ہمارے ماہرین کی ٹیم غیر معمولی نتائج فراہم کرنے کے لیے وقف ہے جو توقعات سے بڑھ کر ہیں۔',
        infoTitle1: 'جدت', infoDesc1: 'جدید ٹیکنالوجی اور طریقوں کے ساتھ آپ کے کاروبار کو آگے بڑھانے والے جدید حل۔', infoLink1: 'مزید جانیں',
        infoTitle2: 'ٹیم کی عمدگی', infoDesc2: 'ہمارے پیشہ ور افراد کی وقف ٹیم معیاری ترسیل اور غیر معمولی کسٹمر سروس کو یقینی بناتی ہے۔', infoLink2: 'ہماری ٹیم سے ملیں',
        infoTitle3: 'ترقی', infoDesc3: 'آپ کے کاروبار کی ترقی کو تیز کرنے اور آپ کی صلاحیت کو زیادہ سے زیادہ بنانے کے لیے حکمت عملی حل۔', infoLink3: 'ہماری حکمت عملی',
        infoTitle4: 'سیکیورٹی', infoDesc4: 'آپ کے ڈیٹا کی حفاظت اور کاروباری تسلسل کو یقینی بنانے کے لیے مضبوط اقدامات۔', infoLink4: 'سیکیورٹی کی تفصیلات',
        aboutTitle: 'ہمارے بارے میں', aboutDescription: 'ہم ایک پیش رفت پسند کمپنی ہیں جو اپنے گاہکوں کو غیر معمولی قیمت فراہم کرنے کے لیے وقف ہیں۔', aboutLink: 'ہمارے بارے میں مزید جانیں', aboutImage: 'کمپنی کی تصویر'
      },
      committee: {
        pageTitle: 'کمیٹی', pageSubtitle: 'ہماری کمیٹی کی ساخت اور قیادت کے بارے میں جانیں',
        storyTitle: 'ہماری کمیٹی کی ساخت',
        storyContent1: 'ہماری کمیٹی مؤثر طرز حکمرانی اور حکمت عملی کے فیصلوں کو یقینی بنانے کے لیے منظم ہے۔',
        storyContent2: 'ہر کمیٹی تجربہ کار پیشہ ور افراد پر مشتمل ہے جو متنوع نقطہ نظر اور مہارت لاتے ہیں۔',
        storyContent3: 'ہمارے اراکین شفافیت، جوابدہی اور عمدگی کے پابند ہیں۔',
        teamTitle: 'کمیٹی کے اراکین', teamSubtitle: 'ان افراد سے ملیں جو ہماری کمیٹیوں میں خدمات انجام دیتے ہیں',
        member1Name: 'جان ڈو', member1Role: 'چیئرمین', member1Desc: '15+ سالہ تجربے کے ساتھ قیادت کرتے ہیں۔',
        member2Name: 'جین سمتھ', member2Role: 'نائب چیئر', member2Desc: 'حکمت عملی منصوبہ بندی اور پالیسی ترقی کی نگرانی۔',
        member3Name: 'مائیک جانسن', member3Role: 'سیکرٹری', member3Desc: 'رابطہ کاری اور دستاویزات کا نظم۔',
        member4Name: 'سارہ ولسن', member4Role: 'خزانچی', member4Desc: 'مالی امور اور بجٹ کی منصوبہ بندی کی نگرانی۔',
        valuesTitle: 'کمیٹی کے اصول',
        value1Title: 'شفافیت', value1Desc: 'تمام فیصلے مکمل شفافیت کے ساتھ۔',
        value2Title: 'جوابدہی', value2Desc: 'اراکین اپنے فیصلوں کے ذمہ دار ہیں۔',
        value3Title: 'شمولیت', value3Desc: 'جامع نمائندگی اور فیصلہ سازی۔',
        value4Title: 'عمدگی', value4Desc: 'ہر معاملے میں عمدگی کی کوشش۔'
      },
      buildings: {
        pageTitle: 'عمارتیں', pageSubtitle: 'ہماری سہولیات اور انفراسٹرکچر دریافت کریں',
        storyTitle: 'ہماری سہولیات',
        storyContent1: 'ہماری عمارتیں بہترین ماحول فراہم کرنے کے لیے ڈیزائن کی گئی ہیں۔',
        storyContent2: 'ہر عمارت جدید ٹیکنالوجی اور سہولیات سے آراستہ ہے۔',
        storyContent3: 'ہم پائیدار اور ماحول دوست سہولیات برقرار رکھنے کے لیے پُرعزم ہیں۔',
        teamTitle: 'عمارتوں کے مقامات', teamSubtitle: 'خطے بھر میں ہماری سہولیات',
        member1Name: 'ہیڈکوارٹر', member1Role: 'مرکزی دفتر', member1Desc: 'قیادت اور آپریشنز کا مرکز۔',
        member2Name: 'تحقیق و ترقی', member2Role: 'انوویشن سنٹر', member2Desc: 'تحقیق اور پروڈکٹ ڈویلپمنٹ سہولیات۔',
        member3Name: 'ٹریننگ سنٹر', member3Role: 'لرننگ ہب', member3Desc: 'پروفیشنل ڈیولپمنٹ کے لیے جگہ۔',
        member4Name: 'ڈیٹا سنٹر', member4Role: 'ٹیکنالوجی ہب', member4Desc: 'ڈیجیٹل آپریشنز کے لیے محفوظ انفراسٹرکچر۔',
        valuesTitle: 'سہولیات کی خصوصیات',
        value1Title: 'پائیداری', value1Desc: 'ماحول دوست ڈیزائن اور توانائی بچت سسٹمز۔',
        value2Title: 'ٹیکنالوجی', value2Desc: 'تیز رفتار کنیکٹیویٹی اور جدید ڈھانچہ۔',
        value3Title: 'سیکیورٹی', value3Desc: 'لوگوں اور اثاثوں کے تحفظ کے لیے جدید نظام۔',
        value4Title: 'رسائی', value4Desc: 'ہر ایک کے لیے آرام دہ سہولیات۔'
      },
      syllabus: {
        pageTitle: 'نصاب', pageSubtitle: 'جامع نصاب اور سیکھنے کے مقاصد',
        storyTitle: 'ہمارا تعلیمی طریقہ',
        storyContent1: 'ہمارا نصاب نظری اور عملی تجربات کو یکجا کرتا ہے۔',
        storyContent2: 'کورسز بنیادی سے اعلیٰ درجے تک ترتیب دیے گئے ہیں۔',
        storyContent3: 'ہم نصاب کو صنعت کے تازہ رجحانات کے مطابق اپڈیٹ کرتے ہیں۔',
        teamTitle: 'کورس ماڈیولز', teamSubtitle: 'ساختہ سیکھنے کے راستے',
        member1Name: 'بنیاد', member1Role: 'بنیادی تصورات', member1Desc: 'بنیادی اصول اور بنیادیں۔',
        member2Name: 'اعلیٰ', member2Role: 'مہارتیں', member2Desc: 'خصوصی موضوعات کی گہرائی سے جانچ۔',
        member3Name: 'عملی', member3Role: 'عملی مہارتیں', member3Desc: 'ہینڈز آن پروجیکٹس اور حقیقی دنیا کی مثالیں۔',
        member4Name: 'مہارت', member4Role: 'ماہرانہ سطح', member4Desc: 'اعلیٰ مہارت اور قیادت کی ترقی۔',
        valuesTitle: 'سیکھنے کے مقاصد',
        value1Title: 'علم', value1Desc: 'بنیادی تصورات کی سمجھ۔',
        value2Title: 'مہارتیں', value2Desc: 'عملی صلاحیتیں اور تکنیکی مہارتیں۔',
        value3Title: 'جدت', value3Desc: 'تخلیقی سوچ اور مسئلہ حل کرنا۔',
        value4Title: 'قیادت', value4Desc: 'تعاون اور قیادت کی ترقی۔'
      },
      classes: {
        pageTitle: 'کلاسز', pageSubtitle: 'دستیاب کورسز اور شیڈولز',
        storyTitle: 'ہماری کلاس پیشکشیں',
        storyContent1: 'متنوع سیکھنے کی ضروریات کے لیے کلاسز کی وسیع رینج۔',
        storyContent2: 'تجربہ کار انسٹرکٹرز کے زیرقیادت، چھوٹی کلاسز۔',
        storyContent3: 'لچکدار شیڈولز مختلف ترجیحات کے مطابق۔',
        teamTitle: 'دستیاب کلاسز', teamSubtitle: 'ہر سطح کے لیے',
        member1Name: 'ابتدائی کورس', member1Role: 'بنیادی سطح', member1Desc: 'بنیادی علم حاصل کریں۔',
        member2Name: 'درمیانی کورس', member2Role: 'ترقی یافتہ مہارتیں', member2Desc: 'مہارتوں میں اضافہ کریں۔',
        member3Name: 'اعلیٰ کورس', member3Role: 'ماہر سطح', member3Desc: 'مہارت اور تخصص حاصل کریں۔',
        member4Name: 'ورکشاپ', member4Role: 'عملی تربیت', member4Desc: 'ہینڈز آن سیشنز۔',
        valuesTitle: 'کلاس فیچرز',
        value1Title: 'لچکدار شیڈول', value1Desc: 'مختلف اوقات دستیاب۔',
        value2Title: 'چھوٹے گروپس', value2Desc: 'ذاتی توجہ اور بہتر تعامل۔',
        value3Title: 'سرٹیفیکیشن', value3Desc: 'کامیابی پر سرٹیفکیٹس۔',
        value4Title: 'سپورٹ', value4Desc: 'مسلسل مدد اور وسائل۔'
      },
      courses: {
        pageTitle: 'کورسز', pageSubtitle: 'اراکین کے لیے خصوصی کورسز',
        storyTitle: 'خصوصی کورسز',
        storyContent1: 'ہمارے منتخب کردہ پروفیشنل کورسز دریافت کریں۔',
        storyContent2: 'ہر کورس واضح اہداف اور نتائج کے ساتھ۔',
        storyContent3: 'اراکین کو خصوصی مواد اور ذاتی راستوں تک رسائی۔',
        teamTitle: 'لرننگ ٹریکس', teamSubtitle: 'اپنا راستہ منتخب کریں',
        member1Name: 'اسٹارٹر ٹریک', member1Role: 'بنیادی', member1Desc: 'بنیادی کورسز کے ساتھ شروع کریں۔',
        member2Name: 'پرو ٹریک', member2Role: 'اعلیٰ', member2Desc: 'اعلیٰ، عملی مواد کے ساتھ گہرائی میں جائیں۔',
        member3Name: 'ایکسپرٹ ٹریک', member3Role: 'مہارت', member3Desc: 'مہارت حاصل کریں اور دوسروں کی رہنمائی کریں۔',
        member4Name: 'اختیاری', member4Role: 'Mix & Match', member4Desc: 'اختیاری کورسز کے ساتھ اپنی سیکھنے کو حسب ضرورت بنائیں۔',
        valuesTitle: 'رکنیت کے فوائد',
        value1Title: 'سرٹیفکیٹس', value1Desc: 'شیئر ایبل سرٹیفکیٹس حاصل کریں۔',
        value2Title: 'کمیونٹی', value2Desc: 'ہم عمروں کے گروپس اور فورمز۔',
        value3Title: 'کیریئر', value3Desc: 'کیریئر وسائل تک رسائی۔',
        value4Title: 'سپورٹ', value4Desc: 'ترجیحی مدد۔'
      },
      gallery: { pageTitle: 'گیلری', pageSubtitle: 'تصاویر اور پروجیکٹس کو دریافت کریں' },
      contact: {
        pageTitle: 'ہم سے رابطہ کریں', pageSubtitle: 'ہم سے رابطہ کریں۔ ہم آپ سے سننا پسند کریں گے!', formTitle: 'ہمیں پیغام بھیجیں', nameLabel: 'پورا نام *', emailLabel: 'ای میل ایڈریس *', phoneLabel: 'فون نمبر', subjectLabel: 'موضوع *', selectOption: 'موضوع منتخب کریں', generalOption: 'عام استفسار', supportOption: 'تکنیکی سپورٹ', salesOption: 'فروخت کا سوال', partnershipOption: 'شراکت داری', otherOption: 'دیگر', messageLabel: 'پیغام *', submitBtn: 'پیغام بھیجیں', infoTitle: 'رابطے کی معلومات', addressTitle: 'پتہ', addressText: '123 بزنس سٹریٹ، سوٹ 100\nشہر، ریاست 12345', phoneTitle: 'فون', phoneText: '+1 (555) 123-4567', emailTitle: 'ای میل', emailText: 'info@mycompany.com', hoursTitle: 'کاروباری اوقات', hoursText: 'پیر-جمعہ 9-6، ہفتہ 10-4', mapTitle: 'ہمیں تلاش کریں', mapPlaceholder: 'انٹرایکٹو نقشہ جلد آرہا ہے'
      },
      auth: {
        loginTitle: 'لاگ ان', loginSubtitle: 'خوش آمدید! براہ کرم اپنے اکاؤنٹ میں سائن ان کریں', emailLabel: 'ای میل ایڈریس', passwordLabel: 'پاس ورڈ', rememberMeText: 'مجھے یاد رکھیں', loginBtnText: 'سائن ان کریں', noAccountText: 'اکاؤنٹ نہیں ہے؟', signupLink: 'اکاؤنٹ بنائیں', orText: 'یا', googleLoginText: 'گوگل کے ساتھ جاری رکھیں', signupTitle: 'اکاؤنٹ بنائیں', signupSubtitle: 'ہمارے ساتھ شامل ہوں! شروع کرنے کے لیے اپنا اکاؤنٹ بنائیں', firstNameLabel: 'پہلا نام', lastNameLabel: 'آخری نام', signupEmailLabel: 'ای میل ایڈریس', signupPasswordLabel: 'پاس ورڈ', confirmPasswordLabel: 'پاس ورڈ کی تصدیق کریں', agreeTermsText: 'میں شرائط و ضوابط سے اتفاق کرتا/کرتی ہوں', newsletterText: 'اپ ڈیٹس کے لیے سبسکرپشن', signupBtnText: 'اکاؤنٹ بنائیں', haveAccountText: 'پہلے سے اکاؤنٹ ہے؟', loginLink: 'سائن ان کریں', googleSignupText: 'گوگل کے ساتھ جاری رکھیں', newUserMessage: 'نیا صارف؟ سائن اپ کریں', existingUserMessage: 'پہلے سے اکاؤنٹ ہے؟ لاگ ان کریں'
      },
      success: { title: 'کامیابی', subtitle: 'آپ لاگ ان ہیں۔ خوش آمدید!', cta: 'کورسز پر جائیں' },
      langAttr: 'ur', dirClass: 'rtl'
    }
  };

  function getCurrentPage() {
    const body = document.getElementById('mainBody');
    if (!body) return 'home';
    const page = body.getAttribute('data-page');
    return page || 'home';
  }

  function updateCommon(t) {
    const setText = (id, text) => { const el = document.getElementById(id); if (el && text != null) el.innerText = text; };
    const setHTML = (id, html) => { const el = document.getElementById(id); if (el && html != null) el.innerHTML = html; };
    // Header/Banner
    setText('companyName', t.banner.companyName);
    setText('headerLoginLink', t.header.loginLink);
    setText('headerSignupLink', t.header.signupLink);
    // Nav
    setText('navHome', t.nav.home);
    setText('navAboutUs', t.nav.aboutUs);
    setText('navEducation', t.nav.education);
    setText('navGallery', t.nav.gallery);
    setText('navTab5', t.nav.tab5);
    setText('navTab6', t.nav.tab6);
    setText('navContact', t.nav.contact);
    setText('navCommitteeSub1', t.nav.committeeSub1);
    setText('navCommitteeSub2', t.nav.committeeSub2);
    setText('navEducationSub1', t.nav.educationSub1);
    setText('navEducationSub2', t.nav.educationSub2);
    // Side menu
    setText('sideMenuTitle', t.sideMenu.title);
    setText('sideNavHome', t.sideMenu.home);
    setText('sideNavAboutUs', t.sideMenu.aboutUs);
    setText('sideNavEducation', t.sideMenu.education);
    setText('sideNavGallery', t.sideMenu.gallery);
    setText('sideNavTab5', t.sideMenu.tab5);
    setText('sideNavTab6', t.sideMenu.tab6);
    setText('sideNavContact', t.sideMenu.contact);
    setText('sideNavCommitteeSub1', t.sideMenu.committeeSub1);
    setText('sideNavCommitteeSub2', t.sideMenu.committeeSub2);
    setText('sideNavEducationSub1', t.sideMenu.educationSub1);
    setText('sideNavEducationSub2', t.sideMenu.educationSub2);
    // Footer
    setHTML('footerContent', (translations.en.footer && translations.en.footer.content) ? t.footer.content : undefined);
  }

  function updatePageContent(page, t) {
    const S = (id, text) => { const el = document.getElementById(id); if (el && text != null) el.innerText = text; };
    switch(page) {
      case 'home': {
        const h = t.home;
        S('mainContent', h.mainContent);
        S('infoTitle1', h.infoTitle1); S('infoDesc1', h.infoDesc1); S('infoLink1', h.infoLink1);
        S('infoTitle2', h.infoTitle2); S('infoDesc2', h.infoDesc2); S('infoLink2', h.infoLink2);
        S('infoTitle3', h.infoTitle3); S('infoDesc3', h.infoDesc3); S('infoLink3', h.infoLink3);
        S('infoTitle4', h.infoTitle4); S('infoDesc4', h.infoDesc4); S('infoLink4', h.infoLink4);
        S('aboutTitle', h.aboutTitle); S('aboutDescription', h.aboutDescription); S('aboutLink', h.aboutLink); S('aboutImage', h.aboutImage);
        break;
      }
      case 'committee': {
        const p = t.committee;
        S('pageTitle', p.pageTitle); S('pageSubtitle', p.pageSubtitle);
        S('storyTitle', p.storyTitle); S('storyContent1', p.storyContent1); S('storyContent2', p.storyContent2); S('storyContent3', p.storyContent3);
        S('teamTitle', p.teamTitle); S('teamSubtitle', p.teamSubtitle);
        S('member1Name', p.member1Name); S('member1Role', p.member1Role); S('member1Desc', p.member1Desc);
        S('member2Name', p.member2Name); S('member2Role', p.member2Role); S('member2Desc', p.member2Desc);
        S('member3Name', p.member3Name); S('member3Role', p.member3Role); S('member3Desc', p.member3Desc);
        S('member4Name', p.member4Name); S('member4Role', p.member4Role); S('member4Desc', p.member4Desc);
        S('valuesTitle', p.valuesTitle);
        S('value1Title', p.value1Title); S('value1Desc', p.value1Desc);
        S('value2Title', p.value2Title); S('value2Desc', p.value2Desc);
        S('value3Title', p.value3Title); S('value3Desc', p.value3Desc);
        S('value4Title', p.value4Title); S('value4Desc', p.value4Desc);
        break;
      }
      case 'buildings': {
        const p = t.buildings;
        S('pageTitle', p.pageTitle); S('pageSubtitle', p.pageSubtitle);
        S('storyTitle', p.storyTitle); S('storyContent1', p.storyContent1); S('storyContent2', p.storyContent2); S('storyContent3', p.storyContent3);
        S('teamTitle', p.teamTitle); S('teamSubtitle', p.teamSubtitle);
        S('member1Name', p.member1Name); S('member1Role', p.member1Role); S('member1Desc', p.member1Desc);
        S('member2Name', p.member2Name); S('member2Role', p.member2Role); S('member2Desc', p.member2Desc);
        S('member3Name', p.member3Name); S('member3Role', p.member3Role); S('member3Desc', p.member3Desc);
        S('member4Name', p.member4Name); S('member4Role', p.member4Role); S('member4Desc', p.member4Desc);
        S('valuesTitle', p.valuesTitle);
        S('value1Title', p.value1Title); S('value1Desc', p.value1Desc);
        S('value2Title', p.value2Title); S('value2Desc', p.value2Desc);
        S('value3Title', p.value3Title); S('value3Desc', p.value3Desc);
        S('value4Title', p.value4Title); S('value4Desc', p.value4Desc);
        break;
      }
      case 'syllabus': {
        const p = t.syllabus;
        S('pageTitle', p.pageTitle); S('pageSubtitle', p.pageSubtitle);
        S('storyTitle', p.storyTitle); S('storyContent1', p.storyContent1); S('storyContent2', p.storyContent2); S('storyContent3', p.storyContent3);
        S('teamTitle', p.teamTitle); S('teamSubtitle', p.teamSubtitle);
        S('member1Name', p.member1Name); S('member1Role', p.member1Role); S('member1Desc', p.member1Desc);
        S('member2Name', p.member2Name); S('member2Role', p.member2Role); S('member2Desc', p.member2Desc);
        S('member3Name', p.member3Name); S('member3Role', p.member3Role); S('member3Desc', p.member3Desc);
        S('member4Name', p.member4Name); S('member4Role', p.member4Role); S('member4Desc', p.member4Desc);
        S('valuesTitle', p.valuesTitle);
        S('value1Title', p.value1Title); S('value1Desc', p.value1Desc);
        S('value2Title', p.value2Title); S('value2Desc', p.value2Desc);
        S('value3Title', p.value3Title); S('value3Desc', p.value3Desc);
        S('value4Title', p.value4Title); S('value4Desc', p.value4Desc);
        break;
      }
      case 'classes': {
        const p = t.classes;
        S('pageTitle', p.pageTitle); S('pageSubtitle', p.pageSubtitle);
        S('storyTitle', p.storyTitle); S('storyContent1', p.storyContent1); S('storyContent2', p.storyContent2); S('storyContent3', p.storyContent3);
        S('teamTitle', p.teamTitle); S('teamSubtitle', p.teamSubtitle);
        S('member1Name', p.member1Name); S('member1Role', p.member1Role); S('member1Desc', p.member1Desc);
        S('member2Name', p.member2Name); S('member2Role', p.member2Role); S('member2Desc', p.member2Desc);
        S('member3Name', p.member3Name); S('member3Role', p.member3Role); S('member3Desc', p.member3Desc);
        S('member4Name', p.member4Name); S('member4Role', p.member4Role); S('member4Desc', p.member4Desc);
        S('valuesTitle', p.valuesTitle);
        S('value1Title', p.value1Title); S('value1Desc', p.value1Desc);
        S('value2Title', p.value2Title); S('value2Desc', p.value2Desc);
        S('value3Title', p.value3Title); S('value3Desc', p.value3Desc);
        S('value4Title', p.value4Title); S('value4Desc', p.value4Desc);
        break;
      }
      case 'courses': {
        const p = t.courses;
        S('pageTitle', p.pageTitle); S('pageSubtitle', p.pageSubtitle);
        S('storyTitle', p.storyTitle); S('storyContent1', p.storyContent1); S('storyContent2', p.storyContent2); S('storyContent3', p.storyContent3);
        S('teamTitle', p.teamTitle); S('teamSubtitle', p.teamSubtitle);
        S('member1Name', p.member1Name); S('member1Role', p.member1Role); S('member1Desc', p.member1Desc);
        S('member2Name', p.member2Name); S('member2Role', p.member2Role); S('member2Desc', p.member2Desc);
        S('member3Name', p.member3Name); S('member3Role', p.member3Role); S('member3Desc', p.member3Desc);
        S('member4Name', p.member4Name); S('member4Role', p.member4Role); S('member4Desc', p.member4Desc);
        S('valuesTitle', p.valuesTitle);
        S('value1Title', p.value1Title); S('value1Desc', p.value1Desc);
        S('value2Title', p.value2Title); S('value2Desc', p.value2Desc);
        S('value3Title', p.value3Title); S('value3Desc', p.value3Desc);
        S('value4Title', p.value4Title); S('value4Desc', p.value4Desc);
        break;
      }
      case 'gallery': {
        const p = t.gallery; S('galleryPageTitle', p.pageTitle); S('galleryPageSubtitle', p.pageSubtitle); break;
      }
      case 'contact': {
        const c = t.contact;
        S('contactPageTitle', c.pageTitle); S('contactPageSubtitle', c.pageSubtitle);
        S('formTitle', c.formTitle); S('nameLabel', c.nameLabel); S('emailLabel', c.emailLabel); S('phoneLabel', c.phoneLabel);
        S('subjectLabel', c.subjectLabel); S('selectOption', c.selectOption); S('generalOption', c.generalOption); S('supportOption', c.supportOption);
        S('salesOption', c.salesOption); S('partnershipOption', c.partnershipOption); S('otherOption', c.otherOption);
        S('messageLabel', c.messageLabel); S('submitBtn', c.submitBtn);
        S('infoTitle', c.infoTitle); S('addressTitle', c.addressTitle); S('addressText', c.addressText); S('phoneTitle', c.phoneTitle); S('phoneText', c.phoneText);
        S('emailTitle', c.emailTitle); S('emailText', c.emailText); S('hoursTitle', c.hoursTitle); S('hoursText', c.hoursText); S('mapTitle', c.mapTitle); S('mapPlaceholder', c.mapPlaceholder);
        break;
      }
      case 'login':
      case 'signup': {
        const a = t.auth;
        S('loginTitle', a.loginTitle); S('loginSubtitle', a.loginSubtitle);
        S('emailLabel', a.emailLabel); S('passwordLabel', a.passwordLabel); S('rememberMeText', a.rememberMeText); S('loginBtnText', a.loginBtnText);
        S('noAccountText', a.noAccountText); S('signupLink', a.signupLink); S('orText', a.orText); S('googleLoginText', a.googleLoginText);
        S('signupTitle', a.signupTitle); S('signupSubtitle', a.signupSubtitle); S('firstNameLabel', a.firstNameLabel); S('lastNameLabel', a.lastNameLabel);
        S('signupEmailLabel', a.signupEmailLabel); S('signupPasswordLabel', a.signupPasswordLabel); S('confirmPasswordLabel', a.confirmPasswordLabel);
        S('agreeTermsText', a.agreeTermsText); S('newsletterText', a.newsletterText); S('signupBtnText', a.signupBtnText);
        S('haveAccountText', a.haveAccountText); S('loginLink', a.loginLink); S('googleSignupText', a.googleSignupText);
        S('newUserMessage', a.newUserMessage); S('existingUserMessage', a.existingUserMessage);
        break;
      }
      case 'success': {
        const s = t.success; S('successTitle', s.title); S('successSubtitle', s.subtitle); S('successCTA', s.cta); break;
      }
      default: break;
    }
  }

  function setBodyDirection(t) {
    const body = document.getElementById('mainBody');
    if (!body) return;
    body.classList.remove('ltr', 'rtl');
    body.classList.add(t.dirClass);
    // Side menu RTL class toggle
    const sideMenu = document.getElementById('sideMenu');
    if (sideMenu) {
      sideMenu.classList.remove('rtl');
      if (t.dirClass === 'rtl') sideMenu.classList.add('rtl');
    }
    document.documentElement.lang = t.langAttr;
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations[DEFAULT_LANG];
    setBodyDirection(t);
    updateCommon(t);
    updatePageContent(getCurrentPage(), t);
    // Update button states
    const enBtn = document.getElementById('enBtn');
    const urBtn = document.getElementById('urBtn');
    if (enBtn && urBtn) {
      enBtn.classList.toggle('active', lang === 'en');
      urBtn.classList.toggle('active', lang === 'ur');
    }
  }

  function loadLanguage() {
    const saved = localStorage.getItem('language');
    currentLanguage = saved || DEFAULT_LANG;
    applyLanguage(currentLanguage);
  }

  // Expose global for HTML onclick compatibility
  window.switchLang = function(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
  };

  // Initialize on DOM ready and also run immediately for early paint
  document.addEventListener('DOMContentLoaded', loadLanguage);
  loadLanguage();
})();


