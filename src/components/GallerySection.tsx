import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { X, ImageIcon } from "lucide-react";

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  label: `memory_${i + 1}.jpg`,
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
            {placeholders.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
                onClick={() => setLightbox(img.id)}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon className="w-10 h-10 mb-2 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-xs">{img.label}</span>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground font-mono text-xs mt-6">
            {"// Add your photos here — placeholders for now"}
          </p>
        </motion.div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-foreground">
            <X className="w-6 h-6" />
          </button>
          <div className="w-[80vw] max-w-lg aspect-square bg-card border border-border rounded-lg flex flex-col items-center justify-center">
            <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
            <span className="font-mono text-sm text-muted-foreground">memory_{lightbox + 1}.jpg</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
