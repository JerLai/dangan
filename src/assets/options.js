/*
Links will be a list of objects containing the following parameters:
links = [
    {
        path: "path/to/link",
        name: "Path",
        icon: imgFile,
        component: reactComponentView,
    }
]
*/
// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// Custom components/views for the links
import Bookmarks from "./views/Bookmarks.js";
import Explore from "./views/Explore.js";
import Home from "./views/Home.js";
import Messages from "./views/Messages.js";
import Notifications from "./views/Notifications.js";
import Profile from "./views/Profile.js";
import Lists from "./views/Lists.js";
import More from "./views/More.js";
const options = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: () => <Home/>,
  },
  {
    path: "/explore",
    name: "Explore",
    icon: SearchIcon,
    component: Explore,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: NotificationsNoneIcon,
    component: Notifications,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: MailOutlineIcon,
    component: Messages,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    icon: BookmarkBorderIcon,
    component: Bookmarks,
  },
  {
    path: "/lists",
    name: "Lists",
    icon: ListAltIcon,
    component: Lists,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: PermIdentityIcon,
    component: Profile,
  },
  {
    path: "/more",
    name: "More",
    icon: MoreHorizIcon,
    component: More,
  },
];

export default options;