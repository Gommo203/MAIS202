import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/app/page.module.scss";
import Button from "@mui/material/Button";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={styles.layoutContainer}>
			<h1 className={styles.barName}>Friend&apos;s Pub</h1>
			<div className={styles.buttonContainer}>
				<h2 style={{ margin: "1.5rem" }}>
					<Link className="my-link" href="/menu">
						<Button
							variant="outlined"
							sx={{
								color: "rgb(240, 84, 84)",
								borderColor: "rgb(240, 84, 84)",
							}}
						>
							Menu
						</Button>
					</Link>
				</h2>
				<h2 style={{ margin: "3rem" }}>
					<Link className="my-link" href="/ingredients">
						<Button
							variant="outlined"
							sx={{
								color: "rgb(240, 84, 84)",
								borderColor: "rgb(240, 84, 84)",
							}}
						>
							Ingredients
						</Button>
					</Link>
				</h2>
				<h2>
					<Link className="my-link" href="/recommendations ">
						<Button
							variant="outlined"
							sx={{
								color: "rgb(240, 84, 84)",
								borderColor: "rgb(240, 84, 84)",
							}}
						>
							Recommendations
						</Button>
					</Link>
				</h2>
			</div>
		</div>
	);
}
