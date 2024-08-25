import { Divz } from "divz";
import "./Gallery3DScroll.css"; // Create this CSS file for dark mode styling

function Gallery3DScroll() {
  return (
    <Divz className="gallery-container">
      <div className="gallery-item">
        <img
          src="/honacha/intro.png"
          alt="Description 2"
          className="gallery-image"
        />
      </div>
      <div className="gallery-item">
        <p className="gallery-text">
          In the bustling heart of Patan, two Honacha families, sharing common
          ancestry, have nurtured a culinary tradition that has become an
          integral part of the local culture. Known for their small but
          cherished restaurants, or "Honachas," these families have served
          generations of locals and tourists alike with mouth-watering Newari
          cuisine, creating spaces where wonderful meals are paired with
          pleasant conversations.
        </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">How it began</p>
      </div>
      <div className="gallery-item">
        <p className="gallery-text">
          The Honacha story begins with Krishna Lal Byanjankar, who hailed from
          Honley (Chyasal). Several generations ago, Krishna Lal moved to Mangal
          Bazar, near Patan Durbar Square, to open a small shop providing local
          food to hungry farmers. This humble beginning has since evolved into a
          renowned family-owned restaurant that has retained its original charm.
          Located behind the majestic Krishna Mandir, the restaurant—simply
          known as "Honacha" by locals—has remained unchanged in its character,
          both in terms of its interior and its menu, for decades.
        </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          For over 46 years, Honacha has stood as a testament to authentic
          Newari cuisine, offering dishes that have become synonymous with the
          culinary culture of the Kathmandu Valley. Visitors are greeted with a
          warm and welcoming atmosphere, where traditional recipes such as Bara
          (small pancakes made from crushed lentils), Chhoela (grilled and
          spiced buffalo meat), Kachila (raw minced buffalo meat marinated with
          herbs and spices), and Sukuti (dried buffalo meat) are prepared with
          the same care and passion as when the restaurant first opened its
          doors.
        </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">Honacha 1 </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          The first Honacha, operated by a dedicated aunt and uncle duo, is
          nestled near the historic Durbar Square. Despite running a profitable
          business, they face daily challenges due to the city’s unreliable
          water supply. A few years ago, the family enjoyed a steady 12-hour
          daily water supply, which allowed them to run their operations
          smoothly. However, as the city grew and water demand increased, their
          supply became sporadic, arriving only every 2-3 days.
        </p>
      </div>

      <div className="gallery-item">
        <video
          src="/honacha/honacha1.MOV"
          controls="controls"
          className="gallery-image"
        ></video>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          To cope, they installed a 6,000-liter underground tank and a
          3,000-liter rooftop tank. Despite these measures, the longest they
          have gone without water is a staggering 15-20 days. They rely on jar
          water for drinking, while precious municipal water is reserved for
          washing dishes and sustaining the business. On occasion, they even
          sell surplus water to make ends meet, a testament to their resilience
          and adaptability in the face of adversity.
        </p>
      </div>

      <div className="gallery-item">
        <img src="/honacha/hon1.jpg" className="gallery-image" />
      </div>

      <div className="gallery-item">
        <p className="gallery-text">Honacha 2 </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          In another part of the city, Honacha 2, managed by Merina Byanjankar,
          faces its own set of challenges. Located away from Durbar Square,
          Merina's restaurant experiences severe water shortages during the dry
          months of Jestha and Asar. During these times, the municipal taps
          often run dry as water is diverted for irrigation. Merina has to send
          her shop helpers to Manga Hiti, a traditional stone spout, to fetch
          water for cooking and washing dishes. For drinking, she relies on
          costly jar or mineral water.
        </p>
      </div>

      <div className="gallery-item">
        <video
          src="/honacha/honacha2 (2).MOV"
          controls="controls"
          className="gallery-image"
        ></video>

        <p className="gallery-text">Merina on the state of water supply</p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          The water shortages sometimes force Merina to close her shop, and when
          she must buy water from tankers, it comes at the steep price of Rs
          1700 per 1000 liters. Despite these hardships, Merina continues to
          preserve the Honacha tradition, serving her customers with the same
          dedication that has defined her family’s legacy.
        </p>
      </div>
      <div className="gallery-item">
        <video
          src="/honacha/relation.MOV"
          controls="controls"
          className="gallery-image"
        ></video>
        <p className="gallery-text">
          Merina on her relationship with her family
        </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">A Reflection on Resource Inequality</p>
      </div>

      <div className="gallery-item">
        <img
          src="/honacha/spatial_inequality.png"
          alt="Description 2"
          className="gallery-image"
        />
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          The stories of these two Honachas, though geographically close,
          highlight the stark spatial inequality in resource access within
          Patan. The uncle and aunt at Honacha 1, despite their careful
          planning, face the daily uncertainty of an unreliable water supply,
          leading them to purchase storage devices and even sell water to
          sustain their livelihood. Meanwhile, Merina at Honacha 2 grapples with
          seasonal water shortages, depending on traditional water sources and
          paying exorbitant prices for tanker water when needed.
        </p>
      </div>

      <div className="gallery-item">
        <p className="gallery-text">
          These challenges reflect the broader struggles faced by many in Patan
          and the Kathmandu Valley, where resource disparity impacts day-to-day
          living and business operations. The stories of these Honachas
          underscore the urgent need for equitable resource distribution and
          sustainable water management practices in the city.
        </p>
      </div>
    </Divz>
  );
}

export default Gallery3DScroll;
