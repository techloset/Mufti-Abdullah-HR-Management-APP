import Switcher from "@/app/components/switcher/Switcher";
import { ICON } from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

export default function Setting() {
  return (
    <div className="border-[1px] rounded-lg  border-secondry p-5 divide-y-2 divide-secondry text-white">
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div className="flex flex-row gap-2 bg-secondry items-center justify-center p-3 rounded-lg h-[40px]">
          <h2>Light</h2>
          <Image src={ICON.RIGHTARROW} alt="arrow" className="rotate-90" />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div className="flex flex-row gap-2 bg-secondry items-center justify-center p-3 rounded-lg  h-[40px]">
          <h2>English</h2>
          <Image src={ICON.RIGHTARROW} alt="arrow" className="rotate-90" />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
      <div className="flex flex-row py-3 justify-between items-center">
        <div>
          <h1 className="text-base text-white font-semibold">
            Mobile Push Notifications
          </h1>
          <h5 className="text-lightWhite text-base font-light">lorem 10</h5>
        </div>
        <div>
          <Switcher />
        </div>
      </div>
    </div>
  );
}
