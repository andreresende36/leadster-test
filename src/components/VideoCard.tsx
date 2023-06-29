"use client";
import Image from "next/image";
import he from "he";
import { BasicVideoInfo } from "@/types/videoInfo";
import { useState, useRef, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Youtube from "react-youtube";
import * as IconsMd from "react-icons/md";
import * as IconsIo from "react-icons/io"
import DownloadButton from "./DownloadButton";

/**
 * Renders a video card component.
 * @param props An object containing the video information.
 * @returns A JSX element representing the video card.
 */
function VideoCard({
  videoInfo: {
    id: videoId,
    title,
    description,
    thumbnail: { url, width, height },
  },
}: {
  videoInfo: BasicVideoInfo;
}): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const opts = {
    height: 360,
    width: 640,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <button
        className="group relative w-[22rem] h-72 rounded-xl shadow-xl transition duration-400 hover:text-[#007EFF] ease-in-out hover:scale-[1.007] m-2"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {/* Overlays */}
        <div className="absolute w-full h-full opacity-0 group-hover:opacity-50">
          {/* Overlay Superior */}
          <div className="w-full h-[12.41rem] bg-[#007EFF] rounded-t-xl z-10" />

          {/* Overlay Inferior */}
          <div className="w-full h-[8.1rem] bg-[ #0080ff10] rounded-b-xl z-10" />
        </div>

        {/* Icon Play */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(255,255,255)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-16 h-16 text-[#ffffff] opacity-0 group-hover:opacity-100 group-hover:drop-shadow-xl z-20 mx-[9.2rem] my-[4.3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>

        {/* Thumbnail */}
        <Image
          src={url}
          alt={title}
          width={365}
          height={height}
          key={videoId}
          className="rounded-t-xl h-[12.5rem] z-0"
        />

        {/* Title */}
        <div className="flex justify-center items-center p-6">
          <p className="break-words font-extrabold text-[0.90rem] text-justify leading-tight z-0">
            {he.decode(title)}
          </p>
        </div>
      </button>
      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}
          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="relative max-w-5xl mx-auto w-[40rem] h-[75%] flex flex-col items-center text-center bg-white border-t-[5px] border-[#007EFF] rounded-2xl">
              <IconsMd.MdClose
                className="absolute left-[38rem] top-[0.8rem] scale-[1.15] hover:fill-[#53596e]"
                size={16}
                color="#7D87A8"
              />
              <p className="w-[70%] py-5 font-bold text-xl">{title}</p>
              <Dialog.Panel className="w-full max-h-full shadow-2xl aspect-video bg-neutral-800 overflow-hidden">
                <Youtube videoId={videoId} opts={opts} />
              </Dialog.Panel>
              <p className="w-[93%] text-start font-bold border-b-2 border-neutral-200 pb-[0.4rem] pt-4 text-[#15364a]">
                Descrição
              </p>
              <p className="w-[93%] h-fit text-base text-justify font-medium pt-[0.4rem] text-[#15364a]">
                {description}
              </p>
              <p className="w-[93%] text-start font-bold border-b-2 border-neutral-200 pb-[0.4rem] pt-4 text-[#15364a]">
                Downloads
              </p>
              
              <div className="w-[93%] flex justify-start gap-2">
                <DownloadButton 
                  text= 'Spreadsheet.xls'
                  darkColorText= '#49a794'
                  darkColorIcon= '#00B489'
                  bgLightColor= '#C2F4EA'
                  bgDarkColor= '#9FEFDF'
                />
                <DownloadButton 
                  text= 'Document.doc'
                  darkColorText= '#279BF1'
                  darkColorIcon= '#1EADF7'
                  bgLightColor= '#C2E6FF'
                  bgDarkColor= '#A1D9FF'
                />
                <DownloadButton 
                  text= 'Presentation.ppt'
                  darkColorText= '#A99445'
                  darkColorIcon= '#B1982C'
                  bgLightColor= '#FFF8D0'
                  bgDarkColor= '#FFF1A0'
                />
              </div>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </>
  );
}
export default VideoCard;
