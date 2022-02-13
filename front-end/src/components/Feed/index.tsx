import React, { useContext, useEffect } from "react";

import ContentCard from "../ContentCard";
import { Container, FeedLabel } from "./styles";
import { FeedContext } from "../../contexts/FeedContext";
import { ContentCardProps, ContentDataSource } from "../../utils/interfaces";
import jsonData from "../../utils/data/contents.json";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

function Feed() {
  const { feed, setFeed } = useContext(FeedContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const initial = jsonData.map<ContentCardProps>(
      (content: ContentDataSource) => ({
        _id: content._id,
        image: content.imageName,
        author: content.author,
        message: content.message,
      })
    );

    setFeed(initial);
  }, [setFeed]);

  return (
    <Container width={width}>
      <FeedLabel>Feed</FeedLabel>
      {feed.map((content, index) => (
        <ContentCard
          key={index}
          _id={content._id}
          image={content.image}
          author={content.author}
          message={content.message}
        />
      ))}
    </Container>
  );
}

export default Feed;
