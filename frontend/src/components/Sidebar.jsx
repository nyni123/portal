import ProfileCard from "./ProfileCard";
import Stats from "./Stats";
import Groups from "./Groups";
import EngagementStats from "./EngagementStats";
import Contributors from "./Contributors";

export default function Sidebar({user}) {
  return (
    <section className="flex flex-col bg-gray-100 p-4 gap-6 justify-center items-center w-full sm:w-3/12">
      <ProfileCard user={user} />
      <Stats />
      <Groups />
      <EngagementStats />
      <Contributors />
    </section>
  );
}
