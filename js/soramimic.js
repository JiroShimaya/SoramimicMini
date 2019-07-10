class Soramimic {
	constructor(){
		this.DEFAULT_PARAMETER_VALUES_ = {
				REPEAT: "100",
				SPLITTER: "/",
				DUPLICATE: true,
				SAME_PHRASE_BREAK_REWARD: 1,//文節が一致しているとき掛け算する
				SAME_KANA_REWARD: 1,//同じカナに対して掛け算する
				SAME_VOWEL_REWARD: 1,//同じ母音に対して掛け算する
				SAME_CONSONANT_REWARD: 1,//同じ母音に対して掛け算する
				SAME_BAR_REWARD: 1, //拗音同士に対して掛け算する
				SAME_HATSUON_REWARD: 1, //撥音同士に対して掛け算する(pronunciationではない)
				SAME_SOKUON_REWARD: 1,//促音同士に対して掛け算する
				LENGTH: 1
		}
		this.KANA2PHONON_ = {"sp": ["sp", "sp"], "ッ": ["sp", "q"],"ン": ["sp", "N"],
				"ア": ["sp", "a"], "イ": ["sp", "i"], "ウ": ["sp", "u"], "エ": ["sp", "e"], "オ": ["sp", "o"],
				"ウァ": ["w+a", "w-a"],  "ウヮ": ["w+a", "w-a"], "ウィ": ["w+i", "w-i"], "ウェ": ["w+e", "w-e"], "ウォ": ["w+o", "w-o"],
				"カ": ["k+a", "k-a"],"キ": ["k+i", "k-i"],"ク": ["k+u", "k-u"],"ケ": ["k+e", "k-e"],"コ": ["k+o", "k-o"],
				"ガ": ["g+a", "g-a"],"ギ": ["g+i", "g-i"],"グ": ["g+u", "g-u"],"ゲ": ["g+e", "g-e"], "ゴ": ["g+o", "g-o"],
				"キャ": ["ky+a", "y-a"], "キュ": ["ky+u", "y-u"], "キェ": ["ky+e", "y-e"],"キョ": ["ky+o", "y-o"], 
				"ギャ": ["gy+a", "y-a"],"ギュ": ["gy+u", "y-u"],"ギェ": ["gy+e", "y-e"],"ギョ": ["gy+o", "y-o"], 
				"クァ": ["k+a", "k-a"], "クヮ": ["k+a", "k-a"],"クィ": ["k+i", "k-i"], "クェ": ["k+e", "k-e"], "クォ": ["k+o", "k-o"], 
				"グァ": ["g+a", "g-a"], "グヮ": ["g+a", "g-a"],"グィ": ["g+i", "g-i"], "グェ": ["g+e", "g-e"], "グォ": ["g+o", "g-o"], 
				"サ": ["s+a", "s-a"],"シ": ["sh+i", "y-i"],"ス": ["s+u", "s-u"], "セ": ["s+e", "s-e"],"ソ": ["s+o", "s-o"],
				"ザ": ["z+a", "z-a"],"ジ": ["j+i", "y-i"],"ズ": ["z+u", "z-u"],"ゼ": ["z+e", "z-e"], "ゾ": ["z+o", "z-o"], 
				"シャ": ["sh+a", "y-a"],"シュ": ["sh+u", "y-u"],"シェ": ["sh+e", "y-e"], "ショ": ["sh+o", "y-o"],
				"ジャ": ["j+a", "y-a"], "ジュ": ["j+u", "y-u"], "ジェ": ["j+e", "y-e"], "ジョ": ["j+o", "y-o"],
				"スァ": ["s+a", "s-a"],"スヮ": ["s+a", "s-a"],"スィ": ["s+i", "s-i"],"スェ": ["s+e", "s-e"],"スォ": ["s+o", "s-o"],
				"ズァ": ["z+a", "z-a"], "ズヮ": ["z+a", "z-a"],"ズィ": ["z+i", "z-i"], "ズェ": ["z+e", "z-e"], "ズォ": ["z+o", "z-o"], 
				"タ": ["t+a", "t-a"], "チ": ["ch+i", "y-i"], "ツ": ["ts+u", "s-u"], "テ": ["t+e", "t-e"], "ト": ["t+o", "t-o"],
				"ダ": ["d+a", "d-a"], "ヂ": ["d+i", "d-i"], "ヅ": ["d+u", "d-u"],"デ": ["d+e", "d-e"],"ド": ["d+o", "d-o"], 
				"チャ": ["ch+a", "y-a"], "チュ": ["ch+u", "y-u"], "チェ": ["ch+e", "y-e"], "チョ": ["ch+o", "y-o"],
				"ヂャ": ["dy+a", "y-a"], "ヂュ": ["dy+u", "y-u"], "ヂェ": ["dy+e", "y-e"], "ヂョ": ["dy+o", "y-o"],
				"ティ": ["t+i", "t-i"], "テュ": ["t+u", "t-u"], "トゥ": ["t+u", "t-u"],
				"ディ": ["d+i", "d-i"], "デュ": ["d+u", "d-u"],  "ドゥ": ["d+u", "d-u"],
				"ナ": ["n+a", "n-a"], "ニ": ["n+i", "n-i"], "ヌ": ["n+u", "n-u"], "ネ": ["n+e", "n-e"], "ノ": ["n+o", "n-o"],
				"ニャ": ["ny+a", "y-a"],  "ニュ": ["ny+u", "y-u"], "ニェ": ["ny+e", "y-e"], "ニョ": ["ny+o", "y-o"],
				"ヌァ": ["n+a", "n-a"], "ヌヮ": ["n+a", "n-a"], "ヌィ": ["n+i", "n-i"], "ヌェ": ["n+e", "n-e"], "ヌォ": ["n+o", "n-o"],
				"ハ": ["h+a", "h-a"], "ヒ": ["h+i", "h-i"], "フ": ["f+u", "f-u"], "ヘ": ["h+e", "h-e"], "ホ": ["h+o", "h-o"],
				"バ": ["b+a", "b-a"], "ビ": ["b+i", "b-i"], "ブ": ["b+u", "b-u"], "ベ": ["b+e", "b-e"], "ボ": ["b+o", "b-o"],
				"パ": ["p+a", "p-a"], "ピ": ["p+i", "p-i"], "プ": ["p+u", "p-u"], "ペ": ["p+e", "p-e"], "ポ": ["p+o", "p-o"],
				"ヒャ": ["hy+a", "y-a"], "ヒュ": ["hy+u", "y-u"], "ヒェ": ["hy+e", "y-e"], "ヒョ": ["hy+o", "y-o"],
				"ビャ": ["by+a", "y-a"], "ビュ": ["by+u", "y-u"], "ビェ": ["by+e", "y-e"], "ビョ": ["by+o", "y-o"],
				"ピャ": ["py+a", "y-a"], "ピェ": ["py+e", "y-e"], "ピュ": ["py+u", "y-u"], "ピョ": ["py+o", "y-o"],
				"ファ": ["f+a", "f-a"], "フヮ": ["f+a", "f-a"],"フィ": ["f+i", "f-i"], "フェ": ["f+e", "f-e"], "フォ": ["f+o", "f-o"],
				"ブァ": ["b+a", "b-a"],  "ブヮ": ["b+a", "b-a"],"ブィ": ["b+i", "b-i"], "ブェ": ["b+e", "b-e"], "ブォ": ["b+o", "b-o"],
				"プァ": ["p+a", "p-a"], "プヮ": ["p+a", "p-a"],"プィ": ["p+i", "p-i"], "プェ": ["p+e", "p-e"], "プォ": ["p+o", "p-o"], 
				"マ": ["m+a", "m-a"], "ミ": ["m+i", "m-i"], "ム": ["m+u", "m-u"], "メ": ["m+e", "m-e"], "モ": ["m+o", "m-o"],
				"ミャ": ["my+a", "y-a"], "ミュ": ["my+u", "y-u"], "ミェ": ["my+e", "y-e"], "ミョ": ["my+o", "y-o"],
				"ムァ": ["m+a", "m-a"], "ムヮ": ["m+a", "m-a"], "ムィ": ["m+i", "m-i"], "ムェ": ["m+e", "m-e"], "ムォ": ["m+o", "m-o"],
				"ヤ": ["y+a", "y-a"], "ユ": ["y+u", "y-u"], "ヨ": ["y+o", "y-o"],
				"ラ": ["r+a", "r-a"], "リ": ["r+i", "r-i"], "ル": ["r+u", "r-u"], "レ": ["r+e", "r-e"], "ロ": ["r+o", "r-o"],
				"リャ": ["ry+a", "y-a"], "リュ": ["ry+u", "y-u"], "リェ": ["ry+e", "y-e"], "リョ": ["ry+o", "y-o"],
				"ワ": ["w+a", "w-a"], "ヲ": ["sp", "o"],
				"ヴァ": ["b+a", "b-a"], "ヴヮ": ["b+a", "b-a"],"ヴィ": ["b+i", "b-i"], "ヴ": ["b+u", "b-u"], "ヴェ": ["b+e", "b-e"], "ヴォ": ["b+o", "b-o"]
			}
		this.VOWELS_ = ["ア","イ","ウ","エ","オ"];
		this.SMALL_VOWELS_ = "ァィゥェォャュョヮ";
		this.LARGE_VOWELS_ = "アイウエオヤユヨワ";

		this.KANA2VOWEL_ = this.getKana2Vowel(this.KANA2PHONON_);
		this.KANA2CONSONANT_ = this.getKana2Consonant(this.KANA2PHONON_);
		this.KANA_UNITS_ = this.getKanaUnits(this.KANA2PHONON_,this.KANA2VOWEL_);
		this.SMALL2LARGE_ = this.getSmall2Large(this.SMALL_VOWELS_,this.LARGE_VOWELS_);//小さい母音を大きい母音に変換するオブジェクト
		
		this.VOWEL_SIMILARTIY_FILE_PATH_ = "conf/simVowelsSimple.json";
		this.CONSONANT_SIMILARITY_FILE_PATH_ = "conf/simConsonantsSimple.json";
		this.VOWEL_SIMILARITY_ = this.constructor.loadJsonFile(this.VOWEL_SIMILARTIY_FILE_PATH_);
		this.CONSONANT_SIMILARITY_ = this.constructor.loadJsonFile(this.CONSONANT_SIMILARITY_FILE_PATH_);
		
		//this.KANA_SIMILARITY_BASE_ = this.getKanaSimilarityBase(this.CONSONANT_SIMILARITY_,this.VOWEL_SIMILARITY_,this.KANA2PHONON_); //ひらがなの置換コストのベースの値
		//this.KANA_SIMILARITY_ = this.getKanaSimilarity(this.KANA_SIMILARITY_BASE_,{}); //ひらがなの置換コストの微調整後の値
		
		this.KUROMOJI_PATH_ = "js/kuromoji/dict";
		this.TOKENIZER_ = null;
		this.buildTokenizer();//tokenizerをセットする
		
	}
	
	buildTokenizer(){
		const self = this;
		kuromoji.builder({dicPath:"js/kuromoji/dict"}).build(function(err, tokenizer){
			if(err) { console.log(err); }
			self.TOKENIZER_ = tokenizer;
			console.log("set tokenizer");
		});
	}


	
	//jsonファイルを読み込む
	static loadJsonFile(path){
		let json = "";
		$.ajaxSetup({async: false});
		$.getJSON(path)
			.done(function(data,textStatus,jqXHR) {
				console.log(jqXHR.status); //例：200
				console.log(textStatus); //例：success
				json = data;
			})
			// 5. failは、通信に失敗した時に実行される
			.fail(function(jqXHR, textStatus, errorThrown ) {
				console.log(jqXHR.status); //例：404
				console.log(textStatus); //例：error
				console.log(errorThrown); //例：NOT FOUND
			});
		$.ajaxSetup({async: true});
		return json;
	}
	static loadTextFile(path){
		let text = "";
		$.ajaxSetup({async: false});
		$.get(path)
		.done(function(data){
			text = data;
		})
		.fail(function(data){
			console.log("error",data);
		})
		$.ajaxSetup({async: true});
		return text;
	}
	loadDatabaseFile(path){
		const wordlisttext = this.constructor.loadTextFile(path);
		if(wordlisttext == ""){
			return null;
		}
		return this.loadDatabaseText(wordlisttext);
	}
	
	loadDatabaseText(text){
		let words, result;
		const words = text.split("\n").map(val=>{
			val = val.replace(/\u200B/g, "");//エスケープ処理
			val = val.split("#")[0].split(",");//各行において#以降をコメントアウトして、カンマでスプリット			
			return val;
		});
		
		return words.filter(v => v.length != 0)
			.reduce((prev,v,index)=>{ 
				if(v.length == 1)
					v.push(getYomi(val[0]));
				const title = v[0];
				for(let v2 of v.slice(1)){
					const yomi = this.getYomi(v2),
						sep = this.separateKana(yomi),
						ptn = this.getPronunciationVariation(sep)
						;
					for(let v3 of ptn){
						const v3len = v3.length;
						if(Object.keys(prev).indexOf(v3len)>=0)
							prev[v3len]=[];
						prev[v3len].push([title,v2,v3,index]);
						return prev;
					}
				}
		},{});
	}

	

	//同じ文字か判定
	isSameKana(kana1,kana2){
		return kana1 == kana2;
	}
	//同じ母音か判定
	isSameVowel(kana1,kana2){
		const k2v = this.KANA2VOWEL_;
		if(Object.keys(k2v).indexOf(kana1)>=0 && Object.keys(k2v).indexOf(kana2)>=0)
			return k2v[kana1] == k2v[kana2];
		else{
			console.log("kana is undefined");
			return false;
		}
	}
	//同じ子音か判定
	isSameConsonant(kana1,kana2){
		const k2c = this.KANA2CONSONANT_;
		if(Object.keys(k2c).indexOf(kana1)>=0 && Object.keys(k2c).indexOf(kana2)>=0)
			return k2c[kana1] == k2c[kana2];
		else{
			console.log("kana is undefined");
			return false;
		}		
	}
	//どちらも拗音かどうか
	isSameBar(kana1,kana2){
		const checkChar = "ー",
			isKana1Ok = ( kana1.slice(-1) == checkChar),
			isKana2Ok = (kana2.slice(-1) == checkChar)
			;
		return (isKana1Ok && isKana2Ok);
	}
	//どちらも促音かどうか
	isSameSokuon(kana1,kana2){
		const checkChar = "ッ",
			isKana1Ok = ( kana1.slice(-1) == checkChar),
			isKana2Ok = (kana2.slice(-1) == checkChar)
			;
		return (isKana1Ok && isKana2Ok);
	}
	//どちらも撥音かどうか
	isSameHatsuon(kana1,kana2){
		const checkChar = "ン",
			isKana1Ok = ( kana1.slice(-1) == checkChar),
			isKana2Ok = (kana2.slice(-1) == checkChar)
		;
		return (isKana1Ok && isKana2Ok);
	}
	
	//カナを分割するときの単位を定義
	getKanaUnits(kana2romaji,kana2vowel){
		const k2r = kana2romaji,
			k2v = kana2vowel;
		return Object.keys(k2r).reduce((prev,kana)=>{
			const vowelOfKana = k2v[kana];
			prev[kana] = [[kana]];
			switch(kana){
			case "ン": case "ッ":
				prev[kana].push([""]);
				break;
			}
			switch(vowelOfKana){
			case "ア": case "イ": case "ウ":	case "エ": case "オ":
				prev[kana+"ー"] = [[kana+"ー"]];//伸ばし棒のユニットを追加する
				prev[kana+"ン"] = [[kana+"ン"]];//ンのユニットを追加する
				prev[kana+"ッ"] = [[kana+"ッ"]];//ッのユニットを追加する
				prev[kana+vowelOfKana] = [[kana+"ー"],[kana,vowelOfKana]];//母音の連続を伸ばし棒化する
				if(vowelOfKana == "エ") prev[kana+"イ"] = [[kana+"ー"],[kana,"イ"]];//eiを伸ばし棒化する
				if(vowelOfKana == "オ") prev[kana+"ウ"] = [[kana+"ー"],[kana,"ウ"]];//ouを伸ばし棒化する
				break;
			}
			return prev;
		},{});
	}
	//カナを母音に変換するリストを作る
	getKana2Vowel(kana2romaji){
		const k2r = kana2romaji,
			roma2vowel = zip("アイウエオ","aiueo").reduce((prev,[v1,v2])=>{
				prev[v2] = v1;//aをアに変換する
				return prev;
			},{})
			;
		roma2vowel["p"]="sp";//無音
		roma2vowel["N"]="sp";//撥音の母音は無音とする
		roma2vowel["q"]="sp";//促音の母音は無音とする
		return Object.keys(k2r).reduce((prev,kana)=>{
			const romaVowelOfKana = k2r[kana][1].slice(-1);//kanaのローマ字表記の最後の文字(=母音)を取得 
			prev[kana] = roma2vowel[romaVowelOfKana];//kanaを母音カナに変換
			return prev;
		},{});
	}
	//カナを子音に変換するリストを作る
	getKana2Consonant(kana2romaji){
		const k2r = kana2romaji;
		
		return Object.keys(k2r).reduce( (prev,kana) => {
			const romaConsonantOfKana = (k2r[kana][0] == "sp") ? "sp" : k2r[kana][0][0];
			switch(romaConsonantOfKana){
			case "c": prev[kana]="t";//cはtと同じ子音とする
			case "f": prev[kana]="h";//fはhと同じ子音とする
			case "j": prev[kana]="z";//jはzと同じ子音とする
			case "v": prev[kana]="b";//vはbと同じ子音とする
			default: prev[kana]=romaConsonantOfKana;
			}
			return prev;
		},{} );
	}
	//small母音とlarge母音の変換オブジェクトを作る
	getSmall2Large(smallVowelList,largeVowelList){
		return zip(smallVowelList,largeVowelList).reduce((prev,[v1,v2]) => {
			prev[v1] = v2;
			return prev;
		},{});
	}

	//kanaの距離を計算の元を出力する関数
	getKanaSimilarityBase(consonantSimilarity,vowelSimilarity,kana2phonon){//kanaUnitsはカナユニットのみのリスト(this.KANA_UNITSのObject.keysを使う)
		const sims = [consonantSimilarity,vowelSimilarity],
			k2p = $.extend(true,{},kana2phonon);
		//伸ばし棒を追加
		for(let k1 of Object.keys(k2p)){
			const hasVowel = "aiueo".indexOf(k2p[k1][1].slice(-1));
			if(hasVowel){
				k2p[k1+"ー"] = [k2p[k1][0],k2p[k1][1]+":"];
				k2p[k1+"ン"] = [k2p[k1][0],k2p[k1][1]+":"];//ンはーと同じ
				k2p[k1+"ッ"] = k2p[k1];//ッは、なにもないのと同じ
			}
				
		}
		return Object.keys(k2p)
			.reduce( (prev1,k1) => {
				const p1 = k2p[k1];//k1のphonon
				prev1[k1] = Object.keys(k2p)
							.reduce( (prev2,k2) => {
								const p2 = k2p[k2];//k2のphonon
								prev2[k2] = (sims[0][p1[0]][p2[0]]+sims[1][p1[1]][p2[1]])/2;//子音同士、母音同士の類似度の平均をk1とk2の類似度のベースとして定義
								return prev2;
							},{});
				return prev1;
			},{});
		
	}
	////parametersに存在しないkeyをthis.DEFAULT_PARAMETER_VALUESを埋めて返す
	assignDefaultParameter(parameters){
		return Object.assign(this.DEFAULT_PARAMETER_VALUES_,parameters);
	}
	
	//パラメータに基づいて微調整する
	getKanaSimilarity(kanaSimilarityBase,parameters = {}){
		const param = this.assignDefaultParameter(parameters),
			//ksb = $.extend(true,{},kanaSimilarityBase)//値渡し
			ksb = kanaSimilarityBase;
			;
		
		const kanaSimilarity = Object.keys(ksb).reduce((prev1,k1)=>{
			prev1[k1] = Object.keys(ksb).reduce((prev2,k2) => {
				let s = ksb[k1][k2];//baseのsimilarityを取得
				if(this.isSameKana(k1,k2)) s *= param.SAME_KANA_REWARD;
				if(this.isSameVowel(k1,k2)) s*= param.SAME_VOWEL_REWARD;
				if(this.isSameConsonant(k1,k2)) s*= param.SAME_CONSONANT_REWARD;
				if(this.isSameHatsuon(k1,k2)) s*= param.SAME_HATSUON_REWARD;
				if(this.isSameSokuon(k1,k2)) s*= param.SAME_
				prev2[k2] = s;
				return prev2;
			},{});
			return prev1;
		},{}); 
		
		return kanaSimilarity;
	}

	//文字列sとtのkanaDist下での置換コストを求める
	ld(kanaDist,s,t){return zip(s,t).reduce((prev,[v1,v2])=> prev+=kanaDist[v1][v2],0);}
	
	//kanaListのkeysの単位で文字列を分割する
	separateKana(kana){//kanaUnitsはカナのリスト(not object)を想定
		const S2L = this.SMALL2LARGE_,
			KANA_UNITS_ = Object.keys(this.KANA_UNITS_),
			LEN_MAX_ = 3
			;
		
		//連続してても意味のない音を一音に置き換える
		for(let v of ["ー","ッ"]){
			const reg = new RegExp(v+"+","g");
			kana = kana.replace(reg,v);
		};
		return [].reduce.call(kana, (prev, v, i) =>{
			if(i<prev.join("").length){//iが現在の文字数より小さければスキップ
				
			}else{
				let isBreak = false;
				for(let j = LEN_MAX_; j>0; j--){
					if(KANA_UNITS_.indexOf(kana.slice(i,i+j))>=0){
						prev.push(kana.slice(i,i+j));
						isBreak = true;
						break;
					}
				}
				if(isBreak == false)
					console.log(kana.slice(i,i+LEN_MAX_),"does not exist in KanaUnits");
			}
			return prev;
		},[] );
		
	}
	
	getYomi(strVal){
		const tokenizer = this.TOKENIZER_;
		const yomi = tokenizer.tokenize(strVal)
					.reduce((prev,v)=>{
						let tYomi = v.pronunciation;
						if(typeof tYomi === "undefined") 
							tYomi = v.surface_form;
						//console.log(tYomi);
						return prev+tYomi;
					},"");
		return removeSign(yomi);
	}


	//母音連続時の変換パターンのリスト("アア"を[["アー"],["ア","ア"]]にするなど)
	getPronunciationVariation(kana){
		const kanaUnits = this.KANA_UNITS_;
		const variations = kana.map(v => {
			if(Object.keys(kanaUnits).indexOf(v)>=0)
				return kanaUnits[v];
			else
				return [v];
		});
		return product(...variations)
				.map(v => v.filter(v2=>v2!="").flat())
				.filter(v => v.length != 0);//長さ0の配列は要素に含めない
	}
	
	//入力にkanaDist下で距離の近い単語を求める
	getSimilarWord(kanaDist,wordlist,target,param,length=1){
		const orglen = target.length,
			//Object.keysでは文字列配列が取得できるので、v.lengthも文字列に直してからfilterする
			cand = this.getPronunciationVariation(target).filter(v=>{return Object.keys(wordlist).indexOf(String(v.length))>=0}),
			cand2 = {}
		let	sims = [],
			words = []
			;

		for(let val of cand){
			const tmplength = val.length;
			if(Object.keys(cand2).indexOf(tmplength)<0)
				cand2[tmplength] = []
			cand2[tmplength].push(val);
		};
		for(let i of Object.keys(cand2)){
			sims = sims.concat(
					wordlist[i].map(w => {
						const tmplist = cand2[i].map(tar=>ld(tar,w[2])/i);
						return orgRound(Math.min.apply(null,tmplist)*orglen,100);//最小値を見つけて丸める
					})
				);
			words = words.concat(wordlist[i]);
		}

		return argsort(sims)
				.slice(0,length) //指定された長さまでを切り取る
				.map(val => {
					const tmpW = words[val];
					return [target.join(""), tmpW[1],tmpW[0], sims[val],tmpW[3]];
				});
	}

	//デフォルトのパラメータをセット
}

const db = new Soramimic();
kana = db.separateKana("アーヴェイン");
variation = db.getPronunciationVariation(kana);
console.log(variation);
setTimeout(()=>{
	const yomi = db.getYomi("綾小路清隆");
	console.log(yomi);
},3000);
//testText = "ーー、ーーーー、ーー、ーーー";
//testStr = "ー"
//reg = new RegExp(testStr+"+","g")
//console.log(testText.replace(reg,"ー"));

