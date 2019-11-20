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



