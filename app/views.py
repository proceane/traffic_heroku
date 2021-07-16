from django.shortcuts import render
from . import traffic

# Create your views here.

#메인 페이지
def main(request):
	orderData = traffic.getOrderData()
	return render(request, 'app/main.html', orderData)

#검색 페이지
def search(request):
	searchData = {}
	conzoneId = request.GET.get('conzoneId')
	if conzoneId :
		searchData = traffic.getSearchData(conzoneId)
	return render(request, 'app/search.html', searchData)
