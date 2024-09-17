import React from "react";
import Feature from "../Feature";

const Howtoinstall = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4 lg:mx-10 dark:text-white">
        <p className="text-blueColor text-[20px] lg:text-[24px]">
          How To Install
        </p>
        <div className="relative w-full flex items-center justify-center mt-8">
          <div className="absolute bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[26px] lg:text-[42px] text-center">
            Browse Your Query
          </div>
          <div className="border border-blueColor w-full">
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 mt-8 lg:m-8 rounded-lg py-4">
              <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
                <p className="text-[20px] lg:text-[26px] text-blueColor">
                  How to install a font under Windows?
                </p>
                <p className="text-[14px] lg:text-[16px] -mt-1">
                  Extract the files you have downloaded.
                </p>
                <p className="text-[14px] lg:text-[16px] my-2">
                  <span className="font-semibold">Details:</span> Click on the
                  "Download" button, save the zip somewhere on your hard disk,
                  go to the place where it is saved, double-click on the zip to
                  open it, then either click on "Extract all files" or drag and
                  drop the files elsewhere from the zip window (hold down the
                  CTRL key to select several files at once) For the 20th century
                  versions of Windows you must install an unzip tool first.
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-[14px] lg:text-[16px]">
                    <p className="font-semibold">Under Windows 10/8/7/Vista</p>
                    <p>
                      Select the font files (.ttf, .otf or .fon) then
                      Right-click &gt; Install
                    </p>
                  </li>
                  <li className="text-[14px] lg:text-[16px] my-2">
                    <p className="font-semibold">
                      Under any version of Windows
                    </p>
                    <p>
                      Place the font files (.ttf, .otf or .fon) into
                      the Fonts folder, usually C:\Windows\Fonts or
                      C:\WINNT\Fonts
                      <br />
                      (can be reached as well by the Start Menu &gt; Control
                      Panel &gt; Appearance and Themes &gt; Fonts).
                    </p>
                    <p className="text-[12px] lg:text-[14px] mt-2">
                      Note that with the internal unzip tool of Windows (unlike
                      Winzip), you cannot install a font by a simple drag and
                      drop of the .ttf from the zip window to the Fonts window.
                      You must first drag and drop it anywhere (for example on
                      the desktop) then into the Fonts folder.
                      <br />
                      You can also go through: File &gt; Install a new font...
                      in the Fonts folder menu then browse the fonts, instead of
                      drag and drop the fonts into the window. Although this
                      method is laborious, it would seem that it functions
                      better in some cases.
                    </p>
                  </li>
                  <li className="text-[14px] lg:text-[16px]">
                    There are some videos on&nbsp;
                    <a
                      href="https://www.youtube.com/results?search_query=dafont"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      YouTube
                    </a>
                    &nbsp; if that helps.
                  </li>
                  <li className="text-[14px] lg:text-[16px] my-2">
                    Tip (for Windows XP/Vista, not Windows 7/8): if you
                    occasionally need a font, you don't need to install it. Just
                    double-click on the .ttf file, and while the preview window
                    is opened you can use it in most of the programs you'll
                    launch (apart from a few exceptions like OpenOffice).
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 mt-8 lg:m-8 rounded-lg py-4">
              <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
                <p className="text-[20px] lg:text-[26px] text-blueColor">
                  How to install a font under Mac OS?
                </p>
                <p className="text-[14px] lg:text-[16px] my-2">
                  Mac OS X recognizes TrueType and OpenType fonts (.ttf and
                  .otf) but not the PC bitmap fonts (.fon).
                  <br />
                  Files are compressed, you may need an utility like&nbsp;
                  <a
                    href="https://download.cnet.com/stuffit-expander/3000-2250_4-10653042.html"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Stuffit Expander
                  </a>
                  .
                </p>
                <ul className="list-disc ml-6">
                  <li className="text-[14px] lg:text-[16px]">
                    <p className="font-semibold">
                      Under any version of Windows Under Mac OS X 10.3 or
                      above&nbsp;
                      <span className="font-medium">
                        (including the FontBook)
                      </span>
                    </p>
                    <p>
                      Double-click the font file &gt; "Install font" button at
                      the bottom of the preview.
                    </p>
                  </li>
                  <li className="text-[14px] lg:text-[16px] my-2">
                    <p className="font-semibold">
                      Under any version of Mac OS X:
                    </p>
                    <p>
                      Put the files into&nbsp;/Library/Fonts&nbsp;(for all
                      users),
                      <br />
                      or into&nbsp;
                      <span className="font-semibold">
                        /Users/Your_username/Library/Fonts
                      </span>
                      &nbsp;(for you only).
                    </p>
                  </li>
                  <li className="text-[14px] lg:text-[16px] my-2">
                    <p className="font-semibold">Under Mac OS 9 or earlier:</p>
                    <p>
                      The old Mac fonts are not supported anymore at
                      freefontspik. First, you have to&nbsp;
                      <a
                        href="https://www.dafont.com/soft.php#2"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        convert
                      </a>
                      &nbsp;the font files (.ttf or .otf) you have downloaded.
                      <br />
                      Then drag the fonts suitcases into
                      the&nbsp;System&nbsp;folder. The system will propose you
                      to add them to the Fonts folder.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 mt-8 lg:m-8 rounded-lg py-4">
              <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
                <p className="text-[20px] lg:text-[26px] text-blueColor">
                  How to install a font under Linux?
                </p>
                <p className="text-[14px] lg:text-[16px] my-2">
                  Copy the font files (.ttf or .otf) to&nbsp;<span className="font-semibold">fonts://</span>&nbsp;in the File
                  manager.
                  <br />
                  Or:&nbsp;Go into the /home folder, in the menu select View &gt; Show
                  Hidden Files, you will see the hidden folder&nbsp;.fonts&nbsp;(if not,
                  create it) then copy the font files there.
                  <br />
                  Or:&nbsp;(under some Linux versions - Ubuntu for
                  example)&nbsp;Double-click the font file &gt; "Install font" button in
                  the preview window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default Howtoinstall;
