<template>
  <div>
    <app-header/>
    <main class="main">
      <div class="boundaries">
        <nuxt/>
      </div>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
html {
  color: var(--color-primary);
  font-family: 'Open Sans', Arial, sans-serif;

  --color-link: #445a56;
  --color-primary: rgb(29, 29, 29);
}

body {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  color: currentColor;
  text-decoration: none;
  position: relative;
  white-space: nowrap;
}

strong {
  font-weight: 600;
}

img {
  max-width: 100%;
}

section {
  position: relative;
}

main a:not(.button):not(.icon)::before {
  content: '';
  background-color: hsla(168, 26%, 60%, 0.612);
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 6px;
  width: 100%;
  z-index: -1;
}

p {
  @media screen and (min-width: 500px) {
    text-align: justify;
  }

  &[target='_blank']:not(.button):not(.icon)::before {
    width: calc(100% - 22px);
  }
  &[target='_blank']:not(.button)::after {
    background-image: url('/images/external.svg');
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    display: inline-flex;
    height: 16px;
    margin-left: 6px;
    position: relative;
    bottom: -3px;
    width: 16px;
  }
}

h3 {
  border-bottom: 2px solid;
  margin-bottom: 0.5em;
  margin-top: 1em;
  padding-top: 2em;
  padding-bottom: 0.1em;
}

h3 + p,
h4 + p {
  margin-top: 0;
}

h4 {
  margin-top: 2em;
  margin-bottom: 0.3em;
}

h5 {
  margin-bottom: 0.5em;
}

.icon {
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-flex;
  height: 16px;
  position: relative;
  width: 16px;
}

.icon.copy {
  background-image: url('/images/copy.svg');
}

.semibold {
  font-weight: 600;
}

.header,
.main,
.footer {
  padding: 15px 5vw;
}

.boundaries {
  margin: 0 auto;
  max-width: 820px;
  width: 100%;
}

.error {
  color: red;
}

.button {
  align-items: center;
  background-color: white;
  border: 2px solid currentColor;
  border-radius: 4px;
  color: black;
  display: inline-flex;
  justify-content: center;
  height: 40px;
  padding: 4px 12px;
  text-decoration: none;
}
</style>
