const VideoBackground = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{}}>
      <div className="absolute inset-0 overflow-hidden">
        <video loop muted autoPlay className="w-full h-full object-cover">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/20220704mongolia_milkyway_timelapse.mp4?alt=media&token=44d68ed8-1872-4385-8b66-40a30f1011f0"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20">
        <h1 className="text-2xl font-bold mb-4">
          늦은 밤에 눈을 감으면 떠오르는 풍경이 있으신가요?
        </h1>
        <p className="text-md mb-8">
          이후의 삶은 조금은 다채롭고, 분명히 달라질거에요
        </p>
      </div>
    </div>
  );
};

export default VideoBackground;
