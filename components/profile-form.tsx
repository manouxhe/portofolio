import { createProfile } from "@/lib/profile";


export default function ProfileForm() {
  return (
    <form action={createProfile} className="flex flex-col gap-4 mb-8">
     <input
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
          <input
            name="telefon number"
            placeholder="Telefon Number"
            className="border p-2 rounded"
            required
          />
           <input
            name="number"
            placeholder="Write a number"
            className="border p-2 rounded"
            required
          />
          <input
            name="time "
            placeholder="Time"
            className="border p-2 rounded"
            required
          />

      <button className="bg-blue-600 text-white py-2 rounded">
        Create Profile of reservation
      </button>
    </form>
  );
}
