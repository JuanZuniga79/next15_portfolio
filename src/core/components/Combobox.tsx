import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/core/components/ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUpDown, Check } from "lucide-react";
import {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
} from "@/core/components/ui/command";
import { cn } from "@/core/lib/utils";

interface Props {
	title: string;
	content: string[];
	onChange: (items: string[]) => void;
}
export default function Combobox({ title, content, onChange }: Props) {
	const [values, setValues] = useState<string[]>([]);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between capitalize font-sans border-[1px] border-mantle hover:border-crust cursor-pointer hover:bg-mantle
            dark:border-dark-mantle dark:hover:border-dark-crust dark:hover:bg-dark-crust dark:text-dark-text"
				>
					{values.length >= 1
						? `${values.length > 1 ? `selected ${values.length} items` : values[0]}`
						: `Select an ${title}`}
					<ChevronsUpDown className="ml-2 w-4 h-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0 bg-primary dark:bg-dark-primary z-20 border-[1px] dark:text-dark-text">
				<Command>
					<CommandInput placeholder={`search ${title} ...`} />
					<CommandList className="scrollbar">
						<CommandEmpty>No items found..</CommandEmpty>
						<CommandGroup>
							{content.map((item, i) => (
								<CommandItem
									key={i}
									value={item}
									onSelect={(currentValue) => {
										const value = values.includes(currentValue)
											? values.filter((item) => item !== currentValue)
											: [...values, currentValue];
										setValues(value);
										onChange(value);
									}}
									className="flex items-center justify-between capitalize font-mono cursor-pointer hover:bg-crust dark:hover:bg-dark-crust"
								>
									{item}
									<Check
										className={cn(
											"h-4 w-4",
											values.includes(item) ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
