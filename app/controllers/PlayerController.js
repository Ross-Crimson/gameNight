import { AppState } from "../AppState.js";
import { playerService } from "../services/PlayerService.js";

export class PlayerController {
    constructor() {
        console.log(AppState.players)
        this.DrawPlayers()
    }

    DrawPlayers() {
        let buttonHTML = ''
        AppState.players.sort((a, b) => b.score - a.score)
        AppState.players.forEach(player => {
            buttonHTML += player.PlayerTemplateCard
        })
        let buttonsElm = document.getElementById('players')
        buttonsElm.innerHTML = buttonHTML
    }

    ScorePoint(playerName, num) {
        playerService.ChangeScore(playerName, num)
        this.DrawPlayers()
    }

    AddPlayer(event) {
        event.preventDefault()
        let form = event.target
        let newPlayerName = form.name.value
        playerService.AddPlayer(newPlayerName)
        this.DrawPlayers()
        form.reset()
    }


}