import axios from "axios";
import { MyIngredient } from "@/Data/ingredients";

export async function GET() {
	const myIngredients = await getMyIngredients();
	return Response.json(myIngredients);
}

export async function POST(request: Request) {
	const body = await request.json();
	const myIngredient: MyIngredient = {
		ingredientId: body.ingredientId,
	};

	const id = await postMyIngredients(myIngredient);
	return Response.json(id);
}

async function getMyIngredients() {
	return await axios
		.get(process.env.API_URL_FIREBASE + "/myIngredients.json")
		.then((response) => {
			const myIngredients = [];

			for (const key in response.data) {
				if (response.data[key]) {
					myIngredients.push({
						id: key,
						ingredientId: response.data[key].ingredientId,
					});
				}
			}

			return myIngredients;
		})
		.catch((err) => {
			return err;
		});
}

async function postMyIngredients(myIngredient: MyIngredient) {
	const res = await axios
		.post(
			process.env.API_URL_FIREBASE + "/myIngredients.json",
			myIngredient
		)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
	return res.name;
}
