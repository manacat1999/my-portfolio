const quizText = document.getElementById("quiz-text")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "出身地はどこでしょう？",
  choices: [
    {
      text: "豊田",
      feedback:
        "残念！でも車で2分くらいで行ける(笑)",
    },
    {
      text: "名古屋",
      feedback: "残念！！！！名古屋で生まれたかった。",
    },
    {
      text: "岡崎",
      feedback: "正解！東海オンエアと一緒！",
    },
  ],
}

const reloadQuiz = function() {
  quizText.textContent = "Q. " + quiz.text

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
reloadQuiz()