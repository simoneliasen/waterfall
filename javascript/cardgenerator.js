(function () {
  var quotes = [
    {
      text: "QUEEN OF SPADES",
      img:  "images/1.png",
      subtext: "QUESTION: The person who drew the card, asks a random question, afterwards the next person continues asking a random question, this continues until somebody answers the question, or doesn't respond with a question"
    },
    {
      text: "KING OF SPADES KONGE",
      img:  "images/2.png",
      subtext: "RULE: Make a rule, which everybody must follow. If somebody draws a king again, this rule gets cancelled and a new one will be made."
    },
    {
      text: "KNIGHT OF SPADES",
      img:  "images/3.png",
      subtext: "NEVER HAVE I EVER: put out three fingers, and start a game of never have i ever, the loser is the person with no lives/fingers left."
    },
    {
      text: "ACE OF SPADES",
      img:  "images/4.png",
      subtext: "WATERFALL: all players starts drinking, you can not stop drinking before the person to the right of you stops, the person who drew this card is the first person able to stop"
    },
    {
      text: "2 OF CLUBS",
      img:  "images/5.png",
      subtext: "THE GENEROUS: The person who drew this card, picks a person who drinks"
    },
    {
      text: "3 OF CLUBS",
      img:  "images/6.png",
      subtext: "DRINK: Him/her who drew this card drinks"
    },
    {
      text: "4 OF CLUBS",
      img:  "images/7.png",
      subtext: "FLOOR: Last player to touch the floor drinks"
    },
    {
      text: "6 OF SPADES",
      img:  "images/8.png",
      subtext: "LADIES FIRST: All the ladies drink"
    },
    {
      text: "7 OF SPADES",
      img:  "images/9.png",
      subtext: "SKY: Last player who points up in the air drinks"
    },
    {
      text: "10 OF SPADES",
      img:  "images/10.png",
      subtext: "CATEGORIES: Pick a category (example: car brands) the last person to be able to mention something from the category drinks"
    },
    {
      text: "8 OF SPADES",
      img:  "images/11.png",
      subtext: "M8: Pick a mate to drink with"
    },
    {
      text: "9 OF SPADES",
      img:  "images/12.png",
      subtext: "RHYME: Make a sentence which the next person must rhyme on, the next person then continues to rhyme on what the previous person said"
    },
    {
      text: "5 OF SPADES",
      img:  "images/13.png",
      subtext: "BOYS NIGHT!: All the boiis drinks"
    },
    {
      text: "KING OF HEARTS",
      img:  "images/14.png",
      subtext: "RULE: Make a rule, which everybody must follow. If somebody draws a king again, this rule gets cancelled and a new one will be made."
    },
    {
      text: "KNIGHT OF HEARTS",
      img:  "images/15.png",
      subtext: "NEVER HAVE I EVER: put out three fingers, and start a game of never have i ever, the loser is the person with no lives/fingers left."
    },
    {
      text: "QUEEN OF HEARTS",
      img:  "images/16.png",
      subtext: "QUESTION: The person who drew the card, asks a random question, afterwards the next person continues asking a random question, this continues until somebody answers the question, or doesn't respond with a question"
    },
    {
      text: "ACE OF HEARTS",
      img:  "images/17.png",
      subtext: "WATERFALL: all players starts drinking, you can not stop drinking before the person to the right of you stops, the person who drew this card is the first person able to stop"
    },
    {
      text: "10 OF HEARTS",
      img:  "images/18.png",
      subtext: "CATEGORIES: Pick a category (example: car brands) the last person to be able to mention something from the category drinks"
    },
    {
      text: "2 OF SPADES",
      img:  "images/19.png",
      subtext: "THE GENEROUS: The person who drew this card, picks a person to take 2 sips of alcohol"
    },
    {
      text: "3 OF SPADES",
      img:  "images/20.png",
      subtext: "DRINK: Him/her who drew this card drinks"
    },
    {
      text: "4 OF SPADES",
      img:  "images/21.png",
      subtext: "FLOOR: Last player to touch the floor drinks"
    },
    {
      text: "7 OF HEARTS",
      img:  "images/22.png",
      subtext: "SKY: Last player who points up in the air drinks"
    },
    {
      text: "8 OF HEARTS",
      img:  "images/23.png",
      subtext: "M8: Pick a mate to drink with"
    },
    {
      text: "9 OF HEARTS",
      img:  "images/24.png",
      subtext: "RHYME: Make a sentence which the next person must rhyme on, the next person then continues to rhyme on what the previous person said"
    },
    {
      text: "2 OF HEARTS",
      img:  "images/25.png",
      subtext: "THE GENEROUS: The person who drew this card, picks a person to take 2 sips of alcohol"
    },
    {
      text: "2 OF DIAMONDS",
      img:  "images/26.png",
      subtext: "THE GENEROUS: The person who drew this card, picks a person to take 2 sips of alcohol"
    },
    {
      text: "10 OF DIAMONDS",
      img:  "images/27.png",
      subtext: "CATEGORIES: Pick a category (example: car brands) the last person to be able to mention something from the category drinks"
    },
    {
      text: "6 OF DIAMONDS",
      img:  "images/28.png",
      subtext: "LADIES FIRST: All the ladies drink"
    },
    {
      text: "7 OF DIAMONDS",
      img:  "images/29.png",
      subtext: "SKY: Last player who points up in the air drinks"
    },
    {
      text: "8 OF DIAMONDS",
      img:  "images/30.png",
      subtext: "M8: Pick a mate to drink with"
    },
    {
      text: "9 OF DIAMONDS",
      img:  "images/31.png",
      subtext: "RHYME: Make a sentence which the next person must rhyme on, the next person then continues to rhyme on what the previous person said"
    },
    {
      text: "KNIGHT OF DIAMONDS",
      img:  "images/32.png",
      subtext: "NEVER HAVE I EVER: put out three fingers, and start a game of never have i ever, the loser is the person with no lives/fingers left."
    },
    {
      text: "ACE OF DIAMONDS",
      img:  "images/33.png",
      subtext: "WATERFALL: all players starts drinking, you can not stop drinking before the person to the right of you stops, the person who drew this card is the first person able to stop"
    },
    {
      text: "10 OF CLUBS",
      img:  "images/34.png",
      subtext: "CATEGORIES: Pick a category (example: car brands) the last person to be able to mention something from the category drinks"
    },
    {
      text: "ACE OF CLUBS",
      img:  "images/35.png",
      subtext: "WATERFALL: all players starts drinking, you can not stop drinking before the person to the right of you stops, the person who drew this card is the first person able to stop"
    },
    {
      text: "6 OF HEARTS",
      img:  "images/36.png",
      subtext: "LADIES FIRST: All the ladies drink"
    },
    {
      text: "QUEEN OF CLUBS",
      img:  "images/37.png",
      subtext: "QUESTION: The person who drew the card, asks a random question, afterwards the next person continues asking a random question, this continues until somebody answers the question, or doesn't respond with a question"
    },
    {
      text: "4 OF DIAMONDS",
      img:  "images/38.png",
      subtext: "FLOOR: Last player to touch the floor drinks"
    },
    {
      text: "3 OF DIAMONDS",
      img:  "images/39.png",
      subtext: "DRINK: Him/her who drew this card drinks"
    },
    {
      text: "9 OF CLUBS",
      img:  "images/40.png",
      subtext: "RHYME: Make a sentence which the next person must rhyme on, the next person then continues to rhyme on what the previous person said"
    },
    {
      text: "5 OF CLUBS",
      img:  "images/41.png",
      subtext: "BOYS NIGHT!: All the boiis drinks"
    },
    {
      text: "6 OF CLUBS",
      img:  "images/42.png",
      subtext: "LADIES FIRST: All the ladies drink"
    },
    {
      text: "7 OF CLUBS",
      img:  "images/43.png",
      subtext: "SKY: Last player who points up in the air drinks"
    },
    {
      text: "8 OF CLUBS",
      img:  "images/44.png",
      subtext: "M8: Pick a mate to drink with"
    },
    {
      text: "KNIGHT OF CLUBS",
      img:  "images/45.png",
      subtext: "NEVER HAVE I EVER: put out three fingers, and start a game of never have i ever, the loser is the person with no lives/fingers left."
    },
    {
      text: "KING OF CLUBS",
      img:  "images/46.png",
      subtext: "RULE: Make a rule, which everybody must follow. If somebody draws a king again, this rule gets cancelled and a new one will be made."
    },
    {
      text: "5 OF DIAMONDS",
      img:  "images/48.png",
      subtext: "BOYS NIGHT!: All the boiis drinks"
    },
    {
      text: "KING OF DIAMONDS",
      img:  "images/49.png",
      subtext: "RULE: Make a rule, which everybody must follow. If somebody draws a king again, this rule gets cancelled and a new one will be made."
    },
    {
      text: "QUEEN OF DIAMONDS",
      img:  "images/50.png",
      subtext: "QUESTION: The person who drew the card, asks a random question, afterwards the next person continues asking a random question, this continues until somebody answers the question, or doesn't respond with a question"
    },
    {
      text: "3 OF HEARTS",
      img:  "images/51.png",
      subtext: "DRINK: Him/her who drew this card drinks"
    },
    {
      text: "4 OF HEARTS",
      img:  "images/52.png",
      subtext: "FLOOR: Last player to touch the floor drinks"
    },
    {
      text: "5 OF HEARTS",
      img:  "images/53.png",
      subtext: "BOYS NIGHT!: All the boiis drinks"
    },
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML =
    '<img id="card" src="' + quote.img + '">'+ '<p id="text">' + quote.text + '</p>' + '<br>' + '<p id="subtext">' + quote.subtext + '</p>';
})();
