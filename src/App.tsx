import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Information from "./sections/Information";
import Gallary from "./sections/Gallary";
import VideoBackground from "./sections/VideoBackground";
import ImageModal from "./components/ImageModal";

const Colors = {
  primary: "#2A9D8F",
  secondary: "#E9C46A",
  accent: "#F4F1DE",
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [enlargeItem, setEnlargeItem] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  const closeModal = () => {
    if (!enlargeItem) return;
    setEnlargeItem(null);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleWheel = (e: Event) => {
      // e.preventDefault();
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white py-4 opacity-90 absolute top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center max-w-3xl px-2">
          <a href="#" className="text-teal-800 text-xl font-bold">
            HappySaea Mongolia
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#experience"
                className={`text-teal-800 hover:text-gray-300 ${
                  activeSection === "experience" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("experience")}
              >
                경험
              </a>
            </li>
            <li>
              <a
                href="#gallary"
                className={`text-teal-800 hover:text-gray-300 ${
                  activeSection === "gallary" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("gallary")}
              >
                그림
              </a>
            </li>
            <li>
              <a
                href="#information"
                className={`text-teal-800 hover:text-gray-300 ${
                  activeSection === "information" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("information")}
              >
                정보
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="home">
        <Hero />
      </div>
      <div id="experience">
        <Experience setEnlargeItem={setEnlargeItem} />
      </div>
      <div id="gallary">
        <Gallary
          setEnlargeItem={setEnlargeItem}
          images={[
            {
              src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/IMG_20220722_110545_2-013.jpeg?alt=media&token=f08e7f40-44c1-465a-a45c-3616f93de6b9",
              alt: "",
              title: "다이어리 쓰기",
              description: "",
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/IMG_20220722_110545_2-012.jpeg?alt=media&token=7fb29657-69fc-4e42-9472-c78a98abf9a0",
              alt: "",
              title: "마을 꼬마와 공놀이",
              description: "",
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/original_544559f3-3712-44b1-afd7-11e93a6e0ba3_20220726_184444.jpg?alt=media&token=1215935b-f148-4942-9752-569c985e123f",
              alt: "",
              title: "독수리 조련 체험하는 새아",
              description: "",
            },
          ]}
        />
      </div>
      <div>
        <VideoBackground />
      </div>
      <div id="information">
        <Information />
      </div>

      <ImageModal item={enlargeItem} closeModal={closeModal} />
    </div>
  );
};

export default App;
