<template>
  <section class="main-content">
    <div class="content-section">
      <div class="faq-section">
        <h2 class="faq-section__heading">Ofte stillede spørgsmål</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvorfor bruger I MobilePay og ikke kontant betaling?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Vores erfaring er, at mange slet ikke har kontanter på sig, når man henvender sig, da mobil-betaling næsten har overtaget fuldstændigt. Over 90 procent af alle danskere har MobilePay, så det er den bedste betalingsform. Der ud over er det også langt mere sikkert, når man ikke skal gå rundt med større eller mindre kontantbeløb på sig.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvad gør jeg, hvis jeg kan sælge mere, end jeg har fået udleveret?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Det kan du sikkert. Systemet er indrettet sådan, at du nemt kan overtage nogle af dine kammeraters produkter, hvis de har nogle i overskud.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvad gør jeg, hvis jeg ikke sælge min andel?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Snak med din holdleder. Der er sikkert også nogle holdkammerater, der kan sælge flere og derfor kan overtage nogle fra dig.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvem må jeg sælge til?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Ifølge loven må du sælge dine produkter til andre medlemmer i klubben, men du må også godt sælge til din familie og venner, så du får nok hurtigt udsolgt.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvor lang tid har jeg til at sælge min andel?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Som udgangspunkt har du to måneder. Du kan hele tiden følge med på din salgsside, hvor lang tid, der er gået, og hvor godt du ligger i forhold til både tid og dine holdkammeraters salg.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvad nu, hvis en kunde klager over varen?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Vi har en klar politik om, at vi på kluboplevelser kun vil udbyde produkter af højeste kvalitet, så det vil være en sjælden hændelse. Derfor står vi også gerne på mål for vore produkter, så vi tager det alvorligt, hvis situationen skulle opstå. Derfor skal du også bare henvise kunden til os på kluboplevelser.dk, så tager vi os af det.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvis en kunde fortryder sit køb lige efter, der er betalt. Hvad gør jeg så?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Vi har ikke oplevet det endnu, og vi har en klar forventning om, at det også fremadrettet vil være en meget sjælden ting. Betalingssystemet kræver aktiv handling fra kunden, så fortrydelsen vil typisk komme inden betalingen. Men skulle det ske, så kontakt os på kluboplevelser.dk, så vi kan føre betalingen tilbage.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-item__header">
              <h3>Hvad hvis kunderne er bange for, at deres telefonnummer og navn bliver gemt?</h3>
              <img src="@/assets/img/icon-faq.svg">
            </div>
            <div class="faq-item__body">
              <p>Det gør de ikke. Kluboplevelser.dk tager datasikkerhed alvorligt. Derfor gemmer vi heller ikke betalingsinformationer fra dem, der køber produkterne.</p>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Kontakt os</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit deleniti necessitatibus aspernatur labore iste voluptatibus corporis quos atque consectetur dolor tenetur ipsam eum, excepturi similique provident, accusamus quis eveniet!</p>
        </div>
        <div class="content-block">
            <div id="fb-root"></div>
            <script>(function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>
            <div class="fb-widget">
              <div class="fb-page" data-href="https://www.facebook.com/kluboplevelser.dk" data-tabs="messages, timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/kluboplevelser.dk" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/kluboplevelser.dk">Kluboplevelser.dk</a></blockquote></div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>