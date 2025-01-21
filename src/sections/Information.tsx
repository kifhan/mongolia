import { FaInstagram, FaBloggerB } from "react-icons/fa";

function Information() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto py-16 max-w-sm">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-2">안녕!</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 px-3 mb-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/happysaeamap.appspot.com/o/1656958056315.jpg?alt=media&token=a92b65f6-91c9-485a-aa91-4c856fa45c8f"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-center items-center">
              {/*  */}
              <p className="text-gray-600">햎새투어에서 만나요!</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center">
          <div className="flex flex-col gap-4 items-start">
            <div className=" flex justify-center items-center">
              <a
                href="https://www.youtube.com/happysaea/" // Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
                aria-label="youtube"
              >
                <img
                  src="/img/happysaea.jpg"
                  className="rounded-full w-14 h-14"
                />
                <span className="text-bold">해피새아 유튜브</span>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a
                href="https://www.instagram.com/happysaea" // Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
                aria-label="youtube"
              >
                <FaInstagram className="h-12 w-12" />
                <span className="text-bold">해피새아 인스타그램</span>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a
                href="https://blog.naver.com/happysaea" // Replace with your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
                aria-label="youtube"
              >
                <FaBloggerB className="h-12 w-12" />
                <span className="text-bold">해피새아 블로그</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col justify-center items-center">
          <p className="text-gray-400 text-sm mb-4">
            &copy; {new Date().getFullYear()} GrumpyDarter. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/grumpydarter/" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-800 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://blog.naver.com/kyzan/222826154328" // Replace with your Blog link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
              aria-label="Blog"
            >
              <FaBloggerB className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Information;
