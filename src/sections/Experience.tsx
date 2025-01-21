import React from "react";

type ExperienceItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type Props = {
  setEnlargeItem?: (item: ExperienceItem) => void;
};

const experienceItems: ExperienceItem[] = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/1656958023910.jpg?alt=media&token=91fd673b-4144-409a-9951-a3c05bb890dd",
    alt: "광활한 사막",
    title: "광활한 사막",
    description: "파도 같고, 산 같은, 비현실적인 뷰",
  },
  {
    src: "/img/20220626191050_IMG_7003.jpg",
    alt: "드넓은 초원",
    title: "드넓은 초원",
    description: "끝없이 펼쳐진 초원의 아름다움",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/20220629220939_IMG_8129.jpg?alt=media&token=5cfae930-6d36-4c8c-88df-ba13a5f931b2",
    alt: "여행 = 사람",
    title: "여행 = 사람",
    description:
      "서로 다르지만 다같이 어울리고 즐거워 하는 모습에서 여행객이 아닌 친구가 되는 것을 느꼈어요",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/1656958012455.jpg?alt=media&token=1ced6c18-28cb-4c4e-8f0f-cf65c70d6f7f",
    alt: "별보기",
    title: "별보기",
    description: "밤하늘에 쏟아지는 별을 보면 다른 세계에 온것 같은 느낌!",
  },
];

const Experience = ({ setEnlargeItem }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto py-16 max-w-3xl">
        <h2 className="text-amber-700 text-3xl font-bold mb-8 text-center">
          몽골에서만 할 수 있는 특별한 경험들
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
          {experienceItems.map((item) => (
            <div
              key={item.src} // Key prop added for efficient rendering
              onClick={() => {
                if (setEnlargeItem) setEnlargeItem(item);
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" // Added cursor-pointer
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
