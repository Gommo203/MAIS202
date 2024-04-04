// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Autocomplete from "@mui/material/Autocomplete";
// import { IconButton } from "@mui/material";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { Paper } from "@mui/material";
// import { Ingredient, IngredientType } from "@/Data/ingredients";
// import styles from "../styles/Components/addIngredientModal.module.scss";
// import { colors } from "@/Constants/colors";

// export default function AddIngredientModal({
// 	setModalOpen,
// 	open,
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

// 	const types = [
// 		"spirit",
// 		"juice",
// 		"sweetener",
// 		"herb",
// 		"bitters",
// 		"mixer",
// 		"Garnish",
// 	];

// 	const [ingredientName, setIngredientName] = useState("");
// 	const [ingredientType, setIngredientType] = useState<{
// 		type: IngredientType;
// 	}>({ type: "spirit" });

// 	const handleClose = () => {
// 		setModalOpen(false);
// 	};

// 	const handleOpen = () => {
// 		setModalOpen(true);
// 	};

// 	const addIngredient = async () => {
// 		const ingredient: Ingredient = {
// 			name: ingredientName,
// 			type: ingredientType.type,
// 		};

// 		await fetch("/api/ingredients", {
// 			method: "POST",
// 			body: JSON.stringify(ingredient),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		handleClose();
// 		refreshData();
// 	};

// 	return (
// 		<div>
// 			<IconButton onClick={handleOpen} className="my-icon-button">
// 				<IoAddCircleOutline size={"1.75em"} />
// 			</IconButton>
// 			<Dialog open={open} onClose={handleClose}>
// 				<DialogTitle className={styles.background}>
// 					Add Ingredient
// 				</DialogTitle>
// 				<DialogContent className={styles.background}>
// 					<div className="my-dialog">
// 						<TextField
// 							autoFocus
// 							margin="dense"
// 							id="name"
// 							label="Ingredient Name"
// 							type="text"
// 							fullWidth
// 							sx={textfieldStyle}
// 							onChange={(e) => setIngredientName(e.target.value)}
// 						/>
// 						<Autocomplete
// 							id="tags-outlined"
// 							options={types}
// 							getOptionLabel={(option: any) => option}
// 							filterSelectedOptions
// 							onChange={(e, value: any) => {
// 								setIngredientType({ type: value });
// 							}}
// 							popupIcon={<></>}
// 							renderInput={(params) => (
// 								<TextField {...params} label="Type" />
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
// 						/>
// 					</div>
// 				</DialogContent>
// 				<DialogActions className={styles.background}>
// 					<Button
// 						onClick={handleClose}
// 						style={{ color: colors.secondary.dark }}
// 					>
// 						Cancel
// 					</Button>
// 					<Button
// 						onClick={addIngredient}
// 						style={{ color: "info.main" }}
// 					>
// 						Add
// 					</Button>
// 				</DialogActions>
// 			</Dialog>
// 		</div>
// 	);
// }
