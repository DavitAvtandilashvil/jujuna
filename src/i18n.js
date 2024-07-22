import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "ge",
    resources: {
      ge: {
        translation: {
          menu: "მენიუ",
          aboutUs: "ჩვენ შესახებ",
          news: "სიახლეები",
          bottle: "ბოთლი",
          cocktails: "კოქტეილები",
          mobileBar: "მობილური ბარი",
          contact: "კონტაქტი",
          title: "ჟუჟუნა",
          wineText: "ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა",
          wineDescription:
            "მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ, ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ გაზს იძენს. ",
          zhuzhunaText:
            "ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.",
          zhuzhunaDescripion1:
            "ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია, ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი, დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.",
          zhuzhunaDescripion2:
            "ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა. ",
          zhuzhunaDescripion3:
            "ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში ექსპორტით გააქვს თბილისური დალევის კულტურა.",
          date1: "17 აგვისტო, 2024",
          date2: "25 სექტემბერი, 2024",
          date3: "2 ოქტომბერი, 2024",
          tasting: "დეგუსტაცია",
          tastingDescripion:
            "დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე და იგრძენით ნამდვილი გემო",
          learnMore: "გაიგე მეტი",
          vintage: "რთველი",
          vintageDescription:
            "ეწვიეთ ჩვენს რთველს და შეიტყვეთ მეტი ჟუჟუნას წარმოების პროცესზე და მის წარმომავლობაზე",
          wineEvening: "ღვინის საღამო",
          wineEveningDescription:
            "ჩვენი ღვინო, ჯაზის მუსიკა, კომფორტული საღამო. გაატარეთ დაუვიწყარი საღამო ჩვენთან ერთად",
          bottleDescription:
            "ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს მისართმევად საუკეთესო ტემპერატურასა და გაზს.",
          bottleTitle: "ჟუჟუნა ბოთლი",
          volume: "მოცულობა",
          volumeText: "250 მლ",
          alcohol: "ალკოჰოლი",
          naturalGas: "ბუნებრივი გაზი",
          bar: "ბარი",
          cocktail: "კოქტეილი",
          AperolSpritz: "აპეროლ შპრიტსი",
          Aperol: "აპეროლი",
          ml: "მლ",
          orange: "ფორთოხალი",
          piece: "ნაჭერი",
          ice: "ყინული",
          fullGlass: "სავსე ჭიქა",
          tonic: "ტონიკი",
          mg: "მგ",
          BerriesZhuzhuna: "კენკრიანი ჟუჟუნა",
          halfGlass: "ნახევარი ჭიქა",
          GrenadineSyrup: "გრენადინის სიროფი",
          berries: "კენკრა",
          gr: "გრ",
          mimosa: "მიმოზა",
          orangeFresh: "ფორთოხლის ფრეში",
          mobileBarText: "გავჩნდებით ყველგან, სადაც ისურვებ",
          mobileBarDescription:
            "ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს, ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უამრავი კოქტეილით იზრუნებს.",
          phone: "ტელეფონი",
          phonePlaceholder: "მიუთითეთ ნომერი",
          email: "ელ.ფოსტა",
          emailPlaceholder: "მიუთითეთ ელ-ფოსტა...",
          message: "მესიჯი",
          messagePlaceholder: "დაწერეთ მესიჯი...",
          send: "გაგზავნა",
          emailText:
            "ქორფა ჟუჟუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.",
          emailDescription:
            "ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს. ",
          address: "მისამართი",
          addressText: "ნინოშვილი #8 თბილისი,საქართველო",
          personal: "პერსონალური მონაცემების დაცვის პოლიტიკა",
          safety: "უსაფრთხოების ცენტრი",
        },
      },

      en: {
        translation: {
          menu: "Menu",
          aboutUs: "About us",
          news: "News",
          bottle: "Bottle",
          cocktails: "Cocktails",
          mobileBar: "Mobile bar",
          contant: "Contact",
          title: "zhuzhuna",
          wineText: "The wine is neither still nor fully sparkling",
          wineDescription:
            "We prepare it with Rkatsiteli and green grapes obtained in the early harvest, that's why it has a characteristic acidity. Natural light gas is obtained from secondary fermentation.",
          zhuzhunaText: "Zhuzhuna very dry and sour wine was created in 2017.",
          zhuzhunaDescripion1:
            "After much thought and years of love for wine, 6 friends founded the company with our own funds. Our main goal was to create a different experience of drinking culture and to popularize previously non-existent contemporary wine in modern culture.",
          zhuzhunaDescripion2:
            "Bottling Zhuzhuna soon became friends with many cafes and bars in Georgia, and in 2020 it also filled the chain of stores in the form of a bottle, which is an important news for us in such a short period of time.",
          zhuzhunaDescripion3:
            "The history of Zhuju goes beyond the borders of Georgia and exports the Tbilisi drinking culture to China and Japan.",
          date1: "17 August, 2024",
          date2: "25 september, 2024",
          date3: "2 octomber, 2024",
          tasting: "tasting",
          tastingDescripion:
            "Taste our wine at the annual tasting and feel the real taste",
          learnMore: "Learn More",
          vintage: "vintage",
          vintageDescription:
            "Visit our vintage and learn more about the jujuana production process and its origins",
          wineEvening: "Wine evening",
          wineEveningDescription:
            "Our wine, jazz music, comfortable evening. Spend an unforgettable evening with us",
          bottleDescription:
            "The juju bottle is 250 ml, because this portion maintains the best temperature and gas for consumption.",
          bottleTitle: "zhuzhuna bottle",
          volume: "volume",
          volumeText: "250 ml",
          alcohol: "alcohol",
          naturalGas: "Natural gas",
          bar: "bar",
          cocktail: "cocktail",
          AperolSpritz: "Aperol Spritz",
          Aperol: "Aperol",
          ml: "ml",
          orange: "orange",
          piece: "piece",
          ice: "ice",
          fullGlass: "Full glass",
          tonic: "tonic",
          mg: "mg",
          BerriesZhuzhuna: "Berries zhuzhuna",
          halfGlass: "Half a glass",
          GrenadineSyrup: "Grenadine syrup",
          berries: "Berries",
          gr: "gr",
          mimosa: "Mimosa",
          orangeFresh: "Orange Fresh",
          mobileBarText: "We will appear wherever you want",
          mobileBarDescription:
            "Zhuzhuna bar will find you wherever you are. He will bring a barman, a refrigerator of Korfa Juzhuna, and will take care of your guests with plenty of cocktails.",
          phone: "phone",
          phonePlaceholder: "Enter the number",
          email: "email",
          emailPlaceholder: "Enter the email...",
          message: "message",
          messagePlaceholder: "Write a message...",
          send: "Send",
          emailText:
            "Korfa Zhuzhuna can be found in many cafes and bars and will make your favorite cocktails. Cold and sparkling juju cocktail straight from the tap",
          emailDescription:
            "Bottling Zhuzhuna is supplied to cafes and bars in reusable kegs and does not require additional packaging, which is why it is particularly friendly to the environment and does not cause pollution.",
          address: "address",
          addressText: "Ninoshvili #8, Tbilisi, Georgia",
          personal: "Personal data protection policy",
          safety: "Security Center",
        },
      },
    },
  });
