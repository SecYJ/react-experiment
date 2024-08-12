import { cn } from "@/utils/cn";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import Button from "./Button";

const ButtonPage = () => {
	const [open, setOpen] = useState(false);
	const toggle = async () => {
		setOpen(true);
		await new Promise((r) =>
			setTimeout(() => {
				setOpen(false);
				r();
			}, 3000)
		);
	};

	return (
		<>
			<Button>Primary Button</Button>
			<div className="p-10 grid gap-4 justify-items-start">
				<div className="flex gap-4 *:min-w-32">
					<Button>Blue</Button>
					<Button color="success">Green</Button>
					<Button color="error">Error</Button>
					<Button color="warning">Warning</Button>
				</div>
				<Button variant="contained" color="success">
					Contained Button
				</Button>
				<Button disabled variant="outlined" color="success" fullWidth pilled>
					disabled with pointer-events
				</Button>

				<Button disabled disabledType="cursor" variant="outlined" pilled>
					disabled with cursor
				</Button>

				<Button variant="text">Text Button</Button>

				<Button
					variant="outlined"
					color="success"
					startSection={open ? <LuLoader2 className="animate-spin" /> : null}
					onClick={() => toggle()}
				>
					Outlined Button
				</Button>

				<Button className="min-w-[210px] relative" onClick={() => toggle()}>
					{/* <span
						className={cn(
							open ? "visible" : "invisible",
							"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						)}
					>
						<span className="size-4 animate-spin">
							<LuLoader2 />
						</span>
					</span> */}
					<span
						className={cn(
							open ? "visible" : "invisible",
							"top-1/2 absolute -translate-y-1/2 -translate-x-1/2 left-1/2 flex"
						)}
					>
						<LuLoader2 size={20} className="animate-spin" />
					</span>
					{/* <span>Icon and texzt toggle button</span> */}
					<span className={cn(open && "text-transparent")}>Loading button</span>
				</Button>

				<Button startSection onClick={() => toggle()}>
					click me
				</Button>

				<Button variant="contained" loading={open} color="success" onClick={() => toggle()}>
					Loader button
				</Button>
			</div>
		</>
	);
};

export default ButtonPage;
