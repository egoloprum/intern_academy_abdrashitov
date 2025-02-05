import { FC } from 'react'

interface HeroBackgroundProps {
  className: string
}

const HeroBackground: FC<HeroBackgroundProps> = ({className}) => {
  return (
    <svg className={`${className} heroBackgroundSvg`} width="100%" height="100%" viewBox="0 0 1363 965" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dddddf_0_1)">
        <path d="M253.17 503.519C221.187 487.92 162.374 474.963 128.728 486.548C95.0819 498.133 67.4163 522.61 51.817 554.593C36.2178 586.576 33.9627 623.446 45.5479 657.092C57.1331 690.738 103.553 729.106 135.536 744.705C117.14 661.306 175.885 548.372 253.17 503.519Z" fill="url(#paint0_linear_0_1)"/>
        <path d="M131.658 495.058C146.378 489.989 167.726 490.064 190.122 493.722C205.633 496.255 220.981 500.395 233.969 505.174C199.731 529.365 170.287 565.75 150.417 605.644C130.928 644.772 120.198 688.199 123.843 727.821C112.412 720.627 100.161 711.363 88.999 701.054C72.3288 685.658 59.1261 668.882 54.0576 654.162C43.2495 622.773 45.3533 588.376 59.9062 558.538C74.4591 528.7 100.269 505.866 131.658 495.058Z" stroke="#6B71EB" strokeWidth="18"/>
      </g>
      <g filter="url(#filter1_dddddf_0_1)">
        <path d="M1127.19 205C1097.2 236.501 1102.43 264.796 1121.93 281.293C1166.93 313.001 1206.35 313.001 1280.95 313.001C1307.93 313.001 1332.68 296.293 1332.68 281.293C1332.68 266.293 1316.18 244.062 1292.94 239.5C1184.93 218.293 1151.18 220.543 1127.19 205Z" fill="url(#paint1_linear_0_1)"/>
        <path d="M1126.22 275.754C1117.91 268.626 1113 259.354 1113 248.775C1113 239.012 1117.19 227.147 1128.56 213.911C1140.9 220.434 1155.75 223.53 1177.44 227.037C1183.24 227.974 1189.58 228.946 1196.56 230.016C1219.8 233.58 1250.18 238.238 1291.6 246.369C1301.42 248.299 1310.06 254.033 1316.26 261.102C1322.6 268.319 1325.68 276.049 1325.68 281.293C1325.68 285.115 1322.11 291.209 1313.19 296.858C1304.71 302.223 1293.07 306.001 1280.95 306.001C1206.16 306.001 1169.02 305.809 1126.22 275.754Z" stroke="#6B71EB" strokeWidth="14"/>
      </g>
      <path d="M287.358 607.749C291.98 626.495 308.373 641.489 334.263 652.5C360.144 663.507 395.421 670.489 437.617 673.264C522.001 678.812 633.936 667.522 753.411 638.066C872.885 608.609 977.239 566.573 1049.37 522.435C1085.44 500.364 1113.43 477.783 1131.23 456.008C1149.04 434.224 1156.58 413.328 1151.96 394.582C1147.34 375.836 1130.94 360.842 1105.05 349.831C1079.17 338.824 1043.89 331.842 1001.7 329.067C917.315 323.519 805.38 334.808 685.905 364.265C566.43 393.721 462.076 435.758 389.942 479.896C353.872 501.967 325.884 524.547 308.085 546.323C290.28 568.107 282.736 589.003 287.358 607.749Z" stroke="url(#paint2_angular_0_1)" strokeOpacity="0.8" />
      <path d="M305.911 665.655C313.044 683.597 331.327 696.217 358.477 703.598C385.616 710.976 421.515 713.087 463.695 710.086C548.049 704.085 657.402 677.65 771.749 632.19C886.096 586.73 983.749 530.867 1049.2 477.312C1081.92 450.533 1106.57 424.349 1121.24 400.352C1135.91 376.345 1140.54 354.616 1133.4 336.674C1126.27 318.733 1107.99 306.112 1080.84 298.731C1053.7 291.354 1017.8 289.243 975.621 292.243C891.267 298.244 781.914 324.68 667.567 370.14C553.22 415.6 455.567 471.463 390.119 525.017C357.392 551.797 332.742 577.98 318.076 601.978C303.405 625.985 298.779 647.713 305.911 665.655Z" stroke="url(#paint3_angular_0_1)" strokeOpacity="0.8"/>
      <g filter="url(#filter2_dddddf_0_1)">
        <mask id="mask0_0_1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="350" y="195" width="564" height="479">
          <path d="M679.872 570.129C661.592 551.849 624.582 513.662 581.234 468.935C526.647 412.611 462.01 345.918 412.067 295.547C496.589 366.917 565.682 421.081 621.428 458.434C656.037 481.625 685.595 498.398 710.573 508.783C735.503 519.147 756.176 523.277 772.891 520.789C789.826 518.268 802.378 509 810.933 493.442C819.398 478.048 823.941 456.538 825.322 429.317C827.709 382.247 820.672 317.118 806.919 234.628C812.436 250.932 818.678 269.066 825.265 288.205C832.968 310.585 841.144 334.339 849.188 358.148C870.293 420.617 890.484 483.452 899.067 523.381C907.695 563.516 913.203 600.745 909.713 627.835C907.972 641.353 904.031 651.985 897.461 659.212C890.981 666.34 881.63 670.5 868.25 670.5C794.957 670.5 732.556 622.813 679.872 570.129Z" fill="url(#paint4_linear_0_1)" stroke="#3F81DB" strokeWidth="6"/>
        </mask>
        <g mask="url(#mask0_0_1)">
          <g filter="url(#filter3_dddddf_0_1)">
            <path d="M350.225 238.5C417.725 302.25 625.231 519.505 677.975 572.25C730.72 624.995 793.883 673.5 868.475 673.5C924.726 673.5 919.477 603 902.225 522.75C884.974 442.5 821.223 270.75 797.223 195C860.563 610.107 785.264 618.37 350.225 238.5Z" fill="url(#paint5_linear_0_1)"/>
            <path d="M693.885 556.34C680.08 542.535 655.052 516.812 624.494 485.306C648.711 500.811 670.683 513.033 690.498 521.727C716.52 533.145 740.925 539.428 762.835 537.257C786.276 534.934 804.77 523.118 817.309 503.433C829.075 484.963 835.071 460.494 837.682 432.423C838.895 419.378 839.418 405.011 839.307 389.344C857.188 443.115 873.027 493.98 880.228 527.479C888.87 567.681 893.614 601.932 890.598 625.344C889.117 636.84 886.072 642.999 883.257 646.095C881.127 648.438 877.415 651 868.475 651C803.627 651 746.175 608.63 693.885 556.34Z" stroke="#3F81DB" strokeWidth="45"/>
          </g>
        </g>
      </g>
      <g filter="url(#filter4_d_0_1)">
        <path fillRule="evenodd" clipRule="evenodd" d="M998 291C1005.63 291 1010 286.627 1010 279C1010 286.627 1014.37 291 1022 291C1014.37 291 1010 295.373 1010 303C1010 295.373 1005.63 291 998 291Z" fill="white"/>
      </g>
      <g filter="url(#filter5_d_0_1)">
        <path fillRule="evenodd" clipRule="evenodd" d="M438 674C445.627 674 450 669.627 450 662C450 669.627 454.373 674 462 674C454.373 674 450 678.373 450 686C450 678.373 445.627 674 438 674Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_dddddf_0_1" x="2.45882" y="446.321" width="533.711" height="518.384" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="8" dy="6"/>
          <feGaussianBlur stdDeviation="11.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.443137 0 0 0 0 0.921569 0 0 0 0.82 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="34" dy="24"/>
          <feGaussianBlur stdDeviation="20.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.443137 0 0 0 0 0.921569 0 0 0 0.72 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="76" dy="53"/>
          <feGaussianBlur stdDeviation="28"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.443137 0 0 0 0 0.921569 0 0 0 0.42 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="135" dy="95"/>
          <feGaussianBlur stdDeviation="33"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.443137 0 0 0 0 0.921569 0 0 0 0.12 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_0_1" result="effect4_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="211" dy="148"/>
          <feGaussianBlur stdDeviation="36"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.419608 0 0 0 0 0.443137 0 0 0 0 0.921569 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow_0_1" result="effect5_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_0_1" result="shape"/>
          <feGaussianBlur stdDeviation="17.8896" result="effect6_foregroundBlur_0_1"/>
        </filter>
        <filter id="filter1_dddddf_0_1" x="1037" y="175" width="325.677" height="245.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-2" dy="3"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.482353 0 0 0 0 0.913725 0 0 0 0.98 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-7" dy="13"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.482353 0 0 0 0 0.913725 0 0 0 0.85 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-15" dy="29"/>
          <feGaussianBlur stdDeviation="10"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.482353 0 0 0 0 0.913725 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-27" dy="52"/>
          <feGaussianBlur stdDeviation="11.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.482353 0 0 0 0 0.913725 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_0_1" result="effect4_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-43" dy="81"/>
          <feGaussianBlur stdDeviation="13"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.482353 0 0 0 0 0.913725 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow_0_1" result="effect5_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_0_1" result="shape"/>
          <feGaussianBlur stdDeviation="15" result="effect6_foregroundBlur_0_1"/>
        </filter>
        <filter id="filter2_dddddf_0_1" x="-83.2751" y="-406.5" width="1037.55" height="1110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-12" dy="-18"/>
          <feGaussianBlur stdDeviation="23.25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.505882 0 0 0 0 0.858824 0 0 0 0.98 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-45" dy="-72"/>
          <feGaussianBlur stdDeviation="42.75"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.505882 0 0 0 0 0.858824 0 0 0 0.85 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-102" dy="-163.5"/>
          <feGaussianBlur stdDeviation="57.75"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.505882 0 0 0 0 0.858824 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-181.5" dy="-289.5"/>
          <feGaussianBlur stdDeviation="68.25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.505882 0 0 0 0 0.858824 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_0_1" result="effect4_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-283.5" dy="-451.5"/>
          <feGaussianBlur stdDeviation="75"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.505882 0 0 0 0 0.858824 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow_0_1" result="effect5_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_0_1" result="shape"/>
          <feGaussianBlur stdDeviation="15" result="effect6_foregroundBlur_0_1"/>
        </filter>
        <filter id="filter3_dddddf_0_1" x="5.22491" y="-243" width="983.775" height="991.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-9" dy="-13.5"/>
          <feGaussianBlur stdDeviation="17.25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.431373 0 0 0 0 0.741176 0 0 0 0.67 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-37.5" dy="-52.5"/>
          <feGaussianBlur stdDeviation="32.25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.431373 0 0 0 0 0.741176 0 0 0 0.58 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-84" dy="-117"/>
          <feGaussianBlur stdDeviation="42.75"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.431373 0 0 0 0 0.741176 0 0 0 0.34 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_0_1" result="effect3_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-148.5" dy="-208.5"/>
          <feGaussianBlur stdDeviation="51"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.431373 0 0 0 0 0.741176 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_0_1" result="effect4_dropShadow_0_1"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-232.5" dy="-325.5"/>
          <feGaussianBlur stdDeviation="56.25"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.431373 0 0 0 0 0.741176 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow_0_1" result="effect5_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_0_1" result="shape"/>
          <feGaussianBlur stdDeviation="37.5" result="effect6_foregroundBlur_0_1"/>
        </filter>
        <filter id="filter4_d_0_1" x="986" y="267" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <filter id="filter5_d_0_1" x="426" y="650" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_0_1" x1="64" y1="519" x2="280.264" y2="562.314" gradientUnits="userSpaceOnUse">
          <stop offset="0.03" stopColor="#F5C887"/>
          <stop offset="0.3" stopColor="#F592BD"/>
          <stop offset="0.601154" stopColor="#6E92EC"/>
          <stop offset="1" stopColor="#6B71EB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_0_1" x1="1373" y1="327.5" x2="1202.5" y2="363.592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B71EB"/>
          <stop offset="0.433913" stopColor="#6E92EC"/>
          <stop offset="0.497719" stopColor="#F592BD"/>
          <stop offset="1" stopColor="#F5C887"/>
        </linearGradient>
        
        {/* <radialGradient id="paint2_angular_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.658 501.165) rotate(76.5122) scale(115.085 423.856)">
          <stop offset="0" stopColor="white"/>
          <stop offset="0.482915" stopColor="#999999" stopOpacity="0"/>
        </radialGradient> */}
        <radialGradient id="paint2_angular_0_1" cx="50%" cy="50%" r="150%" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="white" />
          <stop offset="0.482915" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* <radialGradient id="paint3_angular_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.658 501.165) rotate(68.6813) scale(115.085 423.856)">
          <stop stopColor="white"/>
          <stop offset="0.482915" stopColor="#999999" stopOpacity="0"/>
        </radialGradient> */}
        <radialGradient id="paint3_angular_0_1" cx="50%" cy="50%" r="150%" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="white" />
          <stop offset="0.482915" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="paint4_linear_0_1" x1="889.248" y1="704.903" x2="889.248" y2="423.653" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2FFFF"/>
          <stop offset="0.25" stopColor="#B8F5F5"/>
          <stop offset="0.559" stopColor="#5CCAF9"/>
          <stop offset="1" stopColor="#2A76DD"/>
        </linearGradient>
        <linearGradient id="paint5_linear_0_1" x1="889.473" y1="704.903" x2="889.473" y2="423.653" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2FFFF"/>
          <stop offset="0.25" stopColor="#B8F5F5"/>
          <stop offset="0.559" stopColor="#5CCAF9"/>
          <stop offset="1" stopColor="#2A76DD"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default HeroBackground
