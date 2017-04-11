function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype = {
	printInfo: function() {
		console.log('Marka telefonu to: ' + this.brand + '. Kolor telefonu to: ' + this.color + '. Telefon kosztuje: ' + this.price + ' zł. Koszt przedłużonej gwarancji wynosi: ' + this.getWarrantyCost() + ' zł.');
	},
	getWarrantyCost: function() {
		return Math.round(this.price * 0.1);
	}
}

var samsungGalaxyS8 = new Phone('Samsung', 3999, 'Midnight Black');
var iPhone7s = new Phone('Apple', 3649, 'Onyks');
var onePlusThree = new Phone ('One Plus', 2289, 'Black');

samsungGalaxyS8.printInfo();
iPhone7s.printInfo();
onePlusThree.printInfo();