# mongoDB란?
---
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_OjfaO_1533200983114/644e75d5a7cffb7cc0a2590ac0487cdfa5d2bbd905965070644731fe12de5778.png" />

데이터를 저장하는 데이터베이스입니다.
데이터베이스의 한 종류인 mongoDB를 node.js에서 사용하게 해주는 **mongoose**라는 확장 모듈을 배울 것입니다.

**mongoose**란, mongoDB라는 NoSQL 데이터베이스를 지원하는 노드의 확장 모듈입니다.
mongoose는 mongoDB의 ODM입니다.
ODM은 Object Document Mapping의 약자로, 문서를 DB에서 조회할 때 자바스크립트 객체로 바꿔주는 역할을 합니다.

### NoSQL
기존의 데이터베이스들은 대부분 관계형 모델에 기반을 두고 있으므로 대부분 SQL이라는 질의문에 의해 데이터베이스를 수정, 갱신, 저장, 검색하도록 구성되어 있습니다. 그러나 최근 들어 이러한 관계형 데이터베이스 모델과는 다른 데이터베이스 관리 시스템에 대한 관심이 증가하고 있는데, 이러한 시스템을 일컬어 **NOSQL(Not Only SQL)**이라고 부르며 mongoDB는 이러한 데이터베이스 시스템 중 하나입니다.

NOSQL의 가장 큰 특징은 확장성과 기용성, 높은 성능, 그리고 다양한 데이터 형태를 수용할 수 있다는 점입니다.

NOSQL은 무한에 가까운 확장성을 제공합니다. 
이를 위해 NOSQL 데이터베이스는 단순한 키와 값의 쌍으로 이루어져 있습니다.

스키마 제약이 없다는 점도 하나의 특징이라고 볼 수 있습니다.
특히 mongoDB는 문서지향 데이터베이스로, JSON을 사용할 때 아주 유용합니다. 따라서 자바스크립트를 기반으로 하는 Node.js와 호환이 매우 좋습니다. 이러한 이유로 node.js에서 가장 많이 사용하는 데이터베이스입니다.

##### mongoDB 특징
- Join이 없으므로 Join이 필요 없도록 데이터 구조화가 필요
- 다양한 종류이 쿼리문을 지원(필터링, 수집, 정렬, 정규표현식 등)
- 관리의 편의성
- 스미카 없는(Schemaless) 데이터베이스를 이용한 신속 개발. 필드를 추가하거나 제거하는 것이 매우 쉬워짐
- 쉬운 수평 확장성
- 인덱싱 제공

##### SQL과 비교
| MySQL 용어  | mongoDB 용어/개념  |
|---|---|
|database|database|
|table|collection|
|index|index|
|row|JSON document|
|column|JSON field|
|join|embedding and linking|
|primary key|_id field|
|group by|aggregation|

mongoDB의 질의문은 모두 JSON(BSON) 객체로 표현됩니다.
데이터베이스에 접근하고 조정하는 구문은 자연어에 가까운 SQL에 비해 자바스크립트 문법에 가까운 모습을 보여줍니다.

| MySQL 용어  | mongoDB 용어/개념  |
|---|---|
|CREATE TABLE USERS(a Number, b Number)|db.createCollection("mycoll")|
|INSERT INTO USERS VALUES(3, 5)|db.users.insert({a:3, b:5})|
|SELECT * FROM users|db.users.find()|
|SELECT a,b FROM users WHERE age=20|db.users.find({age:20}, {a:1, b:1})|
|SELECT *FROM users WHERE age=20 ORDER BY name|db.users.find({age:20}).sort({name:1})|
