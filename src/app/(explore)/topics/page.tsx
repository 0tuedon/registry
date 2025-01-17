import React from "react";
import TranscriptContentPage from "@/components/explore/TranscriptContentPage";
import allTopics from "@/public/topics-counts.json";

const TopicsPage = () => {
  return (
    <div className="flex flex-col  text-black">
        <TranscriptContentPage header="Topics" data={allTopics} description="Bitcoin is made up of an endless amount of topics, and there’s no shortage of rabbit holes to go down. "  type="alphabet" linkName="tags"/>
    </div>
  );
};

export default TopicsPage;
