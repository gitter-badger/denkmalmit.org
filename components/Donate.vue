<template>
  <section id="donate">
    <h3>Unterstützung für Denkmal.org 2.0</h3>
    <p>Denkmal.org steht vor dem Aus. Das zurzeit verwendete PHP-Framework, auf welchem die Webseite aufgebaut ist, beruht auf veralteter Technik und wird nicht mehr gewartet. Deshalb suchen wir finanzielle Unterstützung, um die Plattform auf den neusten technischen Stand zu bringen. Wir rechnen mit ca. 400 Arbeitsstunden - dieser Aufwand übersteigt den Rahmen eines ehrenamtlichen Engagements.
      <a href="https://gdoc.pub/doc/e/2PACX-1vTfg2-qsKovLZ2Xxuum9Cz9xiJPF6pyfCDiq4WPnZPPzyWCFy4yPsP5Ge9qo89kyEkL28EC5wMsR-ND" target="_blank" rel="noopener">Mehr erfahren</a>. Nebst einer einmaligen Zuwendung, gibt es die Möglichkeit, uns langfristig zu unterstützen. Werde Mitglied im
      <a href="#association">Verein</a>.
    </p>

    <div class="payment">
      <div class="row">
        <div>
          <h5>Kontodaten</h5>
          <div>
            <span>IBAN:</span>
            <span>CH28 0900 0000 6147 1153 4</span>
          </div>
          <div>
            <small>Denkmalmit - Erlenstrasse 41, 4058 Basel</small>
          </div>
          <div>
            <small>BIC: POFICHBEXXX</small>
          </div>
        </div>
        <div>
          <h5>PayPal</h5>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="59VHN8MS4KYJQ">
            <input type="image" src="https://www.paypalobjects.com/de_DE/CH/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.">
            <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
      </div>

      <div class="row">
        <div>
          <h5>Einzahlungsschein</h5>
          <div>Gerne schicken wir Dir einen Einzahlungsschein nach Hause. Bitte sende uns eine Email mit deiner Postanschrift an
            <a href="mailto:basel@denkmal.org?subject=Einzahlungsschein%20Denkmalmit&body=Name%3A%0D%0AVorname%3A%0D%0AAdresse%3A">basel@denkmal.org</a>.
          </div>
        </div>
        <div>
          <div class="crypto">
            <h5>&lt;Nerdzone&gt;</h5>
            <ul>
              <li>
                <label for="bitcoin">Bitcoin (BTC)</label>
                <input id="bitcoin" type="text" value="3499tkbuTCjYaMDye6bse7GvcEJrhXAK9e" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li>
                <label for="ethereum">Ethereum (ETH)</label>
                <input id="ethereum" type="text" value="0x1de405cDD0Bc079847003750490Ea6234Ea57c45" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li v-show="cryptoExtended">
                <label for="dogecoin">Dogecoin (DOGE)</label>
                <input id="dogecoin" type="text" value="D9GsaaGHBbEMo4VQLShUb9WxMh1inXNgio" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li v-show="cryptoExtended">
                <label for="litecoin">Litecoin (LTC)</label>
                <input id="litecoin" type="text" value="MCJBx6wQ1LNzysodt3tzfNkHcKjizMpeNU" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li v-show="cryptoExtended">
                <label for="dash">Dash (DASH)</label>
                <input id="dash" type="text" value="Xh3NaTs4dbfXVCEHKKmfZC7NKD5xxJ9WdF" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li v-show="cryptoExtended">
                <label for="cardano">Cardano (ADA)</label>
                <input id="cardano" type="text" value="DdzFFzCqrht2pSYxQEWMHgbpCR5PXeGmdGPUeorbNR6gbbqiKV3dLjdFZQCtAH8UwvfgPSRK51vhotziJEBrKP8SyBnRMycPPtXi7Uun" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
              <li v-show="cryptoExtended">
                <label for="monero">Monero (XMR)</label>
                <input id="monero" type="text" value="4HJNXGgD24fWZ7wk8DGxLRhVD4wMhGH8s64WzoF3yAKg72442jY2fQEhFXbe6poDwULgeXbkSo4WFbNLZARajuJ7RzwfLxbiij7ND3rLTg" readonly="readonly" />
                <a href="javascript:;" class="icon copy" alt="Copy Address"></a>
              </li>
            </ul>
            <a v-show="!cryptoExtended" class="crypto-more" href="javascript:;" @click="cryptoExtended = true">Mehr anzeigen</a>
          </div>
        </div>
      </div>
    </div>
    <p>Herzlichen Dank für Deine Spende!</p>
    <div class="inspiration">
      <h5>Wieviel ist angemessen?
        <strong>*</strong>
      </h5>
      <ul>
        <li>
          <span class="amount">5.-</span>
          <div>
            <span class="label">Aufgewacht mit Filmriss, Döner in der Hand, leerem Portmonnaie und Kater meines Lebens. Mehr geht nicht, sorry Jungs.</span>&nbsp;
            <strong class="reward">High Five</strong>
          </div>
        </li>
        <li>
          <span class="amount">15.-</span>
          <div>
            <span class="label">Denkmal.org ist mir 3 Stangen wert. (Oder ca. 24 Anker).</span>&nbsp;
            <strong class="reward">Wir stossen auf dich an</strong>
          </div>
        </li>
        <li>
          <span class="amount">25.-</span>
          <div>
            <span class="label">Soviel wie ein Konzerteintritt.</span>&nbsp;
            <strong class="reward">Passivmitgliedschaft für ein Jahr</strong>
          </div>
        </li>
        <li>
          <span class="amount">50.-</span>
          <div>
            <span class="label">Ich trinke nächsten Samstag nur Wasser. Hier, nehmt meine Kohle.</span>&nbsp;
            <strong class="reward">Dein Körper wirds dir danken</strong>
          </div>
        </li>
        <li>
          <span class="amount">100.-</span>
          <div>
            <span class="label">Party Animal und Gönner by Heart.</span>&nbsp;
            <strong class="reward">♥ + 1x Denkmal.org Poster</strong>
          </div>
        </li>
        <li>
          <span class="amount">250.-</span>
          <div>
            <span class="label">I'm up all night to get lucky.</span>&nbsp;
            <strong class="reward">1x Denkmal.org T-Shirt aka Wingman-Service</strong>
          </div>
        </li>
        <li>
          <span class="amount">500.-</span>
          <div>
            <span class="label">Ich hab mein eigenes Bermudadreieck.</span>&nbsp;
            <strong class="reward">1x Bermudadreieck mit dem Denkmal-Team</strong>
          </div>
        </li>
        <li>
          <span class="amount">1'000.-</span>
          <div>
            <span class="label">I'm rich, bitch.</span>&nbsp;
            <strong class="reward">1x Tour-de-Kleinbasel mit dem Denkmal-Team</strong>
          </div>
        </li>
        <li>
          <span class="amount">20'000.-</span>
          <div>
            <span class="label">Ich hab durch Denkmal.org die Liebe meines Lebens gefunden. Eigentlich unbezahlbar.</span>&nbsp;
            <strong class="reward">1x Party von epischen Ausmassen</strong>
          </div>
        </li>
      </ul>
      <div class="asteriks">
        *Betrag in CHF. In Klammern die jeweilige Gegenleistung. Diese muss ggf. persönlich eingelöst/abgeholt werden. Es liegt in der Verantwortung der Unterstützer die angebotene Leistung einzufordern. Alle Angaben ohne Gewähr.
        <a href="mailto:basel@denkmal.org">basel@denkmal.org</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cryptoExtended: false
  }),

  mounted() {
    (function () {
      var links = document.querySelectorAll('.crypto ul a');
      links.forEach(function (element) {
        element.onclick = function (element) {
          var el = element.currentTarget.previousElementSibling
          el.select();
          document.execCommand('Copy');
        };
      });
    })();
  }
}
</script>

<style lang="scss">
#donate {
  .inspiration {
    border: 1px dashed;
    margin-top: 2em;
    padding: 15px;

    h5 {
      margin-top: 0.2em;
    }
    ul {
      font-size: 0.8em;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        list-style-type: none;
        margin-bottom: 0.3em;
      }
    }
    .amount {
      display: inline-block;
      flex-shrink: 0;
      font-weight: bold;
      margin-right: 12px;
      text-align: right;
      width: 45px;
    }

    .reward {
      &::after {
        content: ')';
      }

      &::before {
        content: '(';
      }
    }

    .asteriks {
      font-size: 0.7em;
      margin-top: 1em;
      padding-left: 57px;
      width: 90%;
    }
  }

  .payment {
    background-color: #afd2ca21;
    border: 1px solid #afd2ca;
    padding: 12px 12px 12px;
  }

  .row:first-child > div:first-of-type h5 {
    margin-top: 0.4em;
  }

  @media (min-width: 760px) {
    .row {
      display: flex;
    }

    .row > div {
      flex-basis: 50%;
      width: 50%;
    }

    .row:first-child > div h5 {
      margin-top: 0.4em;
    }

    .row > div:first-of-type {
      padding-right: 40px;
    }
  }

  .crypto {
    margin-bottom: 1em;

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;

      li {
        align-items: center;
        display: flex;
        margin-bottom: 0.1em;
        position: relative;
        font-size: 0.9em;

        a {
          opacity: 0.6;
          position: absolute;
          right: 0;
          padding: 2px 12px;
        }
      }
    }

    label {
      margin-right: 5px;
      width: 120px;

      &::after {
        content: ':';
      }
    }

    input {
      padding: 5px 30px 5px 12px;
      flex-grow: 1;
      font-size: inherit;
    }

    .hidden {
      display: none;
    }

    .crypto-more {
      float: right;
    }
  }

  h3 {
    color: #ad940e;
  }

  .donate-details {
    font-size: 0.8em;
  }
}
</style>
