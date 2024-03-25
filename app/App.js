import { router } from './router-config.js';
import { PlayerController } from './controllers/PlayerController.js';

class App {

  router = router

  playerController = new PlayerController()
  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
