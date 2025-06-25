import { PhotoViewerClose, PhotoViewerImage, PhotoViewerOverlay } from './styled';

const PhotoViewer = ({ image: { alt_description, user: { profile_image } }, onClose }) => {
  return (
    <PhotoViewerOverlay>
      <PhotoViewerImage alt={alt_description} src={profile_image.large} />
      <PhotoViewerClose onClick={onClose} />
    </PhotoViewerOverlay>
  );
};

export { PhotoViewer };