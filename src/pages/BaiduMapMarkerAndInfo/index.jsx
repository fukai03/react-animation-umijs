import { PageContainer } from '@ant-design/pro-components';
import React, { useRef, useEffect } from 'react';
import car from '../../assets/image/car.jpeg';

const BaiduMapMarkerAndInfo = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new BMapGL.Map(mapRef.current);
    let point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 14);
    map.enableScrollWheelZoom(true);

    // 添加标记点
    let marker = new BMapGL.Marker(point, {
      title: '故宫博物院',
    });
    map.addOverlay(marker);

    // 添加信息窗口
    let opts = {
      width: 200, // 信息窗口宽度
      height: 100, // 信息窗口高度
      title: '故宫博物院', // 信息窗口标题
    };
    let infoWindow = new BMapGL.InfoWindow(
      '地址：北京市东城区王府井大街88号乐天银泰百货八层',
      opts,
    ); // 创建信息窗口对象
    marker.addEventListener('click', function () {
      map.openInfoWindow(infoWindow, point);
    });

    // 添加自定义标记点
    let point2 = new BMapGL.Point(116.417, 39.909);
    let myIcon = new BMapGL.Icon(car, new BMapGL.Size(52, 50));
    let markerCustomize = new BMapGL.Marker(point2, {
      icon: myIcon,
    });
    map.addOverlay(markerCustomize);

    // 添加直线
    let cp1 = new BMapGL.Point(116.399, 39.91);
    let cp2 = new BMapGL.Point(116.405, 39.92);
    let cp3 = new BMapGL.Point(116.41, 39.9);
    let polyline = new BMapGL.Polyline([cp1, cp2, cp3], {
      strokeColor: 'blue',
      strokeWeight: 2,
      strokeOpacity: 0.5,
    });
    map.addOverlay(polyline);
  }, []);

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: 800, height: 500 }}></div>
    </PageContainer>
  );
};
export default BaiduMapMarkerAndInfo;
