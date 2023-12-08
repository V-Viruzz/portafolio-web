import { type SVGProps } from "react"

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 2a1 1 0 0 1 0 2H4v8h8v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1Zm10-1v4.998a1 1 0 1 1-2 0V4.414L8.716 8.698a1 1 0 1 1-1.414-1.414L11.585 3h-1.59a1 1 0 0 1 0-2H15Z"
    />
  </svg>
)
export default ExternalLinkIcon
