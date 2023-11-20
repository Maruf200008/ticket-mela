"use client";
import { RxCross2 } from "react-icons/rx";

export default function TrailerModal() {
  return (
    <div>
      {/* Main modal */}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className=" flex  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content  */}
          <div className="relative bg-primary rounded-lg shadow-2xl overflow-hidden ">
            {/* Modal header  */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-white ">Jailer</h3>
              <div className=" text-xl cursor-pointer bg-red-200 p-1 rounded-md text-[#fc1348] hover:bg-white ease-out duration-300">
                <RxCross2 />
              </div>
            </div>

            <div className="">
              <iframe
                width="640"
                height="355"
                src="https://www.youtube.com/embed/Y5BeWdODPqo?si=fKNPtStmfNE8t-Yj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
