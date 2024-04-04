// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Autocomplete from "@mui/material/Autocomplete";
// import { Box, Chip, IconButton, Typography } from "@mui/material";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { Paper } from "@mui/material";
// import { colors } from "@/Constants/colors";
// import styles from "../styles/Components/cocktailModal.module.scss";

// export default function CocktailModal({
// 	setModalOpen,
// 	open,
// 	ingredientsList,
// 	refreshData,
// }: any) {
// 	const textfieldStyle = {
// 		"& .MuiFormLabel-root": {
// 			color: "white",
// 		},
// 		"& .MuiFormLabel-root.Mui-focused": {
// 			color: "info.main",
// 		},
// 		input: {
// 			color: "white",
// 			border: `1px solid ${colors.primary.dark}}`,
// 		},
// 		"& .MuiOutlinedInput-root": {
// 			"& fieldset": {
// 				borderColor: "white",
// 			},
// 		},
// 		"&.Mui-focused fieldset": {
// 			borderColor: "info.main",
// 		},
// 		"&:hover fieldset": {
// 			borderColor: "white",
// 		},
// 	};

// 	const [cocktailName, setCocktailName] = useState("");
// 	const [instructions, setInstructions] = useState("");
// 	const [image, setImage] = useState("");
// 	const [ingredients, setIngredients] = useState(null);

// 	const handleClose = () => {
// 		setModalOpen(false);
// 	};

// 	const handleOpen = () => {
// 		setModalOpen(true);
// 	};

// 	const createCocktail = async () => {
// 		let ingredientIds: any = [];

// 		if (ingredients !== null) {
// 			(ingredients as Array<any>).forEach((ingredient: any) => {
// 				ingredientIds.push(ingredient.id);
// 			});
// 		}

// 		await fetch("/api/cocktails", {
// 			method: "POST",
// 			body: JSON.stringify({
// 				name: cocktailName,
// 				ingredients: ingredientIds,
// 				instructions: instructions,
// 				image: image,
// 			}),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		handleClose();
// 		refreshData();
// 	};

// 	return (
// 		<div>
// 			<IconButton className="my-icon-button" onClick={handleOpen}>
// 				<IoAddCircleOutline size={"1.75em"} />
// 			</IconButton>
// 			<Dialog open={open} onClose={handleClose}>
// 				<DialogTitle className={styles.background}>
// 					Create Cocktail
// 				</DialogTitle>
// 				<DialogContent className={styles.background}>
// 					<div className="my-dialog">
// 						<TextField
// 							autoFocus
// 							margin="dense"
// 							id="name"
// 							label="Cocktail Name"
// 							type="text"
// 							fullWidth
// 							sx={textfieldStyle}
// 							onChange={(e) => setCocktailName(e.target.value)}
// 						/>
// 						<Autocomplete
// 							//going to need to create a new component for every type of ingredient to add parts (spirit, mixer, juice...)
// 							multiple
// 							id="tags-outlined"
// 							options={ingredientsList}
// 							getOptionLabel={(option: any) => option["name"]}
// 							defaultValue={[]}
// 							filterSelectedOptions
// 							// groupBy={(option: any) => option["type"]}
// 							onChange={(e, value: any) => {
// 								setIngredients(value);
// 							}}
// 							popupIcon={<></>}
// 							renderInput={(params) => (
// 								<TextField {...params} label="Ingredients" />
// 							)}
// 							PaperComponent={({ children }) => (
// 								<Paper
// 									style={{
// 										background: "rgb(181, 189, 203)",
// 										fontWeight: "bold",
// 										fontFamily: "Helvetica",
// 									}}
// 								>
// 									{children}
// 								</Paper>
// 							)}
// 							sx={{
// 								...textfieldStyle,
// 							}}
// 							// renderGroup={(params) => {
// 							// 	const group =
// 							// 		params.group.charAt(0).toUpperCase() +
// 							// 		params.group.slice(1) +
// 							// 		":";

// 							// 	return (
// 							// 		<Box key={params.key}>
// 							// 			<Typography
// 							// 				fontSize={25}
// 							// 				sx={{
// 							// 					display: "flex",
// 							// 					justifyContent: "center",
// 							// 					alignItems: "center",
// 							// 					fontWeight: "bold",
// 							// 				}}
// 							// 			>
// 							// 				{group}
// 							// 			</Typography>
// 							// 			{params.children}
// 							// 		</Box>
// 							// 	);
// 							// }}
// 							renderTags={(value) => {
// 								return value.map((option: any, index) => (
// 									<Chip
// 										key={index}
// 										label={option["name"]}
// 										sx={{
// 											color: "white",
// 											backgroundColor: "info.main",
// 											marginLeft: "5px",
// 											marginTop: "5px",
// 										}}
// 									/>
// 								));
// 							}}
// 						/>
// 						<TextField
// 							autoFocus
// 							margin="dense"
// 							id="name"
// 							label="Instructions"
// 							type="text"
// 							fullWidth
// 							sx={textfieldStyle}
// 							onChange={(e) => setInstructions(e.target.value)}
// 						/>
// 					</div>
// 				</DialogContent>
// 				<DialogActions className={styles.background}>
// 					<Button
// 						onClick={handleClose}
// 						style={{ color: "rgb(240, 84, 84)" }}
// 					>
// 						Cancel
// 					</Button>
// 					<Button
// 						onClick={createCocktail}
// 						style={{ color: "info.main" }}
// 					>
// 						Create
// 					</Button>
// 				</DialogActions>
// 			</Dialog>
// 		</div>
// 	);
// }
