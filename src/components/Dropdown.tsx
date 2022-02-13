import React, { FC, useState } from "react";
import ClickOutside from "../lib/click-outside";
import JHImage from "../assets/jh.png";

type TMONSTAX = "손현우" | "유기현" | "이민혁" | "채형원" | "이주헌" | "임창균";
const MonstaX: TMONSTAX[] = [
  "손현우",
  "유기현",
  "이민혁",
  "이주헌",
  "임창균",
  "채형원",
];

export const Dropdown: FC = () => {
  const [display, setDisplay] = useState(false);
  const [member, setMember] = useState<TMONSTAX | null>(null);
  const comment = member !== "이주헌" ? "이주헌이 비졌습니다." : "";

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <div className="relative">
        {member && (
          <p className="absolute h-28 flex items-center -top-40 text-sm text-center justify-center w-full">
            {comment ? comment : <img src={JHImage} alt="jooheony" />}
          </p>
        )}

        <button
          className="w-32 h-12 bg-slate-800 text-white"
          onClick={() => setDisplay(!display)}
        >
          {member ? member : "최애를 골라주세요."}
        </button>
        {display && (
          <ul className="absolute text-center w-full">
            {MonstaX.map((member, idx) => (
              <li
                key={idx}
                className="w-full h-12 flex items-center justify-center bg-slate-800 text-white"
                onClick={() => {
                  setMember(member);
                  setDisplay(false);
                }}
              >
                {member}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickOutside>
  );
};
