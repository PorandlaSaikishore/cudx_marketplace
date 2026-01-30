import { useNavigate } from "react-router-dom";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  type,
  enableSigninButton,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white rounded-lg shadow-lg  p-10 relative transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-center items-center gap-7">
          {type === "signup" ? (
            <button
              onClick={onClose}
              className=" cursor-pointer px-4 py-2 bg-white-500 text-black border rounded hover:bg-blue-900 hover:text-white"
            >
              Sign up
            </button>
          ) : (
            <></>
          )}
          {type === "signin" ? (
            <a
              href="/contribute-data"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-4 py-2 bg-blue-900 text-white border rounded"
            >
              Sign in
            </a>
          ) : (
            <></>
          )}
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
