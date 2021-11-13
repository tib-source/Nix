import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { mock_data } from "../../Data/mock_user_data";
import { BsHeart } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;
const Oragniser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Filter = styled.div`
  font-weight: 300;
  cursor: pointer;
  // add border effect
`;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  column-count: 3;
  column-width: 33%;

  #post {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    ${flex}
  }
`;
const Post = styled.div``;
const Stats = styled.div`
  gap: 1rem;

  & > * {
    ${flex}
    gap: 0.25rem;
  }
`;
const UserProfile = styled.div`
  gap: 0.5rem;
  img {
    border-radius: 50%;
  }
  & > * {
    ${flex}
    gap: 0.25rem;
  }
`;
const Likes = styled.div``;
const Comments = styled.div``;
const Feed = (props) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mock_data);
      }, 100);
    }).then((data) => setFeed(data));
  }, [mock_data]);
  return (
    <Container>
      <TitleSection>
        <Title>Feed</Title>
        <Oragniser>
          <Filter>Latest</Filter>
          <Filter> Popular </Filter>
        </Oragniser>
      </TitleSection>
      <Content>
        {feed.map((post) => {
          return (
            <Post key={post._id}>
              <img id="post" src={post.picture} alt="mock post" />
              <Info>
                <UserProfile>
                  <img src={post.friends[0].picture} alt="profile" />
                  <p>{post.name}</p>
                </UserProfile>
                <Stats>
                  <Likes>
                    <BsHeart /> {post.likes}
                  </Likes>
                  <Comments>
                    <FaComment /> {post.comments.length}
                  </Comments>
                </Stats>
              </Info>
            </Post>
          );
        })}
      </Content>
    </Container>
  );
};

export default Feed;
