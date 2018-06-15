import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div`
  background: ${({ bgUrl }) => `url(${bgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Avatar = ({ imageSrc }) => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar bgUrl={imageSrc} />
    </StyledAvatarContainer>
  );
};

export default Avatar;
