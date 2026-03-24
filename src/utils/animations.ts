import { Variants } from 'framer-motion';

// Sophisticated animation system with varied entrance effects
export const animationVariants: Record<string, Variants> = {
  // Hero section animations
  heroContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },

  heroText: {
    hidden: { 
      opacity: 0, 
      x: -50,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },

  heroImage: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: 'blur(20px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  },

  // Section animations
  sectionContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },

  sectionHeader: {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  sectionSubheader: {
    hidden: { 
      opacity: 0, 
      x: -30,
      filter: 'blur(5px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Card animations - different styles for variety
  cardFadeIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  cardSlideUp: {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  cardSlideLeft: {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  cardSlideRight: {
    hidden: { 
      opacity: 0, 
      x: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  cardSlideIn: {
    hidden: { 
      opacity: 0, 
      x: -40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  // Button animations
  buttonPrimary: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },

  // Icon animations
  iconFloat: {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Stagger container for grids
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  },

  // Page transition
  pageTransition: {
    initial: {
      opacity: 0,
      scale: 0.98,
      filter: 'blur(10px)'
    },
    in: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      scale: 1.02,
      filter: 'blur(10px)',
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }
};

// Get different animation types for variety
export const getCardAnimation = (index: number) => {
  const animations = ['cardFadeIn', 'cardSlideUp', 'cardSlideLeft', 'cardSlideRight'];
  return animations[index % animations.length];
};

// Smooth spring configurations
export const springConfigs = {
  smooth: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1
  },
  gentle: {
    type: "spring" as const,
    stiffness: 80,
    damping: 25,
    mass: 1
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 120,
    damping: 15,
    mass: 1
  }
};

// Scroll-triggered animation variants
export const scrollVariants = {
  // Fade in from bottom with blur
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -60,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Fade in from right
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 60,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Scale in with blur
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: 'blur(15px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Slide up with scale
  slideUpScale: {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
};
