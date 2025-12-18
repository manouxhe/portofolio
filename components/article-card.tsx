"use client";

import { useState } from "react";
import { updateArticle, deleteArticle } from "@/lib/articles";

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

export default function ArticleCard({ id, title, content, createdAt }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  return (
    <div className="border rounded p-4 mb-4 bg-white">
      {!isEditing && (
        <>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700 mt-2">{content}</p>
          <p className="text-xs text-gray-400 mt-2">
            {new Date(createdAt).toLocaleString()}
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-600"
            >
              Edit
            </button>

            <form action={deleteArticle}>
              <input type="hidden" name="id" value={id} />
              <button className="text-red-600">
                Delete
              </button>
            </form>
          </div>
        </>
      )}

      {isEditing && (
        <form action={updateArticle} className="flex flex-col gap-3">
          <input type="hidden" name="id" value={id} />

          <input
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <textarea
            name="content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-1 rounded">
              Save
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
