
import { AlertTriangle, ShieldCheck } from "lucide-react";
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
    <div className="mt-4 border rounded-md p-4">
      {result.isBullying ? (
        <div className="flex gap-2 text-amber-600 mb-2">
          <AlertTriangle className="h-5 w-5" />
          <div>
            <p className="font-medium">Potential Cyberbullying Detected</p>
            <p className="text-sm">This text shows signs of cyberbullying content.</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 text-green-600 mb-2">
          <ShieldCheck className="h-5 w-5" />
          <div>
            <p className="font-medium">No Cyberbullying Detected</p>
            <p className="text-sm">This text appears to be safe.</p>
          </div>
        </div>
      )}
      
      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1">
          <span>Confidence</span>
          <span>{confidencePercent.toFixed(0)}%</span>
        </div>
        <Progress value={confidencePercent} className="h-2" />
      </div>
    </div>
  );
};

export default ResultDisplay;
