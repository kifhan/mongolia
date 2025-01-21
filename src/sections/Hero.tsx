const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/img/20220701170857_IMG_8342.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20">
        <h1 className="text-4xl font-bold mb-4">
          초원, 은하수, 무지개, 그리고 몽골
        </h1>
        <p className="text-lg mb-8">
          마음 속 풍경의 문이 열리는 경험을 해보세요
        </p>
        <button
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 opacity-60"
          onClick={() => {
            window.open("https://m.blog.naver.com/happysaea/222701135143");
          }}
        >
          햎새투어 몽골 자세히 보기
        </button>
      </div>
    </div>
  );
};

export default Hero;
