import { Collapse  } from 'antd';

const Disclaimer = () => {
  const text = `התוכן הנמסר באתר הוא למטרת הסבר והכרה בלבד ואינו מהווה ייעוץ מקצועי. יש להבין כי שימוש במידע
  מובא בתוך המילון, באופן כלשהו, נעשה על אחריות המשתמש בלבד.
  אין לראות בתוכן המילון חלופה לייעוץ מקצועי או לייעוץ טכני עם מומחה מוסמך בתחום הגיוס לשימוש
  בקריאה מדויקת והיערכות מדויקת של הסיטואציה. בכל מקרה של ספק או הבעת דעה המתעוררת בעקבות
  שימוש בתוכן זה, מומלץ לפנות למומחה מוסמך או לייעוץ מקצועי.
  החברה אינה אחראית לנזקים או הפסדים שעלולים להיגרם כתוצאה משימוש או הסתמכות על המידע
  המובא בתוך המילון. החברה אינה מתחייבת לעדכון התוכן לאחר מילויו, ויכול להיות כי המידע המובא כאן
  יחלש בזמן או יהיה לא רלוונטי.
  שימוש באתר או המידע הנמסר בו מהווה הסכמה להסרת האחריותנו מכל תביעה או דרישה כלפי החברה
  בקשר לשימוש כלשהו בתוכן המילון. לצורך בדיקת שימוש כלשהו נדרש לפנות למנהל האתר.`;

  return (
    <Collapse
      size='large'
      bordered={false}
      expandIconPosition="end"
      items={[{ key: '1', label: 'הסרת אחריות:', children: <p>{text}</p> }]}
    />
    )
  }

export default Disclaimer;