
document.getElementById("monFormulaire").addEventListener("submit", function(even) 
{
var  myInput = document.getElementById('nom');
var  nom = myInput.value ;
var  myInput1 = document.getElementById('number');
var number = myInput1.value;
var voeux ;
var myArray = ["PAPA","MAMAN","AUBIN","TA.CHRISTELLE","PATITUS","TATA.MAA","PETIT","SOEURETTE","SOEURETTE","PARRAIN","ANGE","APPOLINAIR","PAUL","CLAUDIA","MAESTRO","CATHY","GEROME","M.ELISE","M.DONFOUET", "GHOMSI", "EXPERT.THIERRY","PERE.TCHAT","PERE.ZOUMESSI","AP","MARIUS","JOSEPHINE","LAWSON","MANI","TA.STE","M.MINJA","LORRY","BEUMI","SIMO","LARRISA","YVANA","BELLE","MON.ADVERSAIRE","GRAND.PIERRO", "LE.DIASBI"];
var myArray1 = ["670117561","652557811","675648503","657727397","676478731","677383779","656881762","694869933","658469538","693518860","670557879","695946425","655387762","655186567","653286960","655562539","699221606","678663237","695508154","673156773","695869058","677646980","671526509","653872916","679961824","672061753","655659150","697918564","679403568","655293284","655100256","657021175","693265749","695903336","696880884","691144760","676030355","650508821", "699839130"];

switch(true){
 case(nom === myArray[0] && number === myArray1[0]):
    voeux = "MON Papa adoré 😻 en cette ✨✨nouvelle année✨✨ je te souhaite longue vie 📈 , santé 💞, prospérité 🌟. Que notre Dieu tout puissant continue à te soutenir et te combler de ses grâces. Je te remerci pour tout ce que tu fais pour moi ..Je t'aime !!! 💘 ";
    break;
 case(nom === myArray[1] && number === myArray1[1]):
      voeux = "Ma Mére chérie 😻 en cette ✨✨nouvelle année✨✨ je te souhaite longue vie 📈 , santé 💞, prospérité 🌟. Que notre Dieu tout puissant continue à te soutenir et te combler de ses grâces. Je te remerci pour tout ce que tu fais pour moi ..Je t'aime !!! 💘";  
      break;
 case(nom === myArray[2] && number === myArray1[2]):
      voeux = "Avant tout laisse moi te souhaiter un🎉🎊🎂 HAPPY BIRTHDAY TO YOU🍰 🎉🎊 et par ricochet un ✨✨BONNE ANNÉE✨✨ grand frére !!😅 Qu'en ce jour si vraiment spécial🤩 l'amour de Dieu, de nos parents et de tes fréres et sœurs👩‍👩‍👧‍👧 continue à te donner la force et le courage 💪 de toujours lutter contre les difficulté de la vie. Que le seigneur 🙏 t’ouvre les portes du succès 🌞 de la prospérité 🌟 et te comble de santé et de ses grâces 🌈. Je t’aime 💘 " ;
      break;
 case (nom === myArray[3] && number == myArray1[3]) :
     voeux = "La Grande des grandes sœurs 🥰, y’a pas plus cool que toi 😎 sur cette terre, en cette ✨nouvelle année✨ je prie Dieu tout puissant🙏 de te donner santé 😀, propriété 🌟 , longue vie📈 et le courage, la détermination 💪 pour affronte les difficultés de la vie ne baisse pas les bras un jour tout ira pour le mieux 👊. Je t’aime 💘!!" ;
     break;
case (nom === myArray[4] && number === myArray1[4]):
     voeux = " Mon modelé depuis tout petit 🥰, l’envie d’être comme toi et de te dépasser envahi toujours mon esprit 😇. Qu’en cette ✨✨nouvelle année✨✨ le Dieu tout puissant🙏 t’ouvre les portes du succès🌟de la prospérité 🏆 et continue de te donner la grâce de la santé💖 et te comble toi et toute ta famille 👪… Je t’aime ! 💘";     
     break;
case (nom === myArray[5] && number === myArray1[5]):
     voeux = "  Ma gère grande sœur 🥰, les mots me manquent pour te qualifier 🤗 si attentionnée 😘 et si généreuse Enver tes frères et sœur 👩‍👩‍👧‍👧, je n’ai jamais pris la peine 😅 de te remercier pour  les occasions😌 que tu m’as offertes. Je prie Dieu le tout puissant 🙏 qu’en cette ✨✨nouvelle année✨✨ il t’offre ce que ton cœur désire💞 ainsi que la grâce de la santé 💖, du succès 🏆 de la prospérité 🌟 et les portes du canada 😁…Je t’aime ! 💘 "; 
     break;
case (nom === myArray[6] && number === myArray1[6]):
     voeux = "Je rigole 🤣😂😅 tu sais bien que le petit ici c’est moi 😊 !! Mais bon tu es plus qu’un conseille 😃que j’écoute toujours suis vraiment Fière d’être ton petit frère😍. Qu’en cette ✨✨nouvelle année✨✨ Dieu tout puissant🙏 te donne les désirs de ton cœur💞 et aussi la grâce de la santé 💖 du succès 🏆, des opportunité 🌟 de la prospérité📈 et d’être toujours là  dans chaque décision  que tu prendras ✨ soit comblé… !! 💘";              
     break;
case(nom === myArray[7] && number === myArray1[7]):
     voeux = "Ma gère soeurette Sorelle  J’espère que cette ✨✨nouvelle année✨✨ t’apportera autant de joie😃 et de rire😂 ! Profites-en bien 😊, Tu le mérites. Tous mes meilleurs vœux pour 2025 🥰🥰!";
     break;
case(nom === myArray[8] && number === myArray1[8]):
    voeux =  "Ma soeurette Jacky 🥰 , Que ✨✨2025✨✨ soit pour toi une année remplie de santé 💖, de paix 🤗 et d’épanouissement💃. Puisse-t-elle  t’apporter tout ce que tu  désires 💖 et te permettre de réaliser tes projets les plus chers 🏆";
    break;
case (nom === myArray[9] && number === myArray1[9]):
     voeux =  "Salut Parrain 🙋‍♂️, si on me redonnait une autre occasion de rechoisir😏un autre parrain tu sais quoi !! 😁Je ferais toujours le même choix 😊, Tu ne sais peut-être pas tu impacte beaucoup sur ma vie religieuse ce qui est normal c’est vrai mais toi tu le fais d’une manière très spéciale😀. Je prie Dieu 🙏  qu’en cette ✨✨nouvelle année ✨✨ te donne l’esprit de discernement et te comble des désirs de ton cœur 💞  santé🌟  et prospérité 🏆sur toi et ta famille.";
     break;
case (nom === myArray[10] && number === myArray1[10]):
     voeux = " Toc. Toc. Toc. ! 😀… C’est qui ? 🙄…  C’est Lappinou ! 😎 … Lappinou qui ? 🧐 … ✨✨Lappinou Year ✨✨!! 😂🤣😅  Qu’en cette ✨✨nouvelle année✨✨, Le  Dieu  tout puissant puise toujours et chaque jour te donner des raison de sourire😁 et d’être en joie 😃 ne laisse jamais personne t’enlever cela☺  Santé💖 et prospérité 🏆sur toi et sur toute ta famille  🥰 ";
     break;
case (nom === myArray[11] && number === myArray1[11]):
     voeux = nom+" Salut grand🙋‍♂️ faut toujours me prendre comme un petit frère👦. Que en cette ✨✨nouvelle année✨✨ tes résolutions de début d’année tiennent plus longtemps📈 que les bonnes intentions de tes collègues ☺ ! Que ✨2025✨ soit pour toi synonyme de dépassement de soi 🥇 et d’accomplissement de tes objectifs les plus fous🏆. ";
     break; 
case (nom === myArray[12] && number === myArray1[12]):
     voeux = nom+ "  Le grand BASIS. 😅!  Je te souhaite une ✨✨année 2025✨✨ remplie de promesses tenues😊, de petits bonheurs quotidiens et de grandes réalisations🤩. Que chaque saison t’apporte son lot de surprises🤩 et d’instants magiques🌟. Prends le temps d’aimer🥰, de créer🛠, et de t’épanouir🕺. Meilleurs vœux pour une année radieuse et pleine de grâce👊. ";
     break ; 
case( nom === myArray[13] && number === myArray1[13]):
    voeux = nom + "  En ce début d’année☺, mes pensées se tournent vers toi avec tendresse😇. Que ✨2025✨ soit une année douce🤗 et lumineuse🌟, rythmée par des succès 🥇, des moments de rêve📈 et de rires contagieux😁. Que tes efforts soient récompensés🏆 et que Dieu tout puissant🙏 t’accompagne sur tous les chemins. ✨Bonne année✨, sous le signe du bonheur !";
    break;  
case( nom === myArray[14] && number === myArray1[14]):
    voeux = "Chers "+ nom +"  que cette année ✨2025✨soit une valse d’émotions heureuses😀 et de projets réalisés🌟. Je te souhaite de cultiver la paix intérieure🤗, de savourer la compagnie de tes proches👩‍👩‍👧‍👧 et de trouver la force dans les défis💪. Que chaque jour t’apporte une raison de sourire😁. Excellente année à toi !😇";
    break; 
case(nom === myArray[15] && number === myArray1[15]):
    voeux = " Catherine je te souhaite  mes meilleurs ✨✨vœux pour 2025 ! ✨✨ Que cette année t’offre des horizons infinis de possibilités🌟, des rencontres inspirantes 😊et des instants à chérir🤗. Que tu puisses avancer avec confiance vers tes rêves🤩 et savourer chaque étape de ce voyage😍. Que la joie😃 et la prospérité🏆 s’invitent dans ton quotidien💃. Bonne année, avec toute mon affection💖😇 . ";
    break;
case(nom === myArray[16] && number === myArray1[16]):
    voeux = " Alors que✨ 2025✨ s’ouvre devant nous comme un horizon prometteur😃, je te souhaite de trouver dans chaque instant une étincelle d’émerveillement🤗. Que cette année te comble de joies😁 simples, de succès professionnels🥇 et de grandes réussites personnelles🏆. Que la paix😇, l’amour et l’énergie positive réchauffent ton chemin😍. Bonne et heureuse année à toi MON GRAND😊  !!!";
    break;
case(nom === myArray[17] && number === myArray1[17]):
    voeux = "Chers monsieur ELISE ☺, je t’envoie ces vœux pour cette année ✨2025✨. Que cette nouvelle étape soit celle des réalisations🛠 et des rêves accomplis💪, mais aussi des moments de quiétude 🙃et de rires partagés😂. Que la santé💖 et la sérénité 🌞 t’accompagnent chaque jour. ✨✨Bonne année✨✨, remplie de chaleur🌤 et d’émotions 🥰! ";
    break; 
case(nom === myArray[18] && number === myArray1[18]):
    voeux = " En ce passage vers ✨2025✨, je te souhaite une année riche en émotions positives🥰, en succès mérités🥇 et en souvenirs inoubliables😀. Que chaque mois soit une nouvelle page 🙃où s’écrivent tes plus belles histoires🕺. Que l’espoir, la paix 😇et la créativité soient tes fidèles compagnons🛠 tout au long de cette année🌟. Meilleurs vœux pour une année éclatante de bonheur🌤 Le grand des grands 👊💪🥰 !";
    break;   
case(nom === myArray[19] && number === myArray1[19]):
    voeux = "À toi qui comptes tant pour moi🙃, je formule mes vœux les plus sincères pour✨ 2025✨. Que cette année soit marquée par des réalisations audacieuses 🛠et des moments d’intense bonheur😀. Qu’elle t’offre aussi le temps de savourer les petites joies🌤 du quotidien et la précieuse compagnie de ceux qui embellissent ta vie💞. ✨Bonne année a toi VERRATTI. !👊👍 ";
    break;
case(nom === myArray[20] && number === myArray1[20]):
    voeux = "Que cette nouvelle ✨année✨. Soit porteuse de douceur🤗, Que la paix🌈 soit ancrée Au plus profond de vos cœurs💞. Que la santé💖 vous comble, Que le bonheur soit présent🌤, Que vos jours soient sans trouble😇 Et votre chemin serein😃. Mes plus sincères vœux Pour une année radieuse🌟, Qu’elle vous soit heureuse Et vous épanouisse en tous lieux🤩. Je ne cesserais jamais de vous remercier🙏 pour tout ce que vous faites pour nous ☺!  Que Dieu vous rende cela au centuple📈 et vous comble de sa grâce✨🎉 bonne année à vous EXPERT THIERRY✨🎉 ";
    break;
case(nom === myArray[21] && number === myArray1[21]):
    voeux = " À l’aube de cette✨ nouvelle année✨, je souhaite que 🎉2025 🎉vous comble de tout ce qui compte le plus☺ : une santé infaillible💖, des projets passionnants🤩, et des moments de complicité avec vos proches💞. Que chaque jour vous réserve une belle surprise et que l’amour illumine vos vies💖. Excellente ✨année 2025✨, remplie d’émerveillement😃 et de prospérité🏆…Merci 🙏pour tout ce que vous faite pour nous !! ✨✨ bonne année Père TCHATCHOUANG !!✨✨";
    break;
case(nom === myArray[22] && number === myArray1[22]):
    voeux = "Alors que l’année 2024 s’éclipse doucement🙃, je tiens à vous adresser mes vœux les plus chaleureux pour✨ 2025✨. Que cette nouvelle année soit empreinte de douceur🤗, de succès 🥇et d’éclats de bonheur😀. Qu’elle vous offre la force de réaliser vos rêves les plus chers🛠 et la joie de partager des instants précieux avec ceux que vous aimez💞. Bonne et heureuse✨ année Père ZOUMESSI... !✨ ";
    break;
case(nom === myArray[23] && number === myArray1[23]):
    voeux = "Que cette ✨✨nouvelle année✨✨ apporte réussite 🥇et prospérité🌟 ! Une année de plus à travailler ensemble☺ est une année réussie à ajouter au calendrier🤩. Je vous souhaite de joyeuses fêtes de fin d’année✨ et j’espère que vous êtes prêt à démarrer cette excellente🌟 année sur les starting blocks🌟 Bonne année AP NIETCH 🌟 ";
    break;
case(nom === myArray[24] && number === myArray1[24]):
    voeux = "Je te présente mes meilleurs vœux de bonheur et de réussite 🥇pour cette nouvelle année 2025✨. Je suis très heureux de travailler avec toi🥰 depuis ces nombreuses années, car au-delà de tes savoir-faire qui ne sont plus à démontrer, tu es une personne humaine et bienveillante👍. Des qualités que j'apprécie tout particulièrement dans le monde du travail😇. Qu’en cette✨ nouvelle année ✨Dieu tout puissant puisse t’accorder santé💖 prospérité sur toi et sur toute ta famille👩‍👩‍👧‍👧  ";
    break;
case(nom === myArray[25] && number === myArray1[25]):
    voeux = "Madame la déléguée… !😅😅  J’ai vraiment apprécié ces moments passés à travailler près de de toi !🥰 tu es une fille très cool😎 j’espères qu’on se retrouvera dans u autre cadre que le travail,🙃 Que cette ✨nouvelle année✨ t’apporte autant de surprises🤩 que les soldes de janvier😅 Bonne année ✨ ";
    break;
case(nom === myArray[26] && number === myArray1[26]):
    voeux = "  Nous célébrons une ✨✨nouvelle année d’amitié✨✨✨. Je nous souhaite que 2025 soit merveilleuse🙃, pleine de souhaits réalisés🙏, de bonnes nouvelles 🤩et de moments passés ensemble👍.🌟 Bonne année COUZO !!🌟";
    break;
case(nom === myArray[27] && number === myArray1[27]):
    voeux = "Je te présente mes meilleurs vœux de bonheur et de réussite 🥇pour cette nouvelle année 2025✨. Je suis très heureux de travailler avec toi🥰 depuis ces nombreuses années, car au-delà de tes savoir-faire qui ne sont plus à démontrer, tu es une personne humaine et bienveillante👍. Des qualités que j'apprécie tout particulièrement dans le monde du travail😇. Qu’en cette✨ nouvelle année ✨Dieu tout puissant puisse t’accorder santé💖 prospérité sur toi et sur toute ta famille👩‍👩‍👧‍👧  ";
    break;
case(nom === myArray[28] && number === myArray1[28]):
    voeux = " Pour cette ✨année 2025✨, je te souhaite de franchir tous les obstacles🥇, d'atteindre tes sommets et de toujours garder l'esprit sportif🏃‍♀️. Que chaque défi devienne une victoire retentissante🏆. 🌟 Bonne année a toi Ta STEVIA !! 🌟 ";
    break;
case(nom === myArray[29] && number === myArray1[29]):
    voeux = " Je vous souhaite une ✨année 2025✨ prospère et sereine😇. Que ce nouveau chapitre soit l'opportunité😀 de concrétiser vos ambitions👨‍🎓 et de vivre de magnifiques aventures🤩, tant personnelles que professionnelles😅. ✨Bonne année a vous Monsieur MINJA✨";
    break;
case(nom === myArray[30] && number === myArray1[30]):
    voeux = " Le train numéro 2024🙃 vient d’entrer en gare. Ne loupez pas le départ du ✨2025✨, à destination d’une année pleine de promesses🤩, de joie😂, de santé💖 et d’aventures🥇 ✨Bonne année a toi DOCTEUR LORRY ✨ !!.";
    break;
case(nom === myArray[31] && number === myArray1[31]):
    voeux = "✨Bonne année !✨ Oublions les bonnes résolutions🙃 que nous ne tiendrons pas😅 et célébrons simplement le passage à 2025🤩. Qu’elle s’annonce riche en projets📈, en succès🥇 et en parfaite santé💖. ✨Bonne année a toi ma chère BEUMI et à MON PETIT GARÇON🥰✨  ";
    break;
case(nom === myArray[32] && number === myArray1[32]):
    voeux = "Pour cette✨ année 2025✨, je t’envoie mes meilleurs vœux🤩 enroulés dans une touche de nostalgie🙃. Souvenons-nous des bons moments😅 et créons-en de nouveaux à chérir pour toujours👍. ✨Bonne année a toi MON chers SIMO✨  ";
    break;
case(nom === myArray[33] && number === myArray1[33]):
    voeux = "Que✨ 2025✨ soit pour toi une année bénie et lumineuse🌟. Puisse la paix😇 et l'amour🥰 divins illuminer chaque jour🙃, t’offrant continuellement grâce et sérénité🌈 et que Dieu tout puissant🙏 t’ouvre les ports des désirs🤩 de ton cœur💖. Bonne ✨année a toi LARRISA ✨ ";
    break;
case(nom === myArray[34] && number === myArray1[34]):
    voeux = " Additionnons : 365 jours d'amour 🥰+ 52 semaines de rire 😂+ 12 mois de réussite🏆 = Une ✨année 2025✨ extraordinairement heureuse😀. Que ces calculs précis te mènent vers un bonheur infini ! 💖 Bonne année YVANA !! 🌟 ";
    break;
case(nom === myArray[35] && number === myArray1[35]):
    voeux = " Additionnons : 365 jours d'amour 🥰+ 52 semaines de rire 😂+ 12 mois de réussite🏆 = Une ✨année 2025✨ extraordinairement heureuse😀. Que ces calculs précis te mènent vers un bonheur infini ! 🌈 Bonne année MA STAR BELLE ANGE 😅 !! 🌟 ";
    break;
case(nom === myArray[36] && number === myArray1[36]):
    voeux = " Mon cher adversaire😎 que cette nouvelle✨ année 2025 ✨soit une étoile scintillante de plus dans notre galaxie d'amitié👊. Je te souhaite des moments mémorables🤩, des rires éclatants😂, des rêves exaucés👨‍🎓 et des compétitions à relevées💪🏆. Bonne ✨année à toi FISTAL ✨";
    break;
case(nom === myArray[37] && number === myArray1[37]):
    voeux = "Je te souhaite une✨ bonne année ✨et une bonne santé pour 2025🌟. Qu’elle soit riche en aventures😎 et en réussite🥇 dans tes projets professionnels🛠 et personnels et merci 🙏pour tout ces conseils 😅de grand frère et de père🙃 particulièrement je te considère comme un modèle😇 pour nous jeune. ✨Bonne année à toi le grand PIERRO ✨! ";
    break;
case(nom === myArray[38] && number === myArray1[38]):
    voeux = " Passe une très belle ✨année 2025✨ ma chers BIDIAS !😎 Encore une nouvelle année où l’on pourra garder toutes nos bonnes vieilles habitudes😅. Nouvelle année, même moi😇 : toujours aussi cynique mais aimant🥰. Plus sérieusement🙃, je te souhaite de passer une merveilleuse année🌟, Mon partenaire d’affaire👊. J’espère qu’elle sera au moins aussi solaire que toi ! 🤣";
    break;
default:
     voeux = " Pour ✨2025✨, inspire-toi de Socrate, d’Aristote ou d’Épicure, et cultive👨‍🎓 le bonheur en te connaissant toi-même 🧍‍♂️! Autrement dit, prends soin de toi🥰, écoute tes désirs, sans les laisser te contrôler💪. Détourne-toi des plaisirs éphémères👍, et fais de chaque journée une quête vers le bonheur🤗. Bonne année !  " + nom + "  !!😁";
}
localStorage.setItem("voeux", voeux);

 }) ;
