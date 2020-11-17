class Genre
{
   static	Acid	=	0;
   static	Acid_Jazz	=	1;
   static	Acid_Punk	=	2;
   static	Alternative	=	3;
   static	AlternRock	=	4;
   static	Ambient	=	5;
   static	Bass	=	6;
   static	Blues	=	7;
   static	Cabaret	=	8;
   static	Christian_Rap	=	9;
   static	Classic_Rock	=	10;
   static	Classical	=	11;
   static	Comedy	=	12;
   static	Country	=	13;
   static	Cult	=	14;
   static	Dance	=	15;
   static	Darkwave	=	16;
   static	Death_Metal	=	17;
   static	Disco	=	18;
   static	Dream	=	19;
   static	Electronic	=	20;
   static	Ethnic	=	21;
   static	Euro_Techno	=	22;
   static	Eurodance	=	23;
   static	Funk	=	24;
   static	Fusion	=	25;
   static	Game	=	26;
   static	Gangsta	=	27;
   static	Gospel	=	28;
   static	Gothic	=	29;
   static	Grunge	=	30;
   static	Hard_Rock	=	31;
   static	Hip_Hop	=	32;
   static	House	=	33;
   static	Industrial	=	34;
   static	Instrumental	=	35;
   static	Instrumental_Pop	=	36;
   static	Instrumental_Rock	=	37;
   static	Jazz	=	38;
   static	Jazz_Funk	=	39;
   static	Jungle	=	40;
   static	Lo_Fi	=	41;
   static	Meditative	=	42;
   static	Metal	=	43;
   static	Musical	=	44;
   static	Native_American	=	45;
   static	New_Age	=	46;
   static	New_Wave	=	47;
   static	Noise	=	48;
   static	Oldies	=	49;
   static	Other	=	50;
   static	Polka	=	51;
   static	Pop	=	52;
   static	Pop_Folk	=	53;
   static	Pop_Funk	=	54;
   static	Pranks	=	55;
   static	Psychadelic	=	56;
   static	Punk	=	57;
   static	RandB	=	58;
   static	Rap	=	59;
   static	Rave	=	60;
   static	Reggae	=	61;
   static	Retro	=	62;
   static	Rock	=	63;
   static	Rock_and_Roll	=	64;
   static	Showtunes	=	65;
   static	Ska	=	66;
   static	Soul	=	67;
   static	Sound_Clip	=	68;
   static	Soundtrack	=	69;
   static	Southern_Rock	=	70;
   static	Space	=	71;
   static	Techno	=	72;
   static	Techno_Industrial	=	73;
   static	Top_40	=	74;
   static	Trailer	=	75;
   static	Trance	=	76;
   static	Tribal	=	77;
   static	Trip_Hop	=	78;
   static	Vocal	=	79;
   static   Chillout = 80;
   static   Latin = 81;
};

function genreGetText( nGenre )
{
   let sText = "";
   switch( nGenre )
   {
      case Genre.Blues	      : sText = "	Blues	"; break;
      case Genre.Classic_Rock	: sText = "	Classic Rock	"; break;
      case Genre.Country	   : sText = "	Country	"; break;
      case Genre.Dance     	: sText = "	Dance	"; break;
      case Genre.Disco	      : sText = "	Disco	"; break;
      case Genre.Funk	      : sText = "	Funk	"; break;
      case Genre.Grunge	      : sText = "	Grunge	"; break;
      case Genre.Hip_Hop	   : sText = "	Hip-Hop	"; break;
      case Genre.Jazz	      : sText = "	Jazz	"; break;
      case Genre.Metal	: sText = "	Metal	"; break;
      case Genre.New_Age	: sText = "	New Age	"; break;
      case Genre.Oldies	: sText = "	Oldies	"; break;
      case Genre.Other	: sText = "	Other	"; break;
      case Genre.Pop	: sText = "	Pop	"; break;
      case Genre.RandB	: sText = "	R&B	"; break;
      case Genre.Rap	: sText = "	Rap	"; break;
      case Genre.Reggae	: sText = "	Reggae	"; break;
      case Genre.Rock	: sText = "	Rock	"; break;
      case Genre.Techno	: sText = "	Techno	"; break;
      case Genre.Industrial	: sText = "	Industrial	"; break;
      case Genre.Alternative	: sText = "	Alternative	"; break;
      case Genre.Ska	: sText = "	Ska	"; break;
      case Genre.Death_Metal	: sText = "	Death Metal	"; break;
      case Genre.Pranks	: sText = "	Pranks	"; break;
      case Genre.Soundtrack	: sText = "	Soundtrack	"; break;
      case Genre.Euro_Techno	: sText = "	Euro-Techno	"; break;
      case Genre.Ambient	: sText = "	Ambient	"; break;
      case Genre.Trip_Hop	: sText = "	Trip-Hop	"; break;
      case Genre.Vocal	: sText = "	Vocal	"; break;
      case Genre.Jazz_Funk	: sText = "	Jazz Funk	"; break;
      case Genre.Fusion	: sText = "	Fusion	"; break;
      case Genre.Trance	: sText = "	Trance	"; break;
      case Genre.Classical	: sText = "	Classical	"; break;
      case Genre.Instrumental	: sText = "	Instrumental	"; break;
      case Genre.Acid	: sText = "	Acid	"; break;
      case Genre.House	: sText = "	House	"; break;
      case Genre.Game	: sText = "	Game	"; break;
      case Genre.Sound_Clip	: sText = "	Sound Clip	"; break;
      case Genre.Gospel	: sText = "	Gospel	"; break;
      case Genre.Noise	: sText = "	Noise	"; break;
      case Genre.AlternRock	: sText = "	AlternRock	"; break;
      case Genre.Bass	: sText = "	Bass	"; break;
      case Genre.Soul	: sText = "	Soul	"; break;
      case Genre.Punk	: sText = "	Punk	"; break;
      case Genre.Space	: sText = "	Space	"; break;
      case Genre.Meditative	: sText = "	Meditative	"; break;
      case Genre.Instrumental_Pop	: sText = "	Instrumental Pop	"; break;
      case Genre.Instrumental_Rock	: sText = "	Instrumental Rock	"; break;
      case Genre.Ethnic	: sText = "	Ethnic	"; break;
      case Genre.Gothic	: sText = "	Gothic	"; break;
      case Genre.Darkwave	: sText = "	Darkwave	"; break;
      case Genre.Techno_Industrial	: sText = "	Techno Industrial	"; break;
      case Genre.Electronic	: sText = "	Electronic	"; break;
      case Genre.Pop_Folk	: sText = "	Pop/Folk	"; break;
      case Genre.Eurodance	: sText = "	Eurodance	"; break;
      case Genre.Dream	: sText = "	Dream	"; break;
      case Genre.Southern_Rock	: sText = "	Southern Rock	"; break;
      case Genre.Comedy	: sText = "	Comedy	"; break;
      case Genre.Cult	: sText = "	Cult	"; break;
      case Genre.Gangsta	: sText = "	Gangsta	"; break;
      case Genre.Top_40	: sText = "	Top 40	"; break;
      case Genre.Christian_Rap	: sText = "	Christian_Rap	"; break;
      case Genre.Pop_Funk	: sText = "	Pop/Funk	"; break;
      case Genre.Jungle	: sText = "	Jungle	"; break;
      case Genre.Native_American	: sText = "	Native_American	"; break;
      case Genre.Cabaret	: sText = "	Cabaret	"; break;
      case Genre.New_Wave	: sText = "	New_Wave	"; break;
      case Genre.Psychadelic	: sText = "	Psychadelic	"; break;
      case Genre.Rave	: sText = "	Rave	"; break;
      case Genre.Showtunes	: sText = "	Showtunes	"; break;
      case Genre.Trailer	: sText = "	Trailer	"; break;
      case Genre.Lo_Fi	: sText = "	Lo_Fi	"; break;
      case Genre.Tribal	: sText = "	Tribal	"; break;
      case Genre.Acid_Punk	: sText = "	Acid Punk	"; break;
      case Genre.Acid_Jazz	: sText = "	Acid Jazz	"; break;
      case Genre.Polka	: sText = "	Polka	"; break;
      case Genre.Retro	: sText = "	Retro	"; break;
      case Genre.Musical	: sText = "	Musical	"; break;
      case Genre.Rock_and_Roll	: sText = "	Rock&Roll	"; break;
      case Genre.Hard_Rock	: sText = "	Hard Rock	"; break;
      case Genre.Chillout	: sText = "Chillout";      break;
      case Genre.Latin     : sText = "Latin";         break;
      default:               sText = "";              break;
   }
   return sText.trim();
}


class Station 
{
   constructor( sStation, sName, nGenre, sLink ) 
   {
      this.sStation = sStation;
      this.sName    = sName;
      this.nGenre   = nGenre;
      this.sLink    = sLink;
   }
};


