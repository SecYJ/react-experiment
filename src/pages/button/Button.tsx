import { cn } from "@/utils/cn";
import { isBoolean } from "@/utils/typeChecks";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, isValidElement, ReactNode } from "react";
import { LuLoader2 } from "react-icons/lu";
import "./button.css";

// type variant = "outlined" | "contained";
// type position = "top" | "bottom" | "left" | "right";

const buttonVariants = cva(
	"rounded-lg py-1.5 px-3 text-white motion-reduce:transition-none inline-flex gap-3 justify-center items-center transition-colors duration-300 relative bg-[var(--bgcolor)] text-[var(--color)]",
	{
		variants: {
			variant: {
				// contained: "bg-primary-light enabled:hover:bg-primary-dark",
				contained: "",
				outlined:
					"border border-[var(--color)] text-[var(--color)] enabled:hover:bg-primary-light enabled:hover:text-white bg-transparent",
				text: "hover:bg-primary-light/20",
				loader: "",
			},
			color: {
				primary: "[--bgcolor:theme(colors.blue.600)]",
				success: "[--bgcolor:theme(colors.green.600)]",
				error: "[--bgcolor:theme(colors.red.600)]",
				warning: "[--bgcolor:theme(colors.yellow.400)]",
				// borderColor: "[--bgcolor:theme(colors.blue.600)]",
				// bgColor: "[--bgcolor:theme(colors.blue.600)]",
				// color: "[--bgcolor:theme(colors.blue.600)]",
			},
			setting: {
				borderColor: "[--bgcolor:theme(colors.blue.600)]",
				bgColor: "[--bgcolor:theme(colors.blue.600)]",
				color: "[--bgcolor:theme(colors.blue.600)]",
			},
		},
		compoundVariants: [
			{
				variant: "outlined",
			},
		],
		defaultVariants: {
			variant: "contained",
		},
	}
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type StartEndSection = boolean | ReactNode;

type Props = ButtonProps &
	VariantProps<typeof buttonVariants> & {
		className?: string;
		fullWidth?: boolean;
		pilled?: boolean;
		children: ReactNode;
		disabledType?: "cursor" | "pointer-event";
		startSection?: StartEndSection;
		endSection?: StartEndSection;
		loading?: boolean;
		color?: "primary" | "success" | "error" | "warning";
		// TODO: to be continued
		// loader?:
		// 	| boolean
		// 	| {
		// 			transition?: "top" | "bottom" | "left" | "right" | "default";
		// 	  };
	};

const Button = ({
	pilled,
	fullWidth,
	children,
	className,
	variant,
	disabledType,
	startSection,
	endSection,
	loading,
	color = "primary",
	...props
}: Props) => {
	return (
		<button
			className={cn(
				buttonVariants({ variant, color }),
				fullWidth && "w-full",
				pilled && "rounded-full",
				disabledType === "cursor" ? "disabled:cursor-not-allowed" : "disabled:pointer-events-none",
				"disabled:opacity-60",
				loading && "*:opacity-0",
				// color === "primary" && "[--color:theme(colors.primary.light)]",
				// color === "success" && "[--color:theme(colors.green.400)]",
				className
			)}
			{...props}
		>
			{/* NOTE: transition */}
			{/* {loader && (
				<div
					className={cn("absolute inset-0 transition-all blur-md", {
						"-translate-y-full": loader || (loader && loader),
					})}
				></div>
			)} */}

			{loading && (
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !opacity-100">
					<LuLoader2 className="animate-spin" />
				</span>
			)}

			{startSection && isBoolean(startSection) && (
				<span>
					<LuLoader2 className="animate-spin" />
				</span>
			)}

			{isValidElement(startSection) && startSection}

			{variant === "loader" ? <LuLoader2 className="animate-spin" /> : <span>{children}</span>}

			{endSection && isBoolean(endSection) && (
				<span>
					<LuLoader2 className="animate-spin" />
				</span>
			)}
			{endSection && !isBoolean(endSection) && <span>{endSection}</span>}
		</button>
	);
};

export default Button;

/*
NOTE: Issues
1. props or className priority is bigger
2. the disabled default cursor not allowed or pointer events none

*/
