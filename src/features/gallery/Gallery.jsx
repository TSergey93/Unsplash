import { useState, useEffect, useRef, Fragment } from 'react';
import { throttle } from 'lodash';
import { useSearchParams, useScrollRequest } from '../../hooks';
import { fetchGallery } from '../../api/gallery';
import { PhotoViewer } from '../../components/photoViewer';
import { SearchInput } from '../../components/searchInput';
import {
  GalleryImage,
  GalleryWrapper,
  GalleryContainer,
  GallerySearchText,
  GalleryImageWrapper,
  GallerySearchInputWrapper,
} from './styled';
import { CLIENT_ID } from './constants';
import { getScrollbarWidth } from "./utils";

const Gallery =  () => {
  const galleryWrapperRef = useRef(null);
  const [searchParam] = useSearchParams();

  const [selectedImage, setSelectedImage] = useState(null);
  const [missingItemsCount, setMissingItemsCount] = useState(0);

  const { isLoading, data: images } = useScrollRequest(
    searchParam && fetchGallery,
    { id: CLIENT_ID, search: searchParam },
  );

  // Определение количества пустых элементов в последней строке
  useEffect(() => {
    const fillEmptyItems = throttle(() => {
      if (galleryWrapperRef.current && images.length > 0) {
        const containerWidth = galleryWrapperRef.current.clientWidth;
        const firstImage = galleryWrapperRef.current.children[0];
        const firstImageWidth = firstImage.getBoundingClientRect().width;

        const itemsPerRow = Math.floor(containerWidth / firstImageWidth);
        const filledItemsInLastRow = images.length % itemsPerRow;

        setMissingItemsCount(filledItemsInLastRow === 0 ? 0 : itemsPerRow - filledItemsInLastRow);
      }
    }, 100);

    fillEmptyItems();

    window.addEventListener('resize', fillEmptyItems);

    return () => {
      window.removeEventListener('resize', fillEmptyItems);
    };
  }, [images]);

  const handleOpenImage = (image) => {
    const scrollbarWidth = getScrollbarWidth();
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  };

  return (
    <GalleryWrapper>
      <GallerySearchInputWrapper isRaised={!!searchParam}>
        <SearchInput placeholder='Телефоны, яблоки, груши...' />
      </GallerySearchInputWrapper>
      {searchParam && !isLoading && (
        <Fragment>
          {images.length === 0 ? (
            <GallerySearchText>К сожалению, поиск не дал результатов</GallerySearchText>
          ) : (
            <Fragment>
              <GalleryContainer ref={galleryWrapperRef}>
                {images.map(image => (
                  <GalleryImageWrapper
                    key={image.id}
                    onClick={() => handleOpenImage(image)}
                  >
                    <GalleryImage
                      alt={image.alt_description}
                      src={image.user.profile_image.large}
                    />
                  </GalleryImageWrapper>
                ))}
                {Array.from({length: missingItemsCount}).map((_, index) => (
                  <GalleryImageWrapper key={index}/>
                ))}
              </GalleryContainer>
              {selectedImage && (
                <PhotoViewer
                  image={selectedImage}
                  onClose={handleCloseImage}
                />
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </GalleryWrapper>
  );
};

export { Gallery };