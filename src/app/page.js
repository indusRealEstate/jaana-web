
import HomePage from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Top Realtors Dubai - Explore Properties",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}
