/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Scicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'scicon-zotero-wordmark': '&#xe900;',
		'scicon-zoterobib': '&#xe901;',
		'scicon-zotero': '&#xe902;',
		'scicon-zendesk-wordmark': '&#xe903;',
		'scicon-zendesk': '&#xe904;',
		'scicon-zapier': '&#xe905;',
		'scicon-youtube-wordmark': '&#xe906;',
		'scicon-youtube-text': '&#xe907;',
		'scicon-youtube-play': '&#xe908;',
		'scicon-youtube': '&#xe909;',
		'scicon-yarn-wordmark': '&#xe90a;',
		'scicon-yarn-text': '&#xe90b;',
		'scicon-yarn': '&#xe90c;',
		'scicon-yandex-wordmark': '&#xe90d;',
		'scicon-yandex-ru-wordmark': '&#xe90e;',
		'scicon-yandex-ru': '&#xe90f;',
		'scicon-yandex': '&#xe910;',
		'scicon-yaml': '&#xe911;',
		'scicon-yahoo-wordmark': '&#xe912;',
		'scicon-yahoo': '&#xe913;',
		'scicon-x-corp': '&#xe914;',
		'scicon-xbox': '&#xe915;',
		'scicon-xai': '&#xe916;',
		'scicon-wordpress': '&#xe917;',
		'scicon-wixcom': '&#xe918;',
		'scicon-wikipedia': '&#xe919;',
		'scicon-wikimedia-wordmark': '&#xe91a;',
		'scicon-wikimedia-text': '&#xe91b;',
		'scicon-wikimedia-commons': '&#xe91c;',
		'scicon-wikimedia': '&#xe91d;',
		'scicon-whatsapp': '&#xe91e;',
		'scicon-wayback-machine': '&#xe91f;',
		'scicon-w3c': '&#xe920;',
		'scicon-vuejs': '&#xe921;',
		'scicon-vsc-insiders': '&#xe922;',
		'scicon-visual-studio-code': '&#xe923;',
		'scicon-visual-studio': '&#xe924;',
		'scicon-vimeo-text': '&#xe925;',
		'scicon-vimeo': '&#xe926;',
		'scicon-vercel-wordmark': '&#xe927;',
		'scicon-vercel': '&#xe928;',
		'scicon-usb': '&#xe929;',
		'scicon-ups': '&#xe92a;',
		'scicon-unity-wordmark': '&#xe92b;',
		'scicon-unity': '&#xe92c;',
		'scicon-ubuntu-alt': '&#xe92d;',
		'scicon-ubuntu': '&#xe92e;',
		'scicon-typo3-wordmark': '&#xe92f;',
		'scicon-typo3': '&#xe930;',
		'scicon-typescript-rounded': '&#xe931;',
		'scicon-typescript': '&#xe932;',
		'scicon-twitter': '&#xe933;',
		'scicon-twitch': '&#xe934;',
		'scicon-tumblr-text': '&#xe935;',
		'scicon-tumblr': '&#xe936;',
		'scicon-tubitak-wordmark': '&#xe937;',
		'scicon-tubitak': '&#xe938;',
		'scicon-tua-wordmark': '&#xe939;',
		'scicon-tua': '&#xe93a;',
		'scicon-ttec-wordmark': '&#xe93b;',
		'scicon-ttec': '&#xe93c;',
		'scicon-ts-node-wordmark': '&#xe93d;',
		'scicon-ts-node': '&#xe93e;',
		'scicon-tplink-wordmark': '&#xe93f;',
		'scicon-tplink': '&#xe940;',
		'scicon-topaz-labs-wordmark': '&#xe941;',
		'scicon-topaz-labs': '&#xe942;',
		'scicon-tiktok-text': '&#xe943;',
		'scicon-tiktok': '&#xe944;',
		'scicon-threads': '&#xe945;',
		'scicon-teyit-alt': '&#xe946;',
		'scicon-teyit': '&#xe947;',
		'scicon-tesla-wordmark': '&#xe948;',
		'scicon-tesla-text': '&#xe949;',
		'scicon-tesla-inc': '&#xe94a;',
		'scicon-telegram-rounded': '&#xe94b;',
		'scicon-telegram': '&#xe94c;',
		'scicon-tailwind-wordmark': '&#xe94d;',
		'scicon-tailwind': '&#xe94e;',
		'scicon-swift': '&#xe94f;',
		'scicon-sublime-text-wordmark': '&#xe950;',
		'scicon-sublime-text': '&#xe951;',
		'scicon-stripe-s': '&#xe952;',
		'scicon-stripe': '&#xe953;',
		'scicon-steam': '&#xe954;',
		'scicon-stackoverflow-wordmark': '&#xe955;',
		'scicon-stackoverflow-text': '&#xe956;',
		'scicon-stackoverflow': '&#xe957;',
		'scicon-squarespace-wordmark': '&#xe958;',
		'scicon-squarespace': '&#xe959;',
		'scicon-sqlite-wordmark': '&#xe95a;',
		'scicon-sqlite': '&#xe95b;',
		'scicon-spotify-wordmark': '&#xe95c;',
		'scicon-spotify-text': '&#xe95d;',
		'scicon-spotify': '&#xe95e;',
		'scicon-spacex-alt': '&#xe95f;',
		'scicon-spacex': '&#xe960;',
		'scicon-slack-wordmark': '&#xe961;',
		'scicon-slack': '&#xe962;',
		'scicon-skype': '&#xe963;',
		'scicon-shutterstock-wordmark': '&#xe964;',
		'scicon-shutterstock': '&#xe965;',
		'scicon-shopify-wordmark': '&#xe966;',
		'scicon-shopify-text': '&#xe967;',
		'scicon-shopify': '&#xe968;',
		'scicon-scihook-square': '&#xe969;',
		'scicon-scihook-alt': '&#xe96a;',
		'scicon-scihook': '&#xe96b;',
		'scicon-scicon': '&#xe96c;',
		'scicon-sass': '&#xe96d;',
		'scicon-samsung-alt': '&#xe96e;',
		'scicon-samsung': '&#xe96f;',
		'scicon-rotten-tomatoes-wordmark': '&#xe970;',
		'scicon-rotten-tomatoes': '&#xe971;',
		'scicon-researchgate-alt': '&#xe972;',
		'scicon-researchgate': '&#xe973;',
		'scicon-redhat': '&#xe974;',
		'scicon-reddit-wordmark': '&#xe975;',
		'scicon-reddit-text': '&#xe976;',
		'scicon-reddit-alt': '&#xe977;',
		'scicon-reddit': '&#xe978;',
		'scicon-react': '&#xe979;',
		'scicon-razer-wordmark': '&#xe97a;',
		'scicon-razer': '&#xe97b;',
		'scicon-raspberry-pi': '&#xe97c;',
		'scicon-quora-alt': '&#xe97d;',
		'scicon-quora': '&#xe97e;',
		'scicon-python': '&#xe97f;',
		'scicon-product-hunt-wordmark': '&#xe980;',
		'scicon-product-hunt': '&#xe981;',
		'scicon-prisma-wordmark': '&#xe982;',
		'scicon-prisma': '&#xe983;',
		'scicon-prime-video': '&#xe984;',
		'scicon-premiere-pro': '&#xe985;',
		'scicon-prelude': '&#xe986;',
		'scicon-postman-wordmark': '&#xe987;',
		'scicon-postman': '&#xe988;',
		'scicon-popsci': '&#xe989;',
		'scicon-playstore': '&#xe98a;',
		'scicon-playstation': '&#xe98b;',
		'scicon-pixabay': '&#xe98c;',
		'scicon-pinterest-wordmark': '&#xe98d;',
		'scicon-pinterest-text': '&#xe98e;',
		'scicon-pinterest-alt': '&#xe98f;',
		'scicon-pinterest': '&#xe990;',
		'scicon-php-text': '&#xe991;',
		'scicon-php': '&#xe992;',
		'scicon-photoshop': '&#xe993;',
		'scicon-philips': '&#xe994;',
		'scicon-pexels-wordmark': '&#xe995;',
		'scicon-pexels': '&#xe996;',
		'scicon-perl-camel': '&#xe997;',
		'scicon-perl': '&#xe998;',
		'scicon-periodum': '&#xe999;',
		'scicon-paypal-wordmark': '&#xe99a;',
		'scicon-paypal-text': '&#xe99b;',
		'scicon-paypal': '&#xe99c;',
		'scicon-patreon-text': '&#xe99d;',
		'scicon-patreon': '&#xe99e;',
		'scicon-orcid': '&#xe99f;',
		'scicon-oracle': '&#xe9a0;',
		'scicon-opensuse-wordmark': '&#xe9a1;',
		'scicon-opensuse-text': '&#xe9a2;',
		'scicon-opensuse': '&#xe9a3;',
		'scicon-openssl': '&#xe9a4;',
		'scicon-open-bug-bounty': '&#xe9a5;',
		'scicon-openai-wordmark': '&#xe9a6;',
		'scicon-openai-text': '&#xe9a7;',
		'scicon-openai': '&#xe9a8;',
		'scicon-odysee-wordmark': '&#xe9a9;',
		'scicon-odysee': '&#xe9aa;',
		'scicon-nvidia-wordmark': '&#xe9ab;',
		'scicon-nvidia': '&#xe9ac;',
		'scicon-nsf': '&#xe9ad;',
		'scicon-npm-text': '&#xe9ae;',
		'scicon-npm-alt': '&#xe9af;',
		'scicon-npm': '&#xe9b0;',
		'scicon-notion': '&#xe9b1;',
		'scicon-nokia-old': '&#xe9b2;',
		'scicon-nokia-n': '&#xe9b3;',
		'scicon-nokia': '&#xe9b4;',
		'scicon-nodemon-alt': '&#xe9b5;',
		'scicon-nodemon': '&#xe9b6;',
		'scicon-nodejs-wordmark': '&#xe9b7;',
		'scicon-nodejs-js': '&#xe9b8;',
		'scicon-nodejs': '&#xe9b9;',
		'scicon-nike': '&#xe9ba;',
		'scicon-ngrok': '&#xe9bb;',
		'scicon-nextjs-wordmark': '&#xe9bc;',
		'scicon-nextjs': '&#xe9bd;',
		'scicon-neuralink-wordmark': '&#xe9be;',
		'scicon-neuralink': '&#xe9bf;',
		'scicon-netlify-wordmark': '&#xe9c0;',
		'scicon-netlify-alt': '&#xe9c1;',
		'scicon-netlify': '&#xe9c2;',
		'scicon-netflix-wordmark': '&#xe9c3;',
		'scicon-netflix': '&#xe9c4;',
		'scicon-nature-text': '&#xe9c5;',
		'scicon-nature': '&#xe9c6;',
		'scicon-nasa-worm': '&#xe9c7;',
		'scicon-nasa': '&#xe9c8;',
		'scicon-mysql-text': '&#xe9c9;',
		'scicon-mysql-mark': '&#xe9ca;',
		'scicon-mysql': '&#xe9cb;',
		'scicon-mubi-wordmark': '&#xe9cc;',
		'scicon-mubi': '&#xe9cd;',
		'scicon-msi': '&#xe9ce;',
		'scicon-mozilla': '&#xe9cf;',
		'scicon-mongodb-wordmark': '&#xe9d0;',
		'scicon-mongodb-leaf': '&#xe9d1;',
		'scicon-microsoft-wordmark': '&#xe9d2;',
		'scicon-microsoft-text': '&#xe9d3;',
		'scicon-microsoft-teams': '&#xe9d4;',
		'scicon-microsoft-365': '&#xe9d5;',
		'scicon-microsoft': '&#xe9d6;',
		'scicon-meteoroloji-gm': '&#xe9d7;',
		'scicon-meta-wordmark': '&#xe9d8;',
		'scicon-metacritic-wordmark': '&#xe9d9;',
		'scicon-metacritic': '&#xe9da;',
		'scicon-meta': '&#xe9db;',
		'scicon-messenger-alt': '&#xe9dc;',
		'scicon-messenger': '&#xe9dd;',
		'scicon-mercedes': '&#xe9de;',
		'scicon-medium-wordmark': '&#xe9df;',
		'scicon-medium-text': '&#xe9e0;',
		'scicon-medium': '&#xe9e1;',
		'scicon-maxcdn': '&#xe9e2;',
		'scicon-matlab': '&#xe9e3;',
		'scicon-mathjax-wordmark': '&#xe9e4;',
		'scicon-mathjax': '&#xe9e5;',
		'scicon-mastodon': '&#xe9e6;',
		'scicon-markdown-alt': '&#xe9e7;',
		'scicon-markdown': '&#xe9e8;',
		'scicon-manjaro': '&#xe9e9;',
		'scicon-livescience-wordmark': '&#xe9ea;',
		'scicon-livescience': '&#xe9eb;',
		'scicon-linux-foundation-wordmark-alt': '&#xe9ec;',
		'scicon-linux-foundation-wordmark': '&#xe9ed;',
		'scicon-linux-foundation': '&#xe9ee;',
		'scicon-linkedin-wordmark': '&#xe9ef;',
		'scicon-linkedin': '&#xe9f0;',
		'scicon-lightroom-classic': '&#xe9f1;',
		'scicon-lightroom': '&#xe9f2;',
		'scicon-libreoffice-wordmark': '&#xe9f3;',
		'scicon-libreoffice': '&#xe9f4;',
		'scicon-laravel-wordmark': '&#xe9f5;',
		'scicon-laravel': '&#xe9f6;',
		'scicon-kurzgesagt': '&#xe9f7;',
		'scicon-krisp-wordmark': '&#xe9f8;',
		'scicon-krisp': '&#xe9f9;',
		'scicon-kreosus-wordmark': '&#xe9fa;',
		'scicon-kreosus': '&#xe9fb;',
		'scicon-ko-fi-wordmark': '&#xe9fc;',
		'scicon-ko-fi': '&#xe9fd;',
		'scicon-kickstarter-wordmark': '&#xe9fe;',
		'scicon-kickstarter': '&#xe9ff;',
		'scicon-khan-academy-wordmark': '&#xea00;',
		'scicon-khan-academy-text': '&#xea01;',
		'scicon-khan-academy-alt': '&#xea02;',
		'scicon-khan-academy': '&#xea03;',
		'scicon-keysight-wordmark': '&#xea04;',
		'scicon-keysight': '&#xea05;',
		'scicon-katex': '&#xea06;',
		'scicon-jsdelivr-wordmark': '&#xea07;',
		'scicon-jsdelivr-text': '&#xea08;',
		'scicon-jsdelivr': '&#xea09;',
		'scicon-jquery-wordmark': '&#xea0a;',
		'scicon-jquery-slogan': '&#xea0b;',
		'scicon-jquery': '&#xea0c;',
		'scicon-jira-software-wordmark': '&#xea0d;',
		'scicon-jira-software': '&#xea0e;',
		'scicon-java-wordmark': '&#xea0f;',
		'scicon-javascript-text': '&#xea10;',
		'scicon-javascript': '&#xea11;',
		'scicon-java': '&#xea12;',
		'scicon-internet-archive-wordmark': '&#xea13;',
		'scicon-internet-archive': '&#xea14;',
		'scicon-intel': '&#xea15;',
		'scicon-instagram-alt': '&#xea16;',
		'scicon-instagram': '&#xea17;',
		'scicon-inkscape': '&#xea18;',
		'scicon-indesign': '&#xea19;',
		'scicon-incopy': '&#xea1a;',
		'scicon-imgur': '&#xea1b;',
		'scicon-imdb-text': '&#xea1c;',
		'scicon-imdb': '&#xea1d;',
		'scicon-illustrator': '&#xea1e;',
		'scicon-ibm': '&#xea1f;',
		'scicon-hyperx': '&#xea20;',
		'scicon-hubspot-wordmark': '&#xea21;',
		'scicon-hubspot': '&#xea22;',
		'scicon-huawei-wordmark': '&#xea23;',
		'scicon-huawei-text': '&#xea24;',
		'scicon-huawei': '&#xea25;',
		'scicon-html5-wordmark': '&#xea26;',
		'scicon-html5': '&#xea27;',
		'scicon-hp': '&#xea28;',
		'scicon-hantek': '&#xea29;',
		'scicon-guilded-wordmark': '&#xea2a;',
		'scicon-guilded': '&#xea2b;',
		'scicon-grammarly-wordmark': '&#xea2c;',
		'scicon-grammarly': '&#xea2d;',
		'scicon-google-text': '&#xea2e;',
		'scicon-google-scholar': '&#xea2f;',
		'scicon-google-pay': '&#xea30;',
		'scicon-google': '&#xea31;',
		'scicon-go-lang': '&#xea32;',
		'scicon-go-gopher': '&#xea33;',
		'scicon-godaddy-wordmark': '&#xea34;',
		'scicon-godaddy': '&#xea35;',
		'scicon-gmail': '&#xea36;',
		'scicon-git-wordmark': '&#xea37;',
		'scicon-git-text': '&#xea38;',
		'scicon-gitlab-wordmark': '&#xea39;',
		'scicon-gitlab-text': '&#xea3a;',
		'scicon-gitlab': '&#xea3b;',
		'scicon-github-text': '&#xea3c;',
		'scicon-github': '&#xea3d;',
		'scicon-gitbook-wordmark': '&#xea3e;',
		'scicon-gitbook': '&#xea3f;',
		'scicon-git': '&#xea40;',
		'scicon-giphy-wordmark': '&#xea41;',
		'scicon-giphy-text': '&#xea42;',
		'scicon-giphy': '&#xea43;',
		'scicon-gimp': '&#xea44;',
		'scicon-gatsby-wordmark': '&#xea45;',
		'scicon-gatsby-alt': '&#xea46;',
		'scicon-gatsby': '&#xea47;',
		'scicon-f-sharp': '&#xea48;',
		'scicon-freecodecamp': '&#xea49;',
		'scicon-fortran': '&#xea4a;',
		'scicon-font-awesome': '&#xea4b;',
		'scicon-flutter-wordmark': '&#xea4c;',
		'scicon-flutter': '&#xea4d;',
		'scicon-flickr-wordmark': '&#xea4e;',
		'scicon-flickr': '&#xea4f;',
		'scicon-flaticon-wordmark': '&#xea50;',
		'scicon-flaticon': '&#xea51;',
		'scicon-firefox': '&#xea52;',
		'scicon-fedora-wordmark': '&#xea53;',
		'scicon-fedora-text': '&#xea54;',
		'scicon-fedora-alt': '&#xea55;',
		'scicon-fedora': '&#xea56;',
		'scicon-facebook-f': '&#xea57;',
		'scicon-facebook': '&#xea58;',
		'scicon-evrimagaci-alt': '&#xea59;',
		'scicon-evrimagaci': '&#xea5a;',
		'scicon-evernote-wordmark': '&#xea5b;',
		'scicon-evernote': '&#xea5c;',
		'scicon-etsy-e': '&#xea5d;',
		'scicon-etsy': '&#xea5e;',
		'scicon-esa-wordmark': '&#xea5f;',
		'scicon-esa-text': '&#xea60;',
		'scicon-esa': '&#xea61;',
		'scicon-epic-games': '&#xea62;',
		'scicon-envato': '&#xea63;',
		'scicon-elgato-wordmark': '&#xea64;',
		'scicon-elgato': '&#xea65;',
		'scicon-electron-framework-alt': '&#xea66;',
		'scicon-electron-framework': '&#xea67;',
		'scicon-edge-old': '&#xea68;',
		'scicon-edge-alt': '&#xea69;',
		'scicon-edge': '&#xea6a;',
		'scicon-ebay': '&#xea6b;',
		'scicon-duolingo-wordmark': '&#xea6c;',
		'scicon-duolingo-text': '&#xea6d;',
		'scicon-duolingo': '&#xea6e;',
		'scicon-dribbble': '&#xea6f;',
		'scicon-dreamweaver': '&#xea70;',
		'scicon-doi-foundation-wordmark': '&#xea71;',
		'scicon-doi-foundation': '&#xea72;',
		'scicon-docusign-wordmark': '&#xea73;',
		'scicon-docusign': '&#xea74;',
		'scicon-docker-wordmark': '&#xea75;',
		'scicon-docker': '&#xea76;',
		'scicon-discourse': '&#xea77;',
		'scicon-discord-wordmark': '&#xea78;',
		'scicon-discord-text': '&#xea79;',
		'scicon-discord': '&#xea7a;',
		'scicon-digitalocean-wordmark': '&#xea7b;',
		'scicon-digitalocean': '&#xea7c;',
		'scicon-diagrams-net': '&#xea7d;',
		'scicon-dhl': '&#xea7e;',
		'scicon-delphi-lang-alt': '&#xea7f;',
		'scicon-delphi-lang': '&#xea80;',
		'scicon-dell-alt': '&#xea81;',
		'scicon-dell': '&#xea82;',
		'scicon-deezer-wordmark': '&#xea83;',
		'scicon-deezer': '&#xea84;',
		'scicon-dailymotion-wordmark': '&#xea85;',
		'scicon-dailymotion-alt': '&#xea86;',
		'scicon-dailymotion': '&#xea87;',
		'scicon-css-wordmark': '&#xea88;',
		'scicon-css': '&#xea89;',
		'scicon-c-sharp': '&#xea8a;',
		'scicon-crossref-wordmark': '&#xea8b;',
		'scicon-crossref': '&#xea8c;',
		'scicon-creative-cloud': '&#xea8d;',
		'scicon-cpp-lang': '&#xea8e;',
		'scicon-cpanel': '&#xea8f;',
		'scicon-coursera-wordmark': '&#xea90;',
		'scicon-coursera': '&#xea91;',
		'scicon-corsair-wordmark-horizontal': '&#xea92;',
		'scicon-corsair-wordmark': '&#xea93;',
		'scicon-corsair': '&#xea94;',
		'scicon-compaq-wordmark': '&#xea95;',
		'scicon-compaq': '&#xea96;',
		'scicon-commodore': '&#xea97;',
		'scicon-codepen': '&#xea98;',
		'scicon-cnn': '&#xea99;',
		'scicon-clubhouse': '&#xea9a;',
		'scicon-cloudflare-wordmark': '&#xea9b;',
		'scicon-cloudflare': '&#xea9c;',
		'scicon-c-lang-alt': '&#xea9d;',
		'scicon-c-lang': '&#xea9e;',
		'scicon-chrome': '&#xea9f;',
		'scicon-carrefour-wordmark': '&#xeaa0;',
		'scicon-carrefour': '&#xeaa1;',
		'scicon-canva-alt': '&#xeaa2;',
		'scicon-canva': '&#xeaa3;',
		'scicon-buy-me-a-coffee-wordmark': '&#xeaa4;',
		'scicon-buy-me-a-coffee': '&#xeaa5;',
		'scicon-brave-wordmark': '&#xeaa6;',
		'scicon-brave-text': '&#xeaa7;',
		'scicon-brave': '&#xeaa8;',
		'scicon-bootstrap': '&#xeaa9;',
		'scicon-bluetooth-b': '&#xeaaa;',
		'scicon-bluetooth': '&#xeaab;',
		'scicon-blogger-b': '&#xeaac;',
		'scicon-blogger': '&#xeaad;',
		'scicon-bing': '&#xeaae;',
		'scicon-bim': '&#xeaaf;',
		'scicon-behance-alt': '&#xeab0;',
		'scicon-behance': '&#xeab1;',
		'scicon-bbc': '&#xeab2;',
		'scicon-azure': '&#xeab3;',
		'scicon-authy-wordmark': '&#xeab4;',
		'scicon-authy-alt': '&#xeab5;',
		'scicon-authy': '&#xeab6;',
		'scicon-audacity': '&#xeab7;',
		'scicon-atom-editor': '&#xeab8;',
		'scicon-atlassian-wordmark-alt': '&#xeab9;',
		'scicon-atlassian-wordmark': '&#xeaba;',
		'scicon-atlassian': '&#xeabb;',
		'scicon-asus': '&#xeabc;',
		'scicon-arxiv-wordmark': '&#xeabd;',
		'scicon-arxiv': '&#xeabe;',
		'scicon-armut-wordmark': '&#xeabf;',
		'scicon-armut-text': '&#xeac0;',
		'scicon-armut': '&#xeac1;',
		'scicon-arm': '&#xeac2;',
		'scicon-arduino-wordmark': '&#xeac3;',
		'scicon-arduino': '&#xeac4;',
		'scicon-archlinux-wordmark': '&#xeac5;',
		'scicon-archlinux': '&#xeac6;',
		'scicon-appstore': '&#xeac7;',
		'scicon-apple-tv-plus': '&#xeac8;',
		'scicon-apple-tv': '&#xeac9;',
		'scicon-apple-pay': '&#xeaca;',
		'scicon-apple-inc': '&#xeacb;',
		'scicon-apod': '&#xeacc;',
		'scicon-apache-wordmark': '&#xeacd;',
		'scicon-apache': '&#xeace;',
		'scicon-angular': '&#xeacf;',
		'scicon-android-wordmark': '&#xead0;',
		'scicon-android-tv': '&#xead1;',
		'scicon-android': '&#xead2;',
		'scicon-amd-alt': '&#xead3;',
		'scicon-amd': '&#xead4;',
		'scicon-amazon-ws': '&#xead5;',
		'scicon-amazon-pay': '&#xead6;',
		'scicon-amazon-lightsail-wordmark': '&#xead7;',
		'scicon-amazon-lightsail': '&#xead8;',
		'scicon-amazon-a': '&#xead9;',
		'scicon-amazon': '&#xeada;',
		'scicon-airbnb-wordmark': '&#xeadb;',
		'scicon-airbnb': '&#xeadc;',
		'scicon-after-effects': '&#xeadd;',
		'scicon-adobe-wordmark': '&#xeade;',
		'scicon-adobe-fuse': '&#xeadf;',
		'scicon-adobe-animate': '&#xeae0;',
		'scicon-adobe': '&#xeae1;',
		'scicon-adidas': '&#xeae2;',
		'scicon-adafruit-wordmark': '&#xeae3;',
		'scicon-adafruit': '&#xeae4;',
		'scicon-acrobat': '&#xeae5;',
		'scicon-academia-wordmark': '&#xeae6;',
		'scicon-academia': '&#xeae7;',
		'scicon-px': '&#xeae8;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/scicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
