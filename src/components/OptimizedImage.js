import { useState, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({ src, alt, className = '', style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div className={`optimized-image-wrapper ${className}`} style={style}>
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
        style={{ display: hasError ? 'none' : 'block' }}
      />
      {hasError && (
        <div className="image-error">Failed to load image</div>
      )}
    </div>
  );
};

export default OptimizedImage;
