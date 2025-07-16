
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("sl");

  const content = {
    sl: {
      title: "Doživi prestiž – Najemi sanjski avto",
      subtitle: "Ekskluzivni športni avtomobili za vsak trenutek.",
      cars: [
        {
          name: "Porsche 911 Carrera 4S",
          price: "od 399 €/dan",
          image: "https://files.porsche.com/911-carrera-4s.jpg"
        },
        {
          name: "Porsche Taycan Turbo S",
          price: "od 499 €/dan",
          image: "https://files.porsche.com/taycan-turbo-s.jpg"
        },
        {
          name: "Audi R8 V10",
          price: "od 449 €/dan",
          image: "https://cdn.motor1.com/images/mgl/0ANkZ/s3/audi-r8-v10-performance-rwd.jpg"
        }
      ],
      formTitle: "Rezervacijski obrazec",
      name: "Ime",
      email: "E-pošta",
      message: "Sporočilo ali povpraševanje",
      submit: "Pošlji"
    },
    de: {
      title: "Erlebe den Luxus – Miete deinen Traumwagen",
      subtitle: "Exklusive Sportwagen für jeden Moment.",
      cars: [
        {
          name: "Porsche 911 Carrera 4S",
          price: "ab 399 €/Tag",
          image: "https://files.porsche.com/911-carrera-4s.jpg"
        },
        {
          name: "Porsche Taycan Turbo S",
          price: "ab 499 €/Tag",
          image: "https://files.porsche.com/taycan-turbo-s.jpg"
        },
        {
          name: "Audi R8 V10",
          price: "ab 449 €/Tag",
          image: "https://cdn.motor1.com/images/mgl/0ANkZ/s3/audi-r8-v10-performance-rwd.jpg"
        }
      ],
      formTitle: "Buchungsformular",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht oder Anfrage",
      submit: "Senden"
    }
  };

  const t = content[lang];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Driven by Dreams</h1>
        <button onClick={() => setLang(lang === "sl" ? "de" : "sl")}>{lang === "sl" ? "DE" : "SL"}</button>
      </div>
      <h2>{t.title}</h2>
      <p>{t.subtitle}</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {t.cars.map((car, idx) => (
          <div key={idx} style={{ backgroundColor: '#111', padding: '10px', width: '300px' }}>
            <img src={car.image} alt={car.name} style={{ width: '100%' }} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px' }}>
        <h3>{t.formTitle}</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input placeholder={t.name} />
          <input placeholder={t.email} type="email" />
          <textarea placeholder={t.message}></textarea>
          <button type="submit">{t.submit}</button>
        </form>
      </div>
    </div>
  );
}
