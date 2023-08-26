import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
    return (
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="text-sm  mx-auto md:mt-16"
            />
    );
}


export default ToastNotification;