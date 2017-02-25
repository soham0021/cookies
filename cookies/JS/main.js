$(document).ready(function() {
	
	var totalCho = parseInt(Cookies.get("chocolateChip")||0)
	var totaldou = parseInt(Cookies.get("doubleChocoChip")||0)
	var totalsug = parseInt(Cookies.get("suger")||0)
	
	$(".total-cookies").text(totalCho + totaldou + totalsug)
	
	$("choco-chip").click(function(){
		var numberOfCookies = $(".total-cookies").text()
		var cookiesPlusOne= parseInt(numberOfCookies) + 1
		Cookies.set("choco-chip" , cookiesPlusOne)
		$(".total-cookies").text(cookiesPlusOne)
	})

	$("double-choco-chip").click(function(){
		var numberOfCookies = $(".total-cookies").text()
		var cookiesPlusOne= parseInt(numberOfCookies) + 1
		Cookies.set("double-choco-chip" , cookiesPlusOne)
		$(".total-cookies").text(cookiesPlusOne)
	})

	$("suger-chip").click(function(){
		var numberOfCookies = $(".total-cookies").text()
		var cookiesPlusOne= parseInt(numberOfCookies) + 1
		Cookies.set("suger-chip" , cookiesPlusOne)
		$(".total-cookies").text(cookiesPlusOne)
	})

	$(".clear-cookies").click(function(){
		Cookies.remove("choco-chip")
		Cookies.remove("double-choco-chip")
		Cookies.remove("suger-chip")
	})

})