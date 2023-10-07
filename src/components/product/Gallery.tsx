
interface GalleryProp {
  gallery_images: any;
  baseUrl: string;
  width: number
}

const Gallery = ({ gallery_images, baseUrl, width }: GalleryProp) => {

  return (
    <section>
      <div
        className={`flex mb-[120px] h-fit max-w-[1110px] flex-col gap-5 max-md:items-center max-md:justify-center
       md:grid md:grid-cols-2 md:place-items-center md:gap-3
        lg:mx-auto lg:w-[800px] lg:gap-5 xl:gap-x-[50px]`}
      >
        {gallery_images.map((image: any, index: number) => {
          return (
            <div
              className={`${
                index < 2
                  ? "h-[174px]"
                  : "h-[368px] md:col-start-2 md:col-end-[-1] md:row-start-1 md:row-end-3"
              } w-full rounded-lg bg-cover max-lg:max-w-[380px]`}
              style={{
                backgroundImage: `url(${
                  baseUrl +
                  (width < 768
                    ? image.attributes.mobile.data.attributes.url
                    : width < 1110
                    ? image.attributes.tablet.data.attributes.url
                    : image.attributes.desktop.data.attributes.url)
                })`,
              }}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
