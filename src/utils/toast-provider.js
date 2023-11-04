import { ToastContainer, toast as Toaster } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterProvider = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export { ToasterProvider, Toaster };
