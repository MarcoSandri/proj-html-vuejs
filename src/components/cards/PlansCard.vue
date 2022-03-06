<template>
  <div class="plan">
      <div class="banner" v-if="best">
        <div class="triangle-up"></div>
        <div class="triangle-down"></div>
      </div>
      <div class="info">
        <span class="tag">{{tag}}</span>
        <h1>{{price}}</h1>
        <p>{{frequency}}</p>
        <p>{{description}}</p>
      </div>
      <div class="features">
          <ul>
              <li v-for="(feature,index) in features" :key="index"><font-awesome-icon icon="fa-regular fa-circle-check" class="highlight"/> {{feature}} </li>
          </ul>
      </div>
      <div class="action">
          <button class="blue-btn big-btn">Buy Now</button>
          <div class="disclaimer">*No credit card required</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PlansCard",
    props: {
        tag: String,
        price: String,
        frequency: String,
        description: String,
        features: Array,
        best: Boolean
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    .plan {
        position: relative;
        margin-top: 1rem;
        padding: 2rem;
        border: 1px solid $lightblueborder_btn;
        border-radius: 10px;
        width: 350px;
        box-shadow: 0 3px 0 $lightgray_txt;

        &:hover {
            box-shadow: 0 3px 0 $blue_txt, 0 0 10px $lightblueborder_btn;
            transform: scale(1.01)
        }

        .banner {
            position: absolute;
            top: 25px;
            right: 25px;
            width: 110px;
            border-bottom: 20px solid $orange;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            transform: translate(50%, -50%) rotate(45deg);

            &::after {
                content: "Best";
                position: absolute;
                color: $white_txt;
                margin-top: 10px;
                transform: translate(50%, -50%);
            }

            .triangle-up {
                position: absolute;
                width: 0;
                top: 20px;
                left: -20px;
                border-bottom: 10px solid transparent;
                border-left: 10px solid #d55b0e;
                border-top: 0 solid transparent;
            }

            .triangle-down {
                position: absolute;
                width: 0;
                top: 20px;
                right: -20px;
                border-bottom: 10px solid transparent;
                border-right: 10px solid #d55b0e;
                border-top: 0 solid transparent;
            }
        }

        .info {
            .tag {
                @include lightblue-tag;
                border-radius: 100vh;
                padding: 0.5rem 1.25rem;
            }
    
            h1 {
                margin-bottom: 0.5rem;
            }
    
            p {
                margin: 0.5rem 0 1rem 0;
            }
        }

        .features {
            padding: 1rem 0;
            border-top: 1px solid $lightblueborder_btn;

            ul {
                line-height: 1.75rem;
                color: $lightgray_txt;
            }
        }

        .action {

            .disclaimer {
                color: $lightgray_txt;
                margin-top: 1rem;
            }
        }
    
    }
</style>