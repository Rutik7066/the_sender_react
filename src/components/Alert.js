export function PendingAlert() {
  return (
    <div
      className="bg-blue-100 rounded-md shadow-lg py-3 px-6  text-base text-blue-700 inline-flex items-center w-fit mx-3"
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="info-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
        ></path>
      </svg>
      Campaign Submiting.....
    </div>
  );
}

export function Submited() {
  return (
    <div
      className="bg-green-100 rounded-md shadow-lg py-3 px-6  text-base text-green-700 inline-flex items-center w-fit mx-3"
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
        ></path>
      </svg>
      Campiagn Submited.
    </div>
  );
}

function ErrorAlert() {
  return (
    <div
      className="bg-red-100 rounded-md shadow-lg py-3 px-6  text-base text-red-700 inline-flex items-center w-fit mx-3"
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
        ></path>
      </svg>
      Failed to Submit.
    </div>
  );
}

export default ErrorAlert;
