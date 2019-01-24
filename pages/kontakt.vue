<template>
  <section class="main-content">
    <div class="content-section">
      <div class="faq-section">
        <h2 class="faq-section__heading">Ofte stillede spørgsmål</h2>
        <div class="faq-grid">
          <faq-item v-for="(faqItem, faqKey) in faqItems" :content="faqItem" :open="(faqKey === openFaq)" @click="() => openFaqItem(faqKey)" :key="faqItem.header"></faq-item>
        </div>
      </div>
    </div>
    <div class="content-section" id="contactBlock">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Kontakt os</h2>
          <p>Vi er klar til at hjælpe dig, så send endelig dine spørgsmål på banen. Du kan kontakte os ved hjælp af formularen her, hvor du rammer os via Facebook. Du er også velkommen til at ringe til os på <a href="tel:004521459850">21 45 98 50</a>, lige som du kan skrive til os på <a href="mailto:info@kluboplevelser.dk">info@kluboplevelser.dk</a>, hvis du foretrækker email.
Vi glæder os til at tale med dig.</p>
        </div>
        <div class="content-block">
            <div class="fb-widget">
              <div class="fb-page" data-href="https://www.facebook.com/kluboplevelser.dk" data-tabs="messages, timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/kluboplevelser.dk" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/kluboplevelser.dk">Kluboplevelser.dk</a></blockquote></div>
            </div>
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="company-team">
        <div class="company-team__content">
          <div class="content-block">
           <img src="@/assets/img/kluboplevelser-team.jpg" alt="" class="">
          </div>
          <div class="content-block">
             <h2>Vores hold</h2>
            <p>Kluboplevelser.dk består af os seks, der alle har lang erfaring i foreningslivet. Vi er et hold, der spiller sammen om at gøre det så godt som muligt for dig og dine klubkammerater. <br /> Bagerst fra venstre ses Ole Madsen, Michael Bjørn Hansen, Lars Duus Madsen og Henrik Hansen, mens Lotte Hansen og Tobias Feldballe sidder forrest.</p>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
import FaqItem from '~/components/FaqItem';

export default {
  data() {
    return {
      openFaq: -1,
      faqItems: [
        {
          header: 'Hvorfor bruger I MobilePay og ikke kontant betaling?',
          text: 'Vores erfaring er, at mange slet ikke har kontanter på sig, når man henvender sig, da mobil-betaling næsten har overtaget fuldstændigt. Over 90 procent af alle danskere har MobilePay, så det er den bedste betalingsform. Der ud over er det også langt mere sikkert, når man ikke skal gå rundt med større eller mindre kontantbeløb på sig.'
        },
        {
          header: 'Hvad gør jeg, hvis jeg kan sælge mere, end jeg har fået udleveret?',
          text: 'Det kan du sikkert. Systemet er indrettet sådan, at du nemt kan overtage nogle af dine kammeraters produkter, hvis de har nogle i overskud.'
        },
        {
          header: 'Hvad gør jeg, hvis jeg ikke sælge min andel?',
          text: 'Snak med din holdleder. Der er sikkert også nogle holdkammerater, der kan sælge flere og derfor kan overtage nogle fra dig.'
        },
        {
          header: 'Hvem må jeg sælge til?',
          text: 'Ifølge loven må du sælge dine produkter til andre medlemmer i klubben, men du må også godt sælge til din familie og venner, så du får nok hurtigt udsolgt.'
        },
        {
          header: 'Hvor lang tid har jeg til at sælge min andel?',
          text: 'Som udgangspunkt har du to måneder. Du kan hele tiden følge med på din salgsside, hvor lang tid, der er gået, og hvor godt du ligger i forhold til både tid og dine holdkammeraters salg.'
        },
        {
          header: 'Hvad nu, hvis en kunde klager over varen?',
          text: 'Vi har en klar politik om, at vi på kluboplevelser kun vil udbyde produkter af højeste kvalitet, så det vil være en sjælden hændelse. Derfor står vi også gerne på mål for vore produkter, så vi tager det alvorligt, hvis situationen skulle opstå. Derfor skal du også bare henvise kunden til os på kluboplevelser.dk, så tager vi os af det.'
        },
        {
          header: 'Hvis en kunde fortryder sit køb lige efter, der er betalt. Hvad gør jeg så?',
          text: 'Vi har ikke oplevet det endnu, og vi har en klar forventning om, at det også fremadrettet vil være en meget sjælden ting. Betalingssystemet kræver aktiv handling fra kunden, så fortrydelsen vil typisk komme inden betalingen. Men skulle det ske, så kontakt os på kluboplevelser.dk, så vi kan føre betalingen tilbage.'
        },
        {
          header: 'Hvad hvis kunderne er bange for, at deres telefonnummer og navn bliver gemt?',
          text: 'Det gør de ikke. Kluboplevelser.dk tager datasikkerhed alvorligt. Derfor gemmer vi heller ikke betalingsinformationer fra dem, der køber produkterne.'
        }
      ]
    }
  },
  mounted() {
    if(window.FB) {
      window.FB.XFBML.parse();
    }
  },
  methods: {
    openFaqItem(faqKey) {
      if(faqKey === this.openFaq) {
        this.openFaq = -1;
      } else {
        this.openFaq = faqKey;
      }
    }
  },
  components: {
    FaqItem
  },
  head() {
        return {
            title: 'Ofte stillede spørgsmål og kontakt',
            meta: [
                { hid: 'description', name: 'description', content: 'Kontakt os og læs ofte stillede spørgsmål'}
            ]
        }
  }
}
</script>