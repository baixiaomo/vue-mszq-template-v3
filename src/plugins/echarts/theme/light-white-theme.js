const theme = {
  color: [
    '#FC546D',
    '#2E9BFF',
    '#8D44FF',
    '#FFD12E',
    '#FF782E',
    '#ba68c8',
    '#d4a4eb',
    '#f06292',
    '#aed581',
    '#ffd54f',
    '#ff8a65',
    '#4dd0e1',
    '#ffb74d',
    '#9575cd',
    '#4db6ac',
    '#2196f3',
    '#76ff03'
  ],
  backgroundColor: 'transparent',
  textStyle: {},
  title: {
    left: 'center',
    textStyle: {
      fontSize: 16,
      color: '#353F55',
      fontWeight: 'normal'
    },
    subtextStyle: {
      color: '#dddddd'
    }
  },
  line: {
    itemStyle: {
      borderWidth: 1
    },
    lineStyle: {
      width: 1
    },
    symbolSize: '1',
    symbol: 'circle',
    smooth: true
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderWidth: '0',
        barBorderColor: '#ccc'
      },
      emphasis: {
        barBorderWidth: '0',
        barBorderColor: '#ccc'
      }
    }
  },
  pie: {
    itemStyle: {
      normal: {
        borderWidth: '0',
        borderColor: '#ccc'
      },
      emphasis: {
        borderWidth: '0',
        borderColor: '#ccc'
      }
    }
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: '0',
        borderColor: '#ccc'
      },
      emphasis: {
        borderWidth: '0',
        borderColor: '#ccc'
      }
    }
  },
  candlestick: {
    itemStyle: {
      color: '#fc546d',
      color0: '#aed581',
      borderColor: '#fc546d',
      borderColor0: '#aed581',
      borderWidth: '1'
    }
  },
  categoryAxis: { // 类目坐标轴
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(181,187,201,1)',
        opacity: 0.2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#353F55'
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [
          '#B5BBC9'
        ],
        type: 'dashed',
        opacity: 0.7
      }
    }
  },
  valueAxis: { // 数值坐标轴
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(181,187,201,1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#353F55'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: [
          '#B5BBC9'
        ],
        type: 'dashed',
        opacity: 0.7
      }
    }
  },
  logAxis: { // 对数坐标轴
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(181,187,201,1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(255,255,255,0.3)'
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [
          '#ff0'
        ]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  timeAxis: { // 时间坐标轴
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(181,187,201,1)'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: [
          '#ff0'
        ]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  toolbox: {
    feature: {
      dataZoom: {
        title: {
          zoom: '区域缩放',
          back: '区域还原'
        },
        icon: {
          zoom: 'path://M272 272V122a30 30 0 0 1 60 0V272h150a30 30 0 0 1 0 60H332v150a30 30 0 0 1-60 0V332H122a30 30 0 0 1 0-60H272z m300-150a30 30 0 0 1 0-60h255a135 135 0 0 1 135 135v630a135 135 0 0 1-135 135H197A135 135 0 0 1 62 827V572a30 30 0 0 1 60 0v255c0 41.4 33.6 75 75 75h630c41.4 0 75-33.6 75-75V197c0-41.4-33.6-75-75-75H572z',
          back: 'path://M368 498.62l70.92 67.44a26.04 26.04 0 0 1 0 37.74 28.8 28.8 0 0 1-39.6 0l-117-111.3a26.04 26.04 0 0 1-2.1-39.54L399.2 339.8a28.8 28.8 0 0 1 39.6 0 26.04 26.04 0 0 1 0 37.74l-71.22 67.8h300.3c46.44 0 84.12 35.76 84.12 79.98v79.98c0 14.76-12.6 26.7-28.02 26.7a27.36 27.36 0 0 1-28.08-26.7V525.32a27.36 27.36 0 0 0-28.02-26.7H368.06zM182 62h660a120 120 0 0 1 120 120v660a120 120 0 0 1-120 120h-660a120 120 0 0 1-120-120v-660a120 120 0 0 1 120-120z m0 60a60 60 0 0 0-60 60v660a60 60 0 0 0 60 60h660a60 60 0 0 0 60-60v-660a60 60 0 0 0-60-60h-660z'
        }
      },
      magicType: {
        title: {
          line: '折线图',
          bar: '柱状图',
          stack: '堆叠',
          tiled: '平铺'
        },
        icon: {
          line: 'path://M902.03000029 901.99999971a29.99999971 29.99999971 0 1 1 0 60.00000029h-780.00000029a29.99999971 29.99999971 0 1 1 0-60.00000029h780.00000029zM426.83000029 203.00000029L329.45000029 506.84000029a28.19999971 28.19999971 0 0 1-26.40000058 20.27999971H119.93000029c-15.41999971 0-27.96000029-13.43999971-27.96000029-29.99999971s12.53999971-29.99999971 27.96000029-30.00000058h163.08l123.17999942-384.84a27.54 27.54 0 0 1 53.82 3.30000029l112.80000058 551.27999971 86.99999942-290.75999942a27.47999971 27.47999971 0 0 1 53.70000029 1.19999971l61.67999971 239.82000029h128.82000058c15.41999971 0 27.96000029 13.43999971 27.95999942 29.99999971s-12.53999971 29.99999971-27.95999942 29.99999971h-150.12a28.37999971 28.37999971 0 0 1-27-22.01999942l-42.42000058-164.88-90 300.96a27.60000029 27.60000029 0 0 1-54-2.76000029L426.70999971 203.00000029z'
        }
      },
      myLine: {
        show: false,
        title: '折线图',
        icon: 'path://M902.03000029 901.99999971a29.99999971 29.99999971 0 1 1 0 60.00000029h-780.00000029a29.99999971 29.99999971 0 1 1 0-60.00000029h780.00000029zM426.83000029 203.00000029L329.45000029 506.84000029a28.19999971 28.19999971 0 0 1-26.40000058 20.27999971H119.93000029c-15.41999971 0-27.96000029-13.43999971-27.96000029-29.99999971s12.53999971-29.99999971 27.96000029-30.00000058h163.08l123.17999942-384.84a27.54 27.54 0 0 1 53.82 3.30000029l112.80000058 551.27999971 86.99999942-290.75999942a27.47999971 27.47999971 0 0 1 53.70000029 1.19999971l61.67999971 239.82000029h128.82000058c15.41999971 0 27.96000029 13.43999971 27.95999942 29.99999971s-12.53999971 29.99999971-27.95999942 29.99999971h-150.12a28.37999971 28.37999971 0 0 1-27-22.01999942l-42.42000058-164.88-90 300.96a27.60000029 27.60000029 0 0 1-54-2.76000029L426.70999971 203.00000029z'
      },
      myKline: {
        show: false,
        title: 'K线图',
        icon: 'path://M877.62499973 877.62499973a28.12499973 28.12499973 0 1 1 0 56.25000027h-731.24999946a28.12499973 28.12499973 0 1 1 0-56.25000027h731.24999946zM764.89999973 261.74375a44.04375 44.04375 0 0 1 28.35 41.175v305.66250027c0 18.78750027-11.8125 34.87499973-28.35 41.175v44.26874946a14.85 14.85 0 1 1-29.64374973 0v-43.64999973a44.04375 44.04375 0 0 1-30.09375027-41.79374973V302.91875c0-19.46250027 12.59999973-36.00000027 30.09375027-41.79374973v-43.65000054a14.85 14.85 0 1 1 29.64374973 0v44.26875027z m-237.20624973-56.25000027a44.04375 44.04375 0 0 1 28.35 41.175v361.91250054c0 18.78750027-11.8125 34.87499973-28.35 41.175v100.51874973a14.85 14.85 0 0 1-29.64374973 0V650.375a44.04375 44.04375 0 0 1-30.09375027-41.79374973V246.66874973c0-19.46250027 12.59999973-36.00000027 30.09375027-41.79374973V104.975a14.85 14.85 0 0 1 29.64374973 0V205.43750027z m-237.20624973 56.25000027a44.04375 44.04375 0 0 1 28.35 41.175v305.66250027c0 18.78750027-11.8125 34.87499973-28.35 41.175v44.26874946a14.85 14.85 0 0 1-29.64375054 0v-43.64999973A44.04375 44.04375 0 0 1 230.75000027 608.58125027V302.91875c0-19.46250027 12.59999973-36.00000027 30.09374946-41.79374973v-43.65000054a14.85 14.85 0 1 1 29.64375054 0v44.26875027z'
      }
    },
    iconStyle: {
      borderWidth: 0,
      normal: {
        borderColor: '#ffffff'
      }
    }
  },
  legend: {
    pageIconColor: '#487DFF',
    pageIconInactiveColor: '#DDDDDD',
    textStyle: {
      color: '#353F55'
    },
    pageTextStyle: {
      color: '#353F55'
    }
  },
  tooltip: {
    axisPointer: {
      label: {
        show: false
      },
      lineStyle: {
        color: '#8a8a8a',
        width: '1'
      },
      crossStyle: {
        color: '#8a8a8a',
        width: '1'
      }
    }
  },
  dataZoom: {
    type: 'slider',
    filterMode: 'weakFilter',
    dataBackgroundColor: '#F5F6FA',
    fillerColor: '#dedede',
    showDataShadow: false,
    height: 5,
    borderColor: 'transparent',
    backgroundColor: '#F5F6FA',
    handleIcon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATpJREFUSA3tVMtqhDAUTXyAwmzcCO7UbT+g+6GfMTvbflTp7PoZxb/oVt0JbtwUFETsPaHJ3JGSGdrOzkDw3EfOCSeJQmxjc+CvDkhNsCyLrOv6keKC8B19d7p25fdTSvlBvccsy14JL1inBJqmSeZ5fqN4j+Q/jNJ13UOapq2DnV9D7vu+0eXYJM/BHpzgllVVPRF4Oa+foiAIRBRFIgxD0batKiRJIoZhEH3fi3EcT80rRDY9e5QrVnkVcuKf6hDEvCBUeN8HajjIOxHHsVpskhbAhbquE2SN6Qa3Y6IbAQ9Xi5TuNT92AK8vWaT7bRaBG2dwpGkE9EIcnk3IRqw5wC1p97hJ7xRY3wCu5jRNai3HjGwNyzzPHxy8ODwKqpbrDh5rcuQ45j0Mq4cG7pv/KpjoBjcHfunAFyLbmzkqkj33AAAAAElFTkSuQmCC',
    handleSize: 20,
    handleColor: '#D4B381',
    handleStyle: {
      shadowBlur: 0
    },
    textStyle: {
      color: 'rgba(181,187,201,1)'
    },
    labelFormatter: ''
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: '#ffffff'
        }
      },
      emphasis: {
        textStyle: {
          color: '#ffffff'
        }
      }
    }
  }
}

export default theme
