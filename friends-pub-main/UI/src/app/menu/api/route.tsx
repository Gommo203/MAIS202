import axios from "axios";

// const headers = {
// 	"content-type": "application/json",
// 	"X-Api-Key": process.env.API_KEY,
// };

export async function GET() {
	const cocktails = await getCocktails();
	return Response.json(cocktails);
}

async function getCocktails() {
	return await axios
		.get(process.env.API_URL_FIREBASE + "/cocktails.json")
		.then((response: any) => {
			const cocktails = [];
			for (const key in response.data) {
				cocktails.push({
					id: key,
					name: response.data[key].name,
					ingredients: response.data[key].ingredients.filter(
						//This is because of firebase array which can be null if you delete a value in the middle
						(ingredient: any) => ingredient !== null
					),
					instructions: response.data[key].instructions,
					image: response.data[key].image,
				});
			}

			return cocktails;
		})
		.catch((err) => {
			return err;
		});
}
