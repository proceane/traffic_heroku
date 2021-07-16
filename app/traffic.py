import requests

# 데이터 읽기
def read():
	key = "3383868115"
	req = requests.get('http://data.ex.co.kr/openapi/odtraffic/trafficAmountByRealtime?key='+key+'&type=json')
	return req.json().get('list') 

# 데이터 처리
def process():
	data = read()
	filter_data = list(filter(lambda d: int(d['trafficAmout']) > 0 and int(d['speed']) > 0, data))
	return filter_data

# 데이터 정렬(메인)
def order():
	# 전처리된 데이터
	data = process()

	traffic = sorted(data, key=lambda data: int(data['trafficAmout']), reverse=True)
	speed = sorted(data, key=lambda data: int(data['speed']), reverse=True)
	# 교통량 오름/내림차순 top5
	traffic_asc = traffic[:5]
	traffic_desc = traffic[-5:][::-1]

	# 속도 오름/내림차순 top5
	speed_asc = speed[:5]
	speed_desc = speed[-5:][::-1]
	return {'traffic_asc' : traffic_asc, 'traffic_desc' : traffic_desc, 
			'speed_asc' : speed_asc, 'speed_desc' : speed_desc}

# 데이터 찾기(검색)
def search(conzoneId):
	data = read()
	search_data = list(filter(lambda d: d['conzoneId'] == conzoneId, data))
	if len(search_data) > 0:
		return search_data[0]
	return {}

# 정렬 데이터 가져오기
def getOrderData():
	return order()

# 검색 데이터 가져오기
def getSearchData(conzoneId):
	return search(conzoneId)

