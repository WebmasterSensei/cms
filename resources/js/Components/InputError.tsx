import { HTMLAttributes } from 'react';

export default function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p
            {...props}
            className={'text-sm bor text-red-600 drop-shadow-[0_0_2px_white] ' + className}
        >
            {message}
        </p>
    ) : null;
}
