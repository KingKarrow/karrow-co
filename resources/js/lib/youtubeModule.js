// Youtube channel embed script from:
// http://www.gmodules.com/ig/ifr?url=http://www.google.com/ig/modules/youtube.xml&up_channel=macrocosm82&synd=open&w=320&h=390&title=&border=%23ffffff%7C3px%2C1px+solid+%23999999&output=js
(function () {
    var css = '<style>table.gadget{background-position:0%;background:transparent none;border-collapse:collapse;border:0;clear:none;float:none;font-family:arial,sans-serif;font-style:normal;font-variant:normal;height:auto;letter-spacing:normal;line-height:normal;margin:0;padding:0;text-indent:0;text-transform:none;top:auto;vertical-align:middle;white-space:normal;width:auto;word-spacing:normal;}table.gadget span.title a:hover,table.gadget span.title a:visited,table.gadget span.title a:active,table.gadget span.title{font-size:12px;color:#0000cc}table.gadget span.powered a:hover,table.gadget span.powered a:visited,table.gadget span.powered a:active,table.gadget span.powered{font-size:10px;color:#0000cc}</style>';
    var html = '\x3ctable class\x3d\x22gadget\x22 cellspacing\x3d0 cellpadding\x3d0 width\x3d320\x3e\x3ctr\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d\x222\x22\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d2\x3e\x3cdiv style\x3d\x22background:white;padding:3px; border:1px solid #999999;\x22\x3e\x3ciframe src\x3d\x22http://www-open-opensocial.googleusercontent.com/gadgets/ifr?url\x3dhttp%3A%2F%2Fwww.google.com%2Fig%2Fmodules%2Fyoutube.xml\x26container\x3dopen\x26view\x3dhome\x26lang\x3dall\x26country\x3dALL\x26debug\x3d0\x26nocache\x3d0\x26sanitize\x3d0\x26v\x3dc803bf2d4219ef14\x26source\x3d__LOCATION__\x26parent\x3d__LOCATION__\x26libs\x3dcore%3Acore.io#up_channel\x3dmacrocosm82\x26st\x3d%25st%25\x22 width\x3d320 height\x3d390 style\x3d\x22display:block;\x22 frameborder\x3d0 scrolling\x3d\x22no\x22\x3e\x3c/iframe\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d\x22text-align:left;vertical-align:middle;height:28px;\x22\x3e\x3ca href\x3d\x22http://fusion.google.com/ig/add?synd\x3dopen\x26source\x3dggyp\x26moduleurl\x3dhttp://www.google.com/ig/modules/youtube.xml\x22 target\x3d\x22_top\x22\x3e\x3cimg style\x3d\x22border:0;\x22 src\x3d\x22http://www.gmodules.com/ig/images/plus_google.gif\x22\x3e\x3c/a\x3e\x3c/td\x3e\x3ctd style\x3d\x22text-align:right;vertical-align:middle;height:28px;\x22\x3e\x3cspan class\x3d\x22powered\x22\x3e\x3ca href\x3d\x22http://www.google.com/webmasters/gadgets.html\x22 target\x3d\x22_top\x22\x3eGadgets\x3c/a\x3e powered by Google\x3c/span\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e';
    var container = document.getElementById('youtube-module');
    container.innerHTML = css+html;
}) ();