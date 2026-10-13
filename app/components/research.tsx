import { FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Research() {
  return (
    <section className="flex flex-col gap-3 pb-8">
      <h2 className="text-sm font-semibold text-zinc-50">Research</h2>
      <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 transition-colors hover:border-zinc-700">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 text-zinc-400 flex-shrink-0">
          <FileText className="h-4 w-4" />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex items-start justify-between gap-2">
            <span className="text-sm font-medium text-zinc-200 leading-snug">
              Deep Learning-Based Yoga Posture Analysis Using EfficientNet-B3
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="accent" className="text-[10px]">
              IEEE · Co-author
            </Badge>
            <span className="text-xs text-zinc-600">2026</span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Co-authored an IEEE research paper on real-time exercise posture
            analysis and feedback using EfficientNet-B3 deep learning model with
            computer vision techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
