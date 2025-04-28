
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ResultDisplay from "./ResultDisplay";

// This is a simplified version - in a real app, you would connect to your ML model
const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | { isBullying: boolean; confidence: number }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!text.trim()) {
      toast({
        title: "Empty text",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call to ML model
    setTimeout(() => {
      // Simple heuristic for demo: check for common bullying words
      const bullyingWords = ["stupid", "ugly", "hate", "loser", "fat", "dumb", "idiot", "fool"];
      const lowerText = text.toLowerCase();
      
      let isBullying = false;
      let confidence = 0.1; // Base confidence
      
      // Check for presence of bullying words
      for (const word of bullyingWords) {
        if (lowerText.includes(word)) {
          isBullying = true;
          confidence += 0.1 + Math.random() * 0.3; // Add some randomness
        }
      }
      
      // Check for aggressive punctuation
      if ((lowerText.match(/!+/g) || []).length > 1) {
        confidence += 0.1;
      }
      
      // Check for all caps words (shouting)
      if ((text.match(/\b[A-Z]{3,}\b/g) || []).length > 0) {
        confidence += 0.15;
      }
      
      // Cap confidence at 0.95
      confidence = Math.min(0.95, confidence);
      
      // If no signals, generate a low random confidence
      if (!isBullying) {
        confidence = Math.random() * 0.3;
      } else {
        // Ensure bullying confidence is at least 0.6
        confidence = Math.max(0.6, confidence);
      }
      
      setResult({
        isBullying,
        confidence: parseFloat(confidence.toFixed(2)),
      });
      
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        <Card className="p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Analyze Text for Cyberbullying</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter text to check if it contains cyberbullying content. Our AI will analyze the text and 
            provide an assessment.
          </p>
          <Textarea
            placeholder="Enter text to analyze..."
            className="min-h-[120px] mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button 
            onClick={handleAnalyze} 
            className="w-full bg-shield-600 hover:bg-shield-700"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Text"}
          </Button>
        </Card>

        {result && <ResultDisplay result={result} />}

        <Card className="p-6 bg-shield-50">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-shield-600" />
            <h3 className="font-medium">Tips for Safe Online Communication</h3>
          </div>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• Be respectful and kind in your communications</li>
            <li>• Think before you post or send messages</li>
            <li>• Don't share personal information online</li>
            <li>• Report cyberbullying when you see it</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default TextAnalyzer;
