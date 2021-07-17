from django.shortcuts import render
from . import traffic

# Create your views here.

#메인 페이지
def main(request):
	orderData = traffic.getOrderData()
	return render(request, 'app/main.html', orderData)

#검색 페이지
def search(request):
	conzoneId = request.GET.get('conzoneId')
	searchData = {'conzoneId' : conzoneId}
	if conzoneId :
		searchData['searchData'] = traffic.getSearchData(conzoneId)
		if len(searchData['searchData']) > 0 :
			searchData['mapSearch'] = searchData['searchData']['conzoneName'].split('-')[0]
	return render(request, 'app/search.html', searchData)
