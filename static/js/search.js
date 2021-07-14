function autocomplete(inp, arr, cInp, cArr) {
  
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;

  /*input에 텍스트 입력시 실행:*/
  inp.addEventListener("input", function(e) {
      /*value = 입력값*/
      var a, b, i, val = this.value;

      /*열린 리스트가 있다면 닫기*/
      closeAllLists();

      // 입력값 없으면 return false
      if (!val) { return false;}

      // 입력값 있을때
      currentFocus = -1;

      /* 검색결과 리스트 영역이 될 div 생성 */
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      /*input 아래에 리스트 append*/
      this.parentNode.appendChild(a);

      /*배열 순회(arr = 매개변수로 들어온 배열)*/
      for (i = 0; i < arr.length; i++) {

        /*입력값으로 시작하는 값 찾기*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          
          /*입력값과 시작값이 같으면 div생성*/
          b = document.createElement("DIV");

          /*매칭되는 단어 bold처리*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          
          /*item의 값을 input필드에 등록*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          //conzone 값 등록
          b.innerHTML += "<input type='hidden' id='cId_" + i + "' value='" + cArr[i] + "'>";

          /* 검색어 클릭시 이벤트 설정 */
          b.addEventListener("click", function(e) {
              // 검색창에 완성된 검색어 등록
              inp.value = this.getElementsByTagName("input")[0].value;
              
              cInp.value = this.getElementsByTagName("input")[1].value;
              // 리스트 닫기
              closeAllLists();
          });

          // 이벤트 포함된 div를 리스트 div에 append
          a.appendChild(b);
        }
      }
  });

  // 키보드 이벤트
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        // 아래 방향키 클릭시 현재 포커스값 증가
        currentFocus++;

        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up

        // 위 방향키 클릭시 현재 포커스값 감소
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {

        // 엔터 누르면 검색어 클릭이벤트 실행
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
