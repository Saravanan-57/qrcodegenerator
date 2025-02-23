'use client'
import { QRCodeCanvas } from 'qrcode.react'
import { useState, useRef } from 'react'

function QrCodeForm() {
  const [text, setText] = useState('')
  const qrRef = useRef<HTMLDivElement>(null)

  const downloadQRCode = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas')
      if (canvas) {
        const url = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = url
        a.download = 'qrcode.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-clip-border">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-64 text-center"
      />
      {text && (
        <div className="mt-4" ref={qrRef}>
          <QRCodeCanvas value={text} size={200} />
        </div>
      )}
      {text && (
        <button
          onClick={downloadQRCode}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download QR Code
        </button>
      )}
    </div>
  )
}

export default QrCodeForm
