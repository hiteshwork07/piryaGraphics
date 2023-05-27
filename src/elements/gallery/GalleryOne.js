import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FiPlay, FiZoomIn, FiFolderPlus } from "react-icons/fi";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function GalleryOne({ galleryItem, popupLink }) {
  const { image, subCategoryImage, subCategory } = galleryItem;
    const [loadingContext,setLoadingContext]=useState(true)
  const iconHandel = () => {
    if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <FiFolderPlus />;
        }
        return <FiFolderPlus />;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <FiPlay />;
      } else {
        return <FiZoomIn />;
      }
    } else {
      return <FiZoomIn />;
    }
  };
  const [toggler, setToggler] = useState(false);
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div style={{height : "100%"}} className="rn-gallery icon-center">
      <div style={{height : "100%"}} className="thumbnail">
       {loadingContext &&<Skeleton count={1} style={{height : '25rem'}} className="radius-small"/>}
        <img
        onLoad={() => setLoadingContext(false)}
        style={{height : "100%", objectFit :"cover" ,display: loadingContext?'none':'block'}}
          className="radius-small"
          src={
            `${process.env.REACT_APP_BASE_URL}${subCategoryImage}`
          }
          alt={subCategory}
        />
      </div>
      <div className="video-icon">
        <button
          className="btn-default rounded-player sm-size"
          onClick={() => setToggler(!toggler)}
        >
          <span>{iconHandel()}</span>
        </button>
      </div>
      <FsLightbox toggler={toggler} sources={popupLink} />
    </div>
    </SkeletonTheme>
  );
}
export default GalleryOne;
