import { getProfiles } from "@/lib/profile";
import ProfileForm from "@/components/profile-form";
import ProfileCard from "@/components/profile-card";

export default async function AfficheProfilePage() {
  const profiles = await getProfiles();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">reservation</h1>


      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          id={profile.id}
          name={profile.name}
          telefon={profile.telefon}
          number={profile.number}
          time={profile.time}
        />
      ))}
    </main>
  );
}
