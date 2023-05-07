/**
 * @name Carti plugin (red)
 * @authorId 5724287
 * @version 1.0.0
 * @description A plugin required for the Carti theme to function.
 * @source 
 */

let rall = (elem, css, value) => {
  setInterval(() => {
    if (document.querySelectorAll(elem).length) Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
  }, 25);
};

let hover = (elem, css, value) => {
  document.head += `<style>${elem}:hover { ${css}: ${value} !important }</style>`;
};

const styleElement = document.createElement("style");
styleElement.textContent = `::placeholder { color: #EE4B2B; }`;
document.head.appendChild(styleElement);

rall('input', 'backgroundColor', '8B0000');
// background color
rall('.styles__front___vcvuy-camelCase', 'backgroundColor', '#610000');
//buttons
rall('.styles__edge___3eWfq-camelCase', 'backgroundColor', '#610000');
// button outline
rall('.styles__front___vcvuy-camelCase', 'color', '#EE4B2B');
// button text
rall('.sexycontainer3', 'backgroundColor', '#3D0303');
// "account" section background color
rall('.sexycontainer', 'backgroundColor', '#610000');
// "account" section button color
rall('.snipegui', 'backgroundColor', '#3D0303');
// "bazaar" background color
rall('.snipegui', 'border','3px solid #EE4B2B');
// "bazaar" border color
rall('#chatDiv', 'backgroundColor', '#3D0303');
// chat background
rall('#chatDiv', 'border', '3px solid #EE4B2B');
// chat border
rall('.styles__background___2J-JA-camelCase', 'backgroundColor', 'transparent');
//background color
rall('.styles__background___2J-JA-camelCase', 'background', 'linear-gradient(90deg, rgba(184,0,0,1) 0%, rgba(61,3,3,1) 100%)');
//background gradient
rall('.bb_chat_dl', 'backgroundColor', '#610000');
//chat button color
rall('.styles__sidebar___1XqWi-camelCase', 'backgroundColor', '#3D0303');
//sidebar background color
rall('.styles__statsContainer___QnrRB-camelCase', 'backgroundColor', '#3D0303');
// Friends and stats background color
rall('.styles__profileContainer___CSuIE-camelCase', 'backgroundColor', '#3D0303');
//username background color
rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', '#610000');
//stat button borders
rall('.styles__containerHeaderInside___2omQm-camelCase', 'backgroundColor', '#610000');
//stat button fill colors
rall('.styles__containerHeaderRightFriends___3xghM-camelCase', 'backgroundColor', '#610000');
//more stat button borders
rall('.styles__statContainer___QKuOF-camelCase', 'backgroundColor', '#610000');
//MORE STAT BUTTON COLORS
rall('.styles__postsContainer___39_IQ-camelCase', 'backgroundColor', '#3D0303');
//news fill colr
rall('.styles__cardContainer___NGmjp-camelCase', 'backgroundColor', '#3D0303');
//news posts fill color
rall('.styles__chatInputContainer___gkR4A-camelCase', 'backgroundColor', '#8B0000')
//around chat
rall('.styles__header___2O21B-camelCase', 'backgroundColor', '#3D0303');
//News header (title)
rall('.styles__chatEmojiButton___8RFa2-camelCase', 'backgroundColor', '#610000');
//bb chat emoji
rall('.styles__container___1BPm9-camelCase', 'backgroundColor', '#3D0303');
//bb rocket spammer
rall('.styles__chatRooms___o5ASb-camelCase', 'backgroundColor', '#3D0303');
//news menu bar
rall('.styles__editHeaderContainer___2G1ji-camelCase', 'backgroundColor', '#3D0303');
//friends menu bar
rall('.styles__containerHeaderRight___3xghM-camelCase', 'backgroundColor', '#610000');
// leaderboard button borders
rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', '#610000');
//other leaderboard button border
rall('.styles__chatEmojiPickerBody___KR4aN-camelCase', 'backgroundColor', '#3D0303');
//emoji picker background
rall('.styles__chatEmojiPickerHeader___FK4Ac-camelCase', 'backgroundColor', '#610000');
//emoji picker header
rall('.styles__infoContainer___2uI-S-camelCase', 'backgroundColor', '#3D0303');
//bb settings buttons fill
rall('.styles__profileDropdownOption___ljZXD-camelCase', 'backgroundColor', '#3D0303');
//drop down pfp color
rall('.styles__blooksHolder___1skET-camelCase', 'backgroundColor', '#3D0303');
//blook selector background
rall('.styles__container___3St5B-camelCase', 'backgroundColor', '#3D0303');
//blook selector bottom part
rall('.styles__blooketText___1pMBG-camelCase', 'color', '#EE4B2B');
//blacket logo
rall('.styles__chatRoomsButton___K4ABa-camelCase:hover', 'backgroundColor', '#3D0303');
// blacket chat button hover
rall('hr', 'backgroundColor', '#EE4B2B');
//chat div color
rall('.styles__chatRoomsTitle___fR4Av-camelCase', 'color', '#EE4B2B');
// Rooms title in chat
rall('.styles__chatEmojiPickerContainer___KR4aN-camelCase', 'backgroundColor', '#3D0303');
// bottom of emoji container
rall('.styles__tokenBalance___1FHgT-camelCase', 'backgroundColor', '#3D0303');
// token box color
rall('.styles__instantButton___2ezEk-camelCase', 'backgroundColor', '#610000');
// instant open color
rall('.bb_packspam_btn', 'backgroundColor', '#610000');
//bb spam opener color
rall('.styles__pageButton___1wFuu-camelCase:hover', 'backgroundColor', '#3D0303');
// page button hover color
rall('.styles__pageText___1eo7q-camelCase', 'color', '#EE4B2B');
// page text hover
rall('.styles__settingButton___2xaQu-camelCase', 'backgroundColor', '#610000');
//show all blooks button color
rall('.styles__settingButton___2xaQu-camelCase', 'color', '#EE4B2B');
// show all blooks button text color
rall('.styles__settingButton___2xaQu-camelCase', 'border', '3px solid #EE4B2B');
// show all blooks button border color
rall('.styles__blooksHolder___3qZR1-camelCase', 'backgroundColor', '#3D0303');
// blooks display color
rall('.toastMessage', 'backgroundColor', '#3D0303');
//trade req background
rall('.styles__header___WE435-camelCase', 'color', '#EE4B2B');
// settings setting color
rall('.styles__header___22Ne2-camelCase', 'backgroundColor', '#3D0303');
//blacket plus header
rall('.styles__middleWrapper___hjUyY-camelCase', 'backgroundColor', '#3D0303');
//plus perks background
rall('.styles__perkContainer___2rw2I-camelCase', 'backgroundColor', '#610000');
//plus perk button colors
rall('.styles__plan___1OEy4-camelCase', 'backgroundColor', '#610000');
//plus plan background color
rall('.styles__planBackground___3Hn_x-camelCase', 'backgroundColor', '#610000');
//plus color plan heading
rall('.styles__planTop___2JfpA-camelCase', 'backgroundColor', '#610000');
//plus color plan heading
rall('.styles__planBackground___3Hn_x-camelCase', 'background', '#610000');
//plus color plan heading
rall('.styles__planButtonInside___wAgJI-camelCase', 'background', '#610000');
//price of plans
rall('.styles__edge___3eWfq-camelCase', 'background', '#610000');
//price of plans edge
rall('.styles__formsContainer___Fk4Av-camelCase', 'backgroundColor', '#3D0303');
//form border colors
rall('.styles__formsForm___MvA35-camelCase', 'backgroundColor', '#610000');
// form background color
rall('.styles__chatCurrentRoom___MCaV4-camelCase', 'backgroundColor', '#3D0303');
// current room background color
rall('.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase', 'backgroundColor', '#3D0303');
// drop down profile border color
rall('.styles__headerSide___1r1-b-camelCase', 'backgroundColor', '#3D0303');
// left side of blacket home page color
rall('.styles__signUpButton___3_ch3-camelCase', 'backgroundColor', '#3D0303');
// sign up button background color
rall('.styles__loginButton___1e3jI-camelCase', 'backgroundColor', '#3D0303');
// log in button background color
rall('.styles__logoText___1eUDm-camelCase', 'color', '#transparent');
// blacket logo on home page
rall('.plugin', 'backgroundColor', '#8b0000');
// plugin background color
rall('.plugin', 'color', '#301934');
// plugin top color
rall('.styles__bazaarItems___KmNa2-camelCase', 'backgroundColor', '#3D0303');
// bazaar recent listing bottom
rall('.styles__bazaarItem___Meg69-camelCase', 'backgroundColor', '#8b0000');
// bazaar recent listing, items background
rall('.styles__pageButton___1wFuu-camelCase:hover', 'color', '#3D0303');
// blacket sidebar icon hover
rall('.styles__pageIcon___3OSy9-camelCase', 'color', '#EE4B2B')
//blacket sidebar icon main color
rall('#bb_contextmenu', 'backgroundColor', '#3D0303');
// chat right click menu color
rall('.styles__chatMessageMention___2Z1ZU-camelCase', 'backgroundColor', '#3D0303');
// chat mention color
rall('.styles__chatMessageMention___2Z1ZU-camelCase', 'border', '3px solid #EE4B2B');
// chat mention border
rall('.styles__levelBar___2SU0x-camelCase', 'backgroundColor', '#3D0303');
// level bar background color
rall('.styles__headerBadgeBg___12ogR-camelCase', 'backgroundColor', '#3D0303');
// badge bar background color
// this doesnt work on bb because deaf bad coder
rall('.styles__left___9beun-camelCase', 'backgroundColor', '#3D0303');
//changes blook collection outline color
rall('.styles__left___9beun-camelCase', 'border', '3px solid #EE4B2B');
// blook collection border color
rall('.mo', 'backgroundColor', '#3D0303');
// right click chat word fill
rall('.styles__container___2VzTy-camelCase', 'backgroundColor', '#3D0303');
//login background color
rall('.styles__toastContainer___o4pCa-camelCase', 'backgroundColor', '#3D0303');
// notification backgroundColor
rall('.styles__tradingContainer___B1ABS-camelCase', 'backgroundColor', '#3D0303')
// trade blook outline color
rall('.styles__myTokenAmount___ANKHA-camelCase', 'backgroundColor', '#8B0000')
// my token amt background
rall('.styles__tokenBalance___1FHgT-camelCase', 'color', '#EE4B2B')
// token amt color
rall('.styles__otherTokenAmount___SEGGS-camelCase', 'backgroundColor', '#8B0000')
// there token amt
rall('.styles__profileDropdownOption___ljZXD-camelCase', 'color', '#EE4B2B');
// drop down menu option text color
rall('.styles__profileDropdownIcon___3iLIX-camelCase', 'color', '#EE4B2B');
//drop down arrow color
rall('.styles__header___153FZ-camelCase', 'color', '#EE4B2B');
// market text color
rall('.styles__blookGridContainer___AK47P-camelCase', 'backgroundColor', '#3D0303')
// blook trade container
rall('.styles__verticalBlookGridLine___rQWaZ-camelCase', 'backgroundColor', '#8b0000')
// vertical divider blook trade container
rall('.styles__horizontalBlookGridLine___4SAvz-camelCase', 'backgroundColor', '#8b0000')
// horisontal divider blook trade container
rall('.jscolor-wrap div', 'backgroundColor', '#3D0303');
// username and chat color, color picker background
rall('#formBody', 'backgroundColor', '#8B0000');
// form register body fill
rall('#formBody', 'border', '3px solid #EE4B2B');
// form register border
rall('#formAge', 'border','3px solid #EE4B2B' );
// form register age border
rall('#formDiscord', 'border','3px solid #EE4B2B' );
// form register Discord border
rall('.toastMessage', 'border', '3px solid #EE4B2B');
// trade rq border
rall('.styles__chatRooms___o5ASb-camelCase', 'border', '3px solid #EE4B2B');
// chat sidebar border
rall('.styles__toastContainer___o4pCa-camelCase', 'border', '3px solid #EE4B2B');
// toast border
rall('.styles__profileContainer___CSuIE-camelCase', 'border', '3px solid #EE4B2B');
//profile border
rall('.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase', 'border', '3px solid #EE4B2B');
//drop down profile border
rall('.styles__editHeaderContainer___2G1ji-camelCase', 'border', '3px solid #EE4B2B');
// friends menu border
rall('.styles__statsContainer___QnrRB-camelCase', 'border', '3px solid #EE4B2B');
//stats container border
rall('.styles__infoContainer___2uI-S-camelCase', 'border', '3px solid #EE4B2B');
//settings borders
rall('.styles__rightBackground___36mp5-camelCase', 'border', '3px solid #EE4B2B');
// blook showcase border
rall('.styles__friendButton___gj4Ac-camelCase', 'backgroundColor', '#610000');
//friend button color
rall('.styles__chatInputContainer___gkR4A-camelCase', 'border', '3px solid #EE4B2B');
//chat border
rall('.styles__bazaarItems___KmNa2-camelCase', 'border', '3px solid #EE4B2B');
// bazaar listings border
rall('.styles__headerBadgeBg___12ogR-camelCase', 'border', '3px solid #EE4B2B');
//badges border
rall('.sendMsg', 'backgroundColor', '#8b0000')
//bb message box
rall('h1', 'color', '#EE4B2B');
// bb bazaar and global chat colors
rall('.styles__plusButton___2dH73-camelCase', 'background', '#610000');
// store button background color
rall('.styles__plusButton___2dH73-camelCase', 'color', '#EE4B2B');
// store button text color
rall('.styles__plusButton___2dH73-camelCase', 'border', '3px solid #EE4B2B');
//store button border color
rall('.styles__bottomIcon___3Fswk-camelCase', 'color', '#EE4B2B');
//bottom icon colors
rall('.styles__headerIcon___1ykdN-camelCase', 'color', '#EE4B2B');
//setting icon colors
rall('.styles__infoHeader___1lsZY-camelCase', 'color', '#EE4B2B');
//setting title colors
rall('.styles__link___5UR6_-camelCase', 'color', '#EE4B2B');
//setting link colors
rall('.styles__text___1x37n-camelCase', 'color', '#EE4B2B');
//seting text colors
rall('.sendMsg', 'border', '3px solid #EE4B2B');
// BB chat hover color
rall('.styles__containerHeaderInside___2omQm-camelCase', 'color', '#EE4B2B');
//friends and stats button text
rall('.styles__statNum___5RYSd-camelCase', 'color', '#EE4B2B');
// button info text
rall('.styles__statTitle___z4wSV-camelCase', 'color', '#EE4B2B');
// button header text color
rall('.styles__headerButtonInside___26e_U-camelCase', 'color', '#EE4B2B');
// view user and trade button text
rall('.styles__chatInputBox___fvMA4-camelCase', 'backgroundColor', '#8B0000');
//chatbox background color
rall('.styles__chatEmojiButton___8RFa2-camelCase', 'border', '2px solid #EE4B2B');
// chat emoji selector icon border
rall('.styles__chatEmojiButton___8RFa2-camelCase', 'color', '#EE4B2B');
//chat emoji selector icon 
rall('.bb_chat_dl', 'color', '#EE4B2B');
//bb chat icon
rall('.bb_chat_dl', 'border', '2px solid #EE4B2B');
//bb chat icon borders
rall('#op1', 'border', '3px solid #EE4B2B');
//bb rocket send chat box border
rall('#op2', 'border', '3px solid #EE4B2B');
//bb rocket send chat box border
rall('.styles__text___KSL4--camelCase', 'color', '#EE4B2B');
//bb rocket send title
rall('.styles__chatRoomsButton___K4ABa-camelCase', 'color', '#EE4B2B');
//chat sidebar # icon, and text
rall('.styles__header___2O21B-camelCase', 'color', '#EE4B2B');
// news header
rall('.styles__header___kLT5x-camelCase', 'color', '#EE4B2B');
// news post header color
rall('.styles__text___1L6DW-camelCase', 'color', '#EE4B2B');
// news post body color
rall('.styles__dateRow___1jkQT-camelCase', 'color', '#EE4B2B');
//news post date color
rall('.styles__cardContainer___NGmjp-camelCase', 'border', '3px solid #EE4B2B');
//news post border
rall('.styles__header___2O21B-camelCase', 'border', '3px solid #EE4B2B');
//blacket news top outline
rall('.styles__postsContainer___39_IQ-camelCase','border', '3px solid #EE4B2B');
//blacket news posts outline
rall('.styles__front___vcvuy-camelCase', 'border', '3px solid #EE4B2B');
//forms button outline
rall('.styles__containerHeader___3xghM-camelCase', 'border', '3px solid #EE4B2B');
// main header outline
rall('.styles__containerHeaderRightFriends___3xghM-camelCase', 'border', '3px solid #EE4B2B');
//requests ouline
rall('.styles__container___1BPm9-camelCase', 'border', '3px solid #EE4B2B');
// trade user and view user outline
rall('.styles__friendButton___gj4Ac-camelCase', 'backgroundColor', '#3D0303');
//friend button color
rall('.styles__friendButton___gj4Ac-camelCase', 'border', '3px solid #EE4B2B');
//button border color
rall('.styles__friendButton___gj4Ac-camelCase', 'color','#EE4B2B' );
//button coler
rall('.sexycontainer3', 'border', '3px solid #EE4B2B');
//acount section border
rall('.styles__sidebar___1XqWi-camelCase', 'border', '3px solid #EE4B2B');
//sidebar border color
rall('.styles__chatEmojiPickerBody___KR4aN-camelCase', 'border', '3px solid #EE4B2B');
//emoji border
rall('.styles__chatEmojiPickerHeader___FK4Ac-camelCase', 'color', '#EE4B2B');
//emoji header color
rall('.styles__chatEmojiPickerHeader___FK4Ac-camelCase','border', '3px solid #EE4B2B');
// emoji header border
rall('input.noplace', 'border', '3px solid #EE4B2B');
// add plugin chat box border
rall('input.noplace', 'backgroundColor', '#3D0303');
// add plugin chat box color
rall('.jscolor', 'border', '3px solid #EE4B2B');
//change username or chat color container
rall('.jscolor-border', 'border', '3px solid #EE4B2B');
//select username or chat color, border
rall('input', 'backgroundColor', '#8b0000');
// text background color
rall('.styles__container___2VzTy-camelCase', 'border', '3px solid #EE4B2B');
// login page border
rall('.styles__containerHeader___19fyc-camelCase', 'color', '#EE4B2B');
// 'login word color'
rall('.styles__iconFilled___1uSeW-camelCase', 'color', '#EE4B2B')
// login button colors
rall('.styles__buttonFilled___23Dcn-camelCase', 'color', 'EE4B2B');
// lets go! button text
rall('.styles__buttonFilled___23Dcn-camelCase', 'border', '3px solid #EE4B2B')
// lets go! button border
rall('.styles__header___22Ne2-camelCase', 'border', '3px solid #EE4B2B')
// top blacket bar border
rall('.styles__headerRight___nPb83-camelCase', 'color', '#EE4B2B');
// register button text
rall('.styles__statContainer___QKuOF-camelCase', 'border', '3px solid #EE4B2B')
// stat container border
rall('.sexycontainer', 'border', '3px solid #EE4B2B')
//bb stat container border
rall('.styles__container___3St5B-camelCase', 'border', '3px solid #EE4B2B')
// blook selector border
rall('.styles__toastTitle___39Rac-camelCase', 'color', '#EE4B2B')
// toast name color
rall('.styles__toastMessage___xar43-camelCase', 'color', '#EE4B2B')
// toast message color
rall('.snipecloser', 'color', '#EE4B2B');
// sniper button closer color
rall('.styles__formsForm___MvA35-camelCase', 'border', '3px solid #EE4B2B');
// form outline
rall('#amountOfResults', 'color', '#EE4B2B');
// form result text color
rall('#amountOfResults', 'backgroundColor', '#3D0303');
// amount of results background color
rall('#amountOfResults', 'border', '3px solid #EE4B2B');
// amount of results border color
rall('.styles__formsContainer___Fk4Av-camelCase', 'border', '3px solid #EE4B2B');
// form container border
rall('.styles__buttonInside___39vdp-camelCase', 'color', '#EE4B2B');
//  settings button color
rall('p', 'color', '#EE4B2B');
// help text color
rall('.styles__topStats___3qffP-camelCase', 'color', '#EE4B2B')
// credits bage body text color
rall('.styles__containerHeaderRight___3xghM-camelCase', 'border', '3px solid #EE4B2B');
//leaderboard swap button border
rall('a', 'color', '#EE4B2B');
//credits page username text color
rall('.styles__smallChatContainer__RT55a-camelCase', 'border', '3px solid #EE4B2B');
// trade chat border
rall('.styles__blookGridContainer___AK47P-camelCase', 'border', '3px solid #EE4B2B')
// trade blooks border
rall('.styles__tradingContainer___B1ABS-camelCase', 'border', '3px solid #EE4B2B')
//blooks border 
rall('.styles__numTotal___3LQaw-camelCase', 'color', '#EE4B2B');
// amt of blook you have in trade
rall('.styles__input___2vJSW-camelCase', 'color', '#EE4B2B');
//blook number you want to set color
rall('.styles__input___2vJSW-camelCase', 'border', '3px solid #EE4B2B');
// blook number you want to set border
rall('.styles__otherTokenAmount___SEGGS-camelCase', 'border', '3px solid #3D0303')
// there token amt border
rall('.styles__myTokenAmount___ANKHA-camelCase', 'border', '3px solid #3D0303');
// my token amt border
rall('#sexySearchBar', 'border', '3px solid #EE4B2B');
//bb trade blook search bar border
rall('.styles__notificationIndicator___4kvmA-camelCase', 'backgroundColor', '#3D0303')
// notification for friend req background color
rall('.styles__notificationIndicator___4kvmA-camelCase', 'color', '#EE4B2B');
// notification for friend req icon color
rall('.styles__notificationIndicator___4kvmA-camelCase', 'border', '3px solid #EE4B2B');
// notification for friend req icon border
rall('.styles__left___9beun-camelCase', 'color', '#EE4B2B');
//blook collection text color
rall('.styles__rightButtonInside___14imT-camelCase', 'color', '#EE4B2B');
//sell or list button text color
rall('.styles__bazaarItemAuthor___Fk3A1-camelCase', 'color', '#EE4B2B');
//bazaar listings color
rall('.styles__bazaarItemPrice___KG4aZ-camelCase', 'color', '#EE4B2B');
// bazaar price color
rall('.styles__bazaarItem___Meg69-camelCase', 'border', '3px solid #EE4B2B');
// bazaar item border
rall('.styles__tokenBalance___1FHgT-camelCase', 'border', '3px solid #EE4B2B');
// token amt border color
rall('.styles__welcomeText___30V14-camelCase', 'color', '#EE4B2B');
//blooket first private server login text
rall('.styles__logoText___1eUDm-camelCase', 'color', '#EE4B2B');
// login blacket logo color
rall('.styles__welcomeDesc___OyjZk-camelCase', 'color', '#EE4B2B');
// login blacket explanatioin color
rall('.styles__pronounceButton___3lV1b-camelCase', 'color', '#EE4B2B');
// blacket pronunciation color
rall('.styles__welcomeButton___39pgl-camelCase', 'border', '3px solid #EE4B2B');
// blacket discord and register button color
rall('.styles__welcomeButton___39pgl-camelCase:hover', 'background', '#3D0303');
// hover register and discord
rall('.styles__signUpButton___3_ch3-camelCase', 'border', '3px solid #EE4B2B')
// blacket register button border
rall('.styles__loginButton___1e3jI-camelCase', 'border', '3px solid #EE4B2B');
//blacket login button border
rall('.styles__copyrightInformation___f4Dky-camelCase', 'color', '#EE4B2B');
// blacket copyright info
rall('.styles__versionInformation___rk3A2-camelCase', 'color', '#EE4B2B');
// blacket version info
rall('.styles__bazaarResultsText___g4Sxn-camelCase', 'color', '#EE4B2B');
// results color text
rall('.styles__bazaarSelector___Fk3Av-camelCase', 'border', '3px solid #EE4B2B');
// blook selector bazaar border
rall('.styles__bazaarSelectorItems___KmNa2-camelCase', 'border', '3px solid #EE4B2B');
// blook results bazaar border
rall('.styles__instantButton___2ezEk-camelCase', 'color', '#EE4B2B');
// instant open button text
rall('.styles__instantButton___2ezEk-camelCase', 'border', '3px solid #EE4B2b');
// instan open button border
rall('.bb_packspam_btn', 'color', '#EE4B2B');
//pack spam button text
rall('.bb_packspam_btn', 'border', '3px solid #EE4B2B');
// pack spam button border
rall('.styles__planPrice___2fwN6-camelCase', 'color', '#EE4B2B');
// price color in store
rall('.styles__planTop___2JfpA-camelCase', 'color', '#EE4B2B');
// price name in store
rall('.styles__planDetail___V2tYJ-camelCase', 'color', '#EE4B2B');
// package perks in store
rall('.styles__planSpacer___LF8cN-camelCase', 'backgroundColor', '#EE4B2B');
// divider in store
rall('.styles__plan___1OEy4-camelCase, .styles__planBackground___3Hn_x-camelCase', 'border', '3px solid #EE4B2B');
// plan border
rall('.styles__planTop___2JfpA-camelCase', 'border', '3px solid #EE4B2B');
// other plan border
rall('.styles__middleHeader___1knI4-camelCase', 'color', '#EE4B2B');
// perks of plus name color
rall('.styles__perkIcon___3Ke37-camelCase', 'color', '#EE4B2B')
// plus perk icon color
rall('.styles__perkTitle___3vmIt-camelCase', 'color', '#EE4B2B');
// perk header color
rall('.styles__perkInfo___1jvHA-camelCase', 'color', '#EE4B2B');
// perk body color
rall('.styles__perkContainer___2rw2I-camelCase, .styles__perkIcon___3Ke37-camelCase', 'border', '3px solid #EE4B2B');
// perks border
rall('.styles__middleWrapper___hjUyY-camelCase', 'border', '3px solid #EE4B2B');
// perks container border
rall('.styles__chatCurrentRoom___MCaV4-camelCase', 'color', '#EE4B2B');
// current chat room text
rall('.styles__chatCurrentRoom___MCaV4-camelCase', 'border', '3px solid #EE4B2b');
// current chat room border
rall('.styles__rateIcon___11Qwv-camelCase:hover', 'color', '#EE4B2B');
// blook percentages hover
rall('.styles__formsFormUsername___Vamr4-camelCase', 'color', '#EE4B2B')
// form username color
rall('.styles__formsFormDiscord___r94MV-camelCase', 'color', '#EE4B2B');
// form discord color
rall('.styles__formsFormBody___wRo5A-camelCase', 'color', '#EE4B2B');
// form body color
rall('#pageNumber', 'color', '#EE4B2B');
// form page color