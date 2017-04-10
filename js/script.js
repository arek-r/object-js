function Phone(brand, price, color, screenSize) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype = {
	printInfo: function(cost) {
		console.log('Marka telefonu to: ' + this.brand + '. Kolor telefonu to: ' + this.color + '. Telefon kosztuje: ' + this.price + ' zł. Koszt przedłużonej gwarancji wynosi: ' + cost + ' zł.');
	},
	getWarrantyCost: function() {
		return Math.round(this.price * 0.1);
	}
}

var samsungGalaxyS8 = new Phone('Samsung', 3999, 'Midnight Black');
var iPhone7s = new Phone('Apple', 3649, 'Onyks');
var onePlusThree = new Phone ('One Plus', 2289, 'Black');

var samsungExtraWarrantyCost = samsungGalaxyS8.getWarrantyCost();
var iphoneExtraWarrantyCost = iPhone7s.getWarrantyCost();
var oneplusExtraWarrantyCost = onePlusThree.getWarrantyCost();

samsungGalaxyS8.printInfo(samsungExtraWarrantyCost);
iPhone7s.printInfo(iphoneExtraWarrantyCost);
onePlusThree.printInfo(oneplusExtraWarrantyCost);