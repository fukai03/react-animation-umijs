import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

export default () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(BMapGL);
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMapGL.Point(116.404, 39.915);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 7);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);
    // 设置倾斜角度
    map.setTilt(50);
    let bd = new BMapGL.Boundary();
    let arr = ['北京', '上海', '四川'];
    arr.forEach(item => {
      bd.get(item, function (rs) {
        // 绘制行政区
        for (let i = 0; i < rs.boundaries.length; i++) {
          let count = rs.boundaries.length; //行政区域的点有多少个
          let pointArray = [];
          for (let i = 0; i < count; i++) {
            let path = [];
            let str = rs.boundaries[i].replace(' ', '');
            let points = str.split(';');
            for (let j = 0; j < points.length; j++) {
              let lng = points[j].split(',')[0];
              let lat = points[j].split(',')[1];
              path.push(new BMapGL.Point(lng, lat));
            }
            let prism = new BMapGL.Prism(path, 100000, {
              topFillColor: '#5679ea',
              topFillOpacity: 0.5,
              sideFillColor: '#5679ea',
              sideFillOpacity: 0.9,
            });
            map.addOverlay(prism);
          }
        }
      });
    })
  });

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '1200px', height: '900px' }}></div>
    </PageContainer>
  );
};
