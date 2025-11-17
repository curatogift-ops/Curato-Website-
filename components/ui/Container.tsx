import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
  maxWidth?: 'default' | 'full' | 'narrow' | 'wide';
}

/**
 * Container component that automatically suppresses hydration warnings
 * caused by browser extensions (e.g., Bitwarden) that inject attributes
 * into the DOM before React hydrates.
 * 
 * This is a common issue where extensions add attributes like:
 * - bis_skin_checked="1"
 * - bis_size="{...}"
 * - bis_id="..."
 * 
 * @param children - Content to wrap
 * @param className - Additional CSS classes
 * @param as - HTML element to render (default: 'div')
 * @param maxWidth - Container max width preset (default: 'default' = 1400px)
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  maxWidth = 'default',
}: ContainerProps) {
  const maxWidthClasses = {
    default: 'max-w-[1400px]',
    full: 'max-w-full',
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
  };

  const baseClasses = `${maxWidthClasses[maxWidth]} mx-auto px-5`;
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <Component className={combinedClasses} suppressHydrationWarning>
      {children}
    </Component>
  );
}

