export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.color = ''
    }

    get PlayerTemplateCard() {
        return `
        <div class="row m-3 p-3 text-light bg-dark rounded">
            
            <div class="col-4">${this.name}</div>
            <div class="col-6 d-flex flex-row justify-content-evenly">
              <button onclick="app.playerController.ScorePoint('${this.name}', -1)" class="btn btn-primary">-</button>
              <div>${this.score}</div>
              <button onclick="app.playerController.ScorePoint('${this.name}', 1)" class="btn btn-primary">+</button>
            </div>
          </div>
          `
    }
}