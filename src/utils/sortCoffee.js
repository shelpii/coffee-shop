const sortCoffee = (coffee, best, searchValue, country) => {

    if(best) {
        return coffee.filter(item => item.best === true);
    }
    
    const sortCoffeeByCountry = (coffee, country) => {
        if(!country) {
            return coffee;
        }

        return coffee.filter(item => item.country === country);
    }

    const sortCoffeeByValue = (coffee, searchValue) => {
        if (!searchValue) {
			return coffee;
		}

		searchValue = searchValue.toLowerCase().trim();

		return coffee.filter(item => item.name.toLowerCase().includes(searchValue));
    }

	return sortCoffeeByCountry(sortCoffeeByValue(coffee, searchValue), country);
}

export default sortCoffee;