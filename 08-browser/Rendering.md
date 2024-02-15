# Browser Rendering Process

1. 사용자가 브라우저로 특정 웹 사이트에 접속한다.

2. 브라우저는 서버로부터 필요한 리소스들을 다운받는다. (Resource Download)

3. 렌더링 엔진이 전달받은 HTML 문서를 파싱하여 `DOM`(Document Object Model) 트리를 형성한다.

4. 렌더링 엔진이 전달받은 CSS 파일과 스타일 요소를 파싱하여 `CSSOM` 트리를 형성한다.

5. `DOM` 트리와 `CSSOM` 트리가 결합되어 렌더링 트리가 생성된다.

6. 렌더링 트리에서 각 노드의 위치와 크기를 계산한다. (Layout)

7. 계산된 값을 이용해 각 노드를 화면 상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)

8. 레이어를 합성하여 실제 화면에 나타낸다. (Composite)
