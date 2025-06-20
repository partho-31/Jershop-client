import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const ActivateAcc = () => {
const {uid,token} = useParams() 
const {activeAccViaEmail} = useAuthContext()
  useEffect(() => {
    const res = activeAccViaEmail(uid,token)
    console.log(res)
    document.getElementById("my_modal_3").showModal();

  }, [uid,token,activeAccViaEmail]);


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <Link to="/login"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button></Link>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Your Account is active now.Please login!</p>
        </div>
      </dialog>
    </div>
  );
};

export default ActivateAcc;