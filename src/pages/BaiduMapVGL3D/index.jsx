import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';
import chongqingJson from '../../assets/Json/chongqing.json';

const BaiduMapVGL3D = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(BMapGL);
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMapGL.Point(106.542353, 29.565448);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 17);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);
    // 设置倾斜角度
    map.setTilt(80);

    let view = new mapvgl.View({
      map: map,
    });
    // console.log(chongqingJson);
    let data = chongqingJson;
    let polygons = [];
    let len = data.length;
    for (let i = 0; i < len; i++) {
      let line = data[i];
      let polygon = [];
      let pt = [line[1] * 512, line[2] * 512];
      for (let j = 3; j < line.length; j += 2) {
        pt[0] += line[j] / 100 / 2;
        pt[1] += line[j + 1] / 100 / 2;
        polygon.push([pt[0], pt[1]]);
      }

      polygons.push({
        geometry: {
          type: 'Polygon',
          coordinates: [polygon],
        },
        properties: {
          height: line[0] / 2,
        },
      });
    }

    let shaperLayer = new mapvgl.ShapeLayer({
      color: 'rgba(230, 230, 230, 1)',
      style: 'window',
      opacity: 1.0,
    });
    view.addLayer(shaperLayer);
    shaperLayer.setData(polygons);
  });

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapVGL3D;
