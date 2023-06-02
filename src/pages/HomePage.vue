<template>
  <div class="container-fluid">
    <section class="row p-5">
      <div class="col-md-5" v-for="g in gifts" :key="g.id">
      <GiftCard :giftProp="g" />
      </div>
    </section>
  </div>
</template>
  


<script>
import { computed, onMounted } from "vue"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { giftsService } from "../services/GiftsService.js"
import { AppState } from "../AppState.js"
export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
        logger.log('getting gifts')
      } catch (error) {
        logger.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

      onMounted(() => {
        getGifts()
      })

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
