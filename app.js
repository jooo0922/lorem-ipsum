'use strict';

// lorem text
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

// form태그에서 입력받은 값을 submit버튼으로 제출해서 서버가 아닌 js로 전달할 때는 이렇게 한다!
// form태그 전체에 submit 이벤트를 걸어두면 되는거임!
// 이 형식을 잘 보고 써먹을 것. 지난 번 기말고사 웹사이트 제작할 때 이걸 몰라서 어렵게 했지ㅠ
form.addEventListener('submit', function(e){
  // console.log('hello'); 이렇게 하면 hello 가 콘솔창에서 나타났다가 사라짐
  // 왜 그러냐면, form 태그의 default behavior는 'submit to server' 즉 서버로 전송하는 것이기 때문에 해당 콜백을 실행 안하는거.
  // 이거를 prevent해야 해당 이벤트를 js 내에서 계속 사용할 수 있음.
  // default behavior를 삭제하고, 해당 콜백함수를 수행하라는 거임.
  e.preventDefault();
  // console.log('hello');

  // const value = amount.value;
  // console.log(value);
  // console.log(typeof value); 
  // 여기서 중요한 점! input type="number"이라서 숫자만 입력받을 수 있더라도
  // 해당 input의 value를 할당해서 콘솔창에 찍어보면 string으로 나옴. 인풋은 숫자만 받아도 value는 문자열이라는 뜻.
  
  //그래서 parseInt()를 써야 함
  // parseInt() 함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.
  const value = parseInt(amount.value);
  // console.log(isNaN(value)); isNaN() 함수는 어떤 값이 NaN인지 판별합니다.

  // 딱 text의 index 범위에 해당하는 0~8까지의 난수를 return받으려는 거.
  // 이걸 왜 만들었냐고?
  // 빈 값, 음수, 0, 9보다 큰 값 등 부적절한 값을 입력받았을 때 1개의 paragraph만 display하려고 하는데
  // 이 1개의 paragraph는 무작위로 아무 text나 innerHTNL 해주기 위해서!
  const random = Math.floor(Math.random() * text.length)

  // empty (비어있는 값 제출 안됨. placeholder값인 5도 그대로 둬서 제출하면 amount.value = null값임. 아무것도 안보임.
  // 그래서 amount.value가 할당된 value = NaN이 나옴.
  // -1 (음수 값 제출 안됨.)
  // 0  (paragraph의 개수가 0이면 안됨. slice했을 때 0번이 마지막 인덱스로 제외되면 안되니까)
  // > 9  (text array의 index는 0~8까지니까 그거보다 크면 안됨.)
  // 이 세가지 경우 중 하나라도 입력해서 제출받으면, 그냥 첫번째 paragraph만 보여주고 싶음.
  if (isNaN(value) || value <= 0 || value > 9) { 
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  }
  else {
    // Array.prototype.slice()
    // slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환.
    let tempText = text.slice(0, value);
    // map()으로 각 요소들이 HTMLString으로 변환된 새로운 배열을 다시 반환받음.
    // join()으로 각 HTMLString들을 하나의 HTMLString 문자열로 합쳐버림.
    tempText = tempText.map(function(item){
      return `<p class="result">${item}</p>`;
    }).join('');
    result.innerHTML = tempText;
  }
});