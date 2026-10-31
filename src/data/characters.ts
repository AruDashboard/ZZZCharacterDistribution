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
  rows: RowInfo[][];
  cols: ColInfo[];
  characters: CharacterInfo[];
}

const CHARACTERS: CharacterTableData = {
  version: '3.4',
  rows: [
    [
      { key: '以太', image: '以太.png' },
      { key: '玄墨', image: '玄墨.png' },
    ],
    [{ key: '电', image: '电.png' }],
    [
      { key: '冰', image: '冰.png' },
      { key: '烈霜', image: '烈霜.png' },
    ],
    [{ key: '火', image: '火.png' }],
    [
      { key: '物理', image: '物理.png' },
      { key: '凛刃', image: '凛刃.png' },
    ],
    [{ key: '风', image: '风.png' }],
    [{ key: '流明', image: '流明.png' }],
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
    { name: '猫又', element: '物理', specialty: '强攻', rank: 5, image: '猫又.avif' },
    { name: '11号', element: '火', specialty: '强攻', rank: 5, image: '11号.avif' },
    { name: '珂蕾妲', element: '火', specialty: '击破', rank: 5, image: '珂蕾妲.avif' },
    { name: '格莉丝', element: '电', specialty: '异常', rank: 5, image: '格莉丝.avif' },
    { name: '莱卡恩', element: '冰', specialty: '击破', rank: 5, image: '莱卡恩.avif' },
    { name: '丽娜', element: '电', specialty: '支援', rank: 5, image: '丽娜.avif' },
    { name: '安比', element: '电', specialty: '击破', rank: 4, image: '安比.avif' },
    { name: '妮可', element: '以太', specialty: '支援', rank: 4, image: '妮可.avif' },
    { name: '比利', element: '物理', specialty: '强攻', rank: 4, image: '比利.avif' },
    { name: '可琳', element: '物理', specialty: '强攻', rank: 4, image: '可琳.avif' },
    { name: '安东', element: '电', specialty: '强攻', rank: 4, image: '安东.avif' },
    { name: '本', element: '火', specialty: '防护', rank: 4, image: '本.avif' },
    { name: '苍角', element: '冰', specialty: '支援', rank: 4, image: '苍角.avif' },
    { name: '派派', element: '物理', specialty: '异常', rank: 4, image: '派派.avif' },
    { name: '露西', element: '火', specialty: '支援', rank: 4, image: '露西.avif' },
    { name: '艾莲', element: '冰', specialty: '强攻', rank: 5, image: '艾莲.avif' },
    { name: '朱鸢', element: '以太', specialty: '强攻', rank: 5, image: '朱鸢.avif' },

    //  1.1
    { name: '青衣', element: '电', specialty: '击破', rank: 5, image: '青衣.avif' },
    { name: '简', element: '物理', specialty: '异常', rank: 5, image: '简.avif' },
    { name: '赛斯', element: '电', specialty: '防护', rank: 4, image: '赛斯.avif' },

    //  1.2
    { name: '凯撒', element: '物理', specialty: '防护', rank: 5, image: '凯撒.avif' },
    { name: '柏妮思', element: '火', specialty: '异常', rank: 5, image: '柏妮思.avif' },

    //  1.3
    { name: '柳', element: '电', specialty: '异常', rank: 5, image: '柳.avif' },
    { name: '莱特', element: '火', specialty: '击破', rank: 5, image: '莱特.avif' },

    //  1.4
    { name: '雅', element: '烈霜', specialty: '异常', rank: 5, image: '雅.avif' },
    { name: '悠真', element: '电', specialty: '强攻', rank: 5, image: '悠真.avif' },

    //  1.5
    { name: '耀嘉音', element: '以太', specialty: '支援', rank: 5, image: '耀嘉音.avif' },
    { name: '伊芙琳', element: '火', specialty: '强攻', rank: 5, image: '伊芙琳.avif' },

    //  1.6
    { name: '零号·安比', element: '电', specialty: '强攻', rank: 5, image: '零号·安比.avif' },
    { name: '扳机', element: '电', specialty: '击破', rank: 5, image: '扳机.avif' },
    { name: '波可娜', element: '物理', specialty: '击破', rank: 4, image: '波可娜.avif' },

    //  1.7
    { name: '薇薇安', element: '以太', specialty: '异常', rank: 5, image: '薇薇安.avif' },
    { name: '雨果', element: '冰', specialty: '强攻', rank: 5, image: '雨果.avif' },

    //  2.0
    { name: '仪玄', element: '玄墨', specialty: '命破', rank: 5, image: '仪玄.avif' },
    { name: '潘引壶', element: '物理', specialty: '防护', rank: 4, image: '潘引壶.avif' },
    { name: '橘福福', element: '火', specialty: '击破', rank: 5, image: '橘福福.avif' },

    //  2.1
    { name: '浮波柚叶', element: '物理', specialty: '支援', rank: 5, image: '浮波柚叶.avif' },
    { name: '爱丽丝', element: '物理', specialty: '异常', rank: 5, image: '爱丽丝.avif' },

    //  2.2
    { name: '席德', element: '电', specialty: '强攻', rank: 5, image: '席德.avif' },
    {
      name: '奥菲丝&「鬼火」',
      element: '火',
      specialty: '强攻',
      rank: 5,
      image: '奥菲丝&「鬼火」.avif',
    },

    //  2.3
    { name: '卢西娅', element: '以太', specialty: '支援', rank: 5, image: '卢西娅.avif' },
    { name: '伊德海莉', element: '冰', specialty: '命破', rank: 5, image: '伊德海莉.avif' },

    //  2.4
    { name: '琉音', element: '物理', specialty: '击破', rank: 5, image: '琉音.avif' },
    { name: '般岳', element: '火', specialty: '命破', rank: 5, image: '般岳.avif' },

    //  2.5
    { name: '叶瞬光', element: '凛刃', specialty: '强攻', rank: 5, image: '叶瞬光.avif' },
    { name: '照', element: '冰', specialty: '防护', rank: 5, image: '照.avif' },

    //  2.6
    { name: '千夏', element: '物理', specialty: '击破', rank: 5, image: '千夏.avif' },
    { name: '爱芮', element: '以太', specialty: '异常', rank: 5, image: '爱芮.avif' },

    //  2.7
    { name: '南宫羽', element: '以太', specialty: '击破', rank: 5, image: '南宫羽.avif' },
    { name: '希希芙', element: '电', specialty: '强攻', rank: 5, image: '希希芙.avif' },

    //  2.8
    { name: '普罗米娅', element: '冰', specialty: '异常', rank: 5, image: '普罗米娅.avif' },
    { name: '星徽·比利', element: '物理', specialty: '命破', rank: 5, image: '星徽·比利.avif' },

    //  3.0
    { name: '佩洛伊斯', element: '以太', specialty: '强攻', rank: 5, image: '佩洛伊斯.avif' },
    { name: '维琳娜', element: '风', specialty: '异常', rank: 5, image: '维琳娜.avif' },
    { name: '诺姆', element: '火', specialty: '击破', rank: 5, image: '诺姆.avif' },

    //  3.1
    { name: '蕾米埃尔', element: '流明', specialty: '异常', rank: 5, image: '蕾米埃尔.avif' },
    { name: '希格莉德', element: '冰', specialty: '强攻', rank: 5, image: '希格莉德.avif' },

    //  3.2
    { name: '克拉蕾', element: '电', specialty: '锋御', rank: 5, image: '克拉蕾.avif' },
    { name: '洛克茜', element: '风', specialty: '击破', rank: 5, image: '洛克茜.avif' },

    //  3.3
    { name: '菲欧妮', element: '火', specialty: '异常', rank: 5, image: '菲欧妮.avif' },
    { name: '赛维里安', element: '风', specialty: '强攻', rank: 5, image: '赛维里安.avif' },

    // 3.4
    { name: '知更鸟', element: '以太', specialty: '防护', rank: 5, image: '知更鸟.avif' },
    { name: '卡芙卡', element: '电', specialty: '异常', rank: 5, image: '卡芙卡.avif' },
  ],
};

export default CHARACTERS;
