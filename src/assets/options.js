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

const options = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    //component: Genres,
  },
  {
    path: "/explore",
    name: "Explore",
    icon: SearchIcon,
    //component: Studios,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: NotificationsNoneIcon,
    //component: Seasons,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: MailOutlineIcon,
    //component: General,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: MailOutlineIcon,
    //component: General,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    icon: BookmarkBorderIcon,
    //component: General,
  },
  {
    path: "/lists",
    name: "ListAltIcon",
    icon: ListAltIcon,
    //component: General,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: PermIdentityIcon,
    //component: General,
  },
  {
    path: "",
    name: "More",
    icon: MoreHorizIcon,
    //component: General,
  },
];

export default options;