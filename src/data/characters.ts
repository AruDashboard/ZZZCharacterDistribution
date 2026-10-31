export interface RowInfo {
  key: string;
  image: string;
}

export interface ColInfo {
  key: string;
  image: string;
}

export interface CharacterInfo {
  name: string;
  rank: number;
  element: string;
  specialty: string;
  image: string;
}

export interface CharacterTableData {
  version: string;
  rows: RowInfo[];
  cols: ColInfo[];
  characters: CharacterInfo[];
}

const CHARACTERS: CharacterTableData = {
  version: '3.4',
  rows: [
    { key: '以太', image: '以太.png' },
    { key: '电', image: '电.png' },
    { key: '冰', image: '冰.png' },
    { key: '火', image: '火.png' },
    { key: '物理', image: '物理.png' },
    { key: '风', image: '风.png' },
    { key: '流明', image: '流明.png' },
  ],
  cols: [
    { key: '防护', image: '防护.png' },
    { key: '支援', image: '支援.png' },
    { key: '异常', image: '异常.png' },
    { key: '击破', image: '击破.png' },
    { key: '强攻', image: '强攻.png' },
    { key: '命破', image: '命破.png' },
    { key: '锋御', image: '锋御.png' },
  ],
  characters: [
    //  1.0 开服 
    { name: '猫又', element: '物理', specialty: '强攻', rank: 5, image: '猫又.png' },
    { name: '「11号」', element: '火', specialty: '强攻', rank: 5, image: '「11号」.png' },
    { name: '珂蕾妲', element: '火', specialty: '击破', rank: 5, image: '珂蕾妲.png' },
    { name: '格莉丝', element: '电', specialty: '异常', rank: 5, image: '格莉丝.png' },
    { name: '莱卡恩', element: '冰', specialty: '击破', rank: 5, image: '莱卡恩.png' },
    { name: '丽娜', element: '电', specialty: '支援', rank: 5, image: '丽娜.png' },
    { name: '安比', element: '电', specialty: '击破', rank: 4, image: '安比.png' },
    { name: '妮可', element: '以太', specialty: '支援', rank: 4, image: '妮可.png' },
    { name: '比利', element: '物理', specialty: '强攻', rank: 4, image: '比利.png' },
    { name: '可琳', element: '物理', specialty: '强攻', rank: 4, image: '可琳.png' },
    { name: '安东', element: '电', specialty: '强攻', rank: 4, image: '安东.png' },
    { name: '本', element: '火', specialty: '防护', rank: 4, image: '本.png' },
    { name: '苍角', element: '冰', specialty: '支援', rank: 4, image: '苍角.png' },
    { name: '派派', element: '物理', specialty: '异常', rank: 4, image: '派派.png' },
    { name: '露西', element: '火', specialty: '支援', rank: 4, image: '露西.png' },
    { name: '艾莲', element: '冰', specialty: '强攻', rank: 5, image: '艾莲.png' },
    { name: '朱鸢', element: '以太', specialty: '强攻', rank: 5, image: '朱鸢.png' },

    //  1.1 
    { name: '青衣', element: '电', specialty: '击破', rank: 5, image: '青衣.png' },
    { name: '简', element: '物理', specialty: '异常', rank: 5, image: '简.png' },
    { name: '赛斯', element: '电', specialty: '防护', rank: 4, image: '赛斯.png' },

    //  1.2 
    { name: '凯撒', element: '物理', specialty: '防护', rank: 5, image: '凯撒.png' },
    { name: '柏妮思', element: '火', specialty: '异常', rank: 5, image: '柏妮思.png' },

    //  1.3 
    { name: '柳', element: '电', specialty: '异常', rank: 5, image: '柳.png' },
    { name: '莱特', element: '火', specialty: '击破', rank: 5, image: '莱特.png' },

    //  1.4 
    { name: '雅', element: '烈霜', specialty: '异常', rank: 5, image: '雅.png' },
    { name: '悠真', element: '电', specialty: '强攻', rank: 5, image: '悠真.png' },

    //  1.5 
    { name: '耀嘉音', element: '以太', specialty: '支援', rank: 5, image: '耀嘉音.png' },
    { name: '伊芙琳', element: '火', specialty: '强攻', rank: 5, image: '伊芙琳.png' },

    //  1.6 
    { name: '零号·安比', element: '电', specialty: '强攻', rank: 5, image: '零号·安比.png' },
    { name: '「扳机」', element: '电', specialty: '击破', rank: 5, image: '「扳机」.png' },
    { name: '波可娜', element: '物理', specialty: '击破', rank: 4, image: '波可娜.png' },

    //  1.7 
    { name: '薇薇安', element: '以太', specialty: '异常', rank: 5, image: '薇薇安.png' },
    { name: '雨果', element: '冰', specialty: '强攻', rank: 5, image: '雨果.png' },

    //  2.0 
    { name: '仪玄', element: '玄墨', specialty: '命破', rank: 5, image: '仪玄.png' },
    { name: '潘引壶', element: '物理', specialty: '防护', rank: 4, image: '潘引壶.png' },
    { name: '橘福福', element: '火', specialty: '击破', rank: 5, image: '橘福福.png' },

    //  2.1 
    { name: '浮波柚叶', element: '物理', specialty: '支援', rank: 5, image: '浮波柚叶.png' },
    { name: '爱丽丝', element: '物理', specialty: '异常', rank: 5, image: '爱丽丝.png' },

    //  2.2 
    { name: '「席德」', element: '电', specialty: '强攻', rank: 5, image: '「席德」.png' },
    { name: '奥菲丝&「鬼火」', element: '火', specialty: '强攻', rank: 5, image: '奥菲丝&「鬼火」.png' },

    //  2.3 
    { name: '卢西娅', element: '以太', specialty: '支援', rank: 5, image: '卢西娅.png' },
    { name: '伊德海莉', element: '冰', specialty: '命破', rank: 5, image: '伊德海莉.png' },

    //  2.4 
    { name: '琉音', element: '物理', specialty: '击破', rank: 5, image: '琉音.png' },
    { name: '般岳', element: '火', specialty: '命破', rank: 5, image: '般岳.png' },

    //  2.5 
    { name: '叶瞬光', element: '凛刃', specialty: '强攻', rank: 5, image: '叶瞬光.png' },
    { name: '照', element: '冰', specialty: '防护', rank: 5, image: '照.png' },

    //  2.6 
    { name: '千夏', element: '物理', specialty: '击破', rank: 5, image: '千夏.png' },
    { name: '爱芮', element: '以太', specialty: '异常', rank: 5, image: '爱芮.png' },

    //  2.7 
    { name: '南宫羽', element: '以太', specialty: '击破', rank: 5, image: '南宫羽.png' },
    { name: '希希芙', element: '电', specialty: '强攻', rank: 5, image: '希希芙.png' },

    //  2.8 
    { name: '普罗米娅', element: '冰', specialty: '异常', rank: 5, image: '普罗米娅.png' },
    { name: '星徽·比利', element: '物理', specialty: '命破', rank: 5, image: '星徽·比利.png' },

    //  3.0 
    { name: '维琳娜', element: '风', specialty: '异常', rank: 5, image: '维琳娜.png' },
    { name: '诺姆', element: '火', specialty: '击破', rank: 5, image: '诺姆.png' },

    //  3.1 
    { name: '蕾米埃尔', element: '流明', specialty: '异常', rank: 5, image: '蕾米埃尔.png' },
    { name: '希格莉德', element: '冰', specialty: '强攻', rank: 5, image: '希格莉德.png' },

    //  3.2 
    { name: '克拉蕾', element: '电', specialty: '锋御', rank: 5, image: '克拉蕾.png' },
    { name: '洛克茜', element: '风', specialty: '击破', rank: 5, image: '洛克茜.png' },

    //  3.3 
    { name: '菲欧妮', element: '火', specialty: '异常', rank: 5, image: '菲欧妮.png' },
    { name: '赛维里安', element: '风', specialty: '强攻', rank: 5, image: '赛维里安.png' },

    // 3.4
    { name: '知更鸟', element: '以太', specialty: '防护', rank: 5, image: '知更鸟.png' },
    { name: '卡芙卡', element: '电', specialty: '异常', rank: 5, image: '卡芙卡.png' },
  ],
};

export default CHARACTERS;
