import { techStack } from "../constants"
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Tiles = () => {
  const [expanded, setExpanded] = useState(false);
  const [itemsInTwoRows, setItemsInTwoRows] = useState(8);
  const [totalItems, setTotalItems] = useState(techStack.length);
  const gridRef = useRef(null);
  
  // Brand color mapping for common technologies
  const brandColors = {
    "Java": "#007396",
    "Python": "#3776AB",
    "C": "#A8B9CC",
    "C++": "#00599C",
    "JavaScript": "#F7DF1E",
    "TailwindCSS": "#06B6D4",
    "React": "#61DAFB",
    "Vue.js": "#4FC08D",
    "Git": "#F05032",
    "Docker": "#2496ED",
    "AWS": "#FF9900",
    "Flask": "#000000",
    "Android": "#3DDC84",
    "Linux": "#FCC624",
    "SQL": "#4479A1"
  }

  // Calculate items per row and total visible items on mount and resize
  useEffect(() => {
    const calculateItemsPerRow = () => {
      if (!gridRef.current || !gridRef.current.children.length) return;
      
      const firstItem = gridRef.current.children[0];
      const itemTop = firstItem.getBoundingClientRect().top;
      let itemsInFirstRow = 0;
      
      // Count items in first row
      for (let i = 0; i < gridRef.current.children.length; i++) {
        const currentTop = gridRef.current.children[i].getBoundingClientRect().top;
        if (Math.abs(currentTop - itemTop) < 5) {
          itemsInFirstRow++;
        } else {
          break;
        }
      }
      
      setItemsInTwoRows(itemsInFirstRow * 2);
      setTotalItems(techStack.length);
    };
    
    // Calculate after items render with debouncing
    const timer = setTimeout(calculateItemsPerRow, 100);
    
    const handleResize = () => {
      clearTimeout(timer);
      setTimeout(calculateItemsPerRow, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Display limited or all items based on expanded state
  const displayedItems = expanded ? techStack : techStack.slice(0, itemsInTwoRows);
  const remainingItems = totalItems - itemsInTwoRows;

  return (
    <div className="h-full w-full space-y-6">
      <style jsx="true">{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          width: 100%;
          gap: 12px;
        }

        @media (min-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 16px;
          }
        }

        @media (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 20px;
          }
        }
      `}</style>
      
      <motion.div 
        ref={gridRef} 
        className="tech-grid col-span-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              className="group relative border border-white/10 rounded-lg
                        flex items-center justify-center 
                        transition-all duration-300 ease-out
                        aspect-square w-full p-4 cursor-pointer overflow-hidden
                        backdrop-blur-[2px] bg-white/[0.03]
                        hover:border-white/20 hover:bg-white/[0.08]
                        hover:scale-110 hover:-translate-y-1"
              style={{
                boxShadow: `0 0 8px ${brandColors[item.name] ? brandColors[item.name] + '15' : '#FFFFFF15'}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px ${brandColors[item.name] ? brandColors[item.name] + '40' : '#FFFFFF40'}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 8px ${brandColors[item.name] ? brandColors[item.name] + '15' : '#FFFFFF15'}`;
              }}
              aria-label={`${item.name} - ${item.proficiency}`}
            >
              {/* Technology name tooltip */}
              <div className="absolute bottom-1 left-0 right-0 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 text-[10px] text-center text-white/80 font-medium">
                {item.proficiency} - {item.experienceYears} years
              </div>
              
              {/* Subtle radial glow */}
              <div 
                className="absolute inset-0 -z-10 rounded-lg opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${brandColors[item.name] ? brandColors[item.name] + '30' : '#FFFFFF30'} 0%, transparent 70%)`
                }}
              />
              
              {/* Icon with enhanced glow on hover */}
              <img
                src={item.logo}
                alt={`${item.name} icon`}
                style={{
                  width: '60%',
                  filter: `drop-shadow(0 0 1px ${brandColors[item.name] ? brandColors[item.name] + '40' : '#FFFFFF40'})`,
                  transition: 'filter 0.3s ease-out, transform 0.3s ease-out'
                }}
                className="transition-all duration-300 z-10 group-hover:filter-none group-hover:scale-110"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Enhanced Show All/Less button */}
      {techStack.length > itemsInTwoRows && (
        <motion.div 
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="relative group flex items-center gap-2 py-2 px-4 
                     bg-gradient-to-r from-[#2a2a3870] to-[#1e1e2470] 
                     backdrop-blur-md border border-white/10 rounded-full
                     shadow-[0_4px_12px_rgba(0,0,0,0.15)] overflow-hidden
                     hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] 
                     active:scale-95 transition-all duration-300"
            aria-label={expanded ? "Show fewer tech stack items" : "Show all tech stack items"}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <span className="text-xs cursor-pointer font-medium text-white">
              {expanded ? "Show Less" : "Show All"}
            </span>
            
            {!expanded && remainingItems > 0 && (
              <span className="flex items-center justify-center h-4 w-4 bg-white/20 
                             text-[10px] font-semibold text-white rounded-full">
                {remainingItems}
              </span>
            )}
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Tiles