import React, { useState, useRef, useEffect } from 'react';
import { Camera, X, Download, RefreshCw } from 'lucide-react';

interface SelfieCameraProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SelfieCamera({ isOpen, onClose }: SelfieCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/logo.png';
    img.onload = () => {
      logoRef.current = img;
    };
  }, []);

  useEffect(() => {
    if (isOpen && !photo) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [isOpen, photo]);

  const startCamera = async () => {
    setError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Não foi possível acessar a câmera. Verifique as permissões do seu navegador.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // We want the final image to be 3:4 aspect ratio to match the UI
      const targetRatio = 3 / 4;
      const videoRatio = video.videoWidth / video.videoHeight;
      
      let drawWidth = video.videoWidth;
      let drawHeight = video.videoHeight;
      let offsetX = 0;
      let offsetY = 0;
      
      if (videoRatio > targetRatio) {
        // Video is wider, crop sides
        drawWidth = video.videoHeight * targetRatio;
        offsetX = (video.videoWidth - drawWidth) / 2;
      } else {
        // Video is taller, crop top/bottom
        drawHeight = video.videoWidth / targetRatio;
        offsetY = (video.videoHeight - drawHeight) / 2;
      }
      
      canvas.width = drawWidth;
      canvas.height = drawHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Mirror the context to match the video scale-x-[-1]
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        
        // Draw video frame cropped
        ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight, 0, 0, drawWidth, drawHeight);
        
        // Reset transform for drawing the logo normally (not mirrored)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        // Draw logo
        if (logoRef.current) {
          const logoImg = logoRef.current;
          const logoWidth = canvas.width * 0.35;
          const logoHeight = logoImg.height * (logoWidth / logoImg.width);
          const logoX = canvas.width * 0.06;
          const logoY = canvas.height - logoHeight - (canvas.height * 0.06);
          
          // Add a subtle shadow to the logo for better visibility
          ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 4;
          
          ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
          
          // Reset shadow
          ctx.shadowColor = 'transparent';
        }
        
        // Get image data URL
        const dataUrl = canvas.toDataURL('image/png');
        setPhoto(dataUrl);
        stopCamera();
      }
    }
  };

  const retakePhoto = () => {
    setPhoto(null);
  };

  const downloadPhoto = () => {
    if (photo) {
      const a = document.createElement('a');
      a.href = photo;
      a.download = 'MaryMake-Selfie.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-dark/95 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md glass rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(238,43,140,0.2)] border border-primary/20 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Selfie MaryMake
          </h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Camera/Photo Area */}
        <div className="relative aspect-[3/4] bg-black w-full overflow-hidden flex items-center justify-center">
          {error ? (
            <div className="text-center p-6">
              <p className="text-red-400 text-sm mb-4">{error}</p>
              <button 
                onClick={startCamera}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          ) : photo ? (
            <img src={photo} alt="Sua Selfie MaryMake" className="w-full h-full object-cover" />
          ) : (
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover scale-x-[-1]" // Mirror effect
            />
          )}
          
          {/* Hidden canvas for processing */}
          <canvas ref={canvasRef} className="hidden" />
          
          {/* Overlay Logo (when camera is active) */}
          {!photo && !error && (
            <div className="absolute bottom-[6%] left-[6%] w-[35%] z-10 pointer-events-none">
              <img src="/logo.png" alt="MaryMake Logo" className="w-full h-auto drop-shadow-md" />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="p-6 flex justify-center gap-4 bg-surface-dark/50">
          {photo ? (
            <>
              <button 
                onClick={retakePhoto}
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Tirar Outra
              </button>
              <button 
                onClick={downloadPhoto}
                className="flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(238,43,140,0.4)]"
              >
                <Download className="w-5 h-5" />
                Baixar
              </button>
            </>
          ) : (
            <button 
              onClick={takePhoto}
              disabled={!!error}
              className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="w-16 h-16 rounded-full bg-primary group-hover:scale-95 transition-transform flex items-center justify-center shadow-[0_0_20px_rgba(238,43,140,0.5)]">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
