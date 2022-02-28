import QuestionController from "./Controllers/QuestionController.js"

class App {
  uestionController = new QuestionController()
}

window["app"] = new App();
