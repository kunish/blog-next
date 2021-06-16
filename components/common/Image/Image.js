import ImageComponent from "next/image";
import "lazysizes";

export function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <ImageComponent
        className={`lazyload blur ${className}`}
        alt={alt}
        src={previewSrc}
      />
    </picture>
  );
}
