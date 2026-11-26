import { cn } from "@/lib/utils";

// Precisa ser igual às classes duration-500 usadas nas transições.
export const FADE_DURATION_MS = 500;

type LoadingScreenProps = {
  isLeaving?: boolean;
};

export function LoadingScreen({isLeaving = false}: LoadingScreenProps) {
  return (
    <div
      role="status"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-in fade-in duration-500 motion-reduce:animate-none"
    >
      <div
        className={cn(
          "transition-opacity duration-500 motion-reduce:transition-none",
          isLeaving && "opacity-0",
        )}
      >
        <div
          aria-hidden="true"
          className="relative size-24 animate-[spin_1s_linear_infinite_reverse] [--thickness:14px] motion-reduce:[animation-duration:3s] md:size-[150px] md:[--thickness:22px]"
        >
          <div className="size-full rounded-full bg-[conic-gradient(from_180deg,var(--sidebar),transparent_330deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-var(--thickness)),#000_calc(100%-var(--thickness)+1px))]" />

          <span className="absolute bottom-0 left-1/2 size-[var(--thickness)] -translate-x-1/2 rounded-full bg-sidebar" />
        </div>
      </div>

      <span className="sr-only">Carregando...</span>
    </div>
  );
}