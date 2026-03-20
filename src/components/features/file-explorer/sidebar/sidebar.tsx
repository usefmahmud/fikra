import SidebarContent from './sidebar-content';
import SidebarHeader from './sidebar-header';

const Sidebar = () => {
  return (
    <div className='flex h-full flex-col'>
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
