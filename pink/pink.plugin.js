/**
 * @name Pink Plugin
 * @authorId 5724287
 * @version 1.0.0
 * @description A plugin required for the Pink theme to function.
 * @source https://github.com/fristicck/Blacket/blob/main/pink%20theme
 */

let rall = (elem, css, value) => {
  setInterval(() => {
    if (document.querySelectorAll(elem).length) Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
  }, 25);
};

let hover = (elem, css, value) => {
  document.head += `<style>${elem}:hover { ${css}: ${value} !important }</style>`;
};

rall('input', 'backgroundColor', 'transparent');
// background color
rall('.styles__front___vcvuy-camelCase', 'backgroundColor', '#0B54FE');
//buttons
rall('.styles__edge___3eWfq-camelCase', 'backgroundColor', '#0B54FE');
// button outline
rall('.styles__front___vcvuy-camelCase', 'color', '#ffffff');
// button text
rall('.sexycontainer3', 'backgroundColor', '#6f2f99');
// "account" section background color
rall('.sexycontainer', 'backgroundColor', '#8432DF');
// "account" section button color
rall('.snipegui', 'backgroundColor', '#652B8C');
// "bazaar" background color
rall('.snipegui', 'border','3px solid #8839bd');
// "bazaar" border color
rall('#chatDiv', 'backgroundColor', '#652B8C');
// chat background
rall('#chatDiv', 'border', '3px solid #8839bd');
// chat border
rall('.styles__background___2J-JA-camelCase', 'backgroundColor', '#8839bd');
//background color
rall('.bb_chat_dl', 'backgroundColor', '#0B54FE');
//chat button color
rall('.styles__sidebar___1XqWi-camelCase', 'backgroundColor', '#6f2f99');
//sidebar background color
rall('.styles__statsContainer___QnrRB-camelCase', 'backgroundColor', '#6f2f99');
// Friends and stats background color
rall('.styles__profileContainer___CSuIE-camelCase', 'backgroundColor', '#6f2f99');
//username background color
rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', '#0B54FE');
//stat button borders
rall('.styles__containerHeaderInside___2omQm-camelCase', 'backgroundColor', '#0B54FE');
//stat button fill colors
rall('.styles__containerHeaderRightFriends___3xghM-camelCase', 'backgroundColor', '#0B54FE');
//more stat button borders
rall('.styles__statContainer___QKuOF-camelCase', 'backgroundColor', '#8432DF');
//MORE STAT BUTTON COLORS
rall('.styles__postsContainer___39_IQ-camelCase', 'backgroundColor', '#6f2f99');
//news fill colr
rall('.styles__cardContainer___NGmjp-camelCase', 'backgroundColor', '#6f2f99');
//news posts fill color
rall('.styles__header___2O21B-camelCase', 'backgroundColor', '#6f2f99');
//News header (title)
rall('.styles__chatInputContainer___gkR4A-camelCase', 'backgroundColor', '#6f2f99');
//bb chat box
rall('.styles__chatEmojiButton___8RFa2-camelCase', 'backgroundColor', '#0B54FE');
//bb chat emoji
rall('.styles__container___1BPm9-camelCase', 'backgroundColor', '#6f2f99');
//bb rocket spammer
rall('.styles__chatRooms___o5ASb-camelCase', 'backgroundColor', '#6f2f99');
//news menu bar
rall('.styles__editHeaderContainer___2G1ji-camelCase', 'backgroundColor', '#6f2f99');
//friends menu bar
rall('.styles__containerHeaderRight___3xghM-camelCase', 'backgroundColor', '#0B54FE');
// leaderboard button borders
rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', '#0B54FE');
//other leaderboard button border
rall('.styles__chatEmojiPickerBody___KR4aN-camelCase', 'backgroundColor', '#6f2f99');
//emoji picker background
rall('.styles__chatEmojiPickerHeader___FK4Ac-camelCase', 'backgroundColor', '#0B54FE');
//emoji picker header
rall('.styles__infoContainer___2uI-S-camelCase', 'backgroundColor', '#6f2f99');
//bb settings buttons fill
rall('.styles__profileDropdownOption___ljZXD-camelCase', 'backgroundColor', '#6f2f99');
//drop down pfp color
rall('.styles__blooksHolder___1skET-camelCase', 'backgroundColor', '#6f2f99');
//blook selector background
rall('.styles__container___3St5B-camelCase', 'backgroundColor', '#6f2f99');
//blook selector bottom part
rall('.styles__blooketText___1pMBG-camelCase', 'color', '#0B54FE');
//blacket logo
rall('.styles__chatRoomsButton___K4ABa-camelCase:hover', 'backgroundColor', '#6f2f99');
// blacket chat button hover
rall('hr', 'backgroundColor', '#0B54FE');
//chat div color
rall('.styles__chatRoomsTitle___fR4Av-camelCase', 'color', '#0B54FE');
// Rooms title in chat
rall('.styles__chatEmojiPickerContainer___KR4aN-camelCase', 'backgroundColor', '#6f2f99');
// bottom of emoji container
rall('.styles__tokenBalance___1FHgT-camelCase', 'backgroundColor', '#6f2f99');
// token box color
rall('.styles__instantButton___2ezEk-camelCase', 'backgroundColor', '#0B54FE');
// instant open color
rall('.bb_packspam_btn', 'backgroundColor', '#0B54FE');
//bb spam opener color
rall('.styles__pageButton___1wFuu-camelCase:hover', 'backgroundColor', '#6f2f99');
// page button hover color
rall('.styles__pageText___1eo7q-camelCase', 'color', '#ffffff');
// page text hover
rall('.styles__settingButton___2xaQu-camelCase', 'backgroundColor', '#0b54FE');
//show all blooks button color
rall('.styles__blooksHolder___3qZR1-camelCase', 'backgroundColor', '#8839bd');
// blooks display color
rall('.toastMessage', 'backgroundColor', '#6f2f99');
//trade req background
rall('.styles__header___WE435-camelCase', 'color', '#ffffff');
// settings setting color
rall('.styles__header___22Ne2-camelCase', 'backgroundColor', '#6f2f99');
//blacket plus header
rall('.styles__middleWrapper___hjUyY-camelCase', 'backgroundColor', '#6f2f99');
//plus perks background
rall('.styles__perkContainer___2rw2I-camelCase', 'backgroundColor', '#0B54FE');
//plus perk button colors
rall('.styles__plan___1OEy4-camelCase', 'backgroundColor', '#6f2f99');
//plus plan background color
rall('.styles__formsContainer___Fk4Av-camelCase', 'backgroundColor', '#6f2f99');
//form border colors
rall('.styles__formsForm___MvA35-camelCase', 'backgroundColor', '#0B54FE');
// form background color
rall('.styles__chatCurrentRoom___MCaV4-camelCase', 'backgroundColor', '#0B54FE');
// current room background color
rall('.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase', 'backgroundColor', '#6f2f99');
// drop down profile border color
rall('.styles__headerSide___1r1-b-camelCase', 'backgroundColor', '#6f2f99');
// left side of blacket home page color
rall('.styles__signUpButton___3_ch3-camelCase', 'backgroundColor', '#0B52FE');
// sign up button background color
rall('.styles__loginButton___1e3jI-camelCase', 'backgroundColor', '#0B52FE');
// log in button background color
rall('.styles__logoText___1eUDm-camelCase', 'color', '#0B54FE');
// blacket logo on home page
rall('.plugin', 'backgroundColor', '#8839bd');
// plugin background color
rall('.plugin', 'color', '#301934');
// plugin top color
rall('.styles__bazaarItemsContainer___GkAC2-camelCase', 'backgroundColor', '#6f2f99');
// bazaar recent listing background
rall('.styles__bazaarItems___KmNa2-camelCase', 'backgroundColor', '#6f2f99');
// bazaar recent listing bottom
rall('.styles__bazaarItem___Meg69-camelCase', 'backgroundColor', '#8839bd');
// bazaar recent listing, items background
rall('.styles__pageButton___1wFuu-camelCase:hover', 'color', '#ffffff');
// blacket sidebar icon hover
rall('#bb_contextmenu', 'backgroundColor', '#6f2f99');
// chat right click menu color
rall('.styles__chatMessageMention___2Z1ZU-camelCase', 'backgroundColor', '#8839bd');
// chat mention color
rall('.styles__levelBar___2SU0x-camelCase', 'backgroundColor', '#6f2f99');
// level bar background color
rall('.styles__headerBadgeBg___12ogR-camelCase', 'backgroundColor', '#6f2f99');
// badge bar background color
// this doesnt work on bb because deaf bad coder
rall('.styles__left___9beun-camelCase', 'backgroundColor', '#6f2f99');
//changes blook collection outline color
rall('.mo', 'backgroundColor', '#6f2f99');
// right click chat word fill
rall('.styles__container___2VzTy-camelCase', 'backgroundColor', '#6f2f99');
//login background color

//login button color
rall('.styles__toastContainer___o4pCa-camelCase', 'backgroundColor', '#6f2f99');
// notification backgroundColor
rall('.styles__tradingContainer___B1ABS-camelCase', 'backgroundColor', '#6f2f99')
// trade blook outline color
rall('.styles__myTokenAmount___ANKHA-camelCase', 'backgroundColor', '#6f2f99')
// my token amt background
rall('.styles__otherTokenAmount___SEGGS-camelCase', 'backgroundColor', '#6f2f99')
// there token amt
rall('.styles__blookGridContainer___AK47P-camelCase', 'backgroundColor', '#6f2f99')
// blook trade container
rall('.styles__verticalBlookGridLine___rQWaZ-camelCase', 'backgroundColor', '#8839bd')
// vertical divider blook trade container
rall('.styles__horizontalBlookGridLine___4SAvz-camelCase', 'backgroundColor', '#8839bd')
// horisontal divider blook trade container
rall('.jscolor-wrap div', 'backgroundColor', '#6f2f99');
// username and chat color, color picker background
rall('#formBody', 'backgroundColor', '#6f2f99');
// form register body fill
rall('.toastMessage', 'border', '3px solid #8839bd');
// trade rq border
rall('.styles__chatRooms___o5ASb-camelCase', 'border', '3px solid #8839bd');
// chat sidebar border
rall('.styles__toastContainer___o4pCa-camelCase', 'border', '3px solid #8839bd');
// toast border
rall('.styles__profileContainer___CSuIE-camelCase', 'border', '3px solid #8839bd');
//profile border
rall('.styles__profileContainer___CSuIE-camelCase:hover>.styles__profileDropdownMenu___2jUAA-camelCase', 'border', '3px solid #8839bd');
//drop down profile border
rall('.styles__editHeaderContainer___2G1ji-camelCase', 'border', '3px solid #8839bd')
// friends menu border
rall('.styles__statsContainer___QnrRB-camelCase', 'border', '3px solid #8839bd')
//stats container border
rall('.styles__infoContainer___2uI-S-camelCase', 'border', '3px solid #8839bd')
//settings borders
rall('.styles__rightBackground___36mp5-camelCase', 'border', '3px solid #8839bd')
// blook showcase border
rall('.styles__friendButton___gj4Ac-camelCase', 'backgroundColor', '#0b54fe')
//friend button color
rall('.styles__chatInputContainer___gkR4A-camelCase', 'border', '3px solid #8839bd')
//chat border
rall('.styles__bazaarItems___KmNa2-camelCase', 'border', '3px solid #8839bd')
// bazaar listings border
rall('.styles__headerBadgeBg___12ogR-camelCase', 'border', '3px solid #8839bd')
//badges border
