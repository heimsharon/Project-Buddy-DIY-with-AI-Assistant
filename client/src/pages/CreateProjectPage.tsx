import { useState, FormEvent } from "react"
import
import { useNavigate}
import { ProjectData } from "@/types/project";
//import auth 

// add login auth check
const steps = [ 'Project Details', 'Material Calculator', ] // Add additional steps 

export default function CreateProjectPage() {

const [isLoading, setIsLoading] = useState (false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState<string | null>(null);

const [step, setStep] = useState(0);
const [completedSteps, setCompletedSteps] = useState<number[]>([]);
const [stepCompletionStatus, setStepCompletionStatus] = useState<boolean[]>([]);

const [form, setForm] = useState<ProjectData | null>(null);
const [stepData, setStepData] = useState<Record<number, any>>({});

const [project, setProject] =useState<ProjectData> ({  
});

function handleSubmit(e: FormEvent) {
  e.preventDefault();
  setIsSuccess(false);
  setError(false);
}

function getStepContent(step: number) {
  switch (step) {

    case 0:
      return (
        <ProjectDetailsStep

        /<
      );

      case 1:
        return (
          <MaterialCalculatorStep

          />
        );
  }
}
}