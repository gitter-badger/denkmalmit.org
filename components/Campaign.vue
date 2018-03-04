<template>
  <section id="campaign">
    <h3>Unsere Kampagnen</h3>
    <no-ssr>
      <carousel :perPage=1>
        <slide v-for="n in 6" :key=n>
          <div class="poster">
            <img :src="`/images/campaign/denkmal${n}.jpg`" alt="Kampagne">
            <div class="poster-share">
              <div class="label">Teilen</div>
              <social-sharing :url="`https://denkmalmit.org/images/campaign/denkmal${n}.jpg`" title="Denkmal.org" description="Denkmal.org - Der Musik- und Partykalender für Basel" quote="Musik- und Partykalender für Basel" hashtags="denkmalmit, denkmal, basel" twitter-user="denkmal_basel" inline-template>
                <div class="icons">
                  <network network="facebook">
                    <i class="fab fa-facebook"></i>
                  </network>
                  <network network="twitter">
                    <i class="fab fa-twitter"></i>
                  </network>
                </div>
              </social-sharing>
            </div>
          </div>
        </slide>
      </carousel>
    </no-ssr>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
#campaign {
  margin-bottom: 80px;

  h3 {
    margin-bottom: 1em;
  }

  .poster {
    background-color: #ebebeb;
    display: flex;
    height: 70vh;
    justify-content: center;
    position: relative;

    img {
      object-fit: contain;
    }

    .poster-share {
      position: absolute;
      background-color: black;
      color: white;
      display: flex;
      align-items: center;
      padding: 5px 16px;
      top: 0;
      right: 0;

      .label {
        font-weight: bold;
        text-transform: uppercase;
        margin-right: 5px;

        &::after {
          content: ':';
        }
      }

      .icons {
        display: flex;
        font-size: 1.2em;

        span {
          padding: 7px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
