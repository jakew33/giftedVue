import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await sandboxApi.get('api/gifts')
    logger.log('getting gifts', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts, 'appstate gifts')
  }

  async openGift(id){
    const gift = AppState.gifts.find(g => g.id == id)
    gift.opened = await api.put(`api/gifts/${id}`, gift)
    AppState.gifts.splice(gifIndex,1,new Gifts(res.data))
    AppState.emit(`gifts`)
  }
}

export const giftsService = new GiftsService()



