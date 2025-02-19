import Container from "../../../similar/Container";
import SectionTitle from "../../../similar/SectionTitle";
import RecentCard from "../../../similar/RecentCard";
import { recentItem } from "../../../db/db";

const Recent = () => {
  return (
    <>
      <section className="py-40">
        <Container>
          <SectionTitle>Recents avtivities</SectionTitle>
          <div className="flex justify-center items-center gap-3">
            {recentItem.map((item, index) => (
              <RecentCard key={index} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Recent;
