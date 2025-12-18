import { createArticle } from "@/lib/articles";


export default function ArticleForm() {
  return (
    <form action={createArticle} className="flex flex-col gap-4 mb-8">
      <input
        name="title"
        placeholder="Article title"
        className="border p-2 rounded"
        required
      />

      <textarea
        name="content"
        placeholder="Article content"
        className="border p-2 rounded"
        required
      />

      <button className="bg-blue-600 text-white py-2 rounded">
        Create article
      </button>
    </form>
  );
}
