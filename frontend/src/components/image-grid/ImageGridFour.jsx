import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGridFour = () => {
  return (
    <Gallery>
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        {/* <!--Simple Image--> */}
        <div className="ptf-simple-image">
          <Item
            original="assets/img/service-detail.png"
            thumbnail="assets/img/service-detail.png"
            width={1520}
            height={760}
          >
            {({ ref, open }) => (
              <img
                src="assets/img/service-detail.png"
                alt="service"
                role="button"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </div>
    </Gallery>
  );
};

export default ImageGridFour;
