▽ 作者資訊
└─────
  程式原作者: 庾珍雄 (Jinwoong Yu)
    個人網站: http://exobud.nayana.org
    電子郵件: exobud@hanmail.net
    MSN 帳號: exobud@hanmail.net
    ICQ 帳號: 96138429

  繁體中文化: 黃奕恆/驚直 (Kendrick Wong, aka kiddiken)
    個人網站: http://kiddiken.net
    電子郵件: webmaster@kiddiken.net
    MSN 帳號: kiddiken@msn.com
    ICQ 帳號: 2947070


▽ 軟體需求
└─────
    瀏覽器: Internet Explorer (簡稱IE) v5.5 或以上 (Netscape並不相容)
    媒體播放程式: Windows Media Player (簡稱wmp) v7.1 或以上(*)
    作業系統: Windows 98 或更新的作業系統 (例如: Me,NT,2000,XP)

    (*) 本程式支援微軟最新推出的 Windows Media 9 系列媒體播放器。


▽ 尺寸大小(以像素為單位)
└────────────
    寬度: 約 640~760px
    高度: 約 20~25px (若使用字幕功能，需額外增加 60px)

    (播放器的尺寸大小，通常都會因為套用不同面板而有所變化)


����������������������������������������������������������������������������
■ 使用前要注意的 ＊重要＊ 事項
����������������������������������������������������������������������������

在使用本程式前，請必須注意以下各項：

  1. 這個 ExoBUD MP(II) 播放器只支援wmp v7.1或以上版本。如果您 (或瀏覽者)
     仍在使用 wmp v6.4，這個程式將不能運作，請更新您的wmp版本，或改用相容
     wmp v6.4 的 ExoBUD MP(I) 播放器。

  2. 如果您(或瀏覽者)是使用Netscape瀏覽器，這個程式是不能運作的。

  3. 當您修改本程式的原始碼時，請注意執行修改後的程式，可能會導致一些正在
     執行中的應用程式無法正常運作；另外亦要留意在JavaScript上所使用的變數
     名稱和設定值，大小寫是有分別的。



����������������������������������������������������������������������������
■ 程式功能說明
����������������������������������������������������������������������������

ExoBUD MP(II) 播放程式為迎合網路潮流，跟一般的ＢＧＭ程式相比，加入了一些極富
時代感的嶄新功能。現詳細說明如下：

[1] 可播放大部份與微軟Windows Media Player相容的媒體檔案格式，當中包括非串流
    處理的檔案類型(mp3,wav,mid,avi,mpg)以及串流處理的檔案類型(asf,wma,wmv)。
    您亦可以使用預先製作好的播放清單 (如: pls,m3u)。如果您想要利用本程式做為
    串流媒體服務，您可能需要準備一些串流處理媒體的執行檔 (如: asx,wax,wvx)。

[2] 可自動從媒體檔案裡面取得媒體資訊，包括標題、演出者、著作權、時間長度等。
    如果您在設定播放清單項目時，沒有設定某項目的"媒體標題"，當要播放某項目時
    程式便會自動讀取記錄在媒體檔案裡面的相關資訊，在播放面板上正確顯示出來。
    若是作為本程式的面板製作者，您可以選擇讀取更多的媒體資訊項目來配合需要。

[3] 支援SMIL(Synchronized Multimedia Integration Language)同步多媒體整合語言
    格式字幕顯示功能。您可以利用此功能來製作「同步歌詞」的.smi檔案，讓瀏覽者
    可以跟著歌詞哼歌^^ 除了用來顯示歌詞之外，您還可以為視訊檔案(例如生活片段
    或錄音訪問)加入字幕內容，讓使用不同語言的瀏覽者也「聽得懂」！ 此外，您亦
    可以使用此功能來顯示唱片專輯圖檔等的媒體相關資訊，表現您豐富的想像力。
     ※ SMIL是一種以XML為基準的程式語言，關於.smi檔案的編寫格式，請在網路上
        尋找有關資料。(官方的英文說明: http://www.w3.org/AudioVideo )

[4] 可讓使用者在播放清單上只選取自己喜歡的曲目播放，而且這動作是即時生效的。
    播放清單上的核取方塊表示曲目是否已選取，而使用者亦可點選曲目的連結(標題)
    作單一曲目播放、全部選取或全部不選取清單項目；播放清單也支援跳頁的功能。
     ※ 請注意當播放器頁面重新整理或關掉瀏覽器後，播放清單便會回復預設狀態。

[5] 支援以循序(Sequential)及隨機(Random)方式來播放媒體項目的功能。若播放面板
    容許的話，使用者可在播放面板上點選[S]或[R]按鈕，隨時切換播放順序的模式。

[6] 支援以正常方式(Elapse)及倒數方式(Lapse) 動態顯示曲目的時間長度；前者表示
    曲目已播放的時間，後者表示曲目剩餘的時間。若播放面板容許的話，使用者可以
    在播放面板上，點一下顯示時間長度的地方，隨時切換顯示動態時間長度的方式。
     ※ 如果您設定了在瀏覽器的狀態列顯示播放器文字訊息，狀態列上亦會顯示動態
        時間長度；當您切換它在播放面板的顯示方式時，狀態列的亦會同時變更。
     ※ 正常來說，時間長度的格式是 [分:秒]；假如某個媒體項目的時間是超過六十
        分鐘(即一小時)，時間長度便會以 [時:分:秒] 的格式顯示。
     ※ 如果正在播放的媒體內容是即時播送系統 (Live Broadcasting)，由於媒體是
        沒有一個固定的時間長度，所以不能切換以「倒數方式」來顯示剩餘時間的。

[7] 連線媒體失敗的處理方式：當程式無法連線到 準備要播放的媒體檔案 時，在播放
    面板上會顯示錯誤訊息讓使用者了解。程式總共會嘗試三次連線，假如都是失敗，
    便會放棄再連線到該媒體檔案，自動跳到下一個媒體項目繼續播放。

[8] 支援使用JavaScript的 alert()函式，讓您選擇是否要在開始播放每一首曲目時，
    彈出視窗顯示直接從媒體檔案讀取的媒體資訊內容。此功能只適合測試用途，因為
    如果您在嵌入網站後正式使用時仍然沒有關閉此功能，瀏覽者可能會感到厭煩的。

[9] 支援音量控制 (Volume Control) 的功能，包括增加音量 (Volume Up)、減少音量
    (Volume Down) 及靜音模式(Mute)。音量大小並會以一個由0至100％計算的數值來
    顯示，讓使用者方便地調校理想的音量。 切換靜音模式的按鈕通常會以[M]表示；
    如果您是在調校音量之後才開啟靜音模式的， 當您再點一下[M]、增加或減少音量
    的按鈕(關閉靜音模式)時，您剛才所調校好的音量大小便會自動恢復。

[10] 本程式有很多地方都使用了 Optimized Logic(邏輯最佳化) 的語法來提昇效能。
      ※ 通常同一個播放項目只會播放一次，但您也可以即時設定某項目重複播放。
         使用者只要點一下[L]按鈕，便可以切換是否重複播放(Loop)目前的曲目。
      ※ 另一個 [||] 按鈕代表「暫停．繼續」，此按鈕通常是以兩條直線表示的。
         使用者只要點一下這個按鈕，便可以暫停(Pause)或繼續播放目前的曲目。
      ※ 無論您點選播放面板上的任何一個按鈕，播放面板都會在適當的地方顯示
         訊息(如面板容許)，告訴您所做的動作。

[11] 只要是 Windows Media Player 支援的媒體檔案類型，本程式都可以順利播放。
     除了自行錄製媒體檔案後放在自己的主機的方法，您也可以連結到一些在網路上
     提供的串流處理媒體檔案 (如: asf,wma) ，作為播放清單的內容。 本程式除了
     支援 http:// 及 ftp:// 這兩種常見的網路協定之外，您也可以使用如 mms://
     或 rtsp:// 這些串流處理媒體的通訊協定來設定播放清單項目。
      ※ 如果要自行製作串流媒體檔案，請最好使用微軟提供的 Windows Media
         編碼器 v7 或以上的版本。

[12] 由於本程式已加入了對視訊檔案的支援，您也可以自行製作(或修改)播放面板，
     利用它來播放像音樂影帶(MV)或是以隨選視訊系統(VOD)製作的媒體檔(如wmv)。
     請注意每個視訊檔案使用的螢幕大小都會有分別的，如有需要的話，您可以參考
     exobud.js 這個檔案，修改裡面的原始碼內容來達到您想要的效果。


����������������������������������������������������������������������������
■ 檔案說明
����������������������������������������������������������������������������

以下檔案說明只適用於 ExoBUD MP(II) 的標準版本，使用其他面板製作的播放器
可能會有一些差異：

  /程式資料夾/  (這就是 ExoBUD MP 程式的"根目錄")

    exobud.htm      : ExoBUD MP 播放面板 HTML 頁面檔案
    exobud.css      : ExoBUD MP 播放面板 CSS 樣式表
    exobudpl.htm    : ExoBUD MP 播放清單 HTML 頁面檔案
    exobudpl.css    : ExoBUD MP 播放清單 CSS 樣式表
    exobud.js       : ExoBUD MP 播放程式主程式 (JavaScript)
    exobudpl.js     : ExoBUD MP 播放清單設定檔 (JavaScript)
    exobudset.js    : ExoBUD MP 播放程式基本設定檔 (JavaScript)
    imgchg.js       : 動態按鈕圖檔切換動作的程式檔 (JavaScript)
    readme.txt      : 您現在閱讀的這個「讀我檔案」

  /程式資料夾/img/  (存放 ExoBUD MP 程式圖檔的地方)

    *.gif(*.jpg)    : 這些都是 ExoBUD MP 播放器的專用圖檔

  /程式資料夾/sample/  (這裡存放了一個使用字幕功能的視訊媒體內容)

    seattle.wmv     : 範例視訊檔案 (標題: Great Reasons to Visit Seattle)
    seattle.smi     : 配合範例視訊檔案使用的SMIL格式字幕檔案


如果您是面板製作(或修改)者，請盡量保留上述的檔案名稱和資料夾結構，包括
HTML 和 JavaScript 的檔案名稱。


����������������������������������������������������������������������������
■ 安裝程序
����������������������������������������������������������������������������

這支播放程式並沒有自動化的安裝介面。如果您是第一次使用本程式，建議您仔細閱讀
以下的安裝程序說明，依照指示一步一步的進行安裝及設定：


▽ 第１步：進行解壓縮
└──────────

    在網路上下載回來的 ExoBUD MP(II) 繁體中文版應是以 zip 為副檔名的壓縮檔。
    您可以使用您慣用的解壓縮程式 (例如: WinZip) 來壓開這個檔案。

    請將所有的檔案都解壓縮到您 (自己電腦內) 網站資料夾下的一個新資料夾。
    (裡面沒有任何檔案或子資料夾)

    假設您的網站資料夾是 C:\www
    您可以將壓縮檔解開至 C:\www\exobud_mp 這個位置。

    因為壓縮檔內容是包含資料夾名稱的，所以您在解壓縮時要注意是否正確將所有的
    檔案都解開至適當位置：程式"根目錄"應包括*.htm,*.js,*.css的原始碼檔案，而
    img,sample分別是程式圖檔和範例視訊檔案的資料夾。(請參考上面的"檔案說明")

    解壓縮完畢後，您便可以立即點兩下 exobud.htm ，執行這個檔案，搶鮮測試一下
    這支超炫的播放程式！^^


▽ 第２步：準備媒體檔案
└───────────

    如果您要把這個播放器放到網站上，您當然不會使用預設的「樣本播放清單」吧。
    這個時候，您需要準備一些媒體檔案。這些音訊或視訊檔案的來源，可以是您硬碟
    裡面的檔案，也可以是網路上的串流處理媒體檔案連結。

    如果您硬碟裡面的媒體檔案都是動輒幾MB甚至幾十MB的 mp3,wav,avi,mpg... 相信
    您也不會將這些狂吃容量的檔案上傳到FTP伺服器吧！ 此時您就需要一個編碼器，
    例如微軟的 Windows Media Encoder (建議使用v7.x或以上的版本) ，將這些檔案
    都轉換成體積比較小的串流媒體檔案(asf,wma,wmv)，然後才上傳到 FTP 伺服器。
    (若您是自行架設串流媒體服務站，請將檔案上傳到您的 MMS 伺服器)

    媒體檔案的命名也值得我們注意。因為不是在所有語系、所有作業系統和瀏覽器的
    環境下，都可以正確讀取以繁體中文 (或其他雙字節語系) 來命名的檔案名稱的，
    所以請您最好不要使用含中文字元的檔名，同時也應盡量避免在檔案名稱裡使用像
    半形空白、百分比(%) 這些特殊字元。檔案名稱在網路上的使用仍是以全英文小寫
    為最保險。(您可以使用底線字元 _ 來代替空白的)

    假如您堅持要使用像 mp3,wav 這些非串流媒體檔案格式， 請確保檔案不會太大，
    致使瀏覽者需要一段時間才下載完成整個檔案，因為本程式不能對這類檔案做緩衝
    處理(Buffering)，而是要等到接收完畢整個檔案後才會播放的。

    如果您想要使用播放器的字幕功能，您還需要準備對應媒體檔案的SMIL字幕檔案，
    並且要將這個SMIL檔放置在與對應的 asf,wma 媒體檔案相同的資料夾。

     ※ 因為本程式是利用微軟的 Windows Media Player 做為後台播放程式，所以
        並不支援以 .ra .rm .rv .ram 等這些由 RealNetworks 制訂的媒體格式來
        播放音訊或視訊內容。

     ※ 雖然本程式可支援微軟最新開發的 「Windows Media 播放清單」 檔案格式
        (副檔名為.wpl)，但是因為此格式尚未開發成熟，而本程式對此格式的支援
        可能不夠完全，所以建議使用者應避免使用這種檔案來製作播放清單，除非
        您是本程式的開發人員／面板製作者，或對程式運作已有深入了解。


����������������������������������������������������������������������������
■ 設定播放程式
����������������������������������������������������������������������������

這個部份會向您說明如何設定播放程式，包括基本設定及播放清單內容：


▽ 第３步：檢查播放程式
└───────────

    以 Internet Explorer 瀏覽器開啟 exobud.htm 這個檔案， 然後點一下【播放】
    按鈕(除非預設是自動播放)，此時您應該可以聽到聲音。假如沒有聽到任何聲音，
    請檢查一下您的揚聲器是否已開啟、Windows Media Player和IE的版本是否相容。
    目前正在播放的就是樣本播放清單所設定的項目。

     ※ 繁體中文版本的 ExoBUD MP 播放器，已設定了頁面的顯示語系是 "big5"，
        假如因為某些原因而在播放面板上出現亂碼，請嘗試手動變更頁面的語系。
        (在IE變更頁面編碼的方法：點一下選單列的 [檢視] → [編碼]，再點選
         正確的語系 [繁體中文 (Big5)] 即可)


▽ 第４步：設定播放程式
└───────────

    接下來，我們需要編輯 exobudset.js 這個 JavaScript 原始碼檔案，此檔包含了
    播放程式所有基本設定內容。您可以不用關閉瀏覽器視窗，一邊進行原始碼編輯，
    同時在另一邊的瀏覽器，您可以按[F5]鍵重新整理頁面，測試一下原始碼在修改後
    的執行結果是否正常。

    現在，請使用您慣用的純文字編輯器 (例如: EditPlus/EmEditor/記事本) ，打開
    exobudset.js 這個檔案，編輯原始碼內容。 因為在檔案裡面已經寫有相當詳細的
    說明，解釋各個設定項目的用法，所以在這裡不再贅述一遍。

     ※ 所有項目的設定值只可以設為 true (是) 或 false (否)，請注意這兩個
        英文單字必須使用全小寫半形字母，亦不能寫錯字。


▽ 第５步：設定播放清單內容
└─────────────

    當您修改「播放程式的基本設定」完畢，接下來我們就要設定播放清單的內容，將
    已存在於網路上的媒體檔案，一個一個的「登錄」在播放清單上，這樣播放程式才
    可以知道要播放什麼媒體、媒體的檔案位置在哪裡。

    繁體中文版本的 ExoBUD MP 播放器，有別於原韓文版的設定方式， 設定播放清單
    內容的部份是寫在一個獨立的檔案 (exobudpl.js)，而非播放面板 HTML 頁面檔案
    (exobud.htm)，這是為了方便修改和管理播放清單而作出的改動。

    現在，請使用您慣用的純文字編輯器 (例如: EditPlus/EmEditor/記事本) ，打開
    exobudpl.js 這個檔案，編輯原始碼內容。(這是一個 JavaScript 的原始碼檔案)
    因為在裡面已經有相當詳細的說明， 解釋如何設定 ExoBUD MP 專用的播放清單，
    所以在這裡不再贅述一遍。

     ※ 完成設定您的播放清單後，必須重新整理播放器的頁面，播放清單的修改
        才會正式生效。此外，亦建議您將剛修改好的播放清單完整的測試一遍，
        確保播放清單上的所有媒體項目都能夠正常播放。


����������������������������������������������������������������������������
■ 將播放器嵌入網站
����������������������������������������������������������������������������

當播放程式的基本設定和播放清單都搞定了以後，您便可以將播放器嵌入網站了！請將
您所修改過的播放程式檔案 (包括所有程式需要用到的檔案和圖檔資料夾) ，使用 FTP
程式上傳到您網站的伺服器、一個對應的空白資料夾，例如 exobud_mp 。

  ※ 如果不是做為測試用途，並且已在播放清單上刪除或註解掉「樣本播放清單」
     的設定項目，您可以不必上傳"sample"這個存放了範例視訊檔案的資料夾。


現在，您可以使用頁面框架 (frameset) 或內嵌框架 (iframe) 的方式，將播放器嵌入
到您的網站裡去了！下面分別提供了以這兩種方式嵌入播放器的 HTML 語法讓您參考：

  ▼使用頁面框架 (frameset) 方式的嵌入法範例：

  <frameset rows="*,25" framespacing="0" border="0" frameborder="0">
    <frame name="content" src="main.php" noresize>
    <frame name="exobud_mp" src="exobud_mp/exobud.htm"
      scrolling="no" noresize>
  </frameset>

  ▼使用內嵌框架 (iframe) 方式的嵌入法範例：

  <iframe name="exobud_mp" src="exobud_mp/exobud.htm"
    width="640" height="25" marginwidth="0" marginheight="0"
    border="0" frameborder="0" scrolling="no"></iframe>

  ※ 以上設定框架大小的數值僅供參考。一般來說，長條形狀的播放器會佔用面積
     大約為 640~760px(像素) 的寬度乘以 20~25px(像素) 的高度。
     (若使用字幕功能，需額外增加 60px 的高度)


進行播放器嵌入網站的動作時，請注意：

  1. 您必須了解HTML的框架語法如何應用，以及懂得利用純文字編輯器來設定框架
     語法。若您仍未掌握框架語法的寫法，請先在網路上搜尋有關資料瞭解一下。

  2. 無論使用任何方式的語法 (包括JavaScript等) 將播放器嵌入網站，您都必須
     確保當瀏覽者轉換頁面時，不會同時整理播放器所在的頁面，因而影響播放器
     的動作。

  3. 如果您不熟悉HTML語法，最好不要使用以內嵌框架 (iframe) 的方式將播放器
     嵌入網站，除非您已明白您的網站版面設計適合使用以此方式嵌入播放器。

  4. 以上說明使用框架 (frameset或iframe) 的方式將播放器嵌入網站，並不適用
     於以彈出式視窗 (Pop-up Window) 啟動的播放器。


����������������������������������������������������������������������������
■ 播放器的進階設定法：修改樣式表設定項目
����������������������������������������������������������������������������

除了播放程式的基本設定和播放清單內容以外，在播放程式的原始碼裡面還「隱藏」了
不少可供個人化修改的樣式表(Style Sheet)設定項目！您可以憑自己對CSS樣式表語法
的認識，加入其他更具創意的設定值。

以下有一些預設可供修改樣式的地方，讓您參考：
(請注意這些地方可能會因為不同面板而有大小差異)


▽ ａ）播放面板的基本樣式表設定 (exobud.css)
└──────────────────────

  在 exobud.css 這個 CSS 樣式表檔案裡面，您可以找到基本樣式表的設定內容。

  ▼以下是其中幾個樣式項目的設定：

  body { margin-top: 0px; margin-right: 0px;          ← 不保留邊界的設定
         margin-bottom: 0px; margin-left: 0px;
         cursor: crosshair;                           ← 滑鼠游標呈十字形
         overflow: hidden; }                          ← 不顯示視窗捲動軸

  body,td { font-family: 'Tahoma','Verdana','Arial';  ← 字形名稱
            font-size: 9pt; }                         ← 字形大小

  /* 顯示媒體標題的樣式表設定 */  (此乃 精簡版 播放器的設定)
  .title { border-width: 1px;                         ← 框線粗幼度(像素)
           border-style: solid;                       ← 框線形式
           border-color: silver;                      ← 框線顏色
           background-color: white;                   ← 背景顏色
           color: black;                              ← 文字(前景)顏色
           font-family: 'Tahoma','Verdana','Arial';   ← 字形名稱
           font-size: 9pt; }                          ← 字形大小

  /* 顯示時間長度的樣式表設定 */  (此乃 精簡版 播放器的設定)
  .time  { border-width: 1px;                         ← 框線粗幼度(像素)
           border-style: solid;                       ← 框線形式
           border-color: silver;                      ← 框線顏色
           background-color: white;                   ← 背景顏色
           color: black;                              ← 文字(前景)顏色
           font-family: 'Tahoma','Verdana','Arial';   ← 字形名稱
           font-size: 9pt; }                          ← 字形大小

  (註：箭嘴 "←" 所示的地方是為了方便說明才加上去的，實際編輯時請不要加入)

  ※ 您可以在 body 樣式裡面加入 background 屬性來設定背景顏色或圖檔，例如：
       background-color: aliceblue;  或  background-image: url(./bg.gif);

  ※ .title 和 .time 兩個樣式，分別是顯示媒體標題和時間長度的樣式設定項目。
     您可以根據自己的個人喜好來修改字形名稱/大小/顏色、框線粗幼度/顏色/模式
     等的設定值。


▽ ｂ）字幕框的樣式設定 (exobud.htm)
└──────────────────

  ▼在 exobud.htm 這個 HTML 檔案，接近最底部的地方， 可以找到這段 DIV 語法：
    (這裡定義了一個區塊，其 ID 應為 "capText")

  <div id="capText" style="width:100%;height:60;color:white;
  background-color:#555555;display:none">ExoBUD MP(II) Captioning(SMI)</div>

  ※ 您可以將字幕框放在播放面板上的任何位置，寬度(width)和高度(height)都
     可以修改的。同樣地，您也可以根據自己的喜好 修改/增刪 其他樣式屬性的
     設定，例如您可以加入 font-size 的屬性來設定字幕框文字的大小。

  ※ 字幕框的部份，通常會以特別的顏色來顯示，用以突出其與播放器其他部份的
     分別；預設的面板就是以深色的底色作背景顏色、以白色作文字(前景)顏色。

  ※ 無論您是否使用字幕功能，也必須保留這段 DIV 語法，否則會導致播放程式
     無法正常運作。(區塊的 ID 是不能更改的)

  ※ 只有在 "blnUseSmi" 設定值為 true 的情況下(使用字幕功能)，字幕框才會
     顯示出來。


▽ ｃ）播放清單上的 body 樣式設定 (exobudpl.css)
└────────────────────────

  在另一個用來設定播放清單 CSS 樣式表的 exobudpl.css 檔案裡面，您亦可以
  找到基本樣式表的設定內容。

  ▼以下是 body 樣式項目的設定：

  body { margin-top: 0px; margin-right: 0px;          ← 不保留邊界的設定
         margin-bottom: 0px; margin-left: 0px;
         background-color: #8498A3;                   ← 背景顏色
         background-image: url(./img/pl_skin.jpg);    ← 背景圖檔(*)
         background-repeat: no-repeat;                ← 背景圖是不重複的(*)
         background-attachment: fixed;                ← 背景圖是固定位置(*)
         background-position: bottom right;           ← 背景圖放底部靠右(*)
         cursor: crosshair; }                         ← 滑鼠游標呈十字形

    (*) 這些屬性是為了方便讓大家參考才加上去的。

  ※ 如果面板所使用的播放清單，有需要顯示捲動軸的話，body樣式裡面可能已經
     加入了關於捲動軸的屬性設定。

  ※ 以上所示 body 的樣式設定僅供參考，因為每款面板所顯示的播放清單，也會
     使用不同的樣式設定。如果您想更進一步了解 body 的樣式設定法，請在網上
     搜尋有關資料。


▽ ｄ）播放清單上的連結樣式設定 (exobudpl.css)
└───────────────────────

  同樣在 exobudpl.css 這個「播放清單樣式表」檔案裡面，您還可以設定不同
  類型的連結的顏色。

  ▼以下是包含 anchor (即 "A" 語法) 樣式項目的設定：

  a,a:link  { color: #334455; text-decoration: none; }
  a:visited { color: #223344; text-decoration: none; }
  a:active  { color: #334455; text-decoration: none; }
  a:hover   { color: gold;    text-decoration: none; }

  瀏覽器是如何決定什麼類型的連結，以什麼樣式來顯示？

    a,a:link   : 在指定時間之內，未曾到訪過的連結
    a:visited  : 在指定時間之內，已經到訪過的連結
    a:active   : 您正在到訪的連結
    a:hover    : 您將滑鼠移到其上的連結(即時變色)

  ※ 通常我們都會以連結的文字顏色(color)來區分不同類型的連結的。但也會同時
     輔以底線 (text-decoration: underline;) 來加以區別。


▽ ｅ）播放清單上的文字樣式設定 (exobudpl.css)
└───────────────────────

  播放清單上的文字，包括媒體標題及項目編號等，您都可以自行設定喜愛的樣式。

  ▼以下是基本樣式表中，關於文字樣式的設定：

  body,td { font-family: 'Tahoma','Verdana','Arial';  ← 字形名稱
            font-size: 9pt; color: #B0C0D0; }         ← 字形大小及顏色

  ※ 因為播放清單上所顯示的媒體標題，本身都是頁面上的連結，所以您在這裡
     設定的文字顏色，只會對項目編號有效，而不會適用於媒體標題。
