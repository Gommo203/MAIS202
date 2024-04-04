// import React from "react";
// import { useRouter } from "next/router";
// import { IconButton } from "@mui/material";
// import Link from "next/link";
// import { BiArrowBack } from "react-icons/bi";
// import { MdModeEdit } from "react-icons/md";
// import { getCocktail } from "../api/cocktails/[cocktailId]";
// import { getIngredients } from "../api/ingredients";
// import { getIngredientsList } from "@/functions/functions";

// export default function Drink({
// 	ingredients,
// 	image,
// 	instructions,
// 	ingredientList,
// }: any) {
// 	const router = useRouter();
// 	let drinkName = router.query.drinkName as string;
// 	let drinkId = router.query.drinkId as string;

// 	const cocktailIngredients = getIngredientsList(ingredients, ingredientList);

// 	const updateCocktail = () => {
// 		console.log("update");
// 	};

// 	if (!router.isReady) return <div>Loading...</div>;

// 	if (router.isReady) {
// 		return (
// 			<div>
// 				<div
// 					className="sticky-header"
// 					style={{
// 						display: "flex",
// 						justifyContent: "space-between",
// 						backgroundColor: "rgb(34, 40, 49)",
// 					}}
// 				>
// 					<Link href={"/menu"} className="back-link">
// 						<IconButton className="my-icon-button">
// 							<BiArrowBack size={"1.75em"} />
// 						</IconButton>
// 					</Link>
// 					<IconButton
// 						onClick={updateCocktail}
// 						//
// 						className="my-icon-button"
// 					>
// 						<MdModeEdit size={"1.30em"} />
// 					</IconButton>
// 				</div>
// 				<h1>{drinkName}</h1>
// 				<>
// 					<h2>Ingredients</h2>
// 					<ul>
// 						{cocktailIngredients.map((ingredient) => (
// 							<li key={ingredient.id}>{ingredient.name}</li>
// 						))}
// 					</ul>
// 				</>
// 				<>
// 					<h2>Instructions</h2>
// 					<p>{instructions}</p>
// 				</>
// 			</div>
// 		);
// 	}
// }

// export async function getServerSideProps(context: any) {
// 	const { query } = context;

// 	const { drinkId } = query;

// 	const res = await getCocktail(drinkId);

// 	const ingredientList = await getIngredients();

// 	if (!res) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return {
// 		props: {
// 			ingredients: res.ingredients,
// 			image: res.image,
// 			instructions: res.instructions,
// 			ingredientList: ingredientList,
// 		},
// 	};
// }
