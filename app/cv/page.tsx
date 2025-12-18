import { addCvItem, deleteCvItem, getCvItems } from "@/lib/cv";
import Section from "@/components/section";
import Badge from "@/components/badge";
import ActionButton from "@/components/action-button";

export default async function CvPage() {
  const items = await getCvItems();

  const byCategory = {
    skill: items.filter((i) => i.category === "skill"),
    language: items.filter((i) => i.category === "language"),
    education: items.filter((i) => i.category === "education"),
    experience: items.filter((i) => i.category === "experience"),
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My CV</h1>

      {/* FORMULAIRE GLOBAL */}
      <form action={addCvItem} className="flex gap-2 mb-10">
        <select name="category" className="border p-2 rounded">
          <option value="skill">Skill</option>
          <option value="language">Language</option>
          <option value="education">Education</option>
          <option value="experience">Experience</option>
        </select>

        <input
          name="value"
          placeholder="Add something…"
          className="border p-2 flex-1 rounded"
          required
        />

        <ActionButton label="Add" color="pink" />
      </form>

      <Section title="Skills">
        {byCategory.skill.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Badge label={item.value} />
            <form action={deleteCvItem.bind(null, items.indexOf(item))}>
              <button className="text-xs text-red-500">✕</button>
            </form>
          </div>
        ))}
      </Section>

      <Section title="Languages">
        {byCategory.language.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Badge label={item.value} />
            <form action={deleteCvItem.bind(null, items.indexOf(item))}>
              <button className="text-xs text-red-500">✕</button>
            </form>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {byCategory.education.map((item, index) => (
          <Badge key={index} label={item.value} />
        ))}
      </Section>

      <Section title="Experience">
        {byCategory.experience.map((item, index) => (
          <Badge key={index} label={item.value} />
        ))}
      </Section>
    </main>
  );
}
