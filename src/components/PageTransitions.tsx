import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

const slideUp = {
	name: 'Slide Up',
	variants: {
	  initial: {
		opacity: 0,
		top: '100vh',
		scale: 0.4
	  },
	  animate: {
		opacity: 1,
		top: '0vh',
		scale: 1
	  },
	  exit: {
		opacity: 0,
		top: '100vh',
		scale: 0.4
	  }
	},
	transition: {
	  duration: 0.7
	}
  }
  
  const slideRight = {
	name: 'Slide Right',
	variants: {
	  initial: {
		opacity: 0,
		left: '-100%',
		scale: 0.6
	  },
	  animate: {
		opacity: 1,
		left: 0,
		scale: 1
	  },
	  exit: {
		opacity: 0,
		left: '100%',
		scale: 0.6
	  }
	},
	transition: {
	  duration: 0.7
	}
  }

  const myAnimation = {
	initial: {
	  opacity: 0
	},
	animate: {
	  opacity: 1
	},
	exit: {
	  opacity: 0
	},
	transition: {
	  duration: 0.6
	}
  }

  const slideAnimation = {
	initial: { x: '100%' },
	animate: { x: 0 },
	exit: { x: '-100%' },
	transition: { duration: 0.4, ease: 'easeInOut' }
  }

const pageTransition = ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => {

	return (
		<motion.div
			/*ref={ref}
			initial={onTheRight}
			animate={inTheCenter}
			exit={onTheLeft}
			transition={transition}
			{...rest}*/
			/*initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}*/
	  initial="initial"
      animate="animate"
      exit="exit"
      transition={myAnimation.transition}
      variants={slideRight.variants}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(pageTransition)