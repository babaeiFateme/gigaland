import Link from "next/link";
import { FC } from "react"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    href?: string,
    type?: "button" | "submit" | "reset",
    variant?: "primary" | "secondary" | "danger" | "outline",
    size?: "small" | "medium" | "large",
    className?: string,
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    href,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    className = '',
    disabled = false,
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring transition ease-in-out duration-150';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        outline: 'border border-gray-600 text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'py-3 px-10 text-md',
        large: 'px-5 py-3 text-lg',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    if (href) {
        return (
            <Link href={href} {...props} className={combinedStyles} role="button" aria-disabled={disabled}>

                {children}

            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedStyles}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
