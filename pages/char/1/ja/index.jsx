import React from 'react';
import Link from 'next/link';
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
const T20200710 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p>Commission<a href="https://t.co/GCP58cuKd5">https://t.co/GCP58cuKd5</a> <a href="https://t.co/5sHvE7QLqa">pic.twitter.com/5sHvE7QLqa</a></p>&mdash; ミネむら (@minefarmkun) <a href="https://twitter.com/minefarmkun/status/1281632927529332736?ref_src=twsrc%5Etfw">July 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
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

const T20200317 = p => (<><blockquote class="twitter-tweet" data-theme="dark"><p dir="ltr">案 <a href="https://t.co/eIolPAAQs7">pic.twitter.com/eIolPAAQs7</a></p>&mdash; SUMI XINM (@sumiQj) <a href="https://twitter.com/sumiQj/status/1239962725746454528?ref_src=twsrc%5Etfw">March 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);

const title = "硯と盈";
const sections = [
  {
    title: "畫像",
    children: pug`
      .tiles
          div
            T20181204
            img(src="/image/char-1/2018-12-04.jpg")
          T20190718
          div
            img(src="/image/char-1/2019-07-26.jpg")
            p @AI67448472
          T20201009
          T20201210
          T20201230
          T20210718
    `
  },
  {
    title: "概要",
    children: pug`
      table.center
        tr
          th
          td(style={textAlign: "center"})
            img(src="/image/char-1/suzuli.svg", width="64px")
          td(style={textAlign: "center"})
            img(src="/image/char-1/mitulu.svg", width="64px")
        tr
          th 名
          td: ul
            li 硯
            li suzuli (ja, [sɯzɯɾi])
          td: ul
            li 盈
            li mitulu (ja, [mitɯɾɯ])
        tr
          th 畫像
          td(style={textAlign: "center"})
            T20190718
          td(style={textAlign: "center"})
            T20201009
        tr
          th 年齡
          for p in [suzuli, mitulu]
            td #{p.age}歳 (人類紀元#{p.birthYear}年#{p.birthDay}日 生まれ)
        tr
          th 身長/m
          for p in [suzuli, mitulu]
            td #{p.heightM}
        tr
          th 體質量/kg
          for p in [suzuli, mitulu]
            td #{p.weightKg}
        tr
          th 性
          td: ul
            li 男性（外性器と 性激素と 性別合和に 據る）
            li 男性愛者
            li 受け寄り
            li 首 弱し
          td: ul
            li 男性（外性器と 性激素と 性別合和に 據る）
            li 男性愛者
            li 受け寄り
            li 胸 弱し
        tr
          th 服裝
          td
            ul
              li 單純 (過度の 裝飾を 好まず)
              li 無彩色
          td (未定. 洒脱ならまほし.)
        tr
          th(rowspan=2) 外見
          td: ul
            li 顏: 無表情. じと目. 威壓的には あらず.
            li 體: 健康的. 引き締まりたる筋肉質. 色白.
            li 體毛: 薄墨色. 量は 平均的なれど 自ら 薄くす.
            li 髮: 薄墨色. 右目隱れ.
            li 男根: 下反り. 勃起時半剝け. 210mm (但し 數值は 一例なり, 視覺上は 尚 大きくとも 良し).
            li 耳と#[a(href="https://en.wikipedia.org/wiki/Prince_Albert_(genital_piercing)") プリンスアルバート]のピアス有り
              ul
                li プリンスアルバートは 陰莖小帶を 切斷せず, 左手側に 反る
                li すべて 着脱可能なれば 繪にては 省略せられ う. 殊に 插入時は 殆ど 必ず プリンスアルバートを 外す.
              T20200317
          td: ul
            li 顏: 童顔. 太め 吊り眉. 垂れ目. 顎髭. いたづらめくる 笑顏.
            li 體: 健康的, 筋肉質 かつ 大柄.
            li 體毛: 黑色. やや 毛部下目.
            li 髮: 黑色. 兩目隱れ なれど 左目 見𛀁隱れす. やや 癖毛.
            li 男根: 上反り. 勃起時半剝け. 180mm (但し 數值は 一例なり, 視覺上は 尚 大きくとも 良し).
        tr
          td(colspan=2) （服裝の 類は 仔細 決まらざれば 自由なり）
        tr
          th 自稱
          td: ul
            li 日常にては "わたし"
            li 親しき 人の 前や 性交中は "僕"
          td 僕
        tr
          th 他方の呼び方
          td ミツル
          td スズリ君
        tr
          th 所在
          td(colspan=2) 日本, 武蔵縣 (我れらが 世界に 言ふ 東京都)
        tr
          th 言語
          td: ul
            li 日本語 (共通語)
            li 英語 (アメリカ)
            li 粵語
          td: ul
            li 日本語 (共通語と京阪式アクセントの混淆)
            li 英語 (イギリス)
            li ロシヤ語
        tr
          th 身分
          td 大學院生 M1 (理論計算機科學)
          td 大學生 B3 (數學)
        tr
          th 趣味
          td: ul
            li プログラミング
            li ベース
            li 讀書 (SF)
            li 乱交
            li 大麻
            li LSD
          td: ul
            li 語學
            li ピアノ
            li 映畫鑑賞
            li 筋力トレーニング
            li 酒 (弱し)
        tr
          th 性格
          td: ul
            li 論理的
            li 冷静
            li 獨立不羈
            li 快樂主義
            li 進みて 人と 關はるに あらざれど 敢へて 避くるわけにもあらず. 頼まらば 優しく 協力するに 加へ 確かなる 智識 持てば 研究室の 同輩後輩には 慕はれたり.
          td: ul
            li 論理的
            li 潑溂
            li 社交的
            li 一途
            li 人と 關はるを 好めば 見知る 人 多し. 人が 望む 事を 言ふに 長く.
        tr
          th 關係
          td(colspan=2): ul
            li 葦原大學の 先輩後輩
            li 盈が 硯を 連れ出づる 形にて よく 遊ぶ. 硯宅にて 泊るも 多し. 映畫を よく 觀る.
            li 硯は 盈の 活潑さや 未知への 積極性を, 盈は 硯の 確乎たる 自我や 思想を それぞれ 慕ふ
            li 約1回/4日の 頻度にて 性交す. 約3/4の 比にて 硯が 攻めと なる. 攻め受けに 據らず 硯が 主導し勝ち.
    `
  },
  {
    title: "注意",
    children: pug`
      ul
        li 以下を 除き いかなる 副次的創作物も 歡迎し 侍り
        li 禁止: character名稱の 不記載 又は 伏せ字や 暗號の 使用に 據る 檢索性の 阻礙
        li 禁止†: 性別, 國籍, 年齡などに 基づく 差別的なる 限定公開
        li 禁止†: 性器の 檢閱 (mosaic, 塗り潰し)
        li 非推獎: 乳房の 賦予
        li 非推獎: 下唇に 線を 描き 厚みを 持たす

      p †公開platformの 規約に 要請せらる 場合ひを 除き 侍り
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    ul
      li
        |þis page is a summary of #[Link(href="..") ..] for japanese speaker þat are intending to draw suzuli or mitulu.
        br
        |本pageは 硯と盈を 描かむと する 日本語話者の 爲の #[Link(href="..") ..]の 要約に 侍り
      li
        |any ambiguous description is caused by þe auþor not being an artist, and þou mayst complement it.
        br
        |作者の 畫描き ならざれば 生する 曖昧なる 點は 思ふ 儘に 補完し 給へ
`;

export default Index;