import { useState } from "react"
import { ProjectData } from "@/types/project";


export default function CreateProject(){

const [form, setForm] = useState<ProjectData | null>(null);
const [isLoading, setIsLoading] = useState (false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState<string | null>(null);
}