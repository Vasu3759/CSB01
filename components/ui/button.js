import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md overflow-hidden relative [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-zinc-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-zinc-500 hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-gradient-to-r from-green-400 via-zinc-400 to-purple-400 text-white hover:from-purple-400 hover:to-green-400 hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [ripples, setRipples] = React.useState([])
    const rippleTimeouts = React.useRef([])

    const handleRipple = (e) => {
      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      const newRipple = { key: Date.now(), style: { width: size, height: size, left: x, top: y } }
      setRipples((prev) => [...prev, newRipple])
      const timeout = setTimeout(() => {
        setRipples((prev) => prev.slice(1))
      }, 500)
      rippleTimeouts.current.push(timeout)
    }

    React.useEffect(() => {
      return () => {
        rippleTimeouts.current.forEach(clearTimeout)
      }
    }, [])

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={(e) => {
          if (props.onClick) props.onClick(e)
          handleRipple(e)
        }}
        {...props}
      >
        {props.children}
        <span className="pointer-events-none absolute left-0 top-0 h-full w-full">
          {ripples.map((ripple) => (
            <span
              key={ripple.key}
              className="absolute rounded-full bg-white/40 animate-ripple"
              style={ripple.style}
            />
          ))}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

// Add ripple animation to global CSS if not present:
// .animate-ripple { animation: ripple 0.5s linear; }
// @keyframes ripple { from { transform: scale(0); opacity: 0.7; } to { transform: scale(2); opacity: 0; } } 