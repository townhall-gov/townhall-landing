import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center audiowide-regular transition-all justify-center whitespace-nowrap  rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-black shadow hover:bg-primary/90  hover:shadow-[0_0px_20px_#a3e440] shadow-2xl border-t-2 border-l-2 border-[yellow]',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm border-t-2 border-l-2 border-[cyan]',
				white: 'bg-foreground text-background shadow-sm',
				outline:
					'border border-primary text-primary bg-background shadow-sm hover:border-primary',
				secondary: 'border border-white shadow-sm hover:border-primary',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-9 px-6 py-2',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-8 px-3 text-xs sm:h-9 sm:px-6 sm:py-2 md:h-12 md:px-8 md:font-bold md:text-base',
				icon: 'h-9 w-9'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
