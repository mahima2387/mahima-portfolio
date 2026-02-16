import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { X } from "lucide-react";

// Images array pointing to your gallery folder
const images = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  src: `${import.meta.env.BASE_URL}gallery/memory_${i + 1}.jpg`,
  label: `Memory ${i + 1}`,
}));

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// gallery"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={() => setLightbox(img.id)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button 
            onClick={() => setLightbox(null)} 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-primary/50 shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;