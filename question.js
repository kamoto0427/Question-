const quiz = [
  {
    question: 'カモメのススメがブログを開設したのはいつ？',
    answers: [ '2020年3月', '2020年4月', '2020年5月', '2020年6月'],
    correct: '2020年6月'
  }, {
    question: 'クラウドワークスでは3ヶ月で何記事書いた？',
    answers: [ '50記事', '100記事', '150記事', '200記事'],
    correct: '150記事'
  }, {
    question: 'カモメのススメが学んでいるプログラミング言語はなに？',
    answers: [ 'java', 'ruby', 'python', 'swift'],
    correct: 'ruby'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $btn = document.getElementsByTagName('button');
const btnLength = $btn.length;
// クイズ問題のセットアップ
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let btnIndex = 0;
  while(btnIndex < btnLength){
    $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  }
}

setupQuiz();
// 解答ボタン実行時にイベント発火
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
// 次の問題に移行する
  quizIndex++;
  
  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です');
  }
};

let handlerIndex = 0;
while (handlerIndex < btnLength) {
  $btn[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}



