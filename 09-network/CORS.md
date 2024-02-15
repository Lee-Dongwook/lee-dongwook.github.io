# CORS (Cross-Origin Resource Sharing)

교차 출처 리소스 공유

CORS를 설정한다 = `출처가 다른 서버간의 리소스 공유`를 허용한다.

***

### 출처 (origin)

`https://localhost:8080/`

출처를 구성하는 세 요소는 프로토콜(`https:`), 도메인(호스트 이름,`localhost`), 포트(`8080`)로 나뉜다.

***

### CORS 에러

CORS 에러는 실제론 CORS가 가능하도록 특정한 설정을 하라고 지시하는 내용이다

해결 방법

1. 서버에서 `Access-Control-Allow-Origin` 응답 헤더 세팅하기

2. 프록시 서버 사용하기
