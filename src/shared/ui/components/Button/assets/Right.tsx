import { FC } from 'react';
import '../button.css';

interface RightProps {
  className?: string
}

const Right: FC<RightProps> = ({ className }) => {

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Right arrow icon"
    >
      <mask id="mask0_2_39784" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2_39784)">
        <path
          d="M10.5 10L7.24999 6.75001C7.09722 6.59723 7.02083 6.40278 7.02083 6.16667C7.02083 5.93056 7.09722 5.73612 7.24999 5.58334C7.40277 5.43056 7.59722 5.35417 7.83333 5.35417C8.06944 5.35417 8.26388 5.43056 8.41666 5.58334L12.25 9.41667C12.3333 9.50001 12.3924 9.59028 12.4271 9.68751C12.4618 9.78473 12.4792 9.88889 12.4792 10C12.4792 10.1111 12.4618 10.2153 12.4271 10.3125C12.3924 10.4097 12.3333 10.5 12.25 10.5833L8.41666 14.4167C8.26388 14.5695 8.06944 14.6458 7.83333 14.6458C7.59722 14.6458 7.40277 14.5695 7.24999 14.4167C7.09722 14.2639 7.02083 14.0695 7.02083 13.8333C7.02083 13.5972 7.09722 13.4028 7.24999 13.25L10.5 10Z"
        />
      </g>
    </svg>
  )
}

export default Right
