<template>
  <header id="header">
    <div class="sticky">
      <div class="boundaries header-bar">
        <div class="logo-box">
          <div class="label">
            <span class="inner">Verein</span>
          </div>
          <img class="logo" src="/images/logo.svg" alt="Denkmal.org">
          <h1>Denkmalmit</h1>
        </div>
        <a class="button" href="https://docs.google.com/forms/d/e/1FAIpQLSecptumZAPUwRP7wSV5amiUocH60AMnJmuuY-fR0_R00PE4GQ/viewform?usp=sf_link" target="_blank" rel="noopener">Mitglied werden</a>
      </div>
    </div>
  </header>
</template>

<script>
import _ from 'underscore'

export default {
  data: () => ({
    offsetTop: null,
    offsetSticky: null
  }),
  mounted() {
    this.offsetSticky = document.querySelector('#header .sticky').offsetTop
    const instance = basicScroll.create({
      elem: document.querySelector('#header'),
      from: 'top-top',
      to: 'bottom-top',
      direct: true,
      props: {
        '--opacityDecrease': {
          from: .99,
          to: .01
        },
        '--opacityIncrease': {
          from: .01,
          to: 1
        },
        '--scale': {
          from: '1',
          to: '.8'
        }
      }
    }).start()

    window.addEventListener('scroll', this.scrollAction);
  },
  methods: {
    scrollAction: function (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      var layout = this.$el
      var self = this

      _.throttle(function () {
        layout.classList.toggle('header--sticky', self.offsetTop > self.offsetSticky)
      }, 100)()
    }
  },
  unbind() {
    window.removeEventListener('scroll', this.scrollAction)
  },
}
</script>

<style lang="scss">
#header {
  background-color: black;
  color: white;
  display: flex;
  align-items: flex-end;
  height: 44vh;
  overflow: hidden;
  position: relative;

  &::before {
    background-image: url('/images/header.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    content: '';
    height: 100%;
    opacity: calc(var(--opacityDecrease) - 0.2);
    position: absolute;
    top: 0;
    width: 100%;
    will-change: opacity;
  }

  .logo-box {
    transform-origin: bottom left;
    transform: scale(var(--scale));
    transition: transform 0.1s;
    will-change: transform;

    .label {
      margin: 0;
      font-size: 1.2em;
    }

    .logo {
      width: 200px;
    }
  }

  h1 {
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .header-bar {
    align-items: flex-end;
    display: flex;

    .button {
      background-color: transparent;
      color: white;
      display: none;
      margin-left: auto;
      margin-bottom: 4px;
      opacity: 0;
      pointer-events: none;
      transform: translateX(50px);
      transition: 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

      @media screen and (min-width: 500px) {
        display: inline-flex;
      }
    }
  }

  .sticky {
    bottom: 0;
    height: 70px;
    position: absolute;
    padding: 0 5vw 5px;
    width: 100%;
    z-index: 10;

    &::before {
      background-color: black;
      content: '';
      height: 100%;
      left: 0;
      opacity: var(--opacityIncrease);
      position: absolute;
      top: 0;
      width: 100%;
      will-change: opacity;
    }
  }

  &.header--sticky .sticky {
    position: fixed;
    top: 0;

    .header-bar .button {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
      transition-delay: 300ms;
    }
  }
}
</style>
