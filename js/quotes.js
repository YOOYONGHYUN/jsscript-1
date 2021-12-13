const quotes = [
  {
    quote:
      "가장 큰 영광은 한 번도 실패하지 않음이 아니라 실패할때마다 다시 일어서는 데에 있다.",
    author: "공자",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 것을 발견했다.",
    author: "토마스 제퍼슨",
  },
  {
    quote: "동기부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.",
    author: "크리스 그로서",
  },
  {
    quote: "희망이 있는 곳에는 반드시 시련이 있는 법이다.",
    author: "무라카미 하루키",
  },
  {
    quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
    author: "롤리 다스칼",
  },
  { quote: "여전할 것인가, 역전할 것인가.", author: "작자미상" },
  {
    quote:
      "많은 사람은 TV 앞에 앉아서, 혹은 핸드폰을 만지는 것 이외에는 많은 일에 도전하지 않는다.",
    author: "트리쉬 웨그스테프",
  },
  {
    quote:
      "자신을 믿어라. 자신의 능력을 신뢰하라. 겸손하지만 합리적인 자신감 없이는 성공할 수도 행복할 수도 없다.",
    author: "노먼 빈센트 필",
  },
  {
    quote:
      "조금 더 많이 인내하자. 조금 더 많이 노력하자. 그러면 절망적 실패로 보였던 것이 빛나는 성공으로 변할 수 있다.",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "20년 후 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다.",
    author: "마크 트웨인",
  },
  {
    quote:
      "사람들은 동기부여는 오래가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고 하는 것이다.",
    author: "지그 지글러",
  },
  {
    quote:
      "한번뿐인 인생 이렇게 살 수 없어. 바람처럼 왔다 이슬처럼 갈 수 없어. ",
    author: " 더콰이엇",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
