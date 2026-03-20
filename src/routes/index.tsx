import Sidebar from '#/components/features/file-explorer/sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '#/components/ui/resizable';
import { HOTKEYS } from '#/constants/hotkeys';
import { useHotkey } from '@tanstack/react-hotkeys';
import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import { type PanelImperativeHandle } from 'react-resizable-panels';

export const Route = createFileRoute('/')({ component: App });

function App() {
  const sidebarRef = useRef<PanelImperativeHandle | null>(null);

  useHotkey(HOTKEYS.toggleSidebar, () => {
    if (sidebarRef.current) {
      if (sidebarRef.current.isCollapsed()) {
        sidebarRef.current.expand();
      } else {
        sidebarRef.current.collapse();
      }
    }
  });

  return (
    <div className='h-screen'>
      <ResizablePanelGroup orientation='horizontal'>
        <ResizablePanel
          panelRef={sidebarRef}
          defaultSize='20'
          minSize='10'
          maxSize='40'
          collapsible={true}
          collapsedSize='0'
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle className='focus-visible:ring-0' />
        <ResizablePanel>{/* Main Content */}</ResizablePanel>
      </ResizablePanelGroup>
      {/* Command Palette Component */}
    </div>
  );
}
