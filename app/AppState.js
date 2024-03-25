import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  players = [
    new Player("Josh"),
    new Player("Becky"),
    new Player("Taylor")
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())