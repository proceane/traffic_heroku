# traffic_heroku
이전에 작업했던 [교통량 프로젝트](https://github.com/proceane/traffic_project)를 개편하여 heroku로 배포

## branch
main : 메인 브랜치, 모든 작업 완료 후 heroku에 연결 예정  
heroku-deploy : 작업 브랜치, 개발시 heroku에 연결할 브랜치  

heroku-deploy에서 작업 후 오류가 발생하지 않으면 빌드 테스트 후 main브랜치로 merge

## 이전 프로젝트와 차이
1. 페이지 구성  
  메인페이지에서 검색 + 전체통계 표시 -> 메인페이지에서 전체통계 / 검색페이지에서 검색하도록 페이지 분리
  
## Reference
template : https://github.com/tailwindtoolbox/Admin-Template  
autoComplete : https://www.w3schools.com/howto/howto_js_autocomplete.asp
