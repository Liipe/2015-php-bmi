var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
		getDescription: function (index) {
		var msg = " ";
		if(index < 17){
			msg = " Você está muito abaixo do peso. ";
			
		}
		else if((index >= 17) && (index < 18.49)){
			msg = "Você está abaixo do peso. ";
			
		}
		
		else if((index >= 18.5) && (index <= 24.99 )){
			msg = "Você está em seu peso ideal. ";
		}
		
		else if((index >= 25) && (index <= 29.99 )){
			msg = "Você está acima do peso. ";
		}
		else if((index >= 30) && (index <= 34.99 )){
			msg = "Obesidade de grau I. ";
		}
		else if((index >= 35) && (index <= 39.99 )){
			msg = "Obesidade de grau  II (Severa).";
		}
		else{
			msg = "Obesidade de grau III (Morbida).";
		}
				return msg ;
	}
	
};	