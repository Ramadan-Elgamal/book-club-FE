import { AppShell, Image } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import logo from "~/assets/imgs/logo.png";

const footerLinks = [
  {
    h5: "Clubs",
    p: ["Join a club", "start a club"],
  },
  {
    h5: "Borrow & Lend",
    p: ["Look for books", "Borrow ", "Offer to lend"],
  },
  {
    h5: "More",
    p: ["Feed", "Ai chat", "Profile", "Tracker"],
  },
];

const socialLinks = [
  {
    h5: "Follow Us",
    icons: [
      <IconBrandX
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandInstagram
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandFacebook
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandLinkedin
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandYoutube
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandTiktok
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
    ],
  },
];

const Footer = () => {
  return (
    <AppShell.Footer
      style={{
        position: "static",
        bottom: 0,
        height: 280,
        backgroundColor: "#2B2824",
      }}
    >
      <div className="flex h-full items-center justify-around">
        <Image src={logo} alt="logo" className="!h-[75px] !w-[350px]" />
        <div>
          <div className="flex items-start justify-center gap-12 text-white">
            {footerLinks.map((link) => (
              <div key={link.h5}>
                <h5 className="mt-5 py-4 font-normal text-[#F2D19C]">
                  {link.h5}
                </h5>
                <div className="flex flex-col gap-4">
                  {link.p.map((p) => (
                    <p
                      key={p}
                      className="w-[4.2rem] cursor-pointer font-normal text-[#E1E1E1]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div>
              {socialLinks.map((social) => (
                <div key={social.h5}>
                  <h5 className="mt-5 py-4 font-normal text-[#F2D19C]">
                    {social.h5}
                  </h5>
                  <div className="flex w-32 cursor-pointer flex-wrap gap-4">
                    {social.icons}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell.Footer>
  );
};

export default Footer;
