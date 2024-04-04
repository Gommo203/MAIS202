import axios from "axios";

export async function GET() {
	const cocktails = await getIngredients();
	return Response.json(cocktails);
}

async function getIngredients() {
	return await axios
		.get(process.env.API_URL_FIREBASE + "/ingredients.json")
		.then((response) => {
			const ingredients = [];
			for (const key in response.data) {
				ingredients.push({
					id: key,
					name: response.data[key].name,
					type: response.data[key].type,
				});
			}

			return ingredients;
		})
		.catch((err) => {
			return err;
		});
}
