import { loadManropeFont, TagsDetailed } from "@/utils";
import { ImageResponse } from "next/og";
import sourceCount from "@/public/source-count-data.json";
import allTranscripts from "@/public/light-transcripts.json";
import { format, isDate } from "date-fns";
import TranscriptsPreview from "@/components/metadata/TranscriptsPreview";
import HomePreview from "@/components/metadata/HomePreview";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { slug?: string[] } },
) {
  const baseUrl = `${request.headers.get("x-forwarded-proto")}://${request.headers.get("x-forwarded-host")}`;

  const { regularFontData, boldFontData } = await loadManropeFont(baseUrl);
  // Extract the slug dynamically
  const slug = params.slug ? params.slug : [];
  let transcriptUrl = `/${slug.join("/")}`;
  const transcript = allTranscripts.find(
    (transcript) => transcript.languageURL === transcriptUrl,
  );
  if (!transcript) {
    return new ImageResponse(<HomePreview />, {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Manrope",
          data: boldFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Manrope",
          data: regularFontData,
          style: "normal",
          weight: 500,
        },
      ],
    });
  }
  const transcriptSource = sourceCount.find(
    (source) => source.slug === transcript?.slugAsParams[0],
  );
  const convertedDate = transcript.date ? new Date(transcript.date) : false;
  const formattedDate = isDate(convertedDate)
    ? format(convertedDate, "d MMMM, yyyy")
    : "";

  const allSpeakers = transcript.speakers
    ? transcript.speakers.slice(0, 3).join(", ")
    : "";
  const remainingSpeakers = (transcript.speakers?.length || 0) - 3;
  const allTopics =
    transcript.tagsDetailed.map((topic: TagsDetailed) => topic?.name || "") ||
    [];
  const topicsString = allTopics.slice(0, 3).join(", ");
  const remainingTopics = allTopics.length - 3;
  // Return the OG image
  return new ImageResponse(
    (
      <TranscriptsPreview
        sourceName={transcriptSource?.name || ""}
        title={transcript.title}
        date={formattedDate}
        speakers={allSpeakers}
        topics={topicsString}
        remainingTopics={remainingTopics}
        remainingSpeaker={remainingSpeakers}
      />
    ),
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Manrope",
          data: boldFontData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Manrope",
          data: regularFontData,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
