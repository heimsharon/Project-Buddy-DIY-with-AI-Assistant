import { type ProjectData } from "@/types/project";
import { useState, FormEvent } from 'react';


export default function ProjectDetails() {
  const [forData, setForm] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSuccess(false);
    setError(false);


    if (!)
  }




}