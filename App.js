import React, { useState } from "react";

const premiumData = {
  宜蘭縣: {
    三星鄉: {
      水稻一般加強型: 3730,
      水稻優質加強型: 3730,
    },
    大同鄉: {
      水稻一般加強型: 3672,
      水稻優質加強型: 3672,
    },
    五結鄉: {
      水稻一般加強型: 3583,
      水稻優質加強型: 3583,
    },
    冬山鄉: {
      水稻一般加強型: 3942,
      水稻優質加強型: 3942,
    },
    壯圍鄉: {
      水稻一般加強型: 4055,
      水稻優質加強型: 4055,
    },
    宜蘭市: {
      水稻一般加強型: 4111,
      水稻優質加強型: 4111,
    },
    南澳鄉: {
      水稻一般加強型: 3727,
      水稻優質加強型: 3727,
    },
    員山鄉: {
      水稻一般加強型: 3467,
      水稻優質加強型: 3467,
    },
    頭城鎮: {
      水稻一般加強型: 3923,
      水稻優質加強型: 3923,
    },
    礁溪鄉: {
      水稻一般加強型: 4289,
      水稻優質加強型: 4289,
    },
    羅東鎮: {
      水稻一般加強型: 3905,
      水稻優質加強型: 3905,
    },
    蘇澳鎮: {
      水稻一般加強型: 4326,
      水稻優質加強型: 4326,
    },
  },
  臺北市: {
    北投區: {
      水稻一般加強型: 4112,
      水稻優質加強型: 4112,
    },
  },
  新北市: {
    八里區: {
      水稻一般加強型: 4441,
      水稻優質加強型: 4441,
    },
    三芝區: {
      水稻一般加強型: 4222,
      水稻優質加強型: 4222,
    },
    三峽區: {
      水稻一般加強型: 4201,
      水稻優質加強型: 4201,
    },
    土城區: {
      水稻一般加強型: 4184,
      水稻優質加強型: 4184,
    },
    中和區: {
      水稻一般加強型: 3971,
      水稻優質加強型: 3971,
    },
    石門區: {
      水稻一般加強型: 4153,
      水稻優質加強型: 4153,
    },
    石碇區: {
      水稻一般加強型: 4298,
      水稻優質加強型: 4298,
    },
    汐止區: {
      水稻一般加強型: 3923,
      水稻優質加強型: 3923,
    },
    板橋區: {
      水稻一般加強型: 3735,
      水稻優質加強型: 3735,
    },
    林口區: {
      水稻一般加強型: 4846,
      水稻優質加強型: 4846,
    },
    金山區: {
      水稻一般加強型: 4278,
      水稻優質加強型: 4278,
    },
    貢寮區: {
      水稻一般加強型: 4078,
      水稻優質加強型: 4078,
    },
    淡水區: {
      水稻一般加強型: 4088,
      水稻優質加強型: 4088,
    },
    深坑區: {
      水稻一般加強型: 3344,
      水稻優質加強型: 3344,
    },
    新店區: {
      水稻一般加強型: 4138,
      水稻優質加強型: 4138,
    },
    萬里區: {
      水稻一般加強型: 4235,
      水稻優質加強型: 4235,
    },
    樹林區: {
      水稻一般加強型: 4123,
      水稻優質加強型: 4123,
    },
    雙溪區: {
      水稻一般加強型: 4170,
      水稻優質加強型: 4170,
    },
    鶯歌區: {
      水稻一般加強型: 4232,
      水稻優質加強型: 4232,
    },
  },
  桃園市: {
    八德區: {
      水稻一般加強型: 4410,
      水稻優質加強型: 4410,
    },
    大園區: {
      水稻一般加強型: 4324,
      水稻優質加強型: 4324,
    },
    大溪區: {
      水稻一般加強型: 4253,
      水稻優質加強型: 4253,
    },
    中壢區: {
      水稻一般加強型: 4491,
      水稻優質加強型: 4491,
    },
    平鎮區: {
      水稻一般加強型: 4447,
      水稻優質加強型: 4447,
    },
    桃園區: {
      水稻一般加強型: 4162,
      水稻優質加強型: 4162,
    },
    新屋區: {
      水稻一般加強型: 4337,
      水稻優質加強型: 4337,
    },
    楊梅區: {
      水稻一般加強型: 4584,
      水稻優質加強型: 4584,
    },
    龍潭區: {
      水稻一般加強型: 4262,
      水稻優質加強型: 4262,
    },
    龜山區: {
      水稻一般加強型: 4324,
      水稻優質加強型: 4324,
    },
    蘆竹區: {
      水稻一般加強型: 4474,
      水稻優質加強型: 4474,
    },
    觀音區: {
      水稻一般加強型: 4181,
      水稻優質加強型: 4181,
    },
  },
  新竹市: {
    北區: {
      水稻一般加強型: 4096,
      水稻優質加強型: 4096,
    },
    東區: {
      水稻一般加強型: 4074,
      水稻優質加強型: 4074,
    },
    香山區: {
      水稻一般加強型: 4102,
      水稻優質加強型: 4102,
    },
  },
  新竹縣: {
    北埔鄉: {
      水稻一般加強型: 3571,
      水稻優質加強型: 3571,
    },
    竹北市: {
      水稻一般加強型: 3994,
      水稻優質加強型: 3994,
    },
    竹東鎮: {
      水稻一般加強型: 3824,
      水稻優質加強型: 3824,
    },
    芎林鄉: {
      水稻一般加強型: 3974,
      水稻優質加強型: 3974,
    },
    峨眉鄉: {
      水稻一般加強型: 3525,
      水稻優質加強型: 3525,
    },
    湖口鄉: {
      水稻一般加強型: 3731,
      水稻優質加強型: 3731,
    },
    新埔鎮: {
      水稻一般加強型: 4120,
      水稻優質加強型: 4120,
    },
    新豐鄉: {
      水稻一般加強型: 3591,
      水稻優質加強型: 3591,
    },
    橫山鄉: {
      水稻一般加強型: 4218,
      水稻優質加強型: 4218,
    },
    關西鎮: {
      水稻一般加強型: 3852,
      水稻優質加強型: 3852,
    },
    寶山鄉: {
      水稻一般加強型: 3782,
      水稻優質加強型: 3782,
    },
  },
  苗栗縣: {
    三義鄉: {
      水稻一般加強型: 4853,
      水稻優質加強型: 4853,
    },
    三灣鄉: {
      水稻一般加強型: 4294,
      水稻優質加強型: 4294,
    },
    公館鄉: {
      水稻一般加強型: 4694,
      水稻優質加強型: 4694,
    },
    竹南鎮: {
      水稻一般加強型: 4793,
      水稻優質加強型: 4793,
    },
    西湖鄉: {
      水稻一般加強型: 4654,
      水稻優質加強型: 4654,
    },
    卓蘭鎮: {
      水稻一般加強型: 4325,
      水稻優質加強型: 4325,
    },
    南庄鄉: {
      水稻一般加強型: 4136,
      水稻優質加強型: 4136,
    },
    後龍鎮: {
      水稻一般加強型: 4286,
      水稻優質加強型: 4286,
    },
    苑裡鎮: {
      水稻一般加強型: 5028,
      水稻優質加強型: 5028,
    },
    苗栗市: {
      水稻一般加強型: 4490,
      水稻優質加強型: 4490,
    },
    通霄鎮: {
      水稻一般加強型: 4948,
      水稻優質加強型: 4948,
    },
    造橋鄉: {
      水稻一般加強型: 4526,
      水稻優質加強型: 4526,
    },
    獅潭鄉: {
      水稻一般加強型: 4472,
      水稻優質加強型: 4472,
    },
    銅鑼鄉: {
      水稻一般加強型: 4682,
      水稻優質加強型: 4682,
    },
    頭份市: {
      水稻一般加強型: 4445,
      水稻優質加強型: 4445,
    },
    頭屋鄉: {
      水稻一般加強型: 4551,
      水稻優質加強型: 4551,
    },
  },
  臺中市: {
    大甲區: {
      水稻一般加強型: 4685,
      水稻優質加強型: 4685,
    },
    大安區: {
      水稻一般加強型: 4286,
      水稻優質加強型: 4286,
    },
    大肚區: {
      水稻一般加強型: 5745,
      水稻優質加強型: 5745,
    },
    大里區: {
      水稻一般加強型: 4730,
      水稻優質加強型: 4730,
    },
    大雅區: {
      水稻一般加強型: 4595,
      水稻優質加強型: 4595,
    },
    太平區: {
      水稻一般加強型: 4728,
      水稻優質加強型: 4728,
    },
    北屯區: {
      水稻一般加強型: 4675,
      水稻優質加強型: 4675,
    },
    外埔區: {
      水稻一般加強型: 4667,
      水稻優質加強型: 4667,
    },
    石岡區: {
      水稻一般加強型: 4882,
      水稻優質加強型: 4882,
    },
    后里區: {
      水稻一般加強型: 4753,
      水稻優質加強型: 4753,
    },
    西屯區: {
      水稻一般加強型: 4983,
      水稻優質加強型: 4983,
    },
    市西區: {
      水稻一般加強型: 3794,
      水稻優質加強型: 3794,
    },
    沙鹿區: {
      水稻一般加強型: 4813,
      水稻優質加強型: 4813,
    },
    東區: {
      水稻一般加強型: 4334,
      水稻優質加強型: 4334,
    },
    東勢區: {
      水稻一般加強型: 4671,
      水稻優質加強型: 4671,
    },
    南屯區: {
      水稻一般加強型: 4916,
      水稻優質加強型: 4916,
    },
    南區: {
      水稻一般加強型: 4809,
      水稻優質加強型: 4809,
    },
    烏日區: {
      水稻一般加強型: 5190,
      水稻優質加強型: 5190,
    },
    神岡區: {
      水稻一般加強型: 4803,
      水稻優質加強型: 4803,
    },
    梧棲區: {
      水稻一般加強型: 4363,
      水稻優質加強型: 4363,
    },
    清水區: {
      水稻一般加強型: 4931,
      水稻優質加強型: 4931,
    },
    潭子區: {
      水稻一般加強型: 4878,
      水稻優質加強型: 4878,
    },
    龍井區: {
      水稻一般加強型: 4069,
      水稻優質加強型: 4069,
    },
    豐原區: {
      水稻一般加強型: 4904,
      水稻優質加強型: 4904,
    },
    霧峰區: {
      水稻一般加強型: 4465,
      水稻優質加強型: 4465,
    },
  },
  彰化縣: {
    二水鄉: {
      水稻一般加強型: 4579,
      水稻優質加強型: 4579,
    },
    二林鎮: {
      水稻一般加強型: 4872,
      水稻優質加強型: 4872,
    },
    大村鄉: {
      水稻一般加強型: 4805,
      水稻優質加強型: 4805,
    },
    大城鄉: {
      水稻一般加強型: 5270,
      水稻優質加強型: 5270,
    },
    北斗鎮: {
      水稻一般加強型: 5507,
      水稻優質加強型: 5507,
    },
    永靖鄉: {
      水稻一般加強型: 5340,
      水稻優質加強型: 5340,
    },
    田中鎮: {
      水稻一般加強型: 5206,
      水稻優質加強型: 5206,
    },
    田尾鄉: {
      水稻一般加強型: 5410,
      水稻優質加強型: 5410,
    },
    竹塘鄉: {
      水稻一般加強型: 5403,
      水稻優質加強型: 5403,
    },
    伸港鄉: {
      水稻一般加強型: 5093,
      水稻優質加強型: 5093,
    },
    秀水鄉: {
      水稻一般加強型: 5019,
      水稻優質加強型: 5019,
    },
    和美鎮: {
      水稻一般加強型: 5036,
      水稻優質加強型: 5036,
    },
    社頭鄉: {
      水稻一般加強型: 5140,
      水稻優質加強型: 5140,
    },
    芬園鄉: {
      水稻一般加強型: 5059,
      水稻優質加強型: 5059,
    },
    花壇鄉: {
      水稻一般加強型: 4976,
      水稻優質加強型: 4976,
    },
    芳苑鄉: {
      水稻一般加強型: 5229,
      水稻優質加強型: 5229,
    },
    員林市: {
      水稻一般加強型: 5358,
      水稻優質加強型: 5358,
    },
    埔心鄉: {
      水稻一般加強型: 5246,
      水稻優質加強型: 5246,
    },
    埔鹽鄉: {
      水稻一般加強型: 5072,
      水稻優質加強型: 5072,
    },
    埤頭鄉: {
      水稻一般加強型: 5596,
      水稻優質加強型: 5596,
    },
    鹿港鎮: {
      水稻一般加強型: 5014,
      水稻優質加強型: 5014,
    },
    溪州鄉: {
      水稻一般加強型: 4938,
      水稻優質加強型: 4938,
    },
    溪湖鎮: {
      水稻一般加強型: 5241,
      水稻優質加強型: 5241,
    },
    彰化市: {
      水稻一般加強型: 5007,
      水稻優質加強型: 5007,
    },
    福興鄉: {
      水稻一般加強型: 5414,
      水稻優質加強型: 5414,
    },
    線西鄉: {
      水稻一般加強型: 4923,
      水稻優質加強型: 4923,
    },
  },
  南投縣: {
    仁愛鄉: {
      水稻一般加強型: 4662,
      水稻優質加強型: 4662,
    },
    水里鄉: {
      水稻一般加強型: 4757,
      水稻優質加強型: 4757,
    },
    名間鄉: {
      水稻一般加強型: 4642,
      水稻優質加強型: 4642,
    },
    竹山鎮: {
      水稻一般加強型: 4649,
      水稻優質加強型: 4649,
    },
    南投市: {
      水稻一般加強型: 4890,
      水稻優質加強型: 4890,
    },
    埔里鎮: {
      水稻一般加強型: 4400,
      水稻優質加強型: 4400,
    },
    草屯鎮: {
      水稻一般加強型: 4895,
      水稻優質加強型: 4895,
    },
    國姓鄉: {
      水稻一般加強型: 4843,
      水稻優質加強型: 4843,
    },
    鹿谷鄉: {
      水稻一般加強型: 4362,
      水稻優質加強型: 4362,
    },
    集集鎮: {
      水稻一般加強型: 4437,
      水稻優質加強型: 4437,
    },
  },
  雲林縣: {
    二崙鄉: {
      水稻一般加強型: 5160,
      水稻優質加強型: 5160,
    },
    口湖鄉: {
      水稻一般加強型: 4975,
      水稻優質加強型: 4975,
    },
    土庫鎮: {
      水稻一般加強型: 5172,
      水稻優質加強型: 5172,
    },
    大埤鄉: {
      水稻一般加強型: 5560,
      水稻優質加強型: 5560,
    },
    元長鄉: {
      水稻一般加強型: 5590,
      水稻優質加強型: 5590,
    },
    斗六市: {
      水稻一般加強型: 4885,
      水稻優質加強型: 4885,
    },
    斗南鎮: {
      水稻一般加強型: 5182,
      水稻優質加強型: 5182,
    },
    水林鄉: {
      水稻一般加強型: 5180,
      水稻優質加強型: 5180,
    },
    北港鎮: {
      水稻一般加強型: 5484,
      水稻優質加強型: 5484,
    },
    古坑鄉: {
      水稻一般加強型: 5016,
      水稻優質加強型: 5016,
    },
    四湖鄉: {
      水稻一般加強型: 4697,
      水稻優質加強型: 4697,
    },
    西螺鎮: {
      水稻一般加強型: 5192,
      水稻優質加強型: 5192,
    },
    東勢鄉: {
      水稻一般加強型: 5072,
      水稻優質加強型: 5072,
    },
    林內鄉: {
      水稻一般加強型: 4819,
      水稻優質加強型: 4819,
    },
    虎尾鎮: {
      水稻一般加強型: 5507,
      水稻優質加強型: 5507,
    },
    崙背鄉: {
      水稻一般加強型: 5371,
      水稻優質加強型: 5371,
    },
    麥寮鄉: {
      水稻一般加強型: 5271,
      水稻優質加強型: 5271,
    },
    莿桐鄉: {
      水稻一般加強型: 5389,
      水稻優質加強型: 5389,
    },
    臺西鄉: {
      水稻一般加強型: 4615,
      水稻優質加強型: 4615,
    },
    褒忠鄉: {
      水稻一般加強型: 5498,
      水稻優質加強型: 5498,
    },
  },
  嘉義市: {
    西區: {
      水稻一般加強型: 4653,
      水稻優質加強型: 4653,
    },
    東區: {
      水稻一般加強型: 4653,
      水稻優質加強型: 4653,
    },
  },
  嘉義縣: {
    大林鎮: {
      水稻一般加強型: 5343,
      水稻優質加強型: 5343,
    },
    中埔鄉: {
      水稻一般加強型: 5194,
      水稻優質加強型: 5194,
    },
    六腳鄉: {
      水稻一般加強型: 4479,
      水稻優質加強型: 4479,
    },
    太保市: {
      水稻一般加強型: 5346,
      水稻優質加強型: 5346,
    },
    水上鄉: {
      水稻一般加強型: 5334,
      水稻優質加強型: 5334,
    },
    布袋鎮: {
      水稻一般加強型: 4877,
      水稻優質加強型: 4877,
    },
    民雄鄉: {
      水稻一般加強型: 5096,
      水稻優質加強型: 5096,
    },
    朴子市: {
      水稻一般加強型: 4932,
      水稻優質加強型: 4932,
    },
    竹崎鄉: {
      水稻一般加強型: 2830,
      水稻優質加強型: 2830,
    },
    東石鄉: {
      水稻一般加強型: 4466,
      水稻優質加強型: 4466,
    },
    阿里山鄉: {
      水稻一般加強型: 3919,
      水稻優質加強型: 3919,
    },
    梅山鄉: {
      水稻一般加強型: 4529,
      水稻優質加強型: 4529,
    },
    鹿草鄉: {
      水稻一般加強型: 5077,
      水稻優質加強型: 5077,
    },
    番路鄉: {
      水稻一般加強型: 4589,
      水稻優質加強型: 4589,
    },
    新港鄉: {
      水稻一般加強型: 5061,
      水稻優質加強型: 5061,
    },
    溪口鄉: {
      水稻一般加強型: 5490,
      水稻優質加強型: 5490,
    },
    義竹鄉: {
      水稻一般加強型: 5461,
      水稻優質加強型: 5461,
    },
  },
  臺南市: {
    七股區: {
      水稻一般加強型: 4637,
      水稻優質加強型: 4637,
    },
    下營區: {
      水稻一般加強型: 5099,
      水稻優質加強型: 5099,
    },
    山上區: {
      水稻一般加強型: 4871,
      水稻優質加強型: 4871,
    },
    仁德區: {
      水稻一般加強型: 5133,
      水稻優質加強型: 5133,
    },
    六甲區: {
      水稻一般加強型: 5138,
      水稻優質加強型: 5138,
    },
    永康區: {
      水稻一般加強型: 4729,
      水稻優質加強型: 4729,
    },
    白河區: {
      水稻一般加強型: 4675,
      水稻優質加強型: 4675,
    },
    安定區: {
      水稻一般加強型: 4695,
      水稻優質加強型: 4695,
    },
    安南區: {
      水稻一般加強型: 4648,
      水稻優質加強型: 4648,
    },
    西港區: {
      水稻一般加強型: 5218,
      水稻優質加強型: 5218,
    },
    佳里區: {
      水稻一般加強型: 4763,
      水稻優質加強型: 4763,
    },
    官田區: {
      水稻一般加強型: 4254,
      水稻優質加強型: 4254,
    },
    東山區: {
      水稻一般加強型: 4569,
      水稻優質加強型: 4569,
    },
    東區: {
      水稻一般加強型: 4442,
      水稻優質加強型: 4442,
    },
    南化區: {
      水稻一般加強型: 4387,
      水稻優質加強型: 4387,
    },
    南區: {
      水稻一般加強型: 4905,
      水稻優質加強型: 4905,
    },
    後壁區: {
      水稻一般加強型: 4494,
      水稻優質加強型: 4494,
    },
    柳營區: {
      水稻一般加強型: 4615,
      水稻優質加強型: 4615,
    },
    將軍區: {
      水稻一般加強型: 4718,
      水稻優質加強型: 4718,
    },
    麻豆區: {
      水稻一般加強型: 5234,
      水稻優質加強型: 5234,
    },
    善化區: {
      水稻一般加強型: 4182,
      水稻優質加強型: 4182,
    },
    新化區: {
      水稻一般加強型: 4783,
      水稻優質加強型: 4783,
    },
    新市區: {
      水稻一般加強型: 4327,
      水稻優質加強型: 4327,
    },
    新營區: {
      水稻一般加強型: 4579,
      水稻優質加強型: 4579,
    },
    學甲區: {
      水稻一般加強型: 5435,
      水稻優質加強型: 5435,
    },
    龍崎區: {
      水稻一般加強型: 4434,
      水稻優質加強型: 4434,
    },
    歸仁區: {
      水稻一般加強型: 4841,
      水稻優質加強型: 4841,
    },
    關廟區: {
      水稻一般加強型: 5018,
      水稻優質加強型: 5018,
    },
    鹽水區: {
      水稻一般加強型: 4600,
      水稻優質加強型: 4600,
    },
  },
  高雄市: {
    三民區: {
      水稻一般加強型: 4078,
      水稻優質加強型: 4078,
    },
    大寮區: {
      水稻一般加強型: 4493,
      水稻優質加強型: 4493,
    },
    大樹區: {
      水稻一般加強型: 4174,
      水稻優質加強型: 4174,
    },
    小港區: {
      水稻一般加強型: 4146,
      水稻優質加強型: 4146,
    },
    仁武區: {
      水稻一般加強型: 3936,
      水稻優質加強型: 3936,
    },
    內門區: {
      水稻一般加強型: 4084,
      水稻優質加強型: 4084,
    },
    六龜區: {
      水稻一般加強型: 4005,
      水稻優質加強型: 4005,
    },
    左營區: {
      水稻一般加強型: 4019,
      水稻優質加強型: 4019,
    },
    永安區: {
      水稻一般加強型: 4373,
      水稻優質加強型: 4373,
    },
    甲仙區: {
      水稻一般加強型: 3742,
      水稻優質加強型: 3742,
    },
    杉林區: {
      水稻一般加強型: 3746,
      水稻優質加強型: 3746,
    },
    岡山區: {
      水稻一般加強型: 4810,
      水稻優質加強型: 4810,
    },
    林園區: {
      水稻一般加強型: 4063,
      水稻優質加強型: 4063,
    },
    阿蓮區: {
      水稻一般加強型: 4591,
      水稻優質加強型: 4591,
    },
    美濃區: {
      水稻一般加強型: 4071,
      水稻優質加強型: 4071,
    },
    茂林區: {
      水稻一般加強型: 3783,
      水稻優質加強型: 3783,
    },
    梓官區: {
      水稻一般加強型: 4509,
      水稻優質加強型: 4509,
    },
    鳥松區: {
      水稻一般加強型: 4212,
      水稻優質加強型: 4212,
    },
    湖內區: {
      水稻一般加強型: 4244,
      水稻優質加強型: 4244,
    },
    楠梓區: {
      水稻一般加強型: 4041,
      水稻優質加強型: 4041,
    },
    路竹區: {
      水稻一般加強型: 4342,
      水稻優質加強型: 4342,
    },
    鼓山區: {
      水稻一般加強型: 3763,
      水稻優質加強型: 3763,
    },
    旗山區: {
      水稻一般加強型: 3838,
      水稻優質加強型: 3838,
    },
    鳳山區: {
      水稻一般加強型: 4083,
      水稻優質加強型: 4083,
    },
    橋頭區: {
      水稻一般加強型: 4259,
      水稻優質加強型: 4259,
    },
    燕巢區: {
      水稻一般加強型: 3911,
      水稻優質加強型: 3911,
    },
    彌陀區: {
      水稻一般加強型: 4524,
      水稻優質加強型: 4524,
    },
  },
  屏東縣: {
    九如鄉: {
      水稻一般加強型: 4129,
      水稻優質加強型: 4129,
    },
    三地門鄉: {
      水稻一般加強型: 3522,
      水稻優質加強型: 3522,
    },
    內埔鄉: {
      水稻一般加強型: 3946,
      水稻優質加強型: 3946,
    },
    竹田鄉: {
      水稻一般加強型: 4415,
      水稻優質加強型: 4415,
    },
    牡丹鄉: {
      水稻一般加強型: 2825,
      水稻優質加強型: 2825,
    },
    車城鄉: {
      水稻一般加強型: 3744,
      水稻優質加強型: 3744,
    },
    里港鄉: {
      水稻一般加強型: 3986,
      水稻優質加強型: 3986,
    },
    佳冬鄉: {
      水稻一般加強型: 3841,
      水稻優質加強型: 3841,
    },
    東港鎮: {
      水稻一般加強型: 4256,
      水稻優質加強型: 4256,
    },
    枋山鄉: {
      水稻一般加強型: 3886,
      水稻優質加強型: 3886,
    },
    枋寮鄉: {
      水稻一般加強型: 3901,
      水稻優質加強型: 3901,
    },
    林邊鄉: {
      水稻一般加強型: 4170,
      水稻優質加強型: 4170,
    },
    長治鄉: {
      水稻一般加強型: 3974,
      水稻優質加強型: 3974,
    },
    南州鄉: {
      水稻一般加強型: 4034,
      水稻優質加強型: 4034,
    },
    屏東市: {
      水稻一般加強型: 4112,
      水稻優質加強型: 4112,
    },
    恆春鎮: {
      水稻一般加強型: 3560,
      水稻優質加強型: 3560,
    },
    春日鄉: {
      水稻一般加強型: 3151,
      水稻優質加強型: 3151,
    },
    崁頂鄉: {
      水稻一般加強型: 4084,
      水稻優質加強型: 4084,
    },
    高樹鄉: {
      水稻一般加強型: 4225,
      水稻優質加強型: 4225,
    },
    新埤鄉: {
      水稻一般加強型: 3985,
      水稻優質加強型: 3985,
    },
    新園鄉: {
      水稻一般加強型: 4282,
      水稻優質加強型: 4282,
    },
    獅子鄉: {
      水稻一般加強型: 2975,
      水稻優質加強型: 2975,
    },
    萬丹鄉: {
      水稻一般加強型: 4128,
      水稻優質加強型: 4128,
    },
    萬巒鄉: {
      水稻一般加強型: 4075,
      水稻優質加強型: 4075,
    },
    滿州鄉: {
      水稻一般加強型: 3945,
      水稻優質加強型: 3945,
    },
    潮州鎮: {
      水稻一般加強型: 3876,
      水稻優質加強型: 3876,
    },
    麟洛鄉: {
      水稻一般加強型: 3951,
      水稻優質加強型: 3951,
    },
    鹽埔鄉: {
      水稻一般加強型: 4160,
      水稻優質加強型: 4160,
    },
  },
  花蓮縣: {
    玉里鎮: {
      水稻一般加強型: 9103,
      水稻優質加強型: 9103,
    },
    光復鄉: {
      水稻一般加強型: 6457,
      水稻優質加強型: 6457,
    },
    吉安鄉: {
      水稻一般加強型: 6411,
      水稻優質加強型: 6411,
    },
    秀林鄉: {
      水稻一般加強型: 5803,
      水稻優質加強型: 5803,
    },
    卓溪鄉: {
      水稻一般加強型: 5347,
      水稻優質加強型: 5347,
    },
    花蓮市: {
      水稻一般加強型: 6380,
      水稻優質加強型: 6380,
    },
    富里鄉: {
      水稻一般加強型: 6422,
      水稻優質加強型: 6422,
    },
    新城鄉: {
      水稻一般加強型: 6058,
      水稻優質加強型: 6058,
    },
    瑞穗鄉: {
      水稻一般加強型: 6585,
      水稻優質加強型: 6585,
    },
    萬榮鄉: {
      水稻一般加強型: 5573,
      水稻優質加強型: 5573,
    },
    壽豐鄉: {
      水稻一般加強型: 6660,
      水稻優質加強型: 6660,
    },
    鳳林鎮: {
      水稻一般加強型: 5124,
      水稻優質加強型: 5124,
    },
    豐濱鄉: {
      水稻一般加強型: 6438,
      水稻優質加強型: 6438,
    },
  },
  臺東縣: {
    大武鄉: {
      水稻一般加強型: 5891,
      水稻優質加強型: 5891,
    },
    太麻里鄉: {
      水稻一般加強型: 5671,
      水稻優質加強型: 5671,
    },
    成功鎮: {
      水稻一般加強型: 5659,
      水稻優質加強型: 5659,
    },
    池上鄉: {
      水稻一般加強型: 6790,
      水稻優質加強型: 6790,
    },
    卑南鄉: {
      水稻一般加強型: 5466,
      水稻優質加強型: 5466,
    },
    延平鄉: {
      水稻一般加強型: 5820,
      水稻優質加強型: 5820,
    },
    東河鄉: {
      水稻一般加強型: 6683,
      水稻優質加強型: 6683,
    },
    長濱鄉: {
      水稻一般加強型: 6396,
      水稻優質加強型: 6396,
    },
    海端鄉: {
      水稻一般加強型: 6959,
      水稻優質加強型: 6959,
    },
    鹿野鄉: {
      水稻一般加強型: 6269,
      水稻優質加強型: 6269,
    },
    達仁鄉: {
      水稻一般加強型: 5672,
      水稻優質加強型: 5672,
    },
    臺東市: {
      水稻一般加強型: 5721,
      水稻優質加強型: 5721,
    },
    關山鎮: {
      水稻一般加強型: 7731,
      水稻優質加強型: 7731,
    },
  },
};

const InsuranceCalculator = () => {
  const [entries, setEntries] = useState([]);
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [type, setType] = useState("基本型");
  const [area, setArea] = useState("");
  const [ratio, setRatio] = useState("");

  const counties = Object.keys(premiumData);
  const towns = county ? Object.keys(premiumData[county]) : [];

  const getUnitPrice = (c = county, t = town, ty = type) => {
    if (ty === "基本型") return 1300;
    if (c && t && premiumData[c] && premiumData[c][t]) {
      return premiumData[c][t][ty] || 0;
    }
    return 0;
  };

  const handleAddEntry = () => {
    const unitPrice = getUnitPrice();
    const areaNum = parseFloat(area);
    const ratioNum = parseFloat(ratio);

    if (!isNaN(unitPrice) && !isNaN(areaNum) && !isNaN(ratioNum)) {
      const total = Math.round(unitPrice * areaNum * (ratioNum / 100));
      setEntries([
        ...entries,
        {
          county,
          town,
          type,
          unitPrice,
          area: areaNum,
          ratio: ratioNum,
          total,
        },
      ]);

      // 清空欄位
      setArea("");
      setRatio("");
    }
  };

  const handleDeleteEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const totalPremium = entries.reduce((sum, e) => sum + e.total, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto text-xl">
      <h1 className="text-3xl font-bold mb-6">114年1期水稻_農民自繳保費試算</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">投保類型</label>
          <select
            className="w-full border p-4 rounded text-xl"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="基本型">水稻基本型</option>
            <option value="水稻一般加強型">水稻一般加強型</option>
            <option value="水稻優質加強型">水稻優質加強型</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">土地所在縣市</label>
          <select
            className="w-full border p-4 rounded text-xl"
            value={county}
            onChange={(e) => {
              setCounty(e.target.value);
              setTown("");
            }}
          >
            <option value="">請選擇</option>
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">土地所在鄉鎮</label>
          <select
            className="w-full border p-4 rounded text-xl"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            disabled={!county}
          >
            <option value="">請選擇</option>
            {towns.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium  ">
            表定每公頃保費 (元)
          </label>
          <input
            type="text"
            className="w-full border p-4 rounded text-1xl bg-gray-100"
            value={getUnitPrice()}
            readOnly
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">投保面積（公頃）</label>
          <input
            type="number"
            className="w-full border p-4 rounded text-xl"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="請輸入面積"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">農民自繳比例（％）</label>
          <input
            type="number"
            className="w-full border p-4 rounded text-xl"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
            placeholder="請輸入預估比例 例如 20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <button
          onClick={handleAddEntry}
          className="bg-blue-600 text-white px-6 py-4 rounded hover:bg-blue-700 text-xl"
        >
          新增一筆預估土地保費(可累加)
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">計算紀錄</h2>
        {entries.map((entry, index) => (
          <div
            key={index}
            className="mb-6 p-6 border rounded bg-white shadow-md"
          >
            <div className="mb-2">
              第 {index + 1} 筆：{entry.county} {entry.town} - {entry.type}
            </div>
            <div className="mb-2">
              計算公式：{entry.unitPrice}(表定保費) × {entry.area}(面積) ×{" "}
              {entry.ratio} ÷ 100(農民自繳比例) = {entry.total} 元
            </div>
            <button
              onClick={() => handleDeleteEntry(index)}
              className="mt-2 text-red-600 hover:underline"
            >
              刪除此筆紀錄
            </button>
          </div>
        ))}

        {entries.length > 0 && (
          <div className="text-2xl font-semibold mt-6">
            預估總【農民自繳】保費金額：{totalPremium} 元
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceCalculator;
