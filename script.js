// script.js

// Language translations
const translations = {
    en: {
        "main-title": "🌍 SkillGrid — From Village/City to Global Opportunities",
        "main-description": "Imagine if your skills could reach people worldwide 💡",
        "section1-title": "🧍‍♀️ Section 1: About You",
        "q1-label": "1️⃣ What is your name? (Short Answer)",
        "q2-label": "2️⃣ Which country are you from? (Dropdown)",
        "q3-label": "3️⃣ What is the name of your village or city? (Short Answer)",
        "q4-label": "4️⃣ What is your age range?",
        "age-opt1": "Under 18 years",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "Over 50",
        "section2-title": "🧰 Section 2: Your Skills",
        "q5-label": "5️⃣ In which work are you an expert? (Checkboxes)",
        "skill-opt1": "Translation",
        "skill-opt2": "Graphic Design",
        "skill-opt3": "Video Editing",
        "skill-opt4": "Data Entry",
        "skill-opt5": "E-commerce",
        "skill-opt6": "Computer/Coding",
        "skill-opt7": "Other:",
        "q6-label": "6️⃣ How long have you been doing this work?",
        "exp-opt1": "Less than 6 months",
        "exp-opt2": "1–2 years",
        "exp-opt3": "3–5 years",
        "exp-opt4": "More than 5 years",
        "q7-label": "7️⃣ Have you ever received an online order?",
        "order-opt1": "Yes",
        "order-opt2": "No",
        "section3-title": "🌍 Section 3: About SkillGrid App",
        "q8-label": "8️⃣ If an app connects you with clients worldwide, would you use it?",
        "app-use-opt1": "Yes",
        "app-use-opt2": "Maybe",
        "app-use-opt3": "No",
        "q11-label": "9️⃣ Would you like the app to also provide training videos and skill improvement courses?",
        "training-opt1": "Yes, definitely",
        "training-opt2": "Maybe",
        "training-opt3": "No, only clients needed",
        "q12-label": "10️⃣ If the app offers an \"Auto-Translation Chat\" feature, would you use it?",
        "translation-opt1": "Yes, very important",
        "translation-opt2": "Maybe",
        "translation-opt3": "No, not needed",
        "section4-title": "🎯 Section 4: Future Vision",
        "q13-label": "11️⃣ If you start receiving orders from around the world while staying at home, how will your life change? (Paragraph)",
        "q14-label": "12️⃣ If you'd like, please provide your email (Optional)",
        "q15-label": "14️⃣ Would you like to become a Beta User (the person who tests the app before launch first)?",
        "beta-opt1": "Yes",
        "beta-opt2": "No",
        "submit-btn": "Submit Form",
        "confirm-title": "✅ Confirmation Message",
        "confirm-text": "🙏 Thank you!\nYou're now on SkillGrid's Early Access List 💫\n🌍 From your village to the world — your skills matter!\n\n🚀 Updates & jobs only on Instagram:\n👉 @kiran.skillgrid\n\n🌸 Follow now to stay ahead!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "Please select at least one skill"
    },
    ur: {
        "main-title": "🌍 سکل گرڈ — گاؤں یا شہر سے دنیا تک کام کا موقعہ",
        "main-description": "سوچو اگر آپ کا ہنر دنیا بھر کے لوگوں تک پہنچ جائے 💡",
        "section1-title": "🧍‍♀️ سیکشن 1: آپ کا تعارف (About You)",
        "q1-label": "1️⃣ آپ کا نام کیا ہے؟ (مختصر جواب)",
        "q2-label": "2️⃣ آپ کس ملک سے تعلق رکھتے ہیں؟ (ڈراپ ڈاؤن)",
        "q3-label": "3️⃣ آپ کا گاؤں یا شہر کا نام کیا ہے؟ (مختصر جواب)",
        "q4-label": "4️⃣ آپ کی عمر کس رینج میں ہے؟",
        "age-opt1": "18 سال سے کم",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 سے زیادہ",
        "section2-title": "🧰 سیکشن 2: آپ کا ہنر (Your Skills)",
        "q5-label": "5️⃣ آپ کس کام میں ایکسپرٹ ہو؟ (چیک باکسز)",
        "skill-opt1": "ترجمہ / ترجمہ",
        "skill-opt2": "گرافک ڈیزائن",
        "skill-opt3": "ویڈیو ایڈیٹنگ",
        "skill-opt4": "ڈیٹا انٹری",
        "skill-opt5": "ای کامرس",
        "skill-opt6": "کمپیوٹر / کوڈنگ",
        "skill-opt7": "دوسرا (Other):",
        "q6-label": "6️⃣ یہ کام آپ کتنے وقت سے کر رہے ہو؟",
        "exp-opt1": "6 مہینے سے کم",
        "exp-opt2": "1–2 سال",
        "exp-opt3": "3–5 سال",
        "exp-opt4": "5 سال سے زیادہ",
        "q7-label": "7️⃣ کیا آپ کو کبھی آن لائن آرڈر ملا ہے؟",
        "order-opt1": "ہاں",
        "order-opt2": "نہیں",
        "section3-title": "🌍 سیکشن 3: سکل گرڈ ایپ کے بارے میں",
        "q8-label": "8️⃣ اگر ایک ایپ آپ کو دنیا بھر کے کلائنٹس سے کنیکٹ کر دے، تو کیا آپ اسے استعمال کریں گے؟",
        "app-use-opt1": "ہاں",
        "app-use-opt2": "شاید",
        "app-use-opt3": "نہیں",
        "q11-label": "9️⃣ کیا آپ چاہیں گے کہ ایپ آپ کو ٹریننگ ویڈیوز اور ہنر بہتر کرنے کے کورسز بھی دے؟",
        "training-opt1": "ہاں، ضرور",
        "training-opt2": "شاید",
        "training-opt3": "نہیں، صرف کلائنٹس چاہیے",
        "q12-label": "10️⃣ اگر ایپ آپ کے لیے \"آٹو-ٹرانسلیشن چیٹ\" فیچر لائے، تو کیا آپ اسے استعمال کریں گے؟",
        "translation-opt1": "ہاں، بہت ضروری ہے",
        "translation-opt2": "شاید",
        "translation-opt3": "نہیں، ضرورت نہیں",
        "section4-title": "🎯 سیکشن 4: مستقبل کا وژن",
        "q13-label": "11️⃣ اگر آپ کو گھر بیٹھے دنیا بھر سے آرڈر ملنے لگیں تو آپ کی زندگی کیسے بدلے گی؟ (پیراگراف)",
        "q14-label": "12️⃣ اگر آپ چاہیں تو اپنا ای میل دیں (اختیاری)",
        "q15-label": "14️⃣ کیا آپ بیٹا یوزر بننا چاہیں گے (یعنی وہ شخص جو سب سے پہلے ایپ کو ٹیسٹ کرے گا)؟",
        "beta-opt1": "ہاں",
        "beta-opt2": "نہیں",
        "submit-btn": "فرم جمع کرائیں",
        "confirm-title": "✅ تصدیقی پیغام",
        "confirm-text": "🙏 شکریہ!\nاب آپ سکل گرڈ کی ایرلی ایکسس لسٹ پر ہیں 💫\n🌍 آپ کے گاؤں سے دنیا تک — آپ کے ہنر کی اہمیت ہے!\n\n🚀 اپ ڈیٹس اور نوکریاں صرف انسٹاگرام پر:\n👉 @kiran.skillgrid\n\n🌸 آگے رہنے کے لیے ابھی فالو کریں!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "براہ کرم کم از کم ایک مہارت منتخب کریں",
        "countries": {
            "australia": "آسٹریلیا",
            "austria": "آسٹریا",
            "bahrain": "بحرین",
            "bangladesh": "بنگلہ دیش",
            "belgium": "بیلجیم",
            "canada": "کینیڈا",
            "china": "چین",
            "denmark": "ڈنمارک",
            "finland": "فن لینڈ",
            "france": "فرانس",
            "germany": "جرمنی",
            "greece": "یونان",
            "india": "بھارت",
            "indonesia": "انڈونیشیا",
            "ireland": "آئرلینڈ",
            "italy": "اٹلی",
            "japan": "جاپان",
            "kuwait": "کویت",
            "malaysia": "ملائیشیا",
            "netherlands": "نیدرلینڈ",
            "new-zealand": "نیوزی لینڈ",
            "norway": "ناروے",
            "oman": "عمان",
            "pakistan": "پاکستان",
            "philippines": "فلپائن",
            "poland": "پولینڈ",
            "portugal": "پرتگال",
            "qatar": "قطر",
            "saudi-arabia": "سعودی عرب",
            "singapore": "سنگاپور",
            "south-africa": "جنوبی افریقہ",
            "south-korea": "جنوبی کوریا",
            "spain": "ہسپانیہ",
            "sri-lanka": "سری لنکا",
            "sweden": "سویڈن",
            "switzerland": "سوئٹزرلینڈ",
            "turkey": "ترکی",
            "uae": "متحدہ عرب امارات",
            "united-kingdom": "برطانیہ",
            "united-states": "ریاستہائے متحدہ امریکا"
        }
    },
    hi: {
        "main-title": "🌍 स्किलग्रिड — गांव/शहर से वैश्विक अवसरों तक",
        "main-description": "कल्पना करें कि अगर आपके कौशल दुनिया भर के लोगों तक पहुंच सकते हैं 💡",
        "section1-title": "🧍‍♀️ अनुभाग 1: आपके बारे में",
        "q1-label": "1️⃣ आपका नाम क्या है? (संक्षिप्त उत्तर)",
        "q2-label": "2️⃣ आप किस देश से हैं? (ड्रॉपडाउन)",
        "q3-label": "3️⃣ आपके गांव या शहर का नाम क्या है? (संक्षिप्त उत्तर)",
        "q4-label": "4️⃣ आपकी आयु सीमा क्या है?",
        "age-opt1": "18 वर्ष से कम",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 से अधिक",
        "section2-title": "🧰 अनुभाग 2: आपके कौशल",
        "q5-label": "5️⃣ आप किस काम में विशेषज्ञ हैं? (चेकबॉक्स)",
        "skill-opt1": "अनुवाद",
        "skill-opt2": "ग्राफ़िक डिज़ाइन",
        "skill-opt3": "वीडियो संपादन",
        "skill-opt4": "डेटा प्रविष्टि",
        "skill-opt5": "ई-कॉमर्स",
        "skill-opt6": "कंप्यूटर/कोडिंग",
        "skill-opt7": "अन्य:",
        "q6-label": "6️⃣ आप कितने समय से इस काम को कर रहे हैं?",
        "exp-opt1": "6 महीने से कम",
        "exp-opt2": "1–2 वर्ष",
        "exp-opt3": "3–5 वर्ष",
        "exp-opt4": "5 वर्ष से अधिक",
        "q7-label": "7️⃣ क्या आपको कभी ऑनलाइन ऑर्डर मिला है?",
        "order-opt1": "हाँ",
        "order-opt2": "नहीं",
        "section3-title": "🌍 अनुभाग 3: स्किलग्रिड ऐप के बारे में",
        "q8-label": "8️⃣ अगर एक ऐप आपको दुनिया भर के क्लाइंट्स से जोड़ता है, तो क्या आप इसका उपयोग करेंगे?",
        "app-use-opt1": "हाँ",
        "app-use-opt2": "शायद",
        "app-use-opt3": "नहीं",
        "q11-label": "9️⃣ क्या आप चाहेंगे कि ऐप आपको प्रशिक्षण वीडियो और कौशल सुधार पाठ्यक्रम भी प्रदान करे?",
        "training-opt1": "हाँ, निश्चित रूप से",
        "training-opt2": "शायद",
        "training-opt3": "नहीं, केवल क्लाइंट्स की आवश्यकता है",
        "q12-label": "10️⃣ अगर ऐप एक \"ऑटो-अनुवाद चैट\" सुविधा प्रदान करता है, तो क्या आप इसका उपयोग करेंगे?",
        "translation-opt1": "हाँ, बहुत महत्वपूर्ण",
        "translation-opt2": "शायद",
        "translation-opt3": "नहीं, आवश्यकता नहीं",
        "section4-title": "🎯 अनुभाग 4: भविष्य का दृष्टिकोण",
        "q13-label": "11️⃣ अगर आप घर बैठे दुनिया भर से ऑर्डर प्राप्त करना शुरू कर देते हैं, तो आपका जीवन कैसे बदलेगा? (पैराग्राफ)",
        "q14-label": "12️⃣ यदि आप चाहें, तो कृपया अपना ईमेल प्रदान करें (वैकल्पिक)",
        "q15-label": "14️⃣ क्या आप बीटा यूज़र बनना चाहेंगे (जो सबसे पहले ऐप को टेस्ट करके इस्तेमाल करेगा)?",
        "beta-opt1": "हाँ",
        "beta-opt2": "नहीं",
        "submit-btn": "फॉर्म जमा करें",
        "confirm-title": "✅ पुष्टि संदेश",
        "confirm-text": "🙏 धन्यवाद!\nअब आप स्किलग्रिड की अरली एक्सेस सूची में हैं 💫\n🌍 आपके गांव से दुनिया तक — आपके कौशल का महत्व है!\n\n🚀 अपडेट और नौकरियाँ केवल इंस्टाग्राम पर:\n👉 @kiran.skillgrid\n\n🌸 आगे रहने के लिए अभी फॉलो करें!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "कृपया कम से कम एक कौशल चुनें",
        "countries": {
            "australia": "ऑस्ट्रेलिया",
            "austria": "ऑस्ट्रिया",
            "bahrain": "बहरीन",
            "bangladesh": "बांग्लादेश",
            "belgium": "बेल्जियम",
            "canada": "कनाडा",
            "china": "चीन",
            "denmark": "डेनमार्क",
            "finland": "फिनलैंड",
            "france": "फ्रांस",
            "germany": "जर्मनी",
            "greece": "ग्रीस",
            "india": "भारत",
            "indonesia": "इंडोनेशिया",
            "ireland": "आयरलैंड",
            "italy": "इटली",
            "japan": "जापान",
            "kuwait": "कुवैत",
            "malaysia": "मलेशिया",
            "netherlands": "नीदरलैंड",
            "new-zealand": "न्यूजीलैंड",
            "norway": "नॉर्वे",
            "oman": "ओमान",
            "pakistan": "पाकिस्तान",
            "philippines": "फिलीपींस",
            "poland": "पोलैंड",
            "portugal": "पुर्तगाल",
            "qatar": "कतर",
            "saudi-arabia": "सऊदी अरब",
            "singapore": "सिंगापुर",
            "south-africa": "दक्षिण अफ्रीका",
            "south-korea": "दक्षिण कोरिया",
            "spain": "स्पेन",
            "sri-lanka": "श्रीलंका",
            "sweden": "स्वीडन",
            "switzerland": "स्विट्जरलैंड",
            "turkey": "तुर्की",
            "uae": "संयुक्त अरब अमीरात",
            "united-kingdom": "यूनाइटेड किंगडम",
            "united-states": "संयुक्त राज्य अमेरिका"
        }
    },
    ro: {
        "main-title": "🌍 SkillGrid — Gaon ya Shehar se Duniya ke Mauqay tak",
        "main-description": "Socho agar aap ke hunar duniya bhar ke logon tak pohuch jayein 💡",
        "section1-title": "🧍‍♀️ Section 1: Aap ke Baare mein",
        "q1-label": "1️⃣ Aap ka naam kya hai? (Mukhtasir Jawab)",
        "q2-label": "2️⃣ Aap kis mulk se hain? (Dropdown)",
        "q3-label": "3️⃣ Aap ke gaon ya shehar ka naam kya hai? (Mukhtasir Jawab)",
        "q4-label": "4️⃣ Aap ki umar kis range mein hai?",
        "age-opt1": "18 saal se kam",
        "age-opt2": "18–25",
        "age-opt3": "26–35",
        "age-opt4": "36–50",
        "age-opt5": "50 se zyada",
        "section2-title": "🧰 Section 2: Aap ke Hunar",
        "q5-label": "5️⃣ Aap kis kaam mein expert hain? (Checkboxes)",
        "skill-opt1": "Tarjuma/Translation",
        "skill-opt2": "Graphic Design",
        "skill-opt3": "Video Editing",
        "skill-opt4": "Data Entry",
        "skill-opt5": "E-commerce",
        "skill-opt6": "Computer/Coding",
        "skill-opt7": "Dusra (Other):",
        "q6-label": "6️⃣ Ye kaam aap kitne waqt se kar rahe hain?",
        "exp-opt1": "6 mahine se kam",
        "exp-opt2": "1–2 saal",
        "exp-opt3": "3–5 saal",
        "exp-opt4": "5 saal se zyada",
        "q7-label": "7️⃣ Kya aap ko kabhi online order mila hai?",
        "order-opt1": "Haan",
        "order-opt2": "Nahi",
        "section3-title": "🌍 Section 3: SkillGrid App ke Baare mein",
        "q8-label": "8️⃣ Agar ek app aap ko duniya bhar ke clients se jodta hai, to kya aap iska istemal karenge?",
        "app-use-opt1": "Haan",
        "app-use-opt2": "Shayad",
        "app-use-opt3": "Nahi",
        "q11-label": "9️⃣ Kya aap chahenge ki app aap ko training videos aur hunar sudharne ke courses bhi de?",
        "training-opt1": "Haan, zarur",
        "training-opt2": "Shayad",
        "training-opt3": "Nahi, sirf clients chahiye",
        "q12-label": "10️⃣ Agar app ek \"Auto-Translation Chat\" feature laaye, to kya aap iska istemal karenge?",
        "translation-opt1": "Haan, bahut zaruri hai",
        "translation-opt2": "Shayad",
        "translation-opt3": "Nahi, zarurat nahi",
        "section4-title": "🎯 Section 4: Mustaqbil ka Wizan",
        "q13-label": "11️⃣ Agar aap ghar baith ke duniya bhar se orders milne lagein to aap ki zindagi kaise badlegi? (Paragraph)",
        "q14-label": "12️⃣ Agar aap chahen to apna email dein (Ikhtiyari)",
        "q15-label": "14️⃣ Kya aap Beta User banna chaheinge (jo sab se pehle app ko use kar ke test karega)?",
        "beta-opt1": "Haan",
        "beta-opt2": "Nahi",
        "submit-btn": "Form Jamma Karen",
        "confirm-title": "✅ Tasdeeq Message",
        "confirm-text": "🙏 Shukriya!\nAb aap SkillGrid ke Early Access List mein hain 💫\n🌍 Aap ke gaon se duniya tak — aap ke hunar ki ahmiyat hai!\n\n🚀 Updates aur jobs sirf Instagram par:\n👉 @kiran.skillgrid\n\n🌸 Aage rehne ke liye abhi follow karein!",
        "instagram-link": "https://www.instagram.com/kiran.skillgrid",
        "please-select-at-least-one-skill": "Meharbani karke kam se kam ek hunar chunein"
    }
};

// Current language
let currentLanguage = 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update the hidden form language field
    const formLanguageField = document.getElementById('form-language');
    if (formLanguageField) {
        formLanguageField.value = lang;
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'instagram-link') element.href = translations[lang][key];
            else if (key === 'confirm-text') {
                const linkElement = document.getElementById('instagramBtn');
                const linkHtml = linkElement ? linkElement.outerHTML : '@kiran.skillgrid';
                element.innerHTML = translations[lang][key].replace('@kiran.skillgrid', linkHtml);
            } else element.textContent = translations[lang][key];
        }
    });
    
    // Update life-change textarea placeholder based on language
    const lifeChangeElement = document.getElementById('life-change');
    if (lifeChangeElement) {
        const placeholders = {
            'en': 'e.g. I will earn extra income and support my family.',
            'ur': 'مثال: میں اضافی آمدنی کما سکوں گا اور اپنے خاندان کی مدد کروں گا۔',
            'hi': 'उदाहरण: मैं अतिरिक्त आय कमाऊँगा और अपने परिवार की मदद करूँगा।',
            'ro': 'jaise: Main extra income kamaunga aur apne family ki madad karunga.'
        };
        lifeChangeElement.placeholder = placeholders[lang] || placeholders['en'];
    }
    
    if (lang === 'ur') {
        document.body.classList.add('urdu-text');
        document.body.classList.remove('hindi-text');
    } else if (lang === 'hi') {
        document.body.classList.add('hindi-text');
        document.body.classList.remove('urdu-text');
    } else {
        document.body.classList.remove('urdu-text', 'hindi-text');
    }
    
    // Update country dropdown options based on selected language
    const countrySelect = document.getElementById('country');
    if (countrySelect && translations[lang] && translations[lang].countries) {
        // Store the currently selected value
        const selectedValue = countrySelect.value;
        
        // Clear existing options except the first one ("-- Select Country --")
        while (countrySelect.options.length > 1) {
            countrySelect.remove(1);
        }
        
        // Add translated country options
        const countries = translations[lang].countries;
        Object.keys(countries).sort().forEach(countryCode => {
            const option = document.createElement('option');
            option.value = countryCode;
            option.textContent = countries[countryCode];
            countrySelect.appendChild(option);
        });
        
        // Restore the previously selected value if it still exists
        countrySelect.value = selectedValue;
    }
}

// Form submission handler
document.getElementById('skillgrid-form').addEventListener('submit', function(e) {
    let isValid = true;
    const requiredFields = this.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value || (field.type === 'radio' && !field.checked)) {
            if (field.type !== 'radio' && field.type !== 'checkbox') {
                isValid = false;
                field.style.borderColor = '#dc3545';
            }
        } else field.style.borderColor = '#e0e0e0';
    });
    
    const skillCheckboxes = document.querySelectorAll('input[name="skills"]');
    let skillSelected = false;
    skillCheckboxes.forEach(checkbox => { if (checkbox.checked) skillSelected = true; });
    
    if (!skillSelected) {
        isValid = false;
        alert(translations[currentLanguage]['please-select-at-least-one-skill']);
        document.getElementById('q5-label').style.color = '#dc3545';
        setTimeout(() => document.getElementById('q5-label').style.color = '', 3000);
    } else document.getElementById('q5-label').style.color = '';

    // If form is valid, submit to Netlify and show thank you screen
    if (isValid) {
        // Prevent default submission to handle it ourselves
        e.preventDefault();
        
        // Get submit button and show loading animation
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting';
        submitBtn.disabled = true;
        
        // Add ellipsis animation
        let dotCount = 0;
        const ellipsisInterval = setInterval(() => {
            dotCount = (dotCount % 3) + 1;
            submitBtn.textContent = 'Submitting' + '.'.repeat(dotCount);
        }, 500);
        
        // Add 2 second delay before submission
        setTimeout(() => {
            // Clear ellipsis animation
            clearInterval(ellipsisInterval);
            
            // Submit form data to Netlify
            const formData = new FormData(this);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            }).then(() => {
                // Show thank you screen after successful submission
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                showThankYou();
            }).catch(() => {
                // Show thank you screen even if submission fails
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                showThankYou();
            });
        }, 2000);
    } else {
        // Prevent submission if invalid
        e.preventDefault();
    }
});

// Other-skill auto-check
document.getElementById('other-skill').addEventListener('focus', function() {
    const otherCheckbox = document.querySelector('input[value="other"]');
    if (otherCheckbox) otherCheckbox.checked = true;
});

// Initialize language
changeLanguage('en');

// Typewriter & thank you logic (unchanged)
const thankYouMessages = {
    en: { title: "✅ Confirmation", message: "🙏 Thank you!\nYou're now on SkillGrid's Early Access List 💫\n🌍 From your village to the world — your skills matter!", button: "🌸 Follow @kiran.skillgrid", note: "🚀 This is a survey form — updates will be available on Instagram." },
    roman: { title: "✅ Tasdeeq Ho Gayi!", message: "🙏 Shukriya!\nAap ab SkillGrid ke Early Access List me shamil ho gaye hain 💫\n🌍 Gaon ya shehar se duniya tak — aapka hunar qeemti hai!", button: "🌸 Follow karo @kiran.skillgrid", note: "🚀 Ye ek survey form hai — updates aapko Instagram par milengi." },
    urdu: { title: "✅ تصدیق", message: "🙏 شکریہ!\nاب آپ سکل گرڈ کی ایرلی ایکسس لسٹ پر ہیں 💫\n🌍 آپ کے گاؤں سے دنیا تک — آپ کے ہنر کی اہمیت ہے!", button: "🌸 فالو کریں @kiran.skillgrid", note: "🚀 یہ ایک سروے فارم ہے — اپ ڈیٹس آپ کو انسٹاگرام پر ملیں گی۔" },
    hi: { title: "✅ पुष्टि", message: "🙏 धन्यवाद!\nअब आप स्किलग्रिड की अरली एक्सेस सूची पर हैं 💫\n🌍 आपके गांव से दुनिया तक — आपके कौशल का महत्व है!", button: "🌸 फॉलो करें @kiran.skillgrid", note: "🚀 यह एक सर्वे फॉर्म है — अपडेट्स आपको इंस्टाग्राम पर मिलेंगी।" }
};

function detectFormLanguage() {
    // Map current language codes to required codes for thank you messages
    const map = { 'en':'en', 'ro':'roman', 'ur':'urdu', 'hi':'hi' };
    return map[currentLanguage] || 'roman';
}

function typeText(element, text, delay = 50, skipTyping = false) {
    if (skipTyping) { element.innerHTML = text.replace(/\n/g,'<br>'); return Promise.resolve(); }
    return new Promise(resolve => {
        element.innerHTML=''; let i=0; const lines=text.split('\n'); let currentLine=0;
        function type() {
            if (currentLine<lines.length){
                if (i<lines[currentLine].length){ element.innerHTML+=lines[currentLine].charAt(i); i++; setTimeout(type,delay); }
                else { if (currentLine<lines.length-1){ element.innerHTML+='<br>'; currentLine++; i=0; setTimeout(type,delay); } else resolve(); }
            } else resolve();
        } type();
    });
}

function showThankYou(skipTyping=false){
    const form=document.getElementById('skillgrid-form'); if(form) form.style.display='none';
    const lang=detectFormLanguage();
    const messages=thankYouMessages[lang]||thankYouMessages.roman;
    const thankArea=document.getElementById('thankArea');
    if(lang==='urdu') thankArea.classList.add('urdu-text');
    else if(lang==='hi') thankArea.classList.add('hindi-text');
    document.getElementById('thankTitle').textContent=messages.title;
    const instagramBtn=document.getElementById('instagramBtn');
    if(instagramBtn){ instagramBtn.textContent=messages.button; instagramBtn.href='https://www.instagram.com/kiran.skillgrid'; }
    document.getElementById('noteLine').textContent=messages.note;
    thankArea.classList.remove('hidden');
    const typedMessageElement=document.getElementById('typedMessage');
    typeText(typedMessageElement,messages.message,30,skipTyping).then(()=>{ if(skipTyping) typedMessageElement.innerHTML=messages.message.replace(/\n/g,'<br>'); });
    thankArea.scrollIntoView({behavior:'smooth'});
}

// Animate form sections on scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections=document.querySelectorAll('.form-section');
    const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}});},{threshold:0.1});
    sections.forEach(section=>{section.style.opacity='0';section.style.transform='translateY(20px)';section.style.transition='opacity 0.6s ease, transform 0.6s ease';observer.observe(section);});
    const inputs=document.querySelectorAll('input, textarea, select');
    inputs.forEach(input=>{input.addEventListener('focus',function(){this.parentElement.style.transform='scale(1.02)';});input.addEventListener('blur',function(){this.parentElement.style.transform='scale(1)';});});
});
