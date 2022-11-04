import { BodyLayout } from "../components/BodyLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">자린고비</h1>
            <p className="py-6">
              1인 가구의 효율적인 생필품 소비를 위한 가격 비교 사이트
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default Home;
