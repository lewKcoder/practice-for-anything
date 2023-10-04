import { FunctionComponent } from "react";

export const Doraggable: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="aa">345643212</div>
      <div className="bb">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=""
          height="832"
          viewBox="0 0 564 832"
          fill="none"
        >
          <g filter="url(#filter0_d_1377_94)">
            <path
              d="M12 24C12 10.7452 22.7452 0 36 0H602V832H36C22.7452 832 12 821.255 12 808V444.314C12 442.192 12.8429 440.157 14.3431 438.657L17.6569 435.343C19.1571 433.843 20 431.808 20 429.686V404.314C20 402.192 19.1571 400.157 17.6569 398.657L14.3431 395.343C12.8429 393.843 12 391.808 12 389.686V24Z"
              fill="#151917"
            />
            <path
              d="M12.5 24C12.5 11.0213 23.0213 0.5 36 0.5H601.5V831.5H36C23.0213 831.5 12.5 820.979 12.5 808V444.314C12.5 442.325 13.2902 440.417 14.6967 439.01L18.0104 435.697C19.6045 434.103 20.5 431.941 20.5 429.686V404.314C20.5 402.059 19.6045 399.897 18.0104 398.303L14.6967 394.99C13.2902 393.583 12.5 391.675 12.5 389.686V24Z"
              stroke="#242D2A"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1377_94"
              x="0"
              y="-8"
              width="606"
              height="848"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1377_94"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1377_94"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          width: 100%;
        }
        .aa {
          background: #9c9c9c;
          width: 100%;
        }
        .bb {
          width: 100%;
          box-shadow: -3px 0px 9px;
        }
      `}</style>
    </div>
  );
};
