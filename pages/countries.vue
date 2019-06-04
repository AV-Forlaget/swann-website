<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Countries</h1>
        <p class="main-hero__subheading">[text about how many countries we work in, and stuff]</p>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
          <dropdown placeholder="Choose country" :options="countryOptions"></dropdown>
          <div class="country-group">
            <h2 class="country-group__heading">Northern Europe</h2>
            <div class="country-group__grid">
              <nuxt-link class="country-item" to="/denmark">
                <h3 class="country-item__heading">Denmark</h3>
                  <div class="country-item__tags">
                    <span>Audio production</span>
                    <span>Distribution</span>
                  </div>
                  <p class="country-item__narrators">100 active narrators</p>
              </nuxt-link>
               <div class="country-item">
                <h3 class="country-item__heading">Sweden</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">24 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Norway</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">100 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Finland</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">54 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Iceland</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">4 active narrators</p>
              </div>
            </div>
          </div>
          <div class="country-group">
            <h2 class="country-group__heading">Central Europe</h2>
            <div class="country-group__grid">
              <div class="country-item">
                <h3 class="country-item__heading">England</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Netherlands</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">France</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">14 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Germany</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">12 active narrators</p>
              </div>
            </div>
          </div>
          <div class="country-group">
            <h2 class="country-group__heading">Eastern Europe</h2>
            <div class="country-group__grid">
              <div class="country-item">
                <h3 class="country-item__heading">Hungary</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Ukraine</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Estonia</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">14 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Latvia</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">12 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Poland</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Croatia</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Serbia</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">14 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Romania</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">12 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Bulgaria</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Russia</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
            </div>
          </div>
          <div class="country-group">
            <h2 class="country-group__heading">Southern Europe</h2>
            <div class="country-group__grid">
              <div class="country-item">
                <h3 class="country-item__heading">Spain</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Portugal</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">Italy</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">14 active narrators</p>
              </div>
              <div class="country-item">
                <h3 class="country-item__heading">Greece</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">12 active narrators</p>
              </div>
            </div>
          </div>
          <div class="country-group">
            <h2 class="country-group__heading">Americas</h2>
            <div class="country-group__grid">
              <div class="country-item">
                <h3 class="country-item__heading">Venezuela</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
               <div class="country-item">
                <h3 class="country-item__heading">U.S.A</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
            </div>
          </div>
          <div class="country-group">
            <h2 class="country-group__heading">Asia</h2>
            <div class="country-group__grid">
              <div class="country-item">
                <h3 class="country-item__heading">Singapore</h3>
                <div class="country-item__tags">
                  <span>Audio production</span>
                  <span>Distribution</span>
                </div>
                <p class="country-item__narrators">10 active narrators</p>
              </div>
            </div>
          </div>
      </div>
    </div>

  </section>
</template>
