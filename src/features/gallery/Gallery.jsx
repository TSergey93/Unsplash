import { useState, useRef, Fragment } from 'react';
import { useScrollLock, useSearchParams, useScrollRequest } from '../../hooks';
import { fetchGallery } from '../../api/gallery';
import { SearchInput } from '../../components/searchInput';
import { PhotoViewer } from './components';
import {
  GalleryImage,
  GalleryWrapper,
  GalleryContainer,
  GallerySearchText,
  GalleryImageWrapper,
  GallerySearchInputWrapper,
} from './styled';
import { CLIENT_ID, EMPTY_ITEMS_PER_PAGE } from './constants';

const Gallery =  () => {
  const observeElementRef = useRef(null);
  const [searchParam] = useSearchParams();
  const toggleScrollLock = useScrollLock();

  const [selectedImage, setSelectedImage] = useState(null);

  const { isLoading, data: images, error: isEndOfData } = useScrollRequest(
    searchParam && fetchGallery,
    { id: CLIENT_ID, search: searchParam },
    observeElementRef,
  );

  // Определение количества пустых элементов в последней строке
  /* useEffect(() => {
    const fillEmptyItems = throttle(() => {
      if (galleryContainerRef.current && images.length > 0) {
        const containerWidth = galleryContainerRef.current.clientWidth;
        const firstImage = galleryContainerRef.current.children[0];
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
  }, [images]); */

  const handleOpenImage = image => {
    setSelectedImage(image);
    toggleScrollLock(true);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    toggleScrollLock(false);
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
              <GalleryContainer>
                {images.map(image => (
                  <GalleryImageWrapper
                    key={image.id}
                    onClick={() => handleOpenImage(image)}
                  >
                    <GalleryImage
                      alt={image.alt_description}
                      src={image.urls.regular}
                    />
                  </GalleryImageWrapper>
                ))}
                {!isEndOfData && Array.from({ length: EMPTY_ITEMS_PER_PAGE }).map((_, index) => (
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
          <div ref={observeElementRef} />
        </Fragment>
      )}
    </GalleryWrapper>
  );
};

export { Gallery };