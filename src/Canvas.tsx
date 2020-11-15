import React, { ReactElement, useEffect, useRef } from 'react'

interface CanvasProps {
  text: string
}

const Canvas: React.FC<CanvasProps> = ({ text }: CanvasProps): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = new Image()
    img.src = cheese

    if (img && canvas && ctx) {
      img.onload = () => {
        const [imgWidth, imgHeight] = fitImageIntoCanvas(img, canvas)
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
      }
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
    </div>
  )
}

const CANVAS_SIZE = 657
const cheese = 'https://naverbooking-phinf.pstatic.net/20201007_220/1602053055804OStiU_PNG/image.png'
const fitImageIntoCanvas = (img: HTMLImageElement, canvas: HTMLCanvasElement): Array<number> => {
  const imgRatio = img.height / img.width
  const canvasRatio = canvas.height / canvas.width
  let imageHeight = 0,
    imageWidth = 0

  if (imgRatio < canvasRatio) {
    imageWidth = canvas.width
    imageHeight = imageWidth * imgRatio
  } else {
    imageHeight = canvas.height
    imageWidth = imageHeight / imgRatio
  }
  return [imageWidth, imageHeight]
}

export default Canvas
