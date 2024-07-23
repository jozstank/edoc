import { defineStore } from "pinia";
const useGeneralStore = defineStore("store", {
  state: () => {
    return {
      isDropdownOpen: false,
      searchInputValue: "",
      searchArr: [],
      isSun: true,
      treatments: [
        {
          title: "Acne Facial Treatment",
          id: 1,
          body: "ဝက်ခြံ Breakout ဖစ်ခြင်းကိုကာကွယ်ပေးပီးဝက်ခြံကြောင့်ကျန်ခဲ့သော အနီစက်၊အမဲစက်များကိုသက်သာစေခြင်း",
          price: "၁သိန်း၃သောင်းကျပ်",
        },
        {
          title: "Whitening Facial Treatment",
          id: 2,
          body: "မျက်နှာအသားအရေဖြူစင်ဝင်းလတ်စိုပြေခြင်း",
          price: "၁သိန်း၃သောင်းကျပ်",
        },
        {
          title: "Anti-aging Facial Treatment",
          id: 3,
          body: "အရေးအကြောင်းများလျော့ပါးအသားအရေစိုပြေနုပျိုစေခြင်း",
          price: "၁သိန်း၃သောင်းကျပ်",
        },
        {
          title: "Corrective Facial Treatment",
          id: 4,
          body: "အရေးအကြောင်းများကိုလျော့ပါးသက်သာကာအသားအရေတင်းရင်းစိုပြေစေပီးBaby skin ကဲ့သို့အသားအရေနူးညံ့ကြည်လင်ဝင်းပစေခြင်း",
          price: "၄သိန်း၅သောင်းကျပ်",
        },
        {
          title: "Stem Cell Facial Treatment",
          id: 5,
          body: "အရေပြား ဆဲလ်များကိုအသစ်ပြန်လည်ဖြည့်တင်းပြုပြင်ပေးပီးအသားအရေကိုနုပျိုစေခြင်း",
          price: "၄သိန်း၅သောင်းကျပ်",
        },
        {
          title: "ကော်လာဂျင်ကြိုးကုထုံး",
          id: 6,
          body: "မျက်နှာပင့်တင်ကော်လာဂျင်ကြိုးBaby Skinကော်လာဂျင်ကြိုး၊နှာတံမြင့်ကော်လာဂျင်ကြိုး၊မေးနှစ်ထပ်ပျောက်ကော်လာဂျင်ကြိုး၊အသက်အရွယ်ကြောင့်ဖြစ်စေ၊အဆီကြောင့်ဖြစ်စေ လျှော့တွဲကျနေသောအသားအရေများကိုပြန်လည်ပင့်တင်ပေးခြင်း၊အသားအရည်ကိုပြန်လည်တင်းရင်းစေခြင်း",
          price: "၄သိန်း၅သောင်းကျပ်",
        },
        {
          title: "Men Brightening Laser",
          id: 7,
          body: "အမွှေးနုတွေကိုဖယ်ရှားပေးပီး မျက်နှာအသားအရေကိုဖြူစင်ကြည်လင်စေသော လေဆာကုထုံး",
          price: "၃သိန်းကျပ်",
        },
        {
          title: "Clear Flash Laser",
          id: 8,
          body: "မျက်နှာနီမြန်းရဲတာကို သက်သာပျောက်ကင်းစေသောလေဆာကုထုံး",
          price: "၃သိန်းကျပ်",
        },
        {
          title: "Plasma Infini",
          id: 9,
          body: "မိမိ၏ကိုယ်ပိုင်သွေးရည်ကြည်အားHigh intensity focused radio frequency နည်းပညာစက်ဖြင့် ချိုင့်ခွက် အမာရွတ်များအားကုသခြင်း",
          price: "၁၃သိန်းကျပ်",
        },
        {
          title: "Total Clear Solution Laser",
          id: 10,
          body: "ပြစ်မျိုးမှဲ့မထင်လေဆာကုထုံး : ဆားဝက်ခြံ၊အမဲစက်နှင့်အမာရွတ်အပြစ်အနာအဆာတွေကိုပျောက်ကင်းစေပီးအသားအရေကိုဖြူစင်တင်းစေသောလေဆာကုထုံး",
          price: "၁၂သိန်းကျပ်",
        },
        {
          title: "Melasma Away Injection",
          id: 11,
          body: "တင်းတိတ်ပျောက်ထိုးဆေးကုထုံး : နေရောင်နှင့်ဟော်မုန်းအသွေားအသားပြောင်းလဲမှုများကြောင့်ဖြစ်ပေါ်လေ့ရှိသော တက်းတိတ်၊မှဲ့ခြောက်၊အမဲကွက်များကိုပျောက်ကင်းသက်သာစေခြင်း",
          price: "၄သိန်းကျပ်",
        },
        {
          title: "Detox Drip",
          id: 12,
          body: "ခန္ဓာကိုယ် ရှိအဆိပ်အတောက်များကိုဖယ်ရှားပေးပီးကြည်လင်တောက်ပခြင်သူများအတွက်",
          price: "၃သိန်း၃သောင်းကျပ်",
        },
        {
          title: "Doctor A Glow Drip",
          id: 13,
          body: "ဖြူပီးGlowချင်သူများအတွက်",
          price: "၄သိန်း၅သောင်းကျပ်",
        },
        {
          title: "Luxury Glow Drip",
          id: 14,
          body: "ဖြူမယ်၊Glowမယ် စိုပြေတင်းရင်းနုပျိုခြင်သူများအတွက်",
          price: "၆သိန်း၂သောင်းကျပ်",
        },
        {
          title: "DNA Booster",
          id: 15,
          body: "အရေပြားအတွင်းပိုင်းထိအစိုဓာတ်ပြည့်ဝစေခြင်း၊ချွေးပေါက်လေးတွေကျဥ်းပီးအသားအရေကိုကြည်လင်တောက်ပစေခြင်း၊အရေးအကြောင်းတွေကိုပါသက်သာချောမွေ့စေပီးပျက်စီးနေတဲ့အသားအရေကိုပြန်လည်ပြုပြင်အသစ့်ဖစ်စေခြင်း",
          price: "၈သိန်းကျပ်",
        },
        {
          title: "Shinning Peel Laser",
          id: 16,
          body: "တောက်ပလေဆာကုထုံး : ချွေးပေါက်ကျဥ်းကာ၊မျက်နှာအသားအရေရှိအပေါ်ယံဆဲလ်သေများကိုဖယ်ရှာပီး collagenလှုံ့ဆော်ပေးမှုကြောင့်အသားအရေကြည်လင်ဝင်းပစိုပြေတောက်ပစေခြင်း",
          price: "၃သိန်းကျပ်",
        },
        {
          title: "Mesofat Injection",
          id: 17,
          body: "အဆီဖျော်ဆေးကုထုံး : မျက်နှာ၊လက်မောင်း၊မှေးနှစ်ထပ်နှင့်တကိုယ်လုံးရှိအဆီပိုများကိုသိသိသာသာလျော့ကျစေပီးအဆီပိုမရှိချပ်ကပ်စေသောကုထုံး",
          price: "",
        },
        {
          title: "NEW HIFU ကုထုံး",
          id: 18,
          body: "ခွဲစိတ်စရာမလိုဘဲ Ultrasound နည်းပညာဖြင့် တင်းရင်းလှပလာခြင်း၊ ပါးဖောင်း ပါးအဆီများ မေးနှစ်ထပ်အဆီများလျော့ပအရေးအကြောင်းများနှင့် ချွေးပေါက်ကျယ်ခြင်းများကိုသက်သာစေခြင်း",
          price: "",
        },
        {
          title: "Powder Toning Laser",
          id: 19,
          body: "ပေါင်ဒါလေဆာကုထုံး : ဝက်ခြံကြောင့်ကျန်ခဲ့သော အမဲစက်များနှင့် တင်းတိမ်မှဲ့ခြောက်ရှိသူများအတွက်မျက်နှာအသားအရေဖြူဝင်းချောမွတ်စေသောကုထုံး",
          price: "၃သိန်း",
        },
        {
          title: "Bubble Toning Laser",
          id: 20,
          body: "ချွေးပေါက်ကျဥ်းလေဆာကုထုံး : မျက်နှာအသားအရေဖြူဝင်းစေပြီးချွေးပေါက်ကျဥ်းကာနုပျိုစေသောလေဆာကုထုံး",
          price: "၃သိန်း",
        },
        {
          title: "Cooltech Treatment",
          id: 21,
          body: "အဆီအတုံးလိုက်ချကုထုံး : မေးနှစ်ထပ်အဆီ၊ဗိုက်အဆီ၊ပေါင်အဆီ၊နောက်ကျောအဆီပိုစသဖြင့်တကိုယ်လုံးရှိအဆီပိုများကိုနာကျင်မှုမရှိအတုံးလိုက်ဖယ်ရှားပေးကာခန္ဓာကိုယ်ကောက်ကြောင်း ပိုမိုပေါ်လွင်လာသောကုထုံး",
          price: "၁၃သိန်း",
        },
        {
          title: "Double Whitening Drip",
          id: 22,
          body: "ဖြူချင်သူများအတွက်",
          price: "၂သိန်း၃သောင်း",
        },
        {
          title: "More Than Lift",
          id: 23,
          body: "နာကျင်မှုလုံးဝမရှိဆေးထိုး၊ကြိုးထိုး၊ခွဲစိတ်စရာမလိုပဲသဘာဝအတိုင်းနုပျိုတင်းရင်းစေခြင်း",
          price: "၁၃သိန်း",
        },
        {
          title: "Pico Melasma /Pico Freckless Laser",
          id: 24,
          body: "တင်းတိမ်မှဲ့ခြောက်လေဆာကုထုံး : နေရောင်နှင့်ဟော်မုန်းအသွေးအသားပြောင်းလဲမှုများကြောင့် ဖြစ်ပေါ်လေ့ရှိသော တင်းတိမ်၊မှဲ့ခြောက်၊အမဲကွက်များကိုပျောက်ကင်းသက်သာစေခြင်း",
          price: "၂သိန်း",
        },
        {
          title: "Diamond Acne Laser",
          id: 25,
          body: "ဝက်ခြံကင်းစင်လေဆာကုထုံး : နီရဲရောင်ရမ်းနေသောဝက်ခြံများအားသက်သာစေခြင်း၊အသားအရေ တင်းရင်ကြည်လင် ချွေးပေါက်ကျဥ်းစေခြင်း",
          price: "၂သိန်း",
        },
        {
          title: "REJURAN",
          id: 26,
          body: "တင်းတိမ်အမဲစက်များချက်ချင်းလျော့ပါးစေခြင်းမျက်နှာအရေပြားကိုပိုပိုကြည်လင်စေခြင်း၊ချွေးပေါက်ကျဥ်ပြီး နူးညံချောမွေ့စေခြင်း၊မျက်နှာပြင်ကိုတင်းရင်းစေပြီးSkin Glowဖြစ်စေခြင်း",
          price: "၁၄သိန်း",
        },
        {
          title: "CLA Lift Laser",
          id: 27,
          body: "မျက်နှာကိုဖြူဝင်းစေပြီးတင်းရင်ပင့်တင်စေသောလေဆာ",
          price: "၃သိန်း",
        },
        {
          title: "CLA Reju Laser",
          id: 28,
          body: "တင်းတိမ်မှဲ့ခြောက်သမားတွေအတွက် အသားအရေကိုပြန်လည်ကောင်းမွန်စေပြီး ပျုမျစ်စေသောလေဆာကုထုံး",
          price: "၃သိန်း",
        },
        {
          title: "Lip Filler",
          id: 29,
          body: "ရှိရင်းစွဲနှုတ်ခမ်းကိုခွဲစိတ်စရာမလို ပိုမိုလှပသေသပ်စေခြင်း။ နှုတ်ခမ်းပါးသူတွေကိုဖူးဖူးလေးနဲ့စိုပြည်စေခြင်း။ ပင်ကိုယ်နှုတ်ခမ်းပုံလေးကို ပိုမိုထင်ရှားသွားစေခြင်း။ ဆွဲဆောင်မှုရှိတဲ့ နှုတ်ခမ်းပုံစံလေးကိုဖော်ဆောင်ပေးနိုင်မှာဖြစ်ပါတယ်",
          price: "၁သိန်း",
        },
        {
          title: "Smileline Filler",
          id: 30,
          body: "မျက်နှာပေါ်ရှိ smileline အရေးကြောင်းသည်လိုအပ်သည်ထပ်ပိုထင်ရှားနေမယ်ဆို အိုမင်းတဲ့အသွင်ဖြစ်စေတာကြောင့် smileline filler ကုထုံးလုပ်လိုက်ခြင်းဖြင့် ပိုမိုနုပျိုတဲ့အသွင်ကိုရရှိစေမှာပဲဖြစ်ပါတယ်",
          price: "၁သိန်း",
        },
        {
          title: "HIFES",
          id: 31,
          body: "ပါးတွဲကျနေတာတွေ ပင့်တင်လာတယ်၊ Smileline တွေ filler ထိုးစရာမလိုဘဲ လျော့လာတယ်၊ နဖူး မျက်လုံးဘေးက အရေးအကြောင်းတွေလည်း Botox ထိုးစရာမလိုဘဲ သက်သာသွားစေတယ်",
          price: "၁၀သိန်း",
        },
      ],
    };
  },
  actions: {
    changeToMoon() {
      this.isSun = !this.isSun;
      document.getElementById("app").style.background = "#0F172A";
      localStorage.setItem("mode", "moon");
    },
    changeToSun() {
      this.isSun = !this.isSun;
      document.getElementById("app").style.background = "white";
      localStorage.setItem("mode", "sun");
    },
    updateSearchArr(data) {
      this.searchArr = data;
    },
  },
});
export default useGeneralStore;
