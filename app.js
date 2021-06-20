const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパーファミコン',
      'プレーステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, 
  {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, 
  {
    question: 'ファイナルファンタジー４の主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

setupQuiz();

// 定数の文字列をhtmlに反映させる

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];



// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;
  if(quizIndex < quizLength){
// 問題数があればこちらを実行
    setupQuiz();
  }else{
// もんだいすうがもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');

  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// document.getElementsByTagName('button')[0].addEventListener('click', (e)=> {
//   clickHandler(e);
// });
// document.getElementsByTagName('button')[1].addEventListener('click', (e)=> {
//   clickHandler(e);
// });
// document.getElementsByTagName('button')[2].addEventListener('click', (e)=> {
//   clickHandler(e);
// });
// document.getElementsByTagName('button')[3].addEventListener('click', (e)=> {
//   clickHandler(e);
// });