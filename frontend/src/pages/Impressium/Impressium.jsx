import React from 'react'
import '../Datenschutz/Datenschutz.css'
import Footer from '../../components/Footer/Footer'

const Impressium = () => {
    return (
        <div>
        <div className='datenschutz'>
            <h1 style={{'borderBottom': '1px solid #0000001a'}}>Impressum</h1>

            <h3>Angaben gemäß § 5 TMG:</h3>

            <p>Haben Sie Fragen oder Anregungen zu unseren Produkten, dann sprechen Sie uns an.
            Sie erreichen uns über folgende Kontaktdaten. Wir freuen uns auf Ihre Rückmeldung. </p>
            <h4>Anschrift</h4>
            <p>
                Inderjit Singh Dhillon<br />
                Radeburger Platz 11<br />
                01558 Großenhain<br />
                <br />
                Tel:<br />
                {/* Fax: +49 (0)30 280 454 83<br /> */}
                Email: tasteofindia.grossenhain@gmail.com</p>

            {/* <h2>Betriebshaftpflichtversicherung:</h2>
            <p style={{'padding-top':'10px'}}>BGN Berufsgenossenschaft Nahrungsmittel und Gastgewerbe (Bezirksverwaltung Berlin)</p> */}
{/* 
            <h2>Zuständige Aufsichtsbehörde:</h2>
            <p>Stadt Berlin – Bezirksamt Mitte – Ordnungsamt</p> */}

            <h2>Streitschlichtung</h2>
            <p style={{'paddingTop':'10px'}}>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.

                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h2>Haftung für Inhalte</h2>
            <p style={{'paddingTop':'10px'}}>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <h2>Haftung für Links</h2>
            <p style={{'paddingTop':'10px'}}>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.

                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

            <h2>Urheberrecht</h2>
            <p style={{'paddingTop':'10px'}}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        </div>
        <Footer/>
        </div>
    )
}

export default Impressium