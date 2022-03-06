<template>
  <section>
      <div class="info">
        <h2>Our rates for developer from landick team</h2>
        <p>Start working with <span class="highlight">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
      </div>
      <div class="plans">
        <PlansCard v-for="(plan, index) in plans" :key="index" :tag="plan.type" :price="plan.price" :frequency="plan.frequency" :description="plan.description" :features="plan.features"/>
      </div>
  </section>
</template>

<script>
import PlansCard from '../cards/PlansCard.vue'

export default {
    name: 'PlansComp',
    components: {
      PlansCard,
    },
    data() {
      return {
        plans: [
          {
            type: 'Basic',
            price: '$9.00',
            frequency: 'Per Month',
            description : 'All the basics for business that are just getting started.',
            features: [
              'Full Access',
              'Enhanced Security',
              'Source Files',
              '1 Domain Free',
              'Enhanced Security'
            ]
          },
          {
            type: 'Business',
            price: '$39.00',
            frequency: 'Per Month',
            description : 'Better for growing business that want more customers.',
            features: [
              'Full Access',
              'Enhanced Security',
              'Source Files',
              '1 Domain Free',
              'Enhanced Security'
            ]
          },{
            type: 'Enterprise',
            price: '$79.00',
            frequency: 'Per Month',
            description : 'Advanced features for pros who need more customization.',
            features: [
              'Full Access',
              'Enhanced Security',
              'Source Files',
              '1 Domain Free',
              'Enhanced Security'
            ]
          },
        ]
      }
    }

}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    .info {
        text-align: center;
        width:55%;
        margin: auto;
    }

    .plans {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
</style>