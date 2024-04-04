import React, { useEffect, useState } from "react";
import { Ingredient } from "@/Data/ingredients";
import { Checkbox } from "@mui/material";
import styles from "../styles/Components/ingredientSection.module.scss";

export default function IngredientSection({
	section,
	ingredients,
	myIngredients,
	updateMyIngredients,
}: any) {
	const [sectionIngredients, setSectionIngredients] = useState(ingredients);

	useEffect(() => {
		setSectionIngredients(ingredients);
	}, [ingredients]);

	return (
		<div>
			<>
				<h2 className={styles.sectionTitle}>{section}</h2>
			</>
			{sectionIngredients?.map((ingredient: Ingredient) => {
				let checked = false;
				if (
					myIngredients.some((myIngredient: any) => {
						return (
							myIngredient.ingredientId + "" ===
							(ingredient as any as Ingredient).id + ""
						);
					})
				) {
					checked = true;
				}

				return (
					<>
						<div key={ingredient.id} className={styles.item}>
							<span>{ingredient.name}</span>
							<Checkbox
								checked={checked}
								onClick={(e: any) =>
									updateMyIngredients(
										e,
										ingredient.id as number | string
									)
								}
								color="info"
								sx={{ color: "white" }}
							/>
						</div>
					</>
				);
			})}
		</div>
	);
}
