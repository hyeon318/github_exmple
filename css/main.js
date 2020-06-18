(function (window, document) {
    // 즉시 실행 함수
    // 모듈화
    // 먼솔../? 
    'use strict';
    // javascript 사용한다는 명시

    const $toggles = document.querySelectorAll('.toggle'); // nodelist 임 (!= array)

    // 요소를 담고 있을 경우(document) 변수 앞에 '$' 를 붙인다
    // toggle 클래스를 소요한 요소를 전부 탖는다
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click',function () {
        toggleElements();
        console.log("!232");
    });
    
    window.addEventListener('resize', function () {
        if(window.innerWidth > 1024){
            // off toggle
            offElements();
            console.log("!23");
        }
    });

    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            // toggles를 반복할때마다 실행되는 함수
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }

})(window, document);