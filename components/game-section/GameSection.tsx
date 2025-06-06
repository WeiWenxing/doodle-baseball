'use client';

import { useState, useRef, useEffect } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GameSectionProps {
  content?: typeof defaultContent;
}

export function GameSection({ content = defaultContent }: GameSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);

  /**
   * Preloads the game in a background thread using a Web Worker.
   * This is a "fire-and-forget" approach to not block the main thread.
   * The worker script is inlined to make the component self-contained.
   */
  useEffect(() => {
    const workerScript = `
      self.addEventListener('message', (event) => {
        const { gameUrl } = event.data;
        if (gameUrl) {
          fetch(gameUrl).catch(err => console.error('[GamePreloader] Fetch error:', err));
        }
      });
    `;

    const blob = new Blob([workerScript], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);

    // Create a new worker from the Blob URL
    const worker = new Worker(workerUrl);
    workerRef.current = worker;

    // Send it the task
    worker.postMessage({
      gameUrl: content.gameSection.game.url
    });

    // Terminate the worker and revoke the Blob URL on component unmount
    return () => {
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
    };
  }, [content.gameSection.game.url]); // Dependency ensures it runs if the url changes

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title,
          theme.gameSection.spacing.title
        )}>
          {content.gameSection.title}
        </h2>
      )}

      {/* 游戏容器 - 移除圆角 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden shadow-xl relative",
          theme.gameSection.colors.container,
          "mb-0 rounded-none" // 移除底部边距，移除圆角
        )}
      >
        <iframe
          src={content.gameSection.game.url}
          className="w-full h-full aspect-video border-0"
          allow="fullscreen"
          title={content.gameSection.game.title}
          loading="lazy"
        />
      </div>

      {/* 按钮行 - 在游戏区域下方，带暗色背景，移除上部圆角 */}
      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mb-16 bg-gray-700/70 dark:bg-gray-800/70 text-white rounded-none p-2 shadow-md">
        {/* 这里可以添加其他按钮 */}

        {/* 全屏按钮 */}
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="ghost"
          className="hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 9L4 4m0 0l5 0M4 4l0 5" />
            <path d="M15 9l5-5m0 0h-5m5 0v5" />
            <path d="M9 15l-5 5m0 0h5m-5 0v-5" />
            <path d="M15 15l5 5m0 0v-5m0 5h-5" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
