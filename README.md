# Doit_WebClone  

### 1 Chap  
**🔹1. HTML 지식**  
각 브라우저에는 엔진이 있으며, 엔진들은 브라우저 엔진과 렌더링 엔진으로 구분된다.  
렌더링 엔진이 HTML을 해석하고 CSS에 정의된 스타일로 화면에 배치한다.  
```
랜더링 엔진 동작 과정
1. HTML 작성 순서대로 트리 생성 ➡ 2. CSS 처리 ➡ 3. 랜더 트리 생성 ➡ 4. 랜더 트리를 적용된 스타일대로 배치
```
브라우저 엔진 종류로는 **Webkit(구글, 사파리), Gecko(파이어폭스), Blink(오페라)** 가 있다.  
웹 크롤러(Web crawler)는 HTML 태그를 기반으로 웹 페이지의 콘텐츠 내용을 확인한다.  
따라서, **검색 엔진 최적화(Search Engine Optimiztion, SEO)** 가 중요하다.  
검색 엔진 최적화를 위해서는 콘텐츠의 구조와 의미까지 구분하여 HTML을 작성해야 한다.  
HTML을 단순히 화면에 콘텐츠를 표시하여 보이게 하는 것이 아니라,  
**❗웹 크롤러가 HTML의 구조와 내용을 명확하게 파악할 수 있도록 작성할 것❗**  
  
**🔹2. meta 태그**  
**웹 크롤러가 HTML 문서에 방문할 때, 웹 사이트는 meta 태그에 지정한 요약 내용을 알려준다.**  
2019년 7월 기준으로 구글 웹 크롤러는 <\meta> 태그의 keyword 속성을 수집하지 않는다고 했다.  
이렇게 웹 크롤러의 검색 기준은 변경될 수 있으므로,  
공식 가이드에 맞춰 작성하는 것이 검색 엔진 최적화에 가장 좋은 방법이다.  
meta 태그는 기본적으로 빈 요소이기 때문에 시작 태그만 존재한다. *(닫는 태그가 없다.)*  
- name="format-detection"
    - 모바일로 웹 페이지를 사용할 때 기본적으로 제공하는 것에 대한 설정
    - ex) 모바일에서 숫자 선택하면 전화 연결되는 경우
- property="og:…"
    - 오픈 그래프(Open Graph, OG) 설정
    - 오픈 그래프는 웹 페이지가 소셜 미디어로 공유될 때 표시되는 카드 형식
    - 카카오톡, 페이스북 등 SNS에서 사용함
```
<meta http-equiv="X-UA-Compatible" content="IE=edge">  // 호환성 보기 기능 활성화
<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 화면에 보이는 영역(viewport)의 너비를 현재 기기의 width로 정하고, 초기 화면 배율을 1로 지정

<meta name="title" property="og:title" content="이지스퍼블리싱">
<meta name="images" property="og:image" content="./images/link_thumb.jpg">
<meta name="description" property="og:description" content="Do it! 웹 사이트 하나 만들고 웹 퍼블리셔 되기">
// 오픈 그래프 내용
```
