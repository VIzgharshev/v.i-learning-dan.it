const books = [
	{
		author: 'Люсі Фолі',
		name: 'Список запрошених',
		price: 70,
	},
	{
		author: 'Сюзанна Кларк',
		name: 'Джонатан Стрейндж і м-р Норрелл',
	},
	{
		name: 'Дизайн. Книга для недизайнерів.',
		price: 70,
	},
	{
		author: 'Алан Мур',
		name: 'Неономікон',
		price: 70,
	},
	{
		author: 'Террі Пратчетт',
		name: 'Рухомі картинки',
		price: 40,
	},
	{
		author: 'Анґус Гайленд',
		name: 'Коти в мистецтві',
	},
];

for (let item of books) {
	const { author, name, price } = item;
	try {
		if (!author || !name || !price) {
			throw new Error('Not full info');
		}
	} catch (e) {
		if (author === undefined) {
			console.error('Author not found');
		} else if (name === undefined) {
			console.error('Name not found');
		} else if (price === undefined) {
			console.error('Price not found');
		}
	}
	if (
		Object.hasOwn(item, 'author') &&
		Object.hasOwn(item, 'name') &&
		Object.hasOwn(item, 'price')
	) {
		const ul = document.createElement('ul');

		for (let key in item) {
         const li = document.createElement('li');
         li.innerHTML = `${key}: ${item[key]}`
			ul.append(li);
		}
		document.getElementById('root').append(ul);
	}
}