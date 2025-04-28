
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

interface ResultDisplayProps {
  result: {
    isBullying: boolean;
    confidence: number;
  };
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  const confidencePercent = result.confidence * 100;
  
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {result.isBullying ? (
        <Alert className="border-warning-500 bg-warning-50">
          <AlertTriangle className="h-5 w-5 text-warning-600" />
          <AlertTitle className="text-warning-700">Potential Cyberbullying Detected</AlertTitle>
          <AlertDescription className="text-sm text-warning-600">
            This text shows characteristics that may be considered cyberbullying.
            Please review the content before sharing.
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="border-green-500 bg-green-50">
          <ShieldCheck className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-700">No Cyberbullying Detected</AlertTitle>
          <AlertDescription className="text-sm text-green-600">
            This text appears to be safe and does not contain obvious cyberbullying content.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="bg-white p-4 rounded-md border">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium">Confidence Score</div>
          <div className="text-sm font-medium">{confidencePercent.toFixed(0)}%</div>
        </div>
        <Progress 
          value={confidencePercent} 
          className={`h-2 ${result.isBullying ? 'bg-warning-100' : 'bg-green-100'}`} 
        />
        <div className="mt-2 flex items-start gap-2">
          <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
          <p className="text-xs text-muted-foreground">
            {result.isBullying 
              ? "Higher scores indicate stronger confidence in detecting cyberbullying content." 
              : "Lower scores indicate stronger confidence that the content is safe."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
