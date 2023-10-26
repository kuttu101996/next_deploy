import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const page3 = () => {
  // const notify = () => {
  //   toast("Default Notification !");

  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });

  //   toast.error("Error Notification !", {
  //     position: toast.POSITION.TOP_LEFT,
  //   });

  //   toast.warn("Warning Notification !", {
  //     position: toast.POSITION.BOTTOM_LEFT,
  //   });

  //   toast.info("Info Notification !", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //   });

  //   toast("Custom Style Notification with css class!", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //     className: "foo-bar",
  //   });
  // };

  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <button onClick={notify}>Notify</button>
      <ToastContainer limit={2} newestOnTop={false} />
    </>
  );
};
