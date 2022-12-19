import { PageContainer } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

const BaiduMapBasic = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(BMapGL);
    let map = new BMapGL.Map(mapRef.current);
    // 设置坐标点(北京)
    let point = new BMapGL.Point(116.404, 39.915);
    // 设置地图中心点及缩放
    map.centerAndZoom(point, 5);
    // 允许滚轮缩放
    map.enableScrollWheelZoom(true);
  });

  return (
    <PageContainer>
      <div ref={mapRef} style={{ width: '800px', height: '600px' }}></div>
    </PageContainer>
  );
};
export default BaiduMapBasic;
