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
    img.src = background

    if (img && canvas && ctx) {
      img.onload = () => {
        const [imgWidth, imgHeight, slotSize] = fitSizesIntoCanvas(img, canvas)
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
        //ctx.fillStyle = 'red'
        //ctx.fillRect(558.0 / 2, 377.0 / 2, slotSize, slotSize)
      }
    }
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE}></canvas>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        style={{ position: 'absolute', borderColor: 'white', borderWidth: 1, top: 0, left: 0 }}
      >
        <rect
          x={`${558.0 / 2}`}
          y={`${377.0 / 2}`}
          width="5.0"
          height="5.0"
          className="seat-normal"
          data-center-x="563"
          data-center-y="382"
          data-radius="7.0710678118654755"
          data-id="28253340"
          id="28253340"
          data-group="13"
          style={{ fill: 'red', stroke: 'black', strokeWidth: 0, opacity: 0.5 }}
        ></rect>
      </svg>
    </div>
  )
}

const CANVAS_SIZE = 657
const SLOT_SIZE = 10
const background = 'https://naverbooking-phinf.pstatic.net/20201007_220/1602053055804OStiU_PNG/image.png'

const fitSizesIntoCanvas = (img: HTMLImageElement, canvas: HTMLCanvasElement): Array<number> => {
  const imgRatio = img.height / img.width
  const canvasRatio = canvas.height / canvas.width
  let imageHeight = 0,
    imageWidth = 0,
    slotSize = 0

  if (imgRatio < canvasRatio) {
    imageWidth = canvas.width
    imageHeight = imageWidth * imgRatio
    slotSize = Math.floor(SLOT_SIZE / (img.width / CANVAS_SIZE))
  } else {
    imageHeight = canvas.height
    imageWidth = imageHeight / imgRatio
    slotSize = Math.floor(SLOT_SIZE / (img.height / CANVAS_SIZE))
  }
  return [imageWidth, imageHeight, slotSize]
}

export default Canvas
