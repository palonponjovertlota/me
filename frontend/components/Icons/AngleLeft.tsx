import React from 'react'

const AngleLeft: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...other
}) => (
  <svg
    className={`tw-fill-current ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
    />
  </svg>
)

export default AngleLeft