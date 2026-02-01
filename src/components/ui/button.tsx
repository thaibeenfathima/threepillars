import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'white';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
            secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
            accent: 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
            outline: 'border-2 border-primary text-primary hover:bg-primary/5',
            ghost: 'hover:bg-muted text-foreground',
            white: 'bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm rounded-md',
            md: 'h-11 px-6 text-base rounded-md',
            lg: 'h-14 px-8 text-lg rounded-lg',
            icon: 'h-10 w-10',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
