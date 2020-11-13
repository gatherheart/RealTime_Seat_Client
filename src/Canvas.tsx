import React, { ReactElement, useEffect, useRef } from 'react'

interface CanvasProps {
  text: string
}

const cheese =
  'https://images.unsplash.com/photo-1519411792752-25c2468cccb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=354&q=80'
const Canvas: React.FC<CanvasProps> = ({ text }: CanvasProps): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  console.log('CANVAS')
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imgRef.current
    if (img && ctx) {
      img.onload = () => {
        ctx.drawImage(img, 20, 20)
        ctx.font = '40px Courier'
        ctx.fillText(text, 210, 75)
      }
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width={640} height={425} />
      <img ref={imgRef} src={cheese} className="hidden" />
    </div>
  )
}

export default Canvas
