import React from "react";
import Wrapper from "@/components/layout/Wrapper";
import { processFlowData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "@/components/layout/FooterComponent";
import { ArrowLinkRight } from "@bitcoin-dev-project/bdp-ui/icons";
import reviewers from "@/public/reviewers-data.json";
import upperLineIcon from "@/public/svgs/upper-line-icon.svg";
import lowerLineIcon from "@/public/svgs/lower-line-icon.svg";
import CustomBorder from "@/components/svgs/CustomBorder";

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <Wrapper className='text-black flex flex-col max-sm:px-3 '>
        <div className='text-center py-10 md:py-[104px] flex flex-col items-center justify-center'>
          <h1 className='text-[40px] leading-[48px] font-medium md:text-6xl 2xl:text-7xl'>What Is Bitcoin Transcripts?</h1>
          <p className='text-base md:text-xl 2xl:text-2xl 2xl:leading-[33.84px] md:max-w-[1050px] max-w-[1195px] pt-10 md:pt-12 2xl:pt-14 text-center w-full'>
            Bitcoin Transcripts unlocks the wisdom, knowledge, and history from bitcoin tech podcasts, presentations, and other audio-visual media. We
            make technical bitcoin knowledge more accessible to learners, builders, and educators.
          </p>
        </div>
      </Wrapper>

      <div className='bg-gray-custom-900 w-full dark:bg-dark-custom-200'>
        <Wrapper className='py-16 md:py-[104px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-[52px] max-sm:px-3'>
          <section className='max-w-full md:max-w-[50%]'>
            <h1 className='text-[40px] text-center md:text-start leading-[48px] font-medium md:text-5xl 2xl:text-6xl'>How We Got Here</h1>
            <p className='text-base lg:text-xl 2xl:text-2xl 2xl:leading-[33.84px] pt-10 md:pt-6 max-w-[738px]'>
              In the past, Bryan Bishop (@kanzure) and others would manually transcribe talks live. Bryan alone produced over 900 of these.
              <br />
              <br />
              Building on his foundations, we now use AI to create a transcript. We then pass along the transcript to reviewers like you for edits.
              <br />
              <br />
              Doing so, we make bitcoin tech knowledge and history more accessible as text. This is then fed to tools like ChatBTC and Bitcoin Search
              to create a richer ecosystem of insights.
            </p>
          </section>

          <section className='w-full rounded-[20px] max-md:rounded-[10px] overflow-hidden grow max-w-[50%] max-h-[587px] max-md:max-w-full max-md:max-h-[500px] max-[400px]:max-h-[261px]'>
            <video src='/clips/bryan-typing-video.mp4' autoPlay loop muted playsInline className='w-full h-full object-cover' />
          </section>
        </Wrapper>
      </div>

      <div className='w-full relative'>
        <div className='absolute top-0 right-0 left-0 w-full -z-10'>
          <Image src={upperLineIcon} alt='upper line icon' className=' w-full' />
        </div>

        <Wrapper className='flex flex-col gap-6 max-sm:px-3 py-10 md:py-[104px] max-w-[1345px]'>
          <div className='text-center pb-10 md:pb-16 flex flex-col items-center justify-center'>
            <h1 className='text-[40px] leading-[48px] font-medium md:text-6xl 2xl:text-7xl'>How It Works</h1>
            <p className='text-base md:text-xl 2xl:text-2xl 2xl:leading-[33.84px] md:max-w-[1050px] max-w-[1195px] pt-10 md:pt-12 2xl:pt-14'>
              At Bitcoin Transcripts we are building a largely autonomous transcription workflow that streamlines the AI-generation, review by humans,
              and publication of bitcoin tech transcripts.
            </p>
          </div>

          <div className='flex flex-col gap-10 md:gap-20 relative'>
            <div
            className="flex w-full max-w-24 md:max-w-[184px] z-[-1] h-full justify-center absolute">
              <CustomBorder className='h-full' />
            </div>

            {processFlowData.map((item) => (
              <div key={item.title} className='flex flex-row items-center gap-4 sm:gap-[31px]'>
                <section
                  className={`bg-[${item.bgColor}] flex items-center justify-center min-w-24 h-24 md:min-w-[184px] md:h-[184px] rounded-2xl`}
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Image src={item.image} alt={item.title} width={64} height={64} className='w-7 md:w-16 h-7 md:h-16' />
                </section>

                <section>
                  <p className='text-lg md:text-2xl font-medium whitespace-nowrap'>{item.title}</p>
                  <p className='text-sm md:text-xl pt-1 sm:pt-3 lg:pt-[31px]'>
                    {item.content}{" "}
                    {item.title === "Human Review" ? (
                      <span>
                        <Link href='https://review.btctranscripts.com/' target='_blank' className='underline text-orange-custom-100'>
                          This could be you!
                        </Link>
                      </span>
                    ) : null}
                  </p>
                </section>
              </div>
            ))}
          </div>
        </Wrapper>

        <div className='absolute bottom-0 right-0 left-0 w-full -z-10'>
          <Image src={lowerLineIcon} alt='lower line icon' className=' w-full' />
        </div>
      </div>

      <div>
        <Wrapper className='flex flex-col gap-16 md:gap-[72px] max-sm:px-3 py-10 md:py-[104px]'>
          {/* <GroupedImageSection
            title='Editors'
            subText='Editors evaluate and finalize Reviewers submissions, ensuring they’re consistently high quality.'
            data={editors}
          /> */}

          <GroupedImageSection
            title='Reviewers'
            subText='Reviewers edit AI-generated transcripts, improving accuracy and readability.'
            data={reviewers}
            buttonText='Become a Reviewer'
            href='https://review.btctranscripts.com'
          />
          {/* <GroupedImageSection
            title='Curators'
            subText='Curators suggest source material for transcription, setting the foundation for all that follows.'
            data={curators}
            buttonText='Become a Curator'
            href='/'
          /> */}
        </Wrapper>
      </div>
      <FooterComponent />
    </main>
  );
};

const GroupedImageSection = ({
  title,
  subText,
  data,
  buttonText,
  href,
}: {
  data: Record<string, { title: string; image: string }>;
  title: string;
  subText: string;
  href?: string;
  buttonText?: string;
}) => {
  return (
    <div className='text-center'>
      <h1 className='text-[40px] leading-[48px] font-medium md:text-6xl 2xl:text-7xl'>{title}</h1>
      <p className='text-base md:text-xl 2xl:text-2xl 2xl:leading-[33.84px] md:max-w-[1050px] max-w-[1195px] pt-4 md:pt-6'>{subText}</p>

      <div className='flex items-center justify-center pt-8 md:pt-14'>
        <div className='flex gap-5 md:gap-5 max-w-[1060px] flex-wrap justify-center'>
          {Object.values(data).map(({ title, image }) => (
            <Link
              href={`https://github.com/${title}`}
              key={title}
              target='_blank'
              className='flex flex-col items-center justify-center w-[150px] md:w-[160px] max-[340px]:w-[130px] gap-2 md:px-[14px]'
            >
              <Image
                src={image}
                alt={title}
                width={132}
                height={132}
                className='w-[100px] md:w-[132px] h-[100px] md:h-[132px] bg-black dark:bg-gray-custom-100 rounded-full border-[0.5px]'
              />
              <p className='text-custom-black-custom-400 dark:text-gray-custom-100 text-sm leading-[22.12px] font-medium md:text-base md:font-semibold md:leading-[25.28px] whitespace-nowrap max-w-full text-nowrap overflow-hidden text-ellipsis'>
                {title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {buttonText && href ? (
        <div className='pt-4 md:pt-6 flex justify-center'>
          <Link
            href={href}
            target='_blank'
            className=' text-base font-semibold md:text-lg flex items-center justify-center gap-1 rounded-full bg-orange-custom-100 text-white py-[17px] px-[34px] md:py-6 md:px-16 max-w-[243px] md:max-w-[326px]'
          >
            {buttonText}
            <ArrowLinkRight />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default page;