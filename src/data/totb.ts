type TotbDirection =
  | "북부삼림"
  | "동부삼림"
  | "남부삼림"
  | "동부"
  | "서부"
  | "남부"
  | "북부"
  | "외지";

export interface IEnemy {
  name: string;
  location: {
    region:
      | "커르다스 중앙고지"
      | "검은장막 숲"
      | "모르도나"
      | "라노시아"
      | "다날란";
    area: string;
    direction?: TotbDirection;
  };
  id: string;
}

export interface IFATEs {
  name: string;
  location: string;
  id: string;
}

export interface Ileves {
  type: "길드의뢰" | "총사령부 의뢰";
  name: string;
  location: string;
  grandCompany?: "흑와단" | "쌍사당" | "불멸대";
  id: string;
}

export interface IDungeon {
  name: string;
  id: string;
}

export interface ItotbObj {
  enemy: IEnemy[];
  dungeon: IDungeon[];
  FATEs: IFATEs[];
  leves: Ileves[];
}

//* 불의 서
export const skyfireObj: ItotbObj = {
  enemy: [
    {
      name: "대담한 이단자",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e00",
    },
    {
      name: "V대대 뱅가드",
      location: {
        region: "모르도나",
        area: "짙은 안개 습원",
      },
      id: "e01",
    },
    {
      name: "자이언트 벌목꾼",
      location: {
        region: "커르다스 중앙고지",
        area: "큰바위 언덕",
      },
      id: "e02",
    },
    {
      name: "젖뿌리 꽃송이",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      id: "e03",
    },
    {
      name: "II대대 검투사",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      id: "e04",
    },
    {
      name: "여울등뼈 사하긴",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "사프사 산란지",
      },
      id: "e05",
    },
    {
      name: "인조합금 도브란",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e06",
    },
    {
      name: "IV대대 검투사",
      location: {
        region: "다날란",
        direction: "서부",
        area: "하늬바람 곶",
      },
      id: "e07",
    },
    {
      name: "잔라크 격투사",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e08",
    },
    {
      name: "바실리스크",
      location: {
        region: "다날란",
        direction: "북부",
        area: "푸른안개 수맥",
      },
      id: "e09",
    },
  ],
  dungeon: [
    { name: "탐타라 묘소", id: "d00" },
    { name: "돌방패 경계초소", id: "d01" },
    { name: "옛 암다포르 시가지", id: "d02" },
  ],
  FATEs: [
    { name: "기병의 천적", location: "커르다스 중앙고지", id: "f00" },
    { name: "뇌우를 부르는자", location: "외지 라노시아", id: "f01" },
    {
      name: "계속되는 종달새의 지저귐 조우전",
      location: "검은장막 숲 동부삼림",
      id: "f02",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "파기 임무: 금서'이계의 불꽃을 품은 자' 회수",
      location: "북부 다날란 푸른안개 야영지",
      id: "l00",
    },
    {
      type: "총사령부 의뢰",
      name: "처치 지령: 커르다스에 숨어있는 수배범",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "흑와단",
      id: "l01",
    },
    {
      type: "총사령부 의뢰",
      name: "방어 지령: 아그리우스 연구 임무",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "쌍사당",
      id: "l02",
    },
  ],
};
export const skyfireObj2: ItotbObj = {
  enemy: [
    {
      name: "맹렬한 이단자",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e10",
    },
    {
      name: "여울이빨 사하긴",
      location: {
        region: "라노시아",
        area: "사프사 산란지",
        direction: "서부",
      },
      id: "e11",
    },
    {
      name: "나탈란 굵은날개",
      location: {
        region: "커르다스 중앙고지",
        area: "나탈란 입식지",
      },
      id: "e12",
    },
    {
      name: "번개도마뱀",
      location: {
        region: "커르다스 중앙고지",
        area: "큰바위 언덕",
      },
      id: "e13",
    },
    {
      name: "실피드 한숨쟁이",
      location: {
        region: "검은장막 숲",
        area: "실프 영지",
        direction: "동부삼림",
      },
      id: "e14",
    },
    {
      name: "둘라한",
      location: {
        region: "검은장막 숲",
        direction: "북부삼림",
        area: "영광의 개울",
      },
      id: "e15",
    },
    {
      name: "바다뱀의 붉은 비늘",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "하프스톤",
      },
      id: "e16",
    },
    {
      name: "우가미로 골렘",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e17",
    },
    {
      name: "자하라크 궁술사",
      location: {
        region: "다날란",
        direction: "남부",
        area: "자하라크",
      },
      id: "e18",
    },
    {
      name: "신도화된 검투사",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e19",
    },
  ],
  dungeon: [
    { name: "브레이플록스의 야영지", id: "d10" },
    { name: "방랑자의 궁전", id: "d11" },
    { name: "구리종 광산 H", id: "d12" },
  ],
  FATEs: [
    {
      name: "남쪽 방파벽 전투: 주력부대 습격",
      location: "서부 라노시아",
      id: "f10",
    },
    { name: "우리는 제2 전투대대", location: "남부 다날란", id: "f11" },
    {
      name: "이크살군 벌채장 강습작전",
      location: "검은장막 숲 북부삼림",
      id: "f12",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "요격 임무: 마안의 발로르 ",
      location: "북부 다날란 푸른안개 야영지",
      id: "l10",
    },
    {
      type: "총사령부 의뢰",
      name: "요격 지령: 전초지를 위협하는 마물",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "쌍사당",
      id: "l11",
    },
    {
      type: "총사령부 의뢰",
      name: "방어 지령: 고대 알라그 유물",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "불멸대",
      id: "l12",
    },
  ],
};
//검증중---
export const netherfire: ItotbObj = {
  enemy: [
    {
      name: "요술사 이단자",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e20",
    },
    {
      name: "기가스 승려",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e21",
    },
    {
      name: "자이언트 짐꾼",
      location: {
        region: "커르다스 중앙고지",
        area: "큰바위 언덕",
      },
      id: "e22",
    },
    {
      name: "야생 수퇘지",
      location: {
        region: "검은장막 숲",
        area: "우르드의 선물",
        direction: "남부삼림",
      },
      id: "e23",
    },
    {
      name: "실피드 소란쟁이",
      location: {
        region: "검은장막 숲",
        area: "실프 영지",
        direction: "동부삼림",
      },
      id: "e24",
    },
    {
      name: "우가마로 순찰관",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e25",
    },
    {
      name: "바다뱀의 붉은 발톱",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "하프스톤",
      },
      id: "e26",
    },
    {
      name: "II대대 도끼투사",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      id: "e27",
    },
    {
      name: "신도화된 연설가",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e28",
    },
    {
      name: "자하라크 점쟁이",
      location: {
        region: "다날란",
        direction: "남부",
        area: "자하라크",
      },
      id: "e29",
    },
  ],
  dungeon: [
    { name: "카른의 무너진 사원", id: "d20" },
    { name: "하우케타 별궁 H", id: "d21" },
    { name: "할라탈리 수련장 H", id: "d22" },
  ],
  FATEs: [
    { name: "잔인한 악귀", location: "모르도나", id: "f20" },
    {
      name: "무지무지 즐거운 버섯따기",
      location: "검은장막 숲 동부삼림",
      id: "f21",
    },
    {
      name: "운명의 대변인",
      location: "남부 다날란",
      id: "f22",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "순찰 임무: 보급로 안전확보",
      location: "북부 다날란 푸른안개 야영지",
      id: "l20",
    },
    {
      type: "총사령부 의뢰",
      name: "사살 지령: 서리 에이비스",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "불멸대",
      id: "l21",
    },
    {
      type: "총사령부 의뢰",
      name: "요격 지령: 조사지를 위협하는 기가스족",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "흑와단",
      id: "l22",
    },
  ],
};

//* 수천의 서

export const skyfall: ItotbObj = {
  enemy: [
    {
      name: "호수 코브라",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e30",
    },
    {
      name: "흙도룡뇽",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e31",
    },
    {
      name: "자이언트 이야기꾼",
      location: {
        region: "커르다스 중앙고지",
        area: "큰바위 언덕",
      },
      id: "e32",
    },
    {
      name: "실프 영지 파수꾼",
      location: {
        region: "검은장막 숲",
        area: "실프 영지",
        direction: "동부삼림",
      },
      id: "e33",
    },
    {
      name: "모래톱비늘 사하긴",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "해골 골짜기",
      },
      id: "e34",
    },
    {
      name: "말벌 해파리",
      location: {
        region: "라노시아",
        area: "하프스톤",
        direction: "서부",
      },
      id: "e35",
    },
    {
      name: "우가마로 채석공",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e36",
    },
    {
      name: "II대대 창투사",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      id: "e37",
    },
    {
      name: "아말쟈 창기병",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e38",
    },
    {
      name: "마도 뱅가드",
      location: {
        region: "다날란",
        direction: "북부",
        area: "라우반의 완충지",
      },
      id: "e39",
    },
  ],
  dungeon: [
    { name: "구리종 광산", id: "d30" },
    { name: "제멜 요새", id: "d31" },
    {
      name: "브레이플록스의 야영지 H",
      id: "d32",
    },
  ],
  FATEs: [
    { name: "입 큰 악귀", location: "커르다스 중앙고지", id: "f30" },
    { name: "이국에서 온 괴물곤충", location: "서부 라노시아", id: "f31" },
    {
      name: "꿈틀꿈틀 도브란",
      location: "동부 다날란",
      id: "f32",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "순찰 임무: 보급로 안전확보",
      location: "북부 다날란 푸른안개 야영지",
      id: "l30",
    },
    {
      type: "길드의뢰",
      name: "파기 임무: '어둠을 나는 자'",
      location: "커르다스 중앙고지 하얀테 전초지",
      id: "l31",
    },
    {
      type: "총사령부 의뢰",
      name: "방어 지령: 마도 기기 잔해",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "흑와단",
      id: "l32",
    },
  ],
};

export const skyfall2: ItotbObj = {
  enemy: [
    {
      name: "기가스 비구승",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e40",
    },
    {
      name: "V대대 검투사",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e41",
    },
    {
      name: "나탈란 파수늑대",
      location: {
        region: "커르다스 중앙고지",
        area: "나탈란 입식지",
      },
      id: "e42",
    },
    {
      name: "우가마로 기도사",
      location: {
        region: "라노시아",
        area: "우가마로 무장광산",
        direction: "외지",
      },
      id: "e43",
    },
    {
      name: "바다뱀의 붉은 눈",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "하프스톤",
      },
      id: "e44",
    },
    {
      name: "사프사 모래톱비늘",
      location: {
        region: "라노시아",
        area: "사프사 산란지",
        direction: "서부",
      },
      id: "e45",
    },
    {
      name: "IV대대 도끼투사",
      location: {
        region: "다날란",
        direction: "서부",
        area: "하늬바람 곶",
      },
      id: "e46",
    },
    {
      name: "강철거북",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e47",
    },
    {
      name: "실프모자버섯",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      id: "e48",
    },
    {
      name: "말파리",
      location: {
        region: "검은장막 숲",
        direction: "남부삼림",
        area: "우르드의 선물",
      },
      id: "e49",
    },
  ],
  dungeon: [
    { name: "토토라크 감옥", id: "d40" },
    { name: "옛 암다포르 성", id: "d41" },
    { name: "하우케타 별궁 H", id: "d42" },
  ],
  FATEs: [
    {
      name: "북쪽 방파벽 전투: 주력 부대 습격",
      location: "서부 라노시아",
      id: "f40",
    },
    { name: "늪지대의 원혼", location: "모르도나", id: "f41" },
    {
      name: "유곡의 약사",
      location: "검은장막 숲 동부삼림",
      id: "f42",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "유도 임무: 행방불명된 예비 경비견",
      location: "북부 다날란 푸른안개 야영지",
      id: "l40",
    },
    {
      type: "길드의뢰",
      name: "순찰 임무: 하얀테 설원 큰길 순찰",
      location: "커르다스 중앙고지 하얀테 전초지",
      id: "l41",
    },
    {
      type: "총사령부 의뢰",
      name: "요격 지령: 제V보병대대 소속 부대",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "쌍사당",
      id: "l42",
    },
  ],
};

export const netherfall: ItotbObj = {
  enemy: [
    {
      name: "V대대 도끼투사",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e50",
    },
    {
      name: "기가스 승관",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e51",
    },
    {
      name: "흰눈 늑대",
      location: {
        region: "커르다스 중앙고지",
        area: " 큰바위 언덕",
      },
      id: "e52",
    },
    {
      name: "이크살 바람발톱",
      location: {
        region: "검은장막 숲",
        area: "영광의 개울",
        direction: "북부삼림",
      },
      id: "e53",
    },
    {
      name: "보랏빛 소란쟁이",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      id: "e54",
    },
    {
      name: "여우 박쥐",
      location: {
        region: "검은장막 숲",
        area: "영광의 개울",
        direction: "북부삼림",
      },
      id: "e55",
    },
    {
      name: "우가마로 사제",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e56",
    },
    {
      name: "사프사 모래톱발톱",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "사프사 산란지",
      },
      id: "e57",
    },
    {
      name: "IV대대 격투사",
      location: {
        region: "다날란",
        direction: "서부",
        area: "하늬바람 곶",
      },
      id: "e58",
    },
    {
      name: "아말쟈 산적",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e59",
    },
  ],
  dungeon: [
    { name: "나무꾼의 비명", id: "d50" },
    { name: "시리우스 대등대", id: "d51" },
    { name: "옛 암다포르 시가지", id: "d52" },
  ],
  FATEs: [
    { name: "유적의 망령기사", location: "검은장막 숲 북부삼림", id: "f50" },
    { name: "무역로 청린수길", location: "북부 다날란", id: "f51" },
    {
      name: "후엘록 네 자매",
      location: "커르다스 중앙고지",
      id: "f52",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "토벌 임무: 범죄조직 '바에르트 상회'",
      location: "북부 다날란 푸른안개 야영지",
      id: "l50",
    },
    {
      type: "총사령부 의뢰",
      name: "요격 임무: 서성이는 스테고타우루스",
      location: "커르다스 중앙고지 하얀테 전초지",
      id: "l51",
    },
    {
      type: "총사령부 의뢰",
      name: "사살 지령: 붉은머리 오케아노스",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "불멸대",
      id: "l52",
    },
  ],
};

//* 바람의 서
export const skywind: ItotbObj = {
  enemy: [
    {
      name: "히포그리프",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e60",
    },
    {
      name: "V대대 창투사",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e61",
    },
    {
      name: "나탈란 바람발톱",
      location: {
        region: "커르다스 중앙고지",
        area: "나탈란 입식지",
      },
      id: "e62",
    },
    {
      name: "실피드 호통쟁이",
      location: {
        region: "검은장막 숲",
        area: "실프 영지",
        direction: "동부삼림",
      },
      id: "e63",
    },
    {
      name: "사프사 엘브스트",
      location: {
        region: "라노시아",
        area: "사프사 산란지",
        direction: "서부",
      },
      id: "e64",
    },
    {
      name: "굵은이빨 사하긴",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "하프스톤",
      },
      id: "e65",
    },
    {
      name: "II대대 격투사",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      id: "e66",
    },
    {
      name: "정예 순찰관",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e67",
    },
    {
      name: "아말쟈 주술사",
      location: {
        region: "다날란",
        area: "잔라크",
        direction: "남부",
      },
      id: "e68",
    },
    {
      name: "아리만",
      location: {
        region: "다날란",
        direction: "북부",
        area: "푸른안개 수맥",
      },
      id: "e69",
    },
  ],
  dungeon: [
    { name: "사스타샤 침식 동굴", id: "d60" },
    { name: "금빛 골짜기", id: "d61" },
    { name: "할라탈리 수련장 H", id: "d62" },
  ],
  FATEs: [
    { name: "수송부대 방어명령", location: "고지 라노시아", id: "f60" },
    { name: "음험한 마물", location: "검은장막 숲 중부삼림", id: "f61" },
    {
      name: "몰볼, 분노의 대증식",
      location: "모르도나",
      id: "f62",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "토벌 임무: 범죄조직 바에르트 상회",
      location: "북부 다날란 푸른안개 야영지",
      id: "l60",
    },
    {
      type: "길드의뢰",
      name: "요격 임무: 하팔릿 노예설 검증",
      location: "모르도나 성 코이나크 재단 조사지",
      id: "l61",
    },
    {
      type: "총사령부 의뢰",
      name: "사살 지령: 호통치는 미마스",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "흑와단",
      id: "l62",
    },
  ],
};

//* 여기
export const skywind2: ItotbObj = {
  enemy: [
    {
      name: "V대대 군단기수",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e70",
    },
    {
      name: "기가스 수행승",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e71",
    },
    {
      name: "나탈란 안개부름이",
      location: {
        region: "커르다스 중앙고지",
        area: "나탈란 입식지",
      },
      id: "e72",
    },
    {
      name: "IV대대 군단기수",
      location: {
        region: "다날란",
        area: "하늬바람 곶",
        direction: "서부",
      },
      id: "e73",
    },
    {
      name: "아말쟈 궁병",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      id: "e74",
    },
    {
      name: "자하라크 전투도마뱀",
      location: {
        region: "다날란",
        area: "자하라크 진영",
        direction: "남부",
      },
      id: "e75",
    },
    {
      name: "정예 사제",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e76",
    },
    {
      name: "사프사 모래톱이빨",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "사프사 산란지",
      },
      id: "e77",
    },
    {
      name: "파수늑대",
      location: {
        region: "검은장막 숲",
        direction: "북부삼림",
        area: "영광의 개울",
      },
      id: "e78",
    },
    {
      name: "꿈결두꺼비",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      id: "e79",
    },
  ],
  dungeon: [
    { name: "하우케타 별궁", id: "d70" },
    { name: "구리종 광산 H", id: "d71" },
    { name: "브레이플록스의 야영지 H", id: "d72" },
  ],
  FATEs: [
    { name: "친구와 가족", location: "남부 다날란", id: "f70" },
    { name: "최후의 멧돼지 왕", location: "검은장막 숲 남부삼림", id: "f71" },
    {
      name: "아유나르트의 의지",
      location: "커르다스 중앙고지",
      id: "f72",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "파기 임무: 금서 '이계의 불꽃을 품은 자' 회수",
      location: "북부 다날란 푸른안개 야영지",
      id: "l70",
    },
    {
      type: "총사령부 의뢰",
      name: "방어 지령: 추격자들의 유품",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "쌍사당",
      id: "l71",
    },
    {
      type: "길드의뢰",
      name: "순찰 임무: 보석 장식품을 노리는 기가스족",
      location: "모르도나 성 코이나크 재단 조사지",
      id: "l72",
    },
  ],
};

//* 땅의 서
export const skyearth: ItotbObj = {
  enemy: [
    {
      name: "하팔릿",
      location: {
        region: "모르도나",
        area: "은빛눈물 호수 북부",
      },
      id: "e80",
    },
    {
      name: "V대대 격투사",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      id: "e81",
    },
    {
      name: "이크살 굵은날개",
      location: {
        region: "검은장막 숲",
        area: "영광의 개울",
        direction: "북부삼림",
      },
      id: "e82",
    },
    {
      name: "보랏빛 한숨쟁이",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      id: "e83",
    },
    {
      name: "나탈란 칼부리",
      location: {
        region: "커르다스 중앙고지",
        area: "나탈란 입식지",
      },
      id: "e84",
    },
    {
      name: "아홀로틀",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "사프사 산란지",
      },
      id: "e85",
    },
    {
      name: "정예 채석공",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      id: "e86",
    },
    {
      name: "II대대 군단기수",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      id: "e87",
    },
    {
      name: "아말쟈 청소부",
      location: {
        region: "다날란",
        area: "잔라크",
        direction: "남부",
      },
      id: "e88",
    },
    {
      name: "자하라크 격투사",
      location: {
        region: "다날란",
        area: "자하라크 진영",
        direction: "남부",
      },
      id: "e89",
    },
  ],
  dungeon: [
    { name: "할라탈리 수련장", id: "d80" },
    { name: "옛 암다포르 성", id: "d81" },
    { name: "시리우스 대등대", id: "d82" },
  ],
  FATEs: [
    { name: "설산의 습격자", location: "커르다스 중앙고지", id: "f80" },
    { name: "시굴지 강습작전", location: "외지 라노시아", id: "f81" },
    {
      name: "추악한 합성수",
      location: "동부 다날란",
      id: "f82",
    },
  ],
  leves: [
    {
      type: "길드의뢰",
      name: "요격 임무: 마안의 발로르",
      location: "북부 다날란 푸른안개 야영지",
      id: "l80",
    },
    {
      type: "길드의뢰",
      name: "파기 임무: 금서 '깨물어 으깨는 자' 회수",
      location: "모르도나 성 코이나크 재단 조사지",
      id: "l81",
    },
    {
      type: "총사령부 의뢰",
      name: "처치 지령: 조사원을 홀리는 악령",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "불멸대",
      id: "l82",
    },
  ],
};
