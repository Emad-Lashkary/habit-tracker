import styled from "styled-components";
import UserProfile from "./UserProfile";

const StyledBox = styled.div`
  padding: 16px;
  background-color: var(--color-primary-50);
  border-radius: 8px;
`;

const Profile = () => {
  return (
    <StyledBox>
      <UserProfile />
    </StyledBox>
  );
};

export default Profile;
