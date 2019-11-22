# mongoose 모듈이란?
---
mongoDB라는 NOSQL을 지원하는 노드의 확장 모듈입니다.

mongoose가 가장 많이 쓰이는 모듈 중 하나인 것은 오브젝트(object)들을 만들고, 오브젝트와 data를 묶어서 사용하는 ODM(object Data Mapping)의 특성 때문입니다.

##### mongoDB 연결하기
require() 함수를 통해 확장 모듈을 mongoose 객체에 로드하여 만듭니다.
mongoose 객체에는 기본적으로 데이터베이스에 연결하는 connect() 메소드가 제공됩니다. 이 메소드는 **mongodb://**로 시작하는 URI값이나 host, database, port, options를 인자로 받습니다.

``` javascript
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhose/test");
```

위에서처럼 데이터베이스가 연결되면, connection 인스턴스가 생성되며 연결되는 순간 open 이벤트가 발생합니다. 이 때 인스턴스는 mongoose.connection입니다.
test라는 데이터베이스가 없다면 mongoDB는 이를 자동으로 생성합니다.

하지만 connect() 메소드는 하나의 데이터베이스만 연결할 수 있습니다.
이 때에는 mongoose.createConnection() 메소드를 사용해야 합니다.
이 메소드는 connetion()과 같은 인자를 받으면서 반환값으로 connection 인스턴스를 반환합니다.

``` javascript
let mongoose = require("mongoose");
let connection1 = mongoose.createConnection("mongodb://localhost/mydb1");
let connection2 = mongoose.createConnection("mongodb://localhost/mydb2");
```

##### 모델 정의하기
모델은 mongoDB에서 데이터를 저장하는 기본 단위인 도큐먼트의 형태를 의미합니다.
이것은 mongoose에서 제공하는 Schema라는 인터페이스를 통해 생성할 수 있습니다.
``` javascript
let Schema = mongoose.Schema, 
    OjectId = Schema.ObjectId;
let ArticleSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});
```

이렇게 정의한 스키마를 이용해 모델을 정의해야 합니다.
`mongoose.model("ModelName", Schema)`
이 코드는 앞서 생성한 ArticleSchema를 이용하여 Article이라는 모델을 생성하는 코드입니다.

##### 모델 사용하기

모델을 사용하려면 생성한 모델의 인스턴스를 또 한 번 생성해야 합니다. 생성한 인스턴스를 이용해 우리가 원하는 실제 데이터베이스 작업을 수행할 수 있습니다.
``` javascript
let instance = new ArticleModel();
instance.title = "hello";
instance.save((err) => {
        // save 실행 후 콜백 함수의 내용
});
instance.find({}, (err, docs) => {
        // find 실행 후 콜백 함수의 내용
});
```

##### 검색하기

우리가 원하는 데이터는 find(), findOne(), findByld() 메소드를 통해 검색할 수 있습니다.
find() 메소드의 인자들은 각각 검색, 질의문, 출력하고자 하는 필드, 옵션, 그리고 콜백 함수입니다.

다음 예제는 some.value = 5 인 document를 검색합니다. 이 떼 콜백 함수로 넘어오는 인자 중 docs는 배열로서 검색된 모든 도큐먼트를 담고 있습니다.

``` javascript
Model.find({'some.value': 5}, (err, docs) => {
        // 콜백 함수 내용
});
```
다음은 특정필드 값을 얻으려고 검색한 모든 도큐먼트에서 그것들이 생성될 때 디폴트로 만들어진 필드 값(ObjectID)을 출력하는 예제입니다.
``` javascript
Model.fine({}, ['first', 'last'], (err, docs) => {
        // 콜백 함수 내용
});
```
Model.fineOne() 메소드는 Model.fine()와 거의 유사하지만, 오직 하나의 도큐먼트만이 두번째 인자로 넘긴 콜백 함수의 의 doc인자로 전달됩니다. 이때 이 doc는 단 하나의 객체입니다. 다음 예제는 age가 5인 도큐먼트를 하나만 검색합니다.
``` javascript
Model.fineOne({age: 5}, (err, doc) => {
        // 콜백 함수 내용
});
```
마지막으로 Model.fineById() 메소드는 Model.fineOne() 메소드와 마찬가지로 단 하나의 도큐먼트만 반환하지만 _id키 값을 이용하여 검색합니다.
``` javascript
Model.fineById(obj.id, (err, doc) => {
        // 콜백 함수 내용
});
```

##### 도큐먼트 추가
mongoose에서 새로운 도큐먼트를 저장하는 방법입니다.
모델을 생성하면서 title과 body 필드의 값을 먼저 채우고 article.date 와 같이 객체의 맴버에 접근하는 방식을 통해 날짜 값도 부여합니다. 이것을 최종적으로 컬렉션에 저장하려면 article.save() 메소드를 호출하면 됩니다.
``` javascript
let article = new ArticleMode({title: "Title", body: "Container"});
article.date = new Date();
article.save((err) => {
    if(err) {
        return handleError(err);
    }
        // save() 성공 후 수행할 내용
});
```
별도의 모델 인스턴스를 생성하지 않고 모델을 이용하여 바로 도큐먼트를 추가하는 방법도 있습니다. 모델 객체에서 create() 메소드 호출을 통해 바로 데이터를 입력하는 예제 코드입니다.

``` javascript
ArticleMode.create({title: "Title", body: "Contents", date: new Date()}, (err)=> {
    if(err) {
        return handleError(err);
    }
        // save() 성공 후 수행할 내용
})
```