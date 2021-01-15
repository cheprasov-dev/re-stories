const adsInitState = {
  blocksAd: null
}

const SET_BLOCKS_AD = 'ADS/SET_BLOCKS_AD'

export const setBlocksAd = (blocksAd) => ({type: SET_BLOCKS_AD, payload: { blocksAd }})

export function adsReducer (state = adsInitState, {type, payload}) {
  switch (type) {
    case SET_BLOCKS_AD:
      return {
        ...state,
        blocksAd: payload.blocksAd
      }
    default:
      return state
  }
}
