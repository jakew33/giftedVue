<template>
  <div class="container-fluid">
    <div class="card row">
      <div class="d-flex justify-content-center">
        <img class="img-fluid rounded elevation-5" src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR1GNFLdj2R3LXEA-WX9N2YfeUWdriBT_O1xcFQ4_8hAUeN14YDVCLXTKQCmJKKstaD"
        :alt="giftProp?.tag">
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-danger text-center"><h1 class="h1">Open Gift</h1></button>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState.js";
import { Gift } from '../models/Gift.js';
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup(){
  return {

    async openGift(id) {
      try {
        await giftsService.openGift(id)
      } catch (error) {
        logger.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }

    }
  }
  },
};
</script>


<style scoped lang="scss">
.card {
background: rgba(0, 255, 17, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>