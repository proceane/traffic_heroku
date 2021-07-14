from django.shortcuts import render

# Create your views here.

#메인 페이지
def main(request):
	return render(request, 'app/main.html')

#검색 페이지
def search(request):
	return render(request, 'app/search.html')
