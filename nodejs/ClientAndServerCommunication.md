# 클라이언트와 서버통신
---

__클라이언트란__, 통신을 요구하는 사용자나 컴퓨터입니다. 

__서버란__, 프로그램이 실행되고 있는 하드웨어입니다.
사용자의 요청에 의하여 수행되고, 네트워크를 관리, 제어, 감시하며 파일이나 프로그램, 혹은 하드웨어 자원을 공유할 수 있도록 서비스합니다.

__클라이언트 서버통신이란__, 서버에 있는 풍부한 자원들과 서비스를 통합된 방식으로 제공받기 위한 통신입니다.
클라이언트가 서버에 응답하고 응답하는 형태를 가지는 네트워크 모델, 혹은 방식을 가르켜 클라이언트 서버 모델이라고 말합니다.

#### 통신 프로토콜
통신 서비스 또는 기능 수행을 위해 관련 통신 당사자간 교환하는 정보의 종류와 표현 방식, 교환 절차, 그리고 교환 과정에서 실행해야 할 행위에 관한 규약입니다.
(어렵;)

대표적인 통신 프로토콜로는 IBM의 폐쇄형 망 구조인 SNA와 개방형 망구조인 TCP/IP가 있습니다.
TCP/IP는 응용 계층에 적용 확장된 프로토콜로는 전자 우편 서비스를 위한 SMTP, 파일 전송 서비스를 위한 FTP, 망 관리 서비스를 위한 SNMP, 그리고 우리가 자주 다루게 될 웹 서비스를 위한 HTTP 등이 있습니다.

### 클라이언트/서버 통신 방식

1. Polling 방식
**클라이언트가 서버에 주기적으로 요청 후 응답을 받는 방식**입니다. 
가장 기본적인 기법으로 구현이 간단하지만 쓸모없는 요청과 응답때문에 많은 트래픽이 낭비되며, 다음 폴링이 이루어지기 전까지 어떤 이벤트가 왔는지 모르기 때문에 실시간성이 보장되지 않습니다.
실시간 메세지 전달이 크게 중요하지 않은 서비스에 적합한 방식입니다.
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_ZVCZS_1533200934311/0f66b63f93bd90547578c966fad29fc6ce45ce606da98fa253e2f476578b79a7.gif" />
2. Long Poll 방식
Polling의 **반복적인 요청으로 응답을 받는 형태**에서 반복적인 요청을 없애고 **유효한 이벤트가 발생하면 응답을 해주는 방식**입니다.
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_ZVCZS_1533200934311/e82aafdef81648cd649201f89c5c0473c99b0afe34bf898e757b8f2209cd9a86.gif" />
3. WebSocket 방식
클라이언트와 서버가 연결이 된 후부터 **HTTP 요청/응답과는 상관없이 서버와 양방향 통신이 가능합니다.**
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_ZVCZS_1533200934311/ba599efc70385d775a613cc9c8f1dbec8be63fee0219e8f50c5538cd45e73906.gif" />