import React from "react";

function DetailUser() {
  return (
    <main className="overflow-hidden w-max">
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <i className="bx bxs-user-detail bx-sm"></i>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn bg-kuningMawa1 text-black hover:bg-biruMawa2 border-none">
              Close!
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailUser;
