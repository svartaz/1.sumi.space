import React from 'react';
import Layout from "/components/layout";
import Ruby from "/components/ruby";

const Color = ({ color }) => pug`
  span(style={color}) ■
`;

const Img = ({ src }) => pug`
  a(href=src): img(src=src)
`;

const suzuli = {
  heightM: 1.75,
  weightKg: 70,
  names: [
    "硯",
    "suzuli (ja, [sɯzɯɾi])",
    "gin (yue, [ŋiːn˧])",
    "la .ximrok (jbo, [la ʔximrok])",
  ],
  age: 23
};
const mitulu = {
  heightM: 1.85,
  weightKg: 80,
  names: [
    "盈",
    "mitulu (ja, [mitɯɾɯ])",
    "ìg (yue, [ɪŋ˧˩])",
    "la .liktis (jbo, [la ʔliktis])",
  ],
  age: 21
};

const T20211031 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>急遽描いたものですがこれでゆるしてくｄさい <a href="https://t.co/RI31p4pqZN">pic.twitter.com/RI31p4pqZN</a></p>&mdash; 司ろう。 (@shi46_u) <a href="https://twitter.com/shi46_u/status/1454814733920464900?ref_src=twsrc%5Etfw">October 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210730 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/icTLFcsb59">https://t.co/icTLFcsb59</a></p>&mdash; 初夏の夜風の涼しさ (@sumiQj) <a href="https://twitter.com/sumiQj/status/1421131605460979718?ref_src=twsrc%5Etfw">July 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>)
const T20210718 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>れんちゅ <a href="https://t.co/sG1zv9pJIJ">pic.twitter.com/sG1zv9pJIJ</a></p>&mdash; 絹豆腐📛 (@momentoufuR18) <a href="https://twitter.com/momentoufuR18/status/1416882380334243841?ref_src=twsrc%5Etfw">July 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210715 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>? <a href="https://t.co/J2GFIIL8mm">pic.twitter.com/J2GFIIL8mm</a></p>&mdash; Totsuka (@ttqss) <a href="https://twitter.com/ttqss/status/1415714345334415360?ref_src=twsrc%5Etfw">July 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210709 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/LWAQzq3tiw">pic.twitter.com/LWAQzq3tiw</a></p>&mdash; 初夏の夜風の涼しさ (@sumiqj) <a href="https://twitter.com/sumiqj/status/1413499483258638341?ref_src=twsrc%5Etfw">July 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210627 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>skebで描かせてもらったよそ様のキャラ, めちゃ好みだったので楽しかった<br />残像ちんの修正がどうすればよいのか全然わからなかった, これも勉強ですね。。。 <a href="https://t.co/tsTvNadjCd">pic.twitter.com/tsTvNadjCd</a></p>&mdash; 🔞さぶこ (@sabu_ur) <a href="https://twitter.com/sabu_ur/status/1409123563672510469?ref_src=twsrc%5Etfw">June 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210607 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/hashtag/lewd?src=hash&amp;ref_src=twsrc%5Etfw">#lewd</a> 盈君 <a href="https://t.co/rsJF0TLQMu">pic.twitter.com/rsJF0TLQMu</a></p>&mdash; 初夏の夜風の涼しさ (@sumiqj) <a href="https://twitter.com/sumiqj/status/1401933201350664197?ref_src=twsrc%5Etfw">June 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210510 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>生首しか描けない <a href="https://t.co/Tb41nUC7wO">pic.twitter.com/Tb41nUC7wO</a></p>&mdash; 初夏の夜風の涼しさ (@sumiqj) <a href="https://twitter.com/sumiqj/status/1391770750495850498?ref_src=twsrc%5Etfw">May 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210509 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>硯君納品頂いた! 有り難うございました!! <a href="https://t.co/oeXk9yIMRz">https://t.co/oeXk9yIMRz</a></p>&mdash; хлоод бризи ноцни лꙗта вчєсна (@sumiqj) <a href="https://twitter.com/sumiqj/status/1391332944501829633?ref_src=twsrc%5Etfw">May 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210315 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>お待ｯｯｯｯｯｯｯｯたせしました！！！！！スプラッタホラー映画を見てる2人を納品させていただきましたー！！！ 楽しかったあ<br />ありがとうございました❣️<a href="https://t.co/jmW8NfkKzB">https://t.co/jmW8NfkKzB</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <a href="https://twitter.com/skeb_jp?ref_src=twsrc%5Etfw">@skeb_jp</a>より <a href="https://t.co/X3cgkxsomH">pic.twitter.com/X3cgkxsomH</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1371471958886391819?ref_src=twsrc%5Etfw">March 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201230 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/57X83srnGH">https://t.co/57X83srnGH</a><br />素鉄（<a href="https://t.co/u94AW2qNF8">https://t.co/u94AW2qNF8</a>）先生に納品頂いた硯君, めっちゃ好い</p>&mdash; 初夏の夜風の涼しさ (@smiqy) <a href="https://twitter.com/smiqy/status/1344210173661835265?ref_src=twsrc%5Etfw">December 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201210 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>skeb納品しましたーーー！！！！！リクエストありがとうございます！！！！！目隠れ髭は最高だな………今週の標語は「そのちんちん透けるよ」です<a href="https://t.co/qvVdZyiJ5e">https://t.co/qvVdZyiJ5e</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <a href="https://twitter.com/skeb_jp?ref_src=twsrc%5Etfw">@skeb_jp</a>より <a href="https://t.co/kE4mOPkESK">pic.twitter.com/kE4mOPkESK</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1337004643235160064?ref_src=twsrc%5Etfw">December 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201208 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>納品しました　 <a href="https://t.co/nrDnzCPVB5">https://t.co/nrDnzCPVB5</a> <a href="https://t.co/E5f0pde8yt">pic.twitter.com/E5f0pde8yt</a></p>&mdash; 田中TAN (@l8TANNSFW) <a href="https://twitter.com/l8TANNSFW/status/1336289586549407745?ref_src=twsrc%5Etfw">December 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201130 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>skeb納品させていただきました〜！！！！ありがとうございますイェイイェイ！！！！18禁！！！！！！！！！！！！ <a href="https://t.co/CZHF5sFImb">pic.twitter.com/CZHF5sFImb</a></p>&mdash; 肉駄🔞 (@nikuda2929) <a href="https://twitter.com/nikuda2929/status/1333099976650579973?ref_src=twsrc%5Etfw">November 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201122 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/rBxQBfdM5S">https://t.co/rBxQBfdM5S</a><br />激辛拉麵🍜を食べる硯君を <a href="https://twitter.com/tino17_?ref_src=twsrc%5Etfw">@tino17_</a> さんに納品して頂きました!!<br />めっちゃかわいい……感謝……</p>&mdash; ſumı (@smiqy) <a href="https://twitter.com/smiqy/status/1330337966095544320?ref_src=twsrc%5Etfw">November 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201021 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>共感を得られなかったグロかわ狼フード <a href="https://t.co/MxQJZq1Ls4">pic.twitter.com/MxQJZq1Ls4</a></p>&mdash; 絹豆腐📛 (@momentoufuR18) <a href="https://twitter.com/momentoufuR18/status/1318916428586627073?ref_src=twsrc%5Etfw">October 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201009 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/TOS?ref_src=twsrc%5Etfw">@tos</a> 盈君 <a href="https://t.co/BbstJTFwK5">https://t.co/BbstJTFwK5</a> <a href="https://t.co/K5B93wGDQq">pic.twitter.com/K5B93wGDQq</a></p>&mdash; suzurı ıs my orıgınal character. (@smiqy) <a href="https://twitter.com/smiqy/status/1314648291636703232?ref_src=twsrc%5Etfw">October 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201015 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>有り難う……神…………<a href="https://twitter.com/momentoufuR18?ref_src=twsrc%5Etfw">@momentoufuR18</a> <a href="https://t.co/ewEG9IIfod">pic.twitter.com/ewEG9IIfod</a></p>&mdash; ſumı (@smiqy) <a href="https://twitter.com/smiqy/status/1316746721121058817?ref_src=twsrc%5Etfw">October 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20201006 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/5UhCXe8lOG">pic.twitter.com/5UhCXe8lOG</a></p>&mdash; 墨幽 (@smiqy) <a href="https://twitter.com/smiqy/status/1313459340506853376?ref_src=twsrc%5Etfw">October 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200909 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>身長差 (列べただけ) <a href="https://t.co/5rReHHdnqA">pic.twitter.com/5rReHHdnqA</a></p>&mdash; 初夏の夜風の涼しさ (@smiqy) <a href="https://twitter.com/smiqy/status/1303539039505506305?ref_src=twsrc%5Etfw">September 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200822 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>後輩君の表情 考 <a href="https://t.co/I2JEPNS3nt">pic.twitter.com/I2JEPNS3nt</a></p>&mdash; 初夏の夜風の涼しさ (@smiqy) <a href="https://twitter.com/smiqy/status/1297245606977523712?ref_src=twsrc%5Etfw">August 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200804 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>まあまあ上手くかけたと思う <a href="https://t.co/2U64U2EcRf">pic.twitter.com/2U64U2EcRf</a></p>&mdash; 絹豆腐📛 (@momentoufuR18) <a href="https://twitter.com/momentoufuR18/status/1290307240197386246?ref_src=twsrc%5Etfw">August 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200731 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>🔞NFSW🔞<br />skeb納品しました！穴まで描きたかった〜〜〜〜ッ！<br />リクエストありがとうございました🌞<a href="https://t.co/cqMdrGNWyZ">https://t.co/cqMdrGNWyZ</a> <a href="https://t.co/kYUK5iYora">pic.twitter.com/kYUK5iYora</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1289200726829195264?ref_src=twsrc%5Etfw">July 31, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200724 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/sumimq?ref_src=twsrc%5Etfw">@sumimq</a> スミくんはぴば♥ <a href="https://t.co/LnbuWVojri">pic.twitter.com/LnbuWVojri</a></p>&mdash; 斎川 (@ti17_) <a href="https://twitter.com/ti17_/status/1286677524563365888?ref_src=twsrc%5Etfw">July 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200608 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>硯君 <a href="https://t.co/0DySjnl0jo">pic.twitter.com/0DySjnl0jo</a></p>&mdash; суми (@sumimq) <a href="https://twitter.com/sumimq/status/1270015188935172097?ref_src=twsrc%5Etfw">June 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200530 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>完 <a href="https://t.co/sZA5QWL5K9">pic.twitter.com/sZA5QWL5K9</a></p>&mdash; СУМИ (@SumiMq) <a href="https://twitter.com/SumiMq/status/1266767231813214208?ref_src=twsrc%5Etfw">May 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200424 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>リクエストありがとうございました～！Skeb(<a href="https://t.co/b5k3RNydjW">https://t.co/b5k3RNydjW</a> )にて, 納品完了です！ <br />※NSFW+18 <a href="https://t.co/GJ892FBly9">pic.twitter.com/GJ892FBly9</a></p>&mdash; 九磨🔞 (@9ma_param) <a href="https://twitter.com/9ma_param/status/1253513328783065088?ref_src=twsrc%5Etfw">April 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200414 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>スズリ君の後輩君ことミツル君, この感じで行きます <a href="https://t.co/IzSj30XZYI">pic.twitter.com/IzSj30XZYI</a></p>&mdash; 𝔭𝔥𝔞𝔩𝔩𝔲𝔰, 𝔠𝔞𝔫𝔫𝔞𝔟𝔦𝔰, 𝔱𝔥𝔞𝔫𝔞𝔱𝔬𝔰 (@smgvn) <a href="https://twitter.com/smgvn/status/1250046521636085761?ref_src=twsrc%5Etfw">April 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200413 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>skeb納品しました。ファーストリクエスト!ありがとうございました! R18NSFW <a href="https://t.co/CHKZMCC57p">https://t.co/CHKZMCC57p</a> <a href="https://t.co/ubMINM53hw">pic.twitter.com/ubMINM53hw</a></p>&mdash; T🔞 (@18TANNSFW) <a href="https://twitter.com/18TANNSFW/status/1249605824080539648?ref_src=twsrc%5Etfw">April 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20191004 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/melanophil?ref_src=twsrc%5Etfw">@melanophil</a> さんが生活物資支援してくれたからお礼に彼のオリキャラ(硯くん)のfanart描いた(これがパパ活)<br /><br />みんなも絹くん(180/73/21/大学生)にサポしてくれよな～ <a href="https://t.co/hA3AXsvwSy">pic.twitter.com/hA3AXsvwSy</a></p>&mdash; 絹豆腐 (@momentoufuR18) <a href="https://twitter.com/momentoufuR18/status/1180149743692812288?ref_src=twsrc%5Etfw">October 4, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20190926 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>うーんいない <a href="https://t.co/8lFhYofgu6">pic.twitter.com/8lFhYofgu6</a></p>&mdash; 司ろう。 (@shi46_u) <a href="https://twitter.com/shi46_u/status/1177286451647508480?ref_src=twsrc%5Etfw">September 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20190831 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>線画やる前に飽きちゃった…… (終)  <a href="https://t.co/M6klCWOTCN">pic.twitter.com/M6klCWOTCN</a></p>&mdash; 初夏の夜風の涼しさ (@sumigv) <a href="https://twitter.com/sumigv/status/1167690971410309120?ref_src=twsrc%5Etfw">August 31, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20190803 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/melanophil?ref_src=twsrc%5Etfw">@melanophil</a> めちゃくちゃ遅くなりまして申し訳ないのですがお誕生日おめでとうございます…！ happy birtday... <a href="https://t.co/0XZUjutoOi">pic.twitter.com/0XZUjutoOi</a></p>&mdash; 甘い酒 (@sweetZAKE) <a href="https://twitter.com/sweetZAKE/status/1157737672439320576?ref_src=twsrc%5Etfw">August 3, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20190718 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/tRtU7KUMdD">https://t.co/tRtU7KUMdD</a><a href="https://twitter.com/sikotamazou?ref_src=twsrc%5Etfw">@sikotamazou</a> 先生に依頼していたスズリ君が納品されました　最高に可愛い　文句無し　依頼して良かった</p>&mdash; ſumı (@smiqy) <a href="https://twitter.com/smiqy/status/1151805582556352513?ref_src=twsrc%5Etfw">July 18, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20181204 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>わかんなかったとこは, 捏造した <a href="https://t.co/MPDLpSVi1Q">pic.twitter.com/MPDLpSVi1Q</a></p>&mdash; 一人 (@nasu_zoi) <a href="https://twitter.com/nasu_zoi/status/1069800047636856832?ref_src=twsrc%5Etfw">2018年12月4日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20200710 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>Commission<a href="https://t.co/GCP58cuKd5">https://t.co/GCP58cuKd5</a> <a href="https://t.co/5sHvE7QLqa">pic.twitter.com/5sHvE7QLqa</a></p>&mdash; ミネむら (@minefarmkun) <a href="https://twitter.com/minefarmkun/status/1281632927529332736?ref_src=twsrc%5Etfw">July 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20220107 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>Skebありがとうございました！<a href="https://t.co/sdYui5BcE1">https://t.co/sdYui5BcE1</a><a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://t.co/nSLnroOfRg">pic.twitter.com/nSLnroOfRg</a></p>&mdash; Pozon2🔞 (@Pozonuun) <a href="https://twitter.com/Pozonuun/status/1479281810123390978?ref_src=twsrc%5Etfw">January 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20220202 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>【R-18🔞】skeb納品しました。リクエストありがとうございました！<a href="https://t.co/MUKQZBYvja">https://t.co/MUKQZBYvja</a> <a href="https://t.co/UlIjonaXpG">pic.twitter.com/UlIjonaXpG</a></p>&mdash; はいき｜𝗛𝗔𝗜𝗞𝗜 (@haiki396g) <a href="https://twitter.com/haiki396g/status/1488869489685012485?ref_src=twsrc%5Etfw">February 2, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);

const title = "suzuli & mitulu";
const sections = [
  {
    title: "about",
    children: pug`
      table.center(style={maxWidth: "100%"})
        tr
          th
          td(style={textAlign: "center"})
            img.center(src="/image/char-1/suzuli.svg", width="64px")
          td(style={textAlign: "center"})
            img.center(src="/image/char-1/mitulu.svg", width="64px")
        tr
          th name
          for p in [suzuli, mitulu]
            td: ul
              for name in p.names
                li= name
        tr
          th iamge
          td(style={"text-align": "center"})
            T20201230
          td(style={"text-align": "center"})
            T20201009
            p ⚠
        tr
          th age
          for p in [suzuli, mitulu]
            td #{p.age} (born on HC#{p.birthYear}/#{p.birthDay})
        tr
          th height:[m]
          for p in [suzuli, mitulu]
            td #{p.heightM}
        tr
          th weight:[kg]
          for p in [suzuli, mitulu]
            td #{p.weightKg}
        tr
          th ALDH2
          td NN
          td MN
        tr
          th {hair, eye} colour
          td lightgray #[Color(color="lightgray")]
          td black □
        tr
          th location
          td(colSpan=2) japan / prefecture musasi
        tr
          th occupation
          td graduate student in Univ #[Ruby(main="葦原", above="asipara")] (CS)
          td undergraduate student in Univ 葦原 (Math)
        tr
          th secsuality
          td: ul
            li male (in terms of external genitalia and hormonal balance)
            li phallophilia
            li polyamory
          td: ul
            li male (in terms of external genitalia and hormonal balance)
            li phallophilia
            li monoamory
        tr
          th language
          td: ul
            li ja #[Ruby(main="東京",above="TùgKìg")] dialect
            li en-us
            li yue
          td: ul
            li ja #[Ruby(main="京都",above="KìgTòv")] dialect
            li en-gb
            li ru
        tr
          th theme colour
          td: ul
            li black □
            li magenta #[Color(color="magenta")]
          td: ul
            li white #[Color(color="white")]
            li turquoise #[Color(color="turquoise")]
        tr
          th fashion
          td
            ul
              li simple
              li casual
              li monochrome (mainly black)
          td
            p (not determined)

        tr
          th favourite book
          td de l'inconvénient d'être né
          td l'être et le néant ⚠
        tr
          th personality
          td: ul
            li logical
            li consistent
            li tranquil
            li reticent
            li independent
            li prurient
          td: ul
            li logical
            li pragmatic
            li cheerful
            li active
            li social
        tr
          th ideology
          td: ul
            li deontological liberalism
            li promortalism
          td: ul
            li preference utilitarianism
            li antinatalism
        tr
          th how to address þe oþer
          td ミツル (mitulu)
          td スズリ君 (suzuli kun)
        tr
          th miscellaneous
          td: ul
            li masturbateþ once per day on average
            li versatile but prefereþ to bottom
            li likeþ to be choked
            li acteþ sweet during secsual intercourse
            li rarely smokeþ
            li likeþ japanese rocks
          td: ul
            li masturbateþ once every two days on average
            li versatile but prefereþ to bottom
            li haþ sensitive nipples
            li easily geteþ lonely
    `
  },
  {
    title: "wurld",
    children: pug`
      ul
        li souþ korea annecsed and norþ korea
        li in japan
          ul
            li cantonese is more significant þan mandarin since many hongkong people immigrated
            li hemp and LSD are legalised
            li legal family name is disused
            li every one haþ þe right to rename himself
        li mandarin spoken in china and taiwan is old national pronunciation
        li cellular agriculture is advanced. þough animal-based food are ethically avoided in most of nations, dietary culture is not substantially different from our.
    `
  },
  {
    title: "art",
    children: pug`
      .tiles
        T20220202
        T20211031
        T20210730
        T20210718
        T20210715
        div
          T20210709
          p 案
        T20210627
        div
          T20210607
          p 本物はもっと肉附きがよい.
        T20210510
        T20210509
        T20210315
        //<blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/B063efYM9b">https://t.co/B063efYM9b</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <br/><br/>肉駄 <a href="https://t.co/fczOr9hMUL">https://t.co/fczOr9hMUL</a> 先生にイラマされる硯君納品頂きました！　情報量が多くて最高。</p>&mdash; суми, иже ничто създавае (@smiqy) <a href="https://twitter.com/smiqy/status/1357348987833995267?ref_src=twsrc%5Etfw">February 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20201230
        //
          div
            p wurk in progress
            a(href="https://twitter.com/intent/user?user_id=948471113448792064") 絹豆腐
            Img(src="/image/char-1/2020-341.png")
        T20201210
        //T20201208
        T20201130
        T20201122
        div
          T20201021
          Img(src="/image/char-1/2020-10-15.png")
        T20201015
        div
          T20201009
          ul
            li 髪は輕い癖毛 (假)
            li 服が思ひ浮かばず困った
        T20201006
        //<blockquote class="twitter-tweet" data-theme="dark"><p>動作test. 首に違和感有るけどまあ可いか (疲れた). <a href="https://t.co/LXSU6zzXIl">pic.twitter.com/LXSU6zzXIl</a></p>&mdash; 男根, 大麻, 安樂死 (@smiqy) <a href="https://twitter.com/smiqy/status/1307708387115675650?ref_src=twsrc%5Etfw">September 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
          T20200909
          ul
            li 服が思ひ浮かばず困った
            li 髮は輕い癖毛な氣がする
            li 左目は大抵見𛀁ない
        //<blockquote class="twitter-tweet" data-theme="dark"><p>/* test */ <a href="https://t.co/cdvn2vvAQ3">pic.twitter.com/cdvn2vvAQ3</a></p>&mdash; 硯玄 (сузури) (@SzrHyn) <a href="https://twitter.com/SzrHyn/status/1301920417381191681?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
        T20200822
          Img(src="/image/char-1/2020-08-31.png")
        //div
          <blockquote class="twitter-tweet" data-theme="dark"><p>- 硯君の表情 考<br/>- 後輩君 <a href="https://t.co/ngIBx6kHit">pic.twitter.com/ngIBx6kHit</a></p>&mdash; 初夏の夜風の涼しさ (@smiqy) <a href="https://twitter.com/smiqy/status/1296894217789136896?ref_src=twsrc%5Etfw">August 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          p mitulu: 後から見るとかわいくない
          p suzuli: 後ろ髪は刈り上げる事も有る
        div
          T20200804
          Img(src="/image/char-1/2020-08-04.png")
          a(href="https://twitter.com/intent/user?user_id=948471113448792064") 絹豆腐
          //img(src="/image/char-1/2020-08-04-1.png")
          //img(src="/image/char-1/2020-08-04-2.png")
        T20200731
        T20200724
        //<blockquote class="twitter-tweet" data-theme="dark"><p>習作 (四肢拘束のつもりだった) <a href="https://t.co/v0mXfg2F6i">pic.twitter.com/v0mXfg2F6i</a></p>&mdash; 初夏の夜風の涼しさ (@sumimq) <a href="https://twitter.com/sumimq/status/1285594214181593088?ref_src=twsrc%5Etfw">July 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        //<blockquote class="twitter-tweet" data-theme="dark"><p>硯君 塗った. NSFW. <a href="https://t.co/4c4MhzrkkA">pic.twitter.com/4c4MhzrkkA</a></p>&mdash; 初夏の夜風の涼しさ (@sumimq) <a href="https://twitter.com/sumimq/status/1282856915723157504?ref_src=twsrc%5Etfw">July 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20200710
        T20200608
        T20200530
        div
          Img(src="/image/char-1/2020-04-25.jpg")
          a(href="https://twitter.com/intent/user?user_id=800300702937399296") 司ろう。
        T20200424
        T20200414
        T20200413
        div
          img(src="/image/char-1/2020-04-08'.jpg")
          p @nikuda2929 (有償)
        div 非公開
        //
          div
            p @inuqw
            Img(src="/image/char-1/2019-11-25.jpg")
            <blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/WSN80Ga6jB">pic.twitter.com/WSN80Ga6jB</a></p>&mdash; sumi (@melanophil) <a href="https://twitter.com/melanophil/status/1188098375045935104?ref_src=twsrc%5Etfw">October 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
          Img(src="/image/char-1/2019-10-11.jpg")
          a(href="https://twitter.com/intent/user?user_id=800300702937399296") 司ろう。
        T20190926
        T20190831
        T20190803
        div
          Img(src="/image/char-1/2019-07-26.jpg")
          p @AI67448472
        //<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p>遅くなりましたが誕生日おめでとう御座います!スズリくん描かせて頂きました… <a href="https://t.co/3JS1r6kXg2">pic.twitter.com/3JS1r6kXg2</a></p>&mdash; まぁく (@MK2ma_c) <a href="https://twitter.com/MK2ma_c/status/1154736325766942720?ref_src=twsrc%5Etfw">July 26, 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20190718
        div
          Img(src="/image/char-1/2019-04-23.png")
        div
          T20181204
          Img(src="/image/char-1/2018-12-04.jpg")
        div
          p 非公開
          //img(src="/image/char-1/2018-08-01.png")
        T20220107
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    a(href="ja") 日本語にての概要
`;

export default Index;