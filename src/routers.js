
import { Page, Router } from '@happysanta/router'
import {
  PAGE_CONTEST, PAGE_CONTESTS_TOPIC, PAGE_PARTICIPANTS, PAGE_PERSONAL_ACCOUNT, PAGE_TOPICS, PANEL_TOPICS,
  PAGE_TRAINING_CONTESTS, PAGE_TRAINING_PRIZES, PANEL_CONTEST, PANEL_CONTESTS_TOPIC, PANEL_PARTICIPANTS,
  PANEL_TRAINING_CONDITIONS, PANEL_TRAINING_CONTESTS, PANEL_TRAINING_PRIZES, VIEW_CONTEST,
  VIEW_PARTICIPANT, VIEW_TRAINING_SECTION, PANEL_PERSONAL_ACCOUNT, PAGE_TRAINING_CONDITIONS
} from './redux/constants/routingConstants'

const routers = {
  [PAGE_TOPICS]: new Page(PANEL_TOPICS, VIEW_PARTICIPANT),
  [PAGE_CONTESTS_TOPIC]: new Page(PANEL_CONTESTS_TOPIC, VIEW_PARTICIPANT),
  [PAGE_PERSONAL_ACCOUNT]: new Page(PANEL_PERSONAL_ACCOUNT, VIEW_PARTICIPANT),
  [PAGE_CONTEST]: new Page(PANEL_CONTEST, VIEW_CONTEST),
  [PAGE_PARTICIPANTS]: new Page(PANEL_PARTICIPANTS, VIEW_CONTEST),

  [PAGE_TRAINING_CONTESTS]: new Page(PANEL_TRAINING_CONTESTS, VIEW_TRAINING_SECTION),
  [PAGE_TRAINING_CONDITIONS]: new Page(PANEL_TRAINING_CONDITIONS, VIEW_TRAINING_SECTION),
  [PAGE_TRAINING_PRIZES]: new Page(PANEL_TRAINING_PRIZES, VIEW_TRAINING_SECTION),
}

export const router = new Router(routers)

// колбек при открытие страницы page
// router.onEnterPage(page, () => {
//
// })

router.on('update', (nextRote, oldRoute) => {
  nextRote.getPageId() // /product/:id([0-9]+)
  nextRote.getParams() // { id: "12" }
  nextRote.getPanelId() // panel_product
  nextRote.getViewId() // view_main
  nextRote.getLocation() // /product/12
  nextRote.isModal() // false
  nextRote.isPopup() // false
  nextRote.hasOverlay() // false
  // console.log(oldRoute)
  if (oldRoute) {
    console.log(`move from page ${oldRoute.getLocation()} -> ${nextRote.getLocation()}`)
  } else {
    console.log(`enter to page ${nextRote.getLocation()}`)
  }
})

router.start()
