"use client";
import { useParams, useRouter } from "next/navigation";

export default function TodoDetailPage() {
  const params = useParams();
  console.log(params);
  return <main>TodoDetailPage</main>;
}
