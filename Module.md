# Module
---

모듈이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능하 코드 조각을 말한다. 모듈은 세부 사항은 캡슐화하고 공개가 필요한 API만을 외부에 노출한다.

일반적으로 **모듈은 파일 단위로 분리**되어 있으며 애플리케이션은 필요에 따라 **명시적으로 모듈을 로드하여 재사용**한다. 즉, 모듈은 애플리케이션에 분리되어 개별적으로 존재하다가 애플리케이션의 로드에 의해 비로소 애플리케이션의 일원이 된다.

자바스크립트는 script태그를 이용하여 다른 파일들을 불러올 수는 있지만 모든 script파일들은 결국은 하나의 script파일에 존재하므로 같은 스코프를 공유한다.(전역 객체)
또한, 같은 스코프를 공유하기 때문에 변수가 중복되는 결과를 볼 수 있다.
이러한 이유때문에 모듈화를 구현할 수 없다.

이런 상황에서 제안된 것이 바로 CommonJS와 AMD(Asynchronous Module Definitionn)이다.

``` javascript
// foo.js
var x = "foo";

// bar.js
var x = "bar";
```
``` html
<!DOCTYPE html>
<html>
    <head>
        <script src="./foo.js"></script>
        <script src="./bar.js"></script>
    </head>
</html>
```
위와 같은 경우 foo의 x와 bar의 x변수가 같은 스코프안에 쓰여지기 때문에 값이 덮어지는 결과가 있다.

서버 사이드 자바스크립트 런타임 환경인 Node.js는 모듈 시스템의 사실상 표준인 CommonJS를 채택하였다. 따라서 Node.js환경에서는 모듈 별로 독립적인 스코프, 즉 모듈 스코프를 갖는다.

ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가하였다.

### 브라우저의 ES6 모듈 지원 현황
1. script 태그에 `type="module"` 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. ES6 모듈의 파일 확장자는 모듈임을 명확히 하기 위해 mjs를 사용하도록 권장한다.
``` javascript
<script type="module" src="lib.mjs"></script>
```
단, 아래와 같은 이유로 아직까지는 브라우저가 지원하는 ES6 모듈 기능보다는 Webpack 등의 모듈 번들러를 사용하는 것이 일반적이다.

- IE를 포함한 구형 브라우저는 ES6 모듈을 지원하지 않는다.
- 브라우저의 ES6 몯ㄹ 기능을 사용하더라도 트랜스파일링이나 번들링이 필요하다.
- 아직 지원하지 않는 기능(Bare import 등)이 있다.
- 점차 해결되고는 있지만 아직 몇가지 이슈가 있다.

### 모듈 스코프
- ES6 모듈 기능을 분리하지 않으면 분리된 자바스크립트 파일에 독자적인 스코프를 갖지 않고 하나의 전역을 공유한다.
- 기본 script 태그를 이용하여 파일을 불러올 시 하나의 전역을 공유한다. 따라서 의도치 않은 변수 중복이 일어날 수 있다.
- ES6 모듈은 파일 자체의 스코프를 제공한다. 즉, ES6 모듈은 독자적인 **모듈 스코프**를 가진다. 모듈 내의 변수는 더 이상 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
- 모듈 내부에서 선언한 변수는 외부에서 참조할 수 없다.

### export 키워드
모듈은 독자적인 모듈 스코프를 갖기 때문에 모듈 안에 선언한 모든 식별자는 기본적으로 해당 모듈 내부에서만 참조할 수 있다. 만약 모듈안에 선언된 변수들을 다른 모듈들이 참조할 수 있게 하고 싶다면 export 키워드를 사용한다. 선언된 벼수, 함수, 클래스 모두 export할 수 있다.

모듈을 공개하려면 선언문 앞에 export 키워드를 사용한다. 여러 개를 export할 수 있는데 이때 각각의 export는 이름으로 구별할 수 있다.

``` javascript
export const pi = Math.PI;
export function square(x) {
    return x * x;
}
export class Person {
    constructor(name) {
        this.name = name;
    }
}
// 만약 export를 하나씩 사용하는 것이 불편하다면
// 하나의 객체로 묶어서 export할 수 있다.

const pi = Math.PI;
function square(x) {
    return x * x;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
export { pi, square, Person };
```

### import 키워드
모듈에서 공개(export)한 대상을 로드하려면 import 키워드를 사용한다.
``` javascript
import { pi, square, Person } from './lib.mjs';

console.log(pi)                 // 3.1415926535
console.log(square(2))          // 4
console.log(new Person("lee"))  // Person { name: 'lee' }
```
모듈이 export한 식별자를 각각 지정하지 않고 하나의 이름으로 한꺼번에 import할 수도 있다. 이때 import 되는 식별자는 as 뒤에 작성한 이름의 객체에 프로퍼티로 할당된다.
``` javascript
import * as lib from './lib.mjs';
console.log(lib.pi)                 // 3.1415926535
console.log(lib.square(2))          // 4
console.log(new lib.Person("lee"))  // Person { name: 'lee' }
```
이름을 변경하여 import할 수도 있다.
``` javascript
import { pi as PI, square as sq, Person as P } from './lib.mjs';

console.log(PI);    // 3.141592653589793
console.log(sq(2)); // 4
console.log(new P('Kim')); // Person { name: 'Kim' }
```
모듈을 하나만을 export할 때는 default 키워드를 사용한다.
``` javascript
export default function (x) {
    return x * x;
}
```
다만, default를 사용하는 경우, var, let, const는 사용할 수 없다.

default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다.