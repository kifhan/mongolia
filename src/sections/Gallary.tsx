type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};
type GallaryProps = {
  images: GalleryImage[];
  setEnlargeItem?: (item: any) => void;
};
function Gallary({ images, setEnlargeItem }: GallaryProps) {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            표현이 풍부해져요
          </h2>
          <p className="text-gray-800">
            반강제로 문명사회와 거리두기 하면서 내면의 소리에 귀기울여 보세요
            (...ㅋㅋ)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
              onClick={() => {
                setEnlargeItem && setEnlargeItem(image);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-20 group-hover:translate-y-0 transition duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-center px-4 transform translate-y-20 group-hover:translate-y-0 transition duration-300">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallary;
