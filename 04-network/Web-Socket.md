# Web Socket (웹 소켓)

서버와 사용자 간 연결을 유지한 상태로 추가 요청 없이 양방향으로 데이터를 교환할 수 있는 프로토콜

실시간으로 데이터 교환이 지속해서 일어나야 하는 서비스에 많이 사용

***

### 사용 예시

#### 1. WebSocket 생성자를 이용하여 웹 소켓 연결

`const socket = new WebSocket("wss://test.com");`

#### 2. 생성된 웹 소켓 객체에는 readyState가 존재

| 상수 | 값 | 설명 |
|--------|--------|--------|
| CONNECTING   | 0   | 연결이 수립되고 있는 상태    |
| OPEN   | 1   | 연결이 수립된 상태    |
| CLOSE | 2 | 연결이 종료되고 있는 상태 |
| CLOSED | 3 | 연결이 종료된 상태 |

#### 3. 웹 소켓에서 사용되는 주요 이벤트

```js
const socket = new WebSocket("wss://test.com");

// 1. 연결 (Open)
socket.addEventListener('open', function(event) {
    console.log('서버와 연결되었습니다.');
})

// 2. 메시지 수신 (Message)
socket.addEventListener('message', function(event) {
    console.log('서버로부터 메시지를 수신합니다.', event.data);
})

// 3. 연결이 닫혔을 때 (Close)
socket.addEventListener('close', function(event) {
    console.log('서버와의 연결이 닫혔습니다.');
})

// 4. 에러 발생 시 (Error) 
socket.addEventListener('error', function(event) {
    console.error('에러가 발생하였습니다.', event);
})

```
