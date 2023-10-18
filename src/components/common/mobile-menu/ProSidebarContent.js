import mobileMenuItems from "@/data/mobileMenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <>
            <MenuItem
              component={
                <Link
                  className={item.path == path ? "active" : ""}
                  href={item.path}
                />
              }
            >
              {item.label}
            </MenuItem>
          </>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
