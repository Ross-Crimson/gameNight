import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
    ChangeScore(playerName, num) {
        const playerScoreChanged = AppState.players.find(player => player.name == playerName)
        playerScoreChanged.score += num
        playerScoreChanged.score = Math.max(playerScoreChanged.score, 0)
    }

    AddPlayer(newPlayerName) {
        console.log(newPlayerName)
        AppState.players.push(new Player(newPlayerName))
        console.log(AppState.players)
    }
}

export const playerService = new PlayerService()