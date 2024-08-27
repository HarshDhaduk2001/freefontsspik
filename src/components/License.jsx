import React from "react";
import Feature from "./Feature";

const openSource = [
  {
    title: "Preamble",
    desc: [
      "The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and improved in partnership with others",
      "The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves. The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license. The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.",
    ],
  },
  {
    title: "Definitions",
    desc: [
      "“Font Software” refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may include source files, build scripts and documentation.",
      "“Reserved Font Name” refers to any names specified as such after the copyright statement(s).",
      "“Original Version” refers to the collection of Font Software components as distributed by the Copyright Holder(s).",
      "“Modified Version” refers to any derivative made by adding to, deleting, or substituting -- in part or in whole -- any of the components of the Original Version, by changing formats or by porting the Font Software to a new environment.",
      "“Author” refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.",
    ],
  },
  {
    title: "Permission & Conditions",
    desc: [
      "Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:",
      "1) Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.",
      "2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily viewed by the user.",
      "3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.",
      "4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software shall not be used to promote, endorse or advertise any Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written permission",
      "5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created using the Font Software.",
    ],
  },
  {
    title: "Termination",
    desc: [
      "This license becomes null and void if any of the above conditions are not met.",
    ],
  },
  {
    title: "Disclaimer",
    desc: [
      "THE FONT SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",
    ],
  },
];

const closedSource = [
  {
    title: "Notice to User",
    desc: [
      "Indian Type Foundry designs, produces and distributes font software as digital fonts to end users worldwide. In addition to commercial fonts that are available for a fee, ITF also offers several fonts which can be used free of charge. The free fonts are distributed through a dedicated platform called www.fontshare.com (“FreeFontsPik”) to end users worldwide. These free fonts are subject to this legally binding EULA between the Indian Type Foundry (“Indian Type Foundry” or “Licensor”) and you (“Licensee”).",
      "You acknowledge that the Font Software and designs embodied therein are protected by the copyright, other intellectual property rights and industrial property rights and by international treaties. They are and remain at all times the intellectual property of the Indian Type Foundry.",
      "In addition to direct download, FreeFontsPik also offers these free fonts via FreeFontsPik API using a code. In this case, the Font Software is delivered directly from the servers used by Indian Type Foundry to the Licensee's website, without the Licensee having to download the Font Software.",
      "By downloading, accessing the API, installing, storing, copying or using one of any Font Software, you agree to the following terms.",
    ],
  },
  {
    title: "Definitions",
    desc: [
      "“Font Software” refers to the set of computer files or programs released under this license that instructs your computer to display and/or print each letters, characters, typographic designs, ornament and so forth. Font Software includes all bitmap and vector representations of fonts and typographic representations and embellishments created by or derived from the Font Software.",
      "“Original Version” refers to the Font Software as distributed by the Indian Type Foundry as the copyright holder.",
      "“Derivative Work” refers to the pictorial representation of the font created by the Font Software, including typographic characters such as letters, numerals, ornaments, symbols, or punctuation and special characters.",
    ],
  },
  {
    title: "01 Grant of License",
    desc: [
      "You are hereby granted a non-exclusive, non-assignable, non-transferrable, terminable license to access, download and use the Font Software for your personal or commercial use for an unlimited period of time for free of charge.",
      "You may use the font Software in any media (including Print, Web, Mobile, Digital, Apps, ePub, Broadcasting and OEM) at any scale, at any location worldwide.",
      "You may use the Font Software to create logos and other graphic elements, images on any surface, vector files or other scalable drawings and static images.",
      "You may use the Font Software on any number of devices (computer, tablet, phone). The number of output devices (Printers) is not restricted.",
      "You may make only such reasonable number of back-up copies suitable to your permitted use.",
      "You may but are not required to identify Indian Type Foundry Fonts in your work credits.",
    ],
  },
  {
    title: "02 Limitations of Usage",
    desc: [
      "You may not modify, edit, adapt, translate, reverse engineer, decompile or disassemble, alter or otherwise copy the Font Software or the designs embodied therein in whole or in part, without the prior written consent of the Licensor.",
      "The Fonts may not - beyond the permitted copies and the uses defined herein - be distributed, duplicated, loaned, resold or licensed in any way, whether by lending, donating or give otherwise to a person or entity. This includes the distribution of the Fonts by e-mail, on USB sticks, CD-ROMs, or other media, uploading them in a public server or making the fonts available on peer-to-peer networks. A passing on to external designers or service providers (design agencies, repro studios, printers, etc.) is also not permitted.",
      "You are not allowed to transmit the Font Software over the Internet in font serving or for font replacement by means of technologies such as but not limited to EOT, Cufon, sIFR or similar technologies that may be developed in the future without the prior written consent of the Licensor.",
    ],
  },
  {
    title: "03 Embedding",
    desc: [
      "You may embed the Font Software in PDF and other digital documents provided that is done in a secured, read-only mode. It must be ensured beyond doubt that the recipient cannot use the Font Software to edit or to create new documents. The design data (PDFs) created in this way and under these created design data (PDFs) may be distributed in any number.",
      "The extraction of the Font Software in whole or in part is prohibited.",
    ],
  },
  {
    title: "04 Third-party use, Commercial print service provider",
    desc: [
      "You may include the Font Software in a non-editable electronic document solely for printing and display purposes and provide that electronic document to the commercial print service provider for the purpose of printing. If the print service needs to install the fonts, they too need to download the Font Software from the Licensor's website.",
    ],
  },
  {
    title: "05 Derivative Work",
    desc: [
      "You are allowed to make derivative works as far as you use them for your personal or commercial use. However, you cannot modify, make changes or reverse engineer the original font software provided to you. Any derivative works are the exclusive property of the Licensor and shall be subject to the terms and conditions of this EULA. Derivative works may not be sub-licensed, sold, leased, rented, loaned, or given away without the express written permission of the Licensor.",
    ],
  },
  {
    title: "06 Warranty and Liability",
    desc: [
      "BECAUSE THIS SOFTWARE IS LICENSED FREE OF CHARGE, INDIAN TYPE FOUNDRY MAKES NO WARRANTIES, EXPRESS OR IMPLIED AS TO THE MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR OTHERWISE. THE FONT SOFTWARE WAS NOT MANUFACTURED FOR USE IN MANUFACTURING CONTROL DEVICES OR NAVIGATION DEVICES OR IN CIRCUMSTANCES THAT COULD RESULT IN ENVIRONMENTAL DAMAGE OR PERSONAL INJURY. WITHOUT LIMITING THE FOREGOING, INDIAN TYPE FOUNDRY SHALL IN NO EVENT BE LIABLE TO THE LICENSED USER OR ANY OTHER THIRD PARTY FOR ANY DIRECT, CONSEQUENTIAL OR INCIDENTAL DAMAGES, INCLUDING DAMAGES FROM LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION NOR FOR LOST PROFITS OR SAVINGS ARISING OUT OF THE USE OR INABILITY TO USE THE PRODUCT EVEN IF NOTIFIED IN ADVANCE, UNDER NO CIRCUMSTANCES SHALL INDIAN TYPE FOUNDRY’S LIABILITY EXCEED THE REPLACEMENT COST OF THE SOFTWARE.",
      "IF LICENSEE CHOOSES TO ACCESS THE FONT SOFTWARE THROUGH A CODE (API), IT MAY HAVE A DIRECT IMPACT ON LICENSEE'S WEBSITE OR APPLICATIONS. INDIAN TYPE FOUNDRY IS NOT RESPONSIBLE OR LIABLE FOR ANY INTERRUPTION, MALFUNCTION, DOWNTIME OR OTHER FAILURE OF THE WEBSITE OR ITS API.",
    ],
  },
  {
    title: "07 Updates, Maintenance and Support Services",
    desc: [
      "Licensor will not provide you with any support services for the Software under this Agreement.",
    ],
  },
  {
    title: "08 Termination",
    desc: [
      "Any breach of the terms of this agreement shall be a cause for termination, provided that such breach is notified in writing to the Licensee by the Licensor and the Licensee failed to rectify the breach within 30 days of the receipt of such notification.",
      "In the event of termination and without limitation of any remedies under law or equity, you must delete the Font Software and all copies thereof. Proof of this must be provided upon request of the Licensor.",
      "We reserve the right to claim damages for the violation of the conditions.",
    ],
  },
  {
    title: "09 Final Provisions",
    desc: [
      "If individual provisions of this agreement are or become invalid, the validity of the remaining provisions shall remain unaffected. Invalid provisions shall be replaced by mutual agreement by such provisions that are suitable to achieve the desired economic purpose, taking into account the interests of both parties. The same shall apply mutatis mutandis to the filling of any gaps which may arise in this agreement.",
      "This contract is subject to laws of the Republic of India. Place of performance and exclusive place of jurisdiction for all disputes between the parties arising out of or in connection with this contract is, as far as legally permissible, Ahmedabad, India.",
    ],
  },
];

const License = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4 lg:mx-10 dark:text-white">
        <p className="text-blueColor text-[20px] lg:text-[24px]">Licenses</p>
        <div className="relative w-full flex items-center justify-center mt-8">
          <div className="absolute bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[26px] lg:text-[42px] text-center">
            Open & Closed Font License
          </div>
          <div className="border border-blueColor w-full">
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 mt-8 lg:m-8 rounded-lg py-4">
              <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
                <p className="text-[20px] lg:text-[26px] text-blueColor">
                  Open Source License
                </p>
                {openSource.map((i, index) => (
                  <div key={index}>
                    <p className="text-[20px] lg:text-[24px] py-4">{i.title}</p>
                    {i.desc.map((j, indexNumber) => (
                      <p
                        key={indexNumber}
                        className={`text-[16px] lg:text-[20px] pb-3`}
                      >
                        {j}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 lg:m-8 rounded-lg py-4">
              <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
                <p className="text-[20px] lg:text-[26px] text-blueColor">
                  Closed Source License
                </p>
                {closedSource.map((i, index) => (
                  <div key={index}>
                    <p className="text-[20px] lg:text-[24px] py-4">{i.title}</p>
                    {i.desc.map((j, indexNumber) => (
                      <p
                        key={indexNumber}
                        className={`text-[16px] lg:text-[20px] pb-3`}
                      >
                        {j}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default License;
