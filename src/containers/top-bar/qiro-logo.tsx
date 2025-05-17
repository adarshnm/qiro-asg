import * as React from "react";
import Image from "next/image";

export function QiroLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex">
        <Image
          src="/logo.svg"
          alt="Qiro Logo Vector 6"
          width={96}
          height={40}
          className="relative z-10"
        />
      </div>
    </div>
  );
}
