import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';
// import mapvgl from 'mapvgl'

const BaiduMapVGL = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMapGL.Point(116.404, 39.915);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 12);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);

    let view = new mapvgl.View({
      map: map,
    });
    let lineLayer = new mapvgl.LineRainbowLayer({
      style: 'road', // road, arrow, normal
      width: 15,
      color: ['#f00'],
    });
    view.addLayer(lineLayer);
    // 创建可视化图层，并添加到图层管理器中
    let waveLayer = new mapvgl.CircleLayer({
      // 绘制带波纹扩散的圆
      type: 'bubble',
      size: (size) => 3 * size,
      // 扩散半径，支持直接设置和回调两种形式，size为点的大小
      radius(size) {
        return 2 * size;
      },
      // 扩散时间
      duration: 1,
      // 渐隐时间
      trail: 1,
    });
    view.addLayer(waveLayer);
    // 添加规范化坐标数据
    let waveData = [
      {
        geometry: {
          type: 'Point',
          coordinates: [116.404, 39.93],
        },
        color: 'red',
        // 圆的半径
        size: 10,
      },
    ];
    waveLayer.setData(waveData);
  }, []);

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapVGL;
