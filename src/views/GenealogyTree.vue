<template>
  <div class="genealogyNode" ref="space"></div>
</template>

<script>
const echarts = window.echarts;
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
                      children: [
                        {
                          name: "忠",
                          gender: 1
                        },
                        {
                          name: "国",
                          gender: 1
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
                    }
                  ]
                },
                {
                  name: "承岩",
                  gender: 1,
                  children: [
                    {
                      name: "先如",
                      gender: 1,
                      children: [
                        {
                          name: "银",
                          gender: 1
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
              children: [
                {
                  name: "承山",
                  gender: 1,
                  children: [
                    {
                      name: "先政",
                      gender: 1,
                      children: [
                        {
                          name: "彩",
                          gender: 1
                        },
                        {
                          name: "繁",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先友",
                      gender: 1,
                      children: [
                        {
                          name: "武",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先爱",
                      gender: 1,
                      children: [
                        {
                          name: "盛",
                          gender: 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "芳铬",
              gender: 1,
              children: [
                {
                  name: "承礼",
                  gender: 1,
                  children: [
                    {
                      name: "先明",
                      gender: 1,
                      children: [
                        {
                          name: "伟",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先政",
                      gender: 1,
                      children: [
                        {
                          name: "志",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先银",
                      gender: 1,
                      children: [
                        {
                          name: "帅",
                          gender: 1
                        }
                      ]
                    },
                    {
                      name: "先浓",
                      gender: 1,
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
                }
              ]
            },
            {
              name: "芳森",
              gender: 1,
              children: [
                {
                  name: "承均",
                  gender: 1,
                  addr: "张家界市慈利县江垭林场",
                  children: [
                    {
                      name: "楚昌",
                      gender: 1,
                      addr: "张家界市慈利县零阳镇文化路御景中央",
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
                      children: [
                        {
                          name: "云",
                          bday: "1982-03",
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
                  addr: "张家界市慈利县江垭林场",
                  children: [
                    {
                      name: "先辉",
                      gender: 1,
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
                      children: [
                        {
                          name: "有庐",
                          gender: 1,
                          bday: "2001-10"
                        }
                      ]
                    },
                    {
                      name: "先平",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
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
              children: [
                {
                  name: "承初",
                  gender: 1,
                  children: [
                    {
                      name: "先会",
                      gender: 1,
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
                      gender: 2
                    },
                    {
                      name: "美林",
                      gender: 2
                    }
                  ]
                },
                {
                  name: "承楚",
                  gender: 1,
                  children: [
                    {
                      name: "先峰",
                      gender: 1,
                      addr: "张家界市慈利县江垭林场",
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
                      gender: 2
                    }
                  ]
                },
                {
                  name: "承月",
                  gender: 1,
                  children: [
                    {
                      name: "庭"
                    }
                  ]
                },
                {
                  name: "桃霞",
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
          trigger: "item",
          triggerOn: "mousemove",
          formatter: function (params) {
            /* 这里 `params.data` 引用的是 `series[0].data[index]`，里面包含着“额外的数据” */
            console.log(params.data);
            var prevPrice = params.data;
          }
        },
        series: [
          {
            type: "tree",

            data: [data],

            left: "1%",
            right: "4%",
            top: "5%",
            bottom: "4%",

            symbol: "emptyCircle",
            symbolSize: 15,

            orient: "vertical",

            expandAndCollapse: true,

            label: {
              position: "top",
              rotate: 0,
              verticalAlign: "middle",
              align: "right",
              fontSize: 22
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
