import React from "react";
import Feature from "../Feature";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center dark:text-white uppercase mb-10 w-full">
        <p className="text-blueColor text-[40px] lg:text-[120px] font-semibold">
          Privacy Policy
        </p>
        <div className="flex flex-col items-center justify-center mx-10 lg:mx-20 gap-3">
          <p>
            Your privacy is important to us. To better protect your privacy we
            provide this notice explaining our online information practices and
            the choices you can make about the way your information is collected
            and used.
          </p>
          <p>
            On some pages, you may enter your email address (to register for a
            member account). We use the email you provide for notification of a
            response at a message you post on the forum, or to get in touch with
            the font authors. We never use or share the email address provided
            to us online in ways unrelated to the ones described above.This
            website will not share any personal information with third parties.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-start justify-center px-20 mt-8 gap-20">
            <div className="w-1/2" style={{ wordBreak: "break-all" }}>
              <p className="font-semibold">How we use cookies</p>
              <p className="my-2">
                Cookies are very small text files that are stored on your
                computer when you visit some websites
              </p>
              <p>
                We use cookies to help identify your computer so we can tailor
                your user experience, remember that you are logged in, and track
                the pages you visit via Google Analytics. We use third-party
                advertising companies to serve ads when you visit our website.
                These companies may use information (not including your name,
                address, email address, or telephone number) about your visits
                to this and other websites in order to provide advertisements
                about goods and services of interest to you.,
                <br />
                If you would like more information about this practice and to
                know your choices about not having this information used by
                these companies,&nbsp;
                <a
                  href="https://thenai.org/opt-out/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  click here
                </a>
              </p>
            </div>
            <div className="w-1/2" style={{ wordBreak: "break-all" }}>
              <p className="font-semibold">Deposit of cookies by Sirdata</p>
              <p className="my-2">
                Sirdata is a data marketing company that allows its Customers to
                provide Users with relevant offers tailored to their interests.
                <br />
                The Data collected by Sirdata are kept for a maximum period of
                365 days, depending on the purpose of the processing, in
                accordance with the laws in force and the principle of
                minimisation. For more information:&nbsp;
                <a
                  href="https://www.sirdata.com/en/Privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  https://ww.sirdata.com/privacy/
                </a>
                &nbsp;You wish to disable the collection of your data by
                Sirdata:&nbsp;
                <a
                  href="https://www.sirdata.com/fr/opposition"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  https://www.sirdata.com/opt-out/
                </a>
              </p>
              <p>
                We obtain your consent in accordance with the policies and
                technical specifications of the IAB Europe Transparency and
                Consent Framework.
                <br />
                You can change your choices at any time by&nbsp;
                <a
                  href="https://thenai.org/opt-out/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  click here
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-10 mt-5 lg:hidden"
          style={{ wordBreak: "break-all" }}
        >
          <p className="font-semibold">How we use cookies</p>
          <p className="my-2">
            Cookies are very small text files that are stored on your computer
            when you visit some websites
          </p>
          <p>
            We use cookies to help identify your computer so we can tailor your
            user experience, remember that you are logged in, and track the
            pages you visit via Google Analytics. We use third-party advertising
            companies to serve ads when you visit our website. These companies
            may use information (not including your name, address, email
            address, or telephone number) about your visits to this and other
            websites in order to provide advertisements about goods and services
            of interest to you.,
            <br />
            If you would like more information about this practice and to know
            your choices about not having this information used by these
            companies,&nbsp;
            <a
              href="https://thenai.org/opt-out/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              click here
            </a>
          </p>
        </div>
        <div
          className="mx-10 mt-5 lg:hidden"
          style={{ wordBreak: "break-all" }}
        >
          <p className="font-semibold">Deposit of cookies by Sirdata</p>
          <p className="my-2">
            Sirdata is a data marketing company that allows its Customers to
            provide Users with relevant offers tailored to their interests.
            <br />
            The Data collected by Sirdata are kept for a maximum period of 365
            days, depending on the purpose of the processing, in accordance with
            the laws in force and the principle of minimisation. For more
            information:&nbsp;
            <a
              href="https://www.sirdata.com/en/Privacy"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://ww.sirdata.com/privacy/
            </a>
            &nbsp;You wish to disable the collection of your data by
            Sirdata:&nbsp;
            <a
              href="https://www.sirdata.com/fr/opposition"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://www.sirdata.com/opt-out/
            </a>
          </p>
          <p>
            We obtain your consent in accordance with the policies and technical
            specifications of the IAB Europe Transparency and Consent Framework.
            <br />
            You can change your choices at any time by&nbsp;
            <a
              href="https://thenai.org/opt-out/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              click here
            </a>
          </p>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default PrivacyPolicy;
