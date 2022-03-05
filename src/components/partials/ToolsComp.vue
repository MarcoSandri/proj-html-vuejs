<template>
  <section>
      <div class="info">
            <h2>Build tools and extensive documentation</h2>
            <p>You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
            <ul>
                <li> <font-awesome-icon icon="fa-regular fa-circle-check" class="highlight" /> Digital Marketing Solutions for Tomorrow</li>
                <li> <font-awesome-icon icon="fa-regular fa-circle-check" class="highlight" /> Our Talendet & Experienced Marketing Agency</li>
                <li> <font-awesome-icon icon="fa-regular fa-circle-check" class="highlight" /> Create your own skin to match your brand</li>
            </ul>
            <button class="blue-btn">Read More <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
      </div>
      <div class="image">
          <img src="../../assets/img/1.png" alt="">
      </div>
  </section>
</template>

<script>
export default {
    name: "ToolsComp"
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .info {
            width: 50%;

            ul {
                color: $lightgray_txt;
                line-height: 1.75rem;
                margin-bottom: 1rem;
            }
        }

        .image {
            width: 40%;
            img {
                object-fit: contain;
                width: 100%;
            }
        }
}

</style>