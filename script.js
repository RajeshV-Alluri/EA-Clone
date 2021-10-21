class App extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Navbar, null), /*#__PURE__*/
      React.createElement(Menubar, null), /*#__PURE__*/
      React.createElement(SideNav, null), /*#__PURE__*/
      React.createElement(Main, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }}


const Header = () => {
  const [profileVisibility, setProfileVisibility] = React.useState('hidden');
  const [helpVisibility, setHelpVisibility] = React.useState('hidden');

  const handleProfileChange = () => {
    if (profileVisibility == 'hidden') {
      setProfileVisibility('visible');
      setHelpVisibility('hidden');
      document.body.style.overflow = "hidden";
    } else {
      setProfileVisibility('hidden');
      document.body.style.overflow = "scroll";
    }
  };

  const handleHelpChange = () => {
    if (helpVisibility == 'hidden') {
      setHelpVisibility('visible');
      setProfileVisibility('hidden');
      document.body.style.overflow = "hidden";
    } else {
      setHelpVisibility('hidden');
      document.body.style.overflow = "scroll";
    }
  };

  const handleLogo = () => {
    setProfileVisibility('hidden');
    setHelpVisibility('hidden');
  };
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("header", { class: "user-navigation" }, /*#__PURE__*/
    React.createElement("div", { class: "profile" }, /*#__PURE__*/
    React.createElement("svg", { class: `${profileVisibility == 'hidden' ? 'nonActiveSVG' : 'activeSVG'}`, id: "profileSVG", viewBox: "0 0 16 16", onClick: handleProfileChange }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", { d: "M7.5,9A4.5,4.5,0,1,0,3,4.5,4.5,4.5,0,0,0,7.5,9Zm0-7A2.5,2.5,0,1,1,5,4.5,2.5,2.5,0,0,1,7.5,2Z" }), /*#__PURE__*/React.createElement("path", { d: "M8,10.028s-0.254-.007-0.506-0.007S7,10.023,7,10.028c-7.033.283-7,3.558-7,6.972H15C15,13.586,14.985,10.312,8,10.028ZM8,15H2.056c0.2-1.946,1.077-2.815,5.024-2.974l0.1,0H7.494l0.326,0,0.1,0c3.928,0.16,4.819,1.03,5.022,2.974H8Z" }))), /*#__PURE__*/
    React.createElement("div", { id: "profile-info", class: "profile-info" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconsignin.svg", alt: "Sign In" }), "Sign In"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconregister.svg", alt: "Create Account" }), "Create Account"))), /*#__PURE__*/



    React.createElement("div", { class: "help" }, /*#__PURE__*/
    React.createElement("svg", { class: `${helpVisibility == 'hidden' ? 'nonActiveSVG' : 'activeSVG'}`, id: "helpSVG", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 17", onClick: handleHelpChange }, /*#__PURE__*/React.createElement("path", { d: "M5.193,0C0.538,0,0,2.673,0,4.684a0.978,0.978,0,0,0,1.955,0c0-1.648.225-2.729,3.238-2.729,2.852,0,2.852,1.45,2.852,2.729a1.951,1.951,0,0,1-1.29,1.675l-0.216.083C4.8,7.108,3.809,7.531,3.809,8.472v3.5a0.978,0.978,0,1,0,1.955,0V8.887c0.4-.209,1.152-0.5,1.474-0.62l0.224-.085A3.831,3.831,0,0,0,10,4.684C10,3.526,10,0,5.193,0Z" }), /*#__PURE__*/React.createElement("path", { d: "M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z" })), /*#__PURE__*/
    React.createElement("div", { id: "help-info", class: "help-info" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "NEED HELP?")), /*#__PURE__*/
    React.createElement("div", { class: "help-articles" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconorigin.svg", alt: "Verify my Origin Login" }), "Verify my Origin Login"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconlink.svg", alt: "Link Origin to my PSN ID" }), "Link Origin to my PSN ID"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconorigincode.svg", alt: "How do I redeem a Code?" }), "How do I redeem a Code?"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconalert.svg", alt: "I can't play online!" }), "I can't play online!")), /*#__PURE__*/

    React.createElement("p", null, "Can't find what you're looking for? Go to ", /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Help"), ", ", /*#__PURE__*/React.createElement("a", { href: "#" }, "Answers HQ"), " or ", /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Forums")))), /*#__PURE__*/



    React.createElement("div", { class: "logo", onClick: handleLogo }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 32 32" }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", { d: "M19.766,8.372L6.927,8.392l-2.093,3.337l12.818-0.004L19.766,8.372 M14.221,20.518c-0.151,0-7.604,0.016-8.114,0.016 c0.249-0.393,1.665-2.611,1.738-2.733c0.163,0,5.014,0,5.271,0l2.122-3.354L3.117,14.467l-2.114,3.342l2.827-0.005L0,23.874h16.151 c0.286-0.453,5.654-9.017,5.904-9.412c0.219,0.334,1.664,2.623,1.9,3.002c-0.363,0-1.682,0-1.682,0l-2.101,3.337 c0,0,0.009,0,0.029,0c0.428,0,5.719,0,5.875,0c0.085,0.135,1.827,2.876,1.921,3.023H32L22.038,8.127 C21.646,8.738,14.311,20.374,14.221,20.518" }))))))));




};

const Navbar = () => {
  const openSideNavBar = () => {
    document.getElementById('side-nav').style.marginLeft = 0;
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    document.getElementById('side-nav').style.pointerEvents = 'auto';
    document.getElementById('side-nav').style.overflow = 'scroll';
  };

  const openMenuBar = () => {
    document.getElementById('menu-bar').style.marginRight = 0;
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    document.getElementById('menu-bar').style.pointerEvents = 'auto';
    document.getElementById('menu-bar').style.overflow = 'scroll';
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "navbar-div sticky-top" }, /*#__PURE__*/
    React.createElement("nav", { id: "navbar", class: "navbar" }, /*#__PURE__*/
    React.createElement("div", { onClick: openSideNavBar, id: "three-dots" }, /*#__PURE__*/
    React.createElement("div", null), /*#__PURE__*/
    React.createElement("div", null), /*#__PURE__*/
    React.createElement("div", null)), /*#__PURE__*/

    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg", alt: "Electronics Arts Home" }), /*#__PURE__*/

    React.createElement("div", { id: "nav-items" }, /*#__PURE__*/
    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("span", null, "Games", /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-down" })), /*#__PURE__*/
    React.createElement("ul", { id: "nav-item-list", style: { display: "flex" } }, /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Browse Games")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Featured Games")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "All Games")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Coming Soon")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Free-To-Play")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Subscribe"))), /*#__PURE__*/

    React.createElement("section", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Platforms")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "PC")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Play Station 5")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Xbox Series X")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Nintendo Switch")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Mobile"))))), /*#__PURE__*/



    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("span", null, "More Experiences", /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-down" })), /*#__PURE__*/
    React.createElement("ul", { id: "nav-item-list" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Subscribe")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Origin")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Competitive Gaming")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Play Live")))), /*#__PURE__*/


    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("span", null, "About", /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-down" })), /*#__PURE__*/
    React.createElement("ul", { id: "nav-item-list" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Company")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Studios")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Our Technology")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Partners")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "News")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Inside EA")))), /*#__PURE__*/


    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("span", null, "Commitments", /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-down" })), /*#__PURE__*/
    React.createElement("ul", { id: "nav-item-list" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Positive Play")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Inclusion & Diversity")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Community Outreach")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "People & Culture")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Environment")))), /*#__PURE__*/


    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("span", null, "Resources", /*#__PURE__*/
    React.createElement("i", { class: "bi bi-chevron-down" })), /*#__PURE__*/
    React.createElement("ul", { id: "nav-item-list" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Help")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Forums")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Parental Controls")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Accessibility")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Careers")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Press")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Investors")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Playtesting"))))), /*#__PURE__*/




    React.createElement("div", { id: "menu" }, /*#__PURE__*/
    React.createElement("span", { onClick: openMenuBar }, "Menu", /*#__PURE__*/
    React.createElement("i", { class: "fas fa-bars" }))))));





};

const Menubar = () => {
  const handleMenuBar = () => {
    document.getElementById('menu-bar').style.marginRight = "-600px";
    document.body.style.overflow = 'scroll';
    document.body.style.pointerEvents = 'auto';
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "menu-bar" }, /*#__PURE__*/
    React.createElement("div", { class: "menu-heading" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg", alt: "Electronics Arts Home" }), /*#__PURE__*/
    React.createElement("i", { onClick: handleMenuBar, class: "bi bi-x" })), /*#__PURE__*/

    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Featured Games")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Shop on Origin")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Play")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Positive Play")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Company")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Studios")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "News")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Competitive Gaming")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Help")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Careers")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Investors")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Press")))));



};

const SideNav = () => {
  const handleSideBar = () => {
    document.getElementById('side-nav').style.marginLeft = "-600px";
    document.body.style.overflow = 'scroll';
    document.body.style.pointerEvents = 'auto';
  };

  const MouseOverImage = () => {
    document.getElementById('ea-logo').style.height = '9em';
    document.getElementById('ea-logo').style.width = '7em';
  };

  const MouseLeaveImage = () => {
    document.getElementById('ea-logo').style.height = '8em';
    document.getElementById('ea-logo').style.width = '6em';
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "side-nav" }, /*#__PURE__*/
    React.createElement("div", { class: "heading" }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("p", null, "All Games")), /*#__PURE__*/
    React.createElement("i", { onClick: handleSideBar, class: "bi bi-x" })), /*#__PURE__*/


    React.createElement("div", { class: "ea-play" }, /*#__PURE__*/
    React.createElement("img", { onMouseOver: MouseOverImage, onMouseLeave: MouseLeaveImage, class: "background-img", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-16x9-png.adapt.crop1x1.767w.", alt: "EA Play logo background" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/React.createElement("img", { id: "ea-logo", onMouseOver: MouseOverImage, onMouseLeave: MouseLeaveImage, src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-mono-logo-svg.svg", alt: "EA Play" }))), /*#__PURE__*/


    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg", alt: "Battlefield 2042 Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image battlefield-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg", alt: "Battlefield 2042 Logo" }))), /*#__PURE__*/


    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/07/fifa22-key-art.jpg.adapt.crop1x1.767p.jpg", alt: "FIFA 22 Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image fifa-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa22-mono-logo.svg", alt: "FIFA 22 logo" }))), /*#__PURE__*/


    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/f1-2021-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/f1-2021-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "F1 2021 Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image f1-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/f1-2021-mono-logo.svg", alt: "F1 21 logo" }))), /*#__PURE__*/


    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2020/10/nfshpr-keyart-1x1.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2020/10/nfshpr-keyart-1x1.jpg.adapt.crop1x1.767p.jpg", alt: "Need For Speed Hot Pursuit Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image nfs-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/nfshpr-logo-white.png", alt: "Need For Speed Hot Pursuit logo" }))), /*#__PURE__*/


    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "Apex Legends Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image apex-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-legends-mono-logo.svg", alt: "Apex Legends logo" }))), /*#__PURE__*/


    React.createElement("li", null, /*#__PURE__*/
    React.createElement("img", { class: "game", src: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "Sims 4 Poster" }), /*#__PURE__*/
    React.createElement("div", { class: "game-logo" }, /*#__PURE__*/
    React.createElement("img", { class: "game-image sims-game", src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/the-sims-4-mono-logo.png", alt: "Sims 4 logo" }))))));





};

const Main = () => {
  return /*#__PURE__*/(
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("section", { class: "main-poster" }, /*#__PURE__*/
    React.createElement("div", { class: "fifa-22-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/images/2021/07/f22-logo-announce-7x2-xl.png.adapt.crop5x2.1455w.png" }), /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/React.createElement("strong", null, "Powered By Football")), /*#__PURE__*/
    React.createElement("p", null, "A new season of innovation across every mode in the game."), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Available Now")))), /*#__PURE__*/

    React.createElement("div", { class: "fifa-22-poster" }, /*#__PURE__*/
    React.createElement("img", { src: "https://i.gadgets360cdn.com/large/FIFA_22_announcement_1626074539139.jpg?downsize=950:*", alt: "FIFA 22 Poster" }))), /*#__PURE__*/



    React.createElement("section", { class: "featured-games" }, /*#__PURE__*/
    React.createElement("h2", null, "Featured Games"), /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", { class: "game-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg", alt: "Battlefield 2042 Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg", alt: "Battlefield 2042 Logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site"))), /*#__PURE__*/


    React.createElement("li", { class: "game-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/07/fifa22-key-art.jpg.adapt.crop1x1.767p.jpg", alt: "FIFA 22 Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa22-mono-logo.svg", alt: "FIFA 22 logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site"))), /*#__PURE__*/


    React.createElement("li", { class: "game-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/f1-2021-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/f1-2021-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "F1 2021 Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/f1-2021-mono-logo.svg", alt: "F1 21 logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site"))), /*#__PURE__*/


    React.createElement("li", { class: "game-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2020/10/nfshpr-keyart-1x1.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2020/10/nfshpr-keyart-1x1.jpg.adapt.crop1x1.767p.jpg", alt: "Need For Speed Hot Pursuit Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/nfshpr-logo-white.png", alt: "Need For Speed Hot Pursuit logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site"))), /*#__PURE__*/


    React.createElement("li", { class: "game-info apex" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "Apex Legends Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-legends-mono-logo.svg", alt: "Apex Legends logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site"))), /*#__PURE__*/


    React.createElement("li", { class: "game-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg", src: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg", alt: "Sims 4 Poster" }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/gin/common/logos/the-sims-4-mono-logo.png", alt: "Sims 4 logo" }), /*#__PURE__*/
    React.createElement("p", null, "Official Site")))), /*#__PURE__*/



    React.createElement("div", { class: "latest-games" }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Latest Games")))), /*#__PURE__*/


    React.createElement("section", { class: "latest-updates" }, /*#__PURE__*/
    React.createElement("h2", null, "Latest Updates"), /*#__PURE__*/

    React.createElement("ul", { class: "categories" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA News")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "EA Play")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "FIFA")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Apex Legends")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Battlefield")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "The Sims 4")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "F1 2021")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Inside EA"))), /*#__PURE__*/


    React.createElement("section", { class: "articles" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/ea-tile-origin-experience.png.adapt.crop16x9.431p.png", alt: "EA article photo" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Electronic Arts Inc.")), /*#__PURE__*/
    React.createElement("strong", null, "07-Oct-2021")), /*#__PURE__*/

    React.createElement("h2", null, "EA Sports Comments on the Future of Football"), /*#__PURE__*/
    React.createElement("p", null, "A message to the global football community from Cam Weber, EA SPORTS Group General Manager.")))), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/common/ea-tile-origin-experience.png.adapt.crop16x9.431p.png", alt: "EA Poster" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Electronic Arts Inc.")), /*#__PURE__*/
    React.createElement("strong", null, "30-Sep-2021")), /*#__PURE__*/

    React.createElement("h2", null, "Battlefield Briefing - Exploring Battlefield\u2122 Portal"), /*#__PURE__*/
    React.createElement("p", null, "Key changes in our Executive Leadership Team")))), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg", alt: "Lost in Random Poster" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Lost In Random")), /*#__PURE__*/
    React.createElement("strong", null, "10-Sep-2021")), /*#__PURE__*/

    React.createElement("h2", null, "A THANK YOU LETTER FROM THE LOST IN RANDOM TEAM"), /*#__PURE__*/
    React.createElement("p", null, "Welcome to the world of Random!")))), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/06/eappp-featured-image-logo-shapes.png.adapt.crop16x9.431p.png", alt: "Positive Play Logo" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Inside EA")), /*#__PURE__*/
    React.createElement("strong", null, "25-Aug-2021")), /*#__PURE__*/

    React.createElement("h2", null, "Using our patents to drive positive play"), /*#__PURE__*/
    React.createElement("p", null, "Announcing a new patent pledge aimed at sharing some of our most innovative technology.")))), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/news/www-ea/images/2021/07/eapl21-featured-thumbnail-final.png.adapt.crop16x9.431p.png", alt: "EA Play Live photo" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Electronic Arts Inc.")), /*#__PURE__*/
    React.createElement("strong", null, "22-Jul-2021")), /*#__PURE__*/

    React.createElement("h2", null, "EA Play Live, in Brief"), /*#__PURE__*/
    React.createElement("p", null, "Everything you need to know about EA Play Live 2021!")))), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/08/kin-bb-prtl-mintext-1.jpg.adapt.crop16x9.431p.jpg", alt: "Battlefield 2042 Poster" }), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Electronic Arts Inc.")), /*#__PURE__*/
    React.createElement("strong", null, "22-Jul-2021")), /*#__PURE__*/

    React.createElement("h2", null, "Battlefield Briefing - Exploring Battlefield\u2122 Portal"), /*#__PURE__*/
    React.createElement("p", null, "Your Battlefield. Your Rules. Everything you need to know about Battlefield\u2122 Portal"))))), /*#__PURE__*/




    React.createElement("div", { class: "read-more" }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Read More"))))), /*#__PURE__*/



    React.createElement("section", { class: "ea-play" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("img", { class: "bg-img", src: "https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play-platform-landing-page/images/2021/01/hero-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg", alt: "EA Play Photo" }), /*#__PURE__*/
    React.createElement("div", { class: "parental-control" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, /*#__PURE__*/React.createElement("strong", null, "Parents: Video game control is in your hands.")), /*#__PURE__*/
    React.createElement("div", { class: "learn-more" }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Learn More"))))), /*#__PURE__*/


    React.createElement("div", { class: "ea-play-info" }, /*#__PURE__*/
    React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" }), /*#__PURE__*/
    React.createElement("p", null, "Don\u2019t just get the game. Get more from your game. Unlock exclusive rewards, members-only content, and a library of top titles."), /*#__PURE__*/
    React.createElement("div", { class: "join-now" }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Join Now"))))))));





};

const Footer = () => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { class: "footer1" }, /*#__PURE__*/
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Impact Report")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Executives")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Privacy & Security")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Political Activities")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Global Human Rights Statement"))), /*#__PURE__*/

    React.createElement("div", { class: "social-handles" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Join The Conversation")), /*#__PURE__*/
    React.createElement("div", { class: "social-links" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-facebook" }))), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-twitter" }))), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-youtube" }))), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-instagram" }))), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "bi bi-discord" })))))))), /*#__PURE__*/






    React.createElement("div", { class: "footer2" }, /*#__PURE__*/
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("a", { href: "" }, /*#__PURE__*/React.createElement("img", { src: "https://media.contentapi.ea.com/content/dam/eacom/en-gb/common/october-ea-ring.png", alt: "EA Logo" })), /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Game Library")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Subscribe")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Origin")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "About")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Accessibility")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Help")))))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));