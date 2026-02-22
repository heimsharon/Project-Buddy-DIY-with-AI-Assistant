import { useState } from "react"
import
import { useNavigate}
import { ProjectData } from "@/types/project";
//import auth 

const steps = [ 'Project Details', 'Material Calculator', ] // Add additional 

export default function CreateProjectPage() {

const [form, setForm] = useState<ProjectData | null>(null);
const [step, setStep ] useState(0);
const [isLoading, setIsLoading] = useState (false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState<string | null>(null);
const [project, setProject] =useState<ProjectData> ({
  
})


}