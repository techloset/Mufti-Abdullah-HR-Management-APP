import { HOMEICONS } from "@/app/constants/Images";
import Image from "next/image";
import React from "react";
import NotificationComponent from "../notificationComponent.tsx/NotificationComponent";

export default function NotificatoinSection() {
  return (
    <div className="border-secondry border-[1px] space-y-3 divide-y-[1px] divide-secondry rounded-lg p-5">
      <NotificationComponent />
      <NotificationComponent />
      <NotificationComponent />
    </div>
  );
}
