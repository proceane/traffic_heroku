# traffic_heroku
이전에 작업했던 [교통량 프로젝트](https://github.com/proceane/traffic_project)를 개편하여 heroku로 배포

## branch
main : 메인 브랜치, 모든 작업 완료 후 heroku에 연결 예정  
heroku-deploy : 작업 브랜치, 개발시 heroku에 연결할 브랜치  

heroku-deploy에서 작업 후 오류가 발생하지 않으면 빌드 테스트 후 main브랜치로 merge

## 이전 프로젝트와 차이
1. 페이지 구성  
  메인페이지에서 검색 + 전체통계 표시 -> 메인페이지에서 전체통계 / 검색페이지에서 검색하도록 페이지 분리

2. 로직
  검색 
  기존로직 : 도로 노선 선택 -> 구간 콤보박스로 선택하여 검색
  변경된 로직 : 검색창에 지역이나 IC, JC명을 입력하면 검색 자동완성
  
  데이터 조회
  기존로직 : 메소드마다 url호출
  변경로직 : url 1회 호출하여 조회된 데이터로 로직 수행
  
## Reference
template : https://github.com/tailwindtoolbox/Admin-Template  
autoComplete : https://www.w3schools.com/howto/howto_js_autocomplete.asp
