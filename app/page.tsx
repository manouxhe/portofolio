import { getProfiles } from "@/lib/profile";
import ProfileForm from "@/components/profile-form";
import ProfileCard from "@/components/profile-card";

export default async function ProfilePage() {
  const profiles = await getProfiles();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Made a new reservation</h1>

      <ProfileForm />

     
    </main>
  );
}
