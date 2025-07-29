import { sidePanelSections } from "../../lib/constants";
import Panel from "../panel/Panel";
import UserList from "../users/UsersList";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-3">
        <Panel sections={sidePanelSections} />
      </div>
      <div className="col-span-9">
        <UserList />
      </div>
    </div>
  );
};

export default Dashboard;
