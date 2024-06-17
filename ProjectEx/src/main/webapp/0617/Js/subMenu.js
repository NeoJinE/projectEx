/**
 * submenu.js
 * 전체보기 메뉴 항목을 클릭했을시, submenu가 보이게끔 설정.
 */

	 $(function(){	//$(document).ready(function(){}); 와 동일.
		//1.전체보기 클릭했을 때 모든 메뉴 항목 보이게
		$('#AllMenushow').on('click',function(){
			//1-1.[전체보기]클릭했을때, sub 메뉴 항목 보이게하고, 메뉴 text를 메뉴닫기
			//1-1-1.현재 메뉴의 텍스트 확인
			if($(this).text()=='전체보기 ▼'){	//sub메뉴 닫힌상태
				$('#subMenuBox').css('visibility','visible');//hidden => visible 메뉴가 보이게
				$(this).text('메뉴닫기 ▲').css('color','blue');
			}else{//sub메뉴가 열린상태
				$('#subMenuBox').css('visibility','hidden');
				$(this).text('전체보기▼').css('color','black');//sub메뉴 안보이는상태 => 메인메뉴 메뉴닫기 => 전체보기.
			}
			//1-2.[메뉴닫기]클릭했을때, 	sub 메뉴 항목 안보이게하고, 메뉴 text를 전체보기
		});
		

	 });//$(function(){})의 끝