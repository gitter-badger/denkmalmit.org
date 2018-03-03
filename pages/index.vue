<template>
  <div>
    <section id="intro">
      <p class="semibold">
        <em>Denkmalmit</em>
        ist der Verein hinter
        <a href="https://denkmal.org" target="_blank" rel="noopener">Denkmal.org</a>, dem Eventkalender für Basels Nachtleben. Der seit 2004 bewusst schlicht gehaltene Kalender wird redaktionell aufbereitet und hat sich mittlerweile mit rund 30’000 Aufrufen pro Monat als beliebte Plattform für die Ausgangsszene in der Region etabliert. Damit Denkmal.org weiterhin aktuell, kostenlos, unabhängig und werbefrei bleibt, sind wir auf Deine Unterstützung angewiesen.
      </p>
    </section>

    <donate/>

    <section id="association">
      <h3>Verein aka Clüb Denkmalmit</h3>
      <p>
        <em>Denkmalmit</em>
        richtet sich an Freunde von Denkmal.org, an Musikliebhaber, Partygänger, Veranstalter und zu guter Letzt auch an alle Künstler - mit Deiner Mitgliedschaft sicherst Du die Zukunft von Denkmal.org!
        <a href="https://gdoc.pub/doc/e/2PACX-1vRekflQDyBOPSFqfl472WVetOpCDI5w2GKr2odfgP7ynrDI9kFGtUID4igCWQGvnI_zoMqhq5-mVLcw" target="_blank" rel="noopener">Statuten</a>
      </p>

      <p>Für ein paar Bätzeli bist Du dabei. Mitgliederbeiträge werden einmal pro Jahr erhoben:</p>
      <ul>
        <li>Einzelperson (Passivmitglied):
          <span>CHF 25</span>
        </li>
        <li>Veranstalter/Organisation (Passivmitglied):
          <span>CHF 150</span>
        </li>
        <li>Aktive/Gönner:
          <span>Freier Betrag</span>
        </li>
      </ul>

      <p>Im Gegenzug bieten wir:</p>
      <ul>
        <li>Denkmal.org bleibt aktuell, kostenlos, unabhängig und werbefrei</li>
        <li>1x Überraschungsgeschenk/Jahr direkt in Deinen Briefkasten</li>
        <li>Neuigkeiten zu den Vereinsaktivitäten</li>
        <li>Wir setzen Dir hier auf der Webseite ein
          <a href="#supporter">Denkmal</a>
        </li>
      </ul>

      <a class="button" href="https://docs.google.com/forms/d/e/1FAIpQLSecptumZAPUwRP7wSV5amiUocH60AMnJmuuY-fR0_R00PE4GQ/viewform?usp=sf_link" target="_blank" rel="noopener">Mitglied werden</a>
    </section>

    <section id="denkmalorg">
      <h3>Denkmal.org - Waaaaaas?</h3>
      <p>Denkmal.org heisst die Adresse für Basels Nachtschwärmer. Auf der Webseite entstand im Jahr 2004 ein Veranstaltungskalender, der Musikveranstaltungen im Raum Basel für die nächsten sieben Tage aufbereitet und übersichtlich darstellt. Inhaltlich bildet Denkmal.org ein breites Musikspektrum verschiedenster Genres ab. Dabei wird grossen Wert auf Unabhängigkeit gelegt: Es wird keine Werbung geschaltet und es werden nur bedingungslose Beiträge von Veranstaltern entgegengenommen. Kleine und grosse Clubs erhalten dieselbe Aufmerksamkeit. So widerspiegelt das Projekt die kulturelle Vielfalt von Basel und erfreut sich in unterschiedlichsten Kreisen einer stets wachsenden Beliebtheit.
      </p>
      <img class="screenshots" src="images/denkmal-mobile-stripe.jpg" alt="Mobile">
      <p>
        Durch die Nacht mit Denkmal.org™
      </p>
      <a class="button" href="https://denkmal.org" target="_blank" rel="noopener">Was loift? Denkmal.org</a>
    </section>

    <supporter/>

    <section id="team">
      <h3>Team</h3>
      <ul class="team">
        <li>
          <a href="https://twitter.com/nicolasschmutz" target="_blank" rel="noopener">Nicolas Schmutz</a>
        </li>
        <li>Reto Kaiser</li>
        <li>
          <a href="https://twitter.com/stophecom" target="_blank" rel="noopener">Christophe Schwyzer</a>
        </li>
        <li>Frederick Dürr</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Donate from '~/components/Donate'
import Supporter from '~/components/Supporter'

export default {
  components: {
    Supporter,
    Donate
  }
}
</script>

<style lang="scss">
#association h3 {
  background-image: url('/images/family.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 70px;
}

.screenshots {
  margin-top: 1em;
}

.team {
  padding-left: 1.4em;

  @media screen and (min-width: 500px) {
    padding-left: 0;
  }

  > li {
    font-style: italic;
    white-space: nowrap;

    @media screen and (min-width: 500px) {
      display: inline-block;

      &:not(:last-child)::after {
        content: ' • ';
        white-space: pre;
      }
    }
  }
}
</style>
