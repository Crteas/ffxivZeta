const localColor = {
  laNoscea: "#BE0622",
  gridania: { bgColor: "#FCB301", font: "#161616" },
  uldah: { bgColor: "#0B0304", font: "#FFCE03" },
  morDhona: "#C170BA",
  coerthas: "#5792C0",
};

interface ItotbObj {
  enemy: {
    enemyName: string;
    location: {
      region: string;
      area: string;
      direction?: string;
    };
    bgColor: string;
    fontColor?: string;
  }[];
  dungeon: string[];
  FATEs: {
    name: string;
    location: string;
  }[];
  leves: {
    type: string;
    name: string;
    location: string;
    grandCompany?: "흑와단" | "쌍사당" | "불멸대";
  }[];
}

export const skyfireObj: ItotbObj = {
  enemy: [
    {
      enemyName: "대담한 이단자",
      location: {
        region: "모르도나",
        area: "짙은안개 습원",
      },
      bgColor: localColor.morDhona,
    },
    {
      enemyName: "자이언트 벌목꾼",
      location: {
        region: "커르다스 중앙고지",
        area: "큰바위 언덕",
      },
      bgColor: localColor.coerthas,
    },
    {
      enemyName: "여울등뼈 사하긴",
      location: {
        region: "라노시아",
        direction: "서부",
        area: "사프사 산란지",
      },
      bgColor: localColor.laNoscea,
    },
    {
      enemyName: "V대대 뱅가드",
      location: {
        region: "모르도나",
        area: "짙은 안개 습원",
      },
      bgColor: localColor.morDhona,
    },
    {
      enemyName: "인조합금 도브란",
      location: {
        region: "라노시아",
        direction: "외지",
        area: "우가마로 무장광산",
      },
      bgColor: localColor.laNoscea,
    },
    {
      enemyName: "IV대대 검투사",
      location: {
        region: "다날란",
        direction: "서부",
        area: "하늬바람 곶",
      },
      bgColor: localColor.uldah.bgColor,
      fontColor: localColor.uldah.font,
    },
    {
      enemyName: "잔라크 격투사",
      location: {
        region: "다날란",
        direction: "남부",
        area: "잔라크",
      },
      bgColor: localColor.uldah.bgColor,
      fontColor: localColor.uldah.font,
    },
    {
      enemyName: "젖뿌리 꽃송이",
      location: {
        region: "검은장막 숲",
        direction: "동부삼림",
        area: "실프 영지",
      },
      bgColor: localColor.gridania.bgColor,
      fontColor: localColor.gridania.font,
    },
    {
      enemyName: "바실리스크",
      location: {
        region: "다날란",
        direction: "북부",
        area: "푸른안개 수맥",
      },
      bgColor: localColor.uldah.bgColor,
      fontColor: localColor.uldah.font,
    },
    {
      enemyName: "II대대 검투사",
      location: {
        region: "라노시아",
        direction: "동부",
        area: "아젤리스 옛 가도",
      },
      bgColor: localColor.laNoscea,
    },
  ],
  dungeon: ["탐타라 묘소", "돌방패 경계초소", "옛 암다포르 시가지"],
  FATEs: [
    { name: "기병의 천적", location: "커르다스 중앙고지" },
    { name: "뇌우를 부르는자", location: "외지 라노시아" },
    {
      name: "계속되는 종달새의 지저귐 조우전",
      location: "검은장막 숲 동부삼림",
    },
  ],
  leves: [
    {
      type: "guildleve",
      name: "파기: 금서'이계의 불꽃을 품은 자' 회수",
      location: "북부 다날란 푸른안개 야영지",
    },
    {
      type: "GCLeve",
      name: "처치: 커르다스에 숨어있는 수배범",
      location: "커르다스 중앙고지 하얀테 전초지",
      grandCompany: "흑와단",
    },
    {
      type: "guildleve",
      name: "방어: 아그리우스 연구 임무",
      location: "모르도나 성 코이나크 재단 조사지",
      grandCompany: "쌍사당",
    },
  ],
};
