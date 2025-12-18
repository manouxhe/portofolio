import { getArticles } from "@/lib/articles";
import ArticleForm from "@/components/article-form";
import ArticleCard from "@/components/article-card";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Mini Wikipedia</h1>

      <ArticleForm />

      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          createdAt={article.createdAt}
        />
      ))}
    </main>
  );
}
