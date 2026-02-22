interface ProgressStepperProps {
  steps: string[];
  currentStep: number;
}


export default function ProgressStepper(){
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
}