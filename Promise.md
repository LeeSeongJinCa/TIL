# Promise

간단한 소개 : 
ECMAScript2015를 시작하면서, 자바스크립트의 흐름과 **비동기식 연산**을 제어할 수 있어야 합니다. 이를 위해 Promise 객체에 대한 지원을 얻게 되었습니다.

**Promise**는 다음의 상태중 하나입니다:
- 대기(pending) : 초기상태, fulfilled 되거나 rejected 되지 않음.
- 이행(fulfilled) : 연산 수행 성공.
- 거부(rejected) : 연산 수행 실패.
- settled : Promise 가 fufilled 이거나 rejected 이지만 pending 은 아님.

### 구문

#### `new Promise(executor);`
executor에는 비동기 작업을 실행할 구문이 들어갑니다.
### 매개변수
`resolve` 및 `reject` 인수를 전달할 실행 함수.
`resolve` 함수는 프로미스를 이행합니다.
`reject` 함수는 프로미스를 거부합니다.
실행함수에서 오류를 던지면 프로미스는 거부됩니다.

*간단한 예제*
``` javascript
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
```

##### `Promise.reject()`
주어진 이유로 거부하는 Promise 객체를 반환합니다.

##### `Promise.resolve()`
주어진 값으로 이행하는 Promise 객체를 반환합니다. then 메서드가 있는 경우, 반환된 프로미스는 then 메서드를 따라가고 마지막 상태를 취합니다. -> then코드 실행한다는 뜻.

##### `Promise.prototype.catch()`
프로미스가 거부된 경우 실행하는 구문.

##### `Promise.prototype.then()`
프로미스가 이행된 경우 실행하는 구문.

##### `Promise.prototype.finally()`
프로미스가 이행되든 거부되든 실행하는 구문.

### `Promise` 생성 방법
Promise는 new 키워드로 생성합니다. 
생성자 매개변수로 "실행 함수"를 받습니다.
첫 번째 함수(`resolve`)는 비동기 작업이 성공적으로 완료되어 실행할 함수입니다.
두 번째 함수(`reject`)는 작업이 실패하여 오류를 반환하면서 호출됩니다.





