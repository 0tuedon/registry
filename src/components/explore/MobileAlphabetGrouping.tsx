"use client";
import React, { useEffect, useRef } from "react";
import { IAlphabetGrouping } from "./AlphabetGrouping";
import { alphabeticalArrangement } from "@/utils/data";
import { getAllCharactersProperty } from "@/utils";

const MobileAlphabetGrouping = ({
  currentGroup,
  groupedTopics,
}: IAlphabetGrouping) => {
  const allCharacters = getAllCharactersProperty(
    alphabeticalArrangement,
    groupedTopics
  );
  const selectRef = useRef<HTMLSelectElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const onOptionsChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value;
    if (linkRef.current) {
      linkRef.current.href = `#${value.toLowerCase()}`;
      linkRef.current.click();
    }
  };

  useEffect(() => {
    if (currentGroup) {
      if (selectRef.current) {
        selectRef.current.value = currentGroup;
      }
    }
  }, [currentGroup]);
  return (
    <>
      <a href={"#a"} ref={linkRef} className="hidden">
        {" "}
        link group
      </a>
      <select
        onChange={onOptionsChange}
        ref={selectRef}
        className="bg-orange-custom-800 max-w-[calc(100vw-32px)] fixed top-10 w-full py-2.5 px-4 outline-none"
      >
        {allCharacters.map((char) => (
          <option key={char.alp} value={char.alp} disabled={char.isDisabled}>
            {char.alp}{" "}
          </option>
        ))}
      </select>
    </>
  );
};

export default MobileAlphabetGrouping;
