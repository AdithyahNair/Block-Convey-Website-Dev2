import React from "react";

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm relative overflow-hidden hover:bg-gray-100 transition-colors duration-300 mx-4 my-3">
      {/* Interactive highlight effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/0 via-teal-100/20 to-teal-100/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Left accent bar - using teal/seafoam green color */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5e9b99]"></div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#5e9b99]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-medium">
              Support Block Convey on Product Hunt!
            </span>
            <span className="font-medium text-[#5e9b99]">Live NOW! 🚀</span>
          </div>

          {/* Product Hunt Badge - with enhanced clickable area */}
          <a
            href="https://www.producthunt.com/posts/prism-by-block-convey?utm_source=other&utm_medium=social"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center cursor-pointer z-10"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=953097&theme=light&t=1744595922977"
              alt="PRISM&#0032;by&#0032;Block&#0032;Convey - Monitor&#0032;models&#0044;&#0032;explain&#0032;decisions&#0044;&#0032;&#0038;&#0032;future&#0045;proof&#0032;models&#0046;"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
