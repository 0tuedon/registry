"use client";

import { Resources } from "contentlayer/generated";
import React, { SetStateAction, useState } from "react";
import TranscriptTabContent from "../individual-transcript/TranscriptTabContent";
import NavigationByWords from "../explore/NavigationByWords";
import { NavigationList } from "@/utils";
import useLang from "@/hooks/useLang";
import useTranslations from "@/hooks/useTranslations";
import { useParams, useRouter } from "next/navigation";

const Tabs = ({
  summary,
  markdown,
  extraInfo,
  currentHeading,
  groupedHeading,
  setCurrentHeading,
}: {
  summary?: string;
  markdown: string;
  extraInfo?: Resources[];
  currentHeading?: string;
  groupedHeading?: NavigationList[];
  setCurrentHeading?: React.Dispatch<SetStateAction<string>>;
}) => {
  const lang = useLang();
  const t = useTranslations(lang);
  const currentRoute = useParams();
  const slug = Array.isArray(currentRoute?.slug) ?  currentRoute.slug.slice(0,currentRoute.slug.length - 1).join("/") : "";
  const [openTabs, setOpenTabs] = useState<
    "transcript" | "summary" | "extraInfo"
  >("transcript");

  return (
    <div className="flex flex-col relative">
      <div className="sticky bg-white z-10 top-0 lg:top-0  md:pt-6 h-full flex gap-4 md:gap-10 xl:gap-16 justify-start items-center border-b border-b-gray-custom-1200">
        <Tab
          title={t("transcript.title")!}
          isOpen={openTabs === "transcript"}
          onClick={() => setOpenTabs("transcript")}
        />
        {summary && (
          <Tab
            title={t("transcript.summary")!}
            isOpen={openTabs === "summary"}
            onClick={() => setOpenTabs("summary")}
          />
        )}

        {extraInfo && (
          <Tab
            title={t("transcript.extra-info")!}
            isOpen={openTabs === "extraInfo"}
            onClick={() => setOpenTabs("extraInfo")}
          />
        )}
      </div>

     {/* This is needed since the layout for the mobile design changes and goes under the tabs */}
      {groupedHeading && (
        <div className="block w-full pt-4 lg:hidden sticky top-[20px] md:top-[65px] z-[5]">
          <NavigationByWords
            currentGroup={currentHeading || ""}
            navigationList={groupedHeading}
            screen="mobile"
          />
        </div>
      )}

      <div className="relative h-full lg:max-w-[90%]">
        {openTabs === "transcript" && (
          <div className="relative">
            <div className="pt-4  selection:bg-[#B4D5FF]">
              <TranscriptTabContent
                currentSlug={slug}
                markdown={markdown}
                setCurrentHeading={setCurrentHeading}
              />
            </div>
          </div>
        )}
        {openTabs === "summary" && (
          <section className="pt-4">
            <p>{summary}</p>
          </section>
        )}
        {openTabs === "extraInfo" && (
          <section className="flex flex-col pt-4">
            {extraInfo?.map((info) => (
              <p className="text-base 2xl:text-lg font-medium leading-8">
                {" "}
                <span>{info.title}: </span>
                <a
                  target="_blank"
                  href={info.url}
                  className="text-blue-custom-200 font-medium hover:underline visited:bg-purple-600"
                >
                  {info.url}
                </a>
              </p>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

const Tab = ({
  title,
  isOpen,
  onClick,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[33%] flex items-start justify-center h-[31px] md:h-12 xl:h-14 2xl:h-[60px]"
    >
      <section className="flex flex-col h-full items-center justify-between relative w-full">
        <p
          className={`text-sm md:text-base xl:text-lg 2xl:text-xl font-normal ${
            isOpen ? "text-orange-custom-100" : "text-custom-black-custom-400"
          }`}
        >
          {title}
        </p>
        {isOpen && (
          <div className="h-1 bg-orange-custom-100 w-full absolute bottom-0"></div>
        )}
      </section>
    </button>
  );
};

export default Tabs;
