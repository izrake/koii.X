import styled from "@emotion/styled";

const Home: React.FC = () => {
  return (
    <div>
      <Title>Home</Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
      <img src={"/static/logo.png"} />
    </div>
  );
};

export default Home;

const Title = styled.h1`
  --color-primary: #ff0000;
  color: var(--color-primary);
`;
