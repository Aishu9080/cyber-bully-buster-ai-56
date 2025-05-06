
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ResultDisplay from "./ResultDisplay";

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
    <div id="analyze" className="w-full max-w-xl mx-auto">
      <div className="bg-white border rounded-md p-4">
        <h2 className="text-lg font-medium mb-2">Check for Cyberbullying</h2>
        <Textarea
          placeholder="Enter text to analyze..."
          className="mb-3 h-24"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button 
          onClick={handleAnalyze} 
          className="w-full"
          disabled={isAnalyzing}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Text"}
        </Button>
      </div>

      {result && <ResultDisplay result={result} />}

      <div className="mt-4 border rounded-md p-4 bg-gray-50 text-sm">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="font-medium">Safety Tips</span>
        </div>
        <ul className="text-gray-600 space-y-1">
          <li>• Think before you post or send messages</li>
          <li>• Report cyberbullying when you see it</li>
        </ul>
      </div>
    </div>
  );
};

export default TextAnalyzer;
