# HTraffic
이전에 작업했던 [교통량 프로젝트](https://github.com/proceane/traffic_project)를 개편하여 heroku로 배포  
site : [HTraffic](https://highway-traffic.herokuapp.com/)


## branch
main : 메인 브랜치, 모든 작업 완료 후 heroku에 연결 
heroku-deploy : 작업 브랜치, 개발시 heroku 빌드 테스트 브랜치 

heroku-deploy에서 작업 후 오류가 발생하지 않으면 빌드 테스트 후 main브랜치로 merge

## 이전 프로젝트와 차이
||기존 로직|변경 로직|
|------|---|---|
|페이지 구성|메인페이지에 검색, 통계데이터 모두 표시|메인페이지 : 통계데이터, 검색페이지 : 검색데이터로 분리|
|검색 로직(front)|도로 노선 선택후 구간을 콤보박스로 선택|검색창에 지역명이나 IC, JC, 톨게이트명을 입력하면 검색 자동완성|
|데이터 조회|데이터 조회 관련 메소드마다 api url request, BeautifulSoup로 xml데이터 수집|url 1회 요청하여 json데이터 수집후 필요한 로직에 사용|

## 작업 기간
2021.07.12 ~ 2021.07.17(5일)

## [library](https://github.com/proceane/traffic_heroku/blob/main/requirements.txt)
django  
gunicorn  
django-heroku  
requests  

## 주의사항
실시간 소통 데이터는 1, 3, 5, 7, 9분마다 데이터가 갱신되어 해당 시간에 데이터 조회시 속도가 저하될수 있음

## Reference
template : https://github.com/tailwindtoolbox/Admin-Template  
autoComplete : https://www.w3schools.com/howto/howto_js_autocomplete.asp  
traffic data : [한국도로공사 실시간 소통데이터](http://data.ex.co.kr/openapi/basicinfo/openApiInfoM?apiId=0405&serviceType=OPENAPI&keyWord=&searchDayFrom=2014.12.01&searchDayTo=2021.07.17&CATEGORY=&GROUP_TR=)
