$(function(){


var queue = {
	str: [],

	leftPush: function(num){
		this.str.unshift(num);
		this.print();
	},
		
	rightPush: function(num){
		this.str.push(num);
		this.print();
	},

	isEmpty: function(){
		return (this.str.length === 0);
	},

	leftPop: function(){
		if (!this.isEmpty()) {
			this.str.shitf();
			this.print();
		}else{
			alert('error');
		}
	},

	rightPop: function(){
		if (!this.isEmpty()) {
			this.str.pop();
			this.print();
		}else{
			alert('error');
		}
	},

	print: function(){
		var $inputList = $('#num_list');
		var list = "";
		for (var i = 0; i < this.str.length; i++) {
			list += "<span>" + this.str[i] + "</span>";	
		}
		$inputList.html(list);
	}


};

var inputList = $('input');
inputList.eq(1).click(function() {
	
	var $number = inputList.eq(0).val();
	if ((/^[0-9]+$/).test($number)) {
		queue.leftPush($number);
	}else{
		alert('error');
	}

});
});