import DialogLayout from "../../layout";
import { adultCategories } from "../../../Constants/categories";
import HeadingPara from "../../../components/headingPara";
import Bullets from "../../../components/bullets";

const Topic1 = ({ goback }: { goback: () => void }) => {
  return (
    <DialogLayout heading={adultCategories[0].name} handleClose={goback}>
      <HeadingPara
        heading="جھگڑے کو کم کریں اور تعلقات کو مضبوط بنائیں"
        para="رشتے آپ کے پسندیدہ گانوں کی پلے لسٹ کی طرح ہوتے ہیں، خوشی والے لمحوں اور دل کو چھونے والے گیتوں کا خوبصورت امتزاج۔ لیکن کیا ہوتا ہے جب ایئر ویوز میں خرابی آ جاتی ہے؟ جھگڑا، رشتوں میں ناخوشگوار شور ہے، جو ہماری ہم آہنگی کو خراب کر سکتا ہے۔ جھگڑوں کو کم کرنے اور تعلقات کو مضبوط بنانے کے لیے یہاں آپ کی رہنمائی کے لیے کچھ آسان  حل۔"
      />
      <HeadingPara
        heading="اپنے ردعمل کو سمجھیں"
        para="ہم سب کا جھگڑنے کا ایک الگ انداز ہے۔ کیا آپ جذبات کو چھپاتے ہیں یا انہیں آتش فشاں کی طرح باہر نکالتے ہیں؟ اپنے رجحانات پر غور کریں۔ کیا آپ بچنے کی کوشش کرتے ہیں یا جارحیت سے بات کرتے ہیں؟ اپنے انداز کو سمجھنا ایک ہموار رشتے کی پہلی سیڑھی ہے۔"
      />
      <HeadingPara
        heading="مقصد کو بدلیں"
        para="جھگڑا جیتنے یا ہارنے کے بارے میں نہیں ہے۔ یہ پوری نہ ہونے والی ضروریات کی نشاندہی کے بارے میں ہے۔ بحث کو اپنے ساتھی کے جذباتی منظرنامے کو سمجھنے کے مواقع کے طور پر دیکھیں۔"
      />
      <HeadingPara
        heading="ہمدردی کی روشنی"
        para="اپنے آپ کو اپنے ساتھی کے جذباتی جوتوں میں رکھیں۔ ان کی پریشانی کی کیا وجہ ہو سکتی ہے؟ کیا یہ سنا نہ جانے کا خوف ہے، تائید کی ضرورت ہے، یا کوئی ماضی کا تجربہ ان کے ردعمل کو متحرک کر رہا ہے؟"
      />
      <HeadingPara
        heading={'"میں" کے جملے اثر دکھاتے ہیں'}
        para='الزام لگانے والی زبان کو چھوڑیں اور اس کی جگہ "میں" کے جملے استعمال کریں۔ "تم کبھی نہیں سنتے!" کی بجائے، "جب تم مجھ سے بات کاٹتے ہو تو مجھے لگتا ہے کہ میری بات نہیں سنی جا رہی" کی کوشش کریں۔ یہ تبدیلی آپ کے احساسات پر توجہ دیتی ہے اور ایک بامقصدہ گفتگو کا دروازہ کھولتی ہے۔'
      />
      <HeadingPara
        heading="غور سے سنیں"
        para="اپنے ساتھی کو اپنی پوری توجہ دیں۔ آنکھیں ملا کر بات کریں، سر ہلائیں اور ان کی بات کو سمجھنے کے لیے اسے اپنے الفاظ میں دہرائیں۔ یہ احترام ظاہر کرتا ہے اور اعتماد پیدا کرتا ہے۔"
      />
      <HeadingPara
        heading="رد نہ کریں"
        para='اپنے ساتھی کے جذبات کو تسلیم کریں، چاہے آپ ان سے اتفاق نہ کریں۔ "میں سمجھتا ہوں تم پریشان ہو" یہ بتاتا ہے کہ آپ ان کے نقطہ نظر کو سمجھتے ہیں، اور کھلی بات چیت کے لیے ایک محفوظ ماحول بناتا ہے۔'
      />
      <HeadingPara
        heading="ٹائم آؤٹ کا بٹن دبانا"
        para="گھبراہٹ محسوس ہو رہی ہے؟ تووقفہ کا بٹن دبانا ٹھیک ہے۔ تھوڑا سا وقفہ لیں اور جب جذبات پرسکون ہو جائیں تو دوبارہ بات چیت کریں۔"
      />
      <HeadingPara
        heading="حل پر توجہ دیں، الزام پر نہیں"
        para="اس بات پر توجہ مرکوز کریں کہ کون صحیح ہے، اس کی بجائے ایسا حل تلاش کریں جو آپ دونوں کے لیے کام کرے۔ مل کر حل نکالنے اور سمجھوتے پر راضی ہونے کے لیے کھلے ذہن سے بات کریں۔"
      />
      <HeadingPara
        heading="چھوٹی جیتوں کا جشن منائیں"
        para="ایک مضبوط رشتہ بنانا ایک مسلسل عمل ہے۔ اپنے جھگڑوں کو حل کرنے کے سفر میں چھوٹی سے چھوٹی جیتوں کو تسلیم کریں اور ان کا جشن منائیں۔ یہ مثبت مضبوطی آپ کو متحرک رکھتی ہے اور آپ کے بنائے جانے والے رشتے کو مضبوط کرتی ہے۔"
      />
      <HeadingPara
        heading="مضبوط رشتے بنانے کے 7 آسان قدم"
        para={
          "محبت کا اظہار اور اسے سمیٹنا ہر کسی کے لیے مختلف ہوتا ہے۔ آئیے جانتے ہیں اپنے رشتے میں ہمآہنگی پیدا کرنے کے چند آسان طریقے"
        }
      />
      <Bullets
        bullets={[
          {
            head: "پانچ زبانیں محبت کی",
            text: 'ہر شخص محبت کا اظہار اور اسے قبول کرنے کا اپنا طریقہ رکھتا ہے۔ اپنے ساتھی کی "زبان" دریافت کریں (کام کر کے دکھانا، تعریف کے الفاظ، تحائف، وقت گزارنا، جسمانی لمس) اور اس کے مطابق اپنے اعمال کو ڈھالیں۔',
          },
          {
            head: "کوالٹی ٹائم > زیادہ وقت",
            text: "فون رکھ دیں! بات چیت پر توجہ دینے کے لیے، چاہے وہ صرف دس منٹ ہی کیوں نہ ہو، خاص طور پر وقت نکالیں۔",
          },
          {
            head: "قدردانی کا ٹینگو",
            text: '"شکریہ" کو روٹین نہ بنائیں۔ اپنے ساتھی کی چھوٹی چھوٹی چیزوں کے لیے بھی خاص طور پر تعریف کریں۔',
          },
          {
            head: "معافی اور فراموش",
            text: "ہم سب غلطیاں کرتے ہیں۔ کسی بات کا گلہ رکھنا ایسے ہے جیسے خود زہر پینا اور دوسرے کو بیمار ہوتے دیکھنا۔ آگے بڑھنے کے لیے ماضی کی تکلیفوں کو معاف کرنے کی مشق کریں لیکن ساتھ یہ بھی بات کریں کہ دوبارہ ایسی غلطی نہ ہو۔",
          },
          {
            head: "اپنی انفرادیت کو منائیں",
            text: "آپ دونوں میں الگ الگ خوبیاں ہیں۔ ایک دوسرے کی انفرادیت کو قبول کریں! اپنی الگ پہچان برقرار رکھنا ضروری ہے۔ ذاتی شوق اور دلچسپیاں برقرار رکھیں تاکہ انحصار سے بچا جا سکے اور تعلق میں محبت برقرار رہے۔",
          },
          {
            head: "مثبت کا تناسب",
            text: "ایک منفی بات کے مقابلے میں پانچ مثبت باتوں کا ہدف رکھیں۔ یہ ایک مثبت جذباتی اکاؤنٹ بناتا ہے جو جھگڑوں کے طوفانوں کا مقابلہ کر سکتا ہے۔",
          },
          {
            head: "نقل اور مماثلت",
            text: "اپنے ساتھی کے جسمانی زبان اور بات چیت کے انداز کی باریک بینی سے نقل کریں۔ یہ ربط بڑھاتا ہے اور تعلق کے احساس کو فروغ دیتا ہے۔",
          },
        ]}
      />
    </DialogLayout>
  );
};

export default Topic1;
