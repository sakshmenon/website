import { BlobAnimation } from './BlobAnimation'

interface BackgroundBlobsProps {
  mousePosition: { x: number; y: number }
}

export function BackgroundBlobs({ mousePosition }: BackgroundBlobsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large primary blob - deep blue variants - far outer orbit */}
      <BlobAnimation 
        size={800}
        colors={["rgb(37 99 235)", "rgb(59 130 246)"]} // blue-600 to blue-500
        duration={20}
        delay={0}
        intensity="prominent"
        orbitalRadius={550} // Increased from 400
        startAngle={0} // Start at top (12 o'clock)
        mousePosition={mousePosition}
      />
      
      {/* Large secondary blob - vibrant red variants - wide orbit */}
      <BlobAnimation 
        size={700}
        colors={["rgb(220 38 127)", "rgb(236 72 153)"]} // pink-600 to pink-500
        duration={25}
        delay={8}
        intensity="prominent"
        orbitalRadius={480} // Increased from 350
        startAngle={72} // Start at 2 o'clock position
        mousePosition={mousePosition}
      />
      
      {/* Large tertiary blob - royal blue variants - medium-wide orbit */}
      <BlobAnimation 
        size={750}
        colors={["rgb(29 78 216)", "rgb(37 99 235)"]} // blue-700 to blue-600
        duration={18}
        delay={16}
        intensity="prominent"
        orbitalRadius={420} // Increased from 300
        startAngle={144} // Start at 4-5 o'clock position
        mousePosition={mousePosition}
      />
      
      {/* Medium accent blob - crimson red variants - very wide orbit */}
      <BlobAnimation 
        size={500}
        colors={["rgb(185 28 28)", "rgb(220 38 38)"]} // red-700 to red-600
        duration={22}
        delay={4}
        intensity="medium"
        orbitalRadius={600} // Increased from 450
        startAngle={216} // Start at 7-8 o'clock position
        mousePosition={mousePosition}
      />
      
      {/* Medium accent blob - sky blue variants - closer orbit */}
      <BlobAnimation 
        size={450}
        colors={["rgb(14 165 233)", "rgb(56 189 248)"]} // sky-500 to sky-400
        duration={28}
        delay={12}
        intensity="medium"
        orbitalRadius={360} // Increased from 280
        startAngle={288} // Start at 9-10 o'clock position
        mousePosition={mousePosition}
      />
    </div>
  )
}