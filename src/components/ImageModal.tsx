type Props = {
    item: {
      src: string;
      alt: string;
      title: string;
    } | null;
    closeModal: () => void;
  };
  export default function ImageModal({ item, closeModal }: Props) {
    if (!item) {
      return <></>;
    }
  
    return (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
        onClick={closeModal}
      >
        <div className="relative max-w-4xl max-h-svh mx-auto pt-14 px-6">
          {" "}
          {/* Added max-width and max-height */}
          <button
            className="absolute top-2 right-4 text-white text-3xl z-10 hover:text-gray-300"
            onClick={closeModal}
          >
            &times; {/* Close button */}
          </button>
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-full object-contain"
            style={{
              height: "calc(100vh - 150px)",
            }}
          />{" "}
          {/* object-contain prevents image from overflowing */}
          <p className="text-white text-center mt-4">{item.title}</p>
        </div>
      </div>
    );
  }
  