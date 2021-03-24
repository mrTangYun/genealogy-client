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
  mounted: function() {
    const chartDom = this.$refs.space;
    const myChart = echarts.init(chartDom);
    let option;

    myChart.showLoading();

    var data = {
      name: "延高2",
      children: [
        {
          name: "祚湘",
          children: [
            {
              name: "芳钦",
              children: [
                {
                  name: "承银"
                },
                {
                  name: "承红",
                  children: [
                    {
                      name: "先益",
                      children: [
                        {
                          name: "忠"
                        },
                        {
                          name: "国"
                        }
                      ]
                    },
                    {
                      name: "先军"
                    },
                    {
                      name: "先高"
                    },
                    {
                      name: "先云"
                    }
                  ]
                },
                {
                  name: "承岩",
                  children: [
                    {
                      name: "先如",
                      children: [
                        {
                          name: "银"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "承培"
                },
                {
                  name: "承吉"
                }
              ]
            },
            {
              name: "芳钲",
              children: [
                {
                  name: "承全"
                }
              ]
            },
            {
              name: "芳锯",
              children: [
                {
                  name: "承章"
                }
              ]
            },
            {
              name: "芳𨥭",
              children: [
                {
                  name: "承山",
                  children: [
                    {
                      name: "先政",
                      children: [
                        {
                          name: "彩"
                        },
                        {
                          name: "繁"
                        }
                      ]
                    },
                    {
                      name: "先友",
                      children: [
                        {
                          name: "武"
                        }
                      ]
                    },
                    {
                      name: "先爱",
                      children: [
                        {
                          name: "盛"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "芳铬",
              children: [
                {
                  name: "承礼",
                  children: [
                    {
                      name: "先明",
                      children: [
                        {
                          name: "伟"
                        }
                      ]
                    },
                    {
                      name: "先政",
                      children: [
                        {
                          name: "志"
                        }
                      ]
                    },
                    {
                      name: "先银",
                      children: [
                        {
                          name: "帅"
                        }
                      ]
                    },
                    {
                      name: "先浓",
                      children: [
                        {
                          name: "清"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "芳锐",
              children: [
                {
                  name: "承军",
                  children: [
                    {
                      name: "楚昌",
                      children: [
                        {
                          name: "慧耀",
                          children: [
                            {
                              name: "稳"
                            }
                          ]
                        },
                        {
                          name: "美玲",
                          children: [
                            {
                              name: "景怡"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "楚兵",
                      children: [
                        {
                          name: "云",
                          children: [
                            {
                              name: "雨轩"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "承满",
                  children: [
                    {
                      name: "先辉",
                      children: [
                        {
                          name: "明浩"
                        }
                      ]
                    },
                    {
                      name: "先忠",
                      children: [
                        {
                          name: "经天"
                        }
                      ]
                    },
                    {
                      name: "先进",
                      children: [
                        {
                          name: "有芦"
                        }
                      ]
                    },
                    {
                      name: "先平",
                      children: [
                        {
                          name: "明远"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "芳钟",
              children: [
                {
                  name: "承初",
                  children: [
                    {
                      name: "先会",
                      children: [
                        {
                          name: "远"
                        },
                        {
                          name: "斌"
                        }
                      ]
                    },
                    {
                      name: "桂",
                      children: [
                        {
                          name: "世"
                        }
                      ]
                    },
                    {
                      name: "聪",
                      children: [
                        {
                          name: "楚"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "承楚",
                  children: [
                    {
                      name: "先峰",
                      children: [
                        {
                          name: "师"
                        }
                      ]
                    },
                    {
                      name: "先华",
                      children: [
                        {
                          name: "傲"
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "承月",
                  children: [
                    {
                      name: "庭"
                    }
                  ]
                }
              ]
            },
            {
              name: "芳蕃"
            }
          ]
        }
      ]
    };

    myChart.hideLoading();

    myChart.setOption(
      (option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
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
  methods: {}
};
</script>

<style lang="scss" scoped>
.genealogyNode {
  height: 100vh;
  // background: red;
}
</style>
