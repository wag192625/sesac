const jmh = {
  name: 'jmh',
  age: 123,
  gender: 'M',
  work() {
    console.log('걷는중');
  },
  introduce() {
    console.log(this.name, this.age, this.gender);
  },
};
jmh.work();
jmh.introduce();

// function이 존재할 때 .앞에 있는게 this

// 이해 안해도 됨.
function greet() {
  console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
} // 글로벌에 선언

const boy = {
  name: '철수',
  greet_boy: greet,
}; // 글로벌에 선언된걸 가져옴

const girl = {
  name: '영희',
  greet_girl: greet,
};
boy.greet_boy();
girl.greet_girl();
// 함수가 어디에 선언 되어 있는지는 상관 없고,
// 실행되는거 앞에 있는 변수를 따라감.
// boy.greet_boy() -> boy 객체 안의 greet를 실행시키고 greet함수 내의 로그를 읽어옴.
// `boy`.greet_boy -> {`greet` {console}}

console.log('--------------------------');

const person = {
  name: '철수',
  greet: () => {
    console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
    // 화살표 함수의 this는 상위 컨텍스트의 this를 참조하므로 undefined이 출력된다.
    // 이 코드에서는 전역 컨텍스트 this를 참조한다.
  },
};

person.greet(); // 안녕하세요. 저의 이름은 undefined 입니다.
