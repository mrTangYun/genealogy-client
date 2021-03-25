<template>
  <div class="genealogyNode" ref="space"></div>
</template>

<script>
const echarts = window.echarts;
import dayjs from "dayjs";
export default {
  name: "OrganizationChart",

  data() {
    return {};
  },
  mounted: function () {
    const chartDom = this.$refs.space;
    const myChart = echarts.init(chartDom);
    let option;

    myChart.showLoading();

    const data_origin = {
      name: "唐延高",
      gender: 1,
      children: [
        {
          name: "唐祚春",
          gender: 1,
          children: [
            {
              name: "唐芳懿",
              gender: 1,
              addr: "张家界市慈利县熊家庄灰塘坪",
              children: [
                {
                  name: "唐承洪",
                  isDead: true,
                  addr: "张家界市慈利县熊家庄灰塘坪",
                  gender: 1,
                  children: [
                    {
                      name: "唐仁兰",
                      gender: 2,
                      addr: "张家界市慈利县熊家庄折岩",
                      mate: {
                        name: "杜修海"
                      }
                    }
                  ]
                },
                {
                  name: "唐承贵",
                  gender: 1,
                  addr: "张家界市慈利县熊家庄灰塘坪",
                  children: [
                    {
                      name: "唐先云",
                      gender: 1,
                      addr: "张家界市慈利县熊家庄灰塘坪",
                      bday: "1962-12",
                      mate: {
                        name: "黄冬娥"
                      },
                      children: [
                        {
                          name: "唐斌",
                          gender: 1
                        },
                        {
                          name: "唐琳",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "唐先春",
                      gender: 2,
                      addr: "甘堰川石",
                      mate: {
                        name: "严均初"
                      }
                    },
                    {
                      name: "唐先浓",
                      gender: 2,
                      mate: {
                        name: "王恩来"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "唐祚贵",
          gender: 1,
          children: [
            {
              name: "唐芳培",
              gender: 1,
              addr: "枣树坡",
              bday: "1892",
              children: [
                {
                  name: "唐承发",
                  gender: 1,
                  addr: "灰塘坪唐家溶学堂湾",
                  isDead: true,
                  bday: "1917",
                  children: [
                    {
                      name: "唐先宝",
                      gender: 1,
                      addr: "关塌",
                      bday: "1940-12",
                      mate: {
                        name: "徐艮香"
                      },
                      children: [
                        {
                          name: "唐汇勇",
                          gender: 1,
                          addr: "关塌",
                          bday: "1971-10",
                          mate: {
                            name: "张秋仙"
                          }
                        },
                        {
                          name: "唐汇云",
                          gender: 2,
                          mate: {
                            name: "李双生"
                          }
                        },
                        {
                          name: "唐汇霞",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "唐先池",
                      gender: 1,
                      isDead: true,
                      mate: {
                        name: "黄冬梅"
                      },
                      children: [
                        {
                          name: "唐汇祥",
                          gender: 1,
                          bday: "1973-09",
                          addr: "熊家庄灰塘坪"
                        },
                        {
                          name: "唐汇军",
                          gender: 1,
                          bday: "1975-08",
                          addr: "熊家庄灰塘坪",
                          mate: {
                            name: "杨春翠"
                          }
                        },
                        {
                          name: "唐汇浓",
                          gender: 2,
                          bday: "1970-08-25",
                          addr: "常德汉寿县西巷"
                        }
                      ]
                    },
                    {
                      name: "唐金妹",
                      gender: 2,
                      mate: {
                        name: "杜芳聪"
                      }
                    },
                    {
                      name: "唐菊妹",
                      gender: 2,
                      mate: {
                        name: "李先猛"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },

        {
          name: "唐祚湘",
          gender: 1,
          children: [
            {
              name: "唐芳钦",
              gender: 1,
              children: [
                {
                  name: "唐承银",
                  gender: 1
                },
                {
                  name: "唐承红",
                  gender: 1,

                  children: [
                    {
                      name: "唐先益",
                      gender: 1,
                      mate: {
                        name: "庹春梅"
                      },
                      children: [
                        {
                          name: "唐汇忠",
                          gender: 1,
                          addr: "张家界市慈利县零阳镇",
                          bday: "1973-09-10"
                        },
                        {
                          name: "唐汇国",
                          gender: 1,
                          addr: "张家界市慈利县零阳镇",
                          bday: "1975-08-24"
                        }
                      ]
                    },
                    {
                      name: "唐先军",
                      gender: 1
                    },
                    {
                      name: "唐先高",
                      gender: 1
                    },
                    {
                      name: "唐先云",
                      gender: 1,
                      children: [
                        {
                          name: "唐汇斌",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇灰塘坪",
                          bday: "1985-04"
                        },
                        {
                          name: "唐汇琳",
                          gender: 2,
                          addr: "张家界市慈利县江垭镇灰塘坪",
                          bday: "1987-03"
                        }
                      ]
                    },
                    {
                      name: "唐先枚",
                      gender: 2
                    },
                    {
                      name: "唐先菊",
                      gender: 2
                    }
                  ]
                },
                {
                  name: "唐承岩",
                  gender: 1,
                  isDead: true,
                  children: [
                    {
                      name: "唐先如",
                      gender: 1,
                      mate: {
                        name: "徐八妹"
                      },
                      addr: "江垭镇九里垭",
                      children: [
                        {
                          name: "唐银银",
                          gender: 2,
                          bday: "1989-12",
                          addr: "江垭镇九里垭"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "唐承培",
                  gender: 1
                },
                {
                  name: "唐承吉",
                  gender: 1
                }
              ]
            },
            {
              name: "唐芳钲",
              gender: 1,
              children: [
                {
                  name: "唐承全",
                  gender: 1
                }
              ]
            },
            {
              name: "唐芳锯",
              gender: 1,
              children: [
                {
                  name: "唐承章",
                  gender: 1
                }
              ]
            },
            {
              name: "唐芳𨥭",
              gender: 1,
              isDead: true,
              children: [
                {
                  name: "唐承山",
                  gender: 1,
                  isDead: true,
                  children: [
                    {
                      name: "唐先政",
                      gender: 1,
                      bday: "1951-09",
                      mate: {
                        name: "赵中福"
                      },
                      addr: "赵家岗",
                      children: [
                        {
                          name: "唐彩云",
                          gender: 2,
                          bday: "1974-11",
                          addr: "赵家岗双河村",
                          mate: {
                            name: "赵群友"
                          },
                          children: [
                            { name: "权", gender: 1 },
                            { name: "红", gender: 2 }
                          ]
                        },
                        {
                          name: "唐繁云",
                          gender: 2,
                          bday: "1976-11",
                          addr: "赵家岗双河村",
                          children: [{ name: "杰", gender: 2 }]
                        },
                        {
                          name: "锋云",
                          gender: 2,
                          bday: "1980-08-09",
                          addr: "零阳镇黑峪湾",
                          mate: {
                            name: "吕德勇"
                          }
                        }
                      ]
                    },
                    {
                      name: "唐先友",
                      gender: 1,
                      bday: "1962-08",
                      mate: {
                        name: "罗春菊"
                      },
                      children: [
                        {
                          name: "唐汇武",
                          gender: 1,
                          addr: "赵家岗双河村"
                        },
                        {
                          name: "唐汇媛",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "唐先爱",
                      gender: 1,
                      bday: "1968-08",
                      mate: {
                        name: "赵爱民"
                      },
                      children: [
                        {
                          name: "唐汇盛",
                          gender: 1,
                          bday: "1995-08",
                          addr: "赵家岗双河村"
                        },
                        {
                          name: "唐琴",
                          gender: 2,
                          bday: "2003-11-01",
                          addr: "赵家岗双河村"
                        }
                      ]
                    },
                    {
                      name: "唐先泽",
                      gender: 2,
                      mate: {
                        name: "赵新建"
                      },
                      addr: "赵家岗"
                    }
                  ]
                },
                {
                  name: "唐金霞",
                  gender: 2,
                  addr: "赵家岗金坪村"
                }
              ]
            },
            {
              name: "唐芳铬",
              gender: 1,
              isDead: true,
              addr: "江垭大湾",
              children: [
                {
                  name: "唐承礼",
                  gender: 1,
                  isDead: true,

                  children: [
                    {
                      name: "唐先明",
                      gender: 1,
                      mate: {
                        name: "杨春浓"
                      },
                      isDead: true,
                      addr: "江垭五里堆二湾",
                      children: [
                        {
                          name: "唐伟",
                          gender: 1,
                          addr: "江垭五里堆三湾"
                        },
                        {
                          name: "唐俊",
                          gender: 2
                        },
                        {
                          name: "唐英",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "唐先政",
                      gender: 1,
                      mate: {
                        name: "杜佳浓"
                      },
                      addr: "江垭五里堆",
                      bday: "1964-11",
                      children: [
                        {
                          name: "唐汇志",
                          gender: 1,
                          addr: "江垭五里堆三湾",
                          bday: "1993-09"
                        }
                      ]
                    },
                    {
                      name: "唐先银",
                      gender: 1,
                      addr: "江垭五里堆三湾",
                      bday: "1969-11",
                      children: [
                        {
                          name: "唐帅",
                          gender: 1,
                          addr: "江垭五里堆三湾",
                          bday: "1993-09"
                        }
                      ]
                    },
                    {
                      name: "唐秀年",
                      gender: 2,
                      mate: {
                        name: "许昌和"
                      },
                      addr: "慈利县江垭镇东河街"
                    },
                    {
                      name: "唐先浓",
                      gender: 2,
                      bday: "1962-05-15",
                      addr: "慈利县",
                      children: [
                        {
                          name: "唐楠清",
                          bday: "1986-01-05",
                          gender: 1,
                          addr: "慈利县"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "唐冬翠",
                  gender: 2,
                  addr: "官塌"
                }
              ]
            },
            {
              name: "唐芳森",
              gender: 1,
              isDead: true,
              mate: {
                name: "罗永霞"
              },
              children: [
                {
                  name: "唐梅香",
                  gender: 2,
                  isDead: true,
                  mate: {
                    name: "李业后"
                  },
                  children: [
                    {
                      name: "李泽忠",
                      gender: 1
                    },
                    {
                      name: "李泽兴",
                      gender: 1
                    }
                  ]
                },
                {
                  name: "唐承均",
                  gender: 1,
                  isDead: true,
                  bday: "1929",
                  addr: "张家界市慈利县江垭林场",
                  children: [
                    {
                      name: "唐楚昌",
                      gender: 1,
                      bday: "1952-11",
                      addr: "张家界市慈利县零阳镇文化路御景中央",
                      mate: {
                        name: "毛善玉"
                      },
                      children: [
                        {
                          name: "唐慧耀",
                          bday: "1980-10",
                          gender: 2,
                          addr: "张家界市慈利县江垭镇王家坪村",
                          children: [
                            {
                              name: "唐稳",
                              gender: 1,
                              addr: "张家界市慈利县江垭镇王家坪村"
                            },
                            {
                              name: "沈夏",
                              gender: 2,
                              addr: "张家界市慈利县江垭镇王家坪村"
                            }
                          ]
                        },
                        {
                          name: "唐美玲",
                          bday: "1982-09",
                          gender: 2,
                          addr: "张家界市慈利县岩泊渡",
                          children: [
                            {
                              name: "唐景怡",
                              gender: 2
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "唐楚兵",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      bday: "1956-12",
                      mate: {
                        name: "柴满玉"
                      },
                      children: [
                        {
                          name: "唐云",
                          bday: "1984-03",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          children: [
                            {
                              name: "唐雨轩",
                              bday: "2015-01",
                              gender: 1,
                              addr: "张家界市慈利县江垭林场"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "唐承满",
                  gender: 1,
                  bday: "1943-08",
                  isDead: true,
                  addr: "张家界市慈利县江垭林场",

                  children: [
                    {
                      name: "唐先辉",
                      gender: 1,
                      bday: "1963-09",
                      addr: "张家界市慈利县铁路段",
                      mate: {
                        name: "刘金华"
                      },
                      children: [
                        {
                          name: "唐明浩",
                          bday: "1989-12",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "唐先忠",
                      gender: 1,
                      bday: "1968-04",
                      addr: "张家界市慈利县江垭林场",
                      children: [
                        {
                          name: "唐经天",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1996-03"
                        }
                      ]
                    },
                    {
                      name: "唐先进",
                      gender: 1,
                      bday: "1970-04",
                      addr: "张家界市慈利县",
                      mate: {
                        name: "吕华英"
                      },
                      children: [
                        {
                          name: "唐有庐",
                          gender: 1,
                          bday: "2001-10",
                          addr: "张家界市慈利县"
                        }
                      ]
                    },
                    {
                      name: "唐先平",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      bday: "1972-07",
                      children: [
                        {
                          name: "唐明远",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1998-08"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "唐芳钟",
              gender: 1,
              isDead: true,
              addr: "江垭大湾",
              children: [
                {
                  name: "唐承初",
                  gender: 1,
                  addr: "江垭五里堆",
                  bday: "1939-10",
                  children: [
                    {
                      name: "唐先会",
                      gender: 1,
                      bday: "1962",
                      mate: {
                        name: "于晓峰"
                      },
                      children: [
                        {
                          name: "唐远",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇五里堆三湾",
                          bday: "1988-08"
                        },
                        {
                          name: "唐斌",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇五里堆三湾",
                          bday: "1990-05-26"
                        }
                      ]
                    },
                    {
                      name: "唐先桂",
                      gender: 1,
                      addr: "张家界市慈利县江垭镇九溪村",
                      bday: "1967-10",
                      mate: {
                        name: "赵书玲"
                      },
                      children: [
                        {
                          name: "唐世",
                          gender: 2,
                          bday: "1993-08",
                          addr: "张家界市慈利县江垭镇九溪村"
                        }
                      ]
                    },
                    {
                      name: "唐先聪",
                      gender: 1,
                      addr: "江苏淮阴市工学院",
                      mate: {
                        name: "庄晓峰"
                      },
                      children: [
                        {
                          name: "唐楚",
                          gender: 2,
                          bday: "1999-07-11",
                          addr: "江苏"
                        }
                      ]
                    },
                    {
                      name: "唐先香",
                      gender: 2,
                      addr: "常德市汉寿",
                      mate: {
                        name: "严若善"
                      }
                    },
                    {
                      name: "唐美林",
                      gender: 2,
                      mate: {
                        name: "金求成"
                      },
                      addr: "张家界市象市白羊村"
                    }
                  ]
                },
                {
                  name: "唐承楚",
                  gender: 1,
                  addr: "张家界市慈利县江垭林场",
                  bday: "1942-07",
                  children: [
                    {
                      name: "唐先峰",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      mate: {
                        name: "李桃英"
                      },
                      bday: "1966-06",
                      children: [
                        {
                          name: "唐思",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1992-10"
                        }
                      ]
                    },
                    {
                      name: "唐先华",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      mate: {
                        name: "张秀英"
                      },
                      bday: "1969-10",
                      children: [
                        {
                          name: "唐傲",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1994-06"
                        }
                      ]
                    },
                    {
                      name: "唐先莉",
                      gender: 2,
                      mate: {
                        name: "杜吉文"
                      }
                    }
                  ]
                },
                {
                  name: "唐承月",
                  gender: 1,
                  addr: "张家界市慈利县江垭五里堆三湾",
                  bday: "1949-08",
                  children: [
                    {
                      name: "唐庭",
                      gender: 1,
                      addr: "张家界市慈利县江垭五里堆三湾",
                      bday: "1990-06-05"
                    }
                  ]
                },
                {
                  name: "唐桃霞",
                  addr: "张家界市慈利县江垭",
                  gender: 2,
                  children: [
                    {
                      name: "寇学兵",
                      gender: 1
                    },
                    {
                      name: "寇金云",
                      gender: 2
                    }
                  ]
                },
                {
                  name: "唐银霞",
                  gender: 2,
                  children: [
                    {
                      name: "杨明",
                      gender: 2
                    },
                    {
                      name: "杨妹",
                      gender: 2
                    },
                    {
                      name: "杨敏",
                      gender: 1
                    }
                  ]
                },
                {
                  name: "唐秋霞",
                  gender: 2,
                  addr: "张家界市慈利县江垭镇九溪村",
                  children: [
                    {
                      name: "张伟",
                      gender: 1,
                      addr: "张家界市慈利县江垭镇九溪村"
                    },
                    {
                      name: "张娟",
                      gender: 2,
                      addr: "张家界市慈利县江垭镇九溪村"
                    }
                  ]
                }
              ]
            },
            {
              name: "唐芳蕃",
              gender: 1
            }
          ]
        },
        {
          name: "唐祚奎",
          gender: 1,
          children: [
            {
              name: "唐芳新",
              gender: 1,
              bday: "1930-10",
              dday: "1980-06",
              isDead: true
            }
          ]
        },
        {
          name: "唐祚炳",
          gender: 1,
          children: [
            {
              name: "唐芳为",
              gender: 1,
              addr: "张家界市慈利县官塌",
              bday: "1942-01",
              children: [
                {
                  name: "唐林",
                  gender: 1,
                  children: [
                    {
                      name: "唐楚娟",
                      gender: 2,
                      addr: "张家界市",
                      bday: "1996-01-04"
                    },
                    {
                      name: "唐睿龙",
                      gender: 1,
                      addr: "张家界市",
                      bday: "2002-08-15"
                    }
                  ]
                },
                {
                  name: "唐刚",
                  gender: 1,
                  children: [
                    {
                      name: "唐定",
                      gender: 1,
                      addr: "株洲市",
                      bday: "1995-01-11"
                    }
                  ]
                },
                {
                  name: "唐梓",
                  gender: 1,
                  children: [
                    {
                      name: "唐忠",
                      gender: 1,
                      addr: "大庆市"
                    }
                  ]
                },
                {
                  name: "唐森",
                  gender: 1,
                  children: [
                    {
                      name: "唐源",
                      gender: 1,
                      addr: "张家界市",
                      bday: "2002-06-28"
                    }
                  ]
                },
                {
                  name: "唐金",
                  gender: 2
                }
              ]
            }
          ]
        }
      ]
    };

    const data = this.filterNode(data_origin);

    myChart.hideLoading();

    myChart.setOption(
      (option = {
        label: {
          formatter: function (params) {
            /* 这里 `params.data` 引用的是 `series[0].data[index]`，里面包含着“额外的数据” */
            // console.log(params.data.name);
            return params.data.name.replace("唐", "");
          }
        },
        tooltip: {
          position: [0, 0],
          padding: 2,
          trigger: "item",
          triggerOn: "mousemove",

          formatter: function (params) {
            /* 这里 `params.data` 引用的是 `series[0].data[index]`，里面包含着“额外的数据” */
            console.log(params.data);
            // addr: "张家界市慈利县江垭镇灰塘坪",
            //               bday
            const { name, mate, addr, bday } = params.data;
            const result = [];
            result.push(
              name +
                (bday ? " " + dayjs(new dayjs()).diff(bday, "y") + "岁" : "")
            );
            if (addr) {
              result.push(addr);
            }
            if (mate) {
              result.push("配偶: " + mate.name);
            }
            // var prevPrice = params.data;
            return result.join("<br />");
          }
        },
        series: [
          {
            type: "tree",

            data: [data],

            left: "2%",
            right: "2%",
            top: "8%",
            bottom: "20%",

            symbol: "emptyCircle",
            symbolSize: 15,

            orient: "vertical",

            expandAndCollapse: true,

            label: {
              position: "top",
              rotate: 0,
              verticalAlign: "middle",
              align: "right",
              fontSize: 19
            },

            leaves: {
              label: {
                position: "bottom",
                rotate: 0,
                verticalAlign: "middle",
                align: "left"
              }
            },

            animationDurationUpdate: 750
          }
        ]
      })
    );

    option && myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
  methods: {
    filterNode: function (node) {
      const result = { ...node };
      if (node.gender) {
        result.itemStyle = {
          color: ["", "blue", "red"][node.gender]
        };
        result.lineStyle = {
          color: ["", "blue", "red"][node.gender]
        };
      }
      if (node.children) {
        result.children = result.children.map((node) => this.filterNode(node));
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.genealogyNode {
  height: 100vh;
  // background: red;
}
</style>
