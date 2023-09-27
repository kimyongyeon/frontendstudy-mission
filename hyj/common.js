/**
 * 입력값에 따른 버튼 hover event
 */
jQuery.pressHoverEvent = function (value) {
    //value를 id로 만들기 위한 변수
    let valueId = null;

    //value값이 기호인 경우, 아스키코드 번호로 변환
    if(isNaN(value)) {
        valueId = "#num_" + value.charCodeAt();
    }else {
        //그외 id로 만들기
        valueId = "#num_" + value;
    }

    //해당 id hover event
    $(valueId).addClass("hoverEffect");

    //button event
    add((value.charCodeAt() == 69) ? '=' : (value.charCodeAt() == 66) ? 'del' : value);
    
    //hover event 재거
    setTimeout(function () {
        $(valueId).removeClass("hoverEffect")
    }, 200);

}