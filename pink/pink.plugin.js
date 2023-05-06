/**
 * @name Pink Plugin
 * @authorId 5724287
 * @version 1.0.0
 * @description A plugin required for the Pink theme to function.
 * @source https://github.com/fristicck/Blacket/blob/main/pink%20theme
 */

let rall = (elem, css, value) => {
    setInterval(() => {
      if (document.querySelectorAll(elem).length) {
        Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
      };
    }, 25);
  };

let hover = (elem, css, value) => {
  document.head += `<style>${elem}:hover { ${css}: {value} !important }</style>`;
};

      
  rall('input', 'backgroundColor', 'transparent');
  /*background color*/
  rall('.styles__front___vcvuy-camelCase', 'backgroundColor', '#0B54FE');
    /**buttons*/
  rall('.styles__edge___3eWfq-camelCase', 'backgroundColor', '#0B54FE');
  /** button outline*/
  rall('.styles__front___vcvuy-camelCase', 'color', '#ffffff');
/** button text*/
  rall('.sexycontainer3', 'backgroundColor', '#6f2f99');
/** "account" section background color*/
  rall('.sexycontainer', 'backgroundColor', '#8432DF');
/** "account" section button color*/
  rall('.snipegui', 'backgroundColor', '#6f2f99');
  /** "bazaar" background color */
  rall('.snipegui', 'border', '#4743EF');
  /** "bazaar" border color */
  rall('#chatDiv', 'backgroundColor', '#6f2f99');
 /** chat background */
  rall('#chatDiv', 'border', '#4743EF');
  /** chat border*/
  rall('.styles__background___2J-JA-camelCase', 'backgroundColor', '#8839bd');
/**background color*/
  rall('.bb_chat_dl', 'backgroundColor', '#0B54FE');
/**chat button color*/
  rall('.styles__sidebar___1XqWi-camelCase', 'backgroundColor', '#6f2f99');
  /**sidebar background color*/
  rall('.styles__statsContainer___QnrRB-camelCase', 'backgroundColor', '#6f2f99');
  /** Friends and stats background color*/
  rall('.styles__profileContainer___CSuIE-camelCase', 'backgroundColor', '#6f2f99');
  /**username background color*/
  rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor', '#8432DF');
  /**stat button borders*/
  rall('.styles__containerHeaderInside___2omQm-camelCase', 'backgroundColor', '#0B54FE');
  /**stat button fill colors*/
  rall('.styles__containerHeaderRightFriends___3xghM-camelCase', 'backgroundColor', '#8432DF');
  /**more stat button borders*/
  rall('.styles__statContainer___QKuOF-camelCase', 'backgroundColor', '#8432DF');
  /**MORE STAT BUTTON COLORS*/
  rall('.styles__postsContainer___39_IQ-camelCase', 'backgroundColor', '#6f2f99');
/**news fill colr*/
  rall('.styles__cardContainer___NGmjp-camelCase', 'backgroundColor', '#6f2f99');
/**news posts fill color*/
  rall('.styles__header___2O21B-camelCase', 'backgroundColor', '#6f2f99');
/**News header (title)*/
  rall('.styles__chatInputContainer___gkR4A-camelCase', 'backgroundColor', '#6f2f99');
/**bb chat box*/
  rall('.styles__chatEmojiButton___8RFa2-camelCase', 'backgroundColor', '#0B54FE');
  /**bb chat emoji*/
  rall('.styles__container___1BPm9-camelCase', 'backgroundColor', '#6f2f99');
  /**bb rocket spammer*/
  rall('.styles__chatRooms___o5ASb-camelCase', 'backgroundColor', '#6f2f99');
  /**news menu bar*/
  rall('.styles__editHeaderContainer___2G1ji-camelCase', 'backgroundColor', '#6f2f99');
  /**friends menu bar*/
  rall('.styles__containerHeaderRight___3xghM-camelCase', 'backgroundColor','#0B54FE');
  /** leaderboard button borders*/
  rall('.styles__containerHeader___3xghM-camelCase', 'backgroundColor','#0B54FE');
  /**other leaderboard button border*/
  rall('.styles__chatEmojiPickerBody___KR4aN-camelCase', 'backgroundColor','#6f2f99');
  /**emoji picker background*/
  rall('.styles__chatEmojiPickerHeader___FK4Ac-camelCase', 'backgroundColor','#6f2f99');
  /**emoji picker header*/
rall('.styles__infoContainer___2uI-S-camelCase', 'backgroundColor', '#6f2f99');
/**bb settings buttons fill*/
rall('.styles__profileDropdownOption___ljZXD-camelCase', 'backgroundColor','#6f2f99');
/**drop down pfp color*/
rall('.styles__blooksHolder___1skET-camelCase', 'backgroundColor', '#6f2f99');
/**blook selector background*/
rall('.styles__container___3St5B-camelCase', 'backgroundColor', '#6f2f99');
/**blook selector bottom part*/
rall('.styles__blooketText___1pMBG-camelCase', 'color', '#0B54FE');
