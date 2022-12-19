import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

const BaiduMapBoundary = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(广州白云区)
    let point = new BMapGL.Point(113.35, 23.29);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 10);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);
    // 设置倾斜角度
    map.setTilt(45);
    // 设置边界，只展示广州市
    let bd = new BMapGL.Boundary();
    bd.get('广州市', function (rs) {
      // 绘制行政区
      for (let i = 0; i < rs.boundaries.length; i++) {
        let xyArr = rs.boundaries[i].split(';');
        // 边界点位信息
        let ptArr = [];
        for (let j = 0; j < xyArr.length; j++) {
          let tmp = xyArr[j].split(',');
          let pt = new BMapGL.Point(tmp[0], tmp[1]);
          ptArr.push(pt);
        }
        let mapmask = new BMapGL.MapMask(ptArr, {
          isBuildingMask: true,
          isPoiMask: true,
          isMapMask: true,
          showRegion: 'inside',
          topFillColor: '#042a37',
          topFillOpacity: 0.5,
          sideFillColor: '#042a37',
          sideFillOpacity: 0.9,
        });
        map.addOverlay(mapmask);
        // 自定义边界线
        let border = new BMapGL.Polyline(ptArr, {
          strokeColor: '#a8e3f2',
          strokeWeight: 3,
          strokeOpacity: 1,
        });
        map.addOverlay(border);
      }
    });
    // 在白云区绘制镂空面
    bd.get('广州市白云区', function (rs) {
      let hole = new BMapGL.Polygon(rs.boundaries, {
        fillColor: 'blue',
        fillOpacity: 0.2,
      });
      map.addOverlay(hole);
    });
    // 在从化区添加3d棱柱效果
    bd.get('广州市从化区', function (rs) {
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
        let prism = new BMapGL.Prism(path, 5000, {
          topFillColor: '#5679ea',
          topFillOpacity: 0.5,
          sideFillColor: '#5679ea',
          sideFillOpacity: 0.9,
        });
        map.addOverlay(prism);
      }
    });
  });

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapBoundary;
