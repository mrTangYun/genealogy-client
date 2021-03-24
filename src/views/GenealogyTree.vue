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
      name: "延高",
      gender: 1,
      children: [
        {
          name: "祚春",
          gender: 1,
          children: [
            {
              name: "芳懿",
              gender: 1,
              addr: "张家界市慈利县熊家庄灰塘坪",
              children: [
                {
                  name: "承洪",
                  isDead: true,
                  addr: "张家界市慈利县熊家庄灰塘坪",
                  gender: 1,
                  children: [
                    {
                      name: "仁兰",
                      gender: 2,
                      addr: "张家界市慈利县熊家庄折岩",
                      mate: {
                        name: "杜修海"
                      }
                    }
                  ]
                },
                {
                  name: "承贵",
                  gender: 1,
                  addr: "张家界市慈利县熊家庄灰塘坪",
                  children: [
                    {
                      name: "先云",
                      gender: 1,
                      addr: "张家界市慈利县熊家庄灰塘坪",
                      bday: "1962-12",
                      mate: {
                        name: "黄冬娥"
                      },
                      children: [
                        {
                          name: "斌",
                          gender: 1
                        },
                        {
                          name: "琳",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "先春",
                      gender: 2,
                      addr: "甘堰川石",
                      mate: {
                        name: "严均初"
                      }
                    },
                    {
                      name: "先浓",
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
          name: "祚贵",
          gender: 1,
          children: [
            {
              name: "芳培",
              gender: 1,
              addr: "枣树坡",
              bday: "1892",
              children: [
                {
                  name: "承发",
                  gender: 1,
                  addr: "灰塘坪唐家溶学堂湾",
                  isDead: true,
                  bday: "1917",
                  children: [
                    {
                      name: "先宝",
                      gender: 1,
                      addr: "关塌",
                      bday: "1940-12",
                      mate: {
                        name: "徐艮香"
                      },
                      children: [
                        {
                          name: "汇勇",
                          gender: 1,
                          addr: "关塌",
                          bday: "1971-10",
                          mate: {
                            name: "张秋仙"
                          }
                        },
                        {
                          name: "汇云",
                          gender: 2,
                          mate: {
                            name: "李双生"
                          }
                        },
                        {
                          name: "汇霞",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "先池",
                      gender: 1,
                      isDead: true,
                      mate: {
                        name: "黄冬梅"
                      },
                      children: [
                        {
                          name: "汇祥",
                          gender: 1,
                          bday: "1973-09",
                          addr: "熊家庄灰塘坪"
                        },
                        {
                          name: "汇军",
                          gender: 1,
                          bday: "1975-08",
                          addr: "熊家庄灰塘坪",
                          mate: {
                            name: "杨春翠"
                          }
                        },
                        {
                          name: "汇浓",
                          gender: 2,
                          bday: "1970-08-25",
                          addr: "常德汉寿县西巷"
                        }
                      ]
                    },
                    {
                      name: "金妹",
                      gender: 2,
                      mate: {
                        name: "杜芳聪"
                      }
                    },
                    {
                      name: "菊妹",
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
          name: "祚奎",
          gender: 1,
          children: [
            {
              name: "芳新",
              gender: 1,
              bday: "1930-10",
              dday: "1980-06",
              isDead: true
            }
          ]
        },
        {
          name: "祚炳",
          gender: 1,
          children: [
            {
              name: "芳为",
              gender: 1,
              addr: "张家界市慈利县官塌",
              bday: "1942-01",
              children: [
                {
                  name: "林",
                  gender: 1,
                  children: [
                    {
                      name: "楚娟",
                      gender: 2,
                      addr: "张家界市",
                      bday: "1996-01-04"
                    },
                    {
                      name: "睿龙",
                      gender: 1,
                      addr: "张家界市",
                      bday: "2002-08-15"
                    }
                  ]
                },
                {
                  name: "刚",
                  gender: 1,
                  children: [
                    {
                      name: "定",
                      gender: 1,
                      addr: "株洲市",
                      bday: "1995-01-11"
                    }
                  ]
                },
                {
                  name: "梓",
                  gender: 1,
                  children: [
                    {
                      name: "忠",
                      gender: 1,
                      addr: "大庆市"
                    }
                  ]
                },
                {
                  name: "森",
                  gender: 1,
                  children: [
                    {
                      name: "源",
                      gender: 1,
                      addr: "张家界市",
                      bday: "2002-06-28"
                    }
                  ]
                },
                {
                  name: "金",
                  gender: 2
                }
              ]
            }
          ]
        },
        {
          name: "祚湘",
          gender: 1,
          children: [
            {
              name: "芳钦",
              gender: 1,
              children: [
                {
                  name: "承银",
                  gender: 1
                },
                {
                  name: "承红",
                  gender: 1,

                  children: [
                    {
                      name: "先益",
                      gender: 1,
                      mate: {
                        name: "庹春梅"
                      },
                      children: [
                        {
                          name: "汇忠",
                          gender: 1,
                          addr: "张家界市慈利县零阳镇",
                          bday: "1973-09-10"
                        },
                        {
                          name: "汇国",
                          gender: 1,
                          addr: "张家界市慈利县零阳镇",
                          bday: "1975-08-24"
                        }
                      ]
                    },
                    {
                      name: "先军",
                      gender: 1
                    },
                    {
                      name: "先高",
                      gender: 1
                    },
                    {
                      name: "先云",
                      gender: 1,
                      children: [
                        {
                          name: "汇斌",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇灰塘坪",
                          bday: "1985-04"
                        },
                        {
                          name: "汇琳",
                          gender: 2,
                          addr: "张家界市慈利县江垭镇灰塘坪",
                          bday: "1987-03"
                        }
                      ]
                    },
                    {
                      name: "先枚",
                      gender: 2
                    },
                    {
                      name: "先菊",
                      gender: 2
                    }
                  ]
                },
                {
                  name: "承岩",
                  gender: 1,
                  isDead: true,
                  children: [
                    {
                      name: "先如",
                      gender: 1,
                      mate: {
                        name: "徐八妹"
                      },
                      addr: "江垭镇九里垭",
                      children: [
                        {
                          name: "银银",
                          gender: 2,
                          bday: "1989-12",
                          addr: "江垭镇九里垭"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "承培",
                  gender: 1
                },
                {
                  name: "承吉",
                  gender: 1
                }
              ]
            },
            {
              name: "芳钲",
              gender: 1,
              children: [
                {
                  name: "承全",
                  gender: 1
                }
              ]
            },
            {
              name: "芳锯",
              gender: 1,
              children: [
                {
                  name: "承章",
                  gender: 1
                }
              ]
            },
            {
              name: "芳𨥭",
              gender: 1,
              isDead: true,
              children: [
                {
                  name: "承山",
                  gender: 1,
                  isDead: true,
                  children: [
                    {
                      name: "先政",
                      gender: 1,
                      bday: "1951-09",
                      mate: {
                        name: "赵中福"
                      },
                      addr: "赵家岗",
                      children: [
                        {
                          name: "彩云",
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
                          name: "繁云",
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
                      name: "先友",
                      gender: 1,
                      bday: "1962-08",
                      mate: {
                        name: "罗春菊"
                      },
                      children: [
                        {
                          name: "汇武",
                          gender: 1,
                          addr: "赵家岗双河村"
                        },
                        {
                          name: "汇媛",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "先爱",
                      gender: 1,
                      bday: "1968-08",
                      mate: {
                        name: "赵爱民"
                      },
                      children: [
                        {
                          name: "汇盛",
                          gender: 1,
                          bday: "1995-08",
                          addr: "赵家岗双河村"
                        },
                        {
                          name: "琴",
                          gender: 2,
                          bday: "2003-11-01",
                          addr: "赵家岗双河村"
                        }
                      ]
                    },
                    {
                      name: "先泽",
                      gender: 2,
                      mate: {
                        name: "赵新建"
                      },
                      addr: "赵家岗"
                    }
                  ]
                },
                {
                  name: "金霞",
                  gender: 2,
                  addr: "赵家岗金坪村"
                }
              ]
            },
            {
              name: "芳铬",
              gender: 1,
              isDead: true,
              addr: "江垭大湾",
              children: [
                {
                  name: "承礼",
                  gender: 1,
                  isDead: true,

                  children: [
                    {
                      name: "先明",
                      gender: 1,
                      mate: {
                        name: "杨春浓"
                      },
                      isDead: true,
                      addr: "江垭五里堆二湾",
                      children: [
                        {
                          name: "伟",
                          gender: 1,
                          addr: "江垭五里堆三湾"
                        },
                        {
                          name: "俊",
                          gender: 2
                        },
                        {
                          name: "英",
                          gender: 2
                        }
                      ]
                    },
                    {
                      name: "先政",
                      gender: 1,
                      mate: {
                        name: "杜佳浓"
                      },
                      addr: "江垭五里堆",
                      bday: "1964-11",
                      children: [
                        {
                          name: "汇志",
                          gender: 1,
                          addr: "江垭五里堆三湾",
                          bday: "1993-09"
                        }
                      ]
                    },
                    {
                      name: "先银",
                      gender: 1,
                      addr: "江垭五里堆三湾",
                      bday: "1969-11",
                      children: [
                        {
                          name: "帅",
                          gender: 1,
                          addr: "江垭五里堆三湾",
                          bday: "1993-09"
                        }
                      ]
                    },
                    {
                      name: "秀年",
                      gender: 2,
                      mate: {
                        name: "许昌和"
                      },
                      addr: "慈利县江垭镇东河街"
                    },
                    {
                      name: "先浓",
                      gender: 2,
                      bday: "1962-05-15",
                      addr: "慈利县",
                      children: [
                        {
                          name: "楠清",
                          bday: "1986-01-05",
                          gender: 1,
                          addr: "慈利县"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "冬翠",
                  gender: 2,
                  addr: "官塌"
                }
              ]
            },
            {
              name: "芳森",
              gender: 1,
              isDead: true,
              children: [
                {
                  name: "承均",
                  gender: 1,
                  isDead: true,
                  bday: "1929",
                  addr: "张家界市慈利县江垭林场",
                  children: [
                    {
                      name: "楚昌",
                      gender: 1,
                      bday: "1952-11",
                      addr: "张家界市慈利县零阳镇文化路御景中央",
                      mate: {
                        name: "毛善玉"
                      },
                      children: [
                        {
                          name: "慧耀",
                          bday: "1980-10",
                          gender: 2,
                          addr: "张家界市慈利县江垭镇王家坪村",
                          children: [
                            {
                              name: "稳",
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
                          name: "美玲",
                          bday: "1982-09",
                          gender: 2,
                          addr: "张家界市慈利县岩泊渡",
                          children: [
                            {
                              name: "景怡",
                              gender: 2
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "楚兵",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      bday: "1956-12",
                      mate: {
                        name: "柴满玉"
                      },
                      children: [
                        {
                          name: "云",
                          bday: "1984-03",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          children: [
                            {
                              name: "雨轩",
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
                  name: "承满",
                  gender: 1,
                  bday: "1943-08",
                  isDead: true,
                  addr: "张家界市慈利县江垭林场",

                  children: [
                    {
                      name: "先辉",
                      gender: 1,
                      bday: "1963-09",
                      addr: "张家界市慈利县铁路段",
                      mate: {
                        name: "刘金华"
                      },
                      children: [
                        {
                          name: "明浩",
                          bday: "1989-12",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先忠",
                      gender: 1,
                      bday: "1968-04",
                      addr: "张家界市慈利县江垭林场",
                      children: [
                        {
                          name: "经天",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1996-03"
                        }
                      ]
                    },
                    {
                      name: "先进",
                      gender: 1,
                      bday: "1970-04",
                      addr: "张家界市慈利县",
                      mate: {
                        name: "吕华英"
                      },
                      children: [
                        {
                          name: "有庐",
                          gender: 1,
                          bday: "2001-10",
                          addr: "张家界市慈利县"
                        }
                      ]
                    },
                    {
                      name: "先平",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      bday: "1972-07",
                      children: [
                        {
                          name: "明远",
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
              name: "芳钟",
              gender: 1,
              isDead: true,
              addr: "江垭大湾",
              children: [
                {
                  name: "承初",
                  gender: 1,
                  addr: "江垭五里堆",
                  bday: "1939-10",
                  children: [
                    {
                      name: "先会",
                      gender: 1,
                      bday: "1962",
                      mate: {
                        name: "于晓峰"
                      },
                      children: [
                        {
                          name: "远",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇五里堆三湾",
                          bday: "1988-08"
                        },
                        {
                          name: "斌",
                          gender: 1,
                          addr: "张家界市慈利县江垭镇五里堆三湾",
                          bday: "1990-05-26"
                        }
                      ]
                    },
                    {
                      name: "先桂",
                      gender: 1,
                      addr: "张家界市慈利县江垭镇九溪村",
                      bday: "1967-10",
                      mate: {
                        name: "赵书玲"
                      },
                      children: [
                        {
                          name: "世",
                          gender: 2,
                          bday: "1993-08",
                          addr: "张家界市慈利县江垭镇九溪村"
                        }
                      ]
                    },
                    {
                      name: "先聪",
                      gender: 1,
                      addr: "江苏淮阴市工学院",
                      mate: {
                        name: "庄晓峰"
                      },
                      children: [
                        {
                          name: "楚",
                          gender: 2,
                          bday: "1999-07-11",
                          addr: "江苏"
                        }
                      ]
                    },
                    {
                      name: "先香",
                      gender: 2,
                      addr: "常德市汉寿",
                      mate: {
                        name: "严若善"
                      }
                    },
                    {
                      name: "美林",
                      gender: 2,
                      mate: {
                        name: "金求成"
                      },
                      addr: "张家界市象市白羊村"
                    }
                  ]
                },
                {
                  name: "承楚",
                  gender: 1,
                  addr: "张家界市慈利县江垭林场",
                  bday: "1942-07",
                  children: [
                    {
                      name: "先峰",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      mate: {
                        name: "李桃英"
                      },
                      bday: "1966-06",
                      children: [
                        {
                          name: "思",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1992-10"
                        }
                      ]
                    },
                    {
                      name: "先华",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
                      mate: {
                        name: "张桃英"
                      },
                      bday: "1969-10",
                      children: [
                        {
                          name: "傲",
                          gender: 1,
                          addr: "张家界市慈利县江垭林场",
                          bday: "1994-06"
                        }
                      ]
                    },
                    {
                      name: "先莉",
                      gender: 2,
                      mate: {
                        name: "杨雨铣"
                      }
                    }
                  ]
                },
                {
                  name: "承月",
                  gender: 1,
                  addr: "张家界市慈利县江垭五里堆三湾",
                  bday: "1949-08",
                  children: [
                    {
                      name: "庭",
                      gender: 1,
                      addr: "张家界市慈利县江垭五里堆三湾",
                      bday: "1990-06-05"
                    }
                  ]
                },
                {
                  name: "桃霞",
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
                  name: "银霞",
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
                  name: "秋霞",
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
              name: "芳蕃",
              gender: 1
            }
          ]
        }
      ]
    };

    const data = this.filterNode(data_origin);

    myChart.hideLoading();

    myChart.setOption(
      (option = {
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
            const { addr, bday } = params.data;
            const result = [];
            if (addr) {
              result.push(addr);
            }
            if (bday) {
              result.push("年龄: " + dayjs(new dayjs()).diff(bday, "y") + "岁");
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
