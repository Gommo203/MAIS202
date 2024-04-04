import axios from "axios";

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	await deleteMyIngredients(params.id);
	return Response.json({ message: "Deleted" });
}

async function deleteMyIngredients(id: string) {
	await axios.delete(
		process.env.API_URL_FIREBASE + `/myIngredients/${id}.json`
	);
}
