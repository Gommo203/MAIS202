export interface Cocktail {
	id?: number | string;
	name: string;
	ingredients: number[];
	instructions: string;
	image: string;
}

export interface Cocktails extends Array<Cocktail> {}

export const COCKTAILS: Cocktails = [
	{
		id: 1,
		name: "Mojito",
		ingredients: [1, 2, 3, 4],
		instructions:
			"Muddle mint leaves with sugar and lime juice. Add ice, rum, and top with club soda. Garnish and serve.",
		image: "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574608.jpg",
	},
	{
		id: 2,
		name: "Old Fashioned",
		ingredients: [5, 6, 3, 7, 8],
		instructions:
			"Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Stir gently. Garnish and serve.",
		image: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
	},
	{
		id: 3,
		name: "Manhattan",
		ingredients: [5, 9, 6, 10, 8],
		instructions:
			"Stirred over ice, strained into a chilled glass, garnished, and served up.",
		image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
	},
	{
		id: 4,
		name: "Margarita",
		ingredients: [11, 12, 2],
		instructions:
			"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten..",
		image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
	},
	{
		id: 5,
		name: "Screwdriver",
		ingredients: [13, 15],
		instructions:
			"Pour vodka and orange juice into a highball glass almost filled with ice cubes. Stir well.",
		image: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
	},
	{
		id: 6,
		name: "Gin and Tonic",
		ingredients: [14, 16],
		instructions:
			"Pour gin and tonic water into a highball glass almost filled with ice cubes. Stir well.",
		image: "https://www.thecocktaildb.com/images/media/drink/ytuyqv1478252802.jpg",
	},
];
