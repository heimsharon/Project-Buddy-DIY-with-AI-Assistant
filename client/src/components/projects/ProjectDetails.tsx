import { type ProjectData } from "@/types/project";
import { useState, FormEvent, ChangeEvent } from 'react';


export default function ProjectDetails() {
  const [formData, setForm] = useState<ProjectData>({
    projectName: '',
    description: '',
    startDate: '',
    projectEndDate: '',
    status: ProjectStatus.Planning,
    materials: [],
    completedSteps: []
  stepData: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSuccess(false);
    setError(null);


    if (!formData.)
  }




}