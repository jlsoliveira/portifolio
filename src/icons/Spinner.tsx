export function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="30"
      height="30"
    >
      <g>
        <path
          stroke="none"
          fill="currentColor"
          d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        >
          <animateTransform
            values="0 50 51;360 50 51"
            keyTimes="0;1"
            repeatCount="indefinite"
            dur="1s"
            type="rotate"
            attributeName="transform"
          ></animateTransform>
        </path>
        <g></g>
      </g>
    </svg>
  );
}
