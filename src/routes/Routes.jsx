import React from "react";
import { Route } from "react-router-dom";
import BodyContent from "../common/BodyContent";
import TicketSettings from "../components/accountAdmin/TicketSettings";
import EmailTemplate from "../components/accountAdmin/EmailTemplate";
import Announcements from "../components/accountAdmin/Announcements";
import TaxesList from "../components/accountAdmin/TaxesList";



const accountAdminModuleRouteComponents = [
  { path: "/announcements", component: Announcements },
  { path: "/ticketSettings", component: TicketSettings },
  { path: "/emailTemplates", component: EmailTemplate },
  { path: "/taxesList", component: TaxesList },
  
];

export const accountAdminMenus = {
  Setups: [
   
    { url: "taxesList", menuName: "Taxes" },
    { url: "taxesList", menuName: "Taxes" },
  ],
  Email: [
    { url: "emailTemplates", menuName: "Email Templates" },
  ],
  "Ticket Setup": [
    { url: "ticketSettings", menuName: "Ticket Settings" },
   
  ],
  Customization: [
    
    { url: "announcements", menuName: "Announcements" },
  ],
};



const allRouteComponents = [
  accountAdminModuleRouteComponents,
 
];

export const getAdminModuleRoutes = () => {
  let adminModuleRoutes = [];
  accountAdminModuleRouteComponents.map((routes, index) => {
    adminModuleRoutes.push(routes.path);
  });
  return adminModuleRoutes;
};


const Routes = (props) => {
  let requiredComponents = [];
    requiredComponents = [accountAdminModuleRouteComponents];
  return (
    <BodyContent
      page={requiredComponents.map((moduleRoutes, allIndex) =>
        moduleRoutes.map((route, index) => (
          <Route
            key={index++}
            exact
            path={route.path}
            component={route.component}
          ></Route>
        ))
      )}
    ></BodyContent>
  );
};

export default Routes;
