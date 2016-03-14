function logout() {
	var form = document.createElement("form"); // form 엘리멘트 생성
	form.setAttribute("method", "post");
	form.setAttribute("action", jQuery("meta[name='path']").attr("content")+"/admin/logout");
	document.body.appendChild(form); // 현재 페이지에 form 엘리멘트 추가

	var input = document.createElement("input"); // input 엘리멘트 생성
	input.setAttribute("type", "hidden");
	input.setAttribute("name", "_csrf");
	input.setAttribute("value", jQuery("meta[name='code']").attr("th:content"));
	form.appendChild(input); // form 엘리멘트에 input 엘리멘트 추가

	form.submit(); // 전송
}