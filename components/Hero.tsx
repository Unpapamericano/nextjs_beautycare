import Image from 'next/image'

const Hero = () => {
  return (
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500">
        <div className="hero-map" />

        {/* LEFT */}

        <div className="relativeName=relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]" 
          />
          <h1 className="bold-52 lg:bold-88">Fusspflege-Nageldesign</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Fußpflege ist so viel mehr als nur Nägel schneiden! Es geht um die liebevolle Betreuung deiner Füße, die oft übersehen wird. Von der Reinigung über das Entfernen von Hornhaut bis hin zum Schneiden, Feilen und sogar der Massage – Fußpflege kümmert sich um all diese Details, um die Durchblutung zu fördern und uns zu entspannen.

Ein regelmäßiger Termin bei einem Fachmann für Fußpflege oder einem Podologen bringt zahlreiche Vorteile mit sich. Neben dem ästhetischen Aspekt sorgt professionelle Fußpflege auch für gesunde Füße. Sie behandelt lästige Probleme wie eingewachsene Nägel, Hühneraugen oder Pilzinfektionen. Und ach, eine Fußmassage, die nicht nur Verspannungen löst, sondern auch die Entspannung fördert!

Aber auch zu Hause können wir viel für unsere Füße tun. Einfaches Eincremen, das Tragen bequemer Schuhe und das sorgfältige Trocknen nach dem Baden können helfen, Fußprobleme zu vermeiden.

Eine bewusste Fußpflege verbessert nicht nur unser Wohlbefinden, sondern steigert auch unsere Lebensqualität. Egal, ob du viel stehst, läufst oder einen ruhigeren Lebensstil bevorzugst – die Pflege deiner Füße ist von enormer Bedeutung, um Komplikationen zu vermeiden und dich rundum wohlzufühlen.

Für weitere Tipps und professionelle Beratung empfehle ich, einen Experten aufzusuchen. Entdecke die Welt der Fußpflege und gönn deinen Füßen die Aufmerksamkeit, die sie verdienen.</p>
        </div>
      </section>        
  )
}

export default Hero