import { PhotoViewerClose, PhotoViewerImage, PhotoViewerOverlay } from './styled';

const PhotoViewer = ({ image: { alt_description, urls: { full: imageSrc } }, onClose }) => {
  return (
    <PhotoViewerOverlay>
      <PhotoViewerImage alt={alt_description} src={imageSrc} />
      <PhotoViewerClose onClick={onClose} />
    </PhotoViewerOverlay>
  );
};

export { PhotoViewer };