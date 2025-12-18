import {
  createProfile,
  getProfiles,
  deleteProfile,
  updateProfile
} from '@/lib/profile'

import ProfileCard from '@/components/profile-card'
import Section from '@/components/section'
import ActionButton from '@/components/action-button'

export default async function ProfilePage() {
  const profiles = await getProfiles()

  return (
    <main className="p-8 bg-gray-50 min-h-screen space-y-8">

      {/* ➕ ADD PROFILE */}
      <Section title="Add profile">
        <form action={createProfile} className="flex gap-2 mb-6">
          <input
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
          <input
            name="role"
            placeholder="Role"
            className="border p-2 rounded"
            required
          />
          <ActionButton label="Add" color="pink" />
        </form>
      </Section>

      {/* 📋 LIST PROFILES */}
      <Section title="Profiles">
        {profiles.length === 0 && (
          <p className="text-gray-500">No profiles yet.</p>
        )}

        {profiles.map((p) => (
          <div key={p.id} className="mb-6 space-y-2">

            {/* DISPLAY */}
            <ProfileCard name={p.name} role={p.role} />

            {/* ✏️ EDIT */}
            <form
              action={updateProfile.bind(null, p.id)}
              className="flex gap-2"
            >
              <input
                name="name"
                defaultValue={p.name}
                className="border p-2 rounded"
                required
              />
              <input
                name="role"
                defaultValue={p.role}
                className="border p-2 rounded"
                required
              />
              <ActionButton label="Edit" color="blue" />
            </form>

            {/* 🗑 DELETE */}
            <form action={deleteProfile.bind(null, p.id)}>
              <ActionButton label="Delete" color="red" />
            </form>

          </div>
        ))}
      </Section>

    </main>
  )
}
