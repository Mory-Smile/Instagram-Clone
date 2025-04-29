"use client";

import Modal from "react-modal";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-2 items-center">
      <IoMdAddCircleOutline
        className="w-[1.3rem] h-[1.3rem] text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-600"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          ariaHideApp={false}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <HiCamera className="text-5xl text-gray-400 cursor-pointer" />
          </div>
          <input
            type="text"
            maxLength="150"
            placeholder="Please enter your caption..."
            className="my-4 border-none text-center w-full focus:ring-0 outline-none"
          />
          <button
            disabled
            className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
          >
            Upload Post
          </button>
          <AiOutlineClose
            className="cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
