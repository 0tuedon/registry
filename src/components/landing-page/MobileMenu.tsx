import React, { SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExploreNavigationItems, menuApps } from "@/utils/data";
import { ThemeSwitcher } from "../layout/header/Header";
import { ArrowLinkUpRight } from "@bitcoin-dev-project/bdp-ui/icons";
import LanguageSwitch from "../layout/header/LanguageSwitch";
import { generateNewUrlForLanguage } from "@/utils/locale";
import useLang from "@/hooks/useLang";
import useTranslations from "@/hooks/useTranslations";


const MobileMenu = ({setOpen}:{setOpen: React.Dispatch<SetStateAction<boolean>>}) => {
  const links = ExploreNavigationItems;

  const lang = useLang();
  const t = useTranslations(lang);

  return (
    <div className='flex flex-col gap-6 bg-white min-h-full overflow-y-scroll'>
      <section className='flex-col gap-2 '>
        <p className='text-lg font-medium text-black'>{t("shared.transcripts")}</p>
        <div className='w-full flex flex-col'>
          {links.map(({href, title}) => (
            <Link
              href={generateNewUrlForLanguage(href, lang)}
              onClick={()=>setOpen(false)}
              className='capitalize py-3 px-4 text-gray-custom-1000 hover:bg-orange-custom-800 hover:font-semibold hover:text-orange-custom-100'
            >
              {t(`shared.${title}`) ?? title}
            </Link>
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-6'>
        <p className='text-lg font-medium text-black hidden'>{t("shared.about")}</p>
        <div className='w-fit'>
          <LanguageSwitch callback={() => setOpen(false)} />
        </div>
        <div className='w-fit hidden'>
          <ThemeSwitcher />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-medium text-black'>{t("header.all-products")}</p>
          <section className='flex max-w-[400px] gap-12 flex-wrap max-xl:gap-6 max-md:max-w-full max-lg:gap-4'>
            {menuApps.slice(1).map(({ href, image, alt }) => (
              <Link href={href} target='_blank' rel='noopener noreferrer' key={alt}>
                <Image
                  className={`rounded-xl w-[54px] h-[54px] lg:w-16 lg:h-16 ${
                    alt === "Bitcoin search" || alt === "Bitcoin TLDR" ? "border border-gray-custom-200" : ""
                  }`}
                  src={image}
                  alt={alt}
                  width={88}
                  height={88}
                />
              </Link>
            ))}
          </section>
        </div>
        <button className='flex flex-col gap-2 items-start p-4 border border-gray-custom-600 rounded-md'>
          <p className='text-lg leading-[30px] font-semibold text-black'>{t("explore.review.title")}</p>
          <Link href='https://review.btctranscripts.com/' target='_blank' className='flex border-b border-b-gray-custom-1000'>
            <p className='text-lg leading-[30px] font-semibold text-black'>{t("explore.review.cta")}</p>
            <ArrowLinkUpRight className='w-5' />
          </Link>
        </button>
      </section>
    </div>
  );
};

export default MobileMenu;
