<template>
  <div class="plan">
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
        features: Array
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    .plan {
        margin-top: 1rem;
        padding: 2rem;
        border: 1px solid $lightblueborder_btn;
        border-radius: 10px;
        width: 350px;

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